import type { ArtifactRecord, LearningReceipt, PrivacyState } from './types';

export type EntityType =
  | 'learner'
  | 'parent-steward'
  | 'ai-scaffold'
  | 'session'
  | 'artifact'
  | 'receipt'
  | 'portfolio'
  | 'curriculum-reference'
  | 'teaching-agent';

export type LearningTransitionEventType =
  | 'wonder-captured'
  | 'activity-selected'
  | 'artifact-attached'
  | 'explanation-captured'
  | 'parent-reviewed'
  | 'receipt-accepted'
  | 'receipt-rejected'
  | 'portfolio-updated'
  | 'export-created'
  | 'ai-suggestion-created'
  | 'ai-suggestion-reviewed';

export interface LearningTransitionEvent {
  event_id: string;
  created_at: string;
  entity_id: string;
  entity_type: EntityType;
  event_type: LearningTransitionEventType;
  summary: string;
  source_record_ids: string[];
  evidence_notes: string[];
  reviewed_by?: string;
  privacy: PrivacyState;
  non_capture_note: string;
}

export interface EntityLearningHistory {
  history_id: string;
  created_at: string;
  updated_at: string;
  entity_id: string;
  entity_type: EntityType;
  event_ids: string[];
  source_receipt_ids: string[];
  source_artifact_ids: string[];
  summary_notes: string[];
  privacy: PrivacyState;
  non_capture_note: string;
}

function now(): string {
  return new Date().toISOString();
}

function id(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

export function createReceiptAcceptedEvent(
  receipt: LearningReceipt,
  artifacts: ArtifactRecord[],
): LearningTransitionEvent {
  return {
    event_id: id('event'),
    created_at: now(),
    entity_id: receipt.learner_id,
    entity_type: 'learner',
    event_type: 'receipt-accepted',
    summary: `Accepted learning receipt for wonder: ${receipt.wonder}`,
    source_record_ids: [receipt.receipt_id, ...artifacts.map((artifact) => artifact.artifact_id)],
    evidence_notes: [
      receipt.learner_explanation,
      receipt.parent_review.review_note,
      ...receipt.evidence_items.map((item) => item.description),
    ],
    reviewed_by: receipt.parent_review.reviewed_by,
    privacy: 'private',
    non_capture_note: 'This event supports reconstruction of a learning transition and must not be used as a fixed learner identity label.',
  };
}

export function updateEntityHistory(
  existing: EntityLearningHistory | null,
  event: LearningTransitionEvent,
  receipt: LearningReceipt,
  artifacts: ArtifactRecord[],
): EntityLearningHistory {
  const timestamp = now();

  if (!existing) {
    return {
      history_id: id('history'),
      created_at: timestamp,
      updated_at: timestamp,
      entity_id: event.entity_id,
      entity_type: event.entity_type,
      event_ids: [event.event_id],
      source_receipt_ids: [receipt.receipt_id],
      source_artifact_ids: artifacts.map((artifact) => artifact.artifact_id),
      summary_notes: [event.summary],
      privacy: 'private',
      non_capture_note: 'This history reconstructs learning evidence over time without declaring learner destiny.',
    };
  }

  return {
    ...existing,
    updated_at: timestamp,
    event_ids: Array.from(new Set([...existing.event_ids, event.event_id])),
    source_receipt_ids: Array.from(new Set([...existing.source_receipt_ids, receipt.receipt_id])),
    source_artifact_ids: Array.from(new Set([...existing.source_artifact_ids, ...artifacts.map((artifact) => artifact.artifact_id)])),
    summary_notes: [...existing.summary_notes, event.summary],
  };
}
