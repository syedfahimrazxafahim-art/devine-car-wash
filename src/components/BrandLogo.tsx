import React from 'react';
import { OFFICIAL_LOGO_URL } from '../data/mockData';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  imageOnly?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showSubtitle = true,
  imageOnly = false
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const subtitleSizes = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm'
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Uploaded Logo Image */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} rounded-full overflow-hidden shadow-md ring-2 ${
        isLight ? 'ring-white/20 bg-white' : 'ring-[#12A9E8]/30 bg-white'
      } flex items-center justify-center`}>
        <img
          src={OFFICIAL_LOGO_URL}
          alt="Divine EcoWash Mobile Detailing Official Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Brand Typography (Optional side-by-side) */}
      {!imageOnly && (
        <div className="flex flex-col">
          <div className={`font-black tracking-tight uppercase leading-none ${titleSizes[size]}`}>
            <span className={isLight ? 'text-white' : 'text-[#0B2347]'}>DIVINE </span>
            <span className="text-[#2E8B20]">ECOWASH</span>
          </div>

          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-1">
              <span className={`h-[1px] flex-1 ${isLight ? 'bg-white/30' : 'bg-[#0B2347]/20'}`}></span>
              <span
                className={`font-extrabold tracking-[0.25em] uppercase whitespace-nowrap ${
                  isLight ? 'text-[#12A9E8]' : 'text-[#0B2347]/70'
                } ${subtitleSizes[size]}`}
              >
                Mobile Detailing
              </span>
              <span className="w-1 h-1 rounded-full bg-[#12A9E8]"></span>
              <span className={`h-[1px] flex-1 ${isLight ? 'bg-white/30' : 'bg-[#0B2347]/20'}`}></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

