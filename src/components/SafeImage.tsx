import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80';

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  className = '',
  aspectClass = '',
  priority = false,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-charcoal-800 ${aspectClass}`}>
      <img
        src={currentSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-charcoal-800/80 animate-pulse pointer-events-none" />
      )}
    </div>
  );
};
