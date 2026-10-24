import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-16 lg:pb-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Text Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7D1D2C] bg-[#F3ECE2] px-4 py-1.5 rounded-full border border-[#D8CEBE]/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{siteConfig.heroLabel}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#32070F] leading-[1.14]">
            Thoughtful Gifts.<br className="hidden sm:inline" /> Beautiful Celebrations.
          </h1>

          {/* Supporting message */}
          <p className="text-base sm:text-lg text-[#5A4D4A] max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
            Thoughtfully curated gifts, personalized hampers, and beautiful decorations crafted to bring creativity, elegance, and warmth to your customized celebrations.
          </p>

          {/* Primary CTA: "Enquire Now", Secondary CTA: "Explore Services" */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#FAF7F2] bg-[#7D1D2C] hover:bg-[#661320] active:scale-[0.98] transition-all rounded-md shadow-md flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Enquire Now</span>
            </button>

            <a
              href="#gifting"
              className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#4A0E18] bg-[#F3ECE2] hover:bg-[#EAE0D2] active:scale-[0.98] transition-all rounded-md border border-[#D8CEBE] flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Large, Visually Dominant Hero Visual Frame */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#D8CEBE] bg-[#EAE0D2]">
          <div className="relative aspect-16/10 sm:aspect-21/9 min-h-[360px] max-h-[620px] w-full">
            <ResilientImage
              src="/images/decorations/decorations-09.jpeg"
              alt="Ayezis Corner Event Decoration and Thoughtful Gifting"
              className="w-full h-full object-cover"
              fallbackTitle="Ayezis Corner Event Styling"
            />

            {/* Subtle Gradient Scrim at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 max-w-5xl">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#DFBE7A] font-semibold">
                    Instagram: {siteConfig.instagramHandle}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold">
                    Customized Celebrations · Thoughtful Keepsakes
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FAF7F2]/90">
                  <span>Curated Hampers</span>
                  <span className="opacity-40">·</span>
                  <span>Bespoke Event Décor</span>
                  <span className="opacity-40">·</span>
                  <span>Personalized Packages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
