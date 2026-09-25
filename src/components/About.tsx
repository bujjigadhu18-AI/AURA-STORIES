import React from 'react';
import { demoData } from '../data/demoData';
import { SafeImage } from './SafeImage';

export const About: React.FC = () => {
  const { aboutStory } = demoData;

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-charcoal-900 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Column: Editorial Imagery Composition (contained, no horizontal overflow) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <SafeImage
                src={aboutStory.imagePrimary}
                alt="Editorial bridal portraiture in Visakhapatnam"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                aspectClass="aspect-[4/5] sm:aspect-[3/4]"
              />
            </div>

            {/* Overlapping Secondary Vignette (carefully inset to prevent viewport overflow) */}
            <div className="hidden sm:block absolute -bottom-6 right-2 sm:right-4 w-5/12 aspect-[4/5] rounded-xl overflow-hidden border-2 border-charcoal-900 shadow-2xl">
              <SafeImage
                src={aboutStory.imageSecondary}
                alt="Intimate wedding moment"
                className="w-full h-full object-cover"
                aspectClass="aspect-[4/5]"
              />
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="w-6 h-px bg-champagne" />
              <span className="text-xs uppercase tracking-super-wide text-champagne">
                The Philosophy
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-6 leading-[1.15]">
              {aboutStory.headline}
            </h2>

            <p className="text-base sm:text-lg font-light text-ivory-warm mb-5 leading-relaxed">
              {aboutStory.leadText}
            </p>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-ivory-muted leading-relaxed font-light mb-6 max-w-xl">
              {aboutStory.bodyText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Editorial Philosophy Quote */}
            <blockquote className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border-l-2 border-champagne my-2 max-w-xl">
              <p className="font-serif-luxury italic text-base sm:text-lg text-ivory-warm">
                {aboutStory.artistQuote}
              </p>
            </blockquote>

            <p className="text-xs uppercase tracking-widest text-champagne-light pt-3">
              ✦ {aboutStory.experienceBadge}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
