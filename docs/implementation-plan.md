# Implementation Plan

This document defines the first practical build sequence for StegLearn.

## Goal

Build the smallest useful on-screen learning environment that can capture a learner question, attach evidence, support speech and video, generate a parent-reviewed receipt, and save a portfolio record.

## Done for Prototype 1

Prototype 1 is done when the app can complete this flow:

```text
Learner opens home screen
→ learner speaks or enters a wonder
→ learner selects an activity type
→ learner attaches or records evidence
→ learner explains what happened
→ parent reviews the session
→ parent accepts a receipt
→ receipt is saved to portfolio
→ receipt can be exported as JSON
```

## Build Sequence

### Phase 1: Static Prototype

Create screens without persistence.

Required screens:

```text
learner home
wonder capture
activity prompt
artifact capture
speech record
video playback
parent review
receipt view
portfolio timeline
```

### Phase 2: Local Data

Add local data records for:

```text
learner-session
artifact-record
speech-event
video-event
learning-receipt
portfolio-record
```

### Phase 3: Receipt Generation

Generate a receipt from a reviewed learner session.

Validate the receipt against `schemas/learning-receipt.schema.json`.

### Phase 4: Portfolio Save

Save accepted receipts into a portfolio record.

Validate the portfolio against `schemas/portfolio-record.schema.json`.

### Phase 5: Export

Export accepted receipts as JSON.

Export should be parent-initiated.

## Deferred Features

Do not build these first:

```text
public sharing
multi-user cloud sync
marketplace content
automated grading
legal compliance certification
social feed
ranking
streak systems
```

## Build Rule

Build the learning loop before building the curriculum layer.
