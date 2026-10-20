import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const AutumnMapleCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Mùa Thu Vàng';

  return (
    <div
      className="card-autumn-maple"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 32px 32px',
        borderRadius: '24px',
        background: 'linear-gradient(150deg, #FEF6EE 0%, #FBE7D7 100%)',
        boxShadow: '0 20px 48px rgba(194, 94, 62, 0.18)',
        border: '2px solid #F3C3A6',
        color: '#553629',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Maple Leaf Botanical SVG in Corners */}
      <svg
        style={{ position: 'absolute', top: 12, right: 16, width: 65, height: 65, opacity: 0.85 }}
        viewBox="0 0 100 100"
      >
        <path
          d="M50 15 L56 32 L72 26 L66 42 L84 45 L70 56 L82 72 L62 68 L53 85 L50 88 L47 85 L38 68 L18 72 L30 56 L16 45 L34 42 L28 26 L44 32 Z"
          fill="#D45C33"
        />
        <path d="M50 88 L50 98" stroke="#8A3215" strokeWidth="2.5" />
      </svg>

      <svg
        style={{ position: 'absolute', bottom: 12, left: 16, width: 50, height: 50, opacity: 0.75, transform: 'rotate(-25deg)' }}
        viewBox="0 0 100 100"
      >
        <path
          d="M50 15 L56 32 L72 26 L66 42 L84 45 L70 56 L82 72 L62 68 L53 85 L50 88 L47 85 L38 68 L18 72 L30 56 L16 45 L34 42 L28 26 L44 32 Z"
          fill="#E58B43"
        />
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
            border: '1.5px solid #F3C3A6',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#B04C2D',
            letterSpacing: '0.06em'
          }}
        >
          <span>🍁</span>
          <span>{eventLabel}</span>
          <span>🍂</span>
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
            color: '#B04C2D',
            marginBottom: 6
          }}
        >
          Gửi {card.recipientName} 🍁
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#442217',
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
          boxShadow: '0 6px 20px rgba(194, 94, 62, 0.08)',
          border: '1.5px solid rgba(243, 195, 166, 0.8)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#4E2C20',
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
              borderTop: '1px solid #F8DFCE',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#8A4A33',
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
        <span style={{ fontSize: '0.85rem', color: '#8A4A33' }}>Mùa thu ấm:</span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#B04C2D'
          }}
        >
          {card.senderName || 'Người gom lá thu'}
        </span>
      </div>
    </div>
  );
};
