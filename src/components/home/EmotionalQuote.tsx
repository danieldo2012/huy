import React from 'react';
import { Heart } from 'lucide-react';

export const EmotionalQuote: React.FC = () => {
  return (
    <section style={{ padding: '30px 0 50px' }}>
      <div className="container">
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '40px 30px',
            borderRadius: '26px',
            background: 'linear-gradient(135deg, rgba(255, 245, 248, 0.9) 0%, rgba(254, 232, 239, 0.7) 100%)',
            border: '2px solid rgba(243, 186, 201, 0.6)',
            boxShadow: '0 16px 40px rgba(200, 94, 124, 0.1)',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 4px 12px rgba(200, 94, 124, 0.15)'
            }}
          >
            <Heart size={20} color="#C85E7C" fill="#C85E7C" />
          </div>

          <blockquote
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
              color: '#473034',
              lineHeight: 1.6,
              marginBottom: 16
            }}
          >
            “Có những điều dễ thương, nên được nói ra. Đừng để sự bận rộn cuốn trôi đi những cơ hội gửi gắm một lời cảm ơn, một lời chúc an lành đến những người phụ nữ thầm lặng làm rạng rỡ cuộc đời ta.”
          </blockquote>

          <cite style={{ fontSize: '0.88rem', color: '#8F7277', fontStyle: 'normal' }}>
            — Gửi Một Chút Thương —
          </cite>
        </div>
      </div>
    </section>
  );
};
