/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
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
        <Hero />

        {/* 3. About Section - Short 2-3 paragraphs with side image */}
        <AboutSection />

        {/* 4. Services Section - 6 attractive visual cards */}
        <ServicesSection />

        {/* 5. Featured Work / Gallery - Instagram-style masonry portfolio */}
        <GallerySection />

        {/* 6. Why Choose Us - Simple 4-point strip */}
        <WhyChooseUsSection />

        {/* 7. Instagram Section - @ayezis_corner preview tiles */}
        <InstagramSection />

        {/* 8. Contact / Enquiry Section - Simple form & direct contact channels */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating WhatsApp button */}
      <WhatsAppFloatingButton />

      {/* 11. Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
