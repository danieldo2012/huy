import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { playChimeSound, playSoftPop } from '../../utils/sound';

interface Props {
  onComplete: () => void;
  onSkip: () => void;
}

export const OpeningSequence: React.FC<Props> = ({ onComplete, onSkip }) => {
  useEffect(() => {
    // Sound trigger
    playSoftPop();

    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    // Schedule confetti & chime midway through opening
    const confettiTimer = setTimeout(() => {
      playChimeSound();
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F6DDE5', '#ECA6B8', '#C85E7C', '#FBE4A0', '#FFF']
        });
      } catch {
        // Safe fallback if canvas not available
      }
    }, 700);

    // Transition to opened state
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 16px',
        maxWidth: '560px',
        margin: '0 auto',
        textAlign: 'center',
        minHeight: '450px'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '320px',
          height: '240px',
          perspective: '1000px',
          margin: '0 auto 30px'
        }}
      >
        {/* Envelope Base Box */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '320px',
            height: '200px',
            background: 'linear-gradient(135deg, #FDE6EC 0%, #F5CAD5 100%)',
            borderRadius: '16px',
            boxShadow: '0 24px 50px rgba(104, 75, 80, 0.22)',
            overflow: 'hidden'
          }}
        >
          {/* Inner shadow */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, #D4A1B0 0%, #ECC5CF 100%)'
            }}
          />

          {/* Unfolding / Sliding Letter Paper */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              right: '20px',
              bottom: '10px',
              height: '260px',
              background: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 -4px 20px rgba(104, 75, 80, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '24px 20px',
              border: '1.5px solid #F3BAC9',
              animation: 'letterSlideUp 1.3s cubic-bezier(0.25, 1, 0.5, 1) forwards',
              zIndex: 10
            }}
          >
            <div
              style={{
                width: '60px',
                height: '4px',
                background: '#C85E7C',
                borderRadius: '4px',
                marginBottom: '12px'
              }}
            />
            <div style={{ width: '80%', height: '3px', background: '#F6DDE5', borderRadius: '4px', marginBottom: '8px' }} />
            <div style={{ width: '65%', height: '3px', background: '#F6DDE5', borderRadius: '4px', marginBottom: '16px' }} />
            <Heart size={24} color="#C85E7C" fill="#FCE4EC" style={{ animation: 'pulseHeart 1s infinite' }} />
            <div style={{ marginTop: '16px', fontSize: '0.85rem', color: '#8F7277', fontStyle: 'italic' }}>
              Món quà đang mở ra...
            </div>
          </div>

          {/* Envelope Left & Right Folds */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '100px 0 100px 160px',
              borderColor: 'transparent transparent transparent #F9D0DC',
              borderRadius: '0 0 0 16px',
              zIndex: 14
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
              borderWidth: '100px 160px 100px 0',
              borderColor: 'transparent #F6C8D5 transparent transparent',
              borderRadius: '0 0 16px 0',
              zIndex: 14
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
              borderWidth: '0 160px 110px 160px',
              borderColor: 'transparent transparent #F3BAC9 transparent',
              borderRadius: '0 0 16px 16px',
              zIndex: 15
            }}
          />
        </div>

        {/* Flap Opening Upwards via 3D RotateX */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '110px 160px 0 160px',
            borderColor: '#F9D5DF transparent transparent transparent',
            borderRadius: '16px 16px 0 0',
            zIndex: 12,
            transformOrigin: 'top center',
            animation: 'flapOpen 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          }}
        />

        {/* Wax seal popping */}
        <div
          style={{
            position: 'absolute',
            top: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #D95D7E 0%, #A83654 100%)',
            animation: 'sealPop 0.5s ease-out forwards',
            zIndex: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Heart size={18} color="#FFF" fill="#FFF" />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: '1rem',
          color: '#C85E7C',
          fontWeight: 600,
          marginBottom: 16
        }}
      >
        <Sparkles size={18} />
        <span>Đang hé lộ lời yêu thương...</span>
      </div>

      {/* Skip button */}
      <button
        onClick={onSkip}
        className="btn btn-ghost btn-sm"
        style={{ color: '#8F7277', textDecoration: 'underline' }}
      >
        Bỏ qua hiệu ứng (Xem ngay)
      </button>
    </div>
  );
};
