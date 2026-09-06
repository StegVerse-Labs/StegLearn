# StegVerse Foundations

`steglearn.stegverse-foundations.v1`

StegVerse Foundations is the first ecosystem-learning curriculum in StegLearn. It teaches the purpose, principles, mechanics, authority boundaries, evidence model, and practical operation of StegVerse through guided tutorials.

The canonical instructional object is structured lesson data. Video, captions, transcripts, diagrams, quizzes, and later interactive tutorials are downstream presentations of that data; a renderer does not become the authority for lesson claims.

## Learning sequence

1. What Is StegVerse?
2. Your StegVerse Identity
3. Your Knowledge Vault
4. Devices and Nodes
5. What Happens When You Press Submit?
6. Understanding Authority
7. How StegCore Governs a Transition
8. Reading a Receipt
9. Heartbeat and Runtime
10. AI Inside StegVerse
11. SKAP and Capabilities
12. Crossing the Ecosystem Boundary

`path.json` is the machine-readable curriculum roadmap. A module marked `MATERIALIZED` has a committed canonical lesson package; `ROADMAP` means the module is planned but its instructional claims have not yet been materialized.

## Renderer contract

A materialized video-capable lesson contains:

- `lesson.json` — objectives, source authority, exact claims, checkpoint, receipt evidence targets, renderer restrictions, and version provenance;
- `scenes.json` — ordered scene composition, narration, canonical caption, visual grammar, and explicit `do_not_imply` constraints;
- `captions.json` — canonical caption track derived from the scene captions.

The intended first static renderer target is `AI_SITEFLOW_STATIC_VIDEO`, but the lesson representation is provider-independent. AI SiteFlow or any successor renderer may compose presentation; it may not invent lesson claims, paraphrase canonical claims when the lesson forbids it, change authority semantics, or make generated output canonical by itself.

## Current materialized module

[01 — What Is StegVerse?](01-what-is-stegverse/)

The first lesson is grounded in the canonical organization-level `StegVerse-Labs/.github/docs/ECOSYSTEM_PURPOSE_INVARIANT.md` and teaches the ecosystem purpose and core authority distinctions without claiming runtime activation or implementation completeness for every component.

## Versioning

A change to a canonical source that affects a lesson claim requires lesson review and a lesson version decision. Prior published lesson versions should remain reconstructable rather than being silently overwritten.

## Non-capture

Completion evidence demonstrates what was observed, explained, reviewed, or understood in that learning event. It does not create permanent competence, identity, authority, rank, or permission.
