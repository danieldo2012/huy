export type EventId = 
  | '8-3' 
  | '20-10' 
  | 'mothers-day' 
  | 'birthday' 
  | 'anniversary' 
  | 'other';

export type RecipientType = 
  | 'mom' 
  | 'lover' 
  | 'best-friend' 
  | 'sister' 
  | 'teacher' 
  | 'colleague' 
  | 'special-other';

export type ToneType = 
  | 'sincere' 
  | 'sweet' 
  | 'cute' 
  | 'humorous' 
  | 'romantic' 
  | 'formal';

export type LengthType = 'short' | 'medium' | 'long';

export type EmotionType = 
  | 'gratitude' 
  | 'care' 
  | 'encouragement' 
  | 'joy' 
  | 'romance' 
  | 'free';

export type TemplateId = 
  | 'sweet-pink'
  | 'flowers-mom'
  | 'romantic-blush'
  | 'cute-doodles'
  | 'minimal-elegance'
  | 'vintage-letter'
  | 'sakura-dream'
  | 'warm-sunshine';

export interface CardData {
  v: number; // Schema version
  eventId: EventId;
  customEventName?: string;
  recipientType: RecipientType;
  recipientName: string;
  senderName: string;
  title: string;
  message: string;
  optionalNote?: string;
  templateId: TemplateId;
  colorTheme?: string;
  createdAt: string;
}

export interface EventOption {
  id: EventId;
  name: string;
  subtitle: string;
  dateBadge?: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface RecipientOption {
  id: RecipientType;
  name: string;
  sampleSalutation: string;
  description: string;
  iconName: string;
}

export interface TemplateDefinition {
  id: TemplateId;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  primaryColor: string;
  backgroundColor: string;
  fontFamily: string;
  previewThumbnail: string;
}

export interface WishTemplate {
  id: string;
  events: EventId[];
  recipientTypes: RecipientType[];
  tones: ToneType[];
  lengths: LengthType[];
  emotions: EmotionType[];
  title: string;
  template: string; // May contain {recipient} and {sender} tokens
}
