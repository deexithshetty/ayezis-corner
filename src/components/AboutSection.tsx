import React from 'react';
import { Heart, Globe } from 'lucide-react';
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
                src="/images/wedding.jpg"
                alt="Ayezis Corner Event Decoration"
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
                About Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
                About {siteConfig.businessName}
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#554643] leading-relaxed">
              <p>
                {siteConfig.businessName} is a creative event styling and bespoke gifting studio. We design breathtaking event atmospheres and craft personalized keepsakes that make every celebration truly unforgettable.
              </p>
              <p>
                From wedding stages and milestone birthday backdrops to laser-engraved gifts, custom embroidered keepsakes, and executive corporate hampers—everything we build is customized to your personal vision.
              </p>
            </div>

            {/* Trust highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#4A0E18]">
              <div className="flex items-center gap-2 bg-[#FAF7F2] px-3.5 py-2 rounded-lg border border-[#E8DFD3]">
                <Heart className="w-4 h-4 text-[#7D1D2C] fill-[#7D1D2C]" />
                <span>{siteConfig.stats.customers}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FAF7F2] px-3.5 py-2 rounded-lg border border-[#E8DFD3]">
                <Globe className="w-4 h-4 text-[#C5A059]" />
                <span>{siteConfig.stats.shipping}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
