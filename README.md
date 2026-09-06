# StegLearn

StegLearn is a homeschool-capable learning system designed to maximize learner growth without capture.

It turns curiosity, creation, explanation, revision, and responsibility into parent-reviewed learning receipts.

## Purpose

StegLearn exists to support human learning as a governed growth process, not as passive screen time, answer production, or curriculum compliance.

The system is designed for learners who grow through questions, building, observation, storytelling, play, experimentation, and explanation.

## Core Principle

> Maximize becoming without capture.

StegLearn may scaffold, guide, challenge, record, and protect. It must not predetermine what the learner must become.

## V1 Learning Loop

```text
Wonder
→ Build or Observe
→ Explain
→ Review
→ Receipt
→ Portfolio
```

## What Counts as Learning Evidence

StegLearn treats learning evidence as more than test answers. Evidence may include questions asked, things built, observations made, explanations given, mistakes found, revisions made, care shown, skills applied, artifacts created, and parent-reviewed receipts.

## Repository Structure

```text
docs/
  product-spec.md
  learner-loop.md
  homeschool-receipt-model.md
  ai-scaffold-policy.md
  EDUKORS_INTR_MIRROR_HANDOFF.md
  STEGVERSE_FOUNDATIONS_MIRROR_HANDOFF.md

lessons/
  README.md
  stegverse-foundations/
    README.md
    path.json
    01-what-is-stegverse/
      README.md
      lesson.json
      scenes.json
      captions.json
  ti83-arduino-sensor-lab/
    README.md
    lesson.json

schemas/
  learning-path.schema.json
  learning-receipt.schema.json
  external-learning-interlock.schema.json
  video-lesson.schema.json
  lesson-scene.schema.json
  caption-track.schema.json

examples/
  receipts/
  interlocks/

generated/
  README.md
```

## Learning Paths

StegLearn keeps reusable lessons inside a governed `lessons/` catalog rather than splitting each subject or project into a separate repository.

A learning path is an adaptable scaffold, not a fixed curriculum lane or learner identity. Each path includes supervision guidance, safety gates, evidence opportunities, reflection prompts, subject mappings, and machine-readable manifests.

The first materialized project path is the [TI-83 Plus and Arduino Sensor Lab](lessons/ti83-arduino-sensor-lab/README.md).

## StegVerse Foundations

[StegVerse Foundations](lessons/stegverse-foundations/README.md) is the first ecosystem-learning curriculum. It teaches the purpose, principles, mechanics, authority boundaries, evidence model, and practical operation of StegVerse through guided tutorials.

The roadmap begins with twelve modules covering ecosystem purpose, StegID, KV, devices and nodes, Submit/Interlock/InTr, authority, StegCore, receipts, HB/runtime, AI participation, SKAP capabilities, and external-system boundaries. Module 01 — **What Is StegVerse?** — is materialized as the first canonical static lesson package.

### Canonical lesson data → presentation

StegLearn owns the instructional representation. AI SiteFlow is an intended first static presentation target, but the renderer does not become the authority for lesson claims.

For a materialized video-capable lesson:

- `lesson.json` binds objectives and exact claims to canonical repository sources;
- `scenes.json` defines ordered narration, captions, visual instructions, claim bindings, and `do_not_imply` constraints;
- `captions.json` is the canonical caption track and must remain byte-for-text aligned with the scene captions;
- generated video, audio, transcripts, thumbnails, or renderer packages are downstream outputs and are not authoritative lesson sources.

A renderer may compose timing, typography, transitions, voice, and compatible visuals. It may not invent claims, silently change authority semantics, convert source or CI evidence into runtime claims, or make generated content canonical by itself.

The representation is provider-independent so another renderer can reproduce the lesson if SiteFlow is unavailable.

## External Learning Relationships

StegLearn may evaluate or interact with external educational systems only through an explicit, bounded relationship contract. External access or content availability does not itself grant authority to change StegLearn state.

The first installed external-learning relationship is the evaluation-only Edukors Interlock/InTr lane documented in [`docs/EDUKORS_INTR_MIRROR_HANDOFF.md`](docs/EDUKORS_INTR_MIRROR_HANDOFF.md). Its machine-readable relationship is `steglearn.edukors.evaluation.v1`.

The current Edukors relationship permits unauthenticated public educational observation, comparison, evidence/artifact intake, and human-mediated requests. It does not permit authenticated access, automated mutation of Edukors, direct mutation of StegLearn, learner-private-data egress, or inference of partnership or endorsement. Any API, MCP, authenticated account, AI-agent, or other machine transport requires a separately admitted capability package.

For credential-free public observation, StegLearn reuses the canonical StegOS Universal InTr connector profile `external-api-observation`; it does not mint a competing Edukors-specific connector profile.

External observations become StegLearn evidence only after the applicable Interlock/InTr ingress boundary is satisfied. Source installation, public retrieval, CI, or repository presence does not prove an authentic runtime Interlock/InTr transition. Ordinary web retrieval is not a substitute for an authentic InTr materialization receipt or Master Records reconciliation.

## Relationship to Learning Transition Governance

Learning Transition Governance provides the doctrine for learning as an admissible transition process. StegLearn is the product-facing implementation path for human learning governance.

## Implementation Status

The repository contains a local-first web prototype, schemas, example receipts, governance documentation, reusable learning paths, the StegVerse Foundations static lesson-rendering contract, and an evaluation-only external-learning Interlock/InTr contract for Edukors.

The current learning implementation target remains a complete learner loop that records a question, connects it to an activity, captures the learner explanation, requires parent review, produces a portable receipt, and preserves it in a portfolio. Static lesson rendering does not itself establish learner understanding; accepted learning evidence remains separately reviewable.
