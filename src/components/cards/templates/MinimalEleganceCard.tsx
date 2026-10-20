import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const MinimalEleganceCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Kỷ Niệm';

  return (
    <div
      className="card-minimal-elegance"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '48px 40px 40px',
        borderRadius: '16px',
        background: '#FFFEFC',
        boxShadow: '0 20px 45px rgba(80, 60, 65, 0.12)',
        border: '1px solid #EFE6DC',
        color: '#473034',
        boxSizing: 'border-box'
      }}
    >
      {/* Editorial Double Thin Border */}
      <div
        style={{
          position: 'absolute',
          top: 14,
          left: 14,
          right: 14,
          bottom: 14,
          border: '1px solid rgba(207, 164, 72, 0.4)',
          borderRadius: '12px',
          pointerEvents: 'none'
        }}
      />

      {/* Top Editorial Monogram */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div
          style={{
            display: 'inline-block',
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#A08085',
            fontWeight: 500,
            borderBottom: '1px solid #E6C87C',
            paddingBottom: 4
          }}
        >
          {eventLabel}
        </div>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1.45rem',
            color: '#6B4E53',
            marginBottom: 6,
            textAlign: 'left'
          }}
        >
          Dear {card.recipientName},
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#2E1E22',
          lineHeight: 1.35,
          marginBottom: 22,
          textAlign: 'left'
        }}
      >
        {card.title}
      </h3>

      {/* Message Area */}
      <div style={{ marginBottom: 26, textAlign: 'left' }}>
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '0.98rem',
            lineHeight: 1.9,
            color: '#523A3E',
            whiteSpace: 'pre-wrap',
            margin: 0,
            letterSpacing: '0.01em'
          }}
        >
          {card.message}
        </p>

        {card.optionalNote && (
          <div
            style={{
              marginTop: 20,
              paddingLeft: 14,
              borderLeft: '2px solid #E6C87C',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#82656A'
            }}
          >
            {card.optionalNote}
          </div>
        )}
      </div>

      {/* Thin Gold Line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, #E6C87C 0%, rgba(230, 200, 124, 0.1) 100%)',
          marginBottom: 20
        }}
      />

      {/* Signature */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline'
        }}
      >
        <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B49B9F' }}>
          {card.createdAt ? card.createdAt.slice(0, 10) : '2026-10-20'}
        </span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8rem', color: '#8F7277', fontStyle: 'italic' }}>Sincerely,</div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#473034'
            }}
          >
            {card.senderName || 'Anonymous'}
          </div>
        </div>
      </div>
    </div>
  );
};
