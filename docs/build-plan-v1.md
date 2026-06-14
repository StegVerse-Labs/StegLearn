# Build Plan V1

This document translates the StegLearn prototype contract into the first buildable app plan.

## Goal

Build a local-first web prototype that can complete one full learning loop without requiring accounts, cloud sync, AI, public sharing, or a full curriculum engine.

## V1 Done Definition

V1 is done when the app can:

```text
create learner session
capture typed or spoken wonder
select activity type
attach artifact
record or enter learner explanation
send session to parent review
generate learning receipt
validate receipt shape
accept receipt
save portfolio record
export accepted receipt JSON
```

## V1 Constraints

```text
local-first
single-device
single-family
no public sharing
no account system
no automated grading
no fixed learner labels
no AI dependency
parent review required
```

## V1 Screens

```text
Learner Home
Wonder Capture
Activity Select
Artifact Capture
Explanation Capture
Parent Review
Receipt View
Portfolio Timeline
Export View
```

## V1 Data Records

```text
learner-session
artifact-record
speech-event
video-event
learning-receipt
portfolio-record
app-permission-state
```

## V1 Storage

Use local storage for prototype records.

Media may be represented by local file metadata or object URLs during prototype use.

Accepted receipts must be exportable as JSON.

## V1 Speech

Use browser-supported recording where available.

Manual parent transcription is required as fallback.

Automatic transcript support is optional.

## V1 Video

Use standard HTML video playback.

Video capture may be deferred if artifact attachment and playback work first.

## V1 Validation

Validate accepted records against the repo schemas before treating them as final.

If full schema validation is not implemented in the first code pass, the app must still preserve all required fields.

## V1 Build Order

1. Static screens
2. Local session state
3. Artifact attachment
4. Parent review
5. Receipt generation
6. Portfolio save
7. JSON export
8. Speech recording or transcription fallback
9. Video playback
10. Schema validation

## V1 Non-Goals

```text
cloud sync
multi-learner permissions
public publishing
jurisdiction-specific homeschool compliance
AI tutor behavior
content marketplace
social features
ranking or streaks
```

## V1 Success Test

Create and export one accepted receipt for each example:

```text
sleep question
reality render question
Halo game design
LEGO build
toddler sentence construction
```
