# StegLearn

StegLearn is a homeschool-capable learning system designed to maximize learner growth without capture.

It turns curiosity, creation, explanation, revision, and responsibility into parent-reviewed learning receipts.

## Purpose

StegLearn exists to support human learning as a governed growth process, not as passive screen time, answer production, or curriculum compliance.

The system is designed for learners who grow through questions, building, observation, storytelling, play, experimentation, and explanation.

## Core Principle

> Maximize becoming without capture.

StegLearn may scaffold, guide, challenge, record, and protect.

It must not predetermine what the learner must become.

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

StegLearn treats learning evidence as more than test answers.

Evidence may include:

- questions asked
- things built
- observations made
- explanations given
- mistakes found
- revisions made
- care shown
- skills applied
- artifacts created
- parent-reviewed receipts

## Repository Structure

```text
docs/
  product-spec.md
  learner-loop.md
  homeschool-receipt-model.md
  ai-scaffold-policy.md

lessons/
  README.md
  ti83-arduino-sensor-lab/
    README.md
    lesson.json

schemas/
  learning-path.schema.json
  learning-receipt.schema.json

examples/
  receipts/
    sleep-question-reflection-receipt.json
    ti83-sensor-lab-receipt.json
```

## Learning Paths

StegLearn keeps reusable lessons inside a governed `lessons/` catalog rather than splitting each subject or project into a separate repository.

A learning path is an adaptable scaffold, not a fixed curriculum lane or learner identity. Each path includes supervision guidance, safety gates, evidence opportunities, reflection prompts, subject mappings, and a machine-readable manifest.

The first materialized path is the [TI-83 Plus and Arduino Sensor Lab](lessons/ti83-arduino-sensor-lab/README.md), which moves from electronics restoration through TI-BASIC, sensor observations, a protected Arduino bridge, and governed low-voltage action.

## Relationship to Learning Transition Governance

Learning Transition Governance provides the doctrine for learning as an admissible transition process.

StegLearn is the product-facing implementation path for human learning governance.

The doctrine asks what makes a learning transition admissible.

StegLearn captures the learning loop, preserves evidence, and produces parent-reviewed receipts.

## Implementation Status

The repository contains a local-first web prototype, schemas, example receipts, governance documentation, and reusable learning-path foundations.

The current implementation target remains a complete learner loop that records a question, connects it to an activity, captures the learner explanation, requires parent review, produces a portable receipt, and preserves it in a portfolio.
