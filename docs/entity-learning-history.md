# Entity Learning History

Entity learning history records learning-relevant transitions for a specific entity.

An entity may be a learner, parent, AI scaffold, session, artifact, receipt, portfolio, curriculum reference, or future teaching agent.

## Purpose

Per-entity history allows StegLearn to reconstruct how learning occurred, who participated, what evidence was accepted, and what changed over time.

## Entity Types

```text
learner
parent-steward
ai-scaffold
session
artifact
receipt
portfolio
curriculum-reference
teaching-agent
```

## Learner History

Learner history records questions, activities, artifacts, explanations, reviews, accepted receipts, portfolio changes, and follow-up questions.

## Parent-Steward History

Parent-steward history records review actions, accepted receipts, rejected receipts, subject mappings, privacy changes, and export actions.

## AI Scaffold History

AI scaffold history records suggestions, summaries, follow-up questions, and any accepted or rejected AI contributions.

AI history is important because AI should remain accountable and review-bound.

## Artifact History

Artifact history records creation, attachment, review, privacy state, linked sessions, linked receipts, and export status.

## Receipt History

Receipt history records draft creation, parent review, acceptance, rejection, revision, export, and portfolio linkage.

## Teaching Agent History

A future teaching agent may have its own reconstructable teaching history.

This matters because teaching quality should be auditable, not merely asserted.

## Reconstruction Questions

For any entity, the system should be able to ask:

```text
What events involve this entity?
What evidence supports those events?
Who reviewed or accepted the event?
What downstream records were affected?
What claims can be made from the history?
What claims would be overreach?
```

## Privacy Boundary

Per-entity history must remain private by default.

Entity history should be exportable only through parent or steward action.

## Non-Capture Boundary

Entity history may show evidence patterns.

It must not become an identity cage, ranking system, or destiny engine.
