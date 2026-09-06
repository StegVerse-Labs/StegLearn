# StegLearn Mirror Handoff

## Repository

`StegVerse-Labs/StegLearn`

## Status

Active implementation. This file is the repository-local source of truth for active StegLearn implementation lanes.

## Current Goals

### TI-83 Plus / Arduino learning-path lane

Reusable project learning path:

```text
TI-83 Plus restoration
→ TI-BASIC programming
→ sensor observation
→ Arduino bridge
→ governed low-voltage action
→ parent-reviewed learning receipt
```

### Early-language longitudinal continuity lane

Private/local parent-reviewed longitudinal evidence:

```text
observation
→ exact learner wording
→ conversational context
→ revision/self-correction
→ parent review
→ accepted receipt
→ longitudinal comparison
```

Family-specific child records remain private/local by default; public repository examples must be anonymized, synthetic, or generalized.

### Edukors external-learning Interlock / InTr evaluation lane

Canonical bounded handoff: `docs/EDUKORS_INTR_MIRROR_HANDOFF.md`

Relationship: `steglearn.edukors.evaluation.v1`

Current state:

`SOURCE_EVALUATION_INTERLOCK_AND_CANONICAL_PUBLIC_OBSERVATION_BINDING_VALIDATED_RUNTIME_INTERACTION_NOT_OBSERVED`

The lane permits public observation, comparison, evidence/artifact intake, and human-mediated requests while denying authenticated access, automated external mutation, learner-private-data egress, direct Edukors mutation of StegLearn, or inference of partnership/endorsement. Credential-free public observation reuses StegOS `external-api-observation`; no competing Edukors connector is created.

### StegVerse Foundations guided tutorial lane

Canonical bounded handoff: `docs/STEGVERSE_FOUNDATIONS_MIRROR_HANDOFF.md`

Curriculum: `steglearn.stegverse-foundations.v1`

Current state:

`SOURCE_CURRICULUM_CONTRACT_AND_MATERIALIZED_LESSON_01_INSTALLED_VALIDATION_PENDING`

StegVerse Foundations teaches ecosystem purpose, principles, mechanics, authority boundaries, evidence, and practical operation through source-bound guided tutorials. The first materialized module is `SVF-01 / What Is StegVerse?` and is grounded in the canonical organization-level `StegVerse-Labs/.github/docs/ECOSYSTEM_PURPOSE_INVARIANT.md`.

The curriculum uses canonical `lesson.json`, `scenes.json`, and `captions.json` packages. AI SiteFlow is the intended first static renderer target, but generated presentation does not become instructional authority.

## Governing Boundaries

- Keep lessons inside StegLearn unless a future collection has an independently governed product boundary.
- Do not treat a lesson, score, interest, successful repair, isolated utterance, developmental observation, or tutorial completion as a fixed learner identity or permission.
- Parent or steward review remains required before evidence becomes an accepted learning receipt.
- Preserve raw learner wording and parent context separately from later interpretation.
- Do not overwrite earlier observations with later developmental conclusions.
- Public repository artifacts must not expose a child's public name, exact birth date, school, routine location, or unnecessary identifying context.
- Local learner identifiers are preferred for actual family records.
- Battery-leak cleanup, soldering, exposed circuitry, and electrical interfaces require adult control.
- No household voltage, weapon construction, exposed high-voltage experiments, or safety-critical sensor claims.
- The TI-83 Plus is a learner interface; it does not acquire independent actuator authority.
- An Arduino bridge must validate any actuator request and fail closed.
- External educational-system interaction must cross the applicable Interlock/InTr boundary before becoming StegLearn state.
- Public-source evaluation does not imply partnership, endorsement, curriculum adoption, authenticated access, or production integration.
- Edukors or any other external educational system cannot directly mutate learner records, Master Records, SKAP Vault, repositories, publication, finance, or governance state.
- Ordinary public web retrieval is not authentic InTr execution evidence.
- Task Registry owns work intent; WorkerCoordinator owns executable claims/fences; Master Records owns observed/reconstructable reality; Interlock/InTr governs ingress/egress. Source and CI do not manufacture those authorities.
- Canonical lesson claims must bind declared sources. A renderer may not invent claims or change authority/runtime semantics.
- Captions are first-class canonical lesson data for the static guided-tutorial package, not post-hoc transcription authority.
- Generated video/audio/transcripts/thumbnails are downstream presentation artifacts and do not become canonical lesson sources by generation alone.

## Implemented

### Learning-path lane

- Reusable `lessons/` catalog boundary.
- Machine-readable learning-path schema.
- TI-83 Plus and Arduino sensor learning-path manifest and guide.
- Example parent-reviewed learning receipt.
- Application catalog rendering and one-click path selection.

### Early-language continuity lane

- Learner-relative admissibility modes include conversation, revision-history, observed-behavior, and parent-transcribed-language.
- Learning receipts support learner quote and parent note.
- `docs/early-language-longitudinal-continuity.md` defines evidence/privacy/revision/comparison rules.
- An anonymized revision example is committed; family-specific observations remain private/local.
- TypeScript target compatibility was repaired without changing evidence semantics.

### Edukors lane

- Bounded relationship handoff, schema, evaluation manifest, public-observation transport binding, validator, README semantics, and CI integration are installed.
- Canonical StegOS `external-api-observation` is reused.
- Repository validation/build has passed for the source contract and binding.
- Authentic Edukors InTr runtime interaction and Master Records reconciliation remain unobserved.

### StegVerse Foundations lane

- Added `lessons/stegverse-foundations/README.md` and `path.json` with twelve ordered roadmap modules.
- Materialized `01-what-is-stegverse/{README.md,lesson.json,scenes.json,captions.json}`.
- Added `schemas/video-lesson.schema.json`, `schemas/lesson-scene.schema.json`, and `schemas/caption-track.schema.json`.
- Added `generated/README.md` defining generated output as non-authoritative.
- Added `scripts/validate-stegverse-foundations.mjs` enforcing source binding, module state, claim/scene/caption integrity, renderer fail-closed behavior, README completeness, and preflight markers.
- Bound the Foundations validator into `.github/workflows/validate.yml` before the existing Edukors/build gates.
- README and `lessons/README.md` are updated in the same material source change set because the new curriculum/rendering contract changes repository capability meaning.
- No AI SiteFlow runtime connection, generated video, public Site page, learner completion, or release is claimed by source installation.

## Validation Completed

Historical validated facts retained:

- repository JSON/schema/build gates for the pre-existing learning paths and receipts;
- production TypeScript/Vite build passes;
- committed receipt validation is wired into the build;
- Edukors source validator and public-observation binding have observed passing repository validation/build runs.

StegVerse Foundations source validation is pending the first workflow run containing `scripts/validate-stegverse-foundations.mjs`.

## Resolved Machine Preflight State

Current coordination resolved before the StegVerse Foundations mutation:

- `StegVerse-Labs/.github/data/canonical-task-registry.json` generation `15`;
- `StegVerse-Labs/.github/docs/CANONICAL_WORK_COORDINATION_SYSTEM_MIRROR_HANDOFF.md`;
- WorkerCoordinator registry generation `22` reported by the canonical coordination reconciliation;
- Master Records custody/reconstruction source paths are present, while authentic lifecycle input remains evidence-dependent;
- cross-task search found no existing StegVerse Foundations / SiteFlow video-lesson / caption-track implementation in StegLearn;
- the stale COSV StegLearn pre-audit classification is not treated as execution authority;
- canonical ecosystem-purpose source is `StegVerse-Labs/.github/docs/ECOSYSTEM_PURPOSE_INVARIANT.md`.

README impact for the Foundations implementation: `README_UPDATE_REQUIRED`, satisfied in the source change set.

## Remaining Machine Work

### StegVerse Foundations — current highest source lane

1. Observe a passing CI run containing the Foundations validator plus the existing repository gates.
2. Materialize modules 02–12 one at a time from current canonical component handoffs/sources; do not fill gaps from model memory.
3. Build a provider-neutral or actual AI SiteFlow export package only when its input contract is known.
4. Preserve lesson/version/source/renderer provenance for generated outputs.
5. Add interactive checkpoints and accepted learning receipts only when the actual learner interaction path exists.
6. When admitted, publish `StegVerse.org/steglearn` as a public explanation/roadmap derived from canonical StegLearn sources rather than as an independent truth store.

### Edukors lane

Authentic runtime sequence remains:

1. canonical task/WorkerCoordinator/Interlock substrate admits the executable observation task;
2. Universal InTr executes public observation through the existing `external-api-observation` profile;
3. exact egress/ingress correlation and a StegLearn evaluation record are preserved;
4. retained evidence is reconciled through Master Records;
5. privileged API/MCP/authenticated/AI-agent capability is separately admitted only if collaboration requires it.

### Other StegLearn lanes

- Future AI-generated developmental summaries must cite underlying learner evidence and remain distinct from raw observations.
- Richer longitudinal filters should wait for actual private/local records.
- Release/tag decisions require lane-specific evidence predicates and release review.

## Remaining Physical / User Work

### TI-83 / Arduino

- Adult handles leaking-battery cleanup/restoration and protected low-voltage hardware work.
- Identify the available calculator cable type.
- Restrict the first actuator experiment to a low-voltage LED.

### Early-language

- Parent-approved exact observations belong in the private/local learner record; unavailable historical exact quotes cannot be reconstructed without source records.

### Edukors

- No user action is required for source installation/profile reuse. Direct collaboration outreach remains human-mediated unless separately admitted.

### StegVerse Foundations

- No user action is required for the source curriculum implementation or repository validation.
- A later real AI SiteFlow account/API/input-format decision may require user participation if no machine-authorized interface is available.

## Release State

Not release-tagged by these lanes. Foundations source installation is not public Site publication, generated-video production, learner-completion evidence, runtime integration, or release authority. Edukors remains evaluation-only without authentic runtime evidence.

When this repository reaches an actual tag/release predicate, verify pertinent propagation through existing contracts to `StegVerse-Labs/Site`, `GCAT-BCAT-Engine/Publisher`, `StegVerse-Labs/admissibility-wiki`, and `StegVerse-002/stegguardian-wiki` as applicable.

## Archive Readiness

Current lane state, preflight, source files, evidence boundaries, and remaining predicates are repository-resident. Repository work itself is not complete because Foundations validation/materialization and the separate Edukors runtime predicates remain open.
