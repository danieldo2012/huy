import React, { useState } from 'react';
import type { EventId, RecipientType, ToneType, LengthType, EmotionType } from '../../types/card';
import type { GeneratedWishOption } from '../../utils/wishGenerator';
import { generateWishSuggestions, getDefaultCardTitle } from '../../utils/wishGenerator';
import { Edit3, Wand2, Check, RefreshCw, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

interface Props {
  eventId: EventId;
  recipientType: RecipientType;
  recipientName: string;
  senderName: string;
  currentTitle: string;
  currentMessage: string;
  currentNote: string;
  onUpdateTitle: (title: string) => void;
  onUpdateMessage: (message: string) => void;
  onUpdateNote: (note: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const TONES: { id: ToneType; label: string }[] = [
  { id: 'sincere', label: 'Chân thành' },
  { id: 'sweet', label: 'Ngọt ngào' },
  { id: 'cute', label: 'Dễ thương' },
  { id: 'humorous', label: 'Hài hước' },
  { id: 'romantic', label: 'Lãng mạn' },
  { id: 'formal', label: 'Trang trọng' }
];

const LENGTHS: { id: LengthType; label: string }[] = [
  { id: 'short', label: 'Ngắn gọn' },
  { id: 'medium', label: 'Vừa phải' },
  { id: 'long', label: 'Sâu lắng / Dài' }
];

const EMOTIONS: { id: EmotionType; label: string }[] = [
  { id: 'gratitude', label: 'Biết ơn' },
  { id: 'care', label: 'Quan tâm' },
  { id: 'encouragement', label: 'Động viên' },
  { id: 'joy', label: 'Vui vẻ' },
  { id: 'romance', label: 'Lãng mạn' },
  { id: 'free', label: 'Tự do' }
];

export const StepWishes: React.FC<Props> = ({
  eventId,
  recipientType,
  recipientName,
  senderName,
  currentTitle,
  currentMessage,
  currentNote,
  onUpdateTitle,
  onUpdateMessage,
  onUpdateNote,
  onNext,
  onBack
}) => {
  const [mode, setMode] = useState<'suggest' | 'editor'>('suggest');

  // Recommendation filter state
  const [selectedTone, setSelectedTone] = useState<ToneType>('sincere');
  const [selectedLength, setSelectedLength] = useState<LengthType>('medium');
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType>('care');
  const [customIdea, setCustomIdea] = useState<string>('');

  const [suggestions, setSuggestions] = useState<GeneratedWishOption[]>(() => {
    return generateWishSuggestions({
      eventId,
      recipientType,
      recipientName,
      senderName,
      tone: 'sincere',
      length: 'medium',
      emotion: 'care'
    });
  });
  const [activeSuggestionId, setActiveSuggestionId] = useState<string | null>(null);

  // Generate suggestions on user action
  const handleGenerate = () => {
    const list = generateWishSuggestions({
      eventId,
      recipientType,
      recipientName,
      senderName,
      tone: selectedTone,
      length: selectedLength,
      emotion: selectedEmotion,
      customIdea
    });
    setSuggestions(list);
  };

  const handleSelectSuggestion = (opt: GeneratedWishOption, andEdit = false) => {
    onUpdateTitle(opt.title);
    onUpdateMessage(opt.message);
    setActiveSuggestionId(opt.id);
    if (andEdit) {
      setMode('editor');
    }
  };

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.75rem',
            color: '#473034',
            marginBottom: 8
          }}
        >
          Bước 3: Lời chúc chân thành từ trái tim
        </h2>
        <p style={{ color: '#8F7277', fontSize: '0.95rem' }}>
          Bạn có thể chọn từ kho gợi ý được cá nhân hóa hoặc tự tay viết những câu từ mộc mạc của riêng mình.
        </p>

        {/* Mode Switcher Tabs */}
        <div
          style={{
            display: 'inline-flex',
            background: 'rgba(236, 166, 184, 0.25)',
            padding: '4px',
            borderRadius: '999px',
            marginTop: '16px'
          }}
        >
          <button
            type="button"
            onClick={() => setMode('suggest')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              borderRadius: '999px',
              border: 'none',
              background: mode === 'suggest' ? '#FFFFFF' : 'transparent',
              color: mode === 'suggest' ? '#C85E7C' : '#684B50',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: mode === 'suggest' ? '0 2px 8px rgba(104, 75, 80, 0.1)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <Wand2 size={16} />
            <span>Chế độ Gợi ý tự động</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('editor')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              borderRadius: '999px',
              border: 'none',
              background: mode === 'editor' ? '#FFFFFF' : 'transparent',
              color: mode === 'editor' ? '#C85E7C' : '#684B50',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: mode === 'editor' ? '0 2px 8px rgba(104, 75, 80, 0.1)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <Edit3 size={16} />
            <span>Tự viết & Chỉnh sửa</span>
          </button>
        </div>
      </div>

      {/* MODE A: GỢI Ý LỜI CHÚC */}
      {mode === 'suggest' && (
        <div style={{ animation: 'cardUnfoldReveal 0.3s ease' }}>
          {/* Controls Bar */}
          <div
            className="glass-panel"
            style={{
              padding: '22px 20px',
              marginBottom: '24px'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
              {/* Tone */}
              <div>
                <label className="form-label" style={{ fontSize: '0.85rem' }}>
                  Phong cách lời chúc:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {TONES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTone(t.id)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '999px',
                        fontSize: '0.82rem',
                        border: selectedTone === t.id ? '1.5px solid #C85E7C' : '1px solid rgba(236, 166, 184, 0.4)',
                        background: selectedTone === t.id ? '#F6DDE5' : '#FFF',
                        color: selectedTone === t.id ? '#A84260' : '#684B50',
                        fontWeight: selectedTone === t.id ? 600 : 400,
                        cursor: 'pointer'
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Length */}
              <div>
                <label className="form-label" style={{ fontSize: '0.85rem' }}>
                  Độ dài:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {LENGTHS.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setSelectedLength(l.id)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '999px',
                        fontSize: '0.82rem',
                        border: selectedLength === l.id ? '1.5px solid #C85E7C' : '1px solid rgba(236, 166, 184, 0.4)',
                        background: selectedLength === l.id ? '#F6DDE5' : '#FFF',
                        color: selectedLength === l.id ? '#A84260' : '#684B50',
                        fontWeight: selectedLength === l.id ? 600 : 400,
                        cursor: 'pointer'
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Emotion */}
              <div>
                <label className="form-label" style={{ fontSize: '0.85rem' }}>
                  Cảm xúc chủ đạo:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {EMOTIONS.map((e) => (
                    <button
                      key={e.id}
                      type="button"
                      onClick={() => setSelectedEmotion(e.id)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '999px',
                        fontSize: '0.82rem',
                        border: selectedEmotion === e.id ? '1.5px solid #C85E7C' : '1px solid rgba(236, 166, 184, 0.4)',
                        background: selectedEmotion === e.id ? '#F6DDE5' : '#FFF',
                        color: selectedEmotion === e.id ? '#A84260' : '#684B50',
                        fontWeight: selectedEmotion === e.id ? 600 : 400,
                        cursor: 'pointer'
                      }}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Keyword / idea input */}
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <input
                type="text"
                className="input"
                placeholder="Ý tưởng hoặc chi tiết riêng (Ví dụ: hay thức khuya, thích hoa cúc, thi đỗ đại học...)"
                value={customIdea}
                onChange={(e) => setCustomIdea(e.target.value)}
                style={{ flex: 1 }}
              />
              <button
                type="button"
                onClick={handleGenerate}
                className="btn btn-secondary"
                style={{ flexShrink: 0 }}
              >
                <RefreshCw size={16} />
                <span>Tạo gợi ý khác</span>
              </button>
            </div>
          </div>

          {/* Suggestions List: >= 3 items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
            {suggestions.map((opt, idx) => {
              const isSelected = activeSuggestionId === opt.id || currentMessage === opt.message;

              return (
                <div
                  key={opt.id}
                  style={{
                    padding: '20px 22px',
                    borderRadius: '18px',
                    background: isSelected ? '#FFFFFF' : 'rgba(255, 254, 252, 0.8)',
                    border: isSelected ? '2px solid #C85E7C' : '1.5px solid rgba(236, 166, 184, 0.45)',
                    boxShadow: isSelected ? '0 8px 24px rgba(200, 94, 124, 0.14)' : 'var(--shadow-sm)',
                    transition: 'all 0.2s'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 10
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="badge">Phương án {idx + 1}</span>
                      <h4
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '1.1rem',
                          color: '#473034'
                        }}
                      >
                        {opt.title}
                      </h4>
                    </div>

                    {isSelected && (
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: '#67A678',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4
                        }}
                      >
                        <Check size={16} /> Đã chọn
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: '0.98rem',
                      color: '#4F3337',
                      lineHeight: 1.7,
                      marginBottom: 16,
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {opt.message}
                  </p>

                  <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      onClick={() => handleSelectSuggestion(opt, true)}
                      className="btn btn-secondary btn-sm"
                    >
                      <Edit3 size={15} />
                      <span>Chỉnh sửa câu này</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectSuggestion(opt, false)}
                      className={`btn btn-sm ${isSelected ? 'btn-secondary' : 'btn-primary'}`}
                    >
                      <Check size={15} />
                      <span>{isSelected ? 'Đang áp dụng' : 'Sử dụng lời chúc này'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODE B: TỰ VIẾT LỜI CHÚC (EDITOR) */}
      {mode === 'editor' && (
        <div
          className="glass-panel"
          style={{
            padding: '26px 24px',
            marginBottom: '28px',
            animation: 'cardUnfoldReveal 0.3s ease'
          }}
        >
          {/* Card Title Input */}
          <div style={{ marginBottom: 18 }}>
            <label className="form-label" htmlFor="card-title-input">
              Tiêu đề chính của tấm thiệp:
            </label>
            <input
              id="card-title-input"
              type="text"
              className="input"
              placeholder="Ví dụ: Gửi Người Phụ Nữ Tuyệt Vời Nhất Của Con"
              value={currentTitle}
              onChange={(e) => onUpdateTitle(e.target.value)}
              maxLength={100}
            />
          </div>

          {/* Message Textarea */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label className="form-label" htmlFor="card-message-input" style={{ margin: 0 }}>
                Nội dung lời chúc:
              </label>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: currentMessage.length > 1200 ? '#D95D6E' : '#8F7277'
                }}
              >
                {currentMessage.length} / 1500 ký tự
              </span>
            </div>
            <textarea
              id="card-message-input"
              className="textarea"
              style={{ minHeight: '160px' }}
              placeholder="Viết những lời chân thành từ trái tim bạn tại đây..."
              value={currentMessage}
              onChange={(e) => onUpdateMessage(e.target.value)}
              maxLength={1500}
            />
          </div>

          {/* Optional Note / P.S. */}
          <div style={{ marginBottom: 20 }}>
            <label className="form-label" htmlFor="card-note-input">
              Tái bút / Lời nhắn bổ sung (tùy chọn):
            </label>
            <input
              id="card-note-input"
              type="text"
              className="input"
              placeholder="Ví dụ: P.S: Tối nay nhớ về sớm ăn cơm cùng cả nhà nhé!"
              value={currentNote}
              onChange={(e) => onUpdateNote(e.target.value)}
              maxLength={200}
            />
          </div>

          {/* Quick Helper to load default title */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => onUpdateTitle(getDefaultCardTitle(eventId, recipientType, recipientName))}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.82rem', color: '#8F7277' }}
            >
              <BookOpen size={14} />
              <span>Gợi ý tiêu đề tự động</span>
            </button>

            <button
              type="button"
              onClick={() => setMode('suggest')}
              className="btn btn-secondary btn-sm"
            >
              <Wand2 size={15} />
              <span>Mở kho gợi ý mẫu</span>
            </button>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onBack} className="btn btn-secondary">
          <ArrowLeft size={18} />
          <span>Quay lại: Người nhận</span>
        </button>

        <button
          onClick={() => {
            // Validate message is not empty
            if (!currentMessage.trim()) {
              alert('Vui lòng chọn hoặc viết ít nhất một câu chúc trước khi tiếp tục!');
              return;
            }
            onNext();
          }}
          className="btn btn-primary btn-lg"
        >
          <span>Tiếp tục: Chọn mẫu thiệp</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
