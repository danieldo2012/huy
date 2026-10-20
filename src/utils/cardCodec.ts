import LZString from 'lz-string';
import type { CardData, TemplateId, EventId, RecipientType } from '../types/card';
import { TEMPLATES } from '../data/templates';

const VALID_TEMPLATE_IDS = new Set<string>(TEMPLATES.map((t) => t.id));
const MAX_TITLE_LEN = 300;
const MAX_MESSAGE_LEN = 5000;
const MAX_NAME_LEN = 120;

/**
 * Sanitize text to remove potential script injections / HTML tags safely
 */
export function sanitizeText(text: string): string {
  if (!text) return '';
  return text
    .replace(/[<>]/g, '') // strip raw angle brackets
    .trim();
}

/**
 * Validate card payload structure and length limits
 */
export function validateCardData(obj: unknown): { isValid: boolean; card?: CardData; error?: string } {
  if (!obj || typeof obj !== 'object') {
    return { isValid: false, error: 'Dữ liệu thiệp không hợp lệ (không phải đối tượng)' };
  }

  const candidate = obj as Partial<CardData>;

  if (typeof candidate.v !== 'number' || candidate.v < 1) {
    return { isValid: false, error: 'Phiên bản thiệp không được hỗ trợ' };
  }

  if (!candidate.message || typeof candidate.message !== 'string') {
    return { isValid: false, error: 'Thiệp thiếu nội dung lời chúc' };
  }

  if (candidate.message.length > MAX_MESSAGE_LEN) {
    return { isValid: false, error: 'Nội dung lời chúc vượt quá độ dài tối đa cho phép' };
  }

  // Validate or fallback templateId
  let templateId: TemplateId = 'sweet-pink';
  if (candidate.templateId && VALID_TEMPLATE_IDS.has(candidate.templateId)) {
    templateId = candidate.templateId as TemplateId;
  }

  const validCard: CardData = {
    v: candidate.v,
    eventId: (candidate.eventId as EventId) || 'other',
    customEventName: sanitizeText(candidate.customEventName || '').slice(0, MAX_TITLE_LEN),
    recipientType: (candidate.recipientType as RecipientType) || 'special-other',
    recipientName: sanitizeText(candidate.recipientName || '').slice(0, MAX_NAME_LEN),
    senderName: sanitizeText(candidate.senderName || '').slice(0, MAX_NAME_LEN),
    title: sanitizeText(candidate.title || 'Gửi Một Chút Thương').slice(0, MAX_TITLE_LEN),
    message: sanitizeText(candidate.message),
    optionalNote: candidate.optionalNote ? sanitizeText(candidate.optionalNote).slice(0, 1000) : undefined,
    templateId,
    colorTheme: candidate.colorTheme ? sanitizeText(candidate.colorTheme) : undefined,
    createdAt: candidate.createdAt || new Date().toISOString()
  };

  return { isValid: true, card: validCard };
}

/**
 * Encode card data to a compressed URL-safe string
 */
export function encodeCardData(card: CardData): string {
  try {
    const jsonStr = JSON.stringify(card);
    const compressed = LZString.compressToEncodedURIComponent(jsonStr);
    return compressed;
  } catch (err) {
    console.error('Failed to encode card data:', err);
    // Fallback using base64 with utf8 support
    const utf8Bytes = encodeURIComponent(JSON.stringify(card));
    return btoa(utf8Bytes);
  }
}

/**
 * Decode card data from compressed URL-safe string
 */
export function decodeCardData(encodedStr: string): { success: boolean; card?: CardData; error?: string } {
  if (!encodedStr || typeof encodedStr !== 'string') {
    return { success: false, error: 'Không tìm thấy dữ liệu thiệp' };
  }

  try {
    // Attempt decompressing LZ-string
    let jsonStr = LZString.decompressFromEncodedURIComponent(encodedStr);
    if (!jsonStr) {
      // Try fallback base64
      try {
        jsonStr = decodeURIComponent(atob(encodedStr));
      } catch {
        // Not base64 either
      }
    }

    if (!jsonStr) {
      return { success: false, error: 'Đường dẫn thiệp bị lỗi hoặc không thể giải mã' };
    }

    const parsed = JSON.parse(jsonStr);
    const validation = validateCardData(parsed);

    if (!validation.isValid || !validation.card) {
      return { success: false, error: validation.error || 'Dữ liệu thiệp không hợp lệ' };
    }

    return { success: true, card: validation.card };
  } catch (err) {
    console.error('Error decoding card payload:', err);
    return { success: false, error: 'Định dạng dữ liệu thiệp không chính xác' };
  }
}

/**
 * Extract card payload from current URL location
 */
export function getCardPayloadFromUrl(): string | null {
  if (typeof window === 'undefined') return null;

  // 1. Check hash fragment: #card=<payload> or #<payload>
  const hash = window.location.hash.replace(/^#/, '');
  if (hash) {
    if (hash.startsWith('card=')) {
      return hash.substring(5);
    }
    // Also check URLSearchParams in hash
    const hashParams = new URLSearchParams(hash);
    if (hashParams.get('card')) {
      return hashParams.get('card');
    }
  }

  // 2. Check query params: ?card=<payload>
  const searchParams = new URLSearchParams(window.location.search);
  const cardParam = searchParams.get('card');
  if (cardParam) return cardParam;

  return null;
}

/**
 * Construct full shareable URL with hash fragment
 */
export function createShareableUrl(card: CardData): string {
  const encoded = encodeCardData(card);
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  return `${origin}${pathname}#card=${encoded}`;
}
