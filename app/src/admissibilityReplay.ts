import type { AdmissibilityDecision } from './admissibility';
import type { AdmissibilityProfileSnapshot } from './admissibilitySnapshot';

export interface ReplayStep {
  step_index: number;
  decision_id: string;
  snapshot_id?: string;
  source_receipt_id: string;
  evidence_mode: string;
  decision_class: string;
  profile_update: string;
  reason: string;
}

export interface ReplayProfileSummary {
  accepted_evidence_modes: string[];
  emerging_evidence_modes: string[];
  modes_needing_support: string[];
  preferred_evidence_modes: string[];
}

export interface AdmissibilityReplayReport {
  report_id: string;
  generated_at: string;
  total_steps: number;
  replay_steps: ReplayStep[];
  final_profile_summary: ReplayProfileSummary;
  warnings: string[];
  non_capture_note: string;
}

function id(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values)).sort();
}

function remove(value: string, values: string[]): string[] {
  return values.filter((item) => item !== value);
}

function applyDecision(summary: ReplayProfileSummary, decision: AdmissibilityDecision): ReplayProfileSummary {
  const accepted = remove(decision.evidence_mode, summary.accepted_evidence_modes);
  const emerging = remove(decision.evidence_mode, summary.emerging_evidence_modes);
  const support = remove(decision.evidence_mode, summary.modes_needing_support);
  const preferred = remove(decision.evidence_mode, summary.preferred_evidence_modes);

  if (decision.profile_update === 'accepted') {
    return {
      accepted_evidence_modes: unique([...accepted, decision.evidence_mode]),
      emerging_evidence_modes: emerging,
      modes_needing_support: support,
      preferred_evidence_modes: unique([...preferred, decision.evidence_mode]),
    };
  }

  if (decision.profile_update === 'emerging') {
    return {
      accepted_evidence_modes: accepted,
      emerging_evidence_modes: unique([...emerging, decision.evidence_mode]),
      modes_needing_support: support,
      preferred_evidence_modes: preferred,
    };
  }

  if (decision.profile_update === 'needs-support') {
    return {
      accepted_evidence_modes: accepted,
      emerging_evidence_modes: emerging,
      modes_needing_support: unique([...support, decision.evidence_mode]),
      preferred_evidence_modes: preferred,
    };
  }

  return {
    accepted_evidence_modes: accepted,
    emerging_evidence_modes: emerging,
    modes_needing_support: support,
    preferred_evidence_modes: preferred,
  };
}

export function buildAdmissibilityReplayReport(
  decisions: AdmissibilityDecision[],
  snapshots: AdmissibilityProfileSnapshot[],
): AdmissibilityReplayReport {
  const warnings: string[] = [];
  const snapshotByDecisionId = new Map(snapshots.map((snapshot) => [snapshot.source_decision_id, snapshot]));
  let summary: ReplayProfileSummary = {
    accepted_evidence_modes: [],
    emerging_evidence_modes: [],
    modes_needing_support: [],
    preferred_evidence_modes: [],
  };

  const orderedDecisions = [...decisions].sort((left, right) => left.created_at.localeCompare(right.created_at));

  const replay_steps = orderedDecisions.map((decision, index) => {
    const snapshot = snapshotByDecisionId.get(decision.decision_id);
    if (!snapshot) {
      warnings.push(`No snapshot found for decision ${decision.decision_id}.`);
    }

    summary = applyDecision(summary, decision);

    return {
      step_index: index,
      decision_id: decision.decision_id,
      snapshot_id: snapshot?.snapshot_id,
      source_receipt_id: decision.source_receipt_id,
      evidence_mode: decision.evidence_mode,
      decision_class: decision.decision_class,
      profile_update: decision.profile_update,
      reason: decision.reason,
    };
  });

  return {
    report_id: id('admissibility-replay-report'),
    generated_at: new Date().toISOString(),
    total_steps: replay_steps.length,
    replay_steps,
    final_profile_summary: summary,
    warnings,
    non_capture_note: 'This replay explains evidence-mode profile evolution and must not become a learner ranking or fixed identity label.',
  };
}
