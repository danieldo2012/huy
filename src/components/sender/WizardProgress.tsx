import React from 'react';
import { Calendar, User, MessageSquareHeart, Palette, Eye, Share2 } from 'lucide-react';

interface Props {
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const STEPS = [
  { index: 0, label: 'Chọn dịp', icon: Calendar },
  { index: 1, label: 'Người nhận', icon: User },
  { index: 2, label: 'Lời chúc', icon: MessageSquareHeart },
  { index: 3, label: 'Thiết kế', icon: Palette },
  { index: 4, label: 'Xem trước', icon: Eye },
  { index: 5, label: 'Chia sẻ', icon: Share2 }
];

export const WizardProgress: React.FC<Props> = ({ currentStep, onStepClick }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '780px',
        margin: '0 auto 28px',
        padding: '12px 16px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        {/* Background Connecting Bar */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            height: '3px',
            background: 'rgba(236, 166, 184, 0.4)',
            zIndex: 1
          }}
        />

        {/* Active Progress Bar */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: `${(currentStep / (STEPS.length - 1)) * 92}%`,
            height: '3px',
            background: 'linear-gradient(90deg, #ECA6B8, #C85E7C)',
            zIndex: 2,
            transition: 'width 0.35s ease'
          }}
        />

        {STEPS.map((step) => {
          const Icon = step.icon;
          const isCompleted = step.index < currentStep;
          const isActive = step.index === currentStep;

          return (
            <button
              key={step.index}
              onClick={() => onStepClick(step.index)}
              style={{
                position: 'relative',
                zIndex: 3,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                padding: 0
              }}
              title={step.label}
              aria-label={`Bước ${step.index + 1}: ${step.label}`}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isActive
                    ? '#C85E7C'
                    : isCompleted
                    ? '#ECA6B8'
                    : '#FFF8F2',
                  color: isActive || isCompleted ? '#FFF' : '#8F7277',
                  border: isActive
                    ? '3px solid #FFF'
                    : isCompleted
                    ? '2px solid #FFF'
                    : '2px solid rgba(236, 166, 184, 0.6)',
                  boxShadow: isActive
                    ? '0 4px 14px rgba(200, 94, 124, 0.35)'
                    : '0 2px 6px rgba(104, 75, 80, 0.08)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Icon size={18} />
              </div>

              <span
                className="step-label"
                style={{
                  fontSize: '0.78rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#C85E7C' : '#8F7277',
                  whiteSpace: 'nowrap'
                }}
              >
                {step.label}
              </span>
            </button>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 580px) {
          .step-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
