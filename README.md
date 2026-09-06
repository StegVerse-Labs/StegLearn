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
→ synchronized human/machine review package
→ review / revise / select according to entity authority
→ teach selected curriculum version
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

## Machine-Readable Curriculum Contracts

The conversational curriculum flow has explicit source contracts:

- `schemas/participant-goal-intake.schema.json` — admitted participant, desired outcome/depth, starting point, context, constraints, evidence and review requirements.
- `schemas/generated-curriculum.schema.json` — stable curriculum identity/version, exact goal provenance, depth, prerequisites, objectives, units, teaching methods, evidence, progression, completion, review binding, and teaching policy.
- `schemas/curriculum-review-package.schema.json` — synchronized review representation with human/machine availability, review state, review records, and exact curriculum-version teaching binding.

The generated curriculum reuses the existing curriculum-review package rather than creating a competing review mechanism. Teaching must bind the exact selected curriculum version, and material curriculum changes require an inspectable version transition.

`examples/curricula/` contains bounded fixtures. `scripts/validate-curriculum-contracts.mjs` validates goal-to-curriculum linkage, stable IDs/versions, review binding, unique units, progression/evidence requirements, and exact-version teaching. `npm run build` runs this validator before receipt validation and TypeScript/Vite.

## Goal Intake, Curriculum Generation, and Review UI

The prototype now implements the first three machine-bound transitions:

```text
governed goal intake
→ bounded generated curriculum
→ synchronized review package
```

`app/src/GoalIntakePanel.tsx` captures entity/context, desired outcome/depth, starting point, constraints, evidence expectations, and reviewer requirements. It creates and exports `steglearn.participant-goal-intake/v1`.

`app/src/curriculumGeneration.ts` consumes that exact admitted goal and emits `steglearn.generated-curriculum/v1`. The current generator is deliberately deterministic and bounded: it proves the contract path without claiming arbitrary-domain expert curriculum quality, accreditation, or live AI teaching. A future AI-backed generator must emit the same governed contract rather than create a parallel representation.

`app/src/curriculumReview.ts` consumes the admitted goal and generated curriculum and emits `steglearn.curriculum-review-package/v1`. It verifies exact goal provenance and preserves the generated curriculum ID/version in the teaching binding.

The UI renders a human-readable curriculum review and the synchronized machine-readable review package from the same curriculum ID/version. Review begins `UNREVIEWED`; rendering a review package does not mint approval or teaching authority. The review package can be exported as JSON.

The current review-package `content_hash_sha256` is intentionally `null`; deterministic hashing remains a separate implementation item rather than being fabricated.

## Reviewable Curriculum

StegLearn must not present one curriculum for review and silently teach a materially different curriculum. Human-readable and machine-readable review surfaces must resolve to the same curriculum identity/version, and material changes must create an inspectable version transition.

Review availability is distinct from commenting, requesting revision, approving, or authorizing teaching.

## Repository Structure

```text
app/src/
  GoalIntakePanel.tsx
  curriculum.ts
  curriculumGeneration.ts
  curriculumReview.ts

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
  learning-path.schema.json
  learning-receipt.schema.json
  external-learning-interlock.schema.json

examples/curricula/
  python-foundations-goal-intake.json
  python-foundations-generated-curriculum.json
```

## External Learning Relationships

StegLearn may evaluate or interact with external educational systems only through an explicit, bounded relationship contract. The first installed relationship is the evaluation-only Edukors Interlock/InTr lane documented in [`docs/EDUKORS_INTR_MIRROR_HANDOFF.md`](docs/EDUKORS_INTR_MIRROR_HANDOFF.md), relationship `steglearn.edukors.evaluation.v1`.

Any API, MCP, authenticated account, AI-agent transport, or other privileged external-learning mechanism requires a **separately admitted capability package**. Credential-free public observation reuses the canonical StegOS Universal InTr `external-api-observation` profile rather than minting a competing Edukors-specific connector profile.

Source installation, public retrieval, CI, repository presence, or deployment **does not prove an authentic runtime Interlock/InTr transition**. **Ordinary web retrieval is not a substitute** for authentic InTr materialization evidence or Master Records reconciliation.

Public observation or source installation does not imply partnership, authenticated integration, runtime activation, or authority to mutate StegLearn state.

## Implementation Status

The repository contains a local-first web prototype, governance documentation, reusable learning paths, learning receipts, teacher-first governed AI architecture, conversational curriculum doctrine, goal/curriculum/review machine contracts, goal-intake UI, bounded curriculum generation, synchronized review rendering, public landing-page source, and the evaluation-only Edukors relationship.

Current source implements **goal conversation → governed goal intake → bounded generated curriculum → synchronized review package**. Review decisions/approval, deterministic curriculum hashing, curriculum-version-bound teaching execution, material revision/diff flow, admitted AI-backed curriculum generation, sensor-mediated classroom assistance, generalized AI-participant learning, and public Site publication remain incomplete unless separately evidenced.
