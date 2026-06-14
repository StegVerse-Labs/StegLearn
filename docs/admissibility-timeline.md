# Admissibility Timeline

An admissibility timeline reconstructs how a learner's evidence modes changed over time.

## Purpose

The learner admissibility profile shows the current state.

The admissibility timeline shows how that state was reached.

This distinction matters because the learner profile should remain explainable, revisable, and review-bound.

## Timeline Inputs

```text
admissibility decisions
accepted receipts
parent review notes
evidence modes
profile update choices
receipt timestamps
```

## Timeline Events

Each accepted receipt may produce one admissibility decision.

That decision should preserve:

```text
evidence mode
decision class
profile update
reason
reviewer
source receipt
created date
```

## Reconstructable Questions

The system should be able to answer:

```text
When did this mode first appear?
When was this mode accepted?
How often was this mode used?
Was the mode ever marked as needing support?
Which receipt caused a profile change?
Which parent note justified the change?
```

## Non-Capture Boundary

The timeline explains profile evolution.

It must not become a ranking system or a permanent learner identity.

## V1 Requirement

V1 should generate a local admissibility timeline summary from saved decisions.

The summary should be exportable as JSON.
