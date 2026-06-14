# Admissibility Replay

Admissibility replay reconstructs learner-profile evolution from saved admissibility decisions and profile snapshots.

## Purpose

A learner admissibility profile should be explainable.

Replay makes the explanation mechanical:

```text
start with no profile
apply decision 1
create snapshot 1
apply decision 2
create snapshot 2
compare final state
```

## Replay Inputs

```text
admissibility decisions
profile snapshots
source receipt ids
profile update dispositions
review notes
```

## Replay Outputs

Replay should produce:

```text
final accepted modes
final emerging modes
final modes needing support
ordered replay steps
warnings for missing snapshots or decisions
non-capture note
```

## Why Replay Matters

Replay allows a parent or steward to ask:

```text
What changed?
When did it change?
Which receipt caused the change?
Which reviewer accepted the change?
Was the change accepted, emerging, support-needed, or no-change?
Can the profile be explained without guessing?
```

## Non-Capture Boundary

Replay explains the system's evidence-handling history.

It must not become a learner ranking, destiny model, or ability ceiling.

## V1 Requirement

V1 should include a pure replay helper that can rebuild a profile summary from local admissibility decisions and snapshots.

The replay report should be exportable once wired into the UI.
