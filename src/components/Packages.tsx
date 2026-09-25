import React from 'react';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';
import { demoData } from '../data/demoData';

interface PackagesProps {
  onOpenInquiry: (packageName?: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenInquiry }) => {
  return (
    <section id="packages" className="py-20 md:py-28 lg:py-32 bg-charcoal-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="text-xs uppercase tracking-super-wide text-champagne">
              Bespoke Investment
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-4 leading-tight">
            Curated Collections
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-ivory-muted font-light leading-relaxed">
            Every celebration is different. Collections are refined around your story, schedule, and visual requirements.
          </p>
        </div>

        {/* Collections Grid: Stacks on mobile, 3-tier on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {demoData.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 min-w-0 ${
                pkg.isPopular
                  ? 'bg-charcoal-800 border-2 border-champagne shadow-2xl relative md:-translate-y-2'
                  : 'bg-charcoal-800/40 border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-champagne text-black text-[10px] font-bold tracking-widest uppercase shadow-md whitespace-nowrap">
                  Most Preferred
                </div>
              )}

              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ivory mb-2 leading-snug">
                  {pkg.name}
                </h3>
                <p className="text-xs text-ivory-dark mb-6 leading-relaxed">
                  {pkg.subtitle}
                </p>

                {/* Scope & Scheduling Note */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6">
                  <span className="text-xs font-serif-luxury italic text-champagne block mb-0.5">
                    {pkg.priceNote}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-ivory-dark">
                    Schedule dependent • Tailored commissioning
                  </span>
                </div>

                {/* Inclusions List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs uppercase tracking-wider text-ivory font-semibold pb-2 border-b border-white/10">
                    Collection Inclusions:
                  </p>
                  {pkg.highlights.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-ivory-muted leading-relaxed">
                      <Check className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Coverage & Team Specs */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-ivory-dark py-4 border-t border-white/10 mb-6">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider">Coverage</span>
                    <span className="text-ivory-warm font-medium">{pkg.coverage}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider">Artists</span>
                    <span className="text-ivory-warm font-medium">{pkg.teamSize}</span>
                  </div>
                </div>

                {/* Standardized Bespoke CTA Button */}
                <button
                  onClick={() => onOpenInquiry(`Package: ${pkg.name}`)}
                  className={`w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
                    pkg.isPopular
                      ? 'bg-champagne hover:bg-champagne-light text-black shadow-champagne/20'
                      : 'bg-white/10 hover:bg-white/20 text-ivory border border-white/10'
                  }`}
                >
                  Request a Bespoke Quotation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 text-center">
          <p className="inline-flex items-center gap-2 text-xs text-ivory-dark">
            <ShieldCheck className="w-4 h-4 text-champagne" />
            <span>Guaranteed single-wedding creative dedication per master crew date.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
