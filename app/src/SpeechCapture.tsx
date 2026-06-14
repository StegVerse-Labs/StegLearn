import { useRef, useState } from 'react';

interface SpeechCaptureProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function SpeechCapture({ label, value, onChange, placeholder }: SpeechCaptureProps) {
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startRecording() {
    setError(null);

    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Audio recording is not available in this browser. Use manual transcription.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      recorderRef.current = recorder;
      recorder.start();
      setIsRecording(true);
    } catch {
      setError('Microphone permission was not granted. Use manual transcription.');
    }
  }

  function stopRecording() {
    recorderRef.current?.stop();
    recorderRef.current = null;
    setIsRecording(false);
  }

  return (
    <div className="speech-capture">
      <label>
        {label}
        <textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
      </label>

      <div className="actions">
        <button type="button" onClick={startRecording} disabled={isRecording}>
          Start talking
        </button>
        <button type="button" onClick={stopRecording} disabled={!isRecording}>
          Stop
        </button>
      </div>

      <p className="hint">Recording creates a local draft. Type or correct the transcript before parent review.</p>
      {error ? <p className="error">{error}</p> : null}
      {audioUrl ? <audio controls src={audioUrl} /> : null}
    </div>
  );
}
