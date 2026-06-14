import type { EntityLearningHistory, LearningTransitionEvent } from './history';
import type { LearningReceipt, PortfolioRecord } from './types';

const RECEIPTS_KEY = 'steglearn.receipts';
const PORTFOLIO_KEY = 'steglearn.portfolio';
const EVENTS_KEY = 'steglearn.learningTransitionEvents';
const HISTORY_KEY = 'steglearn.entityLearningHistory';

export function loadReceipts(): LearningReceipt[] {
  const raw = localStorage.getItem(RECEIPTS_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as LearningReceipt[];
  } catch {
    return [];
  }
}

export function saveReceipts(receipts: LearningReceipt[]): void {
  localStorage.setItem(RECEIPTS_KEY, JSON.stringify(receipts, null, 2));
}

export function loadPortfolio(): PortfolioRecord | null {
  const raw = localStorage.getItem(PORTFOLIO_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as PortfolioRecord;
  } catch {
    return null;
  }
}

export function savePortfolio(portfolio: PortfolioRecord): void {
  localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(portfolio, null, 2));
}

export function loadLearningTransitionEvents(): LearningTransitionEvent[] {
  const raw = localStorage.getItem(EVENTS_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as LearningTransitionEvent[];
  } catch {
    return [];
  }
}

export function saveLearningTransitionEvents(events: LearningTransitionEvent[]): void {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events, null, 2));
}

export function loadEntityLearningHistory(): EntityLearningHistory | null {
  const raw = localStorage.getItem(HISTORY_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as EntityLearningHistory;
  } catch {
    return null;
  }
}

export function saveEntityLearningHistory(history: EntityLearningHistory): void {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history, null, 2));
}

export function exportJson(filename: string, data: unknown): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
