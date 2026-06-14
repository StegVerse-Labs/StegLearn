# Speech Interface

The StegLearn speech interface allows learners to ask, explain, narrate, reflect, and revise through spoken language.

Speech is a core interface requirement because many early learners can express ideas before they can type or write fluently.

## Purpose

The speech interface supports:

- question capture
- learner explanation
- parent transcription review
- read-aloud prompts
- conversation receipts
- oral reflection
- accessibility
- young learner participation

## Core Principle

Speech is evidence only after it is captured, distinguished, and reviewed.

The system must preserve the difference between:

- learner speech
- parent speech
- AI speech
- transcription
- parent-edited transcription
- AI summary

## V1 Speech Modes

```text
listen-for-wonder
record-explanation
read-prompt-aloud
parent-transcribe
parent-review-transcript
```

## Listen for Wonder

The learner may speak a question, idea, observation, or request.

The system captures the utterance and creates a draft wonder.

## Record Explanation

The learner may explain what happened after building, observing, reading, playing, or experimenting.

The recording may become an evidence item.

## Read Prompt Aloud

The system may read prompts aloud for learners who are not yet reading comfortably.

## Parent Transcribe

A parent may enter or correct what the learner said.

This is especially important for young children, partial speech, pronunciation differences, or noisy environments.

## Parent Review Transcript

Speech-to-text output must remain draft until reviewed.

The parent or steward may accept, edit, reject, or mark the transcript as uncertain.

## Transcript Confidence

The system should track whether a transcript is:

```text
automatic
parent-reviewed
parent-corrected
uncertain
```

## Safety and Privacy

Speech recordings may contain family names, location clues, private details, or background voices.

Speech capture must be private by default.

Public sharing requires parent review.

## AI Boundary

The AI may help summarize or ask follow-up questions.

The AI must not silently rewrite learner meaning.

If the AI summarizes a learner explanation, the raw or parent-reviewed transcript should remain available as the evidence source.

## V1 Requirement

The first speech implementation should support one complete flow:

```text
learner speaks wonder
→ system drafts text
→ parent reviews text
→ learner completes activity
→ learner records explanation
→ parent reviews explanation
→ receipt generated
```
