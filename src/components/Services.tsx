import React from 'react';
import { ArrowUpRight, Camera, CheckCircle2, Film, HeartHandshake, Sparkles } from 'lucide-react';
import { demoData } from '../data/demoData';
import { SafeImage } from './SafeImage';

interface ServicesProps {
  onOpenInquiry: (serviceName?: string) => void;
}

const iconMap = [Camera, HeartHandshake, Film, Sparkles];

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-charcoal-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-6 h-px bg-champagne" />
            <span className="text-xs uppercase tracking-super-wide text-champagne">
              Artisan Services
            </span>
            <span className="w-6 h-px bg-champagne" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-4 leading-tight">
            Crafted for Legacies
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-ivory-muted font-light leading-relaxed">
            Every commission is handled with personalized vision. From discreet ceremony documentation to high-fashion bridal editorials.
          </p>
        </div>

        {/* Responsive Grid: Stacks vertically on mobile/tablet, 2-column on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {demoData.services.map((service, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-charcoal-800/60 border border-white/5 hover:border-champagne/30 p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between min-w-0"
              >
                <div>
                  {/* Visual Header Image Frame */}
                  <div className="relative aspect-[16/8] w-full overflow-hidden rounded-xl mb-6 border border-white/10 group-hover:border-champagne/30 transition-colors">
                    <SafeImage
                      src={service.imageUrl}
                      alt={service.title}
                      aspectClass="aspect-[16/8] w-full"
                      className="w-full h-full object-cover transition-transform duration-700 brightness-[88%] group-hover:brightness-100 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14161B] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-black/80 backdrop-blur-md border border-champagne/40 flex items-center justify-center text-champagne shadow">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-ivory-dark border border-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ivory mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs uppercase tracking-widest text-champagne mb-4 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-ivory-muted font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-8">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2.5 text-xs text-ivory-warm font-light">
                        <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Ideal For & Contextual CTA */}
                <div>
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-ivory-dark uppercase tracking-wider text-[11px]">Ideal for:</span>
                    <span className="text-ivory font-medium text-right text-xs">{service.bestFor}</span>
                  </div>

                  {/* Contextual CTA Button */}
                  <button
                    onClick={() => onOpenInquiry(`Service: ${service.title}`)}
                    className="w-full mt-5 py-3 px-4 rounded-full bg-champagne/10 hover:bg-champagne text-champagne-light hover:text-black border border-champagne/30 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center space-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
