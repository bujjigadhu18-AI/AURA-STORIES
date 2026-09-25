import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { demoData } from '../data/demoData';

interface NavbarProps {
  onOpenInquiry: (context?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Featured Story', href: '#featured' },
    { name: 'Services', href: '#services' },
    { name: 'Collections', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0C0E]/95 backdrop-blur-md border-b border-white/5 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#"
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded px-1"
          aria-label={`${demoData.businessName} - Home`}
        >
          <span className="font-serif-luxury text-2xl md:text-3xl tracking-widest-plus text-ivory group-hover:text-champagne transition-colors duration-300">
            {demoData.businessName}
          </span>
          <span className="text-[9px] tracking-super-wide uppercase text-ivory-dark">
            Visakhapatnam
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-ivory-warm/80 hover:text-champagne transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded py-1 px-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => onOpenInquiry('Navigation Header')}
            className="group relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-champagne/40 bg-champagne/10 hover:bg-champagne text-xs uppercase tracking-widest text-champagne-light hover:text-black transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
          >
            <span>Check Availability</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-ivory hover:text-champagne focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-lg transition-colors"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu with smooth animation */}
      <div
        id="mobile-navigation"
        className={`lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#0B0C0E]/98 backdrop-blur-xl border-t border-white/5 z-50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col space-y-5 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
              className="font-serif-luxury text-2xl tracking-wider text-ivory hover:text-champagne transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col space-y-4 pb-6">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry('Mobile Drawer');
            }}
            className="w-full py-4 text-center rounded-full bg-champagne text-black text-xs font-semibold uppercase tracking-widest shadow-lg shadow-champagne/20 hover:bg-champagne-light transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            Check Availability
          </button>
          <p className="text-center text-[10px] tracking-super-wide text-ivory-dark uppercase">
            {demoData.contactInfo.visakhapatnamOffice}
          </p>
        </div>
      </div>
    </header>
  );
};
