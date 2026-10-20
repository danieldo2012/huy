import React, { useState } from 'react';
import type { CardData, TemplateId } from '../../types/card';
import { TEMPLATES } from '../../data/templates';
import { CardRenderer } from '../cards/CardRenderer';
import { ClosedEnvelope } from '../recipient/ClosedEnvelope';
import { OpeningSequence } from '../recipient/OpeningSequence';
import { ArrowLeft, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface Props {
  card: CardData;
  onSelectTemplate: (templateId: TemplateId) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepPreview: React.FC<Props> = ({
  card,
  onSelectTemplate,
  onNext,
  onBack
}) => {
  const [testMode, setTestMode] = useState<'card' | 'envelope' | 'opening'>('card');

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.75rem',
            color: '#473034',
            marginBottom: 8
          }}
        >
          Bước 5: Xem trước sản phẩm hoàn chỉnh
        </h2>
        <p style={{ color: '#8F7277', fontSize: '0.95rem' }}>
          Kiểm tra kỹ lưỡng nội dung và thử trải nghiệm mở phong bì mà người nhận sẽ nhìn thấy.
        </p>

        {/* Preview View Mode Tabs */}
        <div
          style={{
            display: 'inline-flex',
            background: 'rgba(236, 166, 184, 0.25)',
            padding: '4px',
            borderRadius: '999px',
            marginTop: '12px'
          }}
        >
          <button
            type="button"
            onClick={() => setTestMode('card')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 18px',
              borderRadius: '999px',
              border: 'none',
              background: testMode === 'card' ? '#FFFFFF' : 'transparent',
              color: testMode === 'card' ? '#C85E7C' : '#684B50',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            <Eye size={15} />
            <span>Xem trực tiếp tấm thiệp</span>
          </button>

          <button
            type="button"
            onClick={() => setTestMode('envelope')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 18px',
              borderRadius: '999px',
              border: 'none',
              background: testMode !== 'card' ? '#FFFFFF' : 'transparent',
              color: testMode !== 'card' ? '#C85E7C' : '#684B50',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            <Sparkles size={15} />
            <span>Thử mở phong bì người nhận</span>
          </button>
        </div>
      </div>

      {/* Quick Template Switcher Pills */}
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: 8,
          paddingBottom: 14,
          marginBottom: 20,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {TEMPLATES.map((tpl) => {
          const isSelected = card.templateId === tpl.id;
          return (
            <button
              key={tpl.id}
              onClick={() => onSelectTemplate(tpl.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.82rem',
                border: isSelected ? `2px solid ${tpl.primaryColor}` : '1px solid rgba(236, 166, 184, 0.5)',
                background: isSelected ? tpl.backgroundColor : '#FFF',
                color: isSelected ? tpl.primaryColor : '#684B50',
                fontWeight: isSelected ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {tpl.name}
            </button>
          );
        })}
      </div>

      {/* Main Preview Container */}
      <div
        className="glass-panel"
        style={{
          padding: '30px 16px',
          marginBottom: '32px',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        {testMode === 'card' && <CardRenderer card={card} />}

        {testMode === 'envelope' && (
          <ClosedEnvelope
            recipientName={card.recipientName}
            senderName={card.senderName}
            isOpening={false}
            onOpen={() => setTestMode('opening')}
          />
        )}

        {testMode === 'opening' && (
          <OpeningSequence
            onComplete={() => setTestMode('card')}
            onSkip={() => setTestMode('card')}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onBack} className="btn btn-secondary">
          <ArrowLeft size={18} />
          <span>Quay lại: Thiết kế</span>
        </button>

        <button onClick={onNext} className="btn btn-primary btn-lg">
          <span>Hoàn tất & Nhận đường link chia sẻ</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
