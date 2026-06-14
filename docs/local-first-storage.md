# Local-First Storage

StegLearn should remain useful without requiring constant network access.

Learning events, drafts, receipts, and portfolio records should be able to exist locally before any sync or export.

## Purpose

Local-first storage supports:

- privacy
- offline use
- parent control
- draft safety
- media review
- homeschool record continuity

## Stored Record Types

```text
learner-session
speech-event
video-event
artifact-record
learning-receipt
portfolio-record
app-permission-state
parent-settings
```

## Draft Storage

Draft sessions and draft media should be stored locally until parent review.

Drafts may be deleted, edited, accepted, or exported by the parent.

## Receipt Storage

Accepted receipts should be stored in a durable local record set.

Receipts should be exportable as JSON and eventually as human-readable reports.

## Media Storage

Media may be stored as local file references, secure app storage references, or parent-selected file paths.

Receipts should reference media without requiring public upload.

## Sync Boundary

Sync is optional.

If sync is added, it must preserve parent control and privacy status.

## Export Boundary

Export is parent-initiated.

Supported future exports may include:

- JSON receipt bundle
- portfolio report
- subject summary
- date-range record
- artifact index

## V1 Rule

The first prototype may use simple local JSON files or browser storage, but it must preserve record boundaries and parent-reviewed receipt status.
