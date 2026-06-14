# StegLearn App

This directory is reserved for the first StegLearn prototype application.

## Prototype Target

Build a local-first web app that completes the StegLearn V1 learning loop:

```text
Wonder
→ Activity
→ Evidence
→ Explanation
→ Parent Review
→ Receipt
→ Portfolio
→ Export
```

## Recommended Stack

```text
Vite
React
TypeScript
localStorage or IndexedDB
HTML audio/video APIs
JSON schema validation
```

## Initial App Structure

```text
app/
  package.json
  index.html
  src/
    main.tsx
    App.tsx
    routes/
    components/
    data/
    schemas/
    examples/
```

## First Prototype Screens

```text
Learner Home
Wonder Capture
Activity Select
Artifact Capture
Explanation Capture
Parent Review
Receipt View
Portfolio Timeline
Export View
```

## First Prototype Records

```text
learner-session
artifact-record
speech-event
video-event
learning-receipt
portfolio-record
app-permission-state
```

## Non-Goals

The app should not start with:

```text
public sharing
accounts
cloud sync
automated grading
AI dependency
social feed
streak systems
fixed learner labels
```

## Done for First Code Pass

The first code pass is done when the app can create one local learner session, turn it into a parent-reviewed receipt, save it to a portfolio timeline, and export the receipt as JSON.
