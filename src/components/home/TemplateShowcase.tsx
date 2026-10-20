import React from 'react';
import type { TemplateId } from '../../types/card';
import { TEMPLATES } from '../../data/templates';
import { Sparkles } from 'lucide-react';

interface Props {
  onSelectTemplateToCreate: (templateId: TemplateId) => void;
}

export const TemplateShowcase: React.FC<Props> = ({ onSelectTemplateToCreate }) => {
  return (
    <section id="template-gallery-section" style={{ padding: '40px 0 60px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="badge" style={{ marginBottom: 10 }}>
            Bộ sưu tập thiệp nghệ thuật
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              color: '#473034',
              marginBottom: 10
            }}
          >
            8 Mẫu thiệp với phong cách thiết kế thực sự khác nhau
          </h2>
          <p style={{ color: '#8F7277', fontSize: '1rem', maxWidth: '620px', margin: '0 auto' }}>
            Không chỉ đơn giản là đổi màu sắc. Mỗi mẫu sở hữu layout, chất liệu đồ họa, kiểu chữ và linh hồn riêng biệt.
          </p>
        </div>

        {/* Templates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '22px'
          }}
        >
          {TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              className="glass-panel"
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s, box-shadow 0.25s'
              }}
            >
              {/* Visual Preview Header Thumbnail */}
              <div
                style={{
                  height: '140px',
                  background: tpl.backgroundColor,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  borderBottom: `2px dashed ${tpl.primaryColor}30`,
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Pattern Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: `${tpl.primaryColor}15`
                  }}
                />

                <div
                  style={{
                    textAlign: 'center',
                    zIndex: 2
                  }}
                >
                  <div
                    style={{
                      fontFamily: tpl.fontFamily.includes('Playfair')
                        ? "'Playfair Display', serif"
                        : tpl.fontFamily.includes('Caveat')
                        ? "'Caveat', cursive"
                        : "'Dancing Script', cursive",
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: tpl.primaryColor,
                      lineHeight: 1.2
                    }}
                  >
                    {tpl.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#684B50', fontStyle: 'italic', marginTop: 4 }}>
                    {tpl.tagline}
                  </div>
                </div>

                <span
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 12,
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: tpl.primaryColor,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                  }}
                >
                  {tpl.badge}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#684B50',
                    lineHeight: 1.6,
                    marginBottom: 20
                  }}
                >
                  {tpl.description}
                </p>

                <button
                  onClick={() => onSelectTemplateToCreate(tpl.id)}
                  className="btn btn-primary btn-sm"
                  style={{
                    width: '100%',
                    background: `linear-gradient(135deg, ${tpl.primaryColor}, #8A3850)`
                  }}
                >
                  <Sparkles size={15} />
                  <span>Sử dụng mẫu này</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
