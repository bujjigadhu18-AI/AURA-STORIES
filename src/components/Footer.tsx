import React from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { demoData } from '../data/demoData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-white/5 pt-16 pb-12 text-ivory-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif-luxury text-3xl text-ivory tracking-widest">
              {demoData.businessName}
            </h3>
            <p className="text-xs uppercase tracking-super-wide text-champagne">
              {demoData.tagline}
            </p>
            <p className="text-xs text-ivory-muted max-w-md font-light leading-relaxed">
              Editorial wedding photography and cinematic visual films crafted for discerning couples in Visakhapatnam and destinations worldwide.
            </p>
            {/* Demo Notice */}
            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-ivory-dark leading-relaxed">
              ✦ {demoData.disclaimer}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-ivory font-semibold">
              Exploration
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:underline">Philosophy</a></li>
              <li><a href="#portfolio" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:underline">Portfolio</a></li>
              <li><a href="#featured" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:underline">Featured Story</a></li>
              <li><a href="#services" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:underline">Services</a></li>
              <li><a href="#packages" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:underline">Collections</a></li>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-ivory font-semibold">
              Connect
            </h4>
            <div className="flex space-x-3 text-ivory">
              <a
                href={demoData.contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-champagne hover:border-champagne/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={demoData.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-champagne hover:border-champagne/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={demoData.socialLinks.phone}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-champagne hover:border-champagne/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-ivory-dark pt-2">
              {demoData.contactInfo.visakhapatnamOffice}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {demoData.businessName}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded px-1.5 py-0.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
