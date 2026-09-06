import type { ParticipantEntityType, ParticipantGoalIntake } from './curriculum';
import type { GeneratedCurriculum } from './curriculumGeneration';
import { canonicalSha256 } from './canonicalHash';

export type CurriculumReviewState = 'UNREVIEWED' | 'IN_REVIEW' | 'REVIEWED' | 'CHANGES_REQUESTED' | 'REJECTED' | 'APPROVED';
export type CurriculumReviewDecision = 'COMMENT' | 'REQUEST_CHANGES' | 'REJECT' | 'APPROVE';
export type CurriculumReviewAuthorityEffect = 'NONE' | 'ADVISORY' | 'REVISION_REQUEST' | 'APPROVAL_WITHIN_CONTEXT';

export interface CurriculumReviewRecord {
  reviewer_entity_id: string;
  reviewer_entity_type: ParticipantEntityType;
  review_role: string;
  decision: CurriculumReviewDecision;
  comments: string | null;
  reviewed_at: string | null;
  authority_effect: CurriculumReviewAuthorityEffect;
  reviewed_content_hash_sha256: string;
}

export interface CurriculumReviewPackage {
  schema_version: 'steglearn.curriculum-review-package/v1';
  curriculum_id: string;
  curriculum_version: string;
  learning_goal: string;
  requested_depth: string;
  starting_point_summary: string | null;
  constraints: string[];
  canonical_curriculum: {
    objectives: string[];
    prerequisites: string[];
    sequence: Array<{
      unit_id: string;
      title: string;
      outcomes: string[];
      activities: string[];
      evidence_expectations: string[];
    }>;
    completion_criteria: string[];
  };
  review_surface: {
    human_readable_available: true;
    machine_readable_available: true;
    content_hash_sha256: string;
    review_state: CurriculumReviewState;
    reviews: CurriculumReviewRecord[];
  };
  teaching_binding: {
    teachable: boolean;
    bound_curriculum_id: string;
    bound_curriculum_version: string;
    bound_content_hash_sha256: string;
    review_requirement: 'REVIEW_AVAILABLE' | 'REVIEW_REQUIRED' | 'APPROVAL_REQUIRED';
    material_change_requires_new_version: true;
  };
}

export function curriculumReviewContentEnvelope(reviewPackage: Pick<
  CurriculumReviewPackage,
  'curriculum_id' | 'curriculum_version' | 'learning_goal' | 'requested_depth' | 'starting_point_summary' | 'constraints' | 'canonical_curriculum'
>): object {
  return {
    curriculum_id: reviewPackage.curriculum_id,
    curriculum_version: reviewPackage.curriculum_version,
    learning_goal: reviewPackage.learning_goal,
    requested_depth: reviewPackage.requested_depth,
    starting_point_summary: reviewPackage.starting_point_summary,
    constraints: reviewPackage.constraints,
    canonical_curriculum: reviewPackage.canonical_curriculum,
  };
}

export function computeCurriculumReviewContentHash(reviewPackage: Pick<
  CurriculumReviewPackage,
  'curriculum_id' | 'curriculum_version' | 'learning_goal' | 'requested_depth' | 'starting_point_summary' | 'constraints' | 'canonical_curriculum'
>): string {
  return canonicalSha256(curriculumReviewContentEnvelope(reviewPackage));
}

export function verifyCurriculumReviewContentHash(reviewPackage: CurriculumReviewPackage): boolean {
  return computeCurriculumReviewContentHash(reviewPackage) === reviewPackage.review_surface.content_hash_sha256
    && reviewPackage.teaching_binding.bound_content_hash_sha256 === reviewPackage.review_surface.content_hash_sha256;
}

export function createCurriculumReviewPackage(
  goal: ParticipantGoalIntake,
  curriculum: GeneratedCurriculum,
): CurriculumReviewPackage {
  if (curriculum.source_goal_intake.goal_intake_id !== goal.goal_intake_id) {
    throw new Error('Curriculum does not bind the admitted goal intake ID.');
  }
  if (curriculum.source_goal_intake.goal_intake_version !== goal.goal_intake_version) {
    throw new Error('Curriculum does not bind the admitted goal intake version.');
  }

  const reviewRequirement = goal.review_requirements.curriculum_review_required
    ? 'APPROVAL_REQUIRED'
    : 'REVIEW_AVAILABLE';

  const reviewBase = {
    schema_version: 'steglearn.curriculum-review-package/v1' as const,
    curriculum_id: curriculum.curriculum_id,
    curriculum_version: curriculum.curriculum_version,
    learning_goal: goal.desired_outcome,
    requested_depth: curriculum.requested_depth,
    starting_point_summary: goal.starting_point.summary,
    constraints: [
      ...goal.constraints.time.map((constraint) => `time: ${constraint}`),
      ...goal.constraints.resources.map((constraint) => `resource: ${constraint}`),
      ...goal.constraints.safety_or_regulatory.map((constraint) => `safety/regulatory: ${constraint}`),
      ...goal.constraints.accessibility.map((constraint) => `accessibility: ${constraint}`),
    ],
    canonical_curriculum: {
      objectives: curriculum.objectives,
      prerequisites: curriculum.prerequisites.map((item) => `${item.state}: ${item.description}`),
      sequence: curriculum.units.map((unit) => ({
        unit_id: unit.unit_id,
        title: unit.title,
        outcomes: unit.outcomes,
        activities: unit.activities,
        evidence_expectations: unit.evidence_expectations,
      })),
      completion_criteria: curriculum.completion_criteria,
    },
  };

  const contentHash = computeCurriculumReviewContentHash(reviewBase);

  return {
    ...reviewBase,
    review_surface: {
      human_readable_available: true,
      machine_readable_available: true,
      content_hash_sha256: contentHash,
      review_state: 'UNREVIEWED',
      reviews: [],
    },
    teaching_binding: {
      teachable: curriculum.teaching_policy.teachable,
      bound_curriculum_id: curriculum.curriculum_id,
      bound_curriculum_version: curriculum.curriculum_version,
      bound_content_hash_sha256: contentHash,
      review_requirement: reviewRequirement,
      material_change_requires_new_version: true,
    },
  };
}

export function applyCurriculumReviewDecision(
  reviewPackage: CurriculumReviewPackage,
  review: {
    reviewerEntityId: string;
    reviewerEntityType: ParticipantEntityType;
    reviewRole: string;
    decision: CurriculumReviewDecision;
    comments?: string;
    authorityEffect: CurriculumReviewAuthorityEffect;
  },
): CurriculumReviewPackage {
  if (!review.reviewerEntityId.trim()) throw new Error('Reviewer entity ID is required.');
  if (!verifyCurriculumReviewContentHash(reviewPackage)) {
    throw new Error('Curriculum review content hash verification failed; a review decision cannot bind altered or mismatched content.');
  }
  if (review.decision === 'APPROVE' && review.authorityEffect !== 'APPROVAL_WITHIN_CONTEXT') {
    throw new Error('APPROVE requires APPROVAL_WITHIN_CONTEXT authority effect.');
  }
  if (review.decision !== 'APPROVE' && review.authorityEffect === 'APPROVAL_WITHIN_CONTEXT') {
    throw new Error('APPROVAL_WITHIN_CONTEXT may only accompany APPROVE.');
  }

  const state: CurriculumReviewState = review.decision === 'APPROVE'
    ? 'APPROVED'
    : review.decision === 'REJECT'
      ? 'REJECTED'
      : review.decision === 'REQUEST_CHANGES'
        ? 'CHANGES_REQUESTED'
        : 'REVIEWED';

  const record: CurriculumReviewRecord = {
    reviewer_entity_id: review.reviewerEntityId.trim(),
    reviewer_entity_type: review.reviewerEntityType,
    review_role: review.reviewRole.trim() || 'curriculum-reviewer',
    decision: review.decision,
    comments: review.comments?.trim() || null,
    reviewed_at: new Date().toISOString(),
    authority_effect: review.authorityEffect,
    reviewed_content_hash_sha256: reviewPackage.review_surface.content_hash_sha256,
  };

  return {
    ...reviewPackage,
    review_surface: {
      ...reviewPackage.review_surface,
      review_state: state,
      reviews: [...reviewPackage.review_surface.reviews, record],
    },
  };
}
