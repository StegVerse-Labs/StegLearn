# StegLearn

StegLearn is a governed learning system designed to maximize participant growth without capture.

Its broader product model is conversational: a human or admitted AI entity can enter StegLearn, describe a desired skill, capability, or body of knowledge, agree on the desired depth, receive a governed curriculum, obtain a reviewable version of that curriculum, and then be taught that curriculum by the StegLearn AI Entity.

Its preferred initial deployment posture is **human teacher + governed AI Entity**: the teacher remains the educational authority while StegLearn helps observe permitted learning activity, generate appropriate learning paths, make those paths reviewable before execution, teach within delegated scope, adapt instruction, support learners, and preserve evidence of growth.

## Product Model

```text
Participant enters StegLearn
→ conversation about desired skill / knowledge / outcome
→ establish starting point + desired depth
→ governed goal-intake record
→ generated curriculum version
→ reviewable curriculum package
→ review / revise / select according to entity authority
→ teach selected curriculum version
→ observe permitted engagement / participation / progress
→ adapt instruction
→ preserve evidence + revision
→ review / receipt / continuity
```

Curriculum generation is not the terminal feature. StegLearn must produce a reviewable curriculum and be able to teach the selected version.

The intended instructional range can extend from first exposure and foundational learning through advanced professional, graduate, doctoral, and post-doctoral depth where the subject supports those levels. Those labels describe instructional depth and rigor; they do not themselves constitute accreditation, degrees, licenses, or institutional credentials.

See [`docs/conversational-curriculum-and-teaching-model.md`](docs/conversational-curriculum-and-teaching-model.md) and [`docs/curriculum-review-and-teaching-contract.md`](docs/curriculum-review-and-teaching-contract.md).

## Purpose

StegLearn exists to support governed learning as an adaptive growth process, not as passive screen time, answer production, curriculum compliance, or automatic teacher replacement.

The system is designed for participants who grow through questions, building, observation, storytelling, play, experimentation, explanation, practice, research, and interaction with other people or admitted AI entities.

## Teacher-First Governed AI Model

StegLearn begins by enhancing the human teacher.

The StegLearn AI Entity is intended to be visibly present on-screen and, when explicitly authorized, may speak, listen, present material, guide activities, teach, support individuals or small groups, and use permitted sensors and learning signals to evaluate observable variables such as engagement, participation, responsiveness, activity, and progress.

The teacher remains in authority over educational objectives, instructional decisions, acceptance of learning evidence, and other high-impact learner decisions in teacher-led use.

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

See [`docs/teacher-assist-model.md`](docs/teacher-assist-model.md) for the teacher-first model and [`docs/public-landing-page.md`](docs/public-landing-page.md) for the public presentation source.

## Core Principle

> Maximize becoming without capture.

StegLearn may scaffold, guide, challenge, teach, record, and protect. It must not predetermine what the participant must become.

## Learning Loop

```text
Desired outcome / Wonder
→ Build, Observe, Study, or Practice
→ Explain / Demonstrate
→ Review
→ Receipt
→ Portfolio / Continuity
```

A surrounding adaptive teaching loop may operate during instruction:

```text
Goal
→ Curriculum
→ Reviewable Version
→ Teach
→ Observe
→ Engage
→ Adapt
→ Explain
→ Review
→ Continue
```

## Curriculum Depth

StegLearn may construct revisable paths at levels such as orientation, foundational, beginner, intermediate, advanced, vocational/applied, undergraduate-equivalent, graduate-equivalent, doctoral/research-equivalent, and post-doctoral/frontier-specialization depth where applicable.

Requested level does not automatically prove readiness. StegLearn may recommend prerequisite work without turning that recommendation into a fixed participant identity.

## Human and AI Participants

A human may enter StegLearn to develop a skill, learn a discipline, prepare for advanced study, or pursue a research question.

An admitted AI entity may also participate in a governed learning relationship when its identity, authority, permitted inputs and outputs, evidence obligations, and learning-state mutation rights are explicitly bounded. The ability of an external model or agent to send requests does not itself establish admission.

## Machine-Readable Curriculum Contracts

The conversational curriculum flow now has explicit source contracts:

- `schemas/participant-goal-intake.schema.json` records the admitted participant, desired outcome, requested depth, starting-point basis, learning context, constraints, evidence expectations, and review requirements.
- `schemas/generated-curriculum.schema.json` records stable curriculum identity/version, exact goal-intake provenance, supportable depth, prerequisites, objectives, teachable units, evidence expectations, progression gates, completion criteria, review binding, and exact-version teaching policy.
- `schemas/curriculum-review-package.schema.json` provides the synchronized review surface used to inspect and review a generated curriculum before or during teaching.

The generated curriculum contract deliberately reuses the existing curriculum-review package rather than creating a competing review mechanism. Teaching must bind the exact selected curriculum version, and material curriculum changes require an inspectable version transition.

Examples are provided under `examples/curricula/`. `scripts/validate-curriculum-contracts.mjs` checks the example goal-to-curriculum linkage, stable IDs/versions, review-package binding, unique units, progression/evidence requirements, and exact-version teaching invariant. `npm run build` runs this validator before the existing receipt validation and TypeScript/Vite build.

## Reviewable Curriculum

Every generated curriculum should be capable of becoming a stable review artifact before or during teaching. The review surface should provide a human-readable curriculum, a machine-readable canonical curriculum, stable identity/version, review comments or decisions tied to the reviewed version, a distinction between inspection/comment/revision/approval/teaching authorization, and traceability from the selected curriculum version into the teaching session.

StegLearn must not present one curriculum for review and silently teach a materially different curriculum without recording the change.

## What Counts as Learning Evidence

Evidence may include questions, participation, things built, observations, explanations, demonstrations, mistakes found, revisions, code/designs/research artifacts, skills applied, and contextually reviewed receipts. AI interpretations must remain distinguishable from participant evidence, teacher or parent notes, and sensor observations.

## Repository Structure

```text
docs/
  product-spec.md
  learner-loop.md
  homeschool-receipt-model.md
  ai-scaffold-policy.md
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

lessons/
  ti83-arduino-sensor-lab/
```

## Learning Paths

StegLearn keeps reusable lessons inside a governed `lessons/` catalog rather than splitting each subject or project into a separate repository. Generated curricula may synthesize prerequisite maps, objectives, readings, exercises, projects, experiments, research questions, specialization branches, evidence expectations, and completion criteria appropriate to the requested goal.

The first materialized reusable path is the [TI-83 Plus and Arduino Sensor Lab](lessons/ti83-arduino-sensor-lab/README.md).

## External Learning Relationships

StegLearn may evaluate or interact with external educational systems only through an explicit, bounded relationship contract. The first installed relationship is the evaluation-only Edukors Interlock/InTr lane documented in [`docs/EDUKORS_INTR_MIRROR_HANDOFF.md`](docs/EDUKORS_INTR_MIRROR_HANDOFF.md), relationship `steglearn.edukors.evaluation.v1`.

Any API, MCP, authenticated account, AI-agent transport, or other privileged external-learning mechanism requires a **separately admitted capability package**. Credential-free public observation reuses the canonical StegOS Universal InTr `external-api-observation` profile rather than minting a competing Edukors-specific connector profile.

Source installation, public retrieval, CI, repository presence, or deployment **does not prove an authentic runtime Interlock/InTr transition**. **Ordinary web retrieval is not a substitute** for authentic InTr materialization evidence or Master Records reconciliation.

Public observation or source installation does not imply partnership, authenticated integration, runtime activation, or authority to mutate StegLearn state.

## Relationship to Learning Transition Governance

Learning Transition Governance provides the doctrine for learning as an admissible transition process. StegLearn is the product-facing implementation path for governed learning: it captures goals, generates reviewable curricula, teaches selected versions, preserves evidence, adapts instruction, and produces reviewed learning receipts while maintaining explicit authority boundaries.

## Implementation Status

The repository contains a local-first web prototype, schemas, example receipts, reusable learning paths, teacher-first governed AI architecture, conversational curriculum-generation and teaching doctrine, curriculum review/teaching contracts, goal-intake and generated-curriculum machine contracts, public landing-page source, and an evaluation-only external-learning Interlock/InTr contract for Edukors.

Current source now deterministically models **goal intake → generated curriculum → review binding → exact-version teaching policy**. This is source/schema validation only; dynamic curriculum generation, runtime review rendering, curriculum-version-bound teaching execution, generalized AI-participant learning, sensor-mediated classroom assistance, and public Site publication remain incomplete unless separately evidenced.
