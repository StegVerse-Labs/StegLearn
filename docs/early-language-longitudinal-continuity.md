# Early-Language Longitudinal Continuity

## Purpose

Preserve parent-reviewed early-language observations over time so developmental change can be compared without turning a learner into a fixed identity label.

This lane is for short observations where a young learner uses speech, gesture, revision, categorization, narration, or self-correction in ways that may become meaningful only when viewed longitudinally.

## Evidence Boundary

Allowed evidence modes include:

```text
conversation
parent-transcribed-language
revision-history
observed-behavior
learner_quote
parent_note
```

The underlying observation remains primary evidence. Summaries and developmental interpretations are secondary and must remain distinguishable from the learner's actual words and the parent's contextual note.

## Privacy Boundary

Private by default.

Do not commit a child's public name, exact birth date, school, routine location, or other unnecessary identifying information to the public repository.

Use local learner IDs for actual family records.

Public repository examples must remain anonymized, synthetic, or generalized.

## Minimal Observation Record

A private/local observation should preserve:

```text
local learner id
observation timestamp
context supplied by parent/steward
exact learner wording when available
adult wording that preceded a response when relevant
sequence/order of utterances
parent review note
evidence modes
uncertainty or alternate interpretations
next comparison questions
```

## Revision Events

A revision event is especially valuable when a learner:

- changes a label after reconsideration;
- distinguishes between two nearby concepts;
- corrects an adult interpretation;
- changes wording while maintaining the same referent;
- uses hesitation or discourse markers before revising;
- combines previously known words in a new way.

A single event does not establish a stable developmental trait.

The value comes from comparing reviewed observations across time.

## Longitudinal Questions

Useful comparison questions include:

- Are self-corrections becoming more frequent or more precise?
- Are category boundaries becoming more specific?
- Does the learner maintain a referent while revising an attribute?
- Are explanations becoming longer, more compositional, or more explicit?
- Are hesitation markers being used before corrections or alternatives?
- Are associations moving from simple naming toward comparison, narration, or causal explanation?

## Receipt Mapping

The existing `schemas/learning-receipt.schema.json` is sufficient.

Recommended mapping:

```text
wonder              -> parent/steward inquiry about the observed language behavior
activity_summary     -> neutral context and sequence
learner_explanation  -> exact learner wording or parent transcription
parent_review        -> contextual interpretation and acceptance decision
subject_mappings     -> language arts and other justified mappings
evidence_items       -> learner_quote + parent_note where available
next_questions       -> longitudinal comparison questions
non_capture_note     -> explicit warning against fixed identity inference
```

## Continuity Rule

Do not replace earlier observations with later interpretations.

Preserve each accepted event independently so later comparisons can show progression, contradiction, plateau, regression, or context dependence without rewriting the earlier evidence.
