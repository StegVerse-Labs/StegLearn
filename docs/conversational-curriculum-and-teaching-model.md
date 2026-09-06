# StegLearn Conversational Curriculum, Review, and Teaching Model

## Purpose

StegLearn is not limited to selecting from a fixed catalog of lessons.

A human or admitted AI entity may enter StegLearn, describe a desired skill or body of knowledge, discuss the desired depth and outcome with the StegLearn AI Entity, receive a governed curriculum, review that curriculum through an entity-appropriate review surface, and then be taught the selected curriculum by StegLearn.

The intended range is from entry-level learning through advanced professional, research, doctoral, and post-doctoral depth where the subject supports those levels.

## Core interaction

```text
participant enters StegLearn
-> conversation about desired skill / knowledge / outcome
-> establish starting point, desired depth, constraints, evidence expectations, and learning context
-> generate governed curriculum
-> create stable curriculum version
-> render human-readable + machine-readable review package
-> review / comment / revision / selection according to entity authority
-> teach selected curriculum version
-> observe permitted engagement / participation / progress
-> adapt instruction and sequence
-> preserve material curriculum changes and review state
-> preserve evidence, explanations, revisions, and completed work
-> review / receipt / continuity
```

The participant or reviewer may be human or an admitted AI entity. Entity type changes applicable permissions, evidence handling, review capability, approval authority, and teaching authority; it does not change the basic conversational curriculum mechanism.

## Curriculum depth

StegLearn should be able to construct a path appropriate to the requested level rather than forcing every participant into the same sequence.

Representative levels include:

- orientation / first exposure;
- foundational literacy;
- beginner;
- intermediate;
- advanced;
- vocational / applied professional;
- undergraduate-equivalent;
- graduate / master's-equivalent;
- doctoral / research-equivalent;
- post-doctoral / frontier-specialization where applicable.

These labels describe requested instructional depth and rigor. They are not themselves academic credentials, accredited degrees, licenses, or claims of institutional equivalence.

## Curriculum generation

A generated curriculum may contain:

- prerequisite map;
- learning objectives;
- conceptual sequence;
- practical skills;
- reading or source requirements;
- demonstrations;
- exercises;
- projects;
- experiments;
- discussion prompts;
- formative checks;
- research questions;
- evidence expectations;
- review checkpoints;
- optional branches and specialization paths;
- completion criteria;
- suggested next-stage learning.

The curriculum remains revisable. New evidence may justify changing pace, sequence, examples, prerequisite work, or depth.

## Reviewable curriculum

Curriculum generation must produce more than an internal planning object.

StegLearn should produce a reviewable curriculum version that can be inspected by any admitted entity with review capability.

Each curriculum version should support synchronized representations:

- a **human-readable view** suitable for learners, teachers, parents/stewards, subject-matter experts, institutions, and other human reviewers;
- a **machine-readable canonical manifest** suitable for admitted AI entities, validators, comparison tools, and governed automation.

Both representations resolve to the same `curriculum_id` and `curriculum_version` and should be hash-bindable.

Review must distinguish capability from authority:

```text
inspect
!= comment
!= request changes
!= approve
!= authorize teaching
```

An entity may be able to review without being authorized to approve. An admitted AI reviewer may analyze prerequisite coverage without being allowed to authorize classroom teaching. A teacher may have approval or teaching-authorization authority in a classroom context. These capabilities must remain explicit.

A review record should preserve the exact curriculum version, reviewer identity or governed pseudonymous identity, reviewer role, decision or comments, and applicable authority effect.

See `docs/curriculum-review-and-teaching-contract.md` and `schemas/curriculum-review-package.schema.json`.

## Teaching function

Curriculum generation and review are not the end product.

StegLearn is intended to teach the selected curriculum version.

Teaching may include:

- direct explanation;
- Socratic questioning;
- demonstration;
- guided practice;
- adaptive examples;
- simulations;
- project guidance;
- supervised experiments;
- critique and revision cycles;
- source-based discussion;
- research-method guidance;
- learner or participant explanation-back;
- assessment through evidence rather than answer-only scoring.

Each teaching session should identify the curriculum version being taught.

Minor instructional adaptation may remain within an admitted curriculum version when policy permits it. Material curriculum changes should create an explicit change set or new curriculum version and may require renewed review.

StegLearn must not present one curriculum for review and silently teach a materially different one.

Where a human teacher is present, StegLearn begins as a teacher-enhancement system and teaches within the authority, review, and delegation boundaries of that context.

Where a parent/steward-supervised or individually admitted context exists, StegLearn may provide more direct instruction within that separately governed scope.

## Teacher-first implementation relationship

The teacher-first model remains the preferred initial deployment path because it provides a bounded environment for validating curriculum generation, curriculum review, teaching, live instructional assistance, curriculum adaptation, sensor use, evidence capture, and delegation.

It is not the full product boundary.

The broader product is a governed learning environment in which the StegLearn AI Entity can:

1. determine what the participant wants to learn through conversation;
2. construct a curriculum at the requested and supportable depth;
3. produce a reviewable version for an admitted human or AI entity;
4. revise or select the curriculum according to admitted review authority;
5. teach the selected curriculum version;
6. adapt from observed progress and interaction;
7. preserve reconstructable evidence of curriculum changes, review, and learning;
8. continue the learning relationship over time.

## Human and AI participants

### Human participant

A human participant may ask for a new skill, conceptual field, professional capability, research topic, or structured path through an existing discipline.

StegLearn should establish enough context to avoid generating an obviously mismatched path, while minimizing unnecessary personal-data collection.

The human participant may review the proposed curriculum, request changes, compare versions, and then learn from the selected version when permitted by the context.

### AI participant

An admitted AI entity may use StegLearn as a governed learning participant when its identity, authority, permitted inputs/outputs, evidence obligations, and learning-state mutation rights are explicitly bounded.

An admitted AI entity may also serve as a curriculum reviewer when its review role is separately admitted.

AI participation or review capability must not be inferred merely because an external model or agent can send requests.

## Evidence and progression

Progression should be based on reconstructable evidence appropriate to the subject and level, which may include:

- participant explanations;
- worked examples;
- code;
- designs;
- artifacts;
- experiments;
- source analysis;
- problem solving;
- revisions;
- demonstrations;
- research outputs;
- reviewed learning receipts.

A curriculum may become more advanced when evidence supports progression, or insert prerequisite work when needed.

Material changes to curriculum structure should remain versioned and reviewable rather than being silently folded into the teaching stream.

## Governance boundaries

- generated curriculum does not become a fixed participant identity;
- requested level does not automatically prove readiness for that level;
- StegLearn may propose prerequisite work without permanently classifying the participant;
- review capability does not automatically grant approval or teaching authority;
- curriculum versions and material changes remain inspectable;
- sensor and learning inputs remain explicitly authorized by context;
- teacher authority remains controlling in teacher-led use;
- generated curriculum, review, instruction, and evaluation remain distinguishable from accredited credentialing unless a separately authorized credentialing system exists;
- professional, regulated, safety-critical, or high-consequence instruction may require additional human supervision, external standards, or other governed boundaries;
- an AI participant receives no authority outside the admitted learning relationship merely by completing or reviewing a curriculum.

## Public product statement

A concise description of this capability is:

> Enter StegLearn with something you want to know or be able to do. Talk with the StegLearn AI about the outcome and depth you want. StegLearn develops a curriculum appropriate to that goal, produces a version that a human or admitted AI entity can review, revise, or approve according to its authority, and then teaches the selected curriculum—adapting as you progress while preserving evidence of what changed and why.

The teacher-first implementation remains the starting deployment posture; conversational curriculum generation, entity review, and teaching define the broader product direction.
