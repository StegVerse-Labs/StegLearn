# StegLearn

StegLearn is a governed learning system designed to maximize participant growth without capture.

Its product model is conversational: a human or admitted AI entity can enter StegLearn, describe a desired skill, capability, or body of knowledge, agree on desired depth, receive a governed curriculum, obtain a reviewable version of that curriculum, and then be taught the selected curriculum by the StegLearn AI Entity.

The preferred initial deployment posture is **human teacher + governed AI Entity**. In teacher-led use, the teacher remains the educational authority while StegLearn can assist with goal intake, curriculum construction and review, bounded teaching, permitted observation, adaptation, evidence preservation, and recommendations.

## Product Model

```text
Participant enters StegLearn
→ conversation about desired skill / knowledge / outcome
→ establish starting point + desired depth
→ governed goal-intake record
→ generated curriculum version
→ deterministic curriculum content hash
→ synchronized human/machine review package
→ review decision bound to exact hash
→ review / revise / approve according to entity authority
→ teaching session bound to curriculum ID + version + hash
→ observe permitted engagement / participation / progress
→ adapt instruction
→ preserve evidence + revision
→ review / receipt / continuity
```

Curriculum generation is not the terminal feature. StegLearn must produce a reviewable curriculum and be able to teach the selected version.

The intended instructional range can extend from first exposure and foundational learning through advanced professional, graduate, doctoral, and post-doctoral depth where the subject supports those levels. These labels describe instructional depth and rigor; they do not themselves constitute accreditation, degrees, licenses, institutional equivalence, or professional authority.

See [`docs/conversational-curriculum-and-teaching-model.md`](docs/conversational-curriculum-and-teaching-model.md) and [`docs/curriculum-review-and-teaching-contract.md`](docs/curriculum-review-and-teaching-contract.md).

## Purpose

StegLearn supports governed learning as an adaptive growth process, not as passive screen time, answer production, curriculum compliance, or automatic teacher replacement.

## Teacher-First Governed AI Model

StegLearn begins by enhancing the human teacher. The StegLearn AI Entity is intended to be visibly present on-screen and, when explicitly authorized, may speak, listen, present material, guide activities, teach, support individuals or small groups, and use permitted sensors and learning signals to evaluate observable variables such as engagement, participation, responsiveness, activity, and progress.

```text
Human teacher
  → objectives, permissions, curriculum review, boundaries, final educational decisions

StegLearn governed AI Entity
  → discuss goals, generate curriculum, render reviewable versions, teach, observe, assist, explain, adapt, organize, record, recommend

Authorized sensors and learning tools
  → bounded evidence about participation, engagement, activity, and progress

Participant
  → question, explore, build, practice, explain, revise, reflect
```

Technical access to a sensor does not automatically make its use admissible. Inputs must be explicitly permitted for the context in which they are used.

## Core Principle

> Maximize becoming without capture.

StegLearn may scaffold, guide, challenge, teach, record, and protect. It must not predetermine what the participant must become.

## Curriculum Depth

StegLearn may construct revisable paths at orientation, foundational, beginner, intermediate, advanced, vocational/applied, undergraduate-equivalent, graduate-equivalent, doctoral/research-equivalent, and post-doctoral/frontier-specialization depth where applicable.

Requested level does not automatically prove readiness. StegLearn may recommend prerequisite work without turning that recommendation into a fixed participant identity.

## Human and AI Participants

A human may enter StegLearn to develop a skill, learn a discipline, prepare for advanced study, or pursue a research question. An admitted AI entity may also participate when its identity, authority, permitted inputs/outputs, evidence obligations, and learning-state mutation rights are explicitly bounded. External request capability alone does not establish admission.

## Machine-Readable Learning Contracts

The current source flow has explicit contracts:

- `schemas/participant-goal-intake.schema.json` — admitted participant, desired outcome/depth, starting point, context, constraints, evidence and review requirements.
- `schemas/generated-curriculum.schema.json` — stable curriculum identity/version, exact goal provenance, depth, prerequisites, objectives, units, teaching methods, evidence, progression, completion, review binding, and teaching policy.
- `schemas/curriculum-review-package.schema.json` — synchronized review representation with human/machine availability, deterministic SHA-256 content hash, review state, review records bound to the reviewed hash, and exact curriculum-version/hash teaching binding.
- `schemas/teaching-session.schema.json` — exact curriculum ID/version/content hash, review state at start, authority binding, active unit, teaching events, and bounded teaching-session state.

The generated curriculum reuses the existing curriculum-review package rather than creating a competing review mechanism. Teaching must bind the exact selected curriculum version and its reviewed content hash. Material curriculum changes require an inspectable version transition and cannot silently inherit approval for previous bytes.

`app/src/canonicalHash.ts` implements deterministic canonical JSON serialization using recursively sorted object keys and compact JSON representation, then SHA-256 over UTF-8 bytes. This matches the existing StegVerse canonical-hash convention already used by coordination and continuity surfaces rather than introducing a new hash interpretation.

`examples/curricula/` contains bounded fixtures. `scripts/validate-curriculum-contracts.mjs` validates goal/curriculum/review/teaching contract identities, goal-to-curriculum linkage, stable IDs/versions, review binding, unique units, progression/evidence requirements, exact-version teaching requirements, hash-field requirements, and key-order-independent deterministic SHA-256 behavior. `npm run build` runs this validator before receipt validation and TypeScript/Vite.

## Goal → Curriculum → Review → Teach Prototype

The prototype now implements a bounded four-stage path:

```text
governed goal intake
→ bounded generated curriculum
→ synchronized hashed review package + contextual decision
→ exact-version + exact-hash teaching session
```

`app/src/GoalIntakePanel.tsx` captures entity/context, desired outcome/depth, starting point, constraints, evidence expectations, and reviewer requirements, and creates `steglearn.participant-goal-intake/v1`.

`app/src/curriculumGeneration.ts` consumes the exact admitted goal and emits `steglearn.generated-curriculum/v1`. The current generator is deterministic and bounded: it proves the contract path without claiming arbitrary-domain expert curriculum quality, accreditation, or production AI authorship. A future AI-backed generator must emit the same governed contract rather than create a parallel representation.

`app/src/curriculumReview.ts` emits `steglearn.curriculum-review-package/v1`, verifies exact goal/curriculum provenance, renders human- and machine-readable projections from the same curriculum ID/version, deterministically hashes the reviewable content envelope, and binds every review decision to that hash. `APPROVE` requires an `APPROVAL_WITHIN_CONTEXT` authority effect; a revision request does not become approval. A review decision fails closed if the package content hash or teaching-hash binding no longer verifies.

`app/src/teaching.ts` starts a `steglearn.teaching-session/v1` only when the review package's teaching requirement and hash bindings are satisfied. For the default teacher-led path, teaching is blocked until the curriculum is `APPROVED` by a review record whose `reviewed_content_hash_sha256` matches the current review package. The teaching session retains the exact curriculum ID, version, SHA-256 content hash, review state at start, human-authority requirement, authority entity IDs, current unit, timestamps, and teaching events.

The UI presents the current unit's outcomes, teaching methods, activities, evidence expectations, and progression gate and records unit/session transition events. This is a real bounded prototype teaching flow, but it is not yet a conversational AI instructor or evidence-driven adaptive teaching engine.

## Review and Teaching Boundaries

StegLearn must not present one curriculum for review and silently teach materially different content. Human-readable and machine-readable review surfaces resolve to the same curriculum identity/version and deterministic content hash. Review decisions bind that hash, and teaching authorization must match it.

Hash equality proves deterministic byte-level representation of the governed review envelope; it does not prove correctness, quality, pedagogical fitness, admissibility, accreditation, or human authority.

Review availability is distinct from commenting, requesting revision, approving, and authorizing teaching. Teaching-session creation does not itself grant accreditation, mastery, professional authority, or authority outside the admitted learning context.

## Repository Structure

```text
app/src/
  canonicalHash.ts
  GoalIntakePanel.tsx
  curriculum.ts
  curriculumGeneration.ts
  curriculumReview.ts
  teaching.ts

docs/
  teacher-assist-model.md
  conversational-curriculum-and-teaching-model.md
  curriculum-review-and-teaching-contract.md
  public-landing-page.md
  EDUKORS_INTR_MIRROR_HANDOFF.md

schemas/
  participant-goal-intake.schema.json
  generated-curriculum.schema.json
  curriculum-review-package.schema.json
  teaching-session.schema.json
  learning-path.schema.json
  learning-receipt.schema.json
  external-learning-interlock.schema.json
```

## External Learning Relationships

StegLearn may evaluate or interact with external educational systems only through an explicit, bounded relationship contract. The first installed relationship is the evaluation-only Edukors Interlock/InTr lane documented in [`docs/EDUKORS_INTR_MIRROR_HANDOFF.md`](docs/EDUKORS_INTR_MIRROR_HANDOFF.md), relationship `steglearn.edukors.evaluation.v1`.

Any API, MCP, authenticated account, AI-agent transport, or other privileged external-learning mechanism requires a **separately admitted capability package**. Credential-free public observation reuses the canonical StegOS Universal InTr `external-api-observation` profile rather than minting a competing Edukors-specific connector profile.

Source installation, public retrieval, CI, repository presence, or deployment **does not prove an authentic runtime Interlock/InTr transition**. **Ordinary web retrieval is not a substitute** for authentic InTr materialization evidence or Master Records reconciliation.

Public observation or source installation does not imply partnership, authenticated integration, runtime activation, or authority to mutate StegLearn state.

## Implementation Status

Current source implements **goal conversation → governed goal intake → bounded generated curriculum → deterministic content hash → synchronized review package → hash-bound contextual approval/revision decision → exact-version/hash bounded teaching session**.

The following remain incomplete unless separately evidenced: material revision/diff versioning, participant-evidence progression gates, an admitted AI-backed curriculum generator, conversational AI teaching within the teaching session, evidence-driven adaptive progression, sensor-mediated classroom assistance, generalized AI-participant learning, authentic governed external-learning runtime interaction, and public Site publication.
