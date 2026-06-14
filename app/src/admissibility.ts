import type { PrivacyState } from './types';

export const evidenceModes = [
  'spoken-explanation',
  'written-explanation',
  'build-artifact',
  'drawing-artifact',
  'video-demonstration',
  'audio-reflection',
  'game-design',
  'physical-performance',
  'care-task',
  'conversation',
  'question-pattern',
  'revision-history',
  'observed-behavior',
  'parent-transcribed-language',
] as const;

export type EvidenceMode = (typeof evidenceModes)[number];
export type AdmissibilityDecisionClass = 'known-accepted' | 'new-emerging' | 'needs-support' | 'insufficient';

export interface LearnerAdmissibilityProfile {
  profile_id: string;
  created_at: string;
  updated_at: string;
  learner_id: string;
  preferred_evidence_modes: EvidenceMode[];
  accepted_evidence_modes: EvidenceMode[];
  emerging_evidence_modes: EvidenceMode[];
  modes_needing_support: EvidenceMode[];
  reviewed_by: string;
  review_note: string;
  privacy: PrivacyState;
  non_capture_note: string;
}

export interface AdmissibilityDecision {
  decision_id: string;
  created_at: string;
  learner_id: string;
  evidence_mode: EvidenceMode;
  decision_class: AdmissibilityDecisionClass;
  reason: string;
  reviewed_by: string;
  source_receipt_id: string;
  source_profile_id?: string;
  privacy: PrivacyState;
  non_capture_note: string;
}

function now(): string {
  return new Date().toISOString();
}

function id(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function uniqueModes(modes: EvidenceMode[]): EvidenceMode[] {
  return Array.from(new Set(modes));
}

export function createLearnerAdmissibilityProfile(
  learnerId: string,
  evidenceMode: EvidenceMode,
  reviewedBy: string,
  reviewNote: string,
): LearnerAdmissibilityProfile {
  const timestamp = now();

  return {
    profile_id: id('admissibility-profile'),
    created_at: timestamp,
    updated_at: timestamp,
    learner_id: learnerId,
    preferred_evidence_modes: [evidenceMode],
    accepted_evidence_modes: [evidenceMode],
    emerging_evidence_modes: [],
    modes_needing_support: [],
    reviewed_by: reviewedBy,
    review_note: reviewNote,
    privacy: 'private',
    non_capture_note: 'This profile describes current evidence modes and must not become a fixed learner identity label.',
  };
}

export function updateLearnerAdmissibilityProfile(
  existing: LearnerAdmissibilityProfile | null,
  learnerId: string,
  evidenceMode: EvidenceMode,
  reviewedBy: string,
  reviewNote: string,
): LearnerAdmissibilityProfile {
  if (!existing) {
    return createLearnerAdmissibilityProfile(learnerId, evidenceMode, reviewedBy, reviewNote);
  }

  return {
    ...existing,
    updated_at: now(),
    learner_id: learnerId,
    preferred_evidence_modes: uniqueModes([...existing.preferred_evidence_modes, evidenceMode]),
    accepted_evidence_modes: uniqueModes([...existing.accepted_evidence_modes, evidenceMode]),
    emerging_evidence_modes: existing.emerging_evidence_modes.filter((mode) => mode !== evidenceMode),
    modes_needing_support: existing.modes_needing_support.filter((mode) => mode !== evidenceMode),
    reviewed_by: reviewedBy,
    review_note: reviewNote,
  };
}

export function previewAdmissibilityDecision(
  profile: LearnerAdmissibilityProfile | null,
  evidenceMode: EvidenceMode,
  hasMinimumEvidence: boolean,
): { decision_class: AdmissibilityDecisionClass; reason: string } {
  if (!hasMinimumEvidence) {
    return {
      decision_class: 'insufficient',
      reason: 'The session needs a wonder plus learner explanation or evidence before it can be reviewed.',
    };
  }

  if (!profile) {
    return {
      decision_class: 'new-emerging',
      reason: 'No learner admissibility profile exists yet. Parent acceptance can establish this as an accepted evidence mode.',
    };
  }

  if (profile.accepted_evidence_modes.includes(evidenceMode)) {
    return {
      decision_class: 'known-accepted',
      reason: 'This evidence mode is already accepted for this learner through prior reviewed receipts.',
    };
  }

  if (profile.modes_needing_support.includes(evidenceMode)) {
    return {
      decision_class: 'needs-support',
      reason: 'This mode is known to need additional context or support for this learner.',
    };
  }

  return {
    decision_class: 'new-emerging',
    reason: 'This evidence mode is new or not yet established for this learner. Parent review can admit it without making it a fixed identity label.',
  };
}

export function createAdmissibilityDecision(
  learnerId: string,
  evidenceMode: EvidenceMode,
  decisionClass: AdmissibilityDecisionClass,
  reason: string,
  reviewedBy: string,
  sourceReceiptId: string,
  sourceProfileId?: string,
): AdmissibilityDecision {
  return {
    decision_id: id('admissibility-decision'),
    created_at: now(),
    learner_id: learnerId,
    evidence_mode: evidenceMode,
    decision_class: decisionClass,
    reason,
    reviewed_by: reviewedBy,
    source_receipt_id: sourceReceiptId,
    source_profile_id: sourceProfileId,
    privacy: 'private',
    non_capture_note: 'This decision applies to one learning event and must not become a fixed learner identity label.',
  };
}
