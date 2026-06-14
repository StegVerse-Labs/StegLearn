import type { AdmissibilityDecision, LearnerAdmissibilityProfile, ProfileUpdateDisposition } from './admissibility';
import type { PrivacyState } from './types';

export interface AdmissibilityProfileSnapshot {
  snapshot_id: string;
  created_at: string;
  learner_id: string;
  source_profile_id: string;
  source_receipt_id: string;
  source_decision_id: string;
  profile_update: ProfileUpdateDisposition;
  accepted_evidence_modes: string[];
  emerging_evidence_modes: string[];
  modes_needing_support: string[];
  preferred_evidence_modes: string[];
  review_note: string;
  privacy: PrivacyState;
  non_capture_note: string;
}

function id(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

export function createAdmissibilityProfileSnapshot(
  profile: LearnerAdmissibilityProfile,
  decision: AdmissibilityDecision,
): AdmissibilityProfileSnapshot {
  return {
    snapshot_id: id('admissibility-snapshot'),
    created_at: new Date().toISOString(),
    learner_id: profile.learner_id,
    source_profile_id: profile.profile_id,
    source_receipt_id: decision.source_receipt_id,
    source_decision_id: decision.decision_id,
    profile_update: decision.profile_update,
    accepted_evidence_modes: [...profile.accepted_evidence_modes],
    emerging_evidence_modes: [...profile.emerging_evidence_modes],
    modes_needing_support: [...profile.modes_needing_support],
    preferred_evidence_modes: [...profile.preferred_evidence_modes],
    review_note: profile.review_note,
    privacy: 'private',
    non_capture_note: 'This snapshot records one moment in profile evolution and must not become a fixed learner identity label.',
  };
}
