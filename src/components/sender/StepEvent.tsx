import React from 'react';
import type { EventId } from '../../types/card';
import { EVENTS } from '../../data/events';
import { HeartHandshake, Flower2, Heart, Cake, Sparkles, Gift, ArrowRight } from 'lucide-react';

interface Props {
  selectedEventId: EventId;
  customEventName: string;
  onSelectEvent: (id: EventId) => void;
  onChangeCustomName: (name: string) => void;
  onNext: () => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  HeartHandshake,
  Flower2,
  Heart,
  Cake,
  Sparkles,
  Gift
};

export const StepEvent: React.FC<Props> = ({
  selectedEventId,
  customEventName,
  onSelectEvent,
  onChangeCustomName,
  onNext
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
          Bước 1: Bạn muốn gửi thiệp nhân dịp nào?
        </h2>
        <p style={{ color: '#8F7277', fontSize: '0.95rem' }}>
          Chọn một dịp lễ để chúng mình gợi ý những mẫu thiệp và lời chúc phù hợp nhất nhé!
        </p>
      </div>

      {/* Events Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}
      >
        {EVENTS.map((event) => {
          const isSelected = selectedEventId === event.id;
          const Icon = ICON_MAP[event.iconName] || Gift;

          return (
            <div
              key={event.id}
              onClick={() => onSelectEvent(event.id)}
              style={{
                position: 'relative',
                padding: '20px 18px',
                borderRadius: '18px',
                background: isSelected ? '#FFFFFF' : 'rgba(255, 254, 252, 0.75)',
                border: isSelected
                  ? '2.5px solid #C85E7C'
                  : '1.5px solid rgba(236, 166, 184, 0.5)',
                boxShadow: isSelected
                  ? '0 8px 24px rgba(200, 94, 124, 0.18)'
                  : '0 2px 8px rgba(104, 75, 80, 0.04)',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 12
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: isSelected ? '#F6DDE5' : '#FFF8F2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={20} color={isSelected ? '#C85E7C' : '#8F7277'} />
                  </div>

                  {event.dateBadge && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: isSelected ? '#C85E7C' : 'rgba(236, 166, 184, 0.3)',
                        color: isSelected ? '#FFF' : '#684B50'
                      }}
                    >
                      {event.dateBadge}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.2rem',
                    color: isSelected ? '#C85E7C' : '#473034',
                    marginBottom: 6
                  }}
                >
                  {event.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#8F7277',
                    lineHeight: 1.5,
                    margin: 0
                  }}
                >
                  {event.description}
                </p>
              </div>

              {isSelected && (
                <div
                  style={{
                    marginTop: 12,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#C85E7C',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                >
                  <span>✓ Đang chọn</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Custom Event Input if "other" is selected */}
      {selectedEventId === 'other' && (
        <div
          className="glass-panel"
          style={{
            padding: '20px',
            marginBottom: '28px',
            animation: 'cardUnfoldReveal 0.3s ease'
          }}
        >
          <label className="form-label" htmlFor="custom-event-input">
            Tên dịp đặc biệt của bạn:
          </label>
          <input
            id="custom-event-input"
            type="text"
            className="input"
            placeholder="Ví dụ: Ngày tốt nghiệp, Kỷ niệm 100 ngày yêu, Cảm ơn vì tất cả..."
            value={customEventName}
            onChange={(e) => onChangeCustomName(e.target.value)}
            maxLength={60}
          />
          <div className="form-hint">
            Tên dịp này sẽ được hiển thị trang trọng trên huy hiệu của tấm thiệp.
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={onNext} className="btn btn-primary btn-lg">
          <span>Tiếp tục: Chọn người nhận</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
