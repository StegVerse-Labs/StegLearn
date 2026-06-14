# Technology Choice

This document defines the recommended technology direction for the first StegLearn prototype.

## Recommendation

Use a simple web prototype first.

Recommended stack:

```text
Vite
React
TypeScript
localStorage or IndexedDB
HTML media APIs
JSON schema validation
```

## Why Web First

A web prototype is easiest to test quickly across desktop and mobile browsers.

It can later evolve into a progressive web app or inform a native mobile build.

## Why React

React is common, fast to prototype, component-friendly, and suitable for a screen-based learning environment.

## Why TypeScript

TypeScript helps preserve record boundaries between sessions, artifacts, receipts, portfolios, speech events, and video events.

## Why Local Storage First

Local-first storage supports the privacy model.

For the earliest prototype, simple local persistence is enough to prove the loop.

Later storage can move to IndexedDB or encrypted local storage.

## Browser APIs

V1 may use:

```text
MediaRecorder
File input
HTML audio
HTML video
Blob URLs
localStorage
IndexedDB later
```

Speech-to-text support varies by browser.

Manual parent transcription must remain a fallback.

## Avoid in V1

Do not start with:

```text
full backend
user accounts
cloud media storage
social sharing
AI dependency
complex curriculum engine
native-only app
```

## Migration Path

Possible later paths:

```text
PWA
React Native
local encrypted storage
cloud sync with parent control
AI scaffold service
homeschool export service
```

## Technology Rule

Choose the technology that proves the learning loop with the fewest hidden dependencies.
