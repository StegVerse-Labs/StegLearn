import { useMemo, useState } from 'react';
import type { ActivityType, ArtifactRecord, LearnerSession, LearningReceipt, PortfolioRecord, SubjectMapping } from './types';
import { exportJson, loadPortfolio, loadReceipts, savePortfolio, saveReceipts } from './storage';

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
  const [receipts, setReceipts] = useState<LearningReceipt[]>(() => loadReceipts());
  const [portfolio, setPortfolio] = useState<PortfolioRecord | null>(() => loadPortfolio());

  const canReview = useMemo(() => {
    return Boolean(session.wonder.trim() && session.learner_explanation.trim() && parentNote.trim());
  }, [session.wonder, session.learner_explanation, parentNote]);

  function updateSession(patch: Partial<LearnerSession>) {
    setSession((current) => ({
      ...current,
      ...patch,
      updated_at: now(),
    }));
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

  function addArtifact() {
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

    setArtifacts((current) => [...current, artifact]);
    updateSession({
      artifacts: [...session.artifacts, artifact.artifact_id],
      state: 'artifact-added',
    });
  }

  function acceptReceipt() {
    if (!canReview) return;

    const receipt = buildReceipt(session, artifacts, parentNote, subjects);
    const nextReceipts = [...receipts, receipt];
    const nextPortfolio = updatePortfolio(portfolio, receipt, artifacts.map((artifact) => artifact.artifact_id));

    setReceipts(nextReceipts);
    setPortfolio(nextPortfolio);
    saveReceipts(nextReceipts);
    savePortfolio(nextPortfolio);
    updateSession({ state: 'portfolio-saved' });
  }

  function resetSession() {
    setSession(createSession());
    setArtifacts([]);
    setParentNote('');
    setSubjects('language arts, science');
  }

  return (
    <main className="shell">
      <header className="hero">
        <p className="eyebrow">StegLearn prototype</p>
        <h1>Wonder → Evidence → Receipt</h1>
        <p>
          Local-first learner loop. No account. No cloud requirement. Parent review before portfolio save.
        </p>
      </header>

      <section className="grid">
        <article className="card">
          <h2>1. Capture wonder</h2>
          <label>
            Learner wonder
            <textarea
              value={session.wonder}
              onChange={(event) => updateSession({ wonder: event.target.value, state: 'wonder-captured' })}
              placeholder="Why does sleep feel instant? Does reality render when we are not looking?"
            />
          </label>
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
          <button type="button" onClick={addArtifact}>Add artifact note</button>
          <ul>
            {artifacts.map((artifact) => (
              <li key={artifact.artifact_id}>{artifact.description} · {artifact.privacy}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>4. Learner explains</h2>
          <label>
            Learner explanation
            <textarea
              value={session.learner_explanation}
              onChange={(event) => updateSession({ learner_explanation: event.target.value, state: 'explanation-captured' })}
              placeholder="I noticed... I made... I think... I would change..."
            />
          </label>
        </article>

        <article className="card">
          <h2>5. Parent review</h2>
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
          <button type="button" disabled={!canReview} onClick={acceptReceipt}>Accept receipt</button>
          <button type="button" onClick={resetSession}>Start new session</button>
        </article>

        <article className="card">
          <h2>6. Portfolio/export</h2>
          <p>Accepted receipts: {receipts.length}</p>
          <p>Current session state: {session.state}</p>
          <div className="actions">
            <button type="button" disabled={!receipts.length} onClick={() => exportJson('steglearn-receipts.json', receipts)}>
              Export receipts JSON
            </button>
            <button type="button" disabled={!portfolio} onClick={() => exportJson('steglearn-portfolio.json', portfolio)}>
              Export portfolio JSON
            </button>
          </div>
        </article>
      </section>

      <section className="card full">
        <h2>Latest receipt preview</h2>
        <pre>{JSON.stringify(receipts.at(-1) ?? null, null, 2)}</pre>
      </section>
    </main>
  );
}
