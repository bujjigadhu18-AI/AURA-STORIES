import React from 'react';
import { ArrowDown, Calendar, Compass, Film, Sparkles } from 'lucide-react';
import { demoData } from '../data/demoData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenInquiry: (context?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950 pt-24 pb-16">
      {/* Background Image with Calibrated Cinematic Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SafeImage
          src={demoData.heroBackgroundUrl}
          alt="Cinematic luxury wedding portraiture in Visakhapatnam"
          aspectClass="w-full h-full"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000"
          priority={true}
        />
        {/* Carefully calibrated multi-stop gradient: preserves center luminosity while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/75 via-[#0B0C0E]/35 to-[#0B0C0E]/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0C0E]/25 to-[#0B0C0E]/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Editorial Tagline Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-champagne/30 bg-black/60 backdrop-blur-md mb-6 md:mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
          <span className="text-[10px] md:text-xs tracking-super-wide uppercase text-champagne-light">
            {demoData.tagline}
          </span>
        </div>

        {/* Hero Headline with Editorial Fluid Typography */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-ivory mb-6 leading-[1.08] max-w-4xl">
          {demoData.businessName}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-ivory-warm/85 font-light leading-relaxed mb-8 md:mb-10 tracking-wide px-2">
          {demoData.subTagline}
        </p>

        {/* CTA Button Hierarchy: Primary (Gold Filled) + Secondary (Outlined) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA: CHECK AVAILABILITY (Champagne/Gold Filled) */}
          <button
            onClick={() => onOpenInquiry('Hero Primary CTA')}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-champagne hover:bg-champagne-light text-black text-xs uppercase font-semibold tracking-widest transition-all duration-300 shadow-lg shadow-champagne/20 hover:shadow-champagne/30 flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            <Calendar className="w-3.5 h-3.5 text-black" />
            <span>Check Availability</span>
          </button>

          {/* Secondary CTA: VIEW OUR STORIES (Outlined Subtle Border) */}
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-white/25 bg-black/30 hover:bg-white/10 hover:border-white/40 backdrop-blur-md text-xs uppercase tracking-widest text-ivory transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            View Our Stories
          </a>
        </div>

        {/* Authentic Luxury Highlights (Truthful positioning with zero fake numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 md:mt-16 pt-8 border-t border-white/10 text-center sm:text-left w-full max-w-3xl">
          <div className="flex flex-col items-center sm:items-start">
            <p className="font-serif-luxury text-xl sm:text-2xl text-champagne flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-champagne" />
              <span>{demoData.heroHighlights[0].value}</span>
            </p>
            <p className="text-[11px] uppercase tracking-wider text-ivory-warm font-medium mt-0.5">
              {demoData.heroHighlights[0].label}
            </p>
            <p className="text-[10px] text-ivory-dark mt-0.5">
              {demoData.heroHighlights[0].subtext}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="font-serif-luxury text-xl sm:text-2xl text-champagne flex items-center gap-1.5">
              <Film className="w-4 h-4 text-champagne" />
              <span>{demoData.heroHighlights[1].value}</span>
            </p>
            <p className="text-[11px] uppercase tracking-wider text-ivory-warm font-medium mt-0.5">
              {demoData.heroHighlights[1].label}
            </p>
            <p className="text-[10px] text-ivory-dark mt-0.5">
              {demoData.heroHighlights[1].subtext}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="font-serif-luxury text-xl sm:text-2xl text-champagne flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-champagne" />
              <span>{demoData.heroHighlights[2].value}</span>
            </p>
            <p className="text-[11px] uppercase tracking-wider text-ivory-warm font-medium mt-0.5">
              {demoData.heroHighlights[2].label}
            </p>
            <p className="text-[10px] text-ivory-dark mt-0.5">
              {demoData.heroHighlights[2].subtext}
            </p>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-10 p-2 text-ivory-dark hover:text-champagne transition-colors animate-bounce focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-full"
        aria-label="Scroll to About Section"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};
