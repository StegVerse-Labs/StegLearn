import type { LearningReceipt, PortfolioRecord } from './types';

const RECEIPTS_KEY = 'steglearn.receipts';
const PORTFOLIO_KEY = 'steglearn.portfolio';

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
