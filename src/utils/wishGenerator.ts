import type { EventId, RecipientType, ToneType, LengthType, EmotionType, WishTemplate } from '../types/card';
import { WISHES_LIBRARY } from '../data/wishesLibrary';
import { RECIPIENTS } from '../data/recipients';

export interface WishGenerationCriteria {
  eventId: EventId;
  recipientType: RecipientType;
  recipientName?: string;
  senderName?: string;
  tone: ToneType;
  length: LengthType;
  emotion: EmotionType;
  customIdea?: string;
}

export interface GeneratedWishOption {
  id: string;
  title: string;
  message: string;
  tone: ToneType;
  length: LengthType;
  matchedScore: number;
}

/**
 * Replace placeholders and format names naturally
 */
export function formatWishText(
  rawTemplate: string,
  recipientName?: string,
  recipientType?: RecipientType,
  senderName?: string
): string {
  let text = rawTemplate;

  // Derive natural salutation
  let salutation = recipientName?.trim();
  if (!salutation) {
    switch (recipientType) {
      case 'mom':
        salutation = 'Mẹ yêu';
        break;
      case 'lover':
        salutation = 'Em yêu';
        break;
      case 'best-friend':
        salutation = 'Cậu';
        break;
      case 'sister':
        salutation = 'Chị/em gái';
        break;
      case 'teacher':
        salutation = 'Cô giáo kính mến';
        break;
      case 'colleague':
        salutation = 'Bạn đồng nghiệp';
        break;
      default:
        salutation = 'Bạn';
        break;
    }
  }

  // Replace {recipient} or variations safely
  text = text.replace(/\{recipient\}/gi, salutation);
  text = text.replace(/\{\{recipient\}\}/gi, salutation);
  text = text.replace(/\{\{name\}\}/gi, salutation);

  // Replace {sender} safely
  if (senderName && senderName.trim()) {
    text = text.replace(/\{sender\}/gi, senderName.trim());
    text = text.replace(/\{\{sender\}\}/gi, senderName.trim());
  } else {
    // Gracefully clean up any dangling sender references
    text = text.replace(/\{sender\}/gi, '');
    text = text.replace(/\{\{sender\}\}/gi, '');
  }

  // Clean double spaces or unwanted trailing spaces
  return text.replace(/\s{2,}/g, ' ').trim();
}

/**
 * Generate smart wish suggestions matching criteria
 */
export function generateWishSuggestions(criteria: WishGenerationCriteria): GeneratedWishOption[] {
  const { eventId, recipientType, tone, length, emotion, customIdea, recipientName, senderName } = criteria;

  // Score candidate templates
  const scored = WISHES_LIBRARY.map((item: WishTemplate) => {
    let score = 0;

    // Recipient match (vital)
    if (item.recipientTypes.includes(recipientType)) {
      score += 40;
    } else if (item.recipientTypes.includes('special-other')) {
      score += 15;
    }

    // Event match
    if (item.events.includes(eventId)) {
      score += 25;
    } else if (item.events.includes('other')) {
      score += 10;
    }

    // Tone match
    if (item.tones.includes(tone)) {
      score += 20;
    }

    // Length match
    if (item.lengths.includes(length)) {
      score += 15;
    }

    // Emotion match
    if (emotion === 'free' || item.emotions.includes(emotion)) {
      score += 15;
    }

    // Keyword match from custom idea
    if (customIdea && customIdea.trim().length > 1) {
      const keywords = customIdea.toLowerCase().split(/\s+/);
      const contentLower = (item.template + ' ' + item.title).toLowerCase();
      let matches = 0;
      for (const kw of keywords) {
        if (kw.length >= 3 && contentLower.includes(kw)) {
          matches++;
        }
      }
      score += matches * 10;
    }

    // Small random jitter to rotate recommendations upon multiple clicks
    const jitter = Math.random() * 5;

    return {
      item,
      score: score + jitter
    };
  });

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  // Pick top 3 to 4 distinct items
  const selectedItems = scored.slice(0, 4);

  // Format templates with personalized tokens
  const results: GeneratedWishOption[] = selectedItems.map(({ item, score }, index) => {
    let title = item.title;
    if (recipientName && recipientName.trim()) {
      title = `${item.title} — ${recipientName.trim()}`;
    }

    let message = formatWishText(item.template, recipientName, recipientType, senderName);

    // If customIdea provided, subtly append or blend if not already in text
    if (customIdea && customIdea.trim() && index === 0) {
      message = `${message} ${customIdea.trim()}`;
    }

    return {
      id: `${item.id}-${Date.now()}-${index}`,
      title,
      message,
      tone: item.tones[0] || tone,
      length: item.lengths[0] || length,
      matchedScore: Math.round(score)
    };
  });

  return results;
}

/**
 * Generate a smart default card title based on event and recipient
 */
export function getDefaultCardTitle(eventId: EventId, recipientType: RecipientType, recipientName?: string): string {
  const rec = RECIPIENTS.find((r) => r.id === recipientType);

  const nameOrSalutation = recipientName?.trim() || rec?.name || 'Bạn';

  switch (eventId) {
    case '8-3':
      return `Mừng Ngày 8/3 Ngọt Ngào Gửi ${nameOrSalutation}`;
    case '20-10':
      return `Thương Chúc 20/10 Rực Rỡ Gửi ${nameOrSalutation}`;
    case 'mothers-day':
      return `Tri Ân Ngày Của Mẹ — Gửi ${nameOrSalutation}`;
    case 'birthday':
      return `Chúc Mừng Sinh Nhật ${nameOrSalutation} Yêu Dấu`;
    case 'anniversary':
      return `Kỷ Niệm Ngày Đong Đầy Yêu Thương — Gửi ${nameOrSalutation}`;
    default:
      return `Gửi Một Chút Thương Đến ${nameOrSalutation}`;
  }
}
