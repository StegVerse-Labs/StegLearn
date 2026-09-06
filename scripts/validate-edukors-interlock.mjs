import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const manifestPath = path.join(ROOT, 'examples/interlocks/edukors-evaluation-interlock.json');
const transportPath = path.join(ROOT, 'examples/interlocks/edukors-public-observation-transport.json');
const handoffPath = path.join(ROOT, 'docs/EDUKORS_INTR_MIRROR_HANDOFF.md');
const readmePath = path.join(ROOT, 'README.md');

const failures = [];
const requireCheck = (condition, message) => { if (!condition) failures.push(message); };

for (const file of [manifestPath, transportPath, handoffPath, readmePath]) {
  requireCheck(fs.existsSync(file), `missing ${path.relative(ROOT, file)}`);
}

if (failures.length === 0) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const transport = JSON.parse(fs.readFileSync(transportPath, 'utf8'));
  const handoff = fs.readFileSync(handoffPath, 'utf8');
  const readme = fs.readFileSync(readmePath, 'utf8');

  requireCheck(manifest.schema_version === '1.0.0', 'schema_version must be 1.0.0');
  requireCheck(manifest.relationship_id === 'steglearn.edukors.evaluation.v1', 'relationship_id mismatch');
  requireCheck(manifest.local_system === 'StegVerse-Labs/StegLearn', 'local_system mismatch');
  requireCheck(manifest.external_system?.name === 'Edukors', 'external system must be Edukors');
  requireCheck(manifest.external_system?.origin === 'https://edukors.org/', 'external origin must be canonical HTTPS Edukors origin');
  requireCheck(manifest.mode === 'EVALUATION', 'initial mode must remain EVALUATION');
  requireCheck(manifest.runtime_state === 'SOURCE_ONLY', 'runtime must remain SOURCE_ONLY until authentic evidence exists');

  const requiredClasses = ['OBSERVATION', 'REQUEST', 'RECOMMENDATION', 'EVIDENCE', 'ARTIFACT'];
  for (const cls of requiredClasses) requireCheck(manifest.interaction_classes?.includes(cls), `missing interaction class ${cls}`);

  requireCheck(manifest.restrictions?.authenticated_access === false, 'authenticated access must be false in evaluation mode');
  requireCheck(manifest.restrictions?.automated_mutation_external === false, 'external automated mutation must be false');
  requireCheck(manifest.restrictions?.direct_mutation_steglearn === false, 'direct StegLearn mutation must be false');
  requireCheck(manifest.restrictions?.partnership_inferred === false, 'partnership inference must be false');
  requireCheck(manifest.restrictions?.new_machine_transport_requires_admission === true, 'new machine transport must require admission');
  requireCheck(manifest.privacy?.learner_private_data_egress === false, 'learner-private data egress must fail closed');
  requireCheck(manifest.privacy?.public_source_evaluation_allowed === true, 'public-source evaluation should be admitted');

  requireCheck(transport.relationship_id === manifest.relationship_id, 'transport binding relationship mismatch');
  requireCheck(transport.binding_state === 'SOURCE_BINDING_ONLY_AUTHENTIC_RUNTIME_NOT_OBSERVED', 'transport binding must remain source-only');
  requireCheck(transport.transport_profile?.repository === 'StegVerse-Labs/StegOS', 'transport must reuse StegOS canonical profile registry');
  requireCheck(transport.transport_profile?.path === 'specs/universal-intr-connector-profiles.v1.json', 'transport profile registry path mismatch');
  requireCheck(transport.transport_profile?.profile_id === 'external-api-observation', 'transport must reuse external-api-observation');
  requireCheck(transport.transport_profile?.request_class === 'EXTERNAL_API_OBSERVATION', 'transport request class mismatch');
  requireCheck(transport.transport_profile?.operations?.length === 2 && transport.transport_profile.operations.includes('OBSERVE') && transport.transport_profile.operations.includes('READ'), 'transport operations must be OBSERVE and READ only');
  requireCheck(transport.external_target?.origin === 'https://edukors.org/', 'transport target origin mismatch');
  requireCheck(transport.reuse_policy?.new_connector_profile_created === false, 'must not create a competing connector profile');
  requireCheck(transport.reuse_policy?.canonical_profile_reused === true, 'canonical connector profile reuse required');
  requireCheck(transport.reuse_policy?.transport_grants_execution_authority === false, 'transport cannot grant execution authority');
  requireCheck(transport.reuse_policy?.authenticated_access_admitted === false, 'transport cannot admit authenticated access');
  requireCheck(transport.reuse_policy?.external_mutation_admitted === false, 'transport cannot admit external mutation');
  requireCheck(transport.reuse_policy?.learner_private_data_egress_admitted === false, 'transport cannot admit learner-private-data egress');
  requireCheck(transport.runtime_evidence?.authentic_intr_materialization_observed === false, 'authentic InTr runtime must remain unobserved');
  requireCheck(transport.runtime_evidence?.master_records_reconciliation_observed === false, 'Master Records runtime reconciliation must remain unobserved');
  requireCheck(transport.runtime_evidence?.ordinary_web_retrieval_is_intr_evidence === false, 'ordinary web retrieval must not count as InTr evidence');

  for (const marker of [
    'EGRESS INTERLOCK',
    'INGRESS INTERLOCK',
    'InTr materialization',
    'SOURCE_EVALUATION_INTERLOCK',
    'CANONICAL_PUBLIC_OBSERVATION_BINDING',
    'RUNTIME_INTERACTION_NOT_OBSERVED',
    'does **not** permit',
    'explicit human authorization',
    'external-api-observation',
    'README_UPDATE_REQUIRED'
  ]) {
    requireCheck(handoff.toLowerCase().includes(marker.toLowerCase()), `handoff missing marker: ${marker}`);
  }

  for (const marker of [
    '## External Learning Relationships',
    'steglearn.edukors.evaluation.v1',
    'separately admitted capability package',
    'external-api-observation',
    'does not prove an authentic runtime Interlock/InTr transition',
    'Ordinary web retrieval is not a substitute'
  ]) {
    requireCheck(readme.toLowerCase().includes(marker.toLowerCase()), `README missing external-learning completeness marker: ${marker}`);
  }
}

if (failures.length) {
  console.error('EDUKORS_INTR_VALIDATION_FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('EDUKORS_INTR_VALIDATION_PASS:SOURCE_EVALUATION_INTERLOCK_WITH_CANONICAL_PUBLIC_OBSERVATION_BINDING');
