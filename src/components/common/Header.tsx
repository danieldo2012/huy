import React, { useState } from 'react';
import { Sparkles, Heart, Menu, X, Volume2, VolumeX } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, playSoftPop } from '../../utils/sound';

interface Props {
  currentView: 'home' | 'create' | 'gallery';
  onNavigate: (view: 'home' | 'create' | 'gallery') => void;
}

export const Header: React.FC<Props> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) {
      playSoftPop();
    }
  };

  const handleNav = (view: 'home' | 'create' | 'gallery') => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="site-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 254, 252, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(236, 166, 184, 0.35)',
        boxShadow: '0 4px 20px rgba(104, 75, 80, 0.04)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px'
        }}
      >
        {/* Logo and Brand Title */}
        <button
          onClick={() => handleNav('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            textAlign: 'left'
          }}
          aria-label="Về trang chủ"
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F6DDE5 0%, #ECA6B8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(200, 94, 124, 0.25)',
              border: '2px solid #FFF'
            }}
          >
            <Heart size={22} color="#C85E7C" fill="#C85E7C" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#473034',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              Gửi Một Chút Thương
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                color: '#8F7277',
                fontFamily: "'Be Vietnam Pro', sans-serif"
              }}
            >
              Có những điều dễ thương, nên được nói ra
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24
          }}
          className="desktop-nav"
        >
          <button
            onClick={() => handleNav('home')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.92rem',
              fontWeight: currentView === 'home' ? 600 : 500,
              color: currentView === 'home' ? '#C85E7C' : '#684B50',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '999px',
              transition: 'all 0.2s',
              borderBottom: currentView === 'home' ? '2px solid #C85E7C' : '2px solid transparent'
            }}
          >
            Trang chủ
          </button>

          <button
            onClick={() => handleNav('create')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.92rem',
              fontWeight: currentView === 'create' ? 600 : 500,
              color: currentView === 'create' ? '#C85E7C' : '#684B50',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '999px',
              transition: 'all 0.2s',
              borderBottom: currentView === 'create' ? '2px solid #C85E7C' : '2px solid transparent'
            }}
          >
            Tạo thiệp
          </button>

          <button
            onClick={() => handleNav('gallery')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.92rem',
              fontWeight: currentView === 'gallery' ? 600 : 500,
              color: currentView === 'gallery' ? '#C85E7C' : '#684B50',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '999px',
              transition: 'all 0.2s',
              borderBottom: currentView === 'gallery' ? '2px solid #C85E7C' : '2px solid transparent'
            }}
          >
            Bộ sưu tập mẫu
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="btn-ghost"
            style={{
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(236, 166, 184, 0.4)',
              cursor: 'pointer'
            }}
            title={soundOn ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng'}
            aria-label="Âm thanh hiệu ứng"
          >
            {soundOn ? <Volume2 size={18} color="#C85E7C" /> : <VolumeX size={18} color="#8F7277" />}
          </button>

          {/* Primary CTA button */}
          <button
            onClick={() => handleNav('create')}
            className="btn btn-primary btn-sm"
          >
            <Sparkles size={16} />
            <span>Tạo thiệp ngay</span>
          </button>
        </nav>

        {/* Mobile menu hamburger button */}
        <div style={{ display: 'none' }} className="mobile-menu-btn">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: 8,
              cursor: 'pointer',
              color: '#473034'
            }}
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--color-white-ivory)',
            borderBottom: '1px solid rgba(236, 166, 184, 0.4)',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}
        >
          <button
            onClick={() => handleNav('home')}
            className="btn btn-ghost"
            style={{ justifyContent: 'flex-start', width: '100%' }}
          >
            Trang chủ
          </button>
          <button
            onClick={() => handleNav('create')}
            className="btn btn-ghost"
            style={{ justifyContent: 'flex-start', width: '100%' }}
          >
            Tạo thiệp
          </button>
          <button
            onClick={() => handleNav('gallery')}
            className="btn btn-ghost"
            style={{ justifyContent: 'flex-start', width: '100%' }}
          >
            Bộ sưu tập mẫu
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid #F6DDE5' }}>
            <span style={{ fontSize: '0.9rem', color: '#684B50' }}>Âm thanh hiệu ứng</span>
            <button
              onClick={toggleSound}
              className="btn btn-secondary btn-sm"
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span>{soundOn ? 'Đang bật' : 'Đang tắt'}</span>
            </button>
          </div>

          <button
            onClick={() => handleNav('create')}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: 6 }}
          >
            <Sparkles size={18} />
            <span>Tạo thiệp ngay</span>
          </button>
        </div>
      )}

      {/* Responsive media query styling */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
