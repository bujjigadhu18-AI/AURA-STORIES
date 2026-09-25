import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { demoData } from '../data/demoData';

interface FinalCTAProps {
  onOpenInquiry: (context?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-charcoal-950 border-t border-white/5 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <span className="text-xs uppercase tracking-super-wide text-champagne mb-3 block">
          Reserve Your Chapter
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ivory mb-6 leading-tight">
          Your Date. Your Story. Your Memories.
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-ivory-muted font-light mb-10 leading-relaxed px-2">
          Dates for prime celebration seasons in Visakhapatnam and destination schedules are commissioned well in advance. Check our availability for your wedding date.
        </p>

        {/* Consistent Button Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA: Gold Filled */}
          <button
            onClick={() => onOpenInquiry('Final CTA Banner')}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-champagne hover:bg-champagne-light text-black text-xs uppercase font-semibold tracking-widest transition-all duration-300 shadow-xl shadow-champagne/20 flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            <Calendar className="w-3.5 h-3.5 text-black" />
            <span>Check Your Date</span>
          </button>

          {/* Secondary CTA: Transparent Outlined */}
          <a
            href={demoData.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-champagne/40 bg-champagne/5 hover:bg-champagne/20 text-xs uppercase tracking-widest text-champagne-light transition-all duration-300 flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
};
