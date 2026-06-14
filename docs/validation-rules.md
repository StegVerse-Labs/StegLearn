# Validation Rules

StegLearn validation exists to protect the learning record from false evidence, missing review, accidental public exposure, and identity capture.

## Record Validation

All structured records should validate against their schemas before being saved as accepted records.

Schemas currently include:

```text
schemas/learning-receipt.schema.json
schemas/learner-session.schema.json
schemas/artifact-record.schema.json
schemas/speech-event.schema.json
schemas/video-event.schema.json
schemas/app-permission-state.schema.json
schemas/portfolio-record.schema.json
```

## Session Validation

A learner session may be saved as draft with partial data.

A session may not move to parent review unless it has:

```text
session_id
learner_id
state
wonder or activity summary
learner explanation or attached evidence
```

## Receipt Validation

A receipt may not be accepted unless it has:

```text
receipt_id
created_at
learner_id
wonder
activity_summary
learner_explanation
parent_review
subject_mappings
evidence_items
status
```

The parent review must include:

```text
reviewed_by
reviewed_at
review_note
accepted
```

## Portfolio Validation

A portfolio record may only include accepted receipt IDs.

Draft or rejected receipts should not appear as accepted portfolio continuity.

## Privacy Validation

Any artifact, speech event, video event, receipt, or portfolio export must include a privacy state.

Default privacy state should be:

```text
private
```

## AI Validation

AI-generated content must be marked as AI-generated or remain in a suggestion field.

AI-generated text should not silently replace learner speech, parent notes, or raw evidence.

## Non-Capture Validation

The system should avoid fixed learner identity labels.

Allowed:

```text
This receipt shows evidence of game design reflection.
```

Not allowed:

```text
This learner is a game designer.
```

## Export Validation

Exports must be parent-initiated.

Exports should include only accepted records unless the parent explicitly includes drafts.
