# StegLearn Mirror Handoff

## Repository

`StegVerse-Labs/StegLearn`

## Status

Active implementation. This file is the repository-local source of truth for active StegLearn implementation lanes.

## Canonical Product Direction

StegLearn is a governed learning environment in which a human or admitted AI entity may enter, converse with the StegLearn AI Entity about a desired skill, capability, body of knowledge, outcome, and desired depth, receive a governed curriculum, and then be taught that curriculum.

```text
participant enters StegLearn
-> conversation about desired skill / knowledge / outcome
-> establish starting point + desired depth + constraints
-> generate governed curriculum
-> teach curriculum
-> observe permitted engagement / participation / progress
-> adapt instruction
-> preserve evidence / explanation / revision
-> review / receipt / longitudinal continuity
```

The intended instructional range can extend from first exposure and foundational learning through advanced professional, graduate, doctoral, and post-doctoral depth where the subject supports those levels.

Those labels describe instructional depth and rigor. They do not themselves represent accreditation, degrees, professional licenses, credentialing authority, or institutional equivalence.

Canonical product documents:

- `docs/conversational-curriculum-and-teaching-model.md`
- `docs/teacher-assist-model.md`
- `docs/public-landing-page.md`
- `docs/product-spec.md`
- `docs/ai-scaffold-policy.md`

## Preferred Initial Deployment: Teacher-First Governed AI Entity

The broader product is not teacher-dependent, but the preferred initial deployment posture is:

```text
human teacher
-> governed on-screen StegLearn AI Entity
-> explicitly authorized sensors and learning signals
-> observable engagement / participation / responsiveness / activity / progress
-> bounded curriculum generation + teaching + instructional adaptation
-> human educational authority and review
-> learning receipt / longitudinal continuity
```

In teacher-led use, the human teacher remains the educational authority. StegLearn is intended to enhance the teacher's ability to perceive, teach, differentiate, and support the learning environment, not silently replace the teacher.

The teacher-first posture is the preferred first validation environment for curriculum generation, live teaching, bounded delegation, sensor use, evidence capture, and adaptive instruction. It is not the full product boundary.

## Human and AI Participants

### Human participant

A human may enter StegLearn to develop a new skill, learn a discipline, prepare for more advanced study, or pursue a research question.

### AI participant

An admitted AI entity may participate as a learner when its identity, authority, permitted inputs/outputs, evidence obligations, and learning-state mutation rights are explicitly bounded.

The ability of an external model or agent to send requests does not itself establish admission.

## Curriculum Generation and Teaching

StegLearn should be able to:

1. discuss the participant's desired outcome;
2. establish current starting point where necessary;
3. establish desired rigor, depth, constraints, and evidence expectations;
4. generate a revisable curriculum;
5. teach that curriculum;
6. adapt sequence, pace, examples, prerequisites, projects, and depth from observed progress;
7. preserve reconstructable evidence of learning and revision over time.

Generated curricula may contain prerequisite maps, objectives, conceptual sequences, readings, exercises, projects, experiments, formative checks, research questions, specialization branches, evidence expectations, review checkpoints, completion criteria, and next-stage recommendations.

Teaching may include direct explanation, Socratic questioning, demonstration, guided practice, adaptive examples, simulations, projects, supervised experiments, critique/revision cycles, source-based discussion, research-method guidance, participant explanation-back, and evidence-based progression checks.

## Governing Boundaries

- Generated curriculum does not become a fixed participant identity.
- Requested level does not automatically prove readiness; prerequisite work may be proposed without permanent classification.
- In teacher-led use, the human teacher remains the educational authority.
- The StegLearn AI Entity may discuss goals, generate curriculum, teach, observe, assist, explain, adapt, organize, record, and recommend within admitted scope; it does not silently acquire final authority.
- Sensor and learning inputs must be explicitly authorized for the context; technical availability does not equal admissibility.
- Observable engagement, participation, responsiveness, activity, and progress may inform instruction but do not independently become mastery, failure, discipline, or fixed participant identity.
- Preserve participant evidence, sensor/system observations, teacher/parent context, and AI interpretation as distinguishable evidence classes.
- Professional, regulated, safety-critical, or high-consequence learning may require additional human supervision, standards, licensing boundaries, or separately governed constraints.
- Completion of a StegLearn curriculum does not itself grant professional licensure or accredited academic status.
- AI-participant completion grants no external authority outside the admitted learning relationship.
- External educational-system interaction must cross the applicable Interlock/InTr boundary before becoming StegLearn state.
- Public-source evaluation does not imply partnership, endorsement, curriculum adoption, authenticated access, or production integration.
- Task Registry owns work intent, WorkerCoordinator owns executable claims/fences, Master Records owns observed/reconstructable reality, and Interlock/InTr governs ingress/egress; source and CI do not manufacture those authorities.

## Existing Lanes Preserved

### TI-83 Plus / Arduino learning path

```text
TI-83 Plus restoration
-> TI-BASIC programming
-> sensor observation
-> Arduino bridge
-> governed low-voltage action
-> reviewed learning receipt
```

Implemented source includes the reusable `lessons/` catalog, machine-readable learning-path schema, TI-83/Arduino path, staged guide, example receipt, catalog rendering, and one-click path selection.

### Early-language longitudinal continuity

Preserves parent-reviewed early-language observations over time while keeping family-specific records private/local by default. Public examples remain anonymized, synthetic, or generalized.

### Edukors external-learning Interlock / InTr evaluation

Canonical bounded handoff: `docs/EDUKORS_INTR_MIRROR_HANDOFF.md`

Relationship: `steglearn.edukors.evaluation.v1`

Current state:

`SOURCE_EVALUATION_INTERLOCK_AND_CANONICAL_PUBLIC_OBSERVATION_BINDING_VALIDATED_RUNTIME_INTERACTION_NOT_OBSERVED`

The relationship remains evaluation-only. No partnership, authenticated integration, production activation, or runtime interaction is inferred from source or CI.

The broader curriculum-generation and teaching model makes the Edukors intellectual intersection more direct: how the human educator's role evolves when a governed AI Entity can generate differentiated curriculum, teach within bounded scope, observe participation/progress, and preserve educational authority.

## Implemented in Current Teacher-First / Curriculum Branch

Branch: `feature/teacher-first-public-model`

- Added `docs/teacher-assist-model.md`.
- Added `docs/public-landing-page.md`.
- Added `docs/conversational-curriculum-and-teaching-model.md`.
- Updated `README.md` to make conversational curriculum generation, teaching, human/AI participants, and teacher-first deployment explicit.
- Updated `docs/product-spec.md` so goal conversation, curriculum generation, teaching, adaptive instruction, teacher authority, authorized sensors, and AI participants are first-class product semantics.
- Updated `docs/ai-scaffold-policy.md` previously for teacher authority, authorized sensor observation, bounded delegation, and authority drift.
- Public copy distinguishes product intent from runtime, credentialing, accreditation, deployment, and partnership claims.

## Validation Evidence Preserved

Prior source/build validation remains:

- application production build passed with TypeScript and Vite;
- committed receipt fixture validation passed;
- early-language acceptance coverage exists;
- Edukors source validator is wired into `.github/workflows/validate.yml`;
- run `34001370386` established a full repository validation/build PASS after early-language compatibility repair;
- run `34001573328` established a full PASS for canonical Edukors public-observation transport binding after validator stabilization.

These are source/build validation facts only. They do not prove classroom effectiveness, dynamic curriculum quality across arbitrary domains, live sensor behavior, AI-participant runtime learning, authentic Edukors InTr runtime interaction, or production activation.

## Resolved Machine Preflight State

Before teacher-first mutation, the session resolved:

- this canonical handoff;
- `StegVerse-Labs/.github/data/canonical-task-registry.json` generation 15;
- canonical authority separation among Task Registry, WorkerCoordinator, Master Records, and Interlock/InTr;
- `master-records/orchestration/CANONICAL_WORK_COORDINATION_CUSTODY_MIRROR_HANDOFF.md` with authentic current input still pending;
- no indexed StegLearn teacher-first executable task identity or WorkerCoordinator claim/fence;
- no branch collision with existing learning-path branches;
- Site repository authority and orchestration state.

Current Site orchestration reports `external_tasks_allowed=false` and `external_session_ownership_allowed=false`. Therefore no Site mutation has been performed from this branch. The public landing-page source remains in StegLearn until Site admits the workload.

README completeness decision: the teacher-first and conversational curriculum/teaching changes materially alter product behavior meaning, AI-role semantics, participant model, sensor prerequisites, and authority boundaries; `README.md` is updated in the same change set.

## Remaining Machine Work

### Highest-priority product implementation sequence

1. Define machine-readable participant goal / desired-depth intake schema.
2. Define generated curriculum schema capable of representing prerequisite maps, instructional depth, evidence expectations, branches, and completion criteria.
3. Implement conversational goal intake in the StegLearn UI.
4. Implement bounded curriculum generation from an admitted goal conversation.
5. Implement teaching execution for generated curricula rather than syllabus-only generation.
6. Define machine-readable sensor/input permission and observation-event contracts without duplicating existing StegVerse permission, Interlock/InTr, or evidence schemas.
7. Define teacher delegation/return contracts for bounded learner or small-group teaching.
8. Add visible StegLearn Entity and teacher-facing observation/recommendation surfaces.
9. Add deterministic fixtures/tests separating participant evidence, sensor/system observation, AI interpretation, generated curriculum, teaching action, and human decision.
10. Define admitted AI-participant learning contracts and negative tests.
11. When Site orchestration admits the workload, install `docs/public-landing-page.md` as the public StegVerse.org StegLearn landing surface and add navigation/discovery.
12. Do not claim cross-domain expert teaching, accredited equivalence, classroom effectiveness, runtime sensing, or AI-participant learning until separately evidenced.

### Edukors runtime lane

Source implementation and repository validation remain complete for the evaluation contract and canonical public-observation binding. Authentic runtime execution still requires canonical task/WorkerCoordinator/Interlock admission, exact correlated observation, StegLearn evaluation record, and Master Records reconciliation.

## Remaining Physical / User Work

- No user action is required for current product-definition, curriculum-model, or landing-page source work.
- A future real classroom pilot requires an explicitly authorized educator/learning context before collecting real participant or sensor evidence.
- TI-83/Arduino physical work remains as previously documented in the relevant lesson and prior handoff history.

## Release State

Not release-tagged by this lane.

The product direction and public source are materially clearer, but dynamic curriculum generation, actual curriculum teaching, visible AI Entity runtime behavior, sensor-mediated classroom interaction, generalized AI-participant learning, Site publication, and authentic runtime evidence remain incomplete.

When release predicates are actually satisfied, release work must verify pertinent propagation to `StegVerse-Labs/Site`, `GCAT-BCAT-Engine/Publisher`, `StegVerse-Labs/admissibility-wiki`, and `StegVerse-002/stegguardian-wiki` as applicable.

## Archive Readiness

The teacher-first model, conversational curriculum-generation and teaching model, human/AI participant model, landing-page source, governance boundaries, Site admission blocker, Edukors relationship, existing learning lanes, and remaining implementation sequence are repository-resident. No conversation-only information is required to continue this lane.
