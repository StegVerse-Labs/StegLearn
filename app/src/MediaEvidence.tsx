import type { ChangeEvent } from 'react';
import type { ArtifactRecord } from './types';

interface MediaEvidenceProps {
  learnerId: string;
  artifacts: ArtifactRecord[];
  onAddArtifact: (artifact: ArtifactRecord) => void;
}

function now(): string {
  return new Date().toISOString();
}

function id(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function artifactTypeFromFile(file: File): string {
  if (file.type.startsWith('video/')) return 'video';
  if (file.type.startsWith('audio/')) return 'audio';
  if (file.type.startsWith('image/')) return 'image';
  return 'other';
}

export default function MediaEvidence({ learnerId, artifacts, onAddArtifact }: MediaEvidenceProps) {
  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const artifact: ArtifactRecord = {
      artifact_id: id('artifact'),
      created_at: now(),
      learner_id: learnerId,
      type: artifactTypeFromFile(file),
      description: `${file.name} (${file.type || 'unknown type'})`,
      privacy: 'private',
      parent_note: URL.createObjectURL(file),
    };

    onAddArtifact(artifact);
    event.target.value = '';
  }

  return (
    <div className="media-evidence">
      <label>
        Attach local media or file evidence
        <input type="file" accept="image/*,video/*,audio/*,.txt,.md,.json" onChange={handleFileChange} />
      </label>

      <ul className="artifact-list">
        {artifacts.map((artifact) => (
          <li key={artifact.artifact_id}>
            <strong>{artifact.type}</strong>: {artifact.description} · {artifact.privacy}
            {artifact.type === 'video' && artifact.parent_note ? (
              <video controls src={artifact.parent_note} />
            ) : null}
            {artifact.type === 'audio' && artifact.parent_note ? (
              <audio controls src={artifact.parent_note} />
            ) : null}
            {artifact.type === 'image' && artifact.parent_note ? (
              <img src={artifact.parent_note} alt={artifact.description} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
