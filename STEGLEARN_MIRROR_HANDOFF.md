# StegLearn Mirror Handoff

## Repository / authority

Repository: `StegVerse-Labs/StegLearn`

Status: active implementation.

This file is the repository-local source of truth for current StegLearn implementation lanes.

## Canonical product direction

StegLearn is a governed learning environment in which a human or admitted AI entity can move through:

```text
goal conversation
-> governed goal-intake record
-> generated curriculum version
-> deterministic review-content SHA-256
-> synchronized human/machine review package
-> hash-bound review / revision / approval according to authority
-> exact curriculum ID/version/hash teaching session
-> permitted observation / adaptation / evidence
-> receipt / longitudinal continuity
```

Curriculum generation is not terminal. Reviewability and teaching are product requirements. Preferred first deployment remains **human teacher + governed on-screen StegLearn AI Entity**; in teacher-led use, the human teacher remains educational authority.

## Governing invariants

- Requested depth does not automatically prove readiness.
- Generated curriculum does not become fixed participant identity.
- Review availability does not equal approval or teaching authority.
- `APPROVE` requires `APPROVAL_WITHIN_CONTEXT`.
- Review decisions bind the deterministic SHA-256 of the exact reviewable curriculum envelope.
- A content-hash mismatch fails closed for review decisions and teaching readiness.
- Teaching binds exact curriculum ID, version, and reviewed content hash.
- Material curriculum changes must remain versioned/inspectable and cannot silently inherit prior approval.
- Hash equality is integrity evidence only; it does not prove correctness, pedagogical quality, admissibility, accreditation, or authority.
- Sensor/learning inputs require explicit authorization.
- Participant evidence, system observation, human context, AI interpretation, curriculum content, review decision, and teaching action remain distinguishable.
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
- StegVerse-wide source search found the existing canonical hashing convention: recursively sorted object keys, compact JSON, UTF-8, SHA-256. StegLearn reuses that convention rather than creating a competing hash interpretation;
- existing curriculum-review, teaching-session, receipt/evidence, Edukors validation, and build surfaces were reused;
- Site remains a separate publication target and is not mutated unless Site orchestration admits the workload.

### README completeness

**README UPDATE REQUIRED AND SATISFIED.**

Deterministic curriculum hashing changes review-package interface requirements, review-decision evidence semantics, teaching prerequisites/failure behavior, and capability meaning. `README.md` is updated in the same change set and retains the required Edukors completeness markers.

## Implemented current vertical slice

Existing governed path remains:

- `schemas/participant-goal-intake.schema.json`
- `schemas/generated-curriculum.schema.json`
- `schemas/curriculum-review-package.schema.json`
- `schemas/teaching-session.schema.json`
- `app/src/curriculum.ts`
- `app/src/curriculumGeneration.ts`
- `app/src/curriculumReview.ts`
- `app/src/teaching.ts`
- `app/src/GoalIntakePanel.tsx`

Highest-priority hash-binding work is now implemented:

- `app/src/canonicalHash.ts` provides canonical JSON + SHA-256;
- review content envelope includes curriculum identity/version, learning goal/depth, starting-point summary, constraints, and canonical curriculum;
- `review_surface.content_hash_sha256` is mandatory/non-null;
- each review record stores `reviewed_content_hash_sha256`;
- review decisions fail closed on hash mismatch;
- `teaching_binding.bound_content_hash_sha256` must match the review hash;
- approval-required teaching requires a matching hash-bound contextual approval;
- teaching sessions record `curriculum_content_hash_sha256`;
- teaching readiness fails closed when the review or teaching hash binding fails.

`scripts/validate-curriculum-contracts.mjs` validates hash requirements and canonical key-order invariance in addition to existing goal/curriculum/review/teaching invariants.

## Validation evidence

Preserved prior PASS evidence includes `34001370386`, `34001573328`, `34014352330`, `34014483851`, `34014587317`, `34014660474`, `34014762575`, and `34014798310`.

Current deterministic-hash implementation validation:

- GitHub Actions run `34017433834`: **SUCCESS** on functional/documentation head `a877cf06e071005900fc42afd8462a96854a271d`.
- The run includes the Edukors completeness validator and the full curriculum-contract / receipt / TypeScript / Vite build gate.
- The canonical handoff commit after that run is documentation-only and does not add functional behavior.

This is source/build validation only. It does not prove curriculum quality, classroom effectiveness, production conversational AI teaching, runtime sensor observation, authentic external-learning InTr execution, or production activation.

## Remaining machine work — priority order

1. Add material curriculum revision/diff flow producing a new inspectable version/hash and invalidating prior teaching authorization where required.
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

No user action is required for current source/UI/hash-binding work. A future real classroom pilot requires an explicitly authorized educator/learning context before collecting real participant or sensor evidence.

## Release state

Not release-tagged. Material revision/diff semantics, evidence-gated teaching progression, conversational AI instruction, admitted AI-backed generation, sensor-mediated classroom assistance, generalized AI-participant learning, authentic external-learning runtime evidence, and public Site publication remain incomplete.

When release predicates are actually satisfied, verify propagation to `StegVerse-Labs/Site`, `GCAT-BCAT-Engine/Publisher`, `StegVerse-Labs/admissibility-wiki`, and `StegVerse-002/stegguardian-wiki` as applicable.

## Archive readiness

The product direction, preflight, canonical hashing reuse decision, current goal/curriculum/review/teaching/hash implementation, validation evidence, remaining sequence, Site publication boundary, and Edukors relationship are repository-resident. No conversation-only information is required to continue this lane.
