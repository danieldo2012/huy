import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const RomanticBlushCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Tình Yêu';

  return (
    <div
      className="card-romantic-blush"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '42px 36px 36px',
        borderRadius: '26px',
        background: 'radial-gradient(circle at 50% 0%, #FFF2F5 0%, #FEE5EB 60%, #FDD2DE 100%)',
        boxShadow: '0 22px 50px rgba(189, 60, 98, 0.22)',
        border: '2px solid #F7B5C8',
        color: '#5C3842',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Rose & Petal Botanical SVGs */}
      <svg
        style={{ position: 'absolute', top: -10, right: -10, width: 100, height: 100, opacity: 0.85 }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="35" fill="#F08CA6" opacity="0.4" />
        <path d="M50 30 C40 20, 25 35, 35 50 C45 65, 50 60, 50 70 C50 60, 55 65, 65 50 C75 35, 60 20, 50 30 Z" fill="#D94B73" />
        <circle cx="50" cy="45" r="10" fill="#BD3C62" />
        <path d="M70 70 Q80 85 90 80" stroke="#BD3C62" strokeWidth="2" fill="none" opacity="0.6"/>
      </svg>

      <svg
        style={{ position: 'absolute', bottom: 15, left: 15, width: 50, height: 50, opacity: 0.6 }}
        viewBox="0 0 100 100"
      >
        <path d="M30 50 C10 30, 20 10, 40 20 C60 30, 50 60, 30 50 Z" fill="#ECA6B8" />
        <path d="M60 70 C50 85, 75 90, 80 75 C85 60, 70 55, 60 70 Z" fill="#F49EB4" />
      </svg>

      {/* Romantic Event Badge */}
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '5px 18px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1.5px solid #F3BAC9',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#BD3C62',
            letterSpacing: '0.06em'
          }}
        >
          <span>🌹</span>
          <span>{eventLabel}</span>
          <span>🌹</span>
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
            color: '#BD3C62',
            marginBottom: 8
          }}
        >
          Gửi em, {card.recipientName}
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.38rem',
          fontWeight: 700,
          color: '#451E28',
          lineHeight: 1.35,
          marginBottom: 20
        }}
      >
        {card.title}
      </h3>

      {/* Message Box */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.94)',
          borderRadius: '20px',
          padding: '28px 26px',
          boxShadow: '0 8px 24px rgba(189, 60, 98, 0.08)',
          border: '1px solid rgba(247, 181, 200, 0.7)',
          marginBottom: 22
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.8,
            color: '#4F2B34',
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
              marginTop: 18,
              paddingTop: 14,
              borderTop: '1px solid #FCE4EC',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#8A5260',
              textAlign: 'center',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            "{card.optionalNote}"
          </div>
        )}
      </div>

      {/* Signature */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          flexDirection: 'column'
        }}
      >
        <span style={{ fontSize: '0.85rem', color: '#8A5260', letterSpacing: '0.04em' }}>
          Mãi yêu em,
        </span>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.65rem',
            fontWeight: 700,
            color: '#BD3C62'
          }}
        >
          {card.senderName || 'Người luôn thương em'}
        </span>
      </div>
    </div>
  );
};
