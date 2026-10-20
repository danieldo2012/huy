import React from 'react';
import type { CardData } from '../../../types/card';
import { EVENTS } from '../../../data/events';

interface Props {
  card: CardData;
}

export const VintageLetterCard: React.FC<Props> = ({ card }) => {
  const event = EVENTS.find((e) => e.id === card.eventId);
  const eventLabel = card.customEventName || event?.name || 'Thư Tay';

  return (
    <div
      className="card-vintage-letter"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '38px 32px 32px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #F7EFE5 0%, #EFE4D6 100%)',
        boxShadow: '0 18px 45px rgba(110, 80, 60, 0.2)',
        border: '2px solid #D8C7B5',
        color: '#4A3427',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Postage Stamp in Top-Right */}
      <div
        style={{
          position: 'absolute',
          top: 18,
          right: 20,
          width: 65,
          height: 80,
          background: '#FFF8F0',
          border: '2px dashed #B89C82',
          padding: 4,
          boxShadow: '0 3px 8px rgba(74, 52, 39, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          transform: 'rotate(2deg)'
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>💌</span>
        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#8C4830', marginTop: 2 }}>VIETNAM</span>
        <span style={{ fontSize: '0.55rem', color: '#886B58' }}>POST 100đ</span>
      </div>

      {/* Postmark stamp overlay */}
      <svg
        style={{
          position: 'absolute',
          top: 30,
          right: 75,
          width: 70,
          height: 70,
          opacity: 0.5,
          transform: 'rotate(-12deg)'
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="44" stroke="#8C4830" strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="50" r="34" stroke="#8C4830" strokeWidth="1" fill="none" />
        <text x="50" y="38" textAnchor="middle" fill="#8C4830" fontSize="10" fontWeight="bold">HÀ NỘI</text>
        <text x="50" y="52" textAnchor="middle" fill="#8C4830" fontSize="8">SPECIAL</text>
        <text x="50" y="66" textAnchor="middle" fill="#8C4830" fontSize="9">POST</text>
      </svg>

      {/* Top Envelope Header Line */}
      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#8C4830',
            fontWeight: 700,
            borderBottom: '1.5px solid #8C4830',
            paddingBottom: 2
          }}
        >
          PAR AVION • {eventLabel}
        </span>
      </div>

      {/* Recipient */}
      {card.recipientName && (
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1.45rem',
            color: '#7A3220',
            marginBottom: 6
          }}
        >
          Thân gửi: {card.recipientName}
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.38rem',
          fontWeight: 700,
          color: '#3B2317',
          lineHeight: 1.35,
          marginBottom: 18,
          maxWidth: '75%'
        }}
      >
        {card.title}
      </h3>

      {/* Ruled Paper / Note Area */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.65)',
          borderRadius: '10px',
          padding: '24px 22px',
          border: '1px solid #DFCEBE',
          boxShadow: 'inset 0 1px 4px rgba(74, 52, 39, 0.05)',
          marginBottom: 20
        }}
      >
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', serif",
            fontSize: '1rem',
            lineHeight: 1.85,
            color: '#4A3427',
            whiteSpace: 'pre-wrap',
            margin: 0
          }}
        >
          {card.message}
        </p>

        {card.optionalNote && (
          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: '1px dashed #B89C82',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#755845'
            }}
          >
            Tái bút: {card.optionalNote}
          </div>
        )}
      </div>

      {/* Wax Seal & Signature Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Cute Wax Seal SVG */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="42" height="42" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="#A83226" />
            <circle cx="50" cy="50" r="32" fill="#8C251C" />
            <path d="M50 36 C45 28, 30 32, 35 45 C40 55, 50 64, 50 64 C50 64, 60 55, 65 45 C70 32, 55 28, 50 36 Z" fill="#ECA6B8" />
          </svg>
          <span style={{ fontSize: '0.78rem', color: '#886B58', fontStyle: 'italic' }}>
            Ấn tín yêu thương
          </span>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8rem', color: '#886B58' }}>Ký tên:</div>
          <div
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#8C3825'
            }}
          >
            {card.senderName || 'Người viết thư'}
          </div>
        </div>
      </div>
    </div>
  );
};
