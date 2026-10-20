import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const CuteDoodlesCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Happy Day';

  return (
    <div
      className="card-cute-doodles"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '36px 30px 30px',
        borderRadius: '30px',
        background: '#FEF9F2',
        boxShadow: '0 18px 40px rgba(230, 92, 131, 0.15)',
        border: '3px dashed #ECA6B8',
        color: '#5E3E45',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Hand-drawn Doodles SVGs */}
      {/* Cute Star Top-Left */}
      <svg
        style={{ position: 'absolute', top: 14, left: 18, width: 32, height: 32 }}
        viewBox="0 0 100 100"
      >
        <path d="M50 10 L62 38 L92 38 L68 56 L78 86 L50 68 L22 86 L32 56 L8 38 L38 38 Z" fill="#FDE18A" stroke="#E65C83" strokeWidth="4" strokeLinejoin="round" />
      </svg>

      {/* Sparkle Doodle Top-Right */}
      <svg
        style={{ position: 'absolute', top: 16, right: 20, width: 34, height: 34 }}
        viewBox="0 0 100 100"
      >
        <path d="M50 10 Q50 50 10 50 Q50 50 50 90 Q50 50 90 50 Q50 50 50 10 Z" fill="#FFAAA6" stroke="#E65C83" strokeWidth="4" />
      </svg>

      {/* Cat / Bunny doodle Bottom-Left */}
      <svg
        style={{ position: 'absolute', bottom: 10, left: 16, width: 44, height: 44 }}
        viewBox="0 0 100 100"
      >
        <ellipse cx="50" cy="65" rx="35" ry="25" fill="#FFF" stroke="#E65C83" strokeWidth="4" />
        <polygon points="25,50 18,22 40,38" fill="#FFD1DC" stroke="#E65C83" strokeWidth="4" />
        <polygon points="75,50 82,22 60,38" fill="#FFD1DC" stroke="#E65C83" strokeWidth="4" />
        <circle cx="38" cy="62" r="3.5" fill="#5E3E45" />
        <circle cx="62" cy="62" r="3.5" fill="#5E3E45" />
        <path d="M47 70 Q50 74 53 70" stroke="#5E3E45" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Cute Little Sticker Header */}
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <span
          style={{
            display: 'inline-block',
            padding: '4px 16px',
            borderRadius: '12px',
            background: '#FFE0E9',
            border: '2px solid #E65C83',
            fontSize: '0.88rem',
            fontWeight: 700,
            fontFamily: "'Caveat', cursive",
            color: '#D4446F',
            transform: 'rotate(-2deg)'
          }}
        >
          ✨ {eventLabel} ✨
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
            color: '#E65C83',
            marginBottom: 4,
            transform: 'rotate(1deg)'
          }}
        >
          Hey {card.recipientName} ơi! ฅ^•ﻌ•^ฅ
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#42282E',
          lineHeight: 1.35,
          marginBottom: 16
        }}
      >
        {card.title}
      </h3>

      {/* Message Box with Doodle border */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '24px 22px',
          border: '2.5px solid #FFCDD9',
          boxShadow: '4px 4px 0px #FFD1DC',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1.35rem',
            lineHeight: 1.5,
            color: '#4A3035',
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
              borderTop: '2px dashed #FFD1DC',
              fontSize: '1.15rem',
              color: '#8A6068',
              fontFamily: "'Caveat', cursive"
            }}
          >
            P.S: {card.optionalNote} (｡♥‿♥｡)
          </div>
        )}
      </div>

      {/* Footer Signature */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 6
        }}
      >
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem', color: '#8A6068' }}>
          Từ đồng bọn:
        </span>
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#E65C83'
          }}
        >
          {card.senderName || 'Người bạn cute nhất'} ♡
        </span>
      </div>
    </div>
  );
};
