# Curriculum Review and Teaching Contract

## Purpose

StegLearn must do three distinct things for a requested learning goal:

1. develop a curriculum;
2. produce a reviewable version of that curriculum for an authorized human or admitted AI entity;
3. be able to teach the reviewed curriculum.

A generated curriculum is therefore both a learning plan and a versioned review artifact. Teaching must bind to an identifiable curriculum version rather than to an unreviewable transient prompt result.

## Core flow

```text
participant goal conversation
-> curriculum generation
-> canonical curriculum version
-> human-readable + machine-readable review package
-> review / comment / revision / selection as applicable
-> selected curriculum version
-> StegLearn teaching execution
-> adaptive change set when needed
-> renewed review when policy or materiality requires
-> evidence / receipt / continuity
```

The participant and reviewer may be human or an admitted AI entity. Review capability does not itself grant approval authority; authority depends on the governing learning context.

## Reviewable for any admitted entity

Every curriculum version should be reviewable through two synchronized representations of the same underlying curriculum:

- **human-readable view** — clear objectives, sequence, prerequisites, readings, activities, projects, evidence expectations, review checkpoints, completion criteria, and known constraints;
- **machine-readable manifest** — structured fields suitable for AI/entity inspection, comparison, validation, diffing, and governed automation.

Both representations must resolve to the same `curriculum_id` and `curriculum_version` and should be hash-bindable so a reviewer can identify the exact curriculum that was reviewed.

An admitted reviewer may be:

- the learner or participant;
- a teacher;
- a parent or steward;
- a subject-matter reviewer;
- an institutional reviewer;
- an admitted AI reviewer;
- another governed entity with an allowed review role.

The review record must preserve reviewer identity or governed pseudonymous identity, review role, decision or comments, reviewed version, and timestamp where applicable.

## Review is not automatically approval authority

StegLearn must distinguish:

```text
can inspect curriculum
!= can comment on curriculum
!= can request revision
!= can approve curriculum
!= can authorize teaching
```

A human learner may be allowed to review and request changes without holding institutional approval authority. An AI entity may be allowed to analyze prerequisite coverage without being permitted to authorize teaching. A teacher may have teaching-authorization authority in a classroom context. These are separate capabilities.

## Curriculum contents

A reviewable curriculum may include:

- stated learning goal and desired outcome;
- requested depth and rigor;
- starting-point assumptions;
- prerequisite map;
- learning objectives;
- conceptual sequence;
- practical skills;
- readings and source requirements;
- exercises and demonstrations;
- projects and experiments;
- formative checks;
- research questions;
- evidence expectations;
- review checkpoints;
- optional specialization branches;
- estimated pacing or sequencing assumptions where appropriate;
- completion criteria;
- known limitations or external dependencies;
- credentialing/accreditation disclaimers where relevant;
- next-stage recommendations.

## Versioning and revision

Each material curriculum change should create a new curriculum version or explicit change set.

Examples of material changes include:

- adding or removing prerequisite work;
- changing requested depth;
- changing major learning objectives;
- replacing core sources or methods;
- changing completion evidence;
- adding a regulated or high-consequence activity;
- materially changing the intended teaching sequence.

Minor instructional adaptation during teaching may remain within an admitted curriculum version when the governing context permits it. Material adaptation must remain inspectable and may require re-review before continued teaching.

## Teaching binding

StegLearn teaching should identify the curriculum version being taught.

```text
curriculum_id
+ curriculum_version
+ applicable review state
+ teaching context
-> teaching session
```

A teaching session may adapt examples, explanations, pacing, exercises, or prerequisite reinforcement within admitted bounds while preserving a traceable relationship to the selected curriculum.

StegLearn must not present a curriculum for review and then silently teach a materially different curriculum without recording the change.

## Human and AI participants

### Human participant

A human may request a curriculum, inspect it, ask for changes, select among alternatives, and then learn through StegLearn or a teacher-assisted StegLearn context.

### AI participant

An admitted AI entity may request a curriculum, inspect the canonical machine-readable form, provide review comments when authorized, and be taught within its admitted learning-state and authority boundaries.

AI participation does not automatically grant authority to modify external systems, production state, governance state, credentials, or repositories as a consequence of learning.

## Teacher-first relationship

In the preferred initial deployment, the human teacher can review the generated curriculum before StegLearn teaches it to a learner or group.

The teacher may:

- accept the proposed sequence;
- request changes;
- constrain sources or activities;
- change the depth or pacing target;
- add local instructional context;
- approve a bounded StegLearn teaching assignment;
- retain authority over high-impact educational decisions.

This makes curriculum generation inspectable before classroom execution while still allowing StegLearn to perform the teaching within delegated scope.

## Public product statement

A concise statement of the product is:

> Tell StegLearn what you want to learn. StegLearn develops a curriculum at the depth you need, produces a version that a human or admitted AI entity can review, revise, or approve according to its authority, and then StegLearn can teach that curriculum—adapting as learning progresses while preserving what changed and why.

## Implementation requirements

The first machine implementation should provide:

1. a curriculum review-package schema;
2. stable curriculum identity and versioning;
3. human-readable rendering from the canonical curriculum;
4. machine-readable canonical curriculum output;
5. reviewer role and review-result capture;
6. teaching-session binding to an exact curriculum version;
7. material-change detection or explicit change-set representation;
8. evidence continuity from curriculum generation through teaching and review.
