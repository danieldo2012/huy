import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const WarmSunshineCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Nắng Ấm';

  return (
    <div
      className="card-warm-sunshine"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 32px 32px',
        borderRadius: '26px',
        background: 'linear-gradient(150deg, #FFFDF8 0%, #FEF5DF 100%)',
        boxShadow: '0 20px 48px rgba(196, 126, 32, 0.16)',
        border: '2.5px solid #F6DE9E',
        color: '#553C1A',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Sunburst Rays & Daisy Botanical SVGs */}
      <svg
        style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, opacity: 0.55 }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="26" fill="#F4C15A" />
        {/* Rays */}
        <line x1="50" y1="10" x2="50" y2="2" stroke="#F4C15A" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="90" x2="50" y2="98" stroke="#F4C15A" strokeWidth="4" strokeLinecap="round" />
        <line x1="10" y1="50" x2="2" y2="50" stroke="#F4C15A" strokeWidth="4" strokeLinecap="round" />
        <line x1="90" y1="50" x2="98" y2="50" stroke="#F4C15A" strokeWidth="4" strokeLinecap="round" />
        <line x1="22" y1="22" x2="16" y2="16" stroke="#F4C15A" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="78" y1="78" x2="84" y2="84" stroke="#F4C15A" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="78" y1="22" x2="84" y2="16" stroke="#F4C15A" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="22" y1="78" x2="16" y2="84" stroke="#F4C15A" strokeWidth="3.5" strokeLinecap="round" />
      </svg>

      {/* Sunflower / Daisy Bottom Left */}
      <svg
        style={{ position: 'absolute', bottom: 12, left: 16, width: 50, height: 50, opacity: 0.8 }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="16" fill="#8C531B" />
        <circle cx="50" cy="20" r="12" fill="#F4C15A" />
        <circle cx="80" cy="50" r="12" fill="#F4C15A" />
        <circle cx="50" cy="80" r="12" fill="#F4C15A" />
        <circle cx="20" cy="50" r="12" fill="#F4C15A" />
        <circle cx="28" cy="28" r="11" fill="#FBE4A0" />
        <circle cx="72" cy="28" r="11" fill="#FBE4A0" />
        <circle cx="72" cy="72" r="11" fill="#FBE4A0" />
        <circle cx="28" cy="72" r="11" fill="#FBE4A0" />
      </svg>

      {/* Header Tag */}
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '5px 18px',
            borderRadius: '999px',
            background: '#FFF9E8',
            border: '1.5px solid #F4C15A',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#B57418',
            letterSpacing: '0.05em'
          }}
        >
          <span>🌻</span>
          <span>{eventLabel}</span>
          <span>☀️</span>
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.9rem',
            fontWeight: 700,
            color: '#B57418',
            marginBottom: 6
          }}
        >
          Thương gửi {card.recipientName} ☀️
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#422C10',
          lineHeight: 1.35,
          marginBottom: 18
        }}
      >
        {card.title}
      </h3>

      {/* Message Box */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.94)',
          borderRadius: '20px',
          padding: '26px 24px',
          boxShadow: '0 6px 20px rgba(196, 126, 32, 0.08)',
          border: '1.5px solid #F8E6B8',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#4B361B',
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
              borderTop: '1px solid #F7E9CA',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#826034',
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
        <span style={{ fontSize: '0.85rem', color: '#826034' }}>Tia nắng từ:</span>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.6rem',
            fontWeight: 700,
            color: '#B57418'
          }}
        >
          {card.senderName || 'Người luôn cầu chúc bạn an vui'}
        </span>
      </div>
    </div>
  );
};
