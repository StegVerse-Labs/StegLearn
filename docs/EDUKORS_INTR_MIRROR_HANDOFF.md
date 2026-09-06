# Edukors Interlock / InTr Evaluation Mirror Handoff

## Repository

`StegVerse-Labs/StegLearn`

## Status

`SOURCE_EVALUATION_INTERLOCK_INSTALLED_RUNTIME_INTERACTION_NOT_OBSERVED`

## Source of truth

This is the bounded continuation record for the StegLearn ↔ Edukors external-learning evaluation relationship. Repository-wide authority remains `STEGLEARN_MIRROR_HANDOFF.md`.

This lane inherits, and does not replace, StegVerse Universal Interlock/InTr, Master Records reconstruction, disclosure, SKAP relationship, and TV/TVC credential-authority invariants. The organization-level external state-transition admission contract remains authoritative where an external AI or AI-mediated service is involved.

## Machine preflight — 2026-09-05

Preflight inputs resolved before repair mutation:

- repository source of truth: `STEGLEARN_MIRROR_HANDOFF.md`;
- bounded lane handoff: this file;
- organization task registry: `StegVerse-Labs/.github/data/canonical-task-registry.json`, generation 12;
- canonical coordination handoff: `StegVerse-Labs/.github/docs/CANONICAL_WORK_COORDINATION_SYSTEM_MIRROR_HANDOFF.md`;
- Master Records coordination custody handoff: `master-records/orchestration/CANONICAL_WORK_COORDINATION_CUSTODY_MIRROR_HANDOFF.md`;
- WorkerCoordinator/cross-task search: no StegLearn/Edukors executable claim or canonical task identity was found in the current organization-level indexed coordination surfaces; the current COSV adoption manifest still carries a stale pre-audit StegLearn classification and is not used as authority for this lane.

Preflight result:

`PASS_FOR_EXISTING_LANE_VALIDATION_REPAIR_ONLY`

Reason: the highest-priority observed defect was not new Edukors functionality but failure of the already-installed validation lane. GitHub Actions run `34000449659` failed at `Validate Edukors Interlock source contract` with exact failure `handoff missing marker: runtime interaction not observed`; the build step was therefore skipped. No new external capability, runtime transport, or partnership state was admissible before repairing that existing source contract.

README impact determination:

`README_UPDATE_REQUIRED`

The installed Edukors relationship materially changes StegLearn's external-interface, governance-boundary, evidence, privacy, and capability semantics. The prior README did not describe that boundary. Therefore README completeness is part of the same repair change set, and the source validator now fails closed if the README loses the external-learning relationship semantics.

## Goal

Present a real Interlock/InTr boundary before deeper integration momentum develops, so any StegLearn interaction with `https://edukors.org/` begins as an explicit, bounded, reconstructable external-learning relationship rather than an ungoverned API or content dependency.

The initial relationship is evaluation-first. It permits observation and human-mediated exchange without asserting partnership, endorsement, privileged API access, production integration, or authority over Edukors.

## Initial topology

```text
StegLearn learner / educator / steward context
  -> StegLearn candidate interaction
  -> EGRESS INTERLOCK
  -> InTr materialization
  -> bounded Edukors evaluation interaction
  -> public Edukors content or human-mediated response
  -> INGRESS INTERLOCK
  -> InTr materialization
  -> StegLearn evaluation record
  -> optional internal learning/research proposal
```

If Edukors later exposes an AI agent, MCP surface, API, authenticated account relationship, or other machine interaction, that transport remains subordinate to this Interlock/InTr relationship and requires a separately admitted capability package.

## Evaluation relationship

Canonical relationship id:

`steglearn.edukors.evaluation.v1`

External system:

`https://edukors.org/`

Initial interaction classes:

- `OBSERVATION`
- `REQUEST`
- `RECOMMENDATION`
- `EVIDENCE`
- `ARTIFACT`

Initial state-transition capabilities:

- observe publicly available educational content;
- record source URLs, retrieval time, and content identity for evaluation;
- compare public Edukors educational structures against StegLearn learning-path and governance concepts;
- prepare a human-readable collaboration or research request for explicit human sending;
- receive human-supplied Edukors responses or artifacts through ingress review;
- create internal StegLearn research/evaluation proposals from admitted observations.

## Explicitly not admitted

The evaluation package does **not** permit:

- authenticated scraping or credential use;
- bypassing access controls, robots restrictions, rate limits, or terms;
- automated enrollment or account creation;
- posting, messaging, commenting, or modifying Edukors content without explicit human authorization;
- importing learner-identifying or family-private StegLearn records;
- treating Edukors content as canonical StegLearn curriculum without review;
- direct mutation of StegLearn learning records, Master Records, SKAP Vault, repositories, publication, financial systems, or governance state by Edukors;
- inferring partnership, endorsement, certification, accreditation, or reciprocal integration.

## Education-governance research fit

This relationship exists because Edukors' public educational mission appears compatible with the StegLearn research question:

> AI literacy teaches people how to use AI. What governs the resulting human–AI cognitive system once AI becomes part of the learning process itself?

StegLearn remains the implementation/research owner. Edukors is an external educational environment and possible collaborator, not the authority source for StegLearn learner state or governance.

## Required evidence for a real interaction

An authentic evaluation interaction must preserve enough evidence to reconstruct:

1. the StegLearn-originating purpose or question;
2. the external target and exact public source/object where applicable;
3. the admitted interaction class;
4. the applicable relationship/capability package;
5. the egress Interlock/InTr transition;
6. the external observation or human-mediated response;
7. the ingress Interlock/InTr transition;
8. the resulting StegLearn evaluation record or proposal;
9. any later internal transition as a separate governed event.

Source installation, public web retrieval, CI success, or repository presence alone is not evidence that this path has executed through authentic StegVerse Interlock/InTr runtime.

## Machine surfaces

Destination `StegVerse-Labs/StegLearn`:

- `README.md`
- `docs/EDUKORS_INTR_MIRROR_HANDOFF.md`
- `schemas/external-learning-interlock.schema.json`
- `examples/interlocks/edukors-evaluation-interlock.json`
- `scripts/validate-edukors-interlock.mjs`
- `.github/workflows/validate.yml`

Potential later integration dependencies, only if momentum exists:

- Universal Interlock/InTr transport adapter
- SKAP relationship materialization
- Master Records correlation/reconstruction
- StegLearn human–AI learning interaction receipts
- explicit Edukors-side technical or human consent for any non-public integration

## Validation state

Observed failure before current repair:

```text
run: 34000449659
job: validate
step: Validate Edukors Interlock source contract
result: FAILURE
exact failure: handoff missing marker: runtime interaction not observed
build step: SKIPPED
```

The validator now asserts the canonical status token `SOURCE_EVALUATION_INTERLOCK_INSTALLED_RUNTIME_INTERACTION_NOT_OBSERVED` rather than relying on an incidental prose phrase, and it also verifies that README external-learning semantics remain installed.

A fresh GitHub Actions PASS is still required before source validation is called observed successful.

## Completion predicates for evaluation phase

1. A machine-readable bounded relationship is installed. **SOURCE COMPLETE**
2. Public observation and human-mediated exchange are positively enumerated. **SOURCE COMPLETE**
3. Unauthenticated public evaluation is separated from authenticated or production integration. **SOURCE COMPLETE**
4. Learner-private data disclosure is fail-closed. **SOURCE COMPLETE**
5. Edukors cannot mutate internal StegLearn state directly. **SOURCE COMPLETE**
6. Future machine/API/MCP access requires a new capability admission rather than inheriting evaluation authority. **SOURCE COMPLETE**
7. README reflects the material external-interface/governance semantics and validation enforces that completeness. **SOURCE REPAIR INSTALLED; CI REOBSERVATION PENDING**
8. At least one authentic interaction produces correlated egress/ingress evidence without redefining InTr. **RUNTIME PENDING**

## Remaining work

- Observe a fresh passing repository validation run after the validation/README completeness repair.
- Materialize a Universal InTr connector profile only when a real transport surface is selected.
- If Edukors expresses collaboration interest, present this Interlock/InTr boundary as the proposed interaction contract before deeper technical integration.
- Perform the first authentic public-source evaluation through the bounded relationship and preserve authentic transition evidence; do not substitute ordinary web retrieval for InTr runtime evidence.
- Reconcile authentic transition evidence through Master Records when such evidence exists.
- Do not claim runtime activation until that evidence exists.

## Release posture

No partnership, endorsement, runtime integration, certification, production activation, or release authority is established by this source contract or its validation repair.
