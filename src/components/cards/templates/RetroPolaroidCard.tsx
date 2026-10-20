import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const RetroPolaroidCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Khung Hình Kỷ Niệm';

  return (
    <div
      className="card-retro-polaroid"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 30px 30px',
        borderRadius: '20px',
        background: '#FAF8F5',
        boxShadow: '0 20px 48px rgba(100, 85, 80, 0.16)',
        border: '1px solid #E2DDD5',
        color: '#4A3D39',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Washi Tape Strip at top */}
      <div
        style={{
          position: 'absolute',
          top: -6,
          left: '50%',
          transform: 'translateX(-50%) rotate(-1deg)',
          width: '140px',
          height: '24px',
          background: 'rgba(236, 166, 184, 0.65)',
          borderLeft: '2px dashed rgba(255, 255, 255, 0.8)',
          borderRight: '2px dashed rgba(255, 255, 255, 0.8)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
          zIndex: 10
        }}
      />

      {/* Camera / Film Icon Top-Right */}
      <svg
        style={{ position: 'absolute', top: 16, right: 18, width: 44, height: 44, opacity: 0.7 }}
        viewBox="0 0 100 100"
      >
        <rect x="15" y="30" width="70" height="50" rx="8" fill="#D6CCC2" />
        <rect x="35" y="20" width="30" height="12" rx="4" fill="#B8ADA2" />
        <circle cx="50" cy="55" r="16" fill="#8D7F75" />
        <circle cx="50" cy="55" r="8" fill="#FFF" opacity="0.8" />
        <circle cx="72" cy="40" r="4" fill="#C85E7C" />
      </svg>

      {/* Header Tag */}
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 18px',
            borderRadius: '999px',
            background: 'rgba(230, 225, 218, 0.6)',
            border: '1px solid #D6CCC2',
            fontSize: '0.8rem',
            fontWeight: 700,
            fontFamily: "'Caveat', cursive",
            fontSizeAdjust: '0.55',
            color: '#6B5B57',
            letterSpacing: '0.04em'
          }}
        >
          <span>📷</span>
          <span>{eventLabel}</span>
          <span>🎞️</span>
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Caveat', cursive",
            fontSize: '2.1rem',
            fontWeight: 700,
            color: '#8A5866',
            marginBottom: 4
          }}
        >
          Dear {card.recipientName} ♡
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#382D29',
          lineHeight: 1.35,
          marginBottom: 16
        }}
      >
        {card.title}
      </h3>

      {/* Polaroid Inner Frame */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '24px 22px',
          border: '1px solid #EAE5DE',
          boxShadow: '0 4px 12px rgba(100, 85, 80, 0.06)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1.38rem',
            lineHeight: 1.55,
            color: '#423531',
            whiteSpace: 'pre-wrap',
            margin: 0
          }}
        >
          {card.message}
        </p>

        {card.optionalNote && (
          <div
            style={{
              marginTop: 14,
              paddingTop: 10,
              borderTop: '1px dashed #D6CCC2',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: '#7D6A64',
              fontFamily: "'Caveat', cursive"
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
          gap: 6
        }}
      >
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem', color: '#7D6A64' }}>
          Ghi lại bởi:
        </span>
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#8A5866'
          }}
        >
          {card.senderName || 'Người chụp ảnh ký ức'}
        </span>
      </div>
    </div>
  );
};
