import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const OceanBreezeCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Biển Xanh';

  return (
    <div
      className="card-ocean-breeze"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 32px 32px',
        borderRadius: '26px',
        background: 'linear-gradient(155deg, #F0F9FA 0%, #DFF2F5 100%)',
        boxShadow: '0 20px 48px rgba(44, 136, 152, 0.16)',
        border: '2px solid #A8DCE5',
        color: '#264A52',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Ocean Wave Motif SVGs */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 40, opacity: 0.25 }}
        viewBox="0 0 500 60"
        preserveAspectRatio="none"
      >
        <path d="M0 30 Q125 0 250 30 T500 30 L500 0 L0 0 Z" fill="#2C8898" />
      </svg>

      {/* Seashell & Pearl Top-Right SVG */}
      <svg
        style={{ position: 'absolute', top: 14, right: 16, width: 48, height: 48, opacity: 0.8 }}
        viewBox="0 0 100 100"
      >
        <path d="M50 15 C25 25, 15 55, 30 75 C40 85, 60 85, 70 75 C85 55, 75 25, 50 15 Z" fill="#75C3CF" opacity="0.6" />
        <circle cx="50" cy="65" r="9" fill="#FFF" />
        <circle cx="48" cy="63" r="3" fill="#E0F2F7" />
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
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1.5px solid #A8DCE5',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#207382',
            letterSpacing: '0.06em'
          }}
        >
          <span>🌊</span>
          <span>{eventLabel}</span>
          <span>🐚</span>
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.9rem',
            fontWeight: 700,
            color: '#1C6B79',
            marginBottom: 6
          }}
        >
          Thương gửi {card.recipientName} 🌊
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#183C43',
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
          boxShadow: '0 6px 20px rgba(44, 136, 152, 0.08)',
          border: '1.5px solid rgba(168, 220, 229, 0.8)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#28464E',
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
              borderTop: '1px solid #D5EFF3',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#3B7480',
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
        <span style={{ fontSize: '0.85rem', color: '#437682' }}>Làn gió từ:</span>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.6rem',
            fontWeight: 700,
            color: '#1C6B79'
          }}
        >
          {card.senderName || 'Người gửi biển xanh'}
        </span>
      </div>
    </div>
  );
};
