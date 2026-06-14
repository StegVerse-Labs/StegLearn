# Export Model

StegLearn exports are parent-initiated records of learning evidence.

Exports should support homeschool documentation, family review, portfolio backup, and downstream governance without exposing private data by default.

## Export Types

```text
receipt-json
portfolio-json
receipt-bundle
date-range-summary
subject-summary
artifact-index
```

## Receipt JSON

Exports one accepted learning receipt as JSON.

## Portfolio JSON

Exports portfolio continuity for one learner.

## Receipt Bundle

Exports multiple receipts and linked artifact records.

Media files may be included or referenced depending on parent choice.

## Date Range Summary

Exports accepted receipts within a selected date range.

## Subject Summary

Exports accepted receipts grouped by parent-reviewed subject mappings.

## Artifact Index

Exports a list of artifacts linked to accepted receipts.

## Export Rule

Exports must be parent-initiated.

The learner screen should not expose export or public sharing controls.

## Privacy Rule

Private records remain private unless parent-selected for export.

Public sharing is not the same as export.

## V1 Export

The first export format should be JSON.

Required v1 export:

```text
accepted receipt JSON
portfolio JSON
```

## Future Export

Future versions may support human-readable reports, printable summaries, PDF packets, or jurisdiction-specific homeschool record formats.
