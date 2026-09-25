import React from 'react';
import { Calendar, Heart, MapPin, Sparkles } from 'lucide-react';
import { demoData } from '../data/demoData';
import { SafeImage } from './SafeImage';

interface FeaturedStoryProps {
  onOpenInquiry: (context?: string) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ onOpenInquiry }) => {
  const { featuredStory } = demoData;

  return (
    <section id="featured" className="py-20 md:py-28 lg:py-32 bg-charcoal-900 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Subheader */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="text-xs uppercase tracking-super-wide text-champagne">
              Featured Case Study
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ivory mb-3 leading-tight">
            {featuredStory.couple}
          </h2>
          <p className="text-xs sm:text-sm text-ivory-muted tracking-widest uppercase max-w-xl">
            {featuredStory.subtitle}
          </p>
        </div>

        {/* Main Cover Display */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
          <SafeImage
            src={featuredStory.coverImage}
            alt={`${featuredStory.couple} wedding ceremony along Visakhapatnam coastline`}
            aspectClass="aspect-[16/9] w-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/90 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 flex flex-wrap gap-2.5 sm:gap-4 items-center">
            <span className="px-3 sm:px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs text-ivory flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-champagne" />
              {featuredStory.location}
            </span>
            <span className="px-3 sm:px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs text-ivory flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-champagne" />
              {featuredStory.timeline}
            </span>
          </div>
        </div>

        {/* Narrative & Celebration Index Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14 sm:mb-16">
          <div className="lg:col-span-8 space-y-5">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-ivory font-light leading-snug">
              {featuredStory.title}
            </h3>

            {featuredStory.storyParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-xs sm:text-sm md:text-base text-ivory-muted font-light leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Editorial Perspective / Case Study Reflection */}
            <blockquote className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border-l-2 border-champagne my-6">
              <p className="font-serif-luxury italic text-base sm:text-lg md:text-xl text-ivory-warm leading-relaxed">
                {featuredStory.quote}
              </p>
              <footer className="mt-3 text-[11px] uppercase tracking-widest text-champagne">
                — Editorial Retrospective • {featuredStory.couple}
              </footer>
            </blockquote>
          </div>

          {/* Celebration Index Panel */}
          <div className="lg:col-span-4 rounded-2xl bg-charcoal-800/80 border border-white/10 p-6 sm:p-8 shadow-xl w-full">
            <h4 className="font-serif-luxury text-xl sm:text-2xl text-ivory mb-5 pb-3 border-b border-white/10">
              Celebration Index
            </h4>
            <div className="space-y-4">
              {featuredStory.details.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-ivory-dark">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-ivory-warm mt-0.5">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenInquiry(`Featured Story (${featuredStory.couple})`)}
              className="mt-8 w-full py-3.5 rounded-full bg-champagne hover:bg-champagne-light text-black text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg shadow-champagne/20 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Inquire For Similar Coverage</span>
            </button>
          </div>
        </div>

        {/* Editorial Photo Strip (Clean responsive layout: vertical on mobile, 3-column on tablet/desktop) */}
        <div>
          <h4 className="text-xs uppercase tracking-super-wide text-champagne mb-6 block text-center sm:text-left">
            Ceremony Visual Archive
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStory.galleryImages.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl border border-white/10 bg-charcoal-800/60 shadow-md flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <SafeImage
                    src={img.url}
                    alt={img.caption}
                    aspectClass="aspect-[4/3] w-full"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="p-4 text-xs text-ivory-muted font-light leading-relaxed border-t border-white/5 bg-charcoal-800/90">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
