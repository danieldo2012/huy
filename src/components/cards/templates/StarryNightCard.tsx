import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const StarryNightCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Huyền Ảo';

  return (
    <div
      className="card-starry-night"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '40px 34px 34px',
        borderRadius: '26px',
        background: 'linear-gradient(160deg, #181932 0%, #101124 100%)',
        boxShadow: '0 22px 50px rgba(10, 10, 25, 0.45)',
        border: '2px solid rgba(230, 185, 78, 0.4)',
        color: '#E8E8F5',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Crescent Moon & Constellations SVG */}
      <svg
        style={{ position: 'absolute', top: 12, right: 18, width: 70, height: 70, opacity: 0.9 }}
        viewBox="0 0 100 100"
      >
        <path
          d="M60 20 C40 20, 25 35, 25 55 C25 75, 40 90, 60 90 C45 80, 42 60, 50 45 C55 35, 62 28, 60 20 Z"
          fill="#F7D377"
        />
        <circle cx="20" cy="30" r="2" fill="#FFF" />
        <circle cx="35" cy="18" r="1.5" fill="#FFF" opacity="0.8" />
        <circle cx="80" cy="65" r="2" fill="#F7D377" />
        <circle cx="15" cy="70" r="1.5" fill="#FFF" opacity="0.6" />
      </svg>

      {/* Floating Sparkle Stars */}
      <svg
        style={{ position: 'absolute', bottom: 16, left: 18, width: 50, height: 50, opacity: 0.7 }}
        viewBox="0 0 100 100"
      >
        <path d="M50 15 L55 40 L80 45 L55 50 L50 75 L45 50 L20 45 L45 40 Z" fill="#F7D377" />
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
            background: 'rgba(230, 185, 78, 0.15)',
            border: '1.5px solid rgba(230, 185, 78, 0.5)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#F7D377',
            letterSpacing: '0.08em'
          }}
        >
          <span>✨</span>
          <span>{eventLabel}</span>
          <span>🌙</span>
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
            fontWeight: 600,
            color: '#F7D377',
            marginBottom: 6,
            textShadow: '0 0 12px rgba(247, 211, 119, 0.4)'
          }}
        >
          Gửi {card.recipientName} ✨
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

      {/* Inner Midnight Paper Box */}
      <div
        style={{
          background: 'rgba(32, 35, 68, 0.75)',
          borderRadius: '20px',
          padding: '28px 24px',
          border: '1.5px solid rgba(230, 185, 78, 0.3)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
          marginBottom: 22
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#E8E8F5',
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
              borderTop: '1px dashed rgba(230, 185, 78, 0.3)',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#F7D377',
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
        <span style={{ fontSize: '0.85rem', color: '#A0A2C2' }}>Dưới ánh sao:</span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#F7D377'
          }}
        >
          {card.senderName || 'Người gửi ước nguyện'}
        </span>
      </div>
    </div>
  );
};
