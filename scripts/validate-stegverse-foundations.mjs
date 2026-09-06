import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const BASE = path.join(ROOT, 'lessons/stegverse-foundations');
const LESSON_DIR = path.join(BASE, '01-what-is-stegverse');

const requiredFiles = [
  'schemas/video-lesson.schema.json',
  'schemas/lesson-scene.schema.json',
  'schemas/caption-track.schema.json',
  'lessons/stegverse-foundations/README.md',
  'lessons/stegverse-foundations/path.json',
  'lessons/stegverse-foundations/01-what-is-stegverse/README.md',
  'lessons/stegverse-foundations/01-what-is-stegverse/lesson.json',
  'lessons/stegverse-foundations/01-what-is-stegverse/scenes.json',
  'lessons/stegverse-foundations/01-what-is-stegverse/captions.json',
  'generated/README.md',
  'README.md',
  'docs/STEGVERSE_FOUNDATIONS_MIRROR_HANDOFF.md'
];

const failures = [];
const check = (value, message) => { if (!value) failures.push(message); };
const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

for (const rel of requiredFiles) check(fs.existsSync(path.join(ROOT, rel)), `missing ${rel}`);

if (failures.length === 0) {
  const curriculum = readJson(path.join(BASE, 'path.json'));
  const lesson = readJson(path.join(LESSON_DIR, 'lesson.json'));
  const scenes = readJson(path.join(LESSON_DIR, 'scenes.json'));
  const captions = readJson(path.join(LESSON_DIR, 'captions.json'));
  const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
  const handoff = fs.readFileSync(path.join(ROOT, 'docs/STEGVERSE_FOUNDATIONS_MIRROR_HANDOFF.md'), 'utf8');

  check(curriculum.learning_path_id === 'steglearn.stegverse-foundations.v1', 'curriculum id mismatch');
  check(curriculum.version === '1.0.0', 'curriculum version mismatch');
  check(Array.isArray(curriculum.modules) && curriculum.modules.length === 12, 'StegVerse Foundations must define 12 modules');
  check(curriculum.modules.every((m, i) => m.order === i + 1), 'module order must be contiguous');
  check(new Set(curriculum.modules.map(m => m.module_id)).size === curriculum.modules.length, 'module ids must be unique');
  check(curriculum.modules[0]?.state === 'MATERIALIZED', 'module 01 must be materialized');
  check(curriculum.modules.slice(1).every(m => m.state === 'ROADMAP'), 'unmaterialized modules must remain ROADMAP');

  check(lesson.lesson_id === 'steglearn.stegverse-foundations.01', 'lesson id mismatch');
  check(lesson.module_id === 'SVF-01', 'lesson module mismatch');
  check(lesson.version === '1.0.0', 'lesson version mismatch');
  check(lesson.renderer_policy?.siteflow_target === 'AI_SITEFLOW_STATIC_VIDEO', 'SiteFlow static target missing');
  check(lesson.renderer_policy?.captions_are_canonical === true, 'captions must be canonical');
  check(lesson.renderer_policy?.renderer_may_paraphrase_claims === false, 'renderer paraphrase must fail closed');
  check(lesson.renderer_policy?.renderer_may_invent_claims === false, 'renderer claim invention must fail closed');
  check(lesson.renderer_policy?.renderer_may_change_authority_semantics === false, 'renderer authority mutation must fail closed');
  check(lesson.renderer_policy?.generated_content_is_authoritative === false, 'generated output cannot be authoritative');

  const sourceIds = new Set(lesson.canonical_sources?.map(s => s.source_id));
  check(sourceIds.has('SRC-ECOSYSTEM-PURPOSE'), 'canonical ecosystem purpose source missing');
  const purposeSource = lesson.canonical_sources?.find(s => s.source_id === 'SRC-ECOSYSTEM-PURPOSE');
  check(purposeSource?.repository === 'StegVerse-Labs/.github', 'purpose authority repository mismatch');
  check(purposeSource?.path === 'docs/ECOSYSTEM_PURPOSE_INVARIANT.md', 'purpose authority path mismatch');

  const claimIds = new Set(lesson.claims?.map(c => c.claim_id));
  check(claimIds.size === lesson.claims?.length, 'claim ids must be unique');
  check(lesson.claims?.every(c => sourceIds.has(c.source_id)), 'every claim must bind a declared canonical source');

  check(scenes.lesson_id === lesson.lesson_id && scenes.lesson_version === lesson.version, 'scene package lesson binding mismatch');
  check(Array.isArray(scenes.scenes) && scenes.scenes.length >= 1, 'scene package empty');
  check(scenes.scenes.every((s, i) => s.order === i + 1), 'scene order must be contiguous');
  check(scenes.scenes.every(s => s.claim_ids.every(id => claimIds.has(id))), 'scene references unknown claim');
  check(scenes.scenes.every(s => typeof s.caption === 'string' && s.caption.length > 0), 'scene caption missing');
  check(scenes.scenes.every(s => Array.isArray(s.do_not_imply)), 'scene do_not_imply boundary missing');

  check(captions.lesson_id === lesson.lesson_id && captions.lesson_version === lesson.version, 'caption package lesson binding mismatch');
  check(captions.caption_source === 'CANONICAL_SCENE_CAPTIONS', 'caption source mismatch');
  check(captions.entries?.length === scenes.scenes.length, 'caption/scene count mismatch');
  for (const scene of scenes.scenes) {
    const caption = captions.entries?.find(c => c.scene_id === scene.scene_id);
    check(Boolean(caption), `caption missing for ${scene.scene_id}`);
    check(caption?.order === scene.order, `caption order mismatch for ${scene.scene_id}`);
    check(caption?.text === scene.caption, `caption text diverges from canonical scene caption for ${scene.scene_id}`);
  }

  for (const marker of [
    '## StegVerse Foundations',
    'AI SiteFlow',
    'renderer does not become the authority',
    'StegVerse Foundations'
  ]) check(readme.toLowerCase().includes(marker.toLowerCase()), `README missing completeness marker: ${marker}`);

  for (const marker of [
    'README_UPDATE_REQUIRED',
    'Task Registry generation 15',
    'WorkerCoordinator registry generation 22',
    'MATERIALIZED_LESSON_01',
    'AI_SITEFLOW_STATIC_VIDEO',
    'generated output is not authoritative'
  ]) check(handoff.toLowerCase().includes(marker.toLowerCase()), `handoff missing preflight/authority marker: ${marker}`);
}

if (failures.length) {
  console.error('STEGVERSE_FOUNDATIONS_VALIDATION_FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('STEGVERSE_FOUNDATIONS_VALIDATION_PASS:MATERIALIZED_LESSON_01_STATIC_RENDER_CONTRACT');
