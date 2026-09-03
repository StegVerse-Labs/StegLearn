import type { AdmissibilityDecision, EvidenceMode } from './admissibility';
import type { LearningReceipt } from './types';

const earlyLanguageModes = new Set<EvidenceMode>([
  'spoken-explanation',
  'conversation',
  'question-pattern',
  'revision-history',
  'observed-behavior',
  'parent-transcribed-language',
]);

export interface EarlyLanguageObservation {
  receipt_id: string;
  created_at: string;
  learner_id: string;
  evidence_mode: EvidenceMode | 'unclassified';
  activity_summary: string;
  learner_explanation: string;
  parent_review_note: string;
  next_questions: string[];
}

export interface EarlyLanguageComparison {
  learner_id: string | null;
  observation_count: number;
  revision_event_count: number;
  first_observed_at: string | null;
  latest_observed_at: string | null;
  observations: EarlyLanguageObservation[];
  comparison_prompts: string[];
  non_capture_note: string;
}

export function buildEarlyLanguageComparison(
  receipts: LearningReceipt[],
  decisions: AdmissibilityDecision[],
): EarlyLanguageComparison {
  const modeByReceipt = new Map(
    decisions.map((decision) => [decision.source_receipt_id, decision.evidence_mode] as const),
  );

  const observations = receipts
    .map((receipt): EarlyLanguageObservation | null => {
      const mode = modeByReceipt.get(receipt.receipt_id);
      const languageMapped = receipt.subject_mappings.some((mapping) =>
        mapping.subject.toLowerCase().includes('language'),
      );
      const eligible = (mode && earlyLanguageModes.has(mode)) || languageMapped;

      if (!eligible) return null;

      return {
        receipt_id: receipt.receipt_id,
        created_at: receipt.created_at,
        learner_id: receipt.learner_id,
        evidence_mode: mode ?? 'unclassified',
        activity_summary: receipt.activity_summary,
        learner_explanation: receipt.learner_explanation,
        parent_review_note: receipt.parent_review.review_note,
        next_questions: receipt.next_questions ?? [],
      };
    })
    .filter((entry): entry is EarlyLanguageObservation => entry !== null)
    .sort((a, b) => a.created_at.localeCompare(b.created_at));

  const revisionEventCount = observations.filter(
    (entry) =>
      entry.evidence_mode === 'revision-history' ||
      /revis|correct|change|alternative/i.test(
        `${entry.activity_summary} ${entry.parent_review_note}`,
      ),
  ).length;

  return {
    learner_id: observations[0]?.learner_id ?? null,
    observation_count: observations.length,
    revision_event_count: revisionEventCount,
    first_observed_at: observations[0]?.created_at ?? null,
    latest_observed_at: observations.at(-1)?.created_at ?? null,
    observations,
    comparison_prompts: [
      'Are self-corrections becoming more frequent or more precise?',
      'Are category boundaries becoming more specific?',
      'Does the learner maintain a referent while revising an attribute?',
      'Are explanations becoming longer, more compositional, or more explicit?',
      'Are hesitation markers appearing before corrections or alternatives?',
    ],
    non_capture_note:
      'This comparison reconstructs reviewed language evidence over time and must not be used as a fixed developmental or ability label.',
  };
}
