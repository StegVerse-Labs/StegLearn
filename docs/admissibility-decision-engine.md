# Admissibility Decision Engine

The admissibility decision engine compares a current learning event against the learner's known admissibility profile.

## Purpose

StegLearn should not treat every evidence mode the same for every learner.

A current learning event should be interpreted through the learner's reviewed history.

## Decision Inputs

```text
learner_id
current evidence mode
learner admissibility profile
parent review note
artifact count
learner explanation
receipt purpose
```

## Decision Classes

```text
known-accepted
new-emerging
needs-support
insufficient
```

## Known Accepted

The current evidence mode is already accepted for this learner.

This means the system has prior parent-reviewed history that this learner can demonstrate learning in this mode.

## New Emerging

The current evidence mode is not yet accepted but may be accepted by parent review.

This is how the learner profile expands without freezing the learner into prior patterns.

## Needs Support

The current evidence mode is known to require extra support for this learner.

The event may still be accepted if the parent review supplies enough context.

## Insufficient

The event lacks required minimum evidence.

This is not a judgment about the learner.

It is a statement that the record is not yet strong enough to accept.

## Parent Authority

The engine may recommend a decision class.

The parent or steward remains the acceptance authority.

## Non-Capture Rule

A decision class applies to one event.

It must not become a fixed identity statement about the learner.

## V1 Behavior

V1 should display the decision class during parent review and save it into the local decision record.
