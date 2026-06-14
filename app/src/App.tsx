import { useMemo, useState } from 'react';
import MediaEvidence from './MediaEvidence';
import SpeechCapture from './SpeechCapture';
import {
  createAdmissibilityDecision,
  evidenceModes,
  previewAdmissibilityDecision,
  profileUpdateOptions,
  recommendedProfileUpdate,
  updateLearnerAdmissibilityProfile,
} from './admissibility';
import type {
  AdmissibilityDecision,
  EvidenceMode,
  LearnerAdmissibilityProfile,
  ProfileUpdateDisposition,
} from './admissibility';
import { createReceiptAcceptedEvent, updateEntityHistory } from './history';
import type { EntityLearningHistory, LearningTransitionEvent } from './history';
import type { ActivityType, ArtifactRecord, LearnerSession, LearningReceipt, PortfolioRecord, SubjectMapping } from './types';
import {
  exportJson,
  loadAdmissibilityDecisions,
  loadEntityLearningHistory,
  loadLearnerAdmissibilityProfile,
  loadLearningTransitionEvents,
  loadPortfolio,
  loadReceipts,
  saveAdmissibilityDecisions,
  saveEntityLearningHistory,
  saveLearnerAdmissibilityProfile,
  saveLearningTransitionEvents,
  savePortfolio,
  saveReceipts,
} from './storage';
import {
  validateEntityHistory,
  validatePortfolio,
  validateReceipt,
  validateSessionForReview,
  validateTransitionEvent,
} from './validation';

const activityTypes: ActivityType[] = [
  'question',
  'build',
  'observation',
  'experiment',
  'story',
  'drawing',
  'video',
  'game-design',
  'reading',
  'outdoor-walk',
  'conversation',
  'music-and-mood',
  'logic-puzzle',
  'physical-challenge',
  'care-task',
  'code',
  'research',
  'reflection',
];

function now(): string {
  return new Date().toISOString();
}

function id(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function createSession(): LearnerSession {
  const timestamp = now();

  return {
    session_id: id('session'),
    created_at: timestamp,
    updated_at: timestamp,
    learner_id: 'learner-local-001',
    state: 'idle',
    wonder: '',
    activity_types: [],
    artifacts: [],
    learner_explanation: '',
    next_questions: [],
  };
}

function createPortfolio(receipt: LearningReceipt, artifactIds: string[]): PortfolioRecord {
  const timestamp = now();

  return {
    portfolio_id: id('portfolio'),
    created_at: timestamp,
    updated_at: timestamp,
    learner_id: receipt.learner_id,
    receipt_ids: [receipt.receipt_id],
    open_questions: receipt.next_questions ?? [],
    active_projects: [],
    accepted_subject_mappings: receipt.subject_mappings.map((mapping) => mapping.subject),
    artifact_ids: artifactIds,
    parent_notes: [receipt.parent_review.review_note],
    privacy: 'private',
    non_capture_note: 'This portfolio records learning evidence and must not be used as a fixed learner identity label.',
  };
}

function updatePortfolio(existing: PortfolioRecord | null, receipt: LearningReceipt, artifactIds: string[]): PortfolioRecord {
  if (!existing) return createPortfolio(receipt, artifactIds);

  return {
    ...existing,
    updated_at: now(),
    receipt_ids: Array.from(new Set([...existing.receipt_ids, receipt.receipt_id])),
    open_questions: Array.from(new Set([...existing.open_questions, ...(receipt.next_questions ?? [])])),
    accepted_subject_mappings: Array.from(
      new Set([...existing.accepted_subject_mappings, ...receipt.subject_mappings.map((mapping) => mapping.subject)]),
    ),
    artifact_ids: Array.from(new Set([...existing.artifact_ids, ...artifactIds])),
    parent_notes: [...existing.parent_notes, receipt.parent_review.review_note],
  };
}

function buildReceipt(session: LearnerSession, artifacts: ArtifactRecord[], parentNote: string, subjectText: string): LearningReceipt {
  const timestamp = now();
  const subject_mappings: SubjectMapping[] = subjectText
    .split(',')
    .map((subject) => subject.trim())
    .filter(Boolean)
    .map((subject) => ({
      subject,
      evidence_note: `Parent-reviewed mapping from activity: ${session.activity_types.join(', ') || 'unspecified'}.`,
    }));

  return {
    receipt_id: id('receipt'),
    created_at: timestamp,
    learner_id: session.learner_id,
    wonder: session.wonder,
    activity_summary: `Activity types: ${session.activity_types.join(', ') || 'unspecified'}. Artifacts attached: ${artifacts.length}.`,
    learner_explanation: session.learner_explanation,
    parent_review: {
      reviewed_by: 'parent-local-001',
      reviewed_at: timestamp,
      review_note: parentNote,
      accepted: true,
    },
    subject_mappings,
    evidence_items: artifacts.map((artifact) => ({
      type: artifact.type,
      description: artifact.description,
    })),
    status: 'accepted',
    next_questions: session.next_questions,
    non_capture_note: 'This receipt records one learning event and should not be used as a fixed identity label.',
  };
}

export default function App() {
  const [session, setSession] = useState<LearnerSession>(() => createSession());
  const [artifacts, setArtifacts] = useState<ArtifactRecord[]>([]);
  const [parentNote, setParentNote] = useState('');
  const [subjects, setSubjects] = useState('language arts, science');
  const [evidenceMode, setEvidenceMode] = useState<EvidenceMode>('spoken-explanation');
  const [profileUpdateDisposition, setProfileUpdateDisposition] = useState<ProfileUpdateDisposition>('emerging');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [receipts, setReceipts] = useState<LearningReceipt[]>(() => loadReceipts());
  const [portfolio, setPortfolio] = useState<PortfolioRecord | null>(() => loadPortfolio());
  const [transitionEvents, setTransitionEvents] = useState<LearningTransitionEvent[]>(() => loadLearningTransitionEvents());
  const [entityHistory, setEntityHistory] = useState<EntityLearningHistory | null>(() => loadEntityLearningHistory());
  const [admissibilityProfile, setAdmissibilityProfile] = useState<LearnerAdmissibilityProfile | null>(() => loadLearnerAdmissibilityProfile());
  const [admissibilityDecisions, setAdmissibilityDecisions] = useState<AdmissibilityDecision[]>(() => loadAdmissibilityDecisions());

  const sessionValidation = useMemo(() => validateSessionForReview(session, artifacts), [session, artifacts]);
  const admissibilityPreview = useMemo(
    () => previewAdmissibilityDecision(admissibilityProfile, evidenceMode, sessionValidation.ok),
    [admissibilityProfile, evidenceMode, sessionValidation.ok],
  );
  const recommendedProfileDisposition = recommendedProfileUpdate(admissibilityPreview.decision_class);
  const canReview = Boolean(sessionValidation.ok && parentNote.trim() && subjects.trim());
  const latestReceipt = receipts.length ? receipts[receipts.length - 1] : null;
  const latestAdmissibilityDecision = admissibilityDecisions.length
    ? admissibilityDecisions[admissibilityDecisions.length - 1]
    : null;

  function updateSession(patch: Partial<LearnerSession>) {
    setValidationErrors([]);
    setSession((current) => ({
      ...current,
      ...patch,
      updated_at: now(),
    }));
  }

  function changeEvidenceMode(nextMode: EvidenceMode) {
    setEvidenceMode(nextMode);
    setProfileUpdateDisposition(recommendedProfileUpdate(previewAdmissibilityDecision(admissibilityProfile, nextMode, sessionValidation.ok).decision_class));
  }

  function toggleActivity(activity: ActivityType) {
    const exists = session.activity_types.includes(activity);
    const next = exists
      ? session.activity_types.filter((item) => item !== activity)
      : [...session.activity_types, activity];

    updateSession({
      activity_types: next,
      state: next.length ? 'activity-selected' : 'wonder-captured',
    });
  }

  function addArtifactNote() {
    const description = window.prompt('Describe the artifact. Example: photo of LEGO build, video explanation, game map note.');
    if (!description) return;

    const artifact: ArtifactRecord = {
      artifact_id: id('artifact'),
      created_at: now(),
      learner_id: session.learner_id,
      type: 'parent_note',
      description,
      privacy: 'private',
    };

    addArtifact(artifact);
  }

  function addArtifact(artifact: ArtifactRecord) {
    setValidationErrors([]);
    setArtifacts((current) => [...current, artifact]);
    updateSession({
      artifacts: [...session.artifacts, artifact.artifact_id],
      state: 'artifact-added',
    });
  }

  function acceptReceipt() {
    const precheck = validateSessionForReview(session, artifacts);
    if (!precheck.ok) {
      setValidationErrors(precheck.errors);
      return;
    }

    if (!parentNote.trim()) {
      setValidationErrors(['Parent review note is required.']);
      return;
    }

    const receipt = buildReceipt(session, artifacts, parentNote, subjects);
    const receiptValidation = validateReceipt(receipt);
    if (!receiptValidation.ok) {
      setValidationErrors(receiptValidation.errors);
      return;
    }

    const transitionEvent = createReceiptAcceptedEvent(receipt, artifacts);
    const eventValidation = validateTransitionEvent(transitionEvent);
    if (!eventValidation.ok) {
      setValidationErrors(eventValidation.errors);
      return;
    }

    const nextPortfolio = updatePortfolio(portfolio, receipt, artifacts.map((artifact) => artifact.artifact_id));
    const portfolioValidation = validatePortfolio(nextPortfolio);
    if (!portfolioValidation.ok) {
      setValidationErrors(portfolioValidation.errors);
      return;
    }

    const nextEntityHistory = updateEntityHistory(entityHistory, transitionEvent, receipt, artifacts);
    const historyValidation = validateEntityHistory(nextEntityHistory);
    if (!historyValidation.ok) {
      setValidationErrors(historyValidation.errors);
      return;
    }

    const decision = createAdmissibilityDecision(
      session.learner_id,
      evidenceMode,
      admissibilityPreview.decision_class,
      profileUpdateDisposition,
      admissibilityPreview.reason,
      'parent-local-001',
      receipt.receipt_id,
      admissibilityProfile?.profile_id,
    );

    const nextAdmissibilityProfile = updateLearnerAdmissibilityProfile(
      admissibilityProfile,
      session.learner_id,
      evidenceMode,
      'parent-local-001',
      `${parentNote}\n\nAdmissibility decision: ${decision.decision_class}. Profile update: ${decision.profile_update}. ${decision.reason}`,
      profileUpdateDisposition,
    );

    const nextReceipts = [...receipts, receipt];
    const nextTransitionEvents = [...transitionEvents, transitionEvent];
    const nextAdmissibilityDecisions = [...admissibilityDecisions, decision];

    setReceipts(nextReceipts);
    setTransitionEvents(nextTransitionEvents);
    setPortfolio(nextPortfolio);
    setEntityHistory(nextEntityHistory);
    setAdmissibilityProfile(nextAdmissibilityProfile);
    setAdmissibilityDecisions(nextAdmissibilityDecisions);
    saveReceipts(nextReceipts);
    saveLearningTransitionEvents(nextTransitionEvents);
    savePortfolio(nextPortfolio);
    saveEntityLearningHistory(nextEntityHistory);
    saveLearnerAdmissibilityProfile(nextAdmissibilityProfile);
    saveAdmissibilityDecisions(nextAdmissibilityDecisions);
    setValidationErrors([]);
    updateSession({ state: 'portfolio-saved' });
  }

  function resetSession() {
    setSession(createSession());
    setArtifacts([]);
    setParentNote('');
    setSubjects('language arts, science');
    setEvidenceMode('spoken-explanation');
    setProfileUpdateDisposition('emerging');
    setValidationErrors([]);
  }

  return (
    <main className="shell">
      <header className="hero">
        <p className="eyebrow">StegLearn prototype</p>
        <h1>Wonder → Evidence → Receipt → History</h1>
        <p>
          Local-first learner loop. Admissibility changes by learner as reviewed evidence modes become known.
        </p>
      </header>

      <section className="grid">
        <article className="card">
          <h2>1. Capture wonder</h2>
          <SpeechCapture
            label="Learner wonder"
            value={session.wonder}
            onChange={(value) => updateSession({ wonder: value, state: 'wonder-captured' })}
            placeholder="Why does sleep feel instant? Does reality render when we are not looking?"
          />
        </article>

        <article className="card">
          <h2>2. Choose activity</h2>
          <div className="chips">
            {activityTypes.map((activity) => (
              <button
                key={activity}
                className={session.activity_types.includes(activity) ? 'chip selected' : 'chip'}
                onClick={() => toggleActivity(activity)}
                type="button"
              >
                {activity}
              </button>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>3. Attach evidence</h2>
          <button type="button" onClick={addArtifactNote}>Add artifact note</button>
          <MediaEvidence learnerId={session.learner_id} artifacts={artifacts} onAddArtifact={addArtifact} />
        </article>

        <article className="card">
          <h2>4. Learner explains</h2>
          <SpeechCapture
            label="Learner explanation"
            value={session.learner_explanation}
            onChange={(value) => updateSession({ learner_explanation: value, state: 'explanation-captured' })}
            placeholder="I noticed... I made... I think... I would change..."
          />
        </article>

        <article className="card">
          <h2>5. Parent review</h2>
          <label>
            Evidence mode for this learner
            <select value={evidenceMode} onChange={(event) => changeEvidenceMode(event.target.value as EvidenceMode)}>
              {evidenceModes.map((mode) => (
                <option key={mode} value={mode}>{mode}</option>
              ))}
            </select>
          </label>
          <div className={`decision-panel ${admissibilityPreview.decision_class}`}>
            <strong>Admissibility preview: {admissibilityPreview.decision_class}</strong>
            <p>{admissibilityPreview.reason}</p>
          </div>
          <label>
            Profile update after accepting this receipt
            <select
              value={profileUpdateDisposition}
              onChange={(event) => setProfileUpdateDisposition(event.target.value as ProfileUpdateDisposition)}
            >
              {profileUpdateOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <p className="hint">Recommended profile update: {recommendedProfileDisposition}</p>
          <label>
            Subject mappings, comma-separated
            <input value={subjects} onChange={(event) => setSubjects(event.target.value)} />
          </label>
          <label>
            Parent review note
            <textarea
              value={parentNote}
              onChange={(event) => setParentNote(event.target.value)}
              placeholder="Accepted as evidence of..."
            />
          </label>
          {validationErrors.length ? (
            <div className="validation-panel">
              <strong>Validation needs attention</strong>
              <ul>
                {validationErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <button type="button" disabled={!canReview} onClick={acceptReceipt}>Accept receipt</button>
          <button type="button" onClick={resetSession}>Start new session</button>
        </article>

        <article className="card">
          <h2>6. Portfolio/history/export</h2>
          <p>Accepted receipts: {receipts.length}</p>
          <p>Transition events: {transitionEvents.length}</p>
          <p>Admissibility decisions: {admissibilityDecisions.length}</p>
          <p>Known accepted modes: {admissibilityProfile?.accepted_evidence_modes.join(', ') || 'none yet'}</p>
          <p>Emerging modes: {admissibilityProfile?.emerging_evidence_modes.join(', ') || 'none yet'}</p>
          <p>Modes needing support: {admissibilityProfile?.modes_needing_support.join(', ') || 'none yet'}</p>
          <p>Current session state: {session.state}</p>
          <div className="actions">
            <button type="button" disabled={!receipts.length} onClick={() => exportJson('steglearn-receipts.json', receipts)}>
              Export receipts JSON
            </button>
            <button type="button" disabled={!portfolio} onClick={() => exportJson('steglearn-portfolio.json', portfolio)}>
              Export portfolio JSON
            </button>
            <button type="button" disabled={!transitionEvents.length} onClick={() => exportJson('steglearn-transition-events.json', transitionEvents)}>
              Export transition events JSON
            </button>
            <button type="button" disabled={!entityHistory} onClick={() => exportJson('steglearn-entity-history.json', entityHistory)}>
              Export entity history JSON
            </button>
            <button type="button" disabled={!admissibilityProfile} onClick={() => exportJson('steglearn-admissibility-profile.json', admissibilityProfile)}>
              Export admissibility profile JSON
            </button>
            <button type="button" disabled={!admissibilityDecisions.length} onClick={() => exportJson('steglearn-admissibility-decisions.json', admissibilityDecisions)}>
              Export admissibility decisions JSON
            </button>
          </div>
        </article>
      </section>

      <section className="card full">
        <h2>Latest receipt preview</h2>
        <pre>{JSON.stringify(latestReceipt, null, 2)}</pre>
      </section>

      <section className="card full">
        <h2>Latest admissibility decision preview</h2>
        <pre>{JSON.stringify(latestAdmissibilityDecision, null, 2)}</pre>
      </section>

      <section className="card full">
        <h2>Learner admissibility profile preview</h2>
        <pre>{JSON.stringify(admissibilityProfile, null, 2)}</pre>
      </section>

      <section className="card full">
        <h2>Entity learning history preview</h2>
        <pre>{JSON.stringify(entityHistory, null, 2)}</pre>
      </section>
    </main>
  );
}
