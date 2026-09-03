# Acceptance Tests

Acceptance tests define what the StegLearn prototype must prove before the next build phase.

## Test 1: Spoken Wonder to Receipt

Given a learner speaks a wonder,
when the parent reviews the transcript and accepts the session,
then the system creates a valid learning receipt.

Required evidence:

```text
speech-event
learner-session
parent review
learning-receipt
```

## Test 2: Video Playback to Explanation

Given a learner watches an approved video,
when the learner records an explanation and the parent reviews it,
then the system creates a receipt that distinguishes playback from explanation.

## Test 3: Physical Build with Photo Evidence

Given a learner builds a physical object,
when a photo is attached and the learner explains the build,
then the parent can accept the record as a receipt.

## Test 4: Game Design Reflection

Given a learner creates or modifies a game space,
when the learner explains what players did or what rules changed,
then the parent can accept a receipt with game-design activity type.

## Test 5: Early Language Event

Given a young learner constructs a phrase or sentence,
when the parent records the quote and context,
then the parent can accept a receipt as language evidence.

## Test 6: Rejected Session

Given a session lacks sufficient evidence,
when the parent rejects it,
then it must not be saved as an accepted portfolio record.

## Test 7: Private Media Default

Given a learner records speech, video, or image evidence,
when it is saved as draft,
then its privacy state must be private by default.

## Test 8: Export Accepted Receipt

Given a receipt has been accepted,
when the parent exports it,
then the exported JSON validates against the receipt schema.

## Test 9: No AI Dependency

Given AI is disabled,
when the learner completes the core loop,
then the system can still generate a parent-reviewed receipt.

## Test 10: No Identity Capture

Given multiple receipts show recurring interests,
when the portfolio summarizes them,
then the summary must describe evidence patterns without declaring fixed learner identity.


## Test 11: Early-Language Longitudinal Comparison

Given multiple parent-reviewed language receipts exist for the same local learner,
when the portfolio/history view is rendered,
then the system identifies eligible language observations chronologically without converting the pattern into a fixed developmental label.

Required evidence:

```text
accepted learning receipts
admissibility decisions or language subject mapping
chronological observation comparison
private-by-default export
non-capture note
```

## Test 12: Committed Receipt Fixture Validation

Given one or more JSON receipt examples are committed under `examples/receipts/`,
when the application production build runs,
then every committed receipt example must pass the repository fixture validator before TypeScript/Vite build execution.
