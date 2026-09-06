export type CurriculumDepth =
  | 'ORIENTATION'
  | 'FOUNDATIONAL'
  | 'BEGINNER'
  | 'INTERMEDIATE'
  | 'ADVANCED'
  | 'VOCATIONAL_APPLIED'
  | 'UNDERGRADUATE_EQUIVALENT'
  | 'GRADUATE_EQUIVALENT'
  | 'DOCTORAL_RESEARCH_EQUIVALENT'
  | 'POST_DOCTORAL_FRONTIER';

export type ParticipantEntityType = 'HUMAN' | 'AI' | 'ORGANIZATION' | 'OTHER_ADMITTED_ENTITY';
export type ParticipantAdmissionState = 'HUMAN_CONTEXT' | 'ADMITTED_AI' | 'ADMITTED_ORGANIZATION' | 'OTHER_ADMITTED';
export type LearningContextMode = 'TEACHER_LED' | 'PARENT_STEWARD_SUPERVISED' | 'INDIVIDUAL_GOVERNED' | 'AI_PARTICIPANT';

export interface ParticipantGoalIntake {
  schema_version: 'steglearn.participant-goal-intake/v1';
  goal_intake_id: string;
  goal_intake_version: string;
  participant: {
    entity_id: string;
    entity_type: ParticipantEntityType;
    admission_state: ParticipantAdmissionState;
  };
  desired_outcome: string;
  requested_depth: CurriculumDepth;
  starting_point: {
    basis: 'PARTICIPANT_DECLARED';
    summary: string | null;
    evidence_refs: string[];
  };
  learning_context: {
    mode: LearningContextMode;
    human_authority_required: boolean;
    authority_entity_ids: string[];
  };
  constraints: {
    time: string[];
    resources: string[];
    safety_or_regulatory: string[];
    accessibility: string[];
  };
  evidence_expectations: string[];
  review_requirements: {
    curriculum_review_required: boolean;
    reviewer_entity_ids: string[];
  };
  non_capture_note: string;
}

export const curriculumDepths: CurriculumDepth[] = [
  'ORIENTATION',
  'FOUNDATIONAL',
  'BEGINNER',
  'INTERMEDIATE',
  'ADVANCED',
  'VOCATIONAL_APPLIED',
  'UNDERGRADUATE_EQUIVALENT',
  'GRADUATE_EQUIVALENT',
  'DOCTORAL_RESEARCH_EQUIVALENT',
  'POST_DOCTORAL_FRONTIER',
];

export const participantEntityTypes: ParticipantEntityType[] = [
  'HUMAN',
  'AI',
  'ORGANIZATION',
  'OTHER_ADMITTED_ENTITY',
];

export const learningContextModes: LearningContextMode[] = [
  'TEACHER_LED',
  'PARENT_STEWARD_SUPERVISED',
  'INDIVIDUAL_GOVERNED',
  'AI_PARTICIPANT',
];

function admissionStateFor(entityType: ParticipantEntityType): ParticipantAdmissionState {
  if (entityType === 'HUMAN') return 'HUMAN_CONTEXT';
  if (entityType === 'AI') return 'ADMITTED_AI';
  if (entityType === 'ORGANIZATION') return 'ADMITTED_ORGANIZATION';
  return 'OTHER_ADMITTED';
}

export function createParticipantGoalIntake(input: {
  entityId: string;
  entityType: ParticipantEntityType;
  desiredOutcome: string;
  requestedDepth: CurriculumDepth;
  startingPoint: string;
  contextMode: LearningContextMode;
  authorityEntityIds: string[];
  timeConstraints: string[];
  resourceConstraints: string[];
  evidenceExpectations: string[];
  curriculumReviewRequired: boolean;
  reviewerEntityIds: string[];
}): ParticipantGoalIntake {
  return {
    schema_version: 'steglearn.participant-goal-intake/v1',
    goal_intake_id: `goal-${crypto.randomUUID()}`,
    goal_intake_version: '1.0.0',
    participant: {
      entity_id: input.entityId.trim(),
      entity_type: input.entityType,
      admission_state: admissionStateFor(input.entityType),
    },
    desired_outcome: input.desiredOutcome.trim(),
    requested_depth: input.requestedDepth,
    starting_point: {
      basis: 'PARTICIPANT_DECLARED',
      summary: input.startingPoint.trim() || null,
      evidence_refs: [],
    },
    learning_context: {
      mode: input.contextMode,
      human_authority_required: input.contextMode === 'TEACHER_LED' || input.contextMode === 'PARENT_STEWARD_SUPERVISED',
      authority_entity_ids: input.authorityEntityIds,
    },
    constraints: {
      time: input.timeConstraints,
      resources: input.resourceConstraints,
      safety_or_regulatory: [],
      accessibility: [],
    },
    evidence_expectations: input.evidenceExpectations,
    review_requirements: {
      curriculum_review_required: input.curriculumReviewRequired,
      reviewer_entity_ids: input.reviewerEntityIds,
    },
    non_capture_note: 'This goal intake records a requested learning direction and must not be treated as a fixed participant identity or permanent ability classification.',
  };
}
