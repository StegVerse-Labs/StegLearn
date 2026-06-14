# UI State Machine

The StegLearn UI state machine defines the lifecycle of a learning event inside the on-screen environment.

It helps distinguish temporary learner activity from reviewed learning evidence.

## Purpose

The system must know where a learning event is in its lifecycle.

A session is not automatically a receipt.

A receipt is not automatically accepted evidence.

A portfolio record should come from reviewed receipt state.

## State List

```text
idle
wonder-captured
activity-selected
artifact-added
explanation-captured
parent-review-pending
receipt-draft
receipt-accepted
receipt-rejected
receipt-needs-follow-up
portfolio-saved
```

## State Definitions

### idle

No active learning session is in progress.

### wonder-captured

A question, observation, prompt, idea, or event has been captured.

### activity-selected

The learner or parent has selected an activity type or action path.

### artifact-added

At least one artifact, note, quote, image, video, audio file, build record, or observation has been attached.

### explanation-captured

The learner has provided an explanation, reflection, quote, or parent-transcribed expression.

### parent-review-pending

The learning event is ready for parent or steward review.

### receipt-draft

A structured receipt has been generated but not accepted.

### receipt-accepted

The parent or steward has accepted the receipt as learning evidence.

### receipt-rejected

The parent or steward has rejected the receipt as insufficient, incorrect, duplicate, private, unsafe, or not useful.

### receipt-needs-follow-up

The parent or steward has marked the receipt as needing additional activity, explanation, evidence, or review.

### portfolio-saved

An accepted receipt has been saved into portfolio continuity.

## Minimal Transitions

```text
idle
→ wonder-captured
→ activity-selected
→ artifact-added
→ explanation-captured
→ parent-review-pending
→ receipt-draft
→ receipt-accepted
→ portfolio-saved
```

## Alternate Transitions

```text
parent-review-pending
→ receipt-rejected

parent-review-pending
→ receipt-needs-follow-up
→ activity-selected

receipt-draft
→ parent-review-pending

receipt-accepted
→ portfolio-saved
```

## Guardrails

A receipt should not move to accepted without parent or steward review.

A portfolio record should not be generated from a rejected receipt.

A learner explanation should remain distinguishable from parent notes and AI summaries.

## V1 Rule

The app may keep the state machine simple, but it must preserve the boundary between session, draft receipt, accepted receipt, and portfolio record.
