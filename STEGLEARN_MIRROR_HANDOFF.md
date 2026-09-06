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

### Edukors external-learning Interlock / InTr evaluation lane

Establish an evaluation-first, reconstructable Interlock/InTr relationship between StegLearn and `https://edukors.org/` before deeper collaboration or machine integration occurs.

Canonical bounded handoff:

`docs/EDUKORS_INTR_MIRROR_HANDOFF.md`

Initial relationship:

`steglearn.edukors.evaluation.v1`

Current state:

`SOURCE_EVALUATION_INTERLOCK_INSTALLED_RUNTIME_INTERACTION_NOT_OBSERVED`

The source contract permits public educational observation, comparison, evidence/artifact intake, and explicit human-mediated requests while denying authenticated access, automated external mutation, learner-private data egress, direct Edukors mutation of StegLearn, or inference of partnership/endorsement. Any later API, MCP, authenticated account, or AI-agent transport requires a separately admitted capability package.

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
- External educational-system interaction must cross the applicable Interlock/InTr boundary before becoming StegLearn state.
- Public-source evaluation does not imply partnership, endorsement, curriculum adoption, authenticated access, or production integration.
- Edukors or any other external educational system cannot directly mutate learner records, Master Records, SKAP Vault, repositories, publication, finance, or governance state.

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

### Edukors Interlock/InTr evaluation lane

- Added `docs/EDUKORS_INTR_MIRROR_HANDOFF.md` as the bounded continuation record.
- Added `schemas/external-learning-interlock.schema.json` for external-learning relationship constraints.
- Added `examples/interlocks/edukors-evaluation-interlock.json` with evaluation-only capabilities and fail-closed restrictions.
- Added `scripts/validate-edukors-interlock.mjs` to enforce the initial relationship boundary.
- Bound the Edukors source-contract validator into `.github/workflows/validate.yml` before the existing StegLearn build gate.
- No runtime interaction, partnership, authenticated Edukors integration, or production activation is claimed by source installation.

## Validation Completed

- All pre-existing repository JSON artifacts previously parsed successfully.
- `lessons/ti83-arduino-sensor-lab/lesson.json` previously conformed to `schemas/learning-path.schema.json`.
- `examples/receipts/ti83-sensor-lab-receipt.json` previously conformed to `schemas/learning-receipt.schema.json`.
- The application production build previously passed with TypeScript and Vite.
- The obsolete TypeScript `moduleResolution` setting was updated to the current bundler mode.
- The standard Vite client type declaration and generated-directory ignore rules were added.
- The early-language revision example is covered by the committed receipt fixture validator wired into the production build command.
- Acceptance tests now include longitudinal comparison and committed-receipt fixture validation.
- `.github/workflows/validate.yml` is installed as a validation-only GitHub Actions lane that runs the Edukors Interlock source validator, then `npm ci`/the existing `npm run build` gate on push, pull request, or manual dispatch.
- No production-build or Edukors runtime-interaction success claim is made until observed CI/runtime evidence exists.

## Remaining Machine Work

- Observe a successful production build that executes the new committed-receipt validator and Edukors Interlock validator; source installation alone is not runtime/build evidence.
- Perform the first authentic public-source Edukors evaluation through the bounded relationship and preserve correlated egress/ingress evidence.
- Materialize a Universal InTr transport connector profile only when a real transport surface is selected; do not invent a machine integration from a public website alone.
- If Edukors expresses collaboration interest, present the Interlock/InTr relationship contract before deeper integration and require separate capability admission for API/MCP/authenticated/AI-agent access.
- Ensure any future AI-generated developmental summary cites underlying learner quote/parent note records and remains distinguishable from raw evidence.
- Consider richer comparison filters only after actual private/local longitudinal records exist; do not invent family evidence.
- Decide release/tag state only after observed repository validation of the new lane.

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

### Edukors Interlock/InTr lane

- No user action is required for source installation.
- Any direct outreach or collaboration request remains human-mediated until an explicitly admitted machine communication capability exists.

## Release State

Not release-tagged by this lane. The early-language continuity implementation, local longitudinal UI, anonymized example, build gate, validation workflow, and Edukors evaluation Interlock/InTr source contract are installed. Release remains blocked on observed successful validation evidence and any release-specific review. Edukors integration remains evaluation-only until authentic interaction evidence and any required reciprocal consent/capability admission exist.
