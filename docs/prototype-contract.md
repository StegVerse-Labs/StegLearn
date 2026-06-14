# Prototype Contract

The prototype contract defines what the first StegLearn application must preserve.

## Core Contract

The prototype must support this complete loop:

```text
Wonder
→ Activity
→ Evidence
→ Explanation
→ Parent Review
→ Receipt
→ Portfolio
```

## Required Record Boundaries

The prototype must keep these records separate:

```text
learner-session
speech-event
video-event
artifact-record
learning-receipt
portfolio-record
app-permission-state
```

## Required Parent Boundary

A parent or steward must review a session before it becomes an accepted receipt.

## Required Privacy Boundary

All media begins private.

Export and public sharing require parent action.

## Required AI Boundary

AI must be optional.

AI suggestions must be reviewable and must not silently replace learner statements or parent notes.

## Required Export Boundary

Accepted receipts must be exportable as JSON.

Drafts and rejected records should not be included unless explicitly selected by the parent.

## Required Validation Boundary

Accepted records must validate against the relevant schema.

## Required Non-Capture Boundary

The system may describe evidence patterns.

The system must not assign fixed learner identity or destiny.

## Prototype Completion Standard

Prototype 1 is complete when it passes the acceptance tests in `docs/acceptance-tests.md`.
