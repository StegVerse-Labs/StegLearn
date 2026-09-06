# Teacher-First Governed AI Learning Model

## Purpose

StegLearn begins by enhancing a human teacher rather than replacing one.

The human educator remains the educational authority. StegLearn is a governed AI Entity that can be visibly present in the learning environment, interact with learners, use explicitly authorized sensor and activity inputs, help the teacher understand participation and engagement, adapt instructional support, and preserve evidence of learning.

This teacher-first model is the initial public and product implementation posture for StegLearn.

## Core Relationship

```text
Human teacher
  -> sets objectives, permissions, boundaries, and final educational decisions

StegLearn governed AI Entity
  -> observes, assists, explains, adapts, organizes, records, and recommends

Authorized sensors and learning tools
  -> provide bounded evidence about participation, engagement, responsiveness,
     activity, progress, and the learning environment

Learner
  -> participates, explores, questions, creates, explains, revises, and reflects
```

The AI does not silently acquire educational authority merely because it can observe or adapt.

## Visible AI Entity

StegLearn is intended to be presented as an on-screen AI Entity rather than only as a hidden service behind a dashboard.

The Entity may, when authorized:

- speak with learners and the teacher;
- listen for learner or teacher input;
- present explanations, prompts, examples, demonstrations, and activities;
- observe participation and engagement signals;
- support a learner, pair, table, or small group while the teacher works elsewhere;
- suggest alternate explanations or pacing;
- capture questions, attempts, revisions, artifacts, and explanations;
- return concise evidence and recommendations to the teacher.

The Entity's presence must remain governable and inspectable.

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

StegLearn may evaluate observable engagement and participation variables to help the teacher understand what is happening in the learning environment.

Examples include:

- whether a learner has participated in a discussion or activity;
- how often a learner responds or initiates a question;
- whether activity has stopped or resumed;
- whether repeated clarification has been requested;
- whether a task is progressing, stalled, or complete;
- whether participation is concentrated among only a subset of learners;
- whether a group is interacting with the assigned material or activity;
- whether the pace of interaction changes materially during instruction.

These observations may support recommendations, but they do not independently become final educational judgments.

## Teacher Amplification

The initial value proposition is not that StegLearn can replace a teacher. It is that one teacher with StegLearn can perceive and support more of the learning environment than one teacher working alone.

StegLearn should help the teacher:

- see who has and has not participated;
- notice repeated questions or common points of difficulty;
- identify groups that may need different pacing or explanation;
- provide additional individualized or small-group assistance;
- retain evidence that would otherwise be lost during live instruction;
- compare current activity with prior reviewed learning evidence;
- reduce manual documentation without transferring review authority;
- decide where the teacher's direct attention is most valuable.

## Delegated Small-Group Assistance

A teacher may explicitly delegate a bounded activity to StegLearn.

Example:

```text
Teacher: StegLearn, work with table three on equivalent fractions while I help the experiment group.
```

A permitted StegLearn response path may be:

```text
teacher delegation
-> bounded AI interaction
-> learner responses and activity evidence
-> AI adaptation within the delegated scope
-> concise return to teacher
-> teacher review or follow-up
```

Delegation does not transfer final educational authority.

## Evidence and Continuity

The existing StegLearn learning loop remains the evidence layer beneath teacher-AI interaction:

```text
Wonder
-> Build or Observe
-> Explain
-> Review
-> Receipt
-> Portfolio
```

Teacher-first interaction adds a surrounding live-support loop:

```text
Observe
-> Engage
-> Assist
-> Adapt
-> Explain
-> Review
-> Continue
```

The live-support loop may generate candidate evidence for the learning receipt, but parent, teacher, or steward review remains required where the applicable policy requires reviewed evidence.

## Governance Requirements

StegLearn must preserve these boundaries:

- the teacher remains the educational authority in teacher-led use;
- sensor access is explicit, bounded, and revocable;
- the AI must not hide material observation or recommendation activity from the authorized educator;
- learner evidence must remain distinguishable from AI interpretation;
- an AI recommendation is not equivalent to a teacher decision;
- a sensor signal is not equivalent to mastery or failure;
- learner-private data must not become public output;
- external educational systems must cross the applicable Interlock/InTr boundary before mutating StegLearn state;
- source, CI, deployment, or observation alone does not prove authentic governed runtime execution.

## Initial Implementation Sequence

The preferred implementation sequence is:

```text
1. Human teacher + StegLearn classroom assistant
2. Teacher-delegated small-group assistance
3. Supervised individualized tutoring
4. Parent/steward-supervised learning contexts
5. More autonomous governed learning only where separately admitted
```

Each later stage must preserve or explicitly redefine the authority boundary rather than inheriting autonomy by assumption.

## Evaluation Questions

An initial teacher-assist pilot should be able to test whether StegLearn helps a teacher:

- recognize unresolved questions sooner;
- distribute participation more effectively;
- identify stalled activity sooner;
- provide more individualized explanations;
- preserve better evidence of learning progression;
- reduce manual documentation burden;
- support more learners without reducing teacher authority.

These are evaluation targets, not currently claimed runtime outcomes.
