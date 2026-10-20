import React from 'react';
import type { EventId } from '../../types/card';
import { EVENTS } from '../../data/events';
import { HeartHandshake, Flower2, Heart, Cake, Sparkles, Gift, ArrowRight } from 'lucide-react';

interface Props {
  onSelectEvent: (eventId: EventId) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  HeartHandshake,
  Flower2,
  Heart,
  Cake,
  Sparkles,
  Gift
};

export const OccasionGrid: React.FC<Props> = ({ onSelectEvent }) => {
  return (
    <section style={{ padding: '40px 0 60px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="badge" style={{ marginBottom: 10 }}>
            Dịp lễ & Sự kiện ý nghĩa
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              color: '#473034',
              marginBottom: 10
            }}
          >
            Mỗi dịp đặc biệt, một nét dịu dàng riêng
          </h2>
          <p style={{ color: '#8F7277', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
            Dù là ngày lễ lớn trong năm hay một ngày kỷ niệm thầm lặng của hai người, luôn có một tấm thiệp phù hợp đang chờ bạn.
          </p>
        </div>

        {/* Occasions Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {EVENTS.map((ev) => {
            const Icon = ICON_MAP[ev.iconName] || Gift;

            return (
              <div
                key={ev.id}
                className="glass-panel"
                style={{
                  padding: '24px 20px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s, box-shadow 0.25s'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: '#F6DDE5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} color={ev.accentColor} />
                    </div>

                    {ev.dateBadge && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: '999px',
                          background: 'rgba(236, 166, 184, 0.25)',
                          color: '#C85E7C'
                        }}
                      >
                        {ev.dateBadge}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.25rem',
                      color: '#473034',
                      marginBottom: 6
                    }}
                  >
                    {ev.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#7D5C62',
                      lineHeight: 1.6,
                      marginBottom: 20
                    }}
                  >
                    {ev.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectEvent(ev.id)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Bắt đầu tạo thiệp</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
