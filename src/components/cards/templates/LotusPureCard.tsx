import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const LotusPureCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Hương Sen Thuần Khiết';

  return (
    <div
      className="card-lotus-pure"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 32px 32px',
        borderRadius: '24px',
        background: 'linear-gradient(150deg, #F9FBF8 0%, #EDF4EE 100%)',
        boxShadow: '0 20px 48px rgba(63, 123, 94, 0.16)',
        border: '2px solid #C8DEC9',
        color: '#284534',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Lotus Blossom Botanical SVG in Corners */}
      <svg
        style={{ position: 'absolute', top: 12, right: 16, width: 68, height: 68, opacity: 0.85 }}
        viewBox="0 0 100 100"
      >
        {/* Lotus Petals */}
        <path d="M50 20 C42 40, 42 60, 50 75 C58 60, 58 40, 50 20 Z" fill="#ECA6B8" opacity="0.9" />
        <path d="M50 30 C30 45, 30 65, 45 76 C46 60, 48 45, 50 30 Z" fill="#F4BAC9" opacity="0.8" />
        <path d="M50 30 C70 45, 70 65, 55 76 C54 60, 52 45, 50 30 Z" fill="#F4BAC9" opacity="0.8" />
        <path d="M35 75 Q50 90 65 75" stroke="#528A6D" strokeWidth="2.5" fill="none" />
      </svg>

      <svg
        style={{ position: 'absolute', bottom: 12, left: 16, width: 55, height: 55, opacity: 0.7, transform: 'scaleX(-1)' }}
        viewBox="0 0 100 100"
      >
        <path d="M50 20 C42 40, 42 60, 50 75 C58 60, 58 40, 50 20 Z" fill="#ECA6B8" opacity="0.9" />
        <path d="M50 30 C30 45, 30 65, 45 76 C46 60, 48 45, 50 30 Z" fill="#F4BAC9" opacity="0.8" />
        <path d="M35 75 Q50 90 65 75" stroke="#528A6D" strokeWidth="2.5" fill="none" />
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
            border: '1.5px solid #C8DEC9',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#346B50',
            letterSpacing: '0.06em'
          }}
        >
          <span>🪷</span>
          <span>{eventLabel}</span>
          <span>🪷</span>
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
            color: '#346B50',
            marginBottom: 6
          }}
        >
          Kính gửi {card.recipientName}
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#1C3526',
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
          boxShadow: '0 6px 20px rgba(63, 123, 94, 0.08)',
          border: '1.5px solid rgba(200, 222, 201, 0.8)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#284232',
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
              borderTop: '1px solid #E1EEE2',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#4B735A',
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
        <span style={{ fontSize: '0.85rem', color: '#4B735A', fontStyle: 'italic' }}>Kính chúc,</span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#346B50'
          }}
        >
          {card.senderName || 'Người gửi hương sen'}
        </span>
      </div>
    </div>
  );
};
