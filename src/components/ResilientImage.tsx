import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  className?: string;
}

/**
 * ResilientImage ensures zero broken images: if an asset fails to load,
 * it gracefully presents a styled warm ivory/burgundy gradient container with title.
 */
export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt = 'Ayezis Corner',
  fallbackTitle,
  fallbackSubtitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#F5EDE4] to-[#E9DACB] text-[#4A0E18] text-center border border-[#DFBE7A]/30 ${className}`}
      >
        <Sparkles className="w-8 h-8 text-[#C5A059] mb-2 stroke-[1.5]" />
        <p className="font-serif text-lg font-semibold tracking-wide">
          {fallbackTitle || alt || 'Ayezis Corner'}
        </p>
        {fallbackSubtitle && (
          <p className="text-xs text-[#7D1D2C]/80 mt-1 uppercase tracking-wider">
            {fallbackSubtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      loading="lazy"
      className={className}
      {...props}
    />
  );
};
