# StegLearn Mirror Handoff

## Repository

`StegVerse-Labs/StegLearn`

## Status

Active implementation. This file is the repository-local source of truth for active StegLearn implementation lanes.

## Canonical Product Direction

StegLearn is a governed learning environment in which a human or admitted AI entity may enter, converse with the StegLearn AI Entity about a desired skill, capability, body of knowledge, outcome, and desired depth, receive a governed curriculum, obtain a reviewable version of that curriculum, and then be taught the selected curriculum version by StegLearn.

```text
participant enters StegLearn
-> conversation about desired skill / knowledge / outcome
-> establish starting point + desired depth + constraints
-> governed participant goal-intake record
-> generated curriculum version
-> reviewable curriculum package
-> review / revise / select according to entity authority
-> teach selected curriculum version
-> observe permitted engagement / participation / progress
-> adapt instruction
-> preserve evidence / explanation / revision
-> review / receipt / longitudinal continuity
```

Curriculum generation is not terminal. Reviewability and teaching are part of the product definition.

The intended instructional range can extend from first exposure through advanced professional, graduate, doctoral, and post-doctoral depth where the subject supports those levels. Depth labels do not themselves represent accreditation, degrees, professional licenses, credentialing authority, or institutional equivalence.

## Preferred Initial Deployment

The preferred first deployment remains **human teacher + governed on-screen StegLearn AI Entity**.

In teacher-led use, the human teacher remains the educational authority while StegLearn may discuss goals, generate curriculum, render reviewable versions, teach within admitted scope, observe permitted engagement/participation/progress, adapt instruction, preserve evidence, and return recommendations.

The teacher-first posture is the preferred first validation environment; it is not the full product boundary.

## Governing Boundaries

- Generated curriculum does not become a fixed participant identity.
- Requested level does not automatically prove readiness; prerequisite work may be proposed without permanent classification.
- In teacher-led use, the human teacher remains the educational authority.
- Review capability does not automatically grant approval or teaching authority.
- Teaching must bind an identifiable curriculum version.
- Material curriculum changes must remain versioned and inspectable.
- Sensor and learning inputs must be explicitly authorized for the context.
- Observable engagement, participation, responsiveness, activity, and progress may inform instruction but do not independently become mastery, failure, discipline, or fixed identity.
- Participant evidence, sensor/system observations, human context, AI interpretation, curriculum content, teaching action, and review decision remain distinguishable evidence classes.
- Professional, regulated, safety-critical, or high-consequence learning may require additional human supervision or separately governed constraints.
- Completion does not itself grant professional licensure, accredited status, or authority outside the admitted learning relationship.
- External educational-system interaction must cross the applicable Interlock/InTr boundary before becoming StegLearn state.
- Task Registry owns work intent; WorkerCoordinator owns executable claims/fences; Master Records owns observed/reconstructable reality; Interlock/InTr governs ingress/egress. Source and CI do not manufacture runtime authority.

## Existing Lanes Preserved

- TI-83 Plus / Arduino reusable learning path and reviewed receipt model.
- Early-language longitudinal continuity with family-specific records private/local by default.
- Edukors evaluation-only external-learning Interlock/InTr relationship `steglearn.edukors.evaluation.v1`, source-validated with authentic runtime interaction unobserved.

## Current Branch / PR

Branch: `feature/teacher-first-public-model`

Open PR: `StegVerse-Labs/StegLearn#3` — `Implement StegLearn goal-to-curriculum review/teaching contracts`.

No competing open StegLearn PR was observed for this same workload during the current preflight. Existing learning-path branches remain separate scope.

## Current Machine Preflight — 2026-09-06

Resolved before functional mutation:

1. Canonical repository handoff: this file.
2. Canonical Task Registry: `StegVerse-Labs/.github/data/canonical-task-registry.json`, generation 15, status `RUNTIME_PROFILE_GOVERNANCE_REVIEW_SOURCE_BOUND_AUTHENTIC_RUNTIME_PENDING`.
3. WorkerCoordinator source: `StegVerse-Labs/.github/control/worker-registry.json`, generation 22. No StegLearn goal-intake/curriculum claim or fence was observed in indexed coordination surfaces.
4. Master Records canonical work custody handoff: `master-records/orchestration/CANONICAL_WORK_COORDINATION_CUSTODY_MIRROR_HANDOFF.md`, status `SOURCE_FEED_RUNTIME_PROFILE_AND_PRESENCE_CUSTODY_PATH_IMPLEMENTED_AUTHENTIC_INPUT_PENDING`.
5. Cross-task collision check: open StegLearn PR search found only PR #3 for the current workload; no duplicate goal-intake/generated-curriculum implementation was found.
6. Existing implementations reused: `schemas/learning-path.schema.json`, `schemas/curriculum-review-package.schema.json`, existing receipt/evidence boundaries, Edukors external-learning validation, and the existing build path. No competing curriculum-review schema was minted.
7. Site remains a separate publication target and is not mutated from this lane unless Site orchestration admits the workload.

### README completeness predicate

**README UPDATE REQUIRED AND SATISFIED.**

The change adds machine-readable participant-goal and generated-curriculum interfaces and makes curriculum-contract validation a build prerequisite. These materially change supported interfaces, validation behavior, capability meaning, and exact-version teaching semantics. `README.md` is updated in the same change set and preserves the required Edukors external-learning completeness markers.

## Highest-Priority Admissible Machine Work Completed

The prior top two source tasks are complete:

1. machine-readable participant goal / desired-depth intake schema;
2. generated curriculum schema capable of prerequisite maps, instructional depth, evidence expectations, branches, completion criteria, review binding, and teaching policy.

### Installed

- `schemas/participant-goal-intake.schema.json`
- `schemas/generated-curriculum.schema.json`
- `examples/curricula/python-foundations-goal-intake.json`
- `examples/curricula/python-foundations-generated-curriculum.json`
- `scripts/validate-curriculum-contracts.mjs`
- `app/package.json` build gate updated to run curriculum-contract validation before receipt validation and TypeScript/Vite build
- `README.md` updated in the same change set

### Reused rather than duplicated

`steglearn.generated-curriculum/v1` binds to the existing `steglearn.curriculum-review-package/v1` review contract. Material changes require a new inspectable version, and teaching must bind the exact selected curriculum version.

## Validation Evidence

Historical evidence preserved:

- run `34001370386`: repository validation/build PASS after early-language compatibility repair;
- run `34001573328`: canonical Edukors public-observation source binding PASS after validator stabilization.

Current branch validation:

- run `34014352330`: **PASS** on head `e0339226fed1caa8612ef64fa0ac42b10809c20a`.
- Edukors Interlock source-contract validator: PASS.
- new curriculum-contract validator through `npm run build`: PASS.
- committed receipt validation: PASS.
- TypeScript/Vite build: PASS.

This validates source/build contracts only. It does not prove dynamic curriculum generation, runtime review rendering, curriculum teaching execution, classroom effectiveness, AI-participant learning, runtime sensing, or production activation.

## Remaining Machine Work — Priority Order

1. Implement conversational goal intake in the StegLearn UI using `steglearn.participant-goal-intake/v1` rather than inventing a parallel state shape.
2. Implement bounded curriculum generation that emits `steglearn.generated-curriculum/v1` from an admitted goal-intake record.
3. Materialize synchronized review-package rendering from the generated curriculum using `steglearn.curriculum-review-package/v1`.
4. Implement actual teaching execution bound to the selected curriculum ID/version, not syllabus-only generation.
5. Add curriculum revision/diff handling so material instructional changes produce a new inspectable version.
6. Define machine-readable sensor/input permission and observation-event contracts only after checking existing StegVerse permission/evidence/Interlock contracts for reuse.
7. Define teacher delegation/return contracts for bounded learner or small-group teaching.
8. Add visible StegLearn Entity and teacher-facing observation/recommendation surfaces.
9. Add deterministic fixtures/tests separating participant evidence, sensor/system observation, AI interpretation, curriculum content, review decision, teaching action, and human decision.
10. Define admitted AI-participant learning contracts and negative tests.
11. When Site orchestration admits the workload, install the public landing page and Site navigation/discovery path.

## Edukors Runtime Lane

Source implementation remains complete for evaluation-only observation binding. Authentic runtime execution still requires canonical task/WorkerCoordinator/Interlock admission, exact correlated observation, a StegLearn evaluation record, and Master Records reconciliation. No partnership or production integration is inferred.

## Remaining Physical / User Work

- None required for the current source/schema implementation.
- A future real classroom pilot requires an explicitly authorized educator/learning context before collecting real participant or sensor evidence.
- TI-83/Arduino physical work remains as documented in the existing lesson lane.

## Release State

Not release-tagged. Runtime goal intake, dynamic curriculum generation, review rendering, curriculum-version-bound teaching execution, visible AI Entity behavior, sensor-mediated classroom interaction, generalized AI-participant learning, and public Site publication remain incomplete.

When release predicates are actually satisfied, release work must verify pertinent propagation to `StegVerse-Labs/Site`, `GCAT-BCAT-Engine/Publisher`, `StegVerse-Labs/admissibility-wiki`, and `StegVerse-002/stegguardian-wiki` as applicable.

## Archive Readiness

The current product direction, preflight, installed goal/curriculum contracts, validation evidence, remaining implementation sequence, Site publication boundary, and Edukors relationship are repository-resident. No conversation-only information is required to continue this lane.
