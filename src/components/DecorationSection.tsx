import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { decorationCategories, decorationElements } from '../data/services';
import { getWhatsAppLink } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export const DecorationSection: React.FC = () => {
  return (
    <section id="decoration" className="py-18 sm:py-24 bg-[#FFFDF9] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Celebration Styling</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
            Event &amp; Venue Decorations
          </h2>
          <p className="text-sm sm:text-base text-[#61524F]">
            From weddings and pre-wedding ceremonies to home welcomes, baby showers, and corporate galas.
          </p>
        </div>

        {/* 7 Decoration Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {decorationCategories.map((item, index) => {
            const isWide = index === 0;
            return (
              <div
                key={item.id}
                className={`group rounded-2xl overflow-hidden border border-[#D8CEBE] hover:border-[#C5A059] bg-[#FAF7F2] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-[#EAE0D2] ${
                    isWide ? 'aspect-16/9 sm:aspect-21/10' : 'aspect-16/10'
                  }`}
                >
                  <ResilientImage
                    src={item.image}
                    alt={item.name}
                    fallbackTitle={item.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#32070F] group-hover:text-[#7D1D2C] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#61524F] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hi Ayezis Corner, I'm interested in: ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-3 text-xs font-semibold text-[#7D1D2C] hover:text-[#4A0E18] flex items-center gap-1.5 border-t border-[#E8DFD3] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                    <span>Enquire for Décor</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-auto" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decoration Elements Showcase Strip */}
        <div className="rounded-2xl bg-[#FAF7F2] border border-[#D8CEBE] p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7D1D2C]">
              Décor Components &amp; Styling Accents
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#32070F] mt-1">
              Customized Elements We Incorporate
            </h3>
            <p className="text-xs sm:text-sm text-[#61524F] mt-1">
              Every celebration is uniquely assembled with tailored decorative elements matching your chosen style.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {decorationElements.map((elem) => (
              <div
                key={elem}
                className="flex items-center gap-2.5 p-3 sm:p-3.5 bg-[#FFFDF9] rounded-xl border border-[#E8DFD3] text-xs sm:text-sm font-medium text-[#4A3E3D] shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{elem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
