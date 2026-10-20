import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const MidnightRosegoldCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Dạ Tiệc Ánh Kim';

  return (
    <div
      className="card-midnight-rosegold"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '42px 34px 34px',
        borderRadius: '24px',
        background: 'linear-gradient(155deg, #2A2027 0%, #1A1418 100%)',
        boxShadow: '0 24px 55px rgba(25, 15, 22, 0.55)',
        border: '2px solid rgba(232, 163, 179, 0.45)',
        color: '#F8EEF1',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Rose Gold Geometric Border Accent */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
          border: '1px solid rgba(232, 163, 179, 0.3)',
          borderRadius: '16px',
          pointerEvents: 'none'
        }}
      />

      {/* Sparkling Diamond SVG in Corners */}
      <svg
        style={{ position: 'absolute', top: 16, right: 18, width: 44, height: 44, opacity: 0.8 }}
        viewBox="0 0 100 100"
      >
        <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="#E8A3B3" strokeWidth="2.5" />
        <polygon points="50,28 72,50 50,72 28,50" fill="none" stroke="#E8A3B3" strokeWidth="1.5" opacity="0.6" />
        <circle cx="50" cy="50" r="3" fill="#FFF" />
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
            background: 'rgba(232, 163, 179, 0.15)',
            border: '1.5px solid rgba(232, 163, 179, 0.5)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#E8A3B3',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          <span>✦</span>
          <span>{eventLabel}</span>
          <span>✦</span>
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1.85rem',
            fontWeight: 600,
            color: '#E8A3B3',
            marginBottom: 6,
            textShadow: '0 0 10px rgba(232, 163, 179, 0.35)'
          }}
        >
          Dearest {card.recipientName}
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.35,
          marginBottom: 20
        }}
      >
        {card.title}
      </h3>

      {/* Inner Charcoal Rose Paper Box */}
      <div
        style={{
          background: 'rgba(52, 38, 48, 0.75)',
          borderRadius: '18px',
          padding: '28px 24px',
          border: '1px solid rgba(232, 163, 179, 0.3)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
          marginBottom: 22
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#F8EEF1',
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
              paddingTop: 12,
              borderTop: '1px dashed rgba(232, 163, 179, 0.3)',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#E8A3B3',
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
        <span style={{ fontSize: '0.85rem', color: '#BBA0A8' }}>With love:</span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#E8A3B3'
          }}
        >
          {card.senderName || 'Người gửi ánh kim'}
        </span>
      </div>
    </div>
  );
};
