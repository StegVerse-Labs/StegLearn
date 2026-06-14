# Reconstructable Learning History

Reconstructable learning history means a learner's growth can be replayed from reviewed evidence without reducing the learner to scores, labels, or a fixed identity.

## Purpose

StegLearn should not only store final receipts.

It should preserve enough transition history to reconstruct how a learner moved from exposure to question, activity, explanation, review, receipt, and portfolio continuity.

## Core Idea

A learning record is stronger when it can answer:

```text
What was the learner exposed to?
What did the learner notice?
What question or action followed?
What artifact or behavior was produced?
What did the learner explain?
Who reviewed the event?
What was accepted as evidence?
What changed afterward?
```

## Reconstruction Boundary

Reconstruction does not mean total surveillance.

It means reviewed, bounded, parent-controlled continuity.

The system should capture enough to reconstruct learning transitions, not every moment of the learner's life.

## Entity Scope

A reconstructable history may belong to multiple entity types:

```text
learner
parent-steward
ai-scaffold
session
artifact
receipt
portfolio
curriculum-reference
```

## Transition Event

The smallest reconstructable unit is a transition event.

Example:

```text
learner asked question
learner selected activity
learner attached artifact
learner explained result
parent reviewed session
receipt accepted
portfolio updated
```

## Why This Matters

Reconstructable learning history can support:

- homeschool documentation
- longitudinal growth review
- parent reflection
- AI scaffold accountability
- curriculum transparency
- learning research with consent
- learner self-understanding
- auditability of educational claims
- evidence-based personalization without identity capture

## Non-Capture Rule

A reconstructable history is not a destiny record.

It may show patterns, gaps, revisions, and interests.

It must not define what the learner is allowed to become.

## V1 Requirement

V1 should generate a simple transition event whenever a receipt is accepted.

Later versions should record more granular events across the full learning loop.
