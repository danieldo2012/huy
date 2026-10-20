import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const FlowersForMomCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Dịp Tri Ân';

  return (
    <div
      className="card-flowers-mom"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '40px 34px 34px',
        borderRadius: '24px',
        background: 'linear-gradient(180deg, #FDF9F3 0%, #F8EFE4 100%)',
        boxShadow: '0 20px 48px rgba(120, 70, 80, 0.16)',
        border: '2px solid #EADBCC',
        color: '#523A3E',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Delicate Inner Gold Border */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          left: 12,
          right: 12,
          bottom: 12,
          border: '1px solid rgba(207, 164, 72, 0.45)',
          borderRadius: '16px',
          pointerEvents: 'none'
        }}
      />

      {/* Carnations / Floral Botanical Botanical SVG in Corners */}
      <svg
        style={{ position: 'absolute', top: 16, left: 16, width: 68, height: 68, opacity: 0.85 }}
        viewBox="0 0 100 100"
      >
        <path d="M15 85 Q30 50 60 25" stroke="#8CA689" strokeWidth="2.5" fill="none" />
        <path d="M60 25 C65 15, 80 15, 85 25 C90 35, 75 45, 60 40 C45 45, 55 25, 60 25 Z" fill="#D96B88" />
        <path d="M65 20 C70 12, 80 12, 82 20 C85 28, 72 32, 65 28 Z" fill="#ECA6B8" />
        <circle cx="28" cy="65" r="4" fill="#A3C9A8" />
        <circle cx="42" cy="48" r="5" fill="#A3C9A8" />
      </svg>

      <svg
        style={{ position: 'absolute', top: 16, right: 16, width: 68, height: 68, opacity: 0.85, transform: 'scaleX(-1)' }}
        viewBox="0 0 100 100"
      >
        <path d="M15 85 Q30 50 60 25" stroke="#8CA689" strokeWidth="2.5" fill="none" />
        <path d="M60 25 C65 15, 80 15, 85 25 C90 35, 75 45, 60 40 C45 45, 55 25, 60 25 Z" fill="#D96B88" />
        <path d="M65 20 C70 12, 80 12, 82 20 C85 28, 72 32, 65 28 Z" fill="#ECA6B8" />
      </svg>

      {/* Header Tag */}
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <span
          style={{
            display: 'inline-block',
            padding: '5px 16px',
            borderRadius: '999px',
            background: 'rgba(234, 219, 204, 0.65)',
            border: '1px solid rgba(207, 164, 72, 0.4)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#8C485A'
          }}
        >
          ✦ {eventLabel} ✦
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1.5rem',
            color: '#A84260',
            marginBottom: 8
          }}
        >
          Kính gửi: {card.recipientName}
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#3F282B',
          lineHeight: 1.35,
          marginBottom: 20
        }}
      >
        {card.title}
      </h3>

      {/* Divider */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          margin: '0 auto 22px',
          width: '60%'
        }}
      >
        <span style={{ height: 1, flex: 1, background: 'rgba(207, 164, 72, 0.5)' }} />
        <span style={{ color: '#D96B88', fontSize: '0.9rem' }}>❦</span>
        <span style={{ height: 1, flex: 1, background: 'rgba(207, 164, 72, 0.5)' }} />
      </div>

      {/* Message Content */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '16px',
          padding: '26px 26px',
          boxShadow: '0 4px 18px rgba(104, 75, 80, 0.05)',
          marginBottom: 24,
          border: '1px solid rgba(234, 219, 204, 0.8)'
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#4B3337',
            whiteSpace: 'pre-wrap',
            margin: 0,
            textAlign: 'justify'
          }}
        >
          {card.message}
        </p>

        {card.optionalNote && (
          <div
            style={{
              marginTop: 18,
              paddingTop: 14,
              borderTop: '1px dashed #E2D3C3',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#7D5C62'
            }}
          >
            {card.optionalNote}
          </div>
        )}
      </div>

      {/* Footer Signature */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'baseline',
          gap: 10,
          paddingRight: 10
        }}
      >
        <span style={{ fontSize: '0.88rem', color: '#7D5C62', fontStyle: 'italic' }}>Kính yêu,</span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#8C384F'
          }}
        >
          {card.senderName || 'Con của Mẹ'}
        </span>
      </div>
    </div>
  );
};
