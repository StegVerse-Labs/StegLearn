# StegLearn Mirror Handoff

## Repository

`StegVerse-Labs/StegLearn`

## Status

Active implementation. This file is the repository-local source of truth for active StegLearn implementation lanes.

## Current Goals

### TI-83 Plus / Arduino learning-path lane

Add a reusable, age-appropriate learning-path system to StegLearn and materialize the first path around:

```text
TI-83 Plus restoration
→ TI-BASIC programming
→ sensor observation
→ Arduino bridge
→ governed low-voltage action
→ parent-reviewed learning receipt
```

### Early-language longitudinal continuity lane

Preserve parent-reviewed early-language observations over time using private/local learner records so progression can be compared across:

```text
observation
→ exact learner wording
→ conversational context
→ revision/self-correction
→ parent review
→ accepted receipt
→ longitudinal comparison
```

The public repository may contain only anonymized, synthetic, or generalized examples. Family-specific child records remain private/local by default.

## Governing Boundaries

- Keep lessons inside StegLearn unless a future collection has an independently governed product boundary.
- Do not treat a lesson, score, interest, successful repair, isolated utterance, or developmental observation as a fixed learner identity.
- Parent or steward review remains required before evidence becomes an accepted learning receipt.
- Preserve raw learner wording and parent context separately from later interpretation.
- Do not overwrite earlier observations with later developmental conclusions.
- Public repository artifacts must not expose a child's public name, exact birth date, school, routine location, or unnecessary identifying context.
- Local learner identifiers are preferred for actual family records.
- Battery-leak cleanup, soldering, exposed circuitry, and electrical interfaces require adult control.
- No household voltage, weapon construction, exposed high-voltage experiments, or safety-critical sensor claims.
- The TI-83 Plus is a learner interface; it does not acquire independent actuator authority.
- An Arduino bridge must validate any actuator request and fail closed.

## Implemented

### Learning-path lane

- Reusable `lessons/` catalog boundary.
- Machine-readable learning-path schema.
- TI-83 Plus and Arduino sensor learning-path manifest.
- Complete staged lesson guide for an approximately eight-year-old learner.
- Example parent-reviewed learning receipt.
- Root README navigation and repository structure updates.
- Application catalog rendering for machine-readable learning paths.
- One-click path selection that prefills the learner wonder, first-stage activity types, subject mappings, and next-stage questions.

### Early-language continuity lane

- Existing learner-relative admissibility already supports `conversation`, `revision-history`, `observed-behavior`, and `parent-transcribed-language`.
- Existing learning receipt schema already supports `learner_quote` and `parent_note`.
- Added `docs/early-language-longitudinal-continuity.md` defining evidence, privacy, revision-event, comparison, and continuity rules.
- Added `examples/receipts/early-language-revision-receipt.json` as an anonymized public example of a label-revision event.
- Family-specific observation content remains intentionally uncommitted to the public repository and belongs in the private/local learner record.

## Validation Completed

- All pre-existing repository JSON artifacts previously parsed successfully.
- `lessons/ti83-arduino-sensor-lab/lesson.json` previously conformed to `schemas/learning-path.schema.json`.
- `examples/receipts/ti83-sensor-lab-receipt.json` previously conformed to `schemas/learning-receipt.schema.json`.
- The application production build previously passed with TypeScript and Vite.
- The obsolete TypeScript `moduleResolution` setting was updated to the current bundler mode.
- The standard Vite client type declaration and generated-directory ignore rules were added.
- The early-language revision example was authored against the existing `schemas/learning-receipt.schema.json` field contract; repository-level automated validation of the new artifact remains to be run before any release claim.

## Remaining Machine Work

- Add repository validation coverage for `examples/receipts/early-language-revision-receipt.json`.
- Add UI support that makes evidence mode selection and longitudinal comparison visible without requiring public export.
- Add local portfolio filtering/comparison for parent-reviewed early-language receipts.
- Ensure any future AI-generated developmental summary cites underlying learner quote/parent note records and remains distinguishable from raw evidence.
- Decide release/tag state only after repository validation of the new lane.

## Remaining Physical / User Work

### TI-83 / Arduino lane

- Adult removes leaking AAA batteries and neutralizes residue using TI guidance.
- Restore and test the TI-83 Plus before beginning the programming stages.
- Identify whether the available cable is calculator-to-calculator or USB-to-2.5 mm.
- Build a protected Arduino/TI link interface before attempting live transfers.
- Restrict the first actuator experiment to a low-voltage LED.

### Early-language lane

- Private/local family observations need parent-approved capture in the actual learner record if the exact utterance and personal context are to be preserved.
- Earlier historical observations that were never committed cannot be reconstructed as exact quotes unless an original source record is recovered.

## Release State

Not release-tagged by this lane. The early-language continuity documentation and anonymized example are installed, but validation and UI/local-portfolio integration remain before a release decision.
