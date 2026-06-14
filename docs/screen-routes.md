# Screen Routes

Screen routes define the first navigable prototype structure for StegLearn.

## Learner Routes

```text
/
/learner
/learner/ask
/learner/activity
/learner/watch
/learner/capture
/learner/tell
/learner/waiting-review
/learner/portfolio
```

## Parent Routes

```text
/parent
/parent/reviews
/parent/reviews/:session_id
/parent/receipts
/parent/receipts/:receipt_id
/parent/portfolio
/parent/export
/parent/privacy
/parent/settings
```

## Shared Routes

```text
/receipt/:receipt_id
/artifact/:artifact_id
/help
```

## Route Purposes

### /learner

Learner home screen.

### /learner/ask

Capture a wonder through text, speech, drawing, or parent entry.

### /learner/activity

Select or receive an activity prompt.

### /learner/watch

Play approved video or learner-created video.

### /learner/capture

Attach image, video, audio, drawing, file, or other artifact.

### /learner/tell

Record or enter learner explanation.

### /learner/waiting-review

Shows that the session is waiting for parent review.

### /learner/portfolio

Simple learner-facing lookback view.

### /parent/reviews

List sessions pending review.

### /parent/reviews/:session_id

Review a draft session and generate or reject a receipt.

### /parent/receipts

List accepted or draft receipts.

### /parent/portfolio

View portfolio continuity.

### /parent/export

Export parent-reviewed records.

### /parent/privacy

Control media, storage, sharing, and export settings.

## V1 Rule

The learner side should remain simple.

Detailed settings, privacy, exports, and legal records belong on the parent side.
