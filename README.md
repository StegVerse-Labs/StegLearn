# StegLearn

StegLearn is a governed learning system designed to maximize participant growth without capture.

Its broader product model is conversational: a human or admitted AI entity can enter StegLearn, describe a desired skill, capability, or body of knowledge, agree on the desired depth, receive a governed curriculum, obtain a reviewable version of that curriculum, and then be taught that curriculum by the StegLearn AI Entity.

Its preferred initial deployment posture is **human teacher + governed AI Entity**: the teacher remains the educational authority while StegLearn helps observe permitted learning activity, generate appropriate learning paths, make those paths reviewable before execution, teach within delegated scope, adapt instruction, support learners, and preserve evidence of growth.

StegLearn turns curiosity, desired capability, creation, explanation, revision, participation, and responsibility into reviewed learning evidence and portable learning receipts.

## Product Model

```text
Participant enters StegLearn
→ conversation about desired skill / knowledge / outcome
→ establish starting point + desired depth
→ generate governed curriculum
→ produce reviewable curriculum version
→ review / revise / select according to entity authority
→ teach selected curriculum version
→ observe permitted engagement / participation / progress
→ adapt instruction
→ preserve evidence + revision
→ review / receipt / continuity
```

The reviewable curriculum is intended to support both human-readable and machine-readable inspection of the same versioned curriculum. A participant, teacher, steward, subject-matter reviewer, institution, admitted AI reviewer, or other governed entity may inspect or comment according to its admitted role. Review capability does not itself grant approval or teaching authority.

The intended instructional range can extend from first exposure and foundational learning through advanced professional, graduate, doctoral, and post-doctoral depth where the subject supports those levels.

Those levels describe instructional depth and rigor. They do not themselves constitute accreditation, degrees, licenses, or institutional credentials.

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

StegLearn may scaffold, guide, challenge, teach, record, and protect.

It must not predetermine what the participant must become.

## Learning Loop

The evidence layer beneath live curriculum generation and teaching remains:

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

## What Counts as Learning Evidence

StegLearn treats learning evidence as more than test answers.

Evidence may include:

- questions asked
- participation in learning activity
- things built
- observations made
- explanations given
- demonstrations completed
- mistakes found
- revisions made
- code, designs, research, or other artifacts
- skills applied
- teacher-, parent-, steward-, or contextually reviewed receipts

AI interpretations must remain distinguishable from participant evidence, teacher or parent notes, and sensor observations.

## Curriculum Depth

StegLearn may construct revisable paths at levels such as:

- orientation / first exposure
- foundational literacy
- beginner
- intermediate
- advanced
- vocational / applied professional
- undergraduate-equivalent
- graduate / master's-equivalent
- doctoral / research-equivalent
- post-doctoral / frontier-specialization depth where applicable

Requested level does not automatically prove readiness. StegLearn may recommend prerequisite work without turning that recommendation into a fixed participant identity.

## Human and AI Participants

A human may enter StegLearn to develop a skill, learn a discipline, prepare for advanced study, or pursue a research question.

An admitted AI entity may also participate in a governed learning relationship when its identity, authority, permitted inputs and outputs, evidence obligations, and learning-state mutation rights are explicitly bounded.

The ability of an external model or agent to send requests does not itself establish admission.

## Reviewable Curriculum

Every generated curriculum should be capable of becoming a stable review artifact before or during teaching.

The review surface should provide:

- a human-readable curriculum;
- a machine-readable canonical curriculum;
- stable curriculum identity and version;
- review comments or decisions tied to the reviewed version;
- a clear distinction between inspection, comment, revision request, approval, and teaching authorization;
- traceability from the selected curriculum version into the teaching session.

StegLearn must not present one curriculum for review and silently teach a materially different curriculum without recording the change.

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

lessons/
  README.md
  ti83-arduino-sensor-lab/
    README.md
    lesson.json

schemas/
  learning-path.schema.json
  learning-receipt.schema.json
  curriculum-review-package.schema.json
  external-learning-interlock.schema.json
```

## Learning Paths

StegLearn keeps reusable lessons inside a governed `lessons/` catalog rather than splitting each subject or project into a separate repository.

A learning path is an adaptable scaffold, not a fixed curriculum lane or participant identity. Generated curricula may also synthesize prerequisite maps, objectives, readings, exercises, projects, experiments, research questions, specialization branches, evidence expectations, and completion criteria appropriate to the requested learning goal.

The first materialized path is the [TI-83 Plus and Arduino Sensor Lab](lessons/ti83-arduino-sensor-lab/README.md), which moves from electronics restoration through TI-BASIC, sensor observations, a protected Arduino bridge, and governed low-voltage action.

## External Learning Relationships

StegLearn may evaluate or interact with external educational systems only through an explicit, bounded relationship contract. External access or content availability does not itself grant authority to change StegLearn state.

The first installed external-learning relationship is the evaluation-only Edukors Interlock/InTr lane documented in [`docs/EDUKORS_INTR_MIRROR_HANDOFF.md`](docs/EDUKORS_INTR_MIRROR_HANDOFF.md). Its machine-readable relationship is `steglearn.edukors.evaluation.v1`.

The current Edukors relationship permits unauthenticated public educational observation, comparison, evidence/artifact intake, and human-mediated requests. It does not permit authenticated access, automated mutation of Edukors, direct mutation of StegLearn, learner-private-data egress, or inference of partnership or endorsement.

## Relationship to Learning Transition Governance

Learning Transition Governance provides the doctrine for learning as an admissible transition process.

StegLearn is the product-facing implementation path for governed learning.

The doctrine asks what makes a learning transition admissible.

StegLearn captures learning goals, generates reviewable curricula, teaches selected curriculum versions, preserves evidence, adapts instruction, and produces reviewed learning receipts while maintaining explicit authority boundaries around AI assistance, participant identity, review authority, and sensor use.

## Implementation Status

The repository contains a local-first web prototype, schemas, example receipts, governance documentation, reusable learning-path foundations, teacher-first governed AI architecture, conversational curriculum-generation and teaching doctrine, a curriculum review/teaching contract and schema, public landing-page source, and an evaluation-only external-learning Interlock/InTr contract for Edukors.

The current implementation target is a teacher-assisted complete learning loop in which StegLearn can discuss a desired outcome, build a bounded path, render that path for review, teach the selected version within admitted scope, and preserve evidence without silently acquiring educational authority.

Dynamic curriculum generation across the full requested depth range, generalized AI-participant learning, runtime review-package rendering, curriculum-version-bound teaching, sensor-mediated classroom assistance, on-screen AI Entity interaction, and teacher-delegated small-group teaching remain implementation targets unless separately evidenced as working runtime behavior.
