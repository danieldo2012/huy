import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const MatchaCozyCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Trà Chiều';

  return (
    <div
      className="card-matcha-cozy"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 32px 32px',
        borderRadius: '24px',
        background: 'linear-gradient(150deg, #F5F9F4 0%, #E8F2E6 100%)',
        boxShadow: '0 20px 48px rgba(83, 124, 81, 0.16)',
        border: '2px solid #C4D9C1',
        color: '#324730',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Tea Cup and Zen Leaf SVG */}
      <svg
        style={{ position: 'absolute', top: 14, right: 18, width: 55, height: 55, opacity: 0.8 }}
        viewBox="0 0 100 100"
      >
        <path d="M25 45 C25 70, 75 70, 75 45 Z" fill="#6A9668" />
        <path d="M75 48 C85 48, 85 62, 75 62" stroke="#6A9668" strokeWidth="3" fill="none" />
        <line x1="20" y1="72" x2="80" y2="72" stroke="#6A9668" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M42 38 Q45 28 42 20" stroke="#8CB68A" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M52 38 Q55 28 52 20" stroke="#8CB68A" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      </svg>

      {/* Header Tag */}
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 18px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1.5px solid #C4D9C1',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#4A7348',
            letterSpacing: '0.06em'
          }}
        >
          <span>🍵</span>
          <span>{eventLabel}</span>
          <span>🌿</span>
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#466F44',
            marginBottom: 6
          }}
        >
          Thương gửi {card.recipientName} 🌿
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#263B25',
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
          boxShadow: '0 6px 20px rgba(83, 124, 81, 0.08)',
          border: '1.5px solid rgba(196, 217, 193, 0.8)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#344933',
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
              borderTop: '1px solid #E1ECE0',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#557953',
              textAlign: 'center'
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
        <span style={{ fontSize: '0.85rem', color: '#557953' }}>Tách trà từ:</span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#466F44'
          }}
        >
          {card.senderName || 'Người mong bạn thảnh thơi'}
        </span>
      </div>
    </div>
  );
};
