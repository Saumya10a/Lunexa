import React, { useEffect, useState } from 'react';

interface Ripple {
  id: string;
  x: number;
  y: number;
}

export const GlobalRippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const createRipple = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now().toString(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    };

    document.addEventListener('mousemove', createRipple);
    return () => document.removeEventListener('mousemove', createRipple);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute w-4 h-4 border border-primary/30 rounded-full animate-ripple"
          style={{
            left: ripple.x - 8,
            top: ripple.y - 8,
          }}
        />
      ))}
    </div>
  );
};