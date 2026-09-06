# Curriculum Review and Teaching Mirror Handoff

## Repository

`StegVerse-Labs/StegLearn`

## Source of truth

Repository-wide authority remains `STEGLEARN_MIRROR_HANDOFF.md`.

This bounded handoff owns the conversational curriculum generation -> reviewable curriculum -> teaching lane introduced on `feature/teacher-first-public-model` / PR #3.

## Goal

StegLearn must support the complete product sequence:

```text
human or admitted AI participant
-> conversation about desired skill / knowledge / outcome
-> establish starting point + desired depth + constraints
-> generate governed curriculum
-> produce stable reviewable curriculum version
-> render synchronized human-readable + machine-readable forms
-> review / comment / request revision / approve / select according to entity authority
-> teach selected curriculum version
-> adapt within admitted scope
-> version material curriculum changes
-> preserve evidence / review / receipt / continuity
```

Curriculum generation alone is incomplete. Reviewability alone is incomplete. Teaching without traceability to the reviewed/selected curriculum version is incomplete.

## Product requirement

A reviewable curriculum must be available to any admitted entity with review capability, including a human learner, teacher, parent/steward, subject-matter reviewer, institution, admitted AI reviewer, or other governed entity.

Review capability is separate from approval or teaching authority:

```text
inspect
!= comment
!= request revision
!= approve
!= authorize teaching
```

The governing context determines which capabilities each entity receives.

## Installed source surfaces

- `docs/conversational-curriculum-and-teaching-model.md`
- `docs/curriculum-review-and-teaching-contract.md`
- `schemas/curriculum-review-package.schema.json`
- `docs/product-spec.md`
- `docs/public-landing-page.md`
- `README.md`
- PR #3

## Current source state

`CURRICULUM_GENERATION_REVIEW_TEACHING_DOCTRINE_AND_REVIEW_SCHEMA_INSTALLED_RUNTIME_IMPLEMENTATION_PENDING`

Implemented as source/product semantics:

- conversational learning-goal intake is part of product definition;
- requested depth may span entry through post-doctoral/frontier depth where applicable;
- generated curriculum must become a stable versioned review artifact;
- the same curriculum must be renderable in human-readable and machine-readable form;
- reviewer role and authority must remain explicit;
- teaching must bind to an identifiable curriculum version;
- material curriculum changes must remain versioned and inspectable;
- review and teaching do not themselves create accreditation, credential, licensing, or external authority.

No production runtime curriculum generation, review-package rendering, AI review execution, curriculum-version-bound teaching, or classroom deployment is claimed by these source changes.

## Remaining machine work

1. Add machine-readable conversational goal/depth intake contract.
2. Add generated curriculum canonical schema or extend the review-package schema without duplicating existing learning-path semantics.
3. Add a deterministic human-readable renderer from the canonical curriculum manifest.
4. Add curriculum version/hash generation.
5. Add reviewer-role and review-result capture with explicit authority effect.
6. Add comparison/diff for curriculum revisions.
7. Add teaching-session binding to `curriculum_id + curriculum_version`.
8. Add material-change detection / explicit change-set representation.
9. Add fixtures for human review, admitted AI review, requested changes, approval, and non-authorizing review.
10. Add UI for goal conversation -> curriculum review -> start teaching.
11. Add teaching execution for at least one bounded curriculum path.
12. Preserve curriculum/review/teaching evidence into learning receipt and continuity surfaces.
13. When Site orchestration admits the workload, publish the informational landing page without overstating runtime completion.

## README completeness

This lane materially changes product semantics by adding curriculum reviewability and version-bound teaching as first-class requirements. `README.md`, `docs/product-spec.md`, and the public landing-page source were updated in the same change set.

## Release state

Not release-ready from this lane. Source semantics and the first review schema are installed, but runtime curriculum generation, review rendering, entity review, and version-bound teaching remain to be implemented and authentically evidenced.

## Downstream release propagation

When a release predicate is eventually satisfied, verify pertinent information is propagated or applied to:

- `StegVerse-Labs/Site`
- `GCAT-BCAT-Engine/Publisher`
- `StegVerse-Labs/admissibility-wiki`
- `StegVerse-002/stegguardian-wiki`

## Archive readiness

This bounded handoff, the referenced product documents, schema, and PR #3 contain the complete current lane definition and remaining machine work. No conversation-only context is required to continue this lane.
