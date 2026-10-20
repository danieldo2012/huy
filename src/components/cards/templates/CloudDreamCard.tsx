import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const CloudDreamCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Mây Bồng Bềnh';

  return (
    <div
      className="card-cloud-dream"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 30px 30px',
        borderRadius: '26px',
        background: 'linear-gradient(155deg, #F3F8FE 0%, #E3EEFB 100%)',
        boxShadow: '0 20px 48px rgba(88, 135, 210, 0.16)',
        border: '2px solid #BFD6F5',
        color: '#2D4468',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Cloud & Rainbow Motif SVG Top-Right */}
      <svg
        style={{ position: 'absolute', top: 12, right: 16, width: 68, height: 48, opacity: 0.85 }}
        viewBox="0 0 100 70"
      >
        <path
          d="M20 50 A15 15 0 0 1 45 35 A22 22 0 0 1 80 40 A14 14 0 0 1 85 55 A12 12 0 0 1 20 50 Z"
          fill="#FFF"
          filter="drop-shadow(0 2px 4px rgba(88, 135, 210, 0.15))"
        />
        <circle cx="48" cy="48" r="2" fill="#5887D2" />
        <circle cx="62" cy="48" r="2" fill="#5887D2" />
        <path d="M53 53 Q55 56 57 53" stroke="#5887D2" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Cloud Bottom-Left */}
      <svg
        style={{ position: 'absolute', bottom: 10, left: 14, width: 55, height: 40, opacity: 0.7 }}
        viewBox="0 0 100 70"
      >
        <path
          d="M20 50 A15 15 0 0 1 45 35 A22 22 0 0 1 80 40 A14 14 0 0 1 85 55 A12 12 0 0 1 20 50 Z"
          fill="#FFF"
        />
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
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1.5px solid #BFD6F5',
            fontSize: '0.8rem',
            fontWeight: 700,
            fontFamily: "'Caveat', cursive",
            fontSizeAdjust: '0.55',
            color: '#4672B8',
            letterSpacing: '0.04em'
          }}
        >
          <span>☁️</span>
          <span>{eventLabel}</span>
          <span>🌈</span>
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
            color: '#4672B8',
            marginBottom: 4
          }}
        >
          Gửi {card.recipientName} yêu thương ☁️
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.38rem',
          fontWeight: 700,
          color: '#1E314D',
          lineHeight: 1.35,
          marginBottom: 16
        }}
      >
        {card.title}
      </h3>

      {/* Message Card */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '26px 24px',
          boxShadow: '0 6px 20px rgba(88, 135, 210, 0.08)',
          border: '1.5px solid rgba(191, 214, 245, 0.8)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1.35rem',
            lineHeight: 1.55,
            color: '#2D4468',
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
              marginTop: 14,
              paddingTop: 10,
              borderTop: '1px dashed #BFD6F5',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: '#5B7FA8',
              textAlign: 'center',
              fontFamily: "'Caveat', cursive"
            }}
          >
            P.S: {card.optionalNote} (◕‿◕✿)
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
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem', color: '#5B7FA8' }}>
          Từ tầng mây:
        </span>
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#4672B8'
          }}
        >
          {card.senderName || 'Người gửi bồng bềnh'}
        </span>
      </div>
    </div>
  );
};
