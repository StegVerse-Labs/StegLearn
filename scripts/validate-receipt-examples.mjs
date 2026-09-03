import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '..');
const receiptDir = resolve(repoRoot, 'examples', 'receipts');

const allowedStatuses = new Set(['draft', 'reviewed', 'accepted', 'rejected', 'needs-follow-up']);
const allowedEvidenceTypes = new Set([
  'text',
  'parent_note',
  'learner_quote',
  'audio',
  'video',
  'image',
  'drawing',
  'build_artifact',
  'code',
  'game_map',
  'experiment_result',
  'outdoor_observation',
  'reading_reflection',
  'other',
]);

function requireString(value, label, errors) {
  if (typeof value !== 'string' || !value.trim()) errors.push(`${label} must be a non-empty string`);
}

function validateReceipt(receipt, file) {
  const errors = [];

  if (!receipt || typeof receipt !== 'object' || Array.isArray(receipt)) {
    return [`${file}: root must be an object`];
  }

  requireString(receipt.receipt_id, 'receipt_id', errors);
  requireString(receipt.created_at, 'created_at', errors);
  requireString(receipt.learner_id, 'learner_id', errors);
  requireString(receipt.wonder, 'wonder', errors);
  requireString(receipt.activity_summary, 'activity_summary', errors);
  requireString(receipt.learner_explanation, 'learner_explanation', errors);

  if (!receipt.parent_review || typeof receipt.parent_review !== 'object') {
    errors.push('parent_review must be an object');
  } else {
    requireString(receipt.parent_review.reviewed_by, 'parent_review.reviewed_by', errors);
    requireString(receipt.parent_review.reviewed_at, 'parent_review.reviewed_at', errors);
    requireString(receipt.parent_review.review_note, 'parent_review.review_note', errors);
    if (typeof receipt.parent_review.accepted !== 'boolean') {
      errors.push('parent_review.accepted must be boolean');
    }
  }

  if (!Array.isArray(receipt.subject_mappings) || receipt.subject_mappings.length === 0) {
    errors.push('subject_mappings must be a non-empty array');
  } else {
    receipt.subject_mappings.forEach((mapping, index) => {
      requireString(mapping?.subject, `subject_mappings[${index}].subject`, errors);
      requireString(mapping?.evidence_note, `subject_mappings[${index}].evidence_note`, errors);
    });
  }

  if (!Array.isArray(receipt.evidence_items)) {
    errors.push('evidence_items must be an array');
  } else {
    receipt.evidence_items.forEach((item, index) => {
      if (!allowedEvidenceTypes.has(item?.type)) {
        errors.push(`evidence_items[${index}].type is invalid`);
      }
      requireString(item?.description, `evidence_items[${index}].description`, errors);
      if (item?.uri !== undefined && typeof item.uri !== 'string') {
        errors.push(`evidence_items[${index}].uri must be a string when present`);
      }
    });
  }

  if (!allowedStatuses.has(receipt.status)) errors.push('status is invalid');

  if (receipt.next_questions !== undefined) {
    if (!Array.isArray(receipt.next_questions) || receipt.next_questions.some((item) => typeof item !== 'string')) {
      errors.push('next_questions must be an array of strings when present');
    }
  }

  if (receipt.non_capture_note !== undefined && typeof receipt.non_capture_note !== 'string') {
    errors.push('non_capture_note must be a string when present');
  }

  return errors.map((error) => `${file}: ${error}`);
}

const names = (await readdir(receiptDir))
  .filter((name) => name.endsWith('.json'))
  .sort();

const failures = [];

for (const name of names) {
  const path = resolve(receiptDir, name);
  let receipt;
  try {
    receipt = JSON.parse(await readFile(path, 'utf8'));
  } catch (error) {
    failures.push(`${name}: invalid JSON: ${error.message}`);
    continue;
  }
  failures.push(...validateReceipt(receipt, name));
}

if (failures.length) {
  console.error('Receipt example validation failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Validated ${names.length} receipt example(s).`);
