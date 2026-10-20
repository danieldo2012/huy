import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const LavenderGardenCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Hương Oải Hương';

  return (
    <div
      className="card-lavender-garden"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 32px 32px',
        borderRadius: '24px',
        background: 'linear-gradient(150deg, #FAF6FD 0%, #EFE7F8 100%)',
        boxShadow: '0 20px 48px rgba(142, 107, 175, 0.16)',
        border: '2px solid #D6C2EB',
        color: '#4B385D',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Lavender Sprigs Botanical SVG in Corners */}
      <svg
        style={{ position: 'absolute', top: 12, right: 16, width: 70, height: 90, opacity: 0.85 }}
        viewBox="0 0 100 120"
      >
        <path d="M40 110 Q50 60 70 20" stroke="#7E9C76" strokeWidth="2.5" fill="none" />
        {/* Lavender blossoms along stem */}
        <ellipse cx="68" cy="24" rx="6" ry="4" fill="#9B74BF" transform="rotate(-20 68 24)" />
        <ellipse cx="64" cy="34" rx="7" ry="4.5" fill="#8E6BAF" transform="rotate(-15 64 34)" />
        <ellipse cx="60" cy="46" rx="7" ry="5" fill="#845FA5" transform="rotate(-10 60 46)" />
        <ellipse cx="56" cy="58" rx="8" ry="5" fill="#9B74BF" transform="rotate(-5 56 58)" />
        <ellipse cx="52" cy="70" rx="8" ry="5" fill="#8E6BAF" />
        <path d="M48 75 Q40 85 30 90" stroke="#7E9C76" strokeWidth="1.5" fill="none" />
      </svg>

      <svg
        style={{ position: 'absolute', bottom: 12, left: 16, width: 60, height: 75, opacity: 0.7, transform: 'scaleX(-1)' }}
        viewBox="0 0 100 120"
      >
        <path d="M40 110 Q50 60 70 20" stroke="#7E9C76" strokeWidth="2.5" fill="none" />
        <ellipse cx="68" cy="24" rx="6" ry="4" fill="#9B74BF" />
        <ellipse cx="64" cy="34" rx="7" ry="4.5" fill="#8E6BAF" />
        <ellipse cx="60" cy="46" rx="7" ry="5" fill="#845FA5" />
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
            border: '1.5px solid #D6C2EB',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#7D57A0',
            letterSpacing: '0.06em'
          }}
        >
          <span>🌾</span>
          <span>{eventLabel}</span>
          <span>🌾</span>
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
            color: '#764F9A',
            marginBottom: 6
          }}
        >
          Thương gửi {card.recipientName} 💜
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.38rem',
          fontWeight: 700,
          color: '#3B274B',
          lineHeight: 1.35,
          marginBottom: 18
        }}
      >
        {card.title}
      </h3>

      {/* Message Box */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          borderRadius: '20px',
          padding: '26px 24px',
          boxShadow: '0 6px 22px rgba(142, 107, 175, 0.08)',
          border: '1.5px solid rgba(214, 194, 235, 0.8)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#463259',
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
              borderTop: '1px solid #ECE3F5',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#8460A2',
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
        <span style={{ fontSize: '0.85rem', color: '#8460A2' }}>Hương thơm từ:</span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#764F9A'
          }}
        >
          {card.senderName || 'Người gửi chút hương'}
        </span>
      </div>
    </div>
  );
};
