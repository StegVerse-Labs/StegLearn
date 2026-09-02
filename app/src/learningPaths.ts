import ti83ArduinoSensorLab from '../../lessons/ti83-arduino-sensor-lab/lesson.json';
import type { ActivityType } from './types';

export interface LearningPathStage {
  stage_id: string;
  title: string;
  activity_types: ActivityType[];
  objectives: string[];
  safety_gate: string;
  evidence: string[];
}

export interface LearningPath {
  learning_path_id: string;
  version: string;
  title: string;
  summary: string;
  starter_wonder: string;
  audience: {
    minimum_age_guidance: number;
    adult_supervision_required: boolean;
    adult_only_tasks: string[];
  };
  equipment: {
    required: string[];
    optional: string[];
  };
  stages: LearningPathStage[];
  subject_mappings: string[];
  non_capture_note: string;
}

export const learningPaths: LearningPath[] = [ti83ArduinoSensorLab as LearningPath];
