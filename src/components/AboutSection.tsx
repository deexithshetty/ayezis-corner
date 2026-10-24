import React from 'react';
import { Sparkles, Gift, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-18 sm:py-24 bg-[#FFFDF9] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Large image on one side (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#D8CEBE] aspect-4/3 sm:aspect-5/4 bg-[#EAE0D2]">
              <ResilientImage
                src="/images/decorations/decorations-02.jpeg"
                alt="Ayezis Corner Celebration Styling"
                className="w-full h-full object-cover"
                fallbackTitle="Ayezis Corner Story"
              />
            </div>
            {/* Subtle decorative gold corner frame */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-32 h-32 border-r-2 border-b-2 border-[#C5A059]/40 rounded-br-2xl pointer-events-none" />
          </div>

          {/* Concise text on the other side (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
                {siteConfig.tagline}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
                About {siteConfig.businessName}
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#554643] leading-relaxed">
              <p>
                {siteConfig.shortDescription}
              </p>
              <p className="text-sm sm:text-base text-[#61524F]">
                Whether you are organizing a wedding, welcoming a newborn, planning a housewarming, or preparing corporate gifts, we tailor every detail to your chosen colors, themes, and occasion.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-[#4A0E18]">
              <div className="flex items-center gap-2.5 bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD3]">
                <Gift className="w-4 h-4 text-[#7D1D2C] shrink-0" />
                <span>Thoughtfully Curated Gifts</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD3]">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Custom Celebration Décor</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD3] sm:col-span-2">
                <HeartHandshake className="w-4 h-4 text-[#7D1D2C] shrink-0" />
                <span>Coordinated Packages for Special Occasions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
