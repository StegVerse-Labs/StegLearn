# StegLearn Mirror Handoff

## Repository / authority

Repository: `StegVerse-Labs/StegLearn`

Status: active implementation.

This file is the repository-local source of truth for current StegLearn implementation lanes.

## Canonical product direction

StegLearn is a governed learning environment in which a human or admitted AI entity may enter, converse with the StegLearn AI Entity about a desired skill, capability, body of knowledge, outcome, and desired depth, receive a governed curriculum, obtain a reviewable version of that curriculum, and then be taught the selected curriculum version by StegLearn.

```text
participant enters StegLearn
-> goal conversation
-> starting point + depth + constraints
-> governed goal-intake record
-> generated curriculum version
-> deterministic review-content SHA-256
-> synchronized human/machine review package
-> hash-bound review / revise / approve according to authority
-> exact curriculum ID/version/hash teaching session
-> permitted observation / adaptation / evidence
-> receipt / longitudinal continuity
```

Curriculum generation is not terminal. Reviewability and teaching are product requirements.

Preferred first deployment remains **human teacher + governed on-screen StegLearn AI Entity**. In teacher-led use, the human teacher remains educational authority.

## Governing invariants

- Requested depth does not automatically prove readiness.
- Generated curriculum does not become fixed participant identity.
- Review availability does not equal approval or teaching authority.
- `APPROVE` requires an authority effect valid within the governing context.
- Review decisions bind the deterministic SHA-256 of the exact reviewable curriculum envelope.
- A content-hash mismatch fails closed for review decisions and teaching readiness.
- Teaching binds exact curriculum ID, version, and reviewed content hash.
- Material curriculum changes must remain versioned and inspectable and cannot silently inherit prior approval.
- Hash equality is content-integrity evidence only; it does not prove curriculum correctness, pedagogical quality, admissibility, accreditation, or authority.
- Sensor/learning inputs must be explicitly authorized before use.
- Participant evidence, sensor/system observation, human context, AI interpretation, curriculum content, review decision, and teaching action remain distinguishable.
- Task Registry owns work intent; WorkerCoordinator owns executable claims/fences; Master Records owns observed/reconstructable reality; Interlock/InTr governs ingress/egress. Source and CI do not manufacture runtime authority.

## Current branch / PR

Branch: `feature/teacher-first-public-model`

Open PR: `StegVerse-Labs/StegLearn#3` — `Implement StegLearn goal → curriculum → review → teaching vertical slice`.

No competing open StegLearn PR was observed for this workload during the current preflight.

## Machine preflight — 2026-09-06

Resolved before functional mutation:

- canonical repository handoff: this file;
- canonical Task Registry: `StegVerse-Labs/.github/data/canonical-task-registry.json`, generation 15, status `RUNTIME_PROFILE_GOVERNANCE_REVIEW_SOURCE_BOUND_AUTHENTIC_RUNTIME_PENDING`;
- WorkerCoordinator source: `StegVerse-Labs/.github/control/worker-registry.json`, generation 22; no indexed StegLearn goal/curriculum/review/teaching/hash claim or fence observed;
- Master Records bounded custody handoff: `master-records/orchestration/CANONICAL_WORK_COORDINATION_CUSTODY_MIRROR_HANDOFF.md`, status `SOURCE_FEED_RUNTIME_PROFILE_AND_PRESENCE_CUSTODY_PATH_IMPLEMENTED_AUTHENTIC_INPUT_PENDING`;
- cross-task PR search found only current PR #3 for this StegLearn workload;
- StegVerse-wide source search found an existing canonical JSON hashing convention: sorted object keys, compact JSON separators, UTF-8, SHA-256. The StegLearn implementation reuses that convention rather than creating a competing hash interpretation;
- existing `steglearn.curriculum-review-package/v1`, teaching-session, receipt/evidence, Edukors validation, and build surfaces are reused;
- Site remains a separate publication target and is not mutated unless Site orchestration admits the workload.

### README completeness

**README UPDATE REQUIRED AND SATISFIED.**

Deterministic curriculum hashing changes review-package interface requirements, review-decision evidence semantics, teaching prerequisites, failure behavior, and capability meaning. `README.md` is updated in the same change set and retains the required Edukors completeness markers.

## Implemented current vertical slice

### Existing goal → curriculum → review → teaching path

- `schemas/participant-goal-intake.schema.json`
- `schemas/generated-curriculum.schema.json`
- existing `schemas/curriculum-review-package.schema.json` reused
- `schemas/teaching-session.schema.json`
- `app/src/curriculum.ts`
- `app/src/curriculumGeneration.ts`
- `app/src/curriculumReview.ts`
- `app/src/teaching.ts`
- `app/src/GoalIntakePanel.tsx`

### Deterministic curriculum review hashing

Highest-priority admissible machine work is implemented:

- added `app/src/canonicalHash.ts`;
- canonical JSON recursively sorts object keys, preserves array order, uses compact JSON representation and UTF-8 bytes, then computes SHA-256;
- `curriculumReview.ts` hashes the reviewable envelope containing curriculum identity/version, learning goal/depth, starting-point summary, constraints, and canonical curriculum;
- `review_surface.content_hash_sha256` is now mandatory and non-null;
- each review decision records `reviewed_content_hash_sha256`;
- review decisions fail closed if deterministic hash verification fails;
- `teaching_binding.bound_content_hash_sha256` is mandatory and must match the review hash;
- approval-required teaching requires an `APPROVE` + `APPROVAL_WITHIN_CONTEXT` review whose reviewed hash matches the current content hash;
- `steglearn.teaching-session/v1` records `curriculum_content_hash_sha256` at session start;
- teaching readiness fails closed when content-hash or teaching-hash binding does not verify.

### Validation contract changes

`scripts/validate-curriculum-contracts.mjs` now checks:

- review schema requires deterministic content hash;
- review records require reviewed-content hash;
- teaching binding requires bound-content hash;
- teaching-session schema requires curriculum content hash;
- all hash fields use lowercase 64-character SHA-256 hex;
- canonical review-envelope hashing is invariant to object-key insertion order.

The build gate remains `curriculum contracts -> receipt validation -> TypeScript -> Vite`.

## Validation evidence

Preserved prior PASS evidence:

- `34001370386` — early-language compatibility/build;
- `34001573328` — Edukors public-observation source binding;
- `34014352330` — initial goal/curriculum contracts;
- `34014483851` — goal-intake UI;
- `34014587317` — bounded generated-curriculum UI;
- `34014660474` — synchronized review rendering;
- `34014762575` — review decisions + teaching-session implementation;
- `34014798310` — prior latest-head full validation/build PASS.

The deterministic hashing commits are newer than `34014798310`; latest-head CI must be observed separately before a PASS is claimed for this new hash-binding implementation.

These are source/build facts only. They do not prove curriculum quality, classroom effectiveness, production conversational AI teaching, authentic sensor observation, external-learning InTr execution, or production activation.

## Remaining machine work — priority order

1. Add material curriculum revision/diff flow that produces a new inspectable version/hash and invalidates prior teaching authorization where required.
2. Add participant evidence capture/progression gating inside teaching rather than unit advancement by button alone.
3. Add conversational AI teaching inside the exact-version/hash teaching session while preserving teaching/evidence/event contracts.
4. Replace/augment deterministic curriculum generation with an admitted AI-backed generator that still emits `steglearn.generated-curriculum/v1`; model output is not automatically reviewed curriculum.
5. Check/reuse existing StegVerse permission/evidence/Interlock contracts before adding sensor/input permission and observation-event contracts.
6. Define teacher delegation/return contracts for bounded learner/small-group teaching.
7. Add visible StegLearn Entity and teacher-facing observation/recommendation surfaces.
8. Add admitted AI-participant learning contracts and negative tests.
9. When Site orchestration admits work, publish the StegLearn informational landing page and navigation/discovery path.

## Edukors lane

Evaluation-only Edukors relationship `steglearn.edukors.evaluation.v1` remains source-complete. Authentic runtime execution still requires canonical task/WorkerCoordinator/Interlock admission, exact correlated observation, a StegLearn evaluation record, and Master Records reconciliation. No partnership or production integration is inferred.

## User / physical work

No user action is required for the current source/UI/hash-binding work.

A future real classroom pilot requires an explicitly authorized educator/learning context before collecting real participant or sensor evidence.

## Release state

Not release-tagged. Material revision/diff semantics, evidence-gated teaching progression, conversational AI instruction, admitted AI-backed generation, sensor-mediated classroom assistance, generalized AI-participant learning, authentic external-learning runtime evidence, and public Site publication remain incomplete.

When release predicates are actually satisfied, verify propagation to `StegVerse-Labs/Site`, `GCAT-BCAT-Engine/Publisher`, `StegVerse-Labs/admissibility-wiki`, and `StegVerse-002/stegguardian-wiki` as applicable.

## Archive readiness

The product direction, preflight, deterministic hashing convention/reuse decision, current goal/curriculum/review/teaching/hash implementation, validation boundary, remaining sequence, Site publication boundary, and Edukors relationship are repository-resident. No conversation-only information is required to continue this lane.
