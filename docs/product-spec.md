# StegLearn Product Spec

## Purpose

StegLearn is a homeschool-capable learning system that helps a learner move from curiosity to evidence-backed growth without being reduced to a predetermined curriculum outcome.

It is not designed to replace the world with a screen.

It is designed to organize the learner's interaction with the world.

## V1 Definition of Done

A learner can complete one learning loop:

```text
Wonder
→ Build or Observe
→ Explain
→ Parent Review
→ Learning Receipt
→ Portfolio Record
```

The system is done for v1 when it can:

1. capture a learner question or prompt
2. connect it to a build, observation, story, experiment, or reflection
3. capture the learner's explanation
4. allow parent review
5. generate a structured learning receipt
6. store the receipt as a portfolio record

## Product Roles

### Learner

The learner asks, explores, builds, explains, revises, and reflects.

The learner is not treated as a score-producing object.

### Parent or Steward

The parent acts as steward, witness, safety layer, and continuity holder.

The parent reviews receipts and may add context, subject mappings, or compliance notes.

### AI Scaffold

The AI may suggest paths, translate questions into activities, ask clarifying questions, and summarize learning evidence.

The AI is not the final authority over the learner.

### Curriculum Reference

Curriculum is treated as a reference layer, not as the ruler of the learner's identity or destination.

### Compliance Layer

Homeschool requirements may be mapped after the learning event.

Compliance must not become the sole definition of learning.

## Core Features

### Wonder Capture

The system records a question, observation, idea, or prompt.

Examples:

- Does reality render when we are not looking?
- Why does sleep feel instant?
- Can I build a bridge that holds five books?
- What happens if players use my game map differently than I expected?

### Activity Capture

The system records what the learner did.

Activities may include:

- building
- drawing
- filming
- coding
- reading
- observing
- experimenting
- narrating
- discussing
- designing a game or rule system

### Explanation Capture

The learner explains what happened, what they think, what changed, or what they would try next.

This may be typed, dictated, recorded as audio, recorded as video, or entered by a parent.

### Parent Review

The parent reviews the receipt, adds context, and confirms whether the record is accepted as learning evidence.

### Portfolio Continuity

Receipts accumulate into a portfolio that can show growth over time.

## Non-Capture Requirement

No lesson path, score, AI recommendation, or compliance category may be treated as the learner's destiny.

The system must support growth without forcing identity.

## Initial Implementation Boundary

The first implementation should remain small.

It should focus on one complete receipt flow before attempting full curriculum generation, dashboards, accounts, or legal compliance automation.
