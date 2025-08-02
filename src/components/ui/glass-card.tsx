import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'featured';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}) => {
  return (
    <div
      className={cn(
        'glass-card transition-all duration-300',
        {
          'hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30': variant === 'hover',
          'shadow-lg shadow-primary/20 border-primary/30': variant === 'featured',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};