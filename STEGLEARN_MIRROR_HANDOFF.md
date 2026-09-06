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

`SOURCE_EVALUATION_INTERLOCK_AND_CANONICAL_PUBLIC_OBSERVATION_BINDING_VALIDATED_RUNTIME_INTERACTION_NOT_OBSERVED`

The source contract permits public educational observation, comparison, evidence/artifact intake, and explicit human-mediated requests while denying authenticated access, automated external mutation, learner-private data egress, direct Edukors mutation of StegLearn, or inference of partnership/endorsement. Any later API, MCP, authenticated account, or AI-agent transport requires a separately admitted capability package.

For credential-free public observation, this lane reuses the canonical StegOS `external-api-observation` Universal InTr profile; no Edukors-specific connector profile is created.

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
- Ordinary public web retrieval is not authentic InTr execution evidence.
- Task Registry owns work intent, WorkerCoordinator owns executable claims/fences, Master Records owns observed/reconstructable reality, and Interlock/InTr governs ingress/egress; source and CI do not manufacture those authorities.

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
- Repaired TypeScript target compatibility by replacing `Array.prototype.at(-1)` with equivalent indexed access without changing behavior or evidence semantics.

### Edukors Interlock/InTr evaluation lane

- Added `docs/EDUKORS_INTR_MIRROR_HANDOFF.md` as the bounded continuation record.
- Added `schemas/external-learning-interlock.schema.json` for external-learning relationship constraints.
- Added `examples/interlocks/edukors-evaluation-interlock.json` with evaluation-only capabilities and fail-closed restrictions.
- Added `examples/interlocks/edukors-public-observation-transport.json` binding the relationship to the existing StegOS `external-api-observation` profile.
- Added `scripts/validate-edukors-interlock.mjs` to enforce relationship, transport-reuse, privacy, authority, and README completeness boundaries.
- Bound the Edukors source-contract validator into `.github/workflows/validate.yml` before the existing StegLearn build gate.
- Updated README in the same change set when material external-interface/governance semantics were introduced.
- No runtime interaction, partnership, authenticated Edukors integration, or production activation is claimed by source installation or CI.

## Validation Completed

- All pre-existing repository JSON artifacts previously parsed successfully.
- `lessons/ti83-arduino-sensor-lab/lesson.json` previously conformed to `schemas/learning-path.schema.json`.
- `examples/receipts/ti83-sensor-lab-receipt.json` previously conformed to `schemas/learning-receipt.schema.json`.
- The application production build passes with TypeScript and Vite.
- The obsolete TypeScript `moduleResolution` setting was updated to the current bundler mode.
- The standard Vite client type declaration and generated-directory ignore rules were added.
- The early-language revision example is covered by the committed receipt fixture validator wired into the production build command.
- Acceptance tests include longitudinal comparison and committed-receipt fixture validation.
- `.github/workflows/validate.yml` runs the Edukors Interlock source validator followed by the existing `npm run build` gate.
- Run `34001370386` established a full repository validation/build PASS after the early-language compatibility repair.
- Run `34001573328` established a full PASS for the canonical Edukors public-observation transport binding after validator stabilization: dependency install PASS, Edukors source validator PASS, committed receipts PASS, TypeScript/Vite build PASS.
- These are source/build validation facts only; no authentic Edukors InTr runtime interaction or Master Records reconciliation is claimed.

## Resolved Machine Preflight State

Relevant canonical coordination was resolved before mutation:

- `StegVerse-Labs/.github/data/canonical-task-registry.json` generation 12;
- `StegVerse-Labs/.github/docs/CANONICAL_WORK_COORDINATION_SYSTEM_MIRROR_HANDOFF.md`;
- `master-records/orchestration/CANONICAL_WORK_COORDINATION_CUSTODY_MIRROR_HANDOFF.md`;
- no current StegLearn/Edukors executable task identity or WorkerCoordinator claim was found in indexed coordination surfaces;
- no authentic Master Records execution event for Edukors observation was found;
- existing StegOS Universal InTr `external-api-observation` profile was reused rather than duplicated.

README completeness decisions are preserved in `docs/EDUKORS_INTR_MIRROR_HANDOFF.md`. Material relationship/transport semantic changes required README updates in the same change sets. Equivalent compiler-target and validator-stability repairs were explicitly determined not to require README changes because they changed no product or governance semantics.

## Remaining Machine Work

### Edukors lane — highest current executable boundary

Source implementation and repository validation are complete for the evaluation contract and canonical public-observation binding. The next required transition is authentic runtime execution, but it may not be fabricated from repository source or GitHub Actions.

Remaining sequence:

1. canonical task/WorkerCoordinator/Interlock substrate admits an executable Edukors public-observation task;
2. execute a credential-free public observation through Universal InTr using the existing `external-api-observation` profile;
3. preserve exact egress/ingress correlation and produce a StegLearn evaluation record;
4. reconcile retained authentic evidence through Master Records;
5. only then consider a separately admitted privileged integration capability if collaboration momentum exists.

No current task-registry identity, WorkerCoordinator execution claim, or Master Records runtime event authorizing step 2 has been observed. Therefore further runtime execution is blocked on the canonical execution/admission substrate, not on missing StegLearn source files.

### Other StegLearn lanes

- Ensure any future AI-generated developmental summary cites underlying learner quote/parent note records and remains distinguishable from raw evidence.
- Consider richer comparison filters only after actual private/local longitudinal records exist; do not invent family evidence.
- Decide release/tag state only after the relevant lane-specific runtime/evidence and release review predicates pass.

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

- No user action is required for source installation, profile reuse, or repository validation.
- Any direct outreach or collaboration request remains human-mediated until an explicitly admitted machine communication capability exists.

## Release State

Not release-tagged by this lane. The Edukors evaluation relationship and canonical public-observation binding are source-complete and repository-validated, but authentic InTr runtime interaction and Master Records reconciliation remain unobserved. No partnership, production integration, or release authority is inferred.

When this repository reaches an actual tag/release predicate, release work must include verification that pertinent information is propagated or applied through the existing contracts to `StegVerse-Labs/Site`, `GCAT-BCAT-Engine/Publisher`, `StegVerse-Labs/admissibility-wiki`, and `StegVerse-002/stegguardian-wiki` as applicable.

## Archive Readiness

All current Edukors source implementation, preflight findings, canonical connector reuse, CI evidence, remaining runtime predicates, and authority boundaries are repository-resident in this handoff and `docs/EDUKORS_INTR_MIRROR_HANDOFF.md`. No conversation-only information is required to continue this lane.
