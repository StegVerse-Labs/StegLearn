# Teacher-First Governed AI Learning Model

## Purpose

StegLearn begins by enhancing a human teacher rather than replacing one.

This teacher-first model is the preferred initial deployment posture, not the full product boundary.

The broader StegLearn product allows a human or admitted AI participant to enter, discuss a desired skill or body of knowledge, receive a generated curriculum at the requested and supportable depth, and then be taught that curriculum. See `docs/conversational-curriculum-and-teaching-model.md`.

Teacher-first deployment provides the most bounded environment for validating that broader capability while preserving explicit human educational authority.

## Core Relationship

```text
Human teacher
  -> sets objectives, permissions, boundaries, and final educational decisions

StegLearn governed AI Entity
  -> discusses goals, generates curriculum, teaches, observes, assists, adapts, organizes, records, and recommends

Authorized sensors and learning tools
  -> provide bounded evidence about participation, engagement, responsiveness,
     activity, progress, and the learning environment

Learner
  -> participates, explores, questions, creates, practices, explains, revises, and reflects
```

The AI does not silently acquire educational authority merely because it can generate curriculum, teach, observe, or adapt.

## Visible AI Entity

StegLearn is intended to be presented as an on-screen AI Entity rather than only as a hidden service behind a dashboard.

The Entity may, when authorized:

- speak with learners and the teacher;
- listen for learner or teacher input;
- discuss desired learning outcomes and depth;
- generate or revise a bounded curriculum;
- present explanations, prompts, examples, demonstrations, and activities;
- teach within delegated scope;
- observe participation and engagement signals;
- support a learner, pair, table, or small group while the teacher works elsewhere;
- suggest alternate explanations, prerequisites, sequence, or pacing;
- capture questions, attempts, revisions, artifacts, demonstrations, and explanations;
- return concise evidence and recommendations to the teacher.

The Entity's presence and instructional activity must remain governable and inspectable.

## Authorized Observation Model

StegLearn may use device capabilities and connected educational sensors only when they are explicitly permitted for the learning context.

Potential inputs include:

- microphone-derived participation events;
- camera-derived participation or activity observations;
- response timing and interaction cadence;
- task progress and completion events;
- learner requests for repetition, clarification, or additional challenge;
- device interaction events;
- connected low-voltage educational sensors;
- teacher-entered observations;
- learner-created artifacts;
- classroom or activity state supplied by approved tools.

An input being technically available does not make it automatically admissible.

## Engagement and Participation

StegLearn may evaluate observable engagement and participation variables to help the teacher understand what is happening in the learning environment and adapt teaching.

Examples include:

- whether a learner has participated in a discussion or activity;
- how often a learner responds or initiates a question;
- whether activity has stopped or resumed;
- whether repeated clarification has been requested;
- whether a task is progressing, stalled, or complete;
- whether participation is concentrated among only a subset of learners;
- whether a group is interacting with assigned material or activity;
- whether the pace of interaction changes materially during instruction.

These observations may support teaching changes and recommendations, but they do not independently become final educational judgments.

## Teacher Amplification

The initial value proposition is not that StegLearn can replace a teacher. It is that one teacher with StegLearn can perceive, differentiate, and support more of the learning environment than one teacher working alone.

StegLearn should help the teacher:

- see who has and has not participated;
- notice repeated questions or common points of difficulty;
- identify groups that may need different pacing or explanation;
- generate differentiated learning paths;
- identify useful prerequisite work or deeper branches;
- teach additional individualized or small-group material within delegated scope;
- retain evidence that would otherwise be lost during live instruction;
- compare current activity with prior reviewed learning evidence;
- reduce manual documentation without transferring review authority;
- decide where the teacher's direct attention is most valuable.

## Delegated Small-Group Teaching

A teacher may explicitly delegate a bounded activity to StegLearn.

Example:

```text
Teacher: StegLearn, work with table three on equivalent fractions while I help the experiment group.
```

A permitted StegLearn response path may be:

```text
teacher delegation
-> bounded AI teaching interaction
-> learner responses and activity evidence
-> AI adaptation within the delegated scope
-> concise return to teacher
-> teacher review or follow-up
```

Delegation does not transfer final educational authority.

## Relationship to Generated Curriculum

Teacher-first StegLearn should support a workflow such as:

```text
teacher / learner goal conversation
-> desired outcome + depth
-> generated curriculum
-> teacher review / adjustment
-> StegLearn teaches within delegated scope
-> permitted observation + adaptation
-> evidence / review / receipt
```

This allows StegLearn to function not only as an observer or assistant, but also as a bounded curriculum-development and instructional capacity multiplier.

## Evidence and Continuity

The existing StegLearn evidence loop remains beneath teacher-AI interaction:

```text
Desired outcome / Wonder
-> Build, Observe, Study, or Practice
-> Explain / Demonstrate
-> Review
-> Receipt
-> Portfolio / Continuity
```

Teacher-first interaction adds a surrounding live-support loop:

```text
Goal
-> Teach
-> Observe
-> Engage
-> Adapt
-> Explain
-> Review
-> Continue
```

The live-support loop may generate candidate evidence for learning receipts, but teacher, parent, or steward review remains required where applicable policy requires reviewed evidence.

## Governance Requirements

StegLearn must preserve these boundaries:

- the teacher remains the educational authority in teacher-led use;
- curriculum generation does not silently become curriculum authority over the teacher;
- sensor access is explicit, bounded, and revocable;
- the AI must not hide material observation, teaching, or recommendation activity from the authorized educator;
- learner evidence must remain distinguishable from AI interpretation;
- an AI recommendation is not equivalent to a teacher decision;
- a sensor signal is not equivalent to mastery or failure;
- requested depth does not itself prove readiness;
- instructional depth does not itself represent accreditation or credentialing;
- learner-private data must not become public output;
- external educational systems must cross the applicable Interlock/InTr boundary before mutating StegLearn state;
- source, CI, deployment, or observation alone does not prove authentic governed runtime execution.

## Initial Implementation Sequence

The preferred implementation sequence is:

```text
1. Human teacher + StegLearn classroom assistant
2. Conversational goal intake + bounded curriculum generation
3. StegLearn teaches generated curriculum within teacher-delegated scope
4. Teacher-delegated small-group teaching and differentiated paths
5. Supervised individualized tutoring
6. Parent/steward-supervised learning contexts
7. Admitted AI-participant learning contexts
8. More autonomous governed learning only where separately admitted
```

Each later stage must preserve or explicitly redefine the authority boundary rather than inheriting autonomy by assumption.

## Evaluation Questions

An initial teacher-assist pilot should be able to test whether StegLearn helps a teacher:

- recognize unresolved questions sooner;
- distribute participation more effectively;
- identify stalled activity sooner;
- generate more appropriate differentiated paths;
- provide more individualized explanations and teaching;
- preserve better evidence of learning progression;
- reduce manual documentation burden;
- support more learners without reducing teacher authority.

These are evaluation targets, not currently claimed runtime outcomes.
