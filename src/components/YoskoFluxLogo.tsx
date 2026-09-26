import React from 'react';

interface YoskoFluxLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'stacked' | 'horizontal' | 'emblem';
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  showSubtitle?: boolean;
}

export const YoskoFluxLogo: React.FC<YoskoFluxLogoProps> = ({
  size = 'md',
  variant = 'horizontal',
  className = '',
}) => {
  if (variant === 'stacked') {
    const maxWidths = {
      sm: 'max-w-[280px]',
      md: 'max-w-[380px] sm:max-w-[460px]',
      lg: 'max-w-[480px] sm:max-w-[580px]',
      xl: 'max-w-[620px] sm:max-w-[760px]',
    };

    return (
      <div className={`flex flex-col items-center justify-center select-none ${className}`}>
        <img
          src="/logo.png"
          alt="YOSKO FLUX"
          className={`w-full ${maxWidths[size]} h-auto object-contain mx-auto`}
        />
      </div>
    );
  }

  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  return (
    <img
      src="/logo.png"
      alt="YOSKO FLUX"
      className={`${heights[size]} w-auto object-contain select-none shrink-0 ${className}`}
    />
  );
};

export const YoskoFluxEmblem: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 40, className = '' }) => {
  return (
    <img
      src="/logo.png"
      alt="YOSKO FLUX"
      style={{ height: size, width: 'auto' }}
      className={`shrink-0 object-contain select-none ${className}`}
    />
  );
};
