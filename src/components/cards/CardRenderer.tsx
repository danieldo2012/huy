import React from 'react';
import type { CardData } from '../../types/card';
import { SweetPinkCard } from './templates/SweetPinkCard';
import { FlowersForMomCard } from './templates/FlowersForMomCard';
import { RomanticBlushCard } from './templates/RomanticBlushCard';
import { CuteDoodlesCard } from './templates/CuteDoodlesCard';
import { MinimalEleganceCard } from './templates/MinimalEleganceCard';
import { VintageLetterCard } from './templates/VintageLetterCard';
import { SakuraDreamCard } from './templates/SakuraDreamCard';
import { WarmSunshineCard } from './templates/WarmSunshineCard';

interface Props {
  card: CardData;
  cardRef?: React.Ref<HTMLDivElement>;
  scale?: number;
}

export const CardRenderer: React.FC<Props> = ({ card, cardRef }) => {
  const renderTemplate = () => {
    switch (card.templateId) {
      case 'flowers-mom':
        return <FlowersForMomCard card={card} />;
      case 'romantic-blush':
        return <RomanticBlushCard card={card} />;
      case 'cute-doodles':
        return <CuteDoodlesCard card={card} />;
      case 'minimal-elegance':
        return <MinimalEleganceCard card={card} />;
      case 'vintage-letter':
        return <VintageLetterCard card={card} />;
      case 'sakura-dream':
        return <SakuraDreamCard card={card} />;
      case 'warm-sunshine':
        return <WarmSunshineCard card={card} />;
      case 'sweet-pink':
      default:
        return <SweetPinkCard card={card} />;
    }
  };

  return (
    <div
      ref={cardRef}
      className="card-render-wrapper"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 0'
      }}
    >
      {renderTemplate()}
    </div>
  );
};
