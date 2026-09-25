import React, { useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { PortfolioItem } from '../types';
import { SafeImage } from './SafeImage';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview of ${item.title}`}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 sm:top-6 sm:right-6 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div
        className="max-w-5xl w-full flex flex-col items-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[72vh] w-auto overflow-hidden rounded-xl border border-white/10 shadow-2xl mb-4 bg-charcoal-900">
          <SafeImage
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[72vh] w-auto object-contain"
          />
        </div>

        <div className="text-center px-4">
          <span className="text-xs uppercase tracking-widest text-champagne block mb-1">
            {item.category} • {item.year}
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ivory mb-1">
            {item.title}
          </h3>
          <p className="text-xs text-ivory-dark flex items-center justify-center gap-1 mb-2">
            <MapPin className="w-3.5 h-3.5 text-champagne" />
            <span>{item.location}</span>
          </p>
          {item.description && (
            <p className="text-xs text-ivory-muted max-w-lg mx-auto font-light leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
