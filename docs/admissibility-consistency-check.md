# Admissibility Consistency Check

Admissibility consistency checks compare the replayed profile state against the stored learner admissibility profile.

## Purpose

Replay makes a profile explainable.

A consistency check asks whether the explanation still matches the current stored profile.

## Inputs

```text
stored learner admissibility profile
admissibility replay report
admissibility decisions
profile snapshots
```

## Outputs

```text
consistent
inconsistent
warnings
profile differences
missing replay records
```

## Why This Matters

If the current learner profile cannot be reconstructed from saved decisions and snapshots, then one of the following may be true:

```text
a record is missing
a profile was edited outside the review path
a decision was not snapshotted
a snapshot was corrupted
a migration changed data shape
```

## Non-Capture Boundary

A consistency warning is about record integrity.

It is not a judgment about the learner.

## V1 Requirement

V1 should compare accepted, emerging, support-needed, and preferred evidence modes between the replayed final profile and the stored current profile.

The result should be visible in the UI and exportable as JSON.
