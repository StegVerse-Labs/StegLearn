# StegVerse Foundations Mirror Handoff

## Repository

`StegVerse-Labs/StegLearn`

## Goal

Materialize a canonical StegLearn curriculum for learning the StegVerse ecosystem, with exact source-bound claims and renderer-neutral lesson packages that can be rendered by AI SiteFlow or another presentation engine without transferring instructional authority to the renderer.

## Status

`SOURCE_CURRICULUM_CONTRACT_AND_MATERIALIZED_LESSON_01_INSTALLED_VALIDATION_PENDING`

## Canonical source-of-truth relationship

Repository-wide implementation authority remains `STEGLEARN_MIRROR_HANDOFF.md`.

This bounded lane does not replace organization-level ecosystem purpose, repository-local handoffs for the components being taught, Master Records evidence authority, Interlock/InTr transition governance, or WorkerCoordinator claim/fence authority.

## Machine preflight — 2026-09-06

Resolved before functional mutation:

- repository handoff: `STEGLEARN_MIRROR_HANDOFF.md`;
- canonical task registry: `StegVerse-Labs/.github/data/canonical-task-registry.json`, Task Registry generation 15;
- canonical coordination handoff: `StegVerse-Labs/.github/docs/CANONICAL_WORK_COORDINATION_SYSTEM_MIRROR_HANDOFF.md`;
- WorkerCoordinator registry generation 22 as reported by the canonical coordination reconciliation;
- Master Records state through the canonical coordination handoff: custody/reconstruction source paths exist, while authentic lifecycle input remains evidence-dependent;
- cross-task search in `StegVerse-Labs/StegLearn`: no existing StegVerse Foundations, SiteFlow video-lesson, lesson-scene, or caption-track implementation was found;
- organization indexed StegLearn reference remains a stale COSV pre-audit classification and is not used as execution authority;
- canonical organization-level lesson-01 source: `StegVerse-Labs/.github/docs/ECOSYSTEM_PURPOSE_INVARIANT.md`, status `CANONICAL / ACTIVE`.

Authority result:

`PASS_FOR_NEW_STEGLEARN_CURRICULUM_SOURCE_IMPLEMENTATION`

Reason: this work adds a new educational representation capability inside the existing StegLearn lesson boundary, does not create a competing runtime, scheduler, WorkerCoordinator, Interlock/InTr implementation, credential path, Master Records authority, or SiteFlow runtime claim, and reuses the canonical ecosystem-purpose source for lesson 01.

### README completeness predicate

`README_UPDATE_REQUIRED`

The change materially expands repository behavior/capability meaning by introducing:

- a new StegVerse ecosystem curriculum;
- canonical video-capable lesson packages;
- AI SiteFlow as an intended static renderer target;
- captions as first-class canonical lesson data;
- explicit separation between instructional authority and generated presentation artifacts;
- a renderer fail-closed policy for claim invention, authority semantics, and runtime assertions.

Therefore `README.md` and `lessons/README.md` are updated in the same source change set. The lane validator fails if the required README semantics are absent.

## Architecture

```text
canonical StegVerse source
  -> StegLearn source-bound claim
  -> canonical lesson.json
  -> canonical scenes.json
  -> canonical captions.json
  -> renderer (AI SiteFlow or successor)
  -> generated video/audio/transcript/web presentation
```

The renderer does not become the authority.

`generated output is not authoritative`

A generated artifact is a presentation of a specific canonical lesson version. It cannot create new claims, authority, runtime evidence, governance state, or learner permission merely by being rendered.

## Curriculum identity

`steglearn.stegverse-foundations.v1`

Machine-readable roadmap:

`lessons/stegverse-foundations/path.json`

The path defines twelve ordered modules:

1. What Is StegVerse?
2. Your StegVerse Identity
3. Your Knowledge Vault
4. Devices and Nodes
5. What Happens When You Press Submit?
6. Understanding Authority
7. How StegCore Governs a Transition
8. Reading a Receipt
9. Heartbeat and Runtime
10. AI Inside StegVerse
11. SKAP and Capabilities
12. Crossing the Ecosystem Boundary

Current curriculum state:

`MATERIALIZED_LESSON_01`

Modules 02–12 remain `ROADMAP` until their source claims and lesson packages are separately materialized and validated.

## Canonical lesson package

Schemas:

- `schemas/video-lesson.schema.json`
- `schemas/lesson-scene.schema.json`
- `schemas/caption-track.schema.json`

Lesson package contract:

- `lesson.json` owns lesson identity, objectives, exact canonical claims, source bindings, renderer policy, checkpoint, receipt evidence objectives, and version provenance;
- `scenes.json` owns scene order, claim references, narration, canonical caption, visual instructions, and `do_not_imply` constraints;
- `captions.json` owns the canonical caption track and must exactly match the scene captions;
- generated media remains downstream and non-authoritative.

Initial renderer target token:

`AI_SITEFLOW_STATIC_VIDEO`

This token identifies the intended first static rendering use case. It does not assert that AI SiteFlow is connected, authorized, deployed, or executing.

## Lesson 01 — What Is StegVerse?

Path:

`lessons/stegverse-foundations/01-what-is-stegverse/`

Canonical source:

`StegVerse-Labs/.github/docs/ECOSYSTEM_PURPOSE_INVARIANT.md`

Lesson 01 teaches only source-supported organization-level propositions, including:

- StegVerse as governance infrastructure for consequential systems;
- StegVerse is not intended to be the intelligence factory;
- nine ecosystem contribution classes;
- capability is not authority;
- observation is not execution;
- source completion is not activation;
- CI success is not runtime proof;
- governance should preserve plural agency rather than collapse into universal centralized authority;
- consequential-system evaluation should ask what was permitted, by whom, against what state, with what bounded consequence, and what evidence proves what happened.

It does not claim runtime activation or implementation completion for all StegVerse components.

## Caption semantics

Captions are first-class lesson data, not post-hoc transcription.

Canonical flow:

```text
approved source-bound claim
-> approved scene/narration
-> canonical caption
-> renderer output
```

For the initial static contract, `captions.json` entries must exactly match the `caption` fields in `scenes.json`.

Translations may be generated later but must preserve claim semantics and require review before canonical public publication.

## Visual grammar

The initial lesson establishes reusable primitives such as:

- `actor.human`
- `actor.ai`
- `actor.institution`
- `actor.machine`
- `boundary.governance`
- `transition.candidate`
- `transition.admitted`
- `evidence.receipt`
- `state.continuity`
- `system.external`

These are presentation primitives, not independent authority-bearing entities.

## Validation

Validator:

`scripts/validate-stegverse-foundations.mjs`

The validator asserts:

- all canonical curriculum/package files exist;
- the path has exactly twelve ordered unique modules;
- only module 01 is `MATERIALIZED` in this change;
- lesson 01 is bound to the canonical ecosystem-purpose source;
- every scene claim reference resolves to a declared claim;
- captions exactly match canonical scene captions;
- the renderer cannot invent claims, paraphrase prohibited claims, change authority semantics, or become authoritative;
- README completeness semantics remain present;
- preflight/coordination markers remain preserved in this handoff.

Workflow integration:

`.github/workflows/validate.yml` runs the StegVerse Foundations validator before the existing Edukors validator and application build.

Fresh CI observation is required before this lane is called repository-validated.

## Generated output boundary

`generated/README.md` defines generated artifacts as non-authoritative downstream outputs. No generated SiteFlow video is claimed in the current source state.

A future generated artifact should preserve lesson ID/version, source lesson path, renderer identity/version when known, generation timestamp, claim/caption binding sufficient for reconstruction, and human-review status.

## Remaining machine work

1. Observe a successful GitHub Actions run containing the StegVerse Foundations validator plus the existing repository gates.
2. After source validation, materialize modules 02–12 one at a time from their actual canonical component handoffs/sources; do not fill architectural gaps from model memory.
3. Build the first renderer export package only when an actual AI SiteFlow input contract is known or a provider-neutral export format is chosen.
4. Preserve generated output provenance and version binding.
5. Add interactive StegLearn checkpoints/receipts only when the interaction path is implemented; static video completion alone must not be treated as proof of learner understanding.
6. When the Site public surface work is admitted, publish a `StegVerse.org/steglearn` explanation/roadmap derived from the canonical StegLearn curriculum rather than duplicating independent lesson truth.

## User work

None required for this source implementation or validation. A real AI SiteFlow account/API/input-format decision may require later user participation if no machine-authorized interface exists.

## Release posture

Not release-tagged by this lane. Source installation is not public Site publication, generated-video production, learner completion evidence, runtime integration, or release authority.
