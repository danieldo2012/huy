import React, { useRef, useState } from 'react';
import { Download, Copy, Share2, Sparkles, Check, Heart } from 'lucide-react';
import type { CardData } from '../../types/card';
import { CardRenderer } from '../cards/CardRenderer';
import { exportCardAsPng } from '../../utils/exportCard';

interface Props {
  card: CardData;
  onSendOwnCard: () => void;
  onShowToast: (message: string) => void;
}

export const OpenedCardView: React.FC<Props> = ({ card, onSendOwnCard, onShowToast }) => {
  const cardElementRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [copiedWish, setCopiedWish] = useState(false);

  const handleDownloadPng = async () => {
    if (!cardElementRef.current || isExporting) return;
    setIsExporting(true);
    onShowToast('Đang chuẩn bị hình ảnh thiệp...');

    const result = await exportCardAsPng(cardElementRef.current, {
      fileName: `thiep-${card.recipientName || 'tang-ban'}`
    });

    setIsExporting(false);
    if (result.success) {
      onShowToast('Đã tải thiệp về máy thành công ♡');
    } else {
      onShowToast(result.error || 'Lỗi khi xuất ảnh thiệp');
    }
  };

  const handleCopyWish = async () => {
    try {
      const fullWishText = `${card.title}\n\n${card.message}${
        card.optionalNote ? `\n\nP.S: ${card.optionalNote}` : ''
      }${card.senderName ? `\n\n— ${card.senderName}` : ''}`;

      await navigator.clipboard.writeText(fullWishText);
      setCopiedWish(true);
      onShowToast('Đã sao chép lời chúc vào khay nhớ tạm ♡');
      setTimeout(() => setCopiedWish(false), 2500);
    } catch {
      onShowToast('Không thể sao chép tự động. Vui lòng chọn và sao chép thủ công.');
    }
  };

  const handleShare = async () => {
    const currentUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: card.title,
          text: `Ai đó đã gửi một tấm thiệp yêu thương: "${card.title}"`,
          url: currentUrl
        });
        onShowToast('Đã mở hộp thoại chia sẻ ♡');
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback copy current link
      try {
        await navigator.clipboard.writeText(currentUrl);
        onShowToast('Đã sao chép đường link thiệp ♡');
      } catch {
        onShowToast('Vui lòng sao chép đường link trên thanh địa chỉ.');
      }
    }
  };

  return (
    <div
      className="opened-card-view"
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        padding: '20px 16px',
        animation: 'cardUnfoldReveal 0.6s var(--ease-spring)'
      }}
    >
      {/* Top Banner Dedicated to Recipient */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 20
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 20px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1.5px solid #F3BAC9',
            boxShadow: '0 4px 16px rgba(200, 94, 124, 0.12)',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#A84260'
          }}
        >
          <Heart size={14} fill="#C85E7C" color="#C85E7C" />
          <span>Tấm thiệp dành riêng cho {card.recipientName || 'bạn'}</span>
          <Heart size={14} fill="#C85E7C" color="#C85E7C" />
        </span>
      </div>

      {/* Render the actual customized card */}
      <div style={{ marginBottom: 32 }}>
        <CardRenderer card={card} cardRef={cardElementRef} />
      </div>

      {/* Recipient Action Controls (ONLY meaningful recipient actions) */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          borderRadius: '24px',
          textAlign: 'center'
        }}
      >
        <h4
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.15rem',
            color: '#473034',
            marginBottom: 16
          }}
        >
          Lưu Giữ & Lan Tỏa Yêu Thương
        </h4>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 20
          }}
        >
          <button
            onClick={handleDownloadPng}
            disabled={isExporting}
            className="btn btn-primary"
            style={{ minWidth: '160px' }}
          >
            <Download size={18} />
            <span>{isExporting ? 'Đang xuất ảnh...' : 'Tải thiệp PNG'}</span>
          </button>

          <button
            onClick={handleCopyWish}
            className="btn btn-secondary"
            style={{ minWidth: '160px' }}
          >
            {copiedWish ? <Check size={18} color="#67A678" /> : <Copy size={18} />}
            <span>{copiedWish ? 'Đã sao chép!' : 'Sao chép lời chúc'}</span>
          </button>

          <button
            onClick={handleShare}
            className="btn btn-secondary"
            style={{ minWidth: '140px' }}
          >
            <Share2 size={18} />
            <span>Chia sẻ thiệp</span>
          </button>
        </div>

        {/* Action to create own card */}
        <div
          style={{
            borderTop: '1px solid rgba(236, 166, 184, 0.4)',
            paddingTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10
          }}
        >
          <span style={{ fontSize: '0.92rem', color: '#684B50' }}>
            Bạn cũng muốn gửi một lời chúc ngọt ngào đến người đặc biệt của mình?
          </span>
          <button
            onClick={onSendOwnCard}
            className="btn btn-primary btn-sm"
            style={{
              background: 'linear-gradient(135deg, #A84260, #C85E7C)'
            }}
          >
            <Sparkles size={16} />
            <span>Gửi một lời chúc của riêng bạn ♡</span>
          </button>
        </div>
      </div>
    </div>
  );
};
