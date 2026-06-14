# Media Pipeline

The StegLearn media pipeline defines how speech, video, images, drawings, screenshots, audio, and other artifacts move from capture to reviewed evidence.

## Purpose

Media should support learning receipts without creating unnecessary exposure or surveillance.

The pipeline preserves the boundary between raw capture, reviewed artifact, receipt evidence, and portfolio record.

## Pipeline

```text
capture
→ local draft
→ metadata review
→ parent review
→ evidence item
→ receipt link
→ portfolio continuity
```

## Capture

Media may be created by the learner, parent, device, app, or imported from another source.

Capture may include:

- speech recording
- transcript
- video
- photo
- drawing
- screenshot
- game map
- code file
- audio note

## Local Draft

Captured media should begin as a private draft.

Draft media should not become public or portfolio evidence automatically.

## Metadata Review

Before media becomes evidence, the system should consider whether it includes sensitive details.

Examples:

- faces
- names
- exact locations
- background voices
- home layout
- school identifiers
- account names
- public usernames

## Parent Review

The parent or steward decides whether the media is accepted as evidence, edited, summarized, rejected, deleted, or kept private.

## Evidence Item

Accepted media becomes an evidence item only after review.

The evidence item should describe what learning claim the media supports.

## Receipt Link

A receipt may link to one or more accepted evidence items.

The receipt should preserve the difference between learner-created media, parent notes, and AI summaries.

## Portfolio Continuity

Accepted receipts and their evidence may become part of the learner portfolio.

## Storage Principle

Store the minimum media needed to support the learning record.

Prefer local-first or parent-controlled storage when possible.

## V1 Rule

V1 may support simple file references, but the receipt must still record privacy state, artifact type, description, and review status.
