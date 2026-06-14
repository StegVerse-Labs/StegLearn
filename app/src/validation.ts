import type { ArtifactRecord, LearnerSession, LearningReceipt, PortfolioRecord } from './types';
import type { EntityLearningHistory, LearningTransitionEvent } from './history';

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

function requiredString(value: string | undefined, label: string, errors: string[]): void {
  if (!value || !value.trim()) errors.push(`${label} is required.`);
}

export function validateSessionForReview(session: LearnerSession, artifacts: ArtifactRecord[]): ValidationResult {
  const errors: string[] = [];

  requiredString(session.session_id, 'Session id', errors);
  requiredString(session.learner_id, 'Learner id', errors);
  requiredString(session.wonder, 'Wonder', errors);

  if (!session.learner_explanation.trim() && artifacts.length === 0) {
    errors.push('Learner explanation or at least one artifact is required.');
  }

  return { ok: errors.length === 0, errors };
}

export function validateReceipt(receipt: LearningReceipt): ValidationResult {
  const errors: string[] = [];

  requiredString(receipt.receipt_id, 'Receipt id', errors);
  requiredString(receipt.created_at, 'Receipt created_at', errors);
  requiredString(receipt.learner_id, 'Receipt learner id', errors);
  requiredString(receipt.wonder, 'Receipt wonder', errors);
  requiredString(receipt.activity_summary, 'Receipt activity summary', errors);
  requiredString(receipt.learner_explanation, 'Receipt learner explanation', errors);
  requiredString(receipt.parent_review.reviewed_by, 'Parent reviewer', errors);
  requiredString(receipt.parent_review.reviewed_at, 'Parent reviewed_at', errors);
  requiredString(receipt.parent_review.review_note, 'Parent review note', errors);

  if (!receipt.parent_review.accepted) errors.push('Receipt must be accepted by parent review.');
  if (receipt.status !== 'accepted') errors.push('Receipt status must be accepted.');
  if (receipt.subject_mappings.length === 0) errors.push('At least one subject mapping is required.');

  return { ok: errors.length === 0, errors };
}

export function validatePortfolio(portfolio: PortfolioRecord): ValidationResult {
  const errors: string[] = [];

  requiredString(portfolio.portfolio_id, 'Portfolio id', errors);
  requiredString(portfolio.learner_id, 'Portfolio learner id', errors);
  if (portfolio.receipt_ids.length === 0) errors.push('Portfolio must contain at least one accepted receipt id.');
  if (portfolio.privacy !== 'private' && portfolio.privacy !== 'parent-approved-export' && portfolio.privacy !== 'public') {
    errors.push('Portfolio privacy state is invalid.');
  }

  return { ok: errors.length === 0, errors };
}

export function validateTransitionEvent(event: LearningTransitionEvent): ValidationResult {
  const errors: string[] = [];

  requiredString(event.event_id, 'Event id', errors);
  requiredString(event.entity_id, 'Event entity id', errors);
  requiredString(event.summary, 'Event summary', errors);
  if (event.source_record_ids.length === 0) errors.push('Event must reference at least one source record.');

  return { ok: errors.length === 0, errors };
}

export function validateEntityHistory(history: EntityLearningHistory): ValidationResult {
  const errors: string[] = [];

  requiredString(history.history_id, 'History id', errors);
  requiredString(history.entity_id, 'History entity id', errors);
  if (history.event_ids.length === 0) errors.push('History must contain at least one event id.');

  return { ok: errors.length === 0, errors };
}
