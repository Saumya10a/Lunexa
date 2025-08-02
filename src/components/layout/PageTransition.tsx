import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  isTransitioning: boolean;
  onComplete: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ isTransitioning, onComplete }) => {
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShowScanner(true);
      const timer = setTimeout(() => {
        setShowScanner(false);
        onComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, onComplete]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Main Overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm animate-fade-in" />
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Central Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-light text-primary animate-pulse-scale">
          Lunexa
        </div>
      </div>

      {/* Scanning Line */}
      {showScanner && (
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent 
                       animate-scan-line opacity-80" />
      )}

      {/* Particle Effects */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};