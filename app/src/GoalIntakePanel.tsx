import { useMemo, useState } from 'react';
import {
  createParticipantGoalIntake,
  curriculumDepths,
  learningContextModes,
  participantEntityTypes,
} from './curriculum';
import type {
  CurriculumDepth,
  LearningContextMode,
  ParticipantEntityType,
  ParticipantGoalIntake,
} from './curriculum';
import { exportJson } from './storage';

function splitList(value: string): string[] {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function GoalIntakePanel() {
  const [entityId, setEntityId] = useState('participant-local-001');
  const [entityType, setEntityType] = useState<ParticipantEntityType>('HUMAN');
  const [desiredOutcome, setDesiredOutcome] = useState('');
  const [requestedDepth, setRequestedDepth] = useState<CurriculumDepth>('BEGINNER');
  const [startingPoint, setStartingPoint] = useState('');
  const [contextMode, setContextMode] = useState<LearningContextMode>('TEACHER_LED');
  const [authorityIds, setAuthorityIds] = useState('teacher-local-001');
  const [timeConstraints, setTimeConstraints] = useState('');
  const [resourceConstraints, setResourceConstraints] = useState('');
  const [evidenceExpectations, setEvidenceExpectations] = useState('Explain the skill in your own words, demonstrate the skill through an artifact or activity');
  const [reviewRequired, setReviewRequired] = useState(true);
  const [reviewerIds, setReviewerIds] = useState('teacher-local-001');
  const [admittedGoal, setAdmittedGoal] = useState<ParticipantGoalIntake | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const canAdmit = useMemo(
    () => Boolean(entityId.trim() && desiredOutcome.trim() && splitList(evidenceExpectations).length),
    [entityId, desiredOutcome, evidenceExpectations],
  );

  function admitGoal() {
    const nextErrors: string[] = [];
    if (!entityId.trim()) nextErrors.push('Participant entity ID is required.');
    if (!desiredOutcome.trim()) nextErrors.push('Describe the skill, knowledge, capability, or outcome to learn.');
    if (!splitList(evidenceExpectations).length) nextErrors.push('At least one evidence expectation is required.');
    if (reviewRequired && !splitList(reviewerIds).length) nextErrors.push('At least one reviewer entity ID is required when curriculum review is required.');
    if ((contextMode === 'TEACHER_LED' || contextMode === 'PARENT_STEWARD_SUPERVISED') && !splitList(authorityIds).length) {
      nextErrors.push('A human authority entity ID is required for the selected supervised context.');
    }
    if (entityType === 'AI' && contextMode !== 'AI_PARTICIPANT') {
      nextErrors.push('An AI participant must use the AI_PARTICIPANT learning context in this first bounded UI.');
    }
    if (entityType !== 'AI' && contextMode === 'AI_PARTICIPANT') {
      nextErrors.push('AI_PARTICIPANT context requires participant entity type AI.');
    }

    if (nextErrors.length) {
      setErrors(nextErrors);
      return;
    }

    const goal = createParticipantGoalIntake({
      entityId,
      entityType,
      desiredOutcome,
      requestedDepth,
      startingPoint,
      contextMode,
      authorityEntityIds: splitList(authorityIds),
      timeConstraints: splitList(timeConstraints),
      resourceConstraints: splitList(resourceConstraints),
      evidenceExpectations: splitList(evidenceExpectations),
      curriculumReviewRequired: reviewRequired,
      reviewerEntityIds: reviewRequired ? splitList(reviewerIds) : [],
    });

    setAdmittedGoal(goal);
    setErrors([]);
  }

  return (
    <div className="shell">
      <section className="card full">
        <p className="eyebrow">StegLearn goal conversation</p>
        <h1>What do you want to know or be able to do?</h1>
        <p className="hint">
          This creates the governed participant goal record that a later curriculum generator must consume. It does not yet claim that a dynamic curriculum has been generated or taught.
        </p>

        <div className="grid">
          <article className="card">
            <h2>Participant</h2>
            <label>
              Entity ID
              <input value={entityId} onChange={(event) => setEntityId(event.target.value)} />
            </label>
            <label>
              Entity type
              <select value={entityType} onChange={(event) => setEntityType(event.target.value as ParticipantEntityType)}>
                {participantEntityTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>
            <label>
              Learning context
              <select value={contextMode} onChange={(event) => setContextMode(event.target.value as LearningContextMode)}>
                {learningContextModes.map((mode) => <option key={mode} value={mode}>{mode}</option>)}
              </select>
            </label>
            <label>
              Human authority entity IDs, comma-separated
              <input value={authorityIds} onChange={(event) => setAuthorityIds(event.target.value)} />
            </label>
          </article>

          <article className="card">
            <h2>Desired learning outcome</h2>
            <label>
              Skill, knowledge, capability, or outcome
              <textarea
                value={desiredOutcome}
                onChange={(event) => setDesiredOutcome(event.target.value)}
                placeholder="Example: I want to be able to design and explain a secure REST API in Python."
              />
            </label>
            <label>
              Desired depth
              <select value={requestedDepth} onChange={(event) => setRequestedDepth(event.target.value as CurriculumDepth)}>
                {curriculumDepths.map((depth) => <option key={depth} value={depth}>{depth}</option>)}
              </select>
            </label>
            <label>
              Starting point
              <textarea
                value={startingPoint}
                onChange={(event) => setStartingPoint(event.target.value)}
                placeholder="What do you already know or know how to do? Leave blank if unknown."
              />
            </label>
          </article>

          <article className="card">
            <h2>Constraints and evidence</h2>
            <label>
              Time constraints, comma-separated
              <input value={timeConstraints} onChange={(event) => setTimeConstraints(event.target.value)} />
            </label>
            <label>
              Resource constraints, comma-separated
              <input value={resourceConstraints} onChange={(event) => setResourceConstraints(event.target.value)} />
            </label>
            <label>
              Evidence expectations, comma-separated
              <textarea value={evidenceExpectations} onChange={(event) => setEvidenceExpectations(event.target.value)} />
            </label>
          </article>

          <article className="card">
            <h2>Curriculum review</h2>
            <label>
              <input
                type="checkbox"
                checked={reviewRequired}
                onChange={(event) => setReviewRequired(event.target.checked)}
              />
              Require curriculum review before teaching authorization
            </label>
            <label>
              Reviewer entity IDs, comma-separated
              <input
                value={reviewerIds}
                onChange={(event) => setReviewerIds(event.target.value)}
                disabled={!reviewRequired}
              />
            </label>
            <p className="hint">Reviewability does not itself grant approval or teaching authority.</p>
          </article>
        </div>

        {errors.length ? (
          <div className="validation-panel">
            <strong>Goal intake needs attention</strong>
            <ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul>
          </div>
        ) : null}

        <div className="actions">
          <button type="button" disabled={!canAdmit} onClick={admitGoal}>Create governed goal intake</button>
          <button
            type="button"
            disabled={!admittedGoal}
            onClick={() => admittedGoal && exportJson('steglearn-participant-goal-intake.json', admittedGoal)}
          >
            Export goal intake JSON
          </button>
        </div>

        <h2>Admitted goal intake preview</h2>
        <pre>{JSON.stringify(admittedGoal, null, 2)}</pre>
      </section>
    </div>
  );
}
