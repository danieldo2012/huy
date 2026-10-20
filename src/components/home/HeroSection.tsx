import React from 'react';
import { Sparkles, Heart, ArrowRight, Palette } from 'lucide-react';

interface Props {
  onStartCreating: () => void;
  onExploreTemplates: () => void;
}

export const HeroSection: React.FC<Props> = ({ onStartCreating, onExploreTemplates }) => {
  return (
    <section
      style={{
        position: 'relative',
        padding: '60px 0 50px',
        overflow: 'hidden'
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Headline and CTAs */}
        <div>
          {/* Subtle Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1.5px solid #F3BAC9',
              boxShadow: '0 4px 14px rgba(200, 94, 124, 0.12)',
              marginBottom: 20
            }}
          >
            <Sparkles size={16} color="#C85E7C" />
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#C85E7C',
                letterSpacing: '0.04em'
              }}
            >
              Thiệp Điện Tử Phong Bì Tương Tác
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
              fontWeight: 700,
              color: '#473034',
              lineHeight: 1.2,
              marginBottom: 18,
              letterSpacing: '-0.02em'
            }}
          >
            Gửi một chút thương đến người đặc biệt của bạn.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#7D5C62',
              lineHeight: 1.6,
              marginBottom: 32,
              fontFamily: "'Be Vietnam Pro', sans-serif"
            }}
          >
            Một lời chúc nhỏ, một niềm vui lớn. Tự tay thiết kế những tấm thiệp dịu dàng, giấu trong phong bì bí mật dành tặng Mẹ, Người yêu, Bạn thân và những người phụ nữ bạn trân quý.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 14,
              alignItems: 'center'
            }}
          >
            <button
              onClick={onStartCreating}
              className="btn btn-primary btn-lg"
              style={{ padding: '16px 36px' }}
            >
              <Sparkles size={18} />
              <span>Tạo thiệp ngay</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onExploreTemplates}
              className="btn btn-secondary btn-lg"
              style={{ padding: '16px 28px' }}
            >
              <Palette size={18} />
              <span>Khám phá 8 mẫu thiệp</span>
            </button>
          </div>

          {/* Small feature badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              marginTop: 32,
              fontSize: '0.82rem',
              color: '#8F7277'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Heart size={14} color="#C85E7C" fill="#C85E7C" />
              100% Miễn phí & Riêng tư
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Heart size={14} color="#C85E7C" fill="#C85E7C" />
              Hiệu ứng mở phong bì 3D
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Heart size={14} color="#C85E7C" fill="#C85E7C" />
              Tải ảnh PNG sắc nét
            </span>
          </div>
        </div>

        {/* Right Column: Visual Artwork Showcase */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Soft Glowing Backlight */}
          <div
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(246, 221, 229, 0.8) 0%, rgba(236, 166, 184, 0.2) 70%, transparent 100%)',
              filter: 'blur(30px)',
              zIndex: 1
            }}
          />

          {/* Envelope & Card Mock Art */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: '380px',
              perspective: '1000px'
            }}
          >
            {/* Tilted Card Peeking behind */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '10px',
                width: '260px',
                height: '180px',
                background: 'linear-gradient(135deg, #FFFDF8 0%, #FEF5DF 100%)',
                borderRadius: '16px',
                border: '2px solid #F6DE9E',
                boxShadow: '0 12px 30px rgba(196, 126, 32, 0.15)',
                transform: 'rotate(8deg)',
                padding: '16px',
                boxSizing: 'border-box',
                zIndex: 2
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#B57418', fontWeight: 700 }}>🌻 GỬI NGƯỜI THƯƠNG</div>
              <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.25rem', color: '#553C1A', marginTop: 4 }}>
                Chúc em mãi rạng rỡ như ánh mặt trời...
              </div>
            </div>

            {/* Front Envelope with Wax Seal */}
            <div
              style={{
                position: 'relative',
                width: '320px',
                height: '210px',
                margin: '30px auto 0',
                background: 'linear-gradient(135deg, #FDE6EC 0%, #F5CAD5 100%)',
                borderRadius: '16px',
                boxShadow: '0 24px 50px rgba(104, 75, 80, 0.22)',
                zIndex: 3,
                animation: 'floatGentle 4s ease-in-out infinite'
              }}
            >
              {/* Envelope Flap & Seal */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderWidth: '115px 160px 0 160px',
                  borderColor: '#F9D5DF transparent transparent transparent',
                  borderRadius: '16px 16px 0 0'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '90px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #D95D7E 0%, #A83654 100%)',
                  boxShadow: '0 4px 14px rgba(168, 54, 84, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Heart size={20} color="#FFF" fill="#FFF" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
