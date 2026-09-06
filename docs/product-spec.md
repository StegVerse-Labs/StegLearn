# StegLearn Product Spec

## Purpose

StegLearn is a governed learning system that helps a learner move from curiosity to evidence-backed growth without being reduced to a predetermined curriculum outcome.

Its initial implementation posture is **human teacher + governed AI Entity**.

The teacher remains the educational authority. StegLearn is designed to augment the teacher's ability to observe, assist, adapt, document, and support learners across a live learning environment.

It is not designed to replace the world with a screen.

It is designed to organize and enhance the learner's interaction with the world and with human educators.

## Initial Product Position

The first public product model is not an autonomous AI teacher.

It is a visible, governed AI Entity that works alongside a human teacher.

When explicitly authorized for the context, the Entity may:

- appear on-screen and interact with learners;
- speak, listen, present, prompt, and explain;
- use permitted sensors and learning signals;
- evaluate observable engagement, participation, responsiveness, activity, and progress;
- support individuals, pairs, or small groups;
- adapt explanations, examples, and pacing within an admitted scope;
- preserve questions, attempts, revisions, artifacts, and explanations;
- return evidence and recommendations to the teacher.

The teacher sets objectives, permissions, boundaries, and final educational decisions.

## V1 Definition of Done

A learner can complete one learning loop in a teacher- or steward-supervised context:

```text
Wonder
→ Build or Observe
→ Explain
→ Parent/Teacher Review
→ Learning Receipt
→ Portfolio Record
```

The system is done for v1 when it can:

1. capture a learner question or prompt;
2. connect it to a build, observation, story, experiment, or reflection;
3. capture the learner's explanation;
4. allow teacher, parent, or steward review as applicable;
5. generate a structured learning receipt;
6. store the receipt as a portfolio record;
7. preserve the distinction between observed evidence, human review, and AI interpretation.

Teacher-first AI Entity functionality extends this base loop but must not be falsely claimed as complete until its runtime predicates are evidenced.

## Product Roles

### Learner

The learner asks, explores, builds, explains, revises, participates, and reflects.

The learner is not treated as a score-producing object.

### Human Teacher

In teacher-led use, the human teacher is the educational authority.

The teacher:

- sets instructional objectives;
- determines what sensor and activity inputs are permitted;
- delegates bounded work to StegLearn;
- interprets recommendations in context;
- decides when direct human attention is required;
- reviews or accepts learning evidence where applicable;
- retains authority over high-impact educational decisions.

### Parent or Steward

The parent or steward acts as continuity holder, witness, safety layer, and reviewer where the learning context requires that role.

The parent or steward may review receipts and add context, subject mappings, or compliance notes.

### StegLearn Governed AI Entity

The AI Entity may observe permitted learning activity, scaffold instruction, suggest paths, translate questions into activities, ask clarifying questions, adapt explanations, support bounded learner or group work, summarize evidence, and draft learning receipts.

The AI Entity is not the final authority over the learner.

### Authorized Sensors and Learning Tools

Sensors and connected tools provide bounded evidence about the learning environment.

Possible inputs include microphone events, camera-derived participation or activity observations, response timing, task progress, device interaction, learner artifacts, teacher-entered observations, and approved educational sensors.

Technical availability does not equal admissibility. Sensor and tool use must be explicitly authorized for the context.

### Curriculum Reference

Curriculum is treated as a reference layer, not as the ruler of the learner's identity or destination.

### Compliance Layer

Homeschool or institutional requirements may be mapped after the learning event.

Compliance must not become the sole definition of learning.

## Teacher Amplification Objective

The initial StegLearn value proposition is that one teacher with governed AI assistance can perceive and support more of the learning environment than one teacher working alone.

StegLearn should help the teacher:

- notice who has and has not participated;
- surface repeated questions or common instructional friction;
- identify stalled or completed activities;
- provide alternate explanations or pacing;
- support a learner or small group while the teacher works elsewhere;
- preserve live learning evidence that would otherwise be lost;
- reduce manual documentation burden;
- decide where direct teacher attention is most valuable.

These are product objectives and evaluation targets, not automatically claimed outcomes.

## Core Features

### Wonder Capture

The system records a question, observation, idea, or prompt.

Examples:

- Does reality render when we are not looking?
- Why does sleep feel instant?
- Can I build a bridge that holds five books?
- What happens if players use my game map differently than I expected?

### Activity Capture

The system records what the learner did.

Activities may include:

- building;
- drawing;
- filming;
- coding;
- reading;
- observing;
- experimenting;
- narrating;
- discussing;
- designing a game or rule system.

### Participation and Engagement Observation

Where explicitly authorized, StegLearn may record observable variables relevant to live learning assistance, such as:

- participation in discussion or activity;
- response timing and interaction cadence;
- repeated requests for clarification;
- activity progress, stalls, and completion events;
- questions initiated by the learner;
- revisions or retries;
- group interaction with assigned material.

These observations may inform recommendations but do not independently constitute mastery, failure, discipline, or fixed learner classification.

### Explanation Capture

The learner explains what happened, what they think, what changed, or what they would try next.

This may be typed, dictated, recorded as audio, recorded as video, or entered by a teacher or parent.

### Bounded AI Assistance

A teacher may explicitly delegate a limited instructional activity to StegLearn.

```text
teacher delegation
→ bounded AI interaction
→ learner responses and permitted activity evidence
→ adaptation within delegated scope
→ return to teacher
→ human review or follow-up
```

Delegation does not silently transfer final educational authority.

### Human Review

The teacher, parent, or steward reviews the receipt, adds context, and confirms whether the record is accepted as learning evidence where applicable.

### Portfolio Continuity

Receipts accumulate into a portfolio that can show growth over time.

## Non-Capture Requirement

No lesson path, score, sensor observation, AI recommendation, participation metric, or compliance category may be treated as the learner's destiny.

The system must support growth without forcing identity.

## Authority Requirement

In teacher-led use:

- teacher authority is explicit;
- AI assistance is bounded and inspectable;
- sensor access is explicit and revocable;
- observations remain distinguishable from AI interpretation;
- recommendations remain distinguishable from teacher decisions;
- external systems cannot directly mutate learner state without the applicable governed boundary.

## Initial Implementation Boundary

The first implementation should remain small enough to validate the full learning loop while introducing the teacher-first AI Entity in bounded stages.

Preferred sequence:

```text
1. Human teacher + StegLearn classroom assistant
2. Teacher-delegated small-group assistance
3. Supervised individualized tutoring
4. Parent/steward-supervised learning contexts
5. More autonomous governed learning only where separately admitted
```

The system must not infer that later autonomy is authorized merely because an earlier assistance mode works.
