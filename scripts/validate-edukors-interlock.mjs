import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const manifestPath = path.join(ROOT, 'examples/interlocks/edukors-evaluation-interlock.json');
const handoffPath = path.join(ROOT, 'docs/EDUKORS_INTR_MIRROR_HANDOFF.md');
const readmePath = path.join(ROOT, 'README.md');

const failures = [];
const requireCheck = (condition, message) => { if (!condition) failures.push(message); };

for (const file of [manifestPath, handoffPath, readmePath]) {
  requireCheck(fs.existsSync(file), `missing ${path.relative(ROOT, file)}`);
}

if (failures.length === 0) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
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

  for (const marker of [
    'EGRESS INTERLOCK',
    'INGRESS INTERLOCK',
    'InTr materialization',
    'SOURCE_EVALUATION_INTERLOCK_INSTALLED_RUNTIME_INTERACTION_NOT_OBSERVED',
    'does **not** permit',
    'explicit human authorization'
  ]) {
    requireCheck(handoff.toLowerCase().includes(marker.toLowerCase()), `handoff missing marker: ${marker}`);
  }

  for (const marker of [
    '## External Learning Relationships',
    'steglearn.edukors.evaluation.v1',
    'separately admitted capability package',
    'does not prove an authentic runtime Interlock/InTr transition'
  ]) {
    requireCheck(readme.toLowerCase().includes(marker.toLowerCase()), `README missing external-learning completeness marker: ${marker}`);
  }
}

if (failures.length) {
  console.error('EDUKORS_INTR_VALIDATION_FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('EDUKORS_INTR_VALIDATION_PASS:SOURCE_EVALUATION_INTERLOCK_ONLY');
