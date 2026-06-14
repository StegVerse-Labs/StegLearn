export type ActivityType =
  | 'question'
  | 'build'
  | 'observation'
  | 'experiment'
  | 'story'
  | 'drawing'
  | 'video'
  | 'game-design'
  | 'reading'
  | 'outdoor-walk'
  | 'conversation'
  | 'music-and-mood'
  | 'logic-puzzle'
  | 'physical-challenge'
  | 'care-task'
  | 'code'
  | 'research'
  | 'reflection';

export type SessionState =
  | 'idle'
  | 'wonder-captured'
  | 'activity-selected'
  | 'artifact-added'
  | 'explanation-captured'
  | 'parent-review-pending'
  | 'receipt-draft'
  | 'receipt-accepted'
  | 'receipt-rejected'
  | 'receipt-needs-follow-up'
  | 'portfolio-saved';

export type PrivacyState = 'private' | 'parent-approved-export' | 'public';

export interface ArtifactRecord {
  artifact_id: string;
  created_at: string;
  learner_id: string;
  type: string;
  description: string;
  privacy: PrivacyState;
  parent_note?: string;
  learner_note?: string;
}

export interface LearnerSession {
  session_id: string;
  created_at: string;
  updated_at: string;
  learner_id: string;
  state: SessionState;
  wonder: string;
  activity_types: ActivityType[];
  artifacts: string[];
  learner_explanation: string;
  parent_note?: string;
  next_questions?: string[];
}

export interface ParentReview {
  reviewed_by: string;
  reviewed_at: string;
  review_note: string;
  accepted: boolean;
}

export interface SubjectMapping {
  subject: string;
  evidence_note: string;
}

export interface EvidenceItem {
  type: string;
  description: string;
  uri?: string;
}

export interface LearningReceipt {
  receipt_id: string;
  created_at: string;
  learner_id: string;
  wonder: string;
  activity_summary: string;
  learner_explanation: string;
  parent_review: ParentReview;
  subject_mappings: SubjectMapping[];
  evidence_items: EvidenceItem[];
  status: 'draft' | 'reviewed' | 'accepted' | 'rejected' | 'needs-follow-up';
  next_questions?: string[];
  non_capture_note?: string;
}

export interface PortfolioRecord {
  portfolio_id: string;
  created_at: string;
  updated_at: string;
  learner_id: string;
  receipt_ids: string[];
  open_questions: string[];
  active_projects: string[];
  accepted_subject_mappings: string[];
  artifact_ids: string[];
  parent_notes: string[];
  privacy: PrivacyState;
  non_capture_note?: string;
}
