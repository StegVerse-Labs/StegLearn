# Admissibility Profile Snapshots

Admissibility profile snapshots preserve the learner profile state after each accepted receipt.

## Purpose

The current profile tells the parent what is true now.

The timeline tells the parent how often evidence modes appeared.

A profile snapshot tells the parent what the profile looked like at a specific moment after a specific receipt.

## Why Snapshots Matter

Without snapshots, profile history has to be reconstructed only from decisions.

With snapshots, the system can replay profile evolution exactly.

This supports:

```text
profile comparison
profile rollback discussion
longitudinal review
homeschool documentation
AI scaffold accountability
parent reflection
```

## Snapshot Trigger

V1 creates a snapshot after an accepted receipt updates, or deliberately does not update, the learner admissibility profile.

## Snapshot Content

A snapshot should include:

```text
snapshot id
created at
learner id
source receipt id
source decision id
accepted modes
emerging modes
modes needing support
profile update disposition
review note
```

## Non-Capture Boundary

A snapshot is a historical record of evidence handling.

It must not define the learner permanently.

## V1 Requirement

V1 should save snapshots locally and export them as JSON.
