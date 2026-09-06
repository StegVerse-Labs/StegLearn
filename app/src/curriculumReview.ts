import type { ParticipantGoalIntake } from './curriculum';
import type { GeneratedCurriculum } from './curriculumGeneration';

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
    content_hash_sha256: null;
    review_state: 'UNREVIEWED';
    reviews: [];
  };
  teaching_binding: {
    teachable: boolean;
    bound_curriculum_id: string;
    bound_curriculum_version: string;
    review_requirement: 'REVIEW_AVAILABLE' | 'REVIEW_REQUIRED' | 'APPROVAL_REQUIRED';
    material_change_requires_new_version: true;
  };
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

  return {
    schema_version: 'steglearn.curriculum-review-package/v1',
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
    review_surface: {
      human_readable_available: true,
      machine_readable_available: true,
      content_hash_sha256: null,
      review_state: 'UNREVIEWED',
      reviews: [],
    },
    teaching_binding: {
      teachable: curriculum.teaching_policy.teachable,
      bound_curriculum_id: curriculum.curriculum_id,
      bound_curriculum_version: curriculum.curriculum_version,
      review_requirement: reviewRequirement,
      material_change_requires_new_version: true,
    },
  };
}
