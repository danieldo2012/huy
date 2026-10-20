import React, { useMemo } from 'react';

export const BackgroundEffects: React.FC = () => {
  // Generate random petals and stars with fixed keys
  const petals = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${(i * 8.5) % 95 + 2}%`,
      delay: `${(i * 1.3) % 9}s`,
      duration: `${14 + (i % 6) * 2}s`,
      size: 14 + (i % 5) * 4,
      opacity: 0.35 + (i % 4) * 0.12
    }));
  }, []);

  return (
    <div
      className="background-effects"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0
      }}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="floating-petal"
          style={{
            position: 'absolute',
            top: '-50px',
            left: p.left,
            width: p.size,
            height: p.size * 1.3,
            borderRadius: '50% 0 50% 50%',
            background: 'linear-gradient(135deg, rgba(244, 158, 180, 0.5) 0%, rgba(236, 166, 184, 0.25) 100%)',
            opacity: p.opacity,
            animation: `petalFall ${p.duration} linear infinite`,
            animationDelay: p.delay,
            transformOrigin: 'center center'
          }}
        />
      ))}
    </div>
  );
};
