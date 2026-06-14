# Video Interface

The StegLearn video interface supports playback, capture, reflection, and evidence review.

Video is a core requirement because learners may explain, build, observe, perform, narrate, and revise through moving images.

## Purpose

The video interface supports:

- playing instructional or reference video
- recording learner explanations
- recording build or experiment evidence
- attaching video artifacts to receipts
- reviewing learner-created media
- parent approval before sharing
- timestamped notes and reflections

## Video Playback

Video playback may be used for reference, demonstration, review, or learner-created content.

Playback alone is not sufficient evidence of learning.

A video becomes part of learning evidence when the learner explains, applies, questions, builds from it, responds to it, or reflects on it.

## Video Capture

Video capture may record:

- learner explanation
- physical build
- experiment
- outdoor observation
- performance
- drawing process
- game design walkthrough
- story narration
- parent-reviewed conversation

## Timestamp Notes

The system should support notes attached to timestamps.

Examples:

```text
00:14 - learner explains why the tower fell
01:02 - learner changes the bridge support
02:30 - parent asks what surprised the learner
```

## Privacy Boundary

Video often contains faces, voices, private rooms, location clues, screens, names, or background information.

Video records must be private by default.

Public export or sharing requires parent review.

## Learner-Created Video

Learner-created video should be treated as a creative artifact.

It may show planning, framing, narration, editing, pacing, mood, sequence, and explanation.

## Video Evidence Rule

A video evidence item should include:

```text
what the video shows
who reviewed it
whether it is private
what learning claim it supports
whether any transcript or timestamp notes exist
```

## AI Boundary

The AI may summarize video only when authorized and should label summaries as AI-generated.

The system should preserve parent notes and learner statements separately from AI summaries.

## V1 Requirement

The first video implementation should support:

```text
attach video artifact
play video in parent review
add parent note
mark privacy status
generate receipt evidence item
```
