import type { CurriculumDepth, ParticipantGoalIntake } from './curriculum';

export type TeachingMethod =
  | 'DIRECT_EXPLANATION'
  | 'SOCRATIC_QUESTIONING'
  | 'DEMONSTRATION'
  | 'GUIDED_PRACTICE'
  | 'ADAPTIVE_EXAMPLES'
  | 'SIMULATION'
  | 'PROJECT_GUIDANCE'
  | 'SUPERVISED_EXPERIMENT'
  | 'CRITIQUE_REVISION'
  | 'SOURCE_DISCUSSION'
  | 'RESEARCH_METHOD_GUIDANCE'
  | 'EXPLANATION_BACK';

export interface GeneratedCurriculumUnit {
  unit_id: string;
  title: string;
  outcomes: string[];
  teaching_methods: TeachingMethod[];
  activities: string[];
  evidence_expectations: string[];
  progression_gate: string;
  optional_branches: string[];
}

export interface GeneratedCurriculum {
  schema_version: 'steglearn.generated-curriculum/v1';
  curriculum_id: string;
  curriculum_version: string;
  source_goal_intake: {
    goal_intake_id: string;
    goal_intake_version: string;
  };
  title: string;
  summary: string;
  requested_depth: CurriculumDepth;
  supportable_depth: CurriculumDepth;
  depth_rationale: string;
  objectives: string[];
  prerequisites: Array<{
    prerequisite_id: string;
    description: string;
    state: 'REQUIRED' | 'RECOMMENDED' | 'EVIDENCED_SATISFIED' | 'WAIVED_BY_AUTHORITY';
    evidence_refs: string[];
  }>;
  units: GeneratedCurriculumUnit[];
  completion_criteria: string[];
  review_binding: {
    review_package_required: boolean;
    material_change_requires_new_version: true;
    review_package_schema: 'steglearn.curriculum-review-package/v1';
  };
  teaching_policy: {
    teachable: boolean;
    teaching_must_bind_exact_version: true;
    adaptation_mode: 'VERSIONED_MATERIAL_CHANGES';
    human_authority_required: boolean;
  };
  non_capture_note: string;
}

function compactGoal(goal: string): string {
  const normalized = goal.trim().replace(/\s+/g, ' ');
  return normalized.length > 80 ? `${normalized.slice(0, 77)}...` : normalized;
}

export function createBoundedCurriculumDraft(goal: ParticipantGoalIntake): GeneratedCurriculum {
  const desired = compactGoal(goal.desired_outcome);
  const startingPointKnown = Boolean(goal.starting_point.summary?.trim());
  const humanAuthorityRequired = goal.learning_context.human_authority_required;

  return {
    schema_version: 'steglearn.generated-curriculum/v1',
    curriculum_id: `curriculum-${crypto.randomUUID()}`,
    curriculum_version: '1.0.0',
    source_goal_intake: {
      goal_intake_id: goal.goal_intake_id,
      goal_intake_version: goal.goal_intake_version,
    },
    title: `Governed learning path: ${desired}`,
    summary: `A bounded first curriculum draft for the admitted goal: ${desired}. This draft is intentionally reviewable before teaching and does not claim independent subject-matter accreditation or expert equivalence.`,
    requested_depth: goal.requested_depth,
    supportable_depth: goal.requested_depth,
    depth_rationale: startingPointKnown
      ? `The first draft preserves the participant-declared starting point and requested ${goal.requested_depth} depth. Review may add prerequisite work before teaching authorization.`
      : `The starting point is not yet evidenced. The draft preserves the requested ${goal.requested_depth} depth while requiring an initial orientation/checkpoint before deeper progression.`,
    objectives: [
      `Explain the central concepts required to pursue: ${desired}`,
      `Demonstrate the requested capability through evidence appropriate to the learning context.`,
      `Revise an explanation, artifact, or performance after review or observed feedback.`,
    ],
    prerequisites: startingPointKnown
      ? [
          {
            prerequisite_id: 'starting-point-review',
            description: `Review the declared starting point: ${goal.starting_point.summary}`,
            state: 'RECOMMENDED',
            evidence_refs: [],
          },
        ]
      : [
          {
            prerequisite_id: 'starting-point-orientation',
            description: 'Establish enough initial evidence to identify prerequisite knowledge without creating a fixed participant classification.',
            state: 'REQUIRED',
            evidence_refs: [],
          },
        ],
    units: [
      {
        unit_id: 'unit-001-foundations',
        title: 'Foundations and shared language',
        outcomes: [
          `Identify and explain foundational concepts needed for: ${desired}`,
          'Surface prerequisite gaps as revisable learning needs rather than permanent ability labels.',
        ],
        teaching_methods: ['DIRECT_EXPLANATION', 'SOCRATIC_QUESTIONING', 'EXPLANATION_BACK'],
        activities: [
          'Guided concept conversation',
          'Participant explanation-back',
          'Create a first evidence artifact or worked example',
        ],
        evidence_expectations: goal.evidence_expectations,
        progression_gate: 'Proceed when the participant can explain the foundational concepts and the applicable reviewer or teaching context accepts progression.',
        optional_branches: ['prerequisite-reinforcement'],
      },
      {
        unit_id: 'unit-002-guided-application',
        title: 'Guided application and adaptive practice',
        outcomes: [
          `Apply foundational concepts toward the desired outcome: ${desired}`,
          'Use observed results, questions, and revisions to improve performance or understanding.',
        ],
        teaching_methods: ['GUIDED_PRACTICE', 'ADAPTIVE_EXAMPLES', 'DEMONSTRATION', 'CRITIQUE_REVISION'],
        activities: [
          'Worked or demonstrated examples',
          'Guided practice at the requested depth',
          'Revision from observed evidence',
        ],
        evidence_expectations: goal.evidence_expectations,
        progression_gate: 'Proceed when required evidence shows successful application at the currently admitted depth.',
        optional_branches: ['additional-practice', 'deeper-application'],
      },
      {
        unit_id: 'unit-003-demonstrate-review',
        title: 'Demonstration, explanation, and review',
        outcomes: [
          `Demonstrate progress toward: ${desired}`,
          'Explain decisions, limitations, and at least one revision using retained evidence.',
        ],
        teaching_methods: ['PROJECT_GUIDANCE', 'EXPLANATION_BACK', 'CRITIQUE_REVISION'],
        activities: [
          'Complete a bounded demonstration, project, analysis, or equivalent artifact',
          'Explain the result and limitations',
          'Review evidence and decide whether to complete, revise, branch, or deepen the curriculum',
        ],
        evidence_expectations: goal.evidence_expectations,
        progression_gate: 'Complete or version the curriculum when the admitted review requirements and completion evidence are satisfied.',
        optional_branches: ['next-depth-curriculum'],
      },
    ],
    completion_criteria: [
      'All required progression gates are satisfied or explicitly revised in a new curriculum version.',
      'The participant produces evidence aligned with the admitted evidence expectations.',
      'The participant explains or demonstrates what changed during learning.',
      goal.review_requirements.curriculum_review_required
        ? 'The required curriculum/review authority completes the applicable review before completion or further teaching authorization.'
        : 'The applicable governed context records completion without implying external accreditation or credentialing.',
    ],
    review_binding: {
      review_package_required: goal.review_requirements.curriculum_review_required,
      material_change_requires_new_version: true,
      review_package_schema: 'steglearn.curriculum-review-package/v1',
    },
    teaching_policy: {
      teachable: true,
      teaching_must_bind_exact_version: true,
      adaptation_mode: 'VERSIONED_MATERIAL_CHANGES',
      human_authority_required: humanAuthorityRequired,
    },
    non_capture_note: 'This curriculum is a revisable learning path for one admitted goal/version and must not be treated as a permanent identity, credential, or fixed capability classification.',
  };
}
