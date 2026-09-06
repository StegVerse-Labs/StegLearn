# StegLearn Product Spec

## Purpose

StegLearn is a governed learning system that helps a participant move from curiosity or desired capability to evidence-backed growth without being reduced to a predetermined curriculum outcome.

Its broader product model is conversational:

```text
participant
-> conversation about desired skill / knowledge / outcome
-> establish starting point + desired depth
-> generate governed curriculum
-> teach curriculum
-> observe permitted participation / progress
-> adapt instruction
-> preserve evidence / review / continuity
```

A participant may be human or an admitted AI entity.

Its preferred initial deployment posture remains **human teacher + governed AI Entity**. The teacher remains the educational authority in teacher-led use while StegLearn augments the teacher's ability to observe, teach, adapt, document, and support learners across a live learning environment.

## Product Promise

StegLearn should be able to begin with a conversation such as:

> What do you want to know or be able to do, and how far do you want to go?

From that conversation, StegLearn should be able to:

1. determine the intended skill, knowledge domain, or outcome;
2. establish the participant's current starting point where necessary;
3. establish desired depth, rigor, constraints, evidence expectations, and context;
4. generate a curriculum appropriate to that goal;
5. teach the generated curriculum;
6. adapt sequence, examples, pace, prerequisite work, and depth from observed progress;
7. preserve reconstructable evidence of learning and revision over time.

Curriculum generation is not the terminal feature. **Teaching the generated curriculum is part of the product.**

## Curriculum Depth

StegLearn may construct paths spanning, where applicable:

- orientation / first exposure;
- foundational literacy;
- beginner;
- intermediate;
- advanced;
- vocational / applied professional;
- undergraduate-equivalent;
- graduate / master's-equivalent;
- doctoral / research-equivalent;
- post-doctoral / frontier-specialization depth.

These labels describe requested instructional depth and rigor. They are not themselves degrees, licenses, accreditation, institutional equivalence, or credentialing authority.

## Curriculum Generation

A generated curriculum may include:

- prerequisite map;
- learning objectives;
- conceptual sequence;
- practical skills;
- readings and source requirements;
- demonstrations;
- exercises;
- projects;
- experiments;
- formative checks;
- research questions;
- evidence expectations;
- review checkpoints;
- specialization branches;
- completion criteria;
- next-stage recommendations.

Generated curricula remain revisable as new evidence appears.

## Teaching Function

StegLearn may teach through:

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
- participant explanation-back;
- evidence-based progression checks.

Where a human teacher is present, StegLearn teaches within the teacher's admitted objectives, permissions, and delegation boundaries.

## Initial Product Position

The first public implementation model is not an autonomous AI teacher operating without human educational context.

It is a visible, governed AI Entity that works alongside a human teacher.

When explicitly authorized for the context, the Entity may:

- appear on-screen and interact with learners;
- speak, listen, present, prompt, explain, and teach;
- use permitted sensors and learning signals;
- evaluate observable engagement, participation, responsiveness, activity, and progress;
- support individuals, pairs, or small groups;
- adapt explanations, examples, pacing, sequence, and prerequisite work within an admitted scope;
- preserve questions, attempts, revisions, artifacts, and explanations;
- return evidence and recommendations to the teacher.

The teacher sets objectives, permissions, boundaries, and final educational decisions in teacher-led use.

## V1 Definition of Done

A participant can complete one governed learning loop in a teacher- or steward-supervised context:

```text
Desired learning outcome / Wonder
→ Build, Observe, Study, or Practice
→ Explain / Demonstrate
→ Human Review where applicable
→ Learning Receipt
→ Portfolio / Continuity Record
```

The system is done for v1 when it can:

1. capture a participant's desired learning outcome or question;
2. connect it to an activity or instructional sequence;
3. teach or guide at least one bounded learning path;
4. capture explanation, demonstration, or other evidence;
5. allow teacher, parent, or steward review as applicable;
6. generate a structured learning receipt;
7. store the receipt as a continuity record;
8. preserve the distinction between observed evidence, human review, and AI interpretation.

Teacher-first AI Entity functionality extends this base loop but must not be falsely claimed as complete until runtime predicates are evidenced.

## Product Roles

### Human Learner

The learner asks, explores, builds, explains, revises, participates, and reflects.

The learner may enter with anything from an introductory question to an advanced research goal.

### AI Participant

An admitted AI entity may participate in StegLearn as a learner when identity, authority, permitted inputs and outputs, evidence obligations, and learning-state mutation rights are explicitly bounded.

External request capability alone does not establish admission.

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

### StegLearn Governed AI Entity

The AI Entity may discuss learning goals, generate curricula, teach, observe permitted learning activity, scaffold instruction, suggest paths, ask clarifying questions, adapt explanations, support bounded learner or group work, summarize evidence, and draft learning receipts.

The AI Entity is not automatically the final authority over the participant merely because it generated or taught the curriculum.

### Authorized Sensors and Learning Tools

Sensors and connected tools provide bounded evidence about the learning environment.

Possible inputs include microphone events, camera-derived participation or activity observations, response timing, task progress, device interaction, participant artifacts, teacher-entered observations, and approved educational sensors.

Technical availability does not equal admissibility. Sensor and tool use must be explicitly authorized for the context.

### Curriculum Reference

External curriculum, standards, literature, research, professional bodies, and institutional requirements may act as reference layers.

They do not automatically become the participant's identity or credential.

## Teacher Amplification Objective

The initial StegLearn value proposition is that one teacher with governed AI assistance can perceive and support more of the learning environment than one teacher working alone.

StegLearn should help the teacher:

- notice participation patterns;
- surface repeated questions or common instructional friction;
- identify stalled or completed activities;
- generate alternate explanations or differentiated paths;
- support a learner or small group while the teacher works elsewhere;
- preserve live learning evidence that would otherwise be lost;
- reduce manual documentation burden;
- identify where prerequisite work or deeper work may help;
- decide where direct teacher attention is most valuable.

These are product objectives and evaluation targets, not automatically claimed outcomes.

## Core Features

### Goal Conversation

The participant can describe a desired skill, knowledge domain, outcome, or level of depth in natural conversation.

StegLearn should gather only the context needed to build an appropriate path.

### Curriculum Construction

StegLearn converts the agreed goal and depth into a structured, revisable curriculum.

### Teaching

StegLearn delivers instruction from the generated curriculum rather than merely returning a syllabus.

### Participation and Engagement Observation

Where explicitly authorized, StegLearn may record observable variables relevant to live learning assistance, including participation, response timing, clarification requests, task progress, retries, revisions, and interaction with assigned material.

These observations may inform recommendations but do not independently constitute mastery, failure, discipline, or fixed participant classification.

### Bounded AI Assistance

A teacher may explicitly delegate a limited instructional activity to StegLearn.

```text
teacher delegation
→ bounded AI teaching interaction
→ participant responses and permitted activity evidence
→ adaptation within delegated scope
→ return to teacher
→ human review or follow-up
```

Delegation does not silently transfer final educational authority.

### Human Review

The teacher, parent, or steward reviews evidence or receipts where the context requires it.

### Portfolio Continuity

Receipts and evidence accumulate over time to show development, revision, completed work, and changing depth.

## Non-Capture Requirement

No lesson path, requested level, score, sensor observation, AI recommendation, participation metric, generated curriculum, or compliance category may be treated as the participant's destiny.

Requested level does not automatically prove readiness. StegLearn may recommend prerequisite work without converting that recommendation into a fixed identity classification.

## Authority Requirement

In teacher-led use:

- teacher authority is explicit;
- AI teaching assistance is bounded and inspectable;
- sensor access is explicit and revocable;
- observations remain distinguishable from AI interpretation;
- recommendations remain distinguishable from teacher decisions;
- external systems cannot directly mutate participant state without the applicable governed boundary.

In AI-participant use, identity, mutation rights, evidence obligations, and allowed egress must be separately admitted.

## Regulated / High-Consequence Learning

Professional, regulated, safety-critical, medical, legal, financial, hazardous, or other high-consequence domains may require additional human supervision, standards, licensing boundaries, or governed constraints.

Completion of a StegLearn curriculum does not itself grant professional licensure or authority.

## Implementation Sequence

Preferred sequence:

```text
1. Human teacher + StegLearn classroom assistant
2. Conversational goal intake + generated bounded curriculum
3. StegLearn teaches that curriculum within teacher-delegated scope
4. Teacher-delegated small-group assistance
5. Supervised individualized tutoring
6. Parent/steward-supervised learning contexts
7. Admitted AI-participant learning contexts
8. More autonomous governed learning only where separately admitted
```

The system must not infer that later autonomy is authorized merely because an earlier assistance mode works.

See `docs/conversational-curriculum-and-teaching-model.md` for the broader curriculum-generation and teaching model.
