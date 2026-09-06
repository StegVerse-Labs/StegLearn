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
import { createBoundedCurriculumDraft } from './curriculumGeneration';
import type { GeneratedCurriculum } from './curriculumGeneration';
import {
  applyCurriculumReviewDecision,
  createCurriculumReviewPackage,
} from './curriculumReview';
import type { CurriculumReviewPackage } from './curriculumReview';
import {
  advanceTeachingSession,
  canStartTeaching,
  startTeachingSession,
} from './teaching';
import type { TeachingSession } from './teaching';
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
  const [reviewComment, setReviewComment] = useState('Reviewed for this teaching context.');
  const [admittedGoal, setAdmittedGoal] = useState<ParticipantGoalIntake | null>(null);
  const [generatedCurriculum, setGeneratedCurriculum] = useState<GeneratedCurriculum | null>(null);
  const [reviewPackage, setReviewPackage] = useState<CurriculumReviewPackage | null>(null);
  const [teachingSession, setTeachingSession] = useState<TeachingSession | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const canAdmit = useMemo(
    () => Boolean(entityId.trim() && desiredOutcome.trim() && splitList(evidenceExpectations).length),
    [entityId, desiredOutcome, evidenceExpectations],
  );

  const teachingReadiness = useMemo(
    () => reviewPackage ? canStartTeaching(reviewPackage) : { ok: false, reason: 'Materialize a review package before teaching.' },
    [reviewPackage],
  );

  const currentTeachingUnit = useMemo(() => {
    if (!teachingSession || !generatedCurriculum || !teachingSession.current_unit_id) return null;
    return generatedCurriculum.units.find((unit) => unit.unit_id === teachingSession.current_unit_id) ?? null;
  }, [teachingSession, generatedCurriculum]);

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
    setGeneratedCurriculum(null);
    setReviewPackage(null);
    setTeachingSession(null);
    setErrors([]);
  }

  function generateCurriculum() {
    if (!admittedGoal) {
      setErrors(['Create a governed goal intake before generating a curriculum draft.']);
      return;
    }

    setGeneratedCurriculum(createBoundedCurriculumDraft(admittedGoal));
    setReviewPackage(null);
    setTeachingSession(null);
    setErrors([]);
  }

  function materializeReviewPackage() {
    if (!admittedGoal || !generatedCurriculum) {
      setErrors(['Create a governed goal intake and generated curriculum before materializing review.']);
      return;
    }

    try {
      setReviewPackage(createCurriculumReviewPackage(admittedGoal, generatedCurriculum));
      setTeachingSession(null);
      setErrors([]);
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Curriculum review package could not be materialized.']);
    }
  }

  function approveCurriculum() {
    if (!reviewPackage || !admittedGoal) return;
    const reviewer = admittedGoal.review_requirements.reviewer_entity_ids[0] ?? admittedGoal.learning_context.authority_entity_ids[0];
    if (!reviewer) {
      setErrors(['No admitted reviewer/authority entity is available to approve this curriculum.']);
      return;
    }

    try {
      setReviewPackage(applyCurriculumReviewDecision(reviewPackage, {
        reviewerEntityId: reviewer,
        reviewerEntityType: 'HUMAN',
        reviewRole: 'curriculum-reviewer',
        decision: 'APPROVE',
        comments: reviewComment,
        authorityEffect: 'APPROVAL_WITHIN_CONTEXT',
      }));
      setTeachingSession(null);
      setErrors([]);
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Curriculum approval could not be recorded.']);
    }
  }

  function requestChanges() {
    if (!reviewPackage || !admittedGoal) return;
    const reviewer = admittedGoal.review_requirements.reviewer_entity_ids[0] ?? admittedGoal.learning_context.authority_entity_ids[0];
    if (!reviewer) {
      setErrors(['No admitted reviewer/authority entity is available to request changes.']);
      return;
    }

    try {
      setReviewPackage(applyCurriculumReviewDecision(reviewPackage, {
        reviewerEntityId: reviewer,
        reviewerEntityType: 'HUMAN',
        reviewRole: 'curriculum-reviewer',
        decision: 'REQUEST_CHANGES',
        comments: reviewComment,
        authorityEffect: 'REVISION_REQUEST',
      }));
      setTeachingSession(null);
      setErrors([]);
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Curriculum revision request could not be recorded.']);
    }
  }

  function startTeaching() {
    if (!admittedGoal || !generatedCurriculum || !reviewPackage) {
      setErrors(['Goal, curriculum, and review package are required before teaching can start.']);
      return;
    }

    try {
      setTeachingSession(startTeachingSession(admittedGoal, generatedCurriculum, reviewPackage));
      setErrors([]);
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Teaching session could not start.']);
    }
  }

  function advanceTeaching() {
    if (!teachingSession || !generatedCurriculum) return;
    try {
      setTeachingSession(advanceTeachingSession(teachingSession, generatedCurriculum));
      setErrors([]);
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Teaching session could not advance.']);
    }
  }

  return (
    <div className="shell">
      <section className="card full">
        <p className="eyebrow">StegLearn goal → curriculum → review → teach</p>
        <h1>What do you want to know or be able to do?</h1>
        <p className="hint">
          This bounded prototype now carries one exact curriculum identity/version from goal intake through review into a teaching session. It does not claim arbitrary-domain expert curriculum quality, autonomous approval, or production AI instruction.
        </p>

        <div className="grid">
          <article className="card">
            <h2>Participant</h2>
            <label>Entity ID<input value={entityId} onChange={(event) => setEntityId(event.target.value)} /></label>
            <label>Entity type<select value={entityType} onChange={(event) => setEntityType(event.target.value as ParticipantEntityType)}>{participantEntityTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select></label>
            <label>Learning context<select value={contextMode} onChange={(event) => setContextMode(event.target.value as LearningContextMode)}>{learningContextModes.map((mode) => <option key={mode} value={mode}>{mode}</option>)}</select></label>
            <label>Human authority entity IDs, comma-separated<input value={authorityIds} onChange={(event) => setAuthorityIds(event.target.value)} /></label>
          </article>

          <article className="card">
            <h2>Desired learning outcome</h2>
            <label>Skill, knowledge, capability, or outcome<textarea value={desiredOutcome} onChange={(event) => setDesiredOutcome(event.target.value)} placeholder="Example: I want to be able to design and explain a secure REST API in Python." /></label>
            <label>Desired depth<select value={requestedDepth} onChange={(event) => setRequestedDepth(event.target.value as CurriculumDepth)}>{curriculumDepths.map((depth) => <option key={depth} value={depth}>{depth}</option>)}</select></label>
            <label>Starting point<textarea value={startingPoint} onChange={(event) => setStartingPoint(event.target.value)} placeholder="What do you already know or know how to do? Leave blank if unknown." /></label>
          </article>

          <article className="card">
            <h2>Constraints and evidence</h2>
            <label>Time constraints, comma-separated<input value={timeConstraints} onChange={(event) => setTimeConstraints(event.target.value)} /></label>
            <label>Resource constraints, comma-separated<input value={resourceConstraints} onChange={(event) => setResourceConstraints(event.target.value)} /></label>
            <label>Evidence expectations, comma-separated<textarea value={evidenceExpectations} onChange={(event) => setEvidenceExpectations(event.target.value)} /></label>
          </article>

          <article className="card">
            <h2>Curriculum review</h2>
            <label><input type="checkbox" checked={reviewRequired} onChange={(event) => setReviewRequired(event.target.checked)} />Require curriculum review before teaching authorization</label>
            <label>Reviewer entity IDs, comma-separated<input value={reviewerIds} onChange={(event) => setReviewerIds(event.target.value)} disabled={!reviewRequired} /></label>
            <label>Review comment<textarea value={reviewComment} onChange={(event) => setReviewComment(event.target.value)} /></label>
            <p className="hint">Reviewability does not itself grant approval or teaching authority.</p>
          </article>
        </div>

        {errors.length ? <div className="validation-panel"><strong>Goal/curriculum flow needs attention</strong><ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul></div> : null}

        <div className="actions">
          <button type="button" disabled={!canAdmit} onClick={admitGoal}>1. Create governed goal intake</button>
          <button type="button" disabled={!admittedGoal} onClick={() => admittedGoal && exportJson('steglearn-participant-goal-intake.json', admittedGoal)}>Export goal JSON</button>
          <button type="button" disabled={!admittedGoal} onClick={generateCurriculum}>2. Generate bounded curriculum</button>
          <button type="button" disabled={!generatedCurriculum} onClick={() => generatedCurriculum && exportJson('steglearn-generated-curriculum.json', generatedCurriculum)}>Export curriculum JSON</button>
          <button type="button" disabled={!generatedCurriculum} onClick={materializeReviewPackage}>3. Materialize review package</button>
          <button type="button" disabled={!reviewPackage} onClick={() => reviewPackage && exportJson('steglearn-curriculum-review-package.json', reviewPackage)}>Export review JSON</button>
        </div>

        <h2>Admitted goal intake preview</h2>
        <pre>{JSON.stringify(admittedGoal, null, 2)}</pre>

        <h2>Generated curriculum preview</h2>
        <pre>{JSON.stringify(generatedCurriculum, null, 2)}</pre>

        {reviewPackage ? (
          <>
            <h2>Human-readable curriculum review</h2>
            <p><strong>Curriculum:</strong> {reviewPackage.curriculum_id} · version {reviewPackage.curriculum_version}</p>
            <p><strong>Learning goal:</strong> {reviewPackage.learning_goal}</p>
            <p><strong>Requested depth:</strong> {reviewPackage.requested_depth}</p>
            <p><strong>Review state:</strong> {reviewPackage.review_surface.review_state}</p>
            <p><strong>Teaching binding:</strong> {reviewPackage.teaching_binding.bound_curriculum_id} @ {reviewPackage.teaching_binding.bound_curriculum_version}</p>
            <p><strong>Review requirement:</strong> {reviewPackage.teaching_binding.review_requirement}</p>
            <div className="timeline-grid">
              {reviewPackage.canonical_curriculum.sequence.map((unit) => (
                <article className="timeline-card" key={unit.unit_id}>
                  <strong>{unit.title}</strong><span>{unit.unit_id}</span>
                  <p><strong>Outcomes</strong></p><ul>{unit.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                  <p><strong>Activities</strong></p><ul>{unit.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
                  <p><strong>Evidence</strong></p><ul>{unit.evidence_expectations.map((expectation) => <li key={expectation}>{expectation}</li>)}</ul>
                </article>
              ))}
            </div>

            <div className="actions">
              <button type="button" onClick={approveCurriculum}>Approve within this context</button>
              <button type="button" onClick={requestChanges}>Request changes</button>
            </div>

            <h2>Machine-readable synchronized review package</h2>
            <pre>{JSON.stringify(reviewPackage, null, 2)}</pre>
          </>
        ) : null}

        <h2>Teaching readiness</h2>
        <p>{teachingReadiness.reason}</p>
        <div className="actions">
          <button type="button" disabled={!teachingReadiness.ok || Boolean(teachingSession)} onClick={startTeaching}>4. Start teaching selected version</button>
          <button type="button" disabled={!teachingSession || teachingSession.state !== 'ACTIVE'} onClick={advanceTeaching}>Advance teaching unit</button>
          <button type="button" disabled={!teachingSession} onClick={() => teachingSession && exportJson('steglearn-teaching-session.json', teachingSession)}>Export teaching session JSON</button>
        </div>

        {teachingSession ? (
          <section className="card full">
            <p className="eyebrow">Bound teaching session</p>
            <h2>{teachingSession.state === 'COMPLETED' ? 'Teaching session complete' : currentTeachingUnit?.title ?? 'Teaching session'}</h2>
            <p><strong>Session:</strong> {teachingSession.teaching_session_id}</p>
            <p><strong>Curriculum:</strong> {teachingSession.curriculum_id} @ {teachingSession.curriculum_version}</p>
            <p><strong>Review state at start:</strong> {teachingSession.review_state_at_start}</p>
            <p><strong>State:</strong> {teachingSession.state}</p>
            {currentTeachingUnit ? (
              <>
                <p><strong>Outcomes</strong></p><ul>{currentTeachingUnit.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                <p><strong>StegLearn teaching methods</strong></p><ul>{currentTeachingUnit.teaching_methods.map((method) => <li key={method}>{method}</li>)}</ul>
                <p><strong>Activities</strong></p><ul>{currentTeachingUnit.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
                <p><strong>Evidence expected before progression</strong></p><ul>{currentTeachingUnit.evidence_expectations.map((expectation) => <li key={expectation}>{expectation}</li>)}</ul>
                <p><strong>Progression gate:</strong> {currentTeachingUnit.progression_gate}</p>
              </>
            ) : null}
            <pre>{JSON.stringify(teachingSession, null, 2)}</pre>
          </section>
        ) : null}
      </section>
    </div>
  );
}
