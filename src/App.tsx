import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { FeaturedStory } from './components/FeaturedStory';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { InquiryModal } from './components/InquiryModal';
import { PortfolioItem } from './types';

export const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (contextOrPackage?: string) => {
    setSelectedPackage(contextOrPackage);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F7F4EE] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Sticky Luxury Navbar with Drawer Menu */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 2. About Section */}
        <About />

        {/* 3. Portfolio Section */}
        <Portfolio onSelectItem={(item) => setSelectedItem(item)} />

        {/* 4. Featured Story Case Study */}
        <FeaturedStory onOpenInquiry={handleOpenInquiry} />

        {/* 5. Services Section */}
        <Services onOpenInquiry={handleOpenInquiry} />

        {/* 6. Packages & Collections */}
        <Packages onOpenInquiry={handleOpenInquiry} />

        {/* 7. Final Call to Action */}
        <FinalCTA onOpenInquiry={handleOpenInquiry} />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer with Demo Disclaimer & Quick Links */}
      <Footer />

      {/* Lightbox Preview Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Availability / Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        selectedPackage={selectedPackage}
      />
    </div>
  );
};

export default App;
