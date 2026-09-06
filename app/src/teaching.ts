import type { ParticipantGoalIntake } from './curriculum';
import type { GeneratedCurriculum } from './curriculumGeneration';
import type { CurriculumReviewPackage } from './curriculumReview';
import { verifyCurriculumReviewContentHash } from './curriculumReview';

export type TeachingSessionState = 'ACTIVE' | 'PAUSED' | 'COMPLETED';
export type TeachingEventType = 'SESSION_STARTED' | 'UNIT_PRESENTED' | 'UNIT_ADVANCED' | 'SESSION_PAUSED' | 'SESSION_COMPLETED';

export interface TeachingEvent {
  event_id: string;
  event_type: TeachingEventType;
  occurred_at: string;
  unit_id: string | null;
  description: string;
}

export interface TeachingSession {
  schema_version: 'steglearn.teaching-session/v1';
  teaching_session_id: string;
  participant_entity_id: string;
  curriculum_id: string;
  curriculum_version: string;
  curriculum_content_hash_sha256: string;
  review_state_at_start: CurriculumReviewPackage['review_surface']['review_state'];
  teaching_authority: {
    review_requirement: CurriculumReviewPackage['teaching_binding']['review_requirement'];
    human_authority_required: boolean;
    authority_entity_ids: string[];
  };
  state: TeachingSessionState;
  current_unit_id: string | null;
  started_at: string;
  updated_at: string;
  events: TeachingEvent[];
  non_capture_note: string;
}

function now(): string {
  return new Date().toISOString();
}

function event(type: TeachingEventType, unitId: string | null, description: string): TeachingEvent {
  return {
    event_id: `teaching-event-${crypto.randomUUID()}`,
    event_type: type,
    occurred_at: now(),
    unit_id: unitId,
    description,
  };
}

export function canStartTeaching(reviewPackage: CurriculumReviewPackage): { ok: boolean; reason: string } {
  if (!verifyCurriculumReviewContentHash(reviewPackage)) {
    return { ok: false, reason: 'Curriculum content hash or teaching hash binding does not verify.' };
  }
  if (!reviewPackage.teaching_binding.teachable) {
    return { ok: false, reason: 'The selected curriculum is not marked teachable.' };
  }
  if (reviewPackage.teaching_binding.review_requirement === 'APPROVAL_REQUIRED') {
    if (reviewPackage.review_surface.review_state !== 'APPROVED') {
      return { ok: false, reason: 'Teaching requires an APPROVED curriculum review state.' };
    }
    const approvedHash = reviewPackage.review_surface.content_hash_sha256;
    const hasMatchingApproval = reviewPackage.review_surface.reviews.some((review) =>
      review.decision === 'APPROVE'
      && review.authority_effect === 'APPROVAL_WITHIN_CONTEXT'
      && review.reviewed_content_hash_sha256 === approvedHash,
    );
    if (!hasMatchingApproval) {
      return { ok: false, reason: 'Teaching requires an approval explicitly bound to the current curriculum content hash.' };
    }
  }
  if (reviewPackage.review_surface.review_state === 'REJECTED' || reviewPackage.review_surface.review_state === 'CHANGES_REQUESTED') {
    return { ok: false, reason: `Teaching cannot start while review state is ${reviewPackage.review_surface.review_state}.` };
  }
  return { ok: true, reason: 'Teaching may start within the recorded authority, exact curriculum version, and verified content hash.' };
}

export function startTeachingSession(
  goal: ParticipantGoalIntake,
  curriculum: GeneratedCurriculum,
  reviewPackage: CurriculumReviewPackage,
): TeachingSession {
  if (reviewPackage.curriculum_id !== curriculum.curriculum_id || reviewPackage.curriculum_version !== curriculum.curriculum_version) {
    throw new Error('Review package does not bind the exact generated curriculum version.');
  }
  if (reviewPackage.teaching_binding.bound_curriculum_id !== curriculum.curriculum_id || reviewPackage.teaching_binding.bound_curriculum_version !== curriculum.curriculum_version) {
    throw new Error('Teaching binding does not match the exact generated curriculum version.');
  }
  if (reviewPackage.teaching_binding.bound_content_hash_sha256 !== reviewPackage.review_surface.content_hash_sha256) {
    throw new Error('Teaching binding does not match the reviewed curriculum content hash.');
  }

  const readiness = canStartTeaching(reviewPackage);
  if (!readiness.ok) throw new Error(readiness.reason);

  const firstUnit = curriculum.units[0] ?? null;
  const startedAt = now();
  const events: TeachingEvent[] = [
    event('SESSION_STARTED', firstUnit?.unit_id ?? null, `Teaching session started for ${curriculum.curriculum_id}@${curriculum.curriculum_version} hash ${reviewPackage.review_surface.content_hash_sha256}.`),
  ];
  if (firstUnit) {
    events.push(event('UNIT_PRESENTED', firstUnit.unit_id, `Presented unit: ${firstUnit.title}.`));
  }

  return {
    schema_version: 'steglearn.teaching-session/v1',
    teaching_session_id: `teaching-${crypto.randomUUID()}`,
    participant_entity_id: goal.participant.entity_id,
    curriculum_id: curriculum.curriculum_id,
    curriculum_version: curriculum.curriculum_version,
    curriculum_content_hash_sha256: reviewPackage.review_surface.content_hash_sha256,
    review_state_at_start: reviewPackage.review_surface.review_state,
    teaching_authority: {
      review_requirement: reviewPackage.teaching_binding.review_requirement,
      human_authority_required: goal.learning_context.human_authority_required,
      authority_entity_ids: goal.learning_context.authority_entity_ids,
    },
    state: 'ACTIVE',
    current_unit_id: firstUnit?.unit_id ?? null,
    started_at: startedAt,
    updated_at: startedAt,
    events,
    non_capture_note: 'This session records teaching activity for one curriculum version and reviewed content hash and must not be treated as a permanent participant identity or credential.',
  };
}

export function advanceTeachingSession(session: TeachingSession, curriculum: GeneratedCurriculum): TeachingSession {
  if (session.curriculum_id !== curriculum.curriculum_id || session.curriculum_version !== curriculum.curriculum_version) {
    throw new Error('Teaching session cannot advance against a different curriculum ID/version.');
  }
  if (session.state !== 'ACTIVE') throw new Error('Only an ACTIVE teaching session can advance.');

  const currentIndex = curriculum.units.findIndex((unit) => unit.unit_id === session.current_unit_id);
  const nextUnit = curriculum.units[currentIndex + 1] ?? null;
  const timestamp = now();

  if (!nextUnit) {
    return {
      ...session,
      state: 'COMPLETED',
      current_unit_id: null,
      updated_at: timestamp,
      events: [...session.events, event('SESSION_COMPLETED', session.current_unit_id, 'All curriculum units have been presented in this bounded teaching session.')],
    };
  }

  return {
    ...session,
    current_unit_id: nextUnit.unit_id,
    updated_at: timestamp,
    events: [
      ...session.events,
      event('UNIT_ADVANCED', nextUnit.unit_id, `Advanced to unit: ${nextUnit.title}.`),
      event('UNIT_PRESENTED', nextUnit.unit_id, `Presented unit: ${nextUnit.title}.`),
    ],
  };
}
