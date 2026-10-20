import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const SakuraDreamCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Mùa Hoa Nở';

  return (
    <div
      className="card-sakura-dream"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '40px 34px 34px',
        borderRadius: '24px',
        background: 'linear-gradient(160deg, #FDF5F8 0%, #F5E6F0 100%)',
        boxShadow: '0 20px 48px rgba(176, 93, 136, 0.16)',
        border: '2px solid #E9D2E2',
        color: '#55394A',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Sakura Branch SVG Top-Left */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: 140, height: 110, opacity: 0.9 }}
        viewBox="0 0 140 110"
      >
        <path d="M0 0 Q40 30 80 20 T130 50" stroke="#7A5260" strokeWidth="2.5" fill="none" />
        <path d="M40 30 Q60 55 50 80" stroke="#7A5260" strokeWidth="1.5" fill="none" />
        {/* Blossoms */}
        <circle cx="80" cy="20" r="10" fill="#F49EB4" />
        <circle cx="80" cy="20" r="4" fill="#FCE4EC" />
        <circle cx="120" cy="45" r="9" fill="#F49EB4" />
        <circle cx="120" cy="45" r="3.5" fill="#FFF" />
        <circle cx="50" cy="75" r="8" fill="#F8BBD0" />
      </svg>

      {/* Falling Sakura Petals SVG */}
      <svg
        style={{ position: 'absolute', bottom: 15, right: 20, width: 70, height: 70, opacity: 0.75 }}
        viewBox="0 0 100 100"
      >
        <path d="M40 20 C25 10, 15 30, 25 45 C35 60, 50 65, 40 20 Z" fill="#F49EB4" />
        <path d="M70 50 C55 40, 60 70, 75 75 C90 80, 85 60, 70 50 Z" fill="#ECA6B8" opacity="0.8" />
        <path d="M20 75 C10 65, 15 90, 30 90 C45 90, 30 85, 20 75 Z" fill="#F8BBD0" opacity="0.6" />
      </svg>

      {/* Header Tag */}
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 18px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid #E9D2E2',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#A04D76',
            letterSpacing: '0.08em'
          }}
        >
          <span>🌸</span>
          <span>{eventLabel}</span>
          <span>🌸</span>
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#A04D76',
            marginBottom: 6
          }}
        >
          Thương gửi: {card.recipientName}
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.38rem',
          fontWeight: 600,
          color: '#3E2434',
          lineHeight: 1.35,
          marginBottom: 20
        }}
      >
        {card.title}
      </h3>

      {/* Message Card */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.88)',
          borderRadius: '18px',
          padding: '26px 24px',
          boxShadow: '0 6px 20px rgba(176, 93, 136, 0.08)',
          border: '1px solid rgba(233, 210, 226, 0.8)',
          marginBottom: 22
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#4B303F',
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
              borderTop: '1px solid #F3E5F0',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              color: '#825C73',
              textAlign: 'center'
            }}
          >
            {card.optionalNote}
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
        <span style={{ fontSize: '0.85rem', color: '#825C73' }}>Từ:</span>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.55rem',
            fontWeight: 700,
            color: '#A04D76'
          }}
        >
          {card.senderName || 'Người gửi chút thương'}
        </span>
      </div>
    </div>
  );
};
