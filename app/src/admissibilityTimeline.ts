import type { AdmissibilityDecision, EvidenceMode, ProfileUpdateDisposition } from './admissibility';

export interface EvidenceModeTimelineEntry {
  evidence_mode: EvidenceMode;
  first_seen_at: string;
  last_seen_at: string;
  decision_count: number;
  accepted_count: number;
  emerging_count: number;
  needs_support_count: number;
  no_change_count: number;
  latest_profile_update: ProfileUpdateDisposition;
  source_decision_ids: string[];
  source_receipt_ids: string[];
}

export interface AdmissibilityTimelineSummary {
  generated_at: string;
  total_decisions: number;
  modes: EvidenceModeTimelineEntry[];
  non_capture_note: string;
}

function emptyEntry(decision: AdmissibilityDecision): EvidenceModeTimelineEntry {
  return {
    evidence_mode: decision.evidence_mode,
    first_seen_at: decision.created_at,
    last_seen_at: decision.created_at,
    decision_count: 0,
    accepted_count: 0,
    emerging_count: 0,
    needs_support_count: 0,
    no_change_count: 0,
    latest_profile_update: decision.profile_update,
    source_decision_ids: [],
    source_receipt_ids: [],
  };
}

export function buildAdmissibilityTimeline(decisions: AdmissibilityDecision[]): AdmissibilityTimelineSummary {
  const entries = new Map<EvidenceMode, EvidenceModeTimelineEntry>();

  for (const decision of decisions) {
    const existing = entries.get(decision.evidence_mode) ?? emptyEntry(decision);

    existing.first_seen_at = existing.first_seen_at < decision.created_at ? existing.first_seen_at : decision.created_at;
    existing.last_seen_at = existing.last_seen_at > decision.created_at ? existing.last_seen_at : decision.created_at;
    existing.decision_count += 1;
    existing.latest_profile_update = decision.profile_update;
    existing.source_decision_ids.push(decision.decision_id);
    existing.source_receipt_ids.push(decision.source_receipt_id);

    if (decision.profile_update === 'accepted') existing.accepted_count += 1;
    if (decision.profile_update === 'emerging') existing.emerging_count += 1;
    if (decision.profile_update === 'needs-support') existing.needs_support_count += 1;
    if (decision.profile_update === 'no-change') existing.no_change_count += 1;

    entries.set(decision.evidence_mode, existing);
  }

  return {
    generated_at: new Date().toISOString(),
    total_decisions: decisions.length,
    modes: Array.from(entries.values()).sort((left, right) => left.evidence_mode.localeCompare(right.evidence_mode)),
    non_capture_note: 'This timeline reconstructs admissibility handling over time and must not become a learner ranking or fixed identity label.',
  };
}
