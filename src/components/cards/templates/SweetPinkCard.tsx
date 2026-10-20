import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
  scale?: number;
}

export const SweetPinkCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Dịp Đặc Biệt';

  return (
    <div
      className="card-sweet-pink"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '36px 32px 32px',
        borderRadius: '28px',
        background: 'linear-gradient(145deg, #FFF5F8 0%, #FEE8EF 100%)',
        boxShadow: '0 18px 45px rgba(200, 94, 124, 0.18)',
        border: '3px solid #F9CBD7',
        color: '#684B50',
        overflow: 'hidden',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}
    >
      {/* Decorative Floating Hearts & Flowers SVGs */}
      <svg
        style={{ position: 'absolute', top: 12, left: 16, width: 44, height: 44, opacity: 0.7 }}
        viewBox="0 0 100 100"
      >
        <path d="M50 20 C40 5, 10 15, 20 45 C30 65, 50 85, 50 85 C50 85, 70 65, 80 45 C90 15, 60 5, 50 20 Z" fill="#F49EB4" />
        <circle cx="28" cy="28" r="6" fill="#FFF" opacity="0.6"/>
      </svg>
      <svg
        style={{ position: 'absolute', top: 18, right: 18, width: 36, height: 36, opacity: 0.65 }}
        viewBox="0 0 100 100"
      >
        <path d="M50 20 C40 5, 10 15, 20 45 C30 65, 50 85, 50 85 C50 85, 70 65, 80 45 C90 15, 60 5, 50 20 Z" fill="#ECA6B8" />
      </svg>
      <svg
        style={{ position: 'absolute', bottom: 12, right: 20, width: 42, height: 42, opacity: 0.55 }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="14" fill="#F6DDE5" />
        <circle cx="50" cy="25" r="12" fill="#ECA6B8" opacity="0.75" />
        <circle cx="75" cy="50" r="12" fill="#ECA6B8" opacity="0.75" />
        <circle cx="50" cy="75" r="12" fill="#ECA6B8" opacity="0.75" />
        <circle cx="25" cy="50" r="12" fill="#ECA6B8" opacity="0.75" />
        <circle cx="50" cy="50" r="8" fill="#F4C15A" />
      </svg>

      {/* Cute ribbon top badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 18px',
          borderRadius: '999px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1.5px solid #F3BAC9',
          fontSize: '0.82rem',
          fontWeight: 600,
          color: '#C85E7C',
          letterSpacing: '0.04em',
          marginBottom: 16,
          boxShadow: '0 2px 8px rgba(200, 94, 124, 0.1)'
        }}
      >
        <span>🌸</span>
        <span>{eventLabel}</span>
        <span>🌸</span>
      </div>

      {/* Recipient Salutation */}
      {card.recipientName && (
        <div
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#A84260',
            marginBottom: 6
          }}
        >
          Gửi {card.recipientName} ♡
        </div>
      )}

      {/* Card Title */}
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.35rem',
          fontWeight: 600,
          color: '#473034',
          lineHeight: 1.35,
          marginBottom: 18,
          padding: '0 10px'
        }}
      >
        {card.title}
      </h3>

      {/* Inner White Paper Card for Message */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          borderRadius: '18px',
          padding: '24px 22px',
          border: '1.5px dashed #ECA6B8',
          boxShadow: 'inset 0 2px 8px rgba(200, 94, 124, 0.04)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.75,
            color: '#553C40',
            whiteSpace: 'pre-wrap',
            margin: 0
          }}
        >
          {card.message}
        </p>

        {card.optionalNote && (
          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: '1px solid #F6DDE5',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#8F7277',
              fontFamily: "'Dancing Script', cursive",
              fontSizeAdjust: '0.55'
            }}
          >
            P.S: {card.optionalNote}
          </div>
        )}
      </div>

      {/* Sender Signature */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 8,
          paddingRight: 8
        }}
      >
        <span style={{ fontSize: '0.88rem', color: '#8F7277' }}>Thương gửi từ:</span>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#C85E7C'
          }}
        >
          {card.senderName || 'Một người thầm thương'}
        </span>
      </div>

      {/* Bottom Heart Wave */}
      <div style={{ marginTop: 14, fontSize: '0.85rem', color: '#ECA6B8', letterSpacing: '4px' }}>
        ♡ ♡ ♡
      </div>
    </div>
  );
};
