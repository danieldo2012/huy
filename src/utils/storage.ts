import type { CardData } from '../types/card';
import { validateCardData } from './cardCodec';

const DRAFT_KEY = 'gmct_card_draft_v1';
const STEP_KEY = 'gmct_wizard_step_v1';

export function saveDraft(card: CardData, stepIndex?: number): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(card));
    if (stepIndex !== undefined) {
      localStorage.setItem(STEP_KEY, stepIndex.toString());
    }
    return true;
  } catch (err) {
    console.warn('Unable to save card draft to localStorage:', err);
    return false;
  }
}

export function loadDraft(): { card: CardData | null; stepIndex: number } {
  if (typeof window === 'undefined') return { card: null, stepIndex: 0 };
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    const rawStep = localStorage.getItem(STEP_KEY);
    const stepIndex = rawStep ? parseInt(rawStep, 10) || 0 : 0;

    if (!raw) return { card: null, stepIndex: 0 };

    const parsed = JSON.parse(raw);
    const validation = validateCardData(parsed);

    if (validation.isValid && validation.card) {
      return { card: validation.card, stepIndex };
    }
    return { card: null, stepIndex: 0 };
  } catch (err) {
    console.warn('Failed to load card draft:', err);
    return { card: null, stepIndex: 0 };
  }
}

export function clearDraft(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(DRAFT_KEY);
    localStorage.removeItem(STEP_KEY);
  } catch (err) {
    console.warn('Failed to clear draft:', err);
  }
}

export function hasExistingDraft(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return Boolean(raw && raw.length > 20);
  } catch {
    return false;
  }
}
