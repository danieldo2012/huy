import React, { useState, useEffect, useCallback } from 'react';
import type { CardData, EventId, RecipientType, TemplateId } from './types/card';
import { getCardPayloadFromUrl, decodeCardData } from './utils/cardCodec';
import { saveDraft, loadDraft, clearDraft, hasExistingDraft } from './utils/storage';
import { getDefaultCardTitle } from './utils/wishGenerator';

// Layout & Common
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { BackgroundEffects } from './components/common/BackgroundEffects';

// Home components
import { HeroSection } from './components/home/HeroSection';
import { OccasionGrid } from './components/home/OccasionGrid';
import { TemplateShowcase } from './components/home/TemplateShowcase';
import { ProcessSteps } from './components/home/ProcessSteps';
import { EmotionalQuote } from './components/home/EmotionalQuote';

// Sender Wizard components
import { WizardProgress } from './components/sender/WizardProgress';
import { StepEvent } from './components/sender/StepEvent';
import { StepRecipient } from './components/sender/StepRecipient';
import { StepWishes } from './components/sender/StepWishes';
import { StepCustomize } from './components/sender/StepCustomize';
import { StepPreview } from './components/sender/StepPreview';
import { StepShare } from './components/sender/StepShare';

// Recipient components
import { ClosedEnvelope } from './components/recipient/ClosedEnvelope';
import { OpeningSequence } from './components/recipient/OpeningSequence';
import { OpenedCardView } from './components/recipient/OpenedCardView';
import { InvalidCardView } from './components/recipient/InvalidCardView';

// Default starter card
const INITIAL_CARD: CardData = {
  v: 1,
  eventId: '20-10',
  customEventName: '',
  recipientType: 'mom',
  recipientName: 'Mẹ yêu',
  senderName: '',
  title: 'Thương Chúc 20/10 Rực Rỡ Gửi Mẹ Yêu',
  message: 'Cảm ơn Mẹ vì đã luôn là bến đỗ bình yên nhất che chở cho con trước mọi bão giông. Con chỉ mong Mẹ luôn khỏe mạnh, mỗi ngày trôi qua đều ngập tràn niềm vui và bình an.',
  optionalNote: 'Cả nhà yêu Mẹ rất nhiều!',
  templateId: 'flowers-mom',
  createdAt: new Date().toISOString()
};

export const App: React.FC = () => {
  // Parse initial URL parameters synchronously
  const initialUrlState = () => {
    const payload = getCardPayloadFromUrl();
    if (payload) {
      const decoded = decodeCardData(payload);
      if (decoded.success && decoded.card) {
        return { isRecipient: true, card: decoded.card, error: null };
      }
      return { isRecipient: true, card: null, error: decoded.error || 'Đường dẫn thiệp không hợp lệ' };
    }
    return { isRecipient: false, card: null, error: null };
  };

  const [initial] = useState(initialUrlState);

  // Navigation view: 'home' | 'create' | 'gallery'
  const [currentView, setCurrentView] = useState<'home' | 'create' | 'gallery'>('home');
  const [wizardStep, setWizardStep] = useState<number>(0);

  // Recipient Mode state
  const [isRecipientMode, setIsRecipientMode] = useState<boolean>(initial.isRecipient);
  const [recipientCard, setRecipientCard] = useState<CardData | null>(initial.card);
  const [recipientState, setRecipientState] = useState<'closed' | 'opening' | 'opened'>('closed');
  const [urlError, setUrlError] = useState<string | null>(initial.error);

  // Sender Card Data
  const [cardData, setCardData] = useState<CardData>(INITIAL_CARD);
  const [draftBannerVisible, setDraftBannerVisible] = useState<boolean>(() => {
    return !getCardPayloadFromUrl() && hasExistingDraft();
  });

  // Toast notifications
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  // Sync with URL hash/history changes
  useEffect(() => {
    const handleUrlChange = () => {
      const payload = getCardPayloadFromUrl();
      if (payload) {
        const decoded = decodeCardData(payload);
        if (decoded.success && decoded.card) {
          setRecipientCard(decoded.card);
          setIsRecipientMode(true);
          setRecipientState('closed');
          setUrlError(null);
        } else {
          setUrlError(decoded.error || 'Đường dẫn thiệp không hợp lệ');
          setIsRecipientMode(true);
          setRecipientCard(null);
        }
      } else {
        setIsRecipientMode(false);
        setRecipientCard(null);
        setUrlError(null);
      }
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Auto-save draft on card edits
  useEffect(() => {
    if (!isRecipientMode && currentView === 'create') {
      saveDraft(cardData, wizardStep);
    }
  }, [cardData, wizardStep, isRecipientMode, currentView]);

  // Draft actions
  const handleRestoreDraft = () => {
    const draft = loadDraft();
    if (draft.card) {
      setCardData(draft.card);
      setWizardStep(draft.stepIndex || 0);
      setCurrentView('create');
      showToast('Đã khôi phục bản nháp thiệp của bạn ♡');
    }
    setDraftBannerVisible(false);
  };

  const handleDismissDraft = () => {
    setDraftBannerVisible(false);
  };

  const handleStartFreshCard = () => {
    clearDraft();
    setCardData({
      ...INITIAL_CARD,
      createdAt: new Date().toISOString()
    });
    setWizardStep(0);
    setCurrentView('create');
    setDraftBannerVisible(false);
    showToast('Bắt đầu một tấm thiệp mới ♡');
  };

  // Sender Updates
  const updateEvent = (eventId: EventId) => {
    setCardData((prev) => ({
      ...prev,
      eventId,
      title: getDefaultCardTitle(eventId, prev.recipientType, prev.recipientName)
    }));
  };

  const updateRecipientType = (recipientType: RecipientType) => {
    setCardData((prev) => ({
      ...prev,
      recipientType,
      title: getDefaultCardTitle(prev.eventId, recipientType, prev.recipientName)
    }));
  };

  const updateRecipientName = (recipientName: string) => {
    setCardData((prev) => ({
      ...prev,
      recipientName,
      title: getDefaultCardTitle(prev.eventId, prev.recipientType, recipientName)
    }));
  };

  const updateSenderName = (senderName: string) => {
    setCardData((prev) => ({ ...prev, senderName }));
  };

  const updateTemplate = (templateId: TemplateId) => {
    setCardData((prev) => ({ ...prev, templateId }));
  };

  // Nav helpers
  const handleSelectEventFromHome = (eventId: EventId) => {
    updateEvent(eventId);
    setWizardStep(1); // Proceed to recipient
    setCurrentView('create');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTemplateFromGallery = (templateId: TemplateId) => {
    updateTemplate(templateId);
    setCurrentView('create');
    setWizardStep(2); // Go to wish writing
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Recipient opens card
  const handleOpenGift = () => {
    setRecipientState('opening');
  };

  const handleOpeningFinished = () => {
    setRecipientState('opened');
  };

  // Exit recipient test back to sender
  const handleExitRecipientMode = () => {
    window.location.hash = '';
    setIsRecipientMode(false);
    setRecipientCard(null);
    setCurrentView('create');
    setWizardStep(5);
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Floating Petals & Effects */}
      <BackgroundEffects />

      {/* RECIPIENT EXPERIENCE — COMPLETELY INDEPENDENT ROUTE */}
      {isRecipientMode ? (
        <main style={{ flex: 1, padding: '30px 16px', position: 'relative', zIndex: 1 }}>
          {/* Header Bar for Recipient */}
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.2rem' }}>💌</span>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#473034'
                }}
              >
                Gửi Một Chút Thương
              </span>
            </div>

            {/* If sender is testing their own card, provide an exit button */}
            <button
              onClick={handleExitRecipientMode}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.8rem', color: '#8F7277' }}
            >
              Về trang chủ / Chỉnh sửa
            </button>
          </div>

          {/* Invalid URL case */}
          {urlError && (
            <InvalidCardView
              errorMsg={urlError}
              onGoHome={() => {
                window.location.hash = '';
                setIsRecipientMode(false);
                setCurrentView('home');
              }}
              onCreateNew={() => {
                window.location.hash = '';
                setIsRecipientMode(false);
                handleStartFreshCard();
              }}
            />
          )}

          {/* Valid Card States */}
          {recipientCard && (
            <>
              {recipientState === 'closed' && (
                <ClosedEnvelope
                  recipientName={recipientCard.recipientName}
                  senderName={recipientCard.senderName}
                  isOpening={false}
                  onOpen={handleOpenGift}
                />
              )}

              {recipientState === 'opening' && (
                <OpeningSequence
                  onComplete={handleOpeningFinished}
                  onSkip={handleOpeningFinished}
                />
              )}

              {recipientState === 'opened' && (
                <OpenedCardView
                  card={recipientCard}
                  onSendOwnCard={() => {
                    window.location.hash = '';
                    setIsRecipientMode(false);
                    handleStartFreshCard();
                  }}
                  onShowToast={showToast}
                />
              )}
            </>
          )}
        </main>
      ) : (
        /* SENDER & HOMEPAGE FLOW */
        <>
          <Header
            currentView={currentView}
            onNavigate={(view) => {
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Draft Recovery Notification Banner */}
          {draftBannerVisible && (
            <div
              style={{
                background: 'linear-gradient(90deg, #FDF1F4 0%, #FFF8F2 100%)',
                borderBottom: '1.5px solid #F3BAC9',
                padding: '12px 20px',
                position: 'relative',
                zIndex: 90
              }}
            >
              <div
                className="container"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 12
                }}
              >
                <div style={{ fontSize: '0.9rem', color: '#684B50' }}>
                  🌸 Bạn có một tấm thiệp chưa hoàn tất từ trước. Bạn có muốn tiếp tục chỉnh sửa không?
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={handleRestoreDraft} className="btn btn-primary btn-sm">
                    Khôi phục bản nháp
                  </button>
                  <button onClick={handleDismissDraft} className="btn btn-ghost btn-sm">
                    Bỏ qua
                  </button>
                </div>
              </div>
            </div>
          )}

          <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
            {/* VIEW: HOME */}
            {currentView === 'home' && (
              <>
                <HeroSection
                  onStartCreating={() => {
                    setCurrentView('create');
                    setWizardStep(0);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onExploreTemplates={() => {
                    const el = document.getElementById('template-gallery-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setCurrentView('gallery');
                    }
                  }}
                />
                <OccasionGrid onSelectEvent={handleSelectEventFromHome} />
                <ProcessSteps />
                <TemplateShowcase onSelectTemplateToCreate={handleSelectTemplateFromGallery} />
                <EmotionalQuote />
              </>
            )}

            {/* VIEW: GALLERY ONLY */}
            {currentView === 'gallery' && (
              <div style={{ paddingTop: '20px' }}>
                <TemplateShowcase onSelectTemplateToCreate={handleSelectTemplateFromGallery} />
              </div>
            )}

            {/* VIEW: CREATE WIZARD */}
            {currentView === 'create' && (
              <div style={{ padding: '30px 16px 50px' }}>
                <WizardProgress
                  currentStep={wizardStep}
                  onStepClick={(stepIdx) => {
                    // Allow navigating to any previous step or next if valid
                    setWizardStep(stepIdx);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {wizardStep === 0 && (
                  <StepEvent
                    selectedEventId={cardData.eventId}
                    customEventName={cardData.customEventName || ''}
                    onSelectEvent={updateEvent}
                    onChangeCustomName={(name) => setCardData((prev) => ({ ...prev, customEventName: name }))}
                    onNext={() => setWizardStep(1)}
                  />
                )}

                {wizardStep === 1 && (
                  <StepRecipient
                    selectedRecipientType={cardData.recipientType}
                    recipientName={cardData.recipientName}
                    senderName={cardData.senderName}
                    onSelectRecipientType={updateRecipientType}
                    onChangeRecipientName={updateRecipientName}
                    onChangeSenderName={updateSenderName}
                    onNext={() => setWizardStep(2)}
                    onBack={() => setWizardStep(0)}
                  />
                )}

                {wizardStep === 2 && (
                  <StepWishes
                    eventId={cardData.eventId}
                    recipientType={cardData.recipientType}
                    recipientName={cardData.recipientName}
                    senderName={cardData.senderName}
                    currentTitle={cardData.title}
                    currentMessage={cardData.message}
                    currentNote={cardData.optionalNote || ''}
                    onUpdateTitle={(title) => setCardData((prev) => ({ ...prev, title }))}
                    onUpdateMessage={(message) => setCardData((prev) => ({ ...prev, message }))}
                    onUpdateNote={(note) => setCardData((prev) => ({ ...prev, optionalNote: note }))}
                    onNext={() => setWizardStep(3)}
                    onBack={() => setWizardStep(1)}
                  />
                )}

                {wizardStep === 3 && (
                  <StepCustomize
                    card={cardData}
                    onSelectTemplate={updateTemplate}
                    onNext={() => setWizardStep(4)}
                    onBack={() => setWizardStep(2)}
                  />
                )}

                {wizardStep === 4 && (
                  <StepPreview
                    card={cardData}
                    onSelectTemplate={updateTemplate}
                    onNext={() => setWizardStep(5)}
                    onBack={() => setWizardStep(3)}
                  />
                )}

                {wizardStep === 5 && (
                  <StepShare
                    card={cardData}
                    onPreviewAsRecipient={() => {
                      // Switch to recipient mode using current card
                      setRecipientCard(cardData);
                      setIsRecipientMode(true);
                      setRecipientState('closed');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onCreateNewCard={handleStartFreshCard}
                    onShowToast={showToast}
                  />
                )}
              </div>
            )}
          </main>

          <Footer onNavigate={(v) => setCurrentView(v)} />
        </>
      )}

      {/* Floating Toast Alerts */}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <span>🌸</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
