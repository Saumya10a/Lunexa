import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(56);
  const [currentFont, setCurrentFont] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  
  const fonts = ['font-light', 'font-normal', 'font-medium'];

  useEffect(() => {
    // Progress animation from 56% to 100%
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 60);

    // Font cycling for "Now"
    const fontTimer = setInterval(() => {
      setCurrentFont(prev => (prev + 1) % fonts.length);
    }, 800);

    // Blinking effect
    const blinkTimer = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(fontTimer);
      clearInterval(blinkTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Loading Text */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">
            Loading Your{' '}
            <span className="text-highlight">Premium Experience</span>{' '}
            <span 
              className={`${fonts[currentFont]} ${isBlinking ? 'opacity-50' : 'opacity-100'} 
                         text-primary transition-all duration-300`}
            >
              Now
            </span>
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Loading...</span>
            <span className="text-primary font-medium">{progress}%</span>
          </div>
          <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-rose transition-all duration-300 
                         shadow-lg shadow-primary/30"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};