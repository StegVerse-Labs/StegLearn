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

`SOURCE_CURRICULUM_CONTRACT_AND_MATERIALIZED_LESSON_01_VALIDATED`

StegVerse Foundations teaches ecosystem purpose, principles, mechanics, authority boundaries, evidence, and practical operation through source-bound guided tutorials. The first materialized module is `SVF-01 / What Is StegVerse?`, grounded in `StegVerse-Labs/.github/docs/ECOSYSTEM_PURPOSE_INVARIANT.md`.

The curriculum uses canonical `lesson.json`, `scenes.json`, and `captions.json` packages. AI SiteFlow is the intended first static renderer target, but generated presentation does not become instructional authority.

### Goal → curriculum → review → teaching lane (adjacent open PR)

Open PR: `StegVerse-Labs/StegLearn#3`

Branch: `feature/teacher-first-public-model`

The PR implements a generalized governed product path:

```text
participant goal conversation
→ governed goal-intake record
→ generated curriculum
→ deterministic curriculum hash
→ synchronized review package
→ contextual approval / revision
→ exact-version/hash teaching session
```

This is complementary to StegVerse Foundations: PR #3 owns generalized participant-goal/curriculum/review/teaching mechanics; Foundations owns source-bound ecosystem tutorial content and renderer-neutral presentation packages. They must converge without creating duplicate curriculum authority or losing either exact-source lesson provenance or exact-version teaching semantics.

Because Foundations changed `README.md`, `STEGLEARN_MIRROR_HANDOFF.md`, and workflow validation after PR #3 branched, the PR is currently adjacent/conflicting work that requires reconciliation before merge. Do not resolve that by deleting either lane or by creating a second review/teaching mechanism.

## Governing Boundaries

- Keep lessons inside StegLearn unless a future collection has an independently governed product boundary.
- Do not treat a lesson, score, interest, successful repair, isolated utterance, developmental observation, or tutorial completion as a fixed learner identity or permission.
- Parent or steward review remains required before evidence becomes an accepted learning receipt.
- Preserve raw learner wording and parent context separately from later interpretation.
- Do not overwrite earlier observations with later developmental conclusions.
- Public repository artifacts must not expose a child's public name, exact birth date, school, routine location, or unnecessary identifying context.
- Local learner identifiers are preferred for actual family records.
- External educational-system interaction must cross the applicable Interlock/InTr boundary before becoming StegLearn state.
- Public-source evaluation does not imply partnership, endorsement, curriculum adoption, authenticated access, or production integration.
- Edukors or any external educational system cannot directly mutate learner records, Master Records, SKAP Vault, repositories, publication, finance, or governance state.
- Ordinary public web retrieval is not authentic InTr execution evidence.
- Task Registry owns work intent; WorkerCoordinator owns executable claims/fences; Master Records owns observed/reconstructable reality; Interlock/InTr governs ingress/egress. Source and CI do not manufacture those authorities.
- Canonical lesson claims must bind declared sources. A renderer may not invent claims or change authority/runtime semantics.
- Captions are first-class canonical lesson data for the static guided-tutorial package, not post-hoc transcription authority.
- Generated video/audio/transcripts/thumbnails are downstream presentation artifacts and do not become canonical lesson sources by generation alone.
- Generalized curriculum generation/review/teaching must bind exact curriculum identity/version/hash and must not silently replace source-bound lesson provenance.

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

### Edukors lane

- Bounded relationship handoff, schema, evaluation manifest, public-observation transport binding, validator, README semantics, and CI integration are installed.
- Canonical StegOS `external-api-observation` is reused.
- Repository validation/build has passed for the source contract and binding.
- Authentic Edukors InTr runtime interaction and Master Records reconciliation remain unobserved.

### StegVerse Foundations lane

- `lessons/stegverse-foundations/path.json` defines twelve ordered ecosystem modules.
- `01-what-is-stegverse/{README.md,lesson.json,scenes.json,captions.json}` is materialized.
- `schemas/video-lesson.schema.json`, `schemas/lesson-scene.schema.json`, and `schemas/caption-track.schema.json` are installed.
- `generated/README.md` defines generated output as non-authoritative.
- `scripts/validate-stegverse-foundations.mjs` enforces source binding, module state, claim/scene/caption integrity, renderer fail-closed behavior, README completeness, and preflight markers.
- `.github/workflows/validate.yml` runs the Foundations validator before the existing Edukors/build gates.
- README and `lessons/README.md` were updated in the same material source change set because the new curriculum/rendering contract changes repository capability meaning.
- No AI SiteFlow runtime connection, generated video, public Site page, learner completion, or release is claimed by source installation.

### Adjacent PR #3 lane

- The open branch contains source for participant-goal intake, generated curriculum, curriculum review, deterministic content hash, exact-version/hash teaching sessions, UI surfaces, schemas, and validation.
- Its latest observed PR validation is successful, but the branch predates the Foundations mainline commit and now conflicts on shared documentation/validation surfaces.
- No merge, release, or replacement of Foundations is implied by the PR's successful CI.

## Validation Completed

- Existing repository JSON/schema/build gates pass.
- Edukors source validator and public-observation binding have observed passing validation/build runs.
- StegVerse Foundations commit `44e59faac44c5acd81bf43465e99eb4751c6c21f` produced GitHub Actions run `34048210035` with conclusion `SUCCESS`, including Foundations validation, Edukors validation, committed-receipt validation, TypeScript, and Vite build.
- PR #3 has its own successful branch validation, but branch CI does not resolve its current convergence/conflict with main.

## Resolved Machine Preflight State

Current coordination resolved before Foundations mutation:

- `StegVerse-Labs/.github/data/canonical-task-registry.json` generation `15`;
- `StegVerse-Labs/.github/docs/CANONICAL_WORK_COORDINATION_SYSTEM_MIRROR_HANDOFF.md`;
- WorkerCoordinator registry generation `22` reported by canonical coordination reconciliation;
- Master Records custody/reconstruction source paths exist while authentic lifecycle input remains evidence-dependent;
- initial cross-task search found no pre-existing Foundations/SiteFlow lesson package;
- after the mainline commit, PR #3 was observed as adjacent/convergent work and is now explicitly registered here for reconciliation;
- canonical ecosystem-purpose source is `StegVerse-Labs/.github/docs/ECOSYSTEM_PURPOSE_INVARIANT.md`.

README impact for the material Foundations implementation: `README_UPDATE_REQUIRED`, satisfied in the source change set.

README impact for this post-validation/adjacency handoff reconciliation: `NO_README_CHANGE_REQUIRED`; it changes status/coordination truth only, not repository behavior or capability meaning.

## Remaining Machine Work

### Highest priority — converge Foundations with PR #3

1. Reconcile PR #3 against current main without discarding either generalized teaching mechanics or Foundations source-bound lesson/rendering contracts.
2. Preserve one curriculum authority model: source-bound canonical lesson claims can feed a generalized curriculum/review/teaching session, but neither representation silently overrides the other.
3. Ensure the merged workflow validates both the Foundations contract and PR #3 curriculum/teaching contracts.
4. Re-run full CI on the reconciled result before merge.

### StegVerse Foundations after convergence

- Materialize modules 02–12 one at a time from current canonical component handoffs/sources; do not fill gaps from model memory.
- Build a provider-neutral or actual AI SiteFlow export package only when its input contract is known.
- Preserve lesson/version/source/renderer provenance for generated outputs.
- Connect Foundations checkpoints to the generalized teaching/evidence/receipt path only after exact-version and authority boundaries are reconciled.
- When admitted, publish `StegVerse.org/steglearn` as a public explanation/roadmap derived from canonical StegLearn sources rather than an independent truth store.

### Edukors lane

Authentic runtime sequence remains task admission → Universal InTr observation → exact egress/ingress correlation → StegLearn evaluation record → Master Records reconciliation. Privileged API/MCP/authenticated/AI-agent capability remains separately admitted.

## Remaining Physical / User Work

### TI-83 / Arduino

Adult handles leaking-battery cleanup/restoration, protected low-voltage hardware work, cable identification, and first LED-only actuator work.

### Early-language

Parent-approved exact observations belong in the private/local learner record; unavailable historical exact quotes cannot be reconstructed without source records.

### Edukors

No user action is required for source installation/profile reuse. Direct collaboration outreach remains human-mediated unless separately admitted.

### StegVerse Foundations / PR #3 convergence

No user action is required for source reconciliation or repository validation. A later real AI SiteFlow account/API/input-format decision may require user participation if no machine-authorized interface is available.

## Release State

Not release-tagged. Foundations source/build validation is not public Site publication, generated-video production, learner-completion evidence, runtime integration, or release authority. PR #3 remains open and unmerged. Edukors remains evaluation-only without authentic runtime evidence.

When this repository reaches an actual tag/release predicate, verify pertinent propagation through existing contracts to `StegVerse-Labs/Site`, `GCAT-BCAT-Engine/Publisher`, `StegVerse-Labs/admissibility-wiki`, and `StegVerse-002/stegguardian-wiki` as applicable.

## Archive Readiness

Current lanes, validation evidence, adjacency/conflict state, authority boundaries, and remaining predicates are repository-resident. Repository work is not complete because PR #3 convergence, additional Foundations materialization, public Site work, and separate Edukors runtime predicates remain open.
