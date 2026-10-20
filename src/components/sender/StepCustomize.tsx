import React from 'react';
import type { CardData, TemplateId } from '../../types/card';
import { TEMPLATES } from '../../data/templates';
import { CardRenderer } from '../cards/CardRenderer';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';

interface Props {
  card: CardData;
  onSelectTemplate: (templateId: TemplateId) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepCustomize: React.FC<Props> = ({
  card,
  onSelectTemplate,
  onNext,
  onBack
}) => {
  return (
    <div style={{ maxWidth: '880px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.75rem',
            color: '#473034',
            marginBottom: 8
          }}
        >
          Bước 4: Chọn phong cách thiết kế thiệp
        </h2>
        <p style={{ color: '#8F7277', fontSize: '0.95rem' }}>
          18 Mẫu thiệp được thiết kế tỉ mỉ với họa tiết, bố cục và kiểu chữ hoàn toàn riêng biệt.
        </p>
      </div>

      {/* 8 Templates Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '14px',
          marginBottom: '32px'
        }}
      >
        {TEMPLATES.map((tpl) => {
          const isSelected = card.templateId === tpl.id;

          return (
            <div
              key={tpl.id}
              onClick={() => onSelectTemplate(tpl.id)}
              style={{
                position: 'relative',
                padding: '16px 14px',
                borderRadius: '16px',
                background: isSelected ? '#FFFFFF' : 'rgba(255, 254, 252, 0.75)',
                border: isSelected ? `2.5px solid ${tpl.primaryColor}` : '1.5px solid rgba(236, 166, 184, 0.45)',
                boxShadow: isSelected ? `0 8px 24px rgba(200, 94, 124, 0.2)` : 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      background: tpl.backgroundColor,
                      color: tpl.primaryColor,
                      border: `1px solid ${tpl.primaryColor}40`
                    }}
                  >
                    {tpl.badge}
                  </span>

                  {isSelected && (
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: tpl.primaryColor,
                        color: '#FFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                  )}
                </div>

                {/* Name & Tagline */}
                <h4
                  style={{
                    fontSize: '1.05rem',
                    color: '#473034',
                    fontFamily: tpl.fontFamily.includes('Playfair') ? "'Playfair Display', serif" : "'Be Vietnam Pro', sans-serif",
                    fontWeight: 600,
                    marginBottom: 4
                  }}
                >
                  {tpl.name}
                </h4>

                <div
                  style={{
                    fontSize: '0.78rem',
                    color: tpl.primaryColor,
                    fontWeight: 500,
                    marginBottom: 6
                  }}
                >
                  {tpl.tagline}
                </div>

                <p
                  style={{
                    fontSize: '0.76rem',
                    color: '#8F7277',
                    lineHeight: 1.4,
                    margin: 0
                  }}
                >
                  {tpl.description}
                </p>
              </div>

              {/* Color swatch hint */}
              <div
                style={{
                  marginTop: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: tpl.primaryColor
                  }}
                />
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: tpl.backgroundColor,
                    border: '1px solid #ECA6B8'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Preview Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '26px 20px',
          marginBottom: '32px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Sparkles size={18} color="#C85E7C" />
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.2rem',
                color: '#473034',
                margin: 0
              }}
            >
              Bản xem trước trực tiếp
            </h3>
          </div>
          <span style={{ fontSize: '0.82rem', color: '#8F7277' }}>
            Thiệp đang áp dụng mẫu: <strong>{TEMPLATES.find((t) => t.id === card.templateId)?.name}</strong>
          </span>
        </div>

        <CardRenderer card={card} />
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onBack} className="btn btn-secondary">
          <ArrowLeft size={18} />
          <span>Quay lại: Lời chúc</span>
        </button>

        <button onClick={onNext} className="btn btn-primary btn-lg">
          <span>Tiếp tục: Xem trước & Hoàn tất</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
