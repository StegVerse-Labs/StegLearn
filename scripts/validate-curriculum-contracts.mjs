import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(ROOT, relative), 'utf8'));
const fail = (message) => { throw new Error(message); };
const requireString = (value, label) => {
  if (typeof value !== 'string' || value.trim() === '') fail(`${label} must be a non-empty string`);
};
const requireArray = (value, label, min = 0) => {
  if (!Array.isArray(value) || value.length < min) fail(`${label} must be an array with at least ${min} item(s)`);
};
const semver = /^[0-9]+\.[0-9]+\.[0-9]+$/;
const sha256Pattern = '^[a-f0-9]{64}$';

function canonical(value) {
  if (value === null || typeof value !== 'object') {
    if (typeof value === 'number' && !Number.isFinite(value)) fail('canonical JSON does not permit non-finite numbers');
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
}

function sha256(value) {
  return crypto.createHash('sha256').update(canonical(value), 'utf8').digest('hex');
}

const goal = readJson('examples/curricula/python-foundations-goal-intake.json');
const curriculum = readJson('examples/curricula/python-foundations-generated-curriculum.json');
const goalSchema = readJson('schemas/participant-goal-intake.schema.json');
const curriculumSchema = readJson('schemas/generated-curriculum.schema.json');
const reviewSchema = readJson('schemas/curriculum-review-package.schema.json');
const teachingSchema = readJson('schemas/teaching-session.schema.json');

if (goalSchema.properties?.schema_version?.const !== 'steglearn.participant-goal-intake/v1') fail('participant goal schema version contract drifted');
if (curriculumSchema.properties?.schema_version?.const !== 'steglearn.generated-curriculum/v1') fail('generated curriculum schema version contract drifted');
if (reviewSchema.properties?.schema_version?.const !== 'steglearn.curriculum-review-package/v1') fail('curriculum review package schema version contract drifted');
if (teachingSchema.properties?.schema_version?.const !== 'steglearn.teaching-session/v1') fail('teaching session schema version contract drifted');

if (!reviewSchema.properties?.review_surface?.required?.includes('content_hash_sha256')) fail('review surface must require content_hash_sha256');
if (reviewSchema.properties?.review_surface?.properties?.content_hash_sha256?.pattern !== sha256Pattern) fail('review content hash must be a lowercase SHA-256 hex string');
const reviewItem = reviewSchema.properties?.review_surface?.properties?.reviews?.items;
if (!reviewItem?.required?.includes('reviewed_content_hash_sha256')) fail('review decision must bind reviewed_content_hash_sha256');
if (reviewItem?.properties?.reviewed_content_hash_sha256?.pattern !== sha256Pattern) fail('review decision hash must be a lowercase SHA-256 hex string');
if (!reviewSchema.properties?.teaching_binding?.required?.includes('bound_content_hash_sha256')) fail('teaching binding must require bound_content_hash_sha256');
if (reviewSchema.properties?.teaching_binding?.properties?.bound_content_hash_sha256?.pattern !== sha256Pattern) fail('teaching binding hash must be a lowercase SHA-256 hex string');
if (!teachingSchema.required?.includes('curriculum_content_hash_sha256')) fail('teaching session must require curriculum_content_hash_sha256');
if (teachingSchema.properties?.curriculum_content_hash_sha256?.pattern !== sha256Pattern) fail('teaching session curriculum hash must be a lowercase SHA-256 hex string');

if (goal.schema_version !== 'steglearn.participant-goal-intake/v1') fail('goal example schema_version mismatch');
requireString(goal.goal_intake_id, 'goal.goal_intake_id');
if (!semver.test(goal.goal_intake_version ?? '')) fail('goal.goal_intake_version must be semver');
requireString(goal.desired_outcome, 'goal.desired_outcome');
requireString(goal.participant?.entity_id, 'goal.participant.entity_id');
requireString(goal.participant?.entity_type, 'goal.participant.entity_type');
requireString(goal.participant?.admission_state, 'goal.participant.admission_state');
requireString(goal.learning_context?.mode, 'goal.learning_context.mode');
if (typeof goal.learning_context?.human_authority_required !== 'boolean') fail('goal.learning_context.human_authority_required must be boolean');
requireArray(goal.evidence_expectations, 'goal.evidence_expectations', 1);

if (curriculum.schema_version !== 'steglearn.generated-curriculum/v1') fail('curriculum example schema_version mismatch');
requireString(curriculum.curriculum_id, 'curriculum.curriculum_id');
if (!semver.test(curriculum.curriculum_version ?? '')) fail('curriculum.curriculum_version must be semver');
if (curriculum.source_goal_intake?.goal_intake_id !== goal.goal_intake_id) fail('curriculum must bind the exact goal_intake_id');
if (curriculum.source_goal_intake?.goal_intake_version !== goal.goal_intake_version) fail('curriculum must bind the exact goal_intake_version');
if (curriculum.requested_depth !== goal.requested_depth) fail('generated curriculum requested_depth must preserve the admitted goal request');
requireArray(curriculum.objectives, 'curriculum.objectives', 1);
requireArray(curriculum.units, 'curriculum.units', 1);
requireArray(curriculum.completion_criteria, 'curriculum.completion_criteria', 1);

const unitIds = new Set();
for (const unit of curriculum.units) {
  requireString(unit.unit_id, 'curriculum.units[].unit_id');
  if (unitIds.has(unit.unit_id)) fail(`duplicate curriculum unit_id: ${unit.unit_id}`);
  unitIds.add(unit.unit_id);
  requireString(unit.title, `unit ${unit.unit_id}.title`);
  requireArray(unit.outcomes, `unit ${unit.unit_id}.outcomes`, 1);
  requireArray(unit.teaching_methods, `unit ${unit.unit_id}.teaching_methods`, 1);
  requireArray(unit.evidence_expectations, `unit ${unit.unit_id}.evidence_expectations`, 1);
  requireString(unit.progression_gate, `unit ${unit.unit_id}.progression_gate`);
}

if (curriculum.review_binding?.review_package_required !== true) fail('example curriculum must require a review package');
if (curriculum.review_binding?.material_change_requires_new_version !== true) fail('material curriculum changes must require a new version');
if (curriculum.review_binding?.review_package_schema !== 'steglearn.curriculum-review-package/v1') fail('review package schema binding mismatch');
if (curriculum.teaching_policy?.teaching_must_bind_exact_version !== true) fail('teaching must bind the exact curriculum version');
if (curriculum.teaching_policy?.teachable !== true) fail('example curriculum should be teachable');

const reviewEnvelope = {
  curriculum_id: curriculum.curriculum_id,
  curriculum_version: curriculum.curriculum_version,
  learning_goal: goal.desired_outcome,
  requested_depth: curriculum.requested_depth,
  starting_point_summary: goal.starting_point.summary,
  constraints: [
    ...goal.constraints.time.map((item) => `time: ${item}`),
    ...goal.constraints.resources.map((item) => `resource: ${item}`),
    ...goal.constraints.safety_or_regulatory.map((item) => `safety/regulatory: ${item}`),
    ...goal.constraints.accessibility.map((item) => `accessibility: ${item}`),
  ],
  canonical_curriculum: {
    objectives: curriculum.objectives,
    prerequisites: curriculum.prerequisites.map((item) => `${item.state}: ${item.description}`),
    sequence: curriculum.units.map((unit) => ({
      unit_id: unit.unit_id,
      title: unit.title,
      outcomes: unit.outcomes,
      activities: unit.activities,
      evidence_expectations: unit.evidence_expectations,
    })),
    completion_criteria: curriculum.completion_criteria,
  },
};
const firstHash = sha256(reviewEnvelope);
const reorderedEnvelope = Object.fromEntries(Object.entries(reviewEnvelope).reverse());
const secondHash = sha256(reorderedEnvelope);
if (!/^[a-f0-9]{64}$/.test(firstHash)) fail('deterministic review hash did not produce SHA-256 hex');
if (firstHash !== secondHash) fail('canonical review hash changed when object key insertion order changed');

console.log(`StegLearn curriculum contracts: PASS (${firstHash})`);
