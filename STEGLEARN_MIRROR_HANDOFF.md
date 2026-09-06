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
-> synchronized human/machine review package
-> review / revise / approve according to authority
-> exact-version teaching session
-> permitted observation / adaptation / evidence
-> receipt / longitudinal continuity
```

Curriculum generation is not terminal. Reviewability and teaching are product requirements.

Instructional depth may range from first exposure through advanced professional, graduate, doctoral, and post-doctoral depth where applicable. These are instructional-depth labels, not accreditation, degrees, licenses, institutional equivalence, or professional authority.

Preferred first deployment remains **human teacher + governed on-screen StegLearn AI Entity**. In teacher-led use, the human teacher remains educational authority.

## Governing invariants

- Requested depth does not automatically prove readiness.
- Generated curriculum does not become fixed participant identity.
- Review availability does not equal approval or teaching authority.
- `APPROVE` requires an authority effect valid within the governing context.
- Teaching binds exact curriculum ID/version.
- A teaching session cannot advance against a different curriculum ID/version.
- Material curriculum changes must remain versioned and inspectable.
- Sensor/learning inputs must be explicitly authorized before use.
- Engagement, participation, responsiveness, activity, and progress observations do not independently become mastery, failure, discipline, or fixed identity.
- Participant evidence, sensor/system observation, human context, AI interpretation, curriculum content, review decision, and teaching action remain distinguishable.
- High-consequence or regulated learning may require additional human or external authority.
- Completion does not grant licensure, accreditation, or authority outside the admitted learning relationship.
- Task Registry owns work intent; WorkerCoordinator owns executable claims/fences; Master Records owns observed/reconstructable reality; Interlock/InTr governs ingress/egress. Source and CI do not manufacture runtime authority.

## Current branch / collision state

Branch: `feature/teacher-first-public-model`

Open PR: `StegVerse-Labs/StegLearn#3` — `Implement StegLearn goal-to-curriculum review/teaching contracts`.

Preflight found no competing open StegLearn PR for this same workload. Existing learning-path branches are separate scope.

## Machine preflight — 2026-09-06

Resolved before functional mutation:

- canonical repository handoff: this file;
- canonical Task Registry: `StegVerse-Labs/.github/data/canonical-task-registry.json`, generation 15, status `RUNTIME_PROFILE_GOVERNANCE_REVIEW_SOURCE_BOUND_AUTHENTIC_RUNTIME_PENDING`;
- WorkerCoordinator source: `StegVerse-Labs/.github/control/worker-registry.json`, generation 22; no indexed StegLearn goal/curriculum/review/teaching claim or fence observed;
- Master Records: `master-records/orchestration/CANONICAL_WORK_COORDINATION_CUSTODY_MIRROR_HANDOFF.md`, status `SOURCE_FEED_RUNTIME_PROFILE_AND_PRESENCE_CUSTODY_PATH_IMPLEMENTED_AUTHENTIC_INPUT_PENDING`;
- existing `schemas/learning-path.schema.json`, `schemas/curriculum-review-package.schema.json`, receipt/evidence boundaries, Edukors validator, and build path were reused;
- org/repo search found no existing teaching-session contract to reuse before `schemas/teaching-session.schema.json` was added;
- Site remains a separate publication target and is not mutated unless Site orchestration admits the workload.

### README completeness

**README UPDATE REQUIRED AND SATISFIED.**

Goal intake, generated curriculum, synchronized review, review decisions, and exact-version teaching materially change product interfaces, validation behavior, governance/authority semantics, and capability meaning. `README.md` is updated in the same change set and retains Edukors-required completeness markers.

## Implemented this lane

### Contracts

- `schemas/participant-goal-intake.schema.json`
- `schemas/generated-curriculum.schema.json`
- existing `schemas/curriculum-review-package.schema.json` reused
- `schemas/teaching-session.schema.json`
- `scripts/validate-curriculum-contracts.mjs` now validates goal/curriculum/review/teaching contract identity and exact-version requirements
- `app/package.json` runs curriculum contract validation before receipt validation and TypeScript/Vite build

### Goal intake

- `app/src/curriculum.ts`
- `app/src/GoalIntakePanel.tsx`
- creates/exports `steglearn.participant-goal-intake/v1`
- captures participant/context, desired outcome/depth, starting point, constraints, evidence expectations, reviewer requirements
- bounded AI-participant/context and supervised-authority mismatches fail closed

### Bounded curriculum generation

- `app/src/curriculumGeneration.ts`
- consumes exact admitted goal record
- emits `steglearn.generated-curriculum/v1`
- preserves exact goal ID/version provenance and requested depth
- emits prerequisites, objectives, units, teaching methods, evidence expectations, progression gates, completion criteria, review binding, exact-version teaching policy
- deterministic prototype only; no arbitrary-domain expert-quality claim

### Synchronized review

- `app/src/curriculumReview.ts`
- emits existing `steglearn.curriculum-review-package/v1`
- verifies exact goal/curriculum provenance
- human-readable and machine-readable UI projections resolve to the same curriculum ID/version
- review package export supported
- contextual `APPROVE` and `REQUEST_CHANGES` decisions supported
- approval requires `APPROVAL_WITHIN_CONTEXT`; revision request remains distinct
- `content_hash_sha256` remains intentionally null pending deterministic hashing

### Review-gated teaching

- `app/src/teaching.ts`
- emits `steglearn.teaching-session/v1`
- teaching start requires review policy satisfaction; default teacher-led path with approval requirement is blocked until `APPROVED`
- teaching session records participant, exact curriculum ID/version, review state at start, human-authority requirement, authority IDs, current unit, timestamps, and teaching events
- UI presents current unit outcomes, teaching methods, activities, evidence expectations, and progression gate
- advancing units records teaching events and fails if curriculum ID/version differs
- bounded session can complete after all generated units are presented

This is now an actual bounded source/runtime prototype of **goal -> curriculum -> review -> teaching**, but not yet a conversational AI instructor, expert dynamic curriculum generator, evidence-driven adaptive progression engine, or production classroom system.

## Validation evidence

Preserved historical PASS evidence:

- `34001370386` — early-language compatibility/build;
- `34001573328` — Edukors public-observation source binding;
- `34014352330` — initial goal/curriculum contracts;
- `34014483851` — goal-intake UI;
- `34014587317` — bounded generated-curriculum UI;
- `34014660474` — synchronized review rendering; validate job completed SUCCESS.

The newest review-decision / teaching-session changes are newer than `34014660474`; their CI must be observed before claiming latest-head PASS.

All CI evidence is source/build evidence only. It does not prove subject-matter curriculum quality, production AI teaching, classroom effectiveness, runtime sensor observation, external-learning InTr execution, or production activation.

## Remaining machine work — priority order

1. Observe/fix latest-head validation for review-decision + teaching-session changes.
2. Add deterministic curriculum content hashing and bind review decisions to the hashed curriculum version.
3. Add material curriculum revision/diff flow producing a new inspectable version and invalidating prior teaching authorization where required.
4. Add participant evidence capture/progression gating inside teaching rather than unit advancement by button alone.
5. Add conversational AI teaching inside the exact-version teaching session while preserving teaching/evidence/event contracts.
6. Replace/augment deterministic curriculum generation with an admitted AI-backed generator that still emits `steglearn.generated-curriculum/v1`; model output is not automatically reviewed curriculum.
7. Check/reuse existing StegVerse permission/evidence/Interlock contracts before adding sensor/input permission and observation-event contracts.
8. Define teacher delegation/return contracts for bounded learner/small-group teaching.
9. Add visible StegLearn Entity and teacher-facing observation/recommendation surfaces.
10. Add admitted AI-participant learning contracts and negative tests.
11. When Site orchestration admits work, publish the StegLearn informational landing page and navigation/discovery path.

## Edukors lane

Evaluation-only Edukors relationship `steglearn.edukors.evaluation.v1` remains source-complete. Authentic runtime execution still requires canonical task/WorkerCoordinator/Interlock admission, exact correlated observation, a StegLearn evaluation record, and Master Records reconciliation. No partnership or production integration is inferred.

## User / physical work

No user action is required for the current source/UI work.

A future real classroom pilot requires an explicitly authorized educator/learning context before collecting real participant or sensor evidence.

TI-83/Arduino physical work remains in the existing lesson lane.

## Release state

Not release-tagged. Deterministic hashing, curriculum revision/diff semantics, evidence-gated teaching progression, conversational AI instruction, admitted AI-backed generation, sensor-mediated classroom assistance, generalized AI-participant learning, authentic external-learning runtime evidence, and public Site publication remain incomplete.

When release predicates are actually satisfied, verify propagation to `StegVerse-Labs/Site`, `GCAT-BCAT-Engine/Publisher`, `StegVerse-Labs/admissibility-wiki`, and `StegVerse-002/stegguardian-wiki` as applicable.

## Archive readiness

The current product direction, preflight, contracts, goal/curriculum/review/teaching implementation, validation boundary, remaining sequence, Site publication boundary, and Edukors relationship are repository-resident. No conversation-only information is required to continue this lane.
