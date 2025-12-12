import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface GreenistsLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'icon';
  showTagline?: boolean;
  className?: string;
}

export function GreenistsLogo({ 
  size = 'md', 
  variant = 'default',
  showTagline = false,
  className = '' 
}: GreenistsLogoProps) {
  const { language, t } = useLanguage();
  
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };
  
  const taglineSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };
  
  // Green color for "Green" / "جرين"
  const greenColor = variant === 'white' ? 'text-white' : 'text-[#2D7A4A]';
  // White/Charcoal for "ists" / "ستس"
  const istsColor = variant === 'white' ? 'text-white' : variant === 'default' ? 'text-[#333333]' : 'text-white';
  
  if (variant === 'icon') {
    return (
      <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#2D7A4A] ${className}`}>
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </div>
    );
  }
  
  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`font-bold ${sizeClasses[size]} tracking-tight`}>
        {language === 'ar' ? (
          <>
            <span className={greenColor}>جرين</span>
            <span className={istsColor}>ستس</span>
          </>
        ) : (
          <>
            <span className={greenColor}>Green</span>
            <span className={istsColor}>ists</span>
          </>
        )}
      </div>
      {showTagline && (
        <div className={`${taglineSizes[size]} ${variant === 'white' ? 'text-white/80' : 'text-gray-600'} mt-1`}>
          {t('brand.tagline')}
        </div>
      )}
    </div>
  );
}

// Leaf icon component for use in various places
export function GreenistsLeaf({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`text-[#2D7A4A] ${className}`} fill="currentColor">
      <path d="M17.75 4.09L15.22 6.03L16.13 9.09L13.5 7.28L10.87 9.09L11.78 6.03L9.25 4.09L12.44 4L13.5 1L14.56 4L17.75 4.09M21.25 11L19.61 12.25L20.2 14.23L18.5 13.06L16.8 14.23L17.39 12.25L15.75 11L17.81 10.95L18.5 9L19.19 10.95L21.25 11M18.97 15.95C19.8 15.87 20.69 17.05 20.16 17.8C19.84 18.25 19.5 18.67 19.08 19.07C15.17 23 8.84 23 4.94 19.07C1.03 15.17 1.03 8.83 4.94 4.93C5.34 4.53 5.76 4.17 6.21 3.85C6.96 3.32 8.14 4.21 8.06 5.04C7.79 7.9 8.75 10.87 10.95 13.06C13.14 15.26 16.1 16.22 18.97 15.95M17.33 17.97C14.5 17.81 11.7 16.64 9.53 14.5C7.36 12.31 6.2 9.5 6.04 6.68C3.23 9.82 3.34 14.64 6.35 17.66C9.37 20.67 14.19 20.78 17.33 17.97Z"/>
    </svg>
  );
}

export default GreenistsLogo;
