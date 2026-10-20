import React, { useRef, useState, useMemo } from 'react';
import type { CardData } from '../../types/card';
import { CardRenderer } from '../cards/CardRenderer';
import { createShareableUrl } from '../../utils/cardCodec';
import { exportCardAsPng } from '../../utils/exportCard';
import { Copy, Check, Download, Share2, ExternalLink, RotateCcw, Heart } from 'lucide-react';

interface Props {
  card: CardData;
  onPreviewAsRecipient: () => void;
  onCreateNewCard: () => void;
  onShowToast: (message: string) => void;
}

export const StepShare: React.FC<Props> = ({
  card,
  onPreviewAsRecipient,
  onCreateNewCard,
  onShowToast
}) => {
  const cardElementRef = useRef<HTMLDivElement>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedWish, setCopiedWish] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Generate URL
  const shareableUrl = useMemo(() => {
    return createShareableUrl(card);
  }, [card]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareableUrl);
      setCopiedLink(true);
      onShowToast('Đã sao chép link thiệp vào khay nhớ tạm ♡');
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      onShowToast('Không thể sao chép tự động. Vui lòng chọn và sao chép thủ công từ ô bên dưới.');
    }
  };

  const handleCopyWish = async () => {
    try {
      const fullText = `${card.title}\n\n${card.message}${
        card.optionalNote ? `\n\nP.S: ${card.optionalNote}` : ''
      }${card.senderName ? `\n\n— ${card.senderName}` : ''}`;
      await navigator.clipboard.writeText(fullText);
      setCopiedWish(true);
      onShowToast('Đã sao chép nội dung lời chúc ♡');
      setTimeout(() => setCopiedWish(false), 2500);
    } catch {
      onShowToast('Không thể sao chép văn bản');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: card.title,
          text: `Một món quà nhỏ dành tặng ${card.recipientName || 'bạn'}: "${card.title}"`,
          url: shareableUrl
        });
        onShowToast('Đã mở hộp thoại chia sẻ ♡');
      } catch {
        // User cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  const handleDownloadPng = async () => {
    if (!cardElementRef.current || isExporting) return;
    setIsExporting(true);
    onShowToast('Đang tạo ảnh độ phân giải cao...');

    const result = await exportCardAsPng(cardElementRef.current, {
      fileName: `thiep-${card.recipientName || 'tang-ban'}`
    });

    setIsExporting(false);
    if (result.success) {
      onShowToast('Tải thiệp PNG thành công ♡');
    } else {
      onShowToast(result.error || 'Lỗi khi tải ảnh thiệp');
    }
  };

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      {/* Celebration Header */}
      <div style={{ textAlign: 'center', marginBottom: 26 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #F6DDE5, #ECA6B8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 6px 20px rgba(200, 94, 124, 0.25)'
          }}
        >
          <Heart size={28} color="#C85E7C" fill="#C85E7C" />
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.9rem',
            color: '#473034',
            marginBottom: 8
          }}
        >
          Tấm thiệp của bạn đã sẵn sàng trao đi!
        </h2>
        <p style={{ color: '#8F7277', fontSize: '0.98rem' }}>
          Đường link bên dưới chứa toàn bộ dữ liệu tấm thiệp. Người nhận khi mở link sẽ trải nghiệm cảm giác mở phong bì bất ngờ!
        </p>
      </div>

      {/* Share Link Box */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 20px',
          marginBottom: '28px'
        }}
      >
        <label className="form-label" style={{ fontSize: '0.95rem' }}>
          Đường link thiệp cá nhân hóa của bạn:
        </label>

        <div
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            marginBottom: 16
          }}
        >
          <input
            type="text"
            readOnly
            value={shareableUrl}
            onClick={(e) => (e.target as HTMLInputElement).select()}
            className="input"
            style={{
              flex: 1,
              minWidth: '240px',
              background: '#FFF',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: '#684B50'
            }}
          />

          <button
            onClick={handleCopyLink}
            className="btn btn-primary"
            style={{ flexShrink: 0 }}
          >
            {copiedLink ? <Check size={18} /> : <Copy size={18} />}
            <span>{copiedLink ? 'Đã sao chép!' : 'Sao chép link'}</span>
          </button>
        </div>

        {/* Quick action buttons row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center'
          }}
        >
          <button onClick={handleShare} className="btn btn-secondary btn-sm">
            <Share2 size={16} />
            <span>Chia sẻ qua Zalo / Messenger / Tin nhắn</span>
          </button>

          <button onClick={handleDownloadPng} disabled={isExporting} className="btn btn-secondary btn-sm">
            <Download size={16} />
            <span>{isExporting ? 'Đang xuất...' : 'Tải thiệp PNG'}</span>
          </button>

          <button onClick={handleCopyWish} className="btn btn-secondary btn-sm">
            {copiedWish ? <Check size={16} color="#67A678" /> : <Copy size={16} />}
            <span>{copiedWish ? 'Đã sao chép lời chúc' : 'Sao chép lời chúc'}</span>
          </button>

          <button onClick={onPreviewAsRecipient} className="btn btn-secondary btn-sm" style={{ color: '#A84260' }}>
            <ExternalLink size={16} />
            <span>Xem thử với tư cách người nhận</span>
          </button>
        </div>
      </div>

      {/* Render Card with Ref for PNG export & visual confirmation */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 16px',
          marginBottom: '32px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 12, fontSize: '0.85rem', color: '#8F7277' }}>
          Hình ảnh thiệp hoàn thiện
        </div>
        <CardRenderer card={card} cardRef={cardElementRef} />
      </div>

      {/* Footer Create New Action */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16
        }}
      >
        <button
          onClick={() => {
            if (window.confirm('Bạn có chắc muốn tạo một tấm thiệp mới? Bản nháp hiện tại sẽ được làm mới.')) {
              onCreateNewCard();
            }
          }}
          className="btn btn-secondary"
        >
          <RotateCcw size={16} />
          <span>Tạo một tấm thiệp mới</span>
        </button>
      </div>
    </div>
  );
};
