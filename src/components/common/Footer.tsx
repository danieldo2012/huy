import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface Props {
  onNavigate: (view: 'home' | 'create' | 'gallery') => void;
  onSelectEvent?: (eventId: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, rgba(255, 248, 242, 0) 0%, #FDF1F4 60%, #FCE8EE 100%)',
        borderTop: '1px solid rgba(236, 166, 184, 0.4)',
        padding: '50px 0 32px',
        marginTop: '80px',
        color: '#684B50'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '36px',
            marginBottom: '40px'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F6DDE5, #ECA6B8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Heart size={18} color="#C85E7C" fill="#C85E7C" />
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#473034'
                }}
              >
                Gửi Một Chút Thương
              </span>
            </div>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#8F7277',
                lineHeight: 1.7,
                marginBottom: 16
              }}
            >
              “Có những điều dễ thương, nên được nói ra.” Nơi giúp bạn gửi trọn tấm lòng, sự dịu dàng và lời chúc ý nghĩa đến những người phụ nữ yêu thương.
            </p>
            <div className="badge">
              <Sparkles size={13} />
              <span>Miễn phí 100% • Không cần đăng ký tài khoản</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.05rem',
                marginBottom: 16,
                color: '#473034'
              }}
            >
              Khám Phá
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  style={{ background: 'none', border: 'none', color: '#684B50', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('create')}
                  style={{ background: 'none', border: 'none', color: '#684B50', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
                >
                  Tạo thiệp chúc mừng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  style={{ background: 'none', border: 'none', color: '#684B50', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
                >
                  18 Mẫu thiệp nghệ thuật
                </button>
              </li>
            </ul>
          </div>

          {/* Occasions */}
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.05rem',
                marginBottom: 16,
                color: '#473034'
              }}
            >
              Dịp Đặc Biệt
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['8/3 Quốc tế Phụ nữ', '20/10 Phụ nữ Việt Nam', 'Ngày của Mẹ', 'Sinh nhật', 'Kỷ niệm yêu thương'].map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.82rem',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid #F3BAC9',
                    color: '#684B50'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid rgba(236, 166, 184, 0.3)',
            paddingTop: 24,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            fontSize: '0.85rem',
            color: '#8F7277'
          }}
        >
          <div>
            © {CURRENT_YEAR} Gửi Một Chút Thương. Toàn bộ thiệp được lưu trữ trực tiếp trên URL chia sẻ.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span>Made with love</span>
            <Heart size={14} color="#C85E7C" fill="#C85E7C" />
            <span>for wonderful souls</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
