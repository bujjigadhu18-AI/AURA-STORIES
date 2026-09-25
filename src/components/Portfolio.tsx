import React, { useState } from 'react';
import { Eye, Film, MapPin } from 'lucide-react';
import { demoData } from '../data/demoData';
import { PortfolioCategory, PortfolioItem } from '../types';
import { SafeImage } from './SafeImage';

interface PortfolioProps {
  onSelectItem: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectItem }) => {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('All');

  const filteredItems = activeTab === 'All'
    ? demoData.portfolioItems
    : demoData.portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 md:py-28 lg:py-32 bg-charcoal-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-6 h-px bg-champagne" />
            <span className="text-xs uppercase tracking-super-wide text-champagne">
              Visual Portfolio
            </span>
            <span className="w-6 h-px bg-champagne" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-4 leading-tight">
            Timeless Chapters
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-ivory-muted font-light leading-relaxed">
            Every celebration holds an unmistakable rhythm. Explore our curation of weddings, pre-weddings, and cinematic films across Visakhapatnam and destination settings.
          </p>
        </div>

        {/* Filter Categories (responsive wrapping, accessible tabs) */}
        <div
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap mb-10 sm:mb-14 scrollbar-none"
          role="tablist"
          aria-label="Portfolio Category Filters"
        >
          {demoData.portfolioCategories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeTab === category}
              onClick={() => setActiveTab(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne ${
                activeTab === category
                  ? 'bg-champagne text-black font-semibold shadow-md shadow-champagne/20'
                  : 'bg-white/5 text-ivory-warm/75 hover:bg-white/10 hover:text-ivory border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectItem(item)}
              aria-label={`View ${item.title}, ${item.category} in ${item.location}`}
              className="group text-left relative cursor-pointer overflow-hidden rounded-xl bg-charcoal-800 border border-white/5 shadow-xl transition-all duration-500 hover:border-champagne/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne block w-full"
            >
              {/* Image Frame with Controlled Subtle Scale */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <SafeImage
                  src={item.imageUrl}
                  alt={item.title}
                  aspectClass="aspect-[4/5] w-full"
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Hover Dark Gradient Overlay with Controlled Transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent opacity-85 sm:opacity-75 sm:group-hover:opacity-95 transition-opacity duration-500 ease-out flex flex-col justify-end p-5 sm:p-6 pointer-events-none">
                <div className="flex items-center justify-between text-xs text-champagne mb-1.5">
                  <span className="uppercase tracking-widest text-[11px]">{item.category}</span>
                  {item.isVideoTeaser ? (
                    <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-[10px] border border-champagne/30 text-champagne">
                      <Film className="w-3 h-3 text-champagne" /> Cinema
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-ivory-muted group-hover:text-champagne transition-colors duration-500 text-[11px]">
                      <Eye className="w-3 h-3" /> View
                    </span>
                  )}
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-ivory group-hover:text-champagne-light transition-colors duration-500 mb-1 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center text-xs text-ivory-dark gap-1">
                  <MapPin className="w-3 h-3 text-champagne" />
                  <span>{item.location}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
