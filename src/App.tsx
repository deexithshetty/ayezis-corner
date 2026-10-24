/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GiftingSection } from './components/GiftingSection';
import { DecorationSection } from './components/DecorationSection';
import { PackagesSection } from './components/PackagesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuickQuoteModal } from './components/QuickQuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241E1C] flex flex-col font-sans selection:bg-[#7D1D2C]/15 selection:text-[#7D1D2C]">
      {/* 1. Clean Sticky Navbar */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Section - Visually impressive image focus */}
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 3. About Section - Client business positioning */}
        <AboutSection />

        {/* 4. Gifting Services - 9 Client curated categories */}
        <GiftingSection />

        {/* 5. Decoration Services - 7 Occasions & 8 Décor Elements */}
        <DecorationSection />

        {/* 6. Combined Packages & Customization Features */}
        <PackagesSection />

        {/* 7. How It Works - 4 Step seamless experience */}
        <HowItWorksSection />

        {/* 8. Featured Work / Gallery - Editorial portfolio */}
        <GallerySection />

        {/* 9. Why Choose Ayezis Corner */}
        <WhyChooseUsSection />

        {/* 10. Instagram Section - @ayezis_corner preview */}
        <InstagramSection />

        {/* 11. Final Contact / Enquiry Section */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp button */}
      <WhatsAppFloatingButton />

      {/* 14. Quick Enquiry Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
