# App Permissions

StegLearn needs explicit permissions for speech, video, media files, and local storage.

Permissions must be requested only when needed and explained in learner-safe, parent-readable language.

## Purpose

Permissions support the on-screen learning environment without turning the device into a surveillance tool.

The system should ask for the minimum access required for the current action.

## Permission Types

```text
microphone
camera
media-library
local-storage
notifications
network
```

## Microphone

Used for:

- spoken wonders
- learner explanations
- parent notes
- read-aloud interaction checks

Do not keep the microphone always listening in v1.

## Camera

Used for:

- learner video explanation
- build documentation
- experiment recording
- artifact capture
- parent-reviewed evidence

Camera capture should require an explicit learner or parent action.

## Media Library

Used for importing existing photos, videos, audio, drawings, screenshots, or project artifacts.

Imported media begins as private draft evidence.

## Local Storage

Used for drafts, receipts, schemas, parent settings, and local-first portfolio continuity.

## Notifications

Optional.

May be used for parent reminders, pending receipt review, or project follow-up.

Notifications should not be used to pressure learners into engagement loops.

## Network

Used for optional syncing, AI scaffolding, export, or parent-approved sharing.

The app should remain useful without requiring constant network access.

## Permission Request Rule

Ask at the moment of need.

Do not request all permissions on first launch.

## Parent Control

A parent or steward should be able to disable microphone, camera, network sync, public export, and AI assistance.

## V1 Defaults

```text
microphone: ask when recording speech
camera: ask when capturing photo or video
media-library: ask when importing artifact
local-storage: required for app function
notifications: off by default
network: limited by feature use
```
