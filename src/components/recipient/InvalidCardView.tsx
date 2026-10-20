import React from 'react';
import { HeartCrack, Sparkles, Home } from 'lucide-react';

interface Props {
  errorMsg?: string;
  onGoHome: () => void;
  onCreateNew: () => void;
}

export const InvalidCardView: React.FC<Props> = ({ errorMsg, onGoHome, onCreateNew }) => {
  return (
    <div
      style={{
        maxWidth: '520px',
        margin: '60px auto',
        padding: '36px 24px',
        textAlign: 'center'
      }}
      className="glass-panel"
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'rgba(217, 93, 110, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px'
        }}
      >
        <HeartCrack size={34} color="#D95D6E" />
      </div>

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.6rem',
          color: '#473034',
          marginBottom: 12
        }}
      >
        Không thể mở tấm thiệp này
      </h2>

      <p
        style={{
          fontSize: '0.98rem',
          color: '#7D5C62',
          lineHeight: 1.6,
          marginBottom: 24
        }}
      >
        {errorMsg || 'Đường dẫn thiệp có thể đã bị cắt bớt hoặc không chính xác khi gửi qua ứng dụng nhắn tin.'}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center'
        }}
      >
        <button onClick={onGoHome} className="btn btn-secondary">
          <Home size={18} />
          <span>Về trang chủ</span>
        </button>

        <button onClick={onCreateNew} className="btn btn-primary">
          <Sparkles size={18} />
          <span>Tạo thiệp mới</span>
        </button>
      </div>
    </div>
  );
};
