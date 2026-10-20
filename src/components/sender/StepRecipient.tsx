import React from 'react';
import type { RecipientType } from '../../types/card';
import { RECIPIENTS } from '../../data/recipients';
import { Heart, Flame, Smile, Sparkles, GraduationCap, Coffee, Send, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
  selectedRecipientType: RecipientType;
  recipientName: string;
  senderName: string;
  onSelectRecipientType: (type: RecipientType) => void;
  onChangeRecipientName: (name: string) => void;
  onChangeSenderName: (name: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Heart,
  Flame,
  Smile,
  Sparkles,
  GraduationCap,
  Coffee,
  Send
};

export const StepRecipient: React.FC<Props> = ({
  selectedRecipientType,
  recipientName,
  senderName,
  onSelectRecipientType,
  onChangeRecipientName,
  onChangeSenderName,
  onNext,
  onBack
}) => {
  return (
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.75rem',
            color: '#473034',
            marginBottom: 8
          }}
        >
          Bước 2: Bạn gửi tấm thiệp này cho ai?
        </h2>
        <p style={{ color: '#8F7277', fontSize: '0.95rem' }}>
          Chọn đối tượng để hệ thống gợi ý từ ngữ và cách xưng hô tự nhiên, giàu cảm xúc nhất.
        </p>
      </div>

      {/* Recipient Type Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          marginBottom: '28px'
        }}
      >
        {RECIPIENTS.map((rec) => {
          const isSelected = selectedRecipientType === rec.id;
          const Icon = ICON_MAP[rec.iconName] || Heart;

          return (
            <div
              key={rec.id}
              onClick={() => {
                onSelectRecipientType(rec.id);
                // If recipientName is currently empty, offer a gentle default suggestion
                if (!recipientName) {
                  onChangeRecipientName(rec.sampleSalutation);
                }
              }}
              style={{
                padding: '16px 14px',
                borderRadius: '16px',
                background: isSelected ? '#FFFFFF' : 'rgba(255, 254, 252, 0.75)',
                border: isSelected
                  ? '2.5px solid #C85E7C'
                  : '1.5px solid rgba(236, 166, 184, 0.45)',
                boxShadow: isSelected
                  ? '0 6px 20px rgba(200, 94, 124, 0.16)'
                  : '0 2px 6px rgba(104, 75, 80, 0.04)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: isSelected ? '#F6DDE5' : '#FFF8F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Icon size={18} color={isSelected ? '#C85E7C' : '#8F7277'} />
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '1rem',
                    color: isSelected ? '#C85E7C' : '#473034',
                    fontWeight: 600,
                    marginBottom: 2
                  }}
                >
                  {rec.name}
                </h4>
                <div style={{ fontSize: '0.75rem', color: '#8F7277' }}>
                  Ví dụ: "{rec.sampleSalutation}"
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recipient & Sender Input Fields */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 22px',
          marginBottom: '32px'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          <div>
            <label className="form-label" htmlFor="recipient-name-input">
              Tên hoặc cách xưng hô người nhận:
            </label>
            <input
              id="recipient-name-input"
              type="text"
              className="input"
              placeholder="Ví dụ: Mẹ yêu, Bé Linh, Cậu bạn thân, Chị Mai..."
              value={recipientName}
              onChange={(e) => onChangeRecipientName(e.target.value)}
              maxLength={50}
            />
            <div className="form-hint">
              Có thể để trống nếu bạn muốn lời chúc chung. Không hiển thị placeholder rỗng trong thiệp.
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="sender-name-input">
              Tên hoặc chữ ký người gửi:
            </label>
            <input
              id="sender-name-input"
              type="text"
              className="input"
              placeholder="Ví dụ: Con gái của Mẹ, Hoàng Nam, Một người thầm thương..."
              value={senderName}
              onChange={(e) => onChangeSenderName(e.target.value)}
              maxLength={50}
            />
            <div className="form-hint">
              Sẽ xuất hiện ở phần chữ ký cuối thiệp. Có thể để trống nếu muốn ẩn danh bí mật.
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onBack} className="btn btn-secondary">
          <ArrowLeft size={18} />
          <span>Quay lại: Chọn dịp</span>
        </button>

        <button onClick={onNext} className="btn btn-primary btn-lg">
          <span>Tiếp tục: Soạn lời chúc</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
