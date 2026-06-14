# Homeschool Receipt Model

StegLearn receipts are structured records of learning events.

They are designed to support homeschool-capable documentation without reducing learning to worksheets, scores, or rigid curriculum pacing.

## Purpose

A learning receipt records:

- what the learner wondered
- what the learner did
- what artifact or observation was produced
- what the learner explained
- what the parent or steward reviewed
- what subjects or skills may be mapped
- what evidence supports the record

## Receipt Status

A receipt may have one of the following statuses:

```text
draft
reviewed
accepted
rejected
needs-follow-up
```

## Evidence Types

Supported evidence may include:

- text
- parent note
- learner quote
- audio
- video
- image
- drawing
- build artifact
- code
- game map
- experiment result
- outdoor observation
- reading reflection

## Subject Mapping

Subject mappings are optional and reviewable.

Examples:

- language arts
- mathematics
- science
- social studies
- engineering
- art
- music
- physical education
- social-emotional learning
- practical life skills
- technology
- media literacy

Subject mapping should describe what the activity touched, not falsely claim mastery.

## Compliance Boundary

Homeschool requirements vary by jurisdiction.

StegLearn may help organize records for review, but compliance claims must remain jurisdiction-specific and parent-reviewed.

## Non-Capture Rule

A receipt is evidence of a learning event.

It is not the learner's identity.

No receipt, category, score, or subject tag may be used to predetermine the learner's future path.

## Minimal Receipt Fields

A v1 receipt should include:

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

## Review Standard

A parent or steward should be able to answer:

1. What happened?
2. What did the learner express or demonstrate?
3. What evidence exists?
4. What should be revisited?
5. What, if anything, can be mapped for homeschool records?

## Portfolio Role

Receipts should accumulate into a portfolio that shows growth over time.

The portfolio should preserve questions, artifacts, explanations, revisions, and responsibilities.
