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
    reviewed_by: reviewedBy,
    review_note: reviewNote,
  };
}
