import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface Props {
  recipientName?: string;
  senderName?: string;
  onOpen: () => void;
  isOpening: boolean;
}

export const ClosedEnvelope: React.FC<Props> = ({ recipientName, onOpen, isOpening }) => {
  return (
    <div
      className="closed-envelope-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        maxWidth: '560px',
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
      {/* Intro Subtitle */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 18px',
          borderRadius: '999px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid #F3BAC9',
          boxShadow: '0 4px 12px rgba(200, 94, 124, 0.1)',
          marginBottom: 16
        }}
      >
        <Sparkles size={14} color="#C85E7C" />
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: '#C85E7C',
            textTransform: 'uppercase'
          }}
        >
          A Little Surprise For You
        </span>
      </div>

      {/* Main Teaser Heading */}
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.7rem, 4vw, 2.3rem)',
          fontWeight: 700,
          color: '#473034',
          lineHeight: 1.3,
          marginBottom: 10
        }}
      >
        Có một món quà nhỏ dành riêng cho bạn ♡
      </h1>

      <p
        style={{
          fontSize: '1.02rem',
          color: '#7D5C62',
          maxWidth: '440px',
          marginBottom: 32,
          lineHeight: 1.6
        }}
      >
        {recipientName ? (
          <span>
            Ai đó đã gửi một chút yêu thương đến <strong style={{ color: '#C85E7C' }}>{recipientName}</strong>.
          </span>
        ) : (
          <span>Ai đó đã gửi đến bạn một chút yêu thương và những lời chúc bình an nhất.</span>
        )}
      </p>

      {/* 3D Realistic Envelope */}
      <div
        className={`envelope-box ${isOpening ? 'anim-opening' : 'anim-floating'}`}
        style={{
          position: 'relative',
          width: '320px',
          height: '210px',
          background: 'linear-gradient(135deg, #FDE6EC 0%, #F5CAD5 100%)',
          borderRadius: '16px',
          boxShadow: '0 24px 50px rgba(104, 75, 80, 0.22), 0 4px 12px rgba(200, 94, 124, 0.15)',
          perspective: '1000px',
          marginBottom: 36,
          cursor: isOpening ? 'default' : 'pointer',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease'
        }}
        onClick={!isOpening ? onOpen : undefined}
      >
        {/* Envelope Inside Shadow Pocket */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '16px',
            background: 'linear-gradient(180deg, #E6BAC6 0%, #ECC5CF 100%)',
            overflow: 'hidden'
          }}
        />

        {/* Peeking Letter Paper Sheet inside */}
        <div
          className="letter-peek"
          style={{
            position: 'absolute',
            top: '25px',
            left: '20px',
            right: '20px',
            height: '150px',
            background: '#FFFFFF',
            borderRadius: '8px 8px 4px 4px',
            boxShadow: '0 -2px 10px rgba(104, 75, 80, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '16px',
            border: '1px solid #F3BAC9',
            boxSizing: 'border-box'
          }}
        >
          {/* Subtle text lines on paper */}
          <div style={{ width: '40px', height: '3px', background: '#ECA6B8', borderRadius: '4px', marginBottom: '8px' }} />
          <div style={{ width: '120px', height: '2px', background: '#F6DDE5', borderRadius: '4px', marginBottom: '6px' }} />
          <div style={{ width: '90px', height: '2px', background: '#F6DDE5', borderRadius: '4px' }} />
          <Heart size={16} color="#ECA6B8" fill="#FCE4EC" style={{ marginTop: '14px' }} />
        </div>

        {/* Envelope Left & Right folds */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '105px 0 105px 160px',
            borderColor: 'transparent transparent transparent #F9D0DC',
            borderRadius: '0 0 0 16px',
            zIndex: 4,
            filter: 'drop-shadow(2px 0 4px rgba(104, 75, 80, 0.05))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '105px 160px 105px 0',
            borderColor: 'transparent #F6C8D5 transparent transparent',
            borderRadius: '0 0 16px 0',
            zIndex: 4,
            filter: 'drop-shadow(-2px 0 4px rgba(104, 75, 80, 0.05))'
          }}
        />

        {/* Envelope Bottom Triangle Fold */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '0 160px 115px 160px',
            borderColor: 'transparent transparent #F3BAC9 transparent',
            borderRadius: '0 0 16px 16px',
            zIndex: 5,
            filter: 'drop-shadow(0 -3px 8px rgba(104, 75, 80, 0.08))'
          }}
        />

        {/* Envelope Flap with Wax Seal */}
        <div
          className="envelope-flap"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '120px 160px 0 160px',
            borderColor: '#F9D5DF transparent transparent transparent',
            borderRadius: '16px 16px 0 0',
            zIndex: 6,
            transformOrigin: 'top center',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: 'drop-shadow(0 4px 10px rgba(104, 75, 80, 0.12))'
          }}
        />

        {/* Wax Seal Center Badge */}
        <div
          className="wax-seal"
          style={{
            position: 'absolute',
            top: '95px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 8,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #D95D7E 0%, #A83654 100%)',
            boxShadow: '0 4px 14px rgba(168, 54, 84, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.4)'
          }}
        >
          <Heart size={20} color="#FFF" fill="#FFF" />
        </div>
      </div>

      {/* Main Interactive Button */}
      <button
        onClick={onOpen}
        disabled={isOpening}
        className="btn btn-primary btn-lg"
        style={{
          minWidth: '220px',
          padding: '16px 40px',
          fontSize: '1.12rem',
          cursor: isOpening ? 'wait' : 'pointer'
        }}
      >
        <Sparkles size={20} />
        <span>{isOpening ? 'Đang mở món quà...' : 'Mở món quà ♡'}</span>
      </button>

      {/* Sincere Subtext */}
      <div
        style={{
          marginTop: 18,
          fontSize: '0.88rem',
          color: '#8F7277',
          fontStyle: 'italic'
        }}
      >
        Gửi bằng cả sự chân thành.
      </div>

      {/* CSS for Envelope shake and float */}
      <style>{`
        .anim-floating {
          animation: floatGentle 4s ease-in-out infinite;
        }
        .anim-floating:hover {
          transform: translateY(-4px) scale(1.02);
        }
        .anim-opening {
          animation: envelopeShake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};
