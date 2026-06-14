import type { LearnerAdmissibilityProfile } from './admissibility';
import type { AdmissibilityReplayReport } from './admissibilityReplay';

export interface AdmissibilityConsistencyDifference {
  field: string;
  stored: string[];
  replayed: string[];
}

export interface AdmissibilityConsistencyReport {
  report_id: string;
  generated_at: string;
  consistent: boolean;
  differences: AdmissibilityConsistencyDifference[];
  warnings: string[];
  non_capture_note: string;
}

function id(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function normalize(values: string[]): string[] {
  return Array.from(new Set(values)).sort();
}

function same(left: string[], right: string[]): boolean {
  const normalizedLeft = normalize(left);
  const normalizedRight = normalize(right);
  return JSON.stringify(normalizedLeft) === JSON.stringify(normalizedRight);
}

function compareField(
  field: string,
  stored: string[],
  replayed: string[],
): AdmissibilityConsistencyDifference | null {
  if (same(stored, replayed)) return null;

  return {
    field,
    stored: normalize(stored),
    replayed: normalize(replayed),
  };
}

export function buildAdmissibilityConsistencyReport(
  storedProfile: LearnerAdmissibilityProfile | null,
  replayReport: AdmissibilityReplayReport,
): AdmissibilityConsistencyReport {
  const warnings = [...replayReport.warnings];

  if (!storedProfile) {
    return {
      report_id: id('admissibility-consistency-report'),
      generated_at: new Date().toISOString(),
      consistent: replayReport.total_steps === 0,
      differences: [],
      warnings: replayReport.total_steps === 0 ? warnings : [...warnings, 'Replay exists but no stored profile is present.'],
      non_capture_note: 'This report checks record consistency only and must not become a learner ranking or fixed identity label.',
    };
  }

  const replayed = replayReport.final_profile_summary;
  const differences = [
    compareField('accepted_evidence_modes', storedProfile.accepted_evidence_modes, replayed.accepted_evidence_modes),
    compareField('emerging_evidence_modes', storedProfile.emerging_evidence_modes, replayed.emerging_evidence_modes),
    compareField('modes_needing_support', storedProfile.modes_needing_support, replayed.modes_needing_support),
    compareField('preferred_evidence_modes', storedProfile.preferred_evidence_modes, replayed.preferred_evidence_modes),
  ].filter((difference): difference is AdmissibilityConsistencyDifference => difference !== null);

  return {
    report_id: id('admissibility-consistency-report'),
    generated_at: new Date().toISOString(),
    consistent: differences.length === 0 && warnings.length === 0,
    differences,
    warnings,
    non_capture_note: 'This report checks record consistency only and must not become a learner ranking or fixed identity label.',
  };
}
