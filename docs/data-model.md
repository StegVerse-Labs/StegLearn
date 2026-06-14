# Data Model

The StegLearn data model separates temporary sessions from reviewed learning evidence.

## Core Records

```text
learner-session
speech-event
video-event
artifact-record
learning-receipt
portfolio-record
app-permission-state
```

## Learner Session

A learner session is a draft learning event.

It may contain a question, activity type, media references, learner explanation, parent note, and current UI state.

A session is not accepted evidence until reviewed.

## Speech Event

A speech event records spoken input, transcript status, privacy status, and links to a session or receipt.

## Video Event

A video event records playback, capture, review notes, timestamp notes, privacy status, and links to a session or receipt.

## Artifact Record

An artifact record describes a learning artifact such as an image, drawing, video, code file, game map, audio note, or parent note.

## Learning Receipt

A learning receipt is parent-reviewed evidence of a learning event.

It records what happened, what the learner expressed, what evidence supports the event, and whether the parent accepted the record.

## Portfolio Record

A portfolio record groups accepted receipts over time.

It should preserve continuity without turning recurring patterns into fixed identity labels.

## App Permission State

Permission state records whether the app can use microphone, camera, media library, storage, notifications, or network features.

## Boundary Rule

Do not merge these record types into one object.

The boundaries are part of the governance model.
