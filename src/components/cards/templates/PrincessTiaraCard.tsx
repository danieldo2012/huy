import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const PrincessTiaraCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Nàng Công Chúa';

  return (
    <div
      className="card-princess-tiara"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '42px 34px 34px',
        borderRadius: '26px',
        background: 'linear-gradient(150deg, #FFF5F9 0%, #FEE5EF 100%)',
        boxShadow: '0 20px 48px rgba(208, 96, 133, 0.2)',
        border: '2.5px solid #F7BCD1',
        color: '#552D3D',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Golden Crown / Tiara SVG Center Top */}
      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <svg width="60" height="40" viewBox="0 0 100 70">
          <path
            d="M10 60 L18 25 L40 45 L50 15 L60 45 L82 25 L90 60 Z"
            fill="#F4C542"
            stroke="#D89E28"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="15" r="5" fill="#ECA6B8" stroke="#D89E28" strokeWidth="2" />
          <circle cx="18" cy="25" r="4.5" fill="#FFF" stroke="#D89E28" strokeWidth="2" />
          <circle cx="82" cy="25" r="4.5" fill="#FFF" stroke="#D89E28" strokeWidth="2" />
          <rect x="15" y="55" width="70" height="8" rx="4" fill="#FCE592" stroke="#D89E28" strokeWidth="2" />
        </svg>
      </div>

      {/* Header Tag */}
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 18px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1.5px solid #F7BCD1',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#C64871',
            letterSpacing: '0.06em'
          }}
        >
          <span>👑</span>
          <span>{eventLabel}</span>
          <span>✨</span>
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2rem',
            fontWeight: 700,
            color: '#C64871',
            marginBottom: 6
          }}
        >
          Công chúa nhỏ, {card.recipientName} ♡
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.38rem',
          fontWeight: 700,
          color: '#421E2C',
          lineHeight: 1.35,
          marginBottom: 18
        }}
      >
        {card.title}
      </h3>

      {/* Message Card */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.94)',
          borderRadius: '20px',
          padding: '26px 24px',
          boxShadow: '0 6px 20px rgba(208, 96, 133, 0.08)',
          border: '1.5px solid rgba(247, 188, 209, 0.8)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#502837',
            whiteSpace: 'pre-wrap',
            margin: 0,
            textAlign: 'center'
          }}
        >
          {card.message}
        </p>

        {card.optionalNote && (
          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: '1px solid #FCE4EC',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#9E4E6D',
              textAlign: 'center',
              fontFamily: "'Dancing Script', cursive",
              fontSizeAdjust: '0.5'
            }}
          >
            P.S: {card.optionalNote}
          </div>
        )}
      </div>

      {/* Signature */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'baseline',
          gap: 8,
          paddingRight: 8
        }}
      >
        <span style={{ fontSize: '0.85rem', color: '#9E4E6D' }}>Người luôn nâng niu:</span>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.6rem',
            fontWeight: 700,
            color: '#C64871'
          }}
        >
          {card.senderName || 'Người thương bạn nhất'}
        </span>
      </div>
    </div>
  );
};
