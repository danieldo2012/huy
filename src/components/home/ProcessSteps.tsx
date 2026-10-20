import React from 'react';
import { UserCheck, PenLine, Sparkles, Send } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Chọn người nhận',
    desc: 'Lựa chọn dịp lễ và người phụ nữ bạn muốn gửi gắm lời yêu thương.',
    icon: UserCheck
  },
  {
    step: '02',
    title: 'Viết lời chúc',
    desc: 'Chọn từ gợi ý tự động hoặc tự tay chấp bút những tâm tư mộc mạc.',
    icon: PenLine
  },
  {
    step: '03',
    title: 'Trang trí thiệp',
    desc: 'Chọn 1 trong 8 mẫu thiệp nghệ thuật với hoạt họa và họa tiết hoa lá.',
    icon: Sparkles
  },
  {
    step: '04',
    title: 'Gửi yêu thương',
    desc: 'Nhận link phong bì tương tác hoặc tải ảnh PNG để gửi tặng ngay.',
    icon: Send
  }
];

export const ProcessSteps: React.FC = () => {
  return (
    <section style={{ padding: '40px 0 60px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge" style={{ marginBottom: 10 }}>
            Quy trình đơn giản
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              color: '#473034',
              marginBottom: 10
            }}
          >
            Cách trao gửi yêu thương chỉ trong 4 bước
          </h2>
          <p style={{ color: '#8F7277', fontSize: '1rem' }}>
            Không mất thời gian đăng ký, thao tác nhanh chóng và mượt mà trên mọi thiết bị.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}
        >
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px 22px',
                  borderRadius: '20px',
                  position: 'relative',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    right: 18,
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    fontFamily: "'Playfair Display', serif",
                    color: 'rgba(236, 166, 184, 0.4)'
                  }}
                >
                  {s.step}
                </div>

                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F6DDE5, #ECA6B8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    boxShadow: '0 4px 14px rgba(200, 94, 124, 0.2)'
                  }}
                >
                  <Icon size={24} color="#C85E7C" />
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.2rem',
                    color: '#473034',
                    marginBottom: 8
                  }}
                >
                  {s.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#7D5C62', lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
