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

schemas/
  learning-receipt.schema.json

examples/
  receipts/
    sleep-question-reflection-receipt.json
```

## Relationship to Learning Transition Governance

Learning Transition Governance provides the doctrine for learning as an admissible transition process.

StegLearn is the product-facing implementation path for human learning governance.

The doctrine asks what makes a learning transition admissible.

StegLearn captures the learning loop, preserves evidence, and produces parent-reviewed receipts.

## Initial Status

This repository begins as a design and documentation foundation.

The first implementation target is a minimal learner loop that can record a child question, connect it to an activity, capture the learner explanation, allow parent review, and generate a portable learning receipt.
