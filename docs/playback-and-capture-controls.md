# Playback and Capture Controls

StegLearn must support video playback, speech recording, video capture, photo capture, audio playback, and artifact review.

Controls should be simple enough for young learners and clear enough for parent review.

## Purpose

Playback and capture controls turn media into usable learning evidence without making the app feel like a production studio.

## Playback Controls

Required video playback controls:

```text
play
pause
rewind
forward
restart
captions/transcript if available
read prompt aloud
parent note at timestamp
```

## Capture Controls

Required capture controls:

```text
record speech
stop recording
record video
capture photo
attach file
discard draft
save draft
send to parent review
```

## Learner Controls

Learner-facing controls should use large buttons and plain labels.

Recommended labels:

```text
Start Talking
Stop
Take Picture
Record Video
Watch
Tell What Happened
Save for Parent
Try Again
```

## Parent Controls

Parent-facing controls may include:

```text
accept artifact
reject artifact
trim note
add timestamp note
mark private
attach to receipt
request new explanation
approve transcript
correct transcript
```

## Media Draft Rule

All new media begins as draft media.

Draft media does not become receipt evidence until reviewed.

## Timestamp Notes

Parent notes may be attached to a point in video or audio.

Timestamp notes should support later receipt generation.

## Captions and Transcripts

If captions or transcripts exist, they should be reviewable.

Automatic captions are draft text until parent reviewed.

## V1 Requirement

The first implementation should support:

```text
play video
record speech
attach media artifact
review transcript
add parent note
mark privacy
attach evidence to receipt
```
