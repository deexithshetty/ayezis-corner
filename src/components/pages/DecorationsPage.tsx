import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Check, HeartHandshake } from 'lucide-react';
import { decorationCategories, decorationElements } from '../../data/services';
import { getWhatsAppLink } from '../../config/siteConfig';
import { ResilientImage } from '../ResilientImage';
import { PageRoute } from '../../types/navigation';

interface DecorationsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const DecorationsPage: React.FC<DecorationsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. Large Visual Hero Banner */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#1E0509]">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src="/images/wedding.png"
            alt="Ayezis Corner Event Decorations"
            className="w-full h-full object-cover object-center opacity-40 scale-102"
            fallbackTitle="Ayezis Corner Event Décor"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0307] via-[#1A0307]/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFBE7A] text-xs font-medium tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE7A]" />
            <span>Event Styling &amp; Venue Transformation</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#FFFDF9]">
            Event &amp; Venue Decorations
          </h1>

          <p className="text-base sm:text-lg text-[#EAE0D2]/90 max-w-2xl mx-auto font-light leading-relaxed">
            From majestic wedding stages and ceremonial backdrops to intimate room styling and newborn welcomes. Every celebration is composed with artistic precision.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppLink("Hi Ayezis Corner, I'd like to consult with you about an upcoming event decoration.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] transition-all rounded-full shadow-md flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Discuss Event on WhatsApp</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#1A0307] bg-[#FFFDF9] hover:bg-[#F3ECE2] active:scale-[0.98] transition-all rounded-full shadow-md cursor-pointer"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* 2. Editorial Philosophy Statement */}
      <section className="py-14 sm:py-20 bg-[#FFFDF9] border-b border-[#E8DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
            Our Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F]">
            Every Space Tells a Story
          </h2>
          <p className="text-base text-[#61524F] leading-relaxed font-light">
            We don’t believe in one-size-fits-all decorations. Whether you envision a grand traditional stage with floral cascades or an intimate contemporary setting with warm ambient lights, we curate the palette, textures, and structural elements to reflect your distinct aesthetic.
          </p>
        </div>
      </section>

      {/* 3. Occasion Styling Showcase (Visual Cards Grid - NO birthday or anniversary) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
                Celebration Categories
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F] mt-1">
                Occasions We Elevate
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#7D6B67] max-w-md">
              Each installation is customized for your venue dimensions, lighting conditions, and chosen theme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decorationCategories.map((item, index) => {
              const isLead = index === 0;
              return (
                <div
                  key={item.id}
                  className={`group bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#D8CEBE] hover:border-[#7D1D2C] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    isLead ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-[#EAE0D2] ${isLead ? 'aspect-16/9 sm:aspect-21/10' : 'aspect-16/10'}`}>
                    <ResilientImage
                      src={item.image}
                      alt={item.name}
                      fallbackTitle={item.name}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#32070F]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#DFBE7A]">
                      Occasion
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl font-light text-[#32070F] group-hover:text-[#7D1D2C] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[#61524F] leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#F0E6D8] flex items-center justify-between">
                      <a
                        href={getWhatsAppLink(`Hi Ayezis Corner, I'm interested in booking decoration for: ${item.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7E34] hover:text-[#176529] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                        <span>Enquire for this Occasion</span>
                      </a>
                      <button
                        onClick={onOpenQuoteModal}
                        className="text-xs text-[#7D1D2C] hover:underline font-medium cursor-pointer"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Signature Décor Elements */}
      <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#E8DFD3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
              Signature Elements
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F]">
              Artistry in Every Detail
            </h3>
            <p className="text-sm text-[#61524F]">
              Our design toolkit covers structural installations, lighting nuance, and fine decorative touches.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {decorationElements.map((elem, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] flex flex-col justify-between space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#7D1D2C]/10 text-[#7D1D2C] flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-[#32070F]">
                  {elem}
                </p>
              </div>
            ))}
          </div>

          {/* Coordinated Gifting Callout */}
          <div className="bg-[#32070F] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
                Complete Experience
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-light">
                Coordinated Gifting &amp; Event Favours
              </h4>
              <p className="text-sm text-[#E8DFD3]/85 max-w-xl font-light">
                Pair your stage or venue décor with custom color-matched guest favors, bridal hampers, or welcome gifts.
              </p>
            </div>
            <button
              onClick={() => onNavigate('gifts')}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#1A0307] bg-[#FFFDF9] hover:bg-[#F3ECE2] rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>Explore Customized Gifts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Final WhatsApp CTA */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD3] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F]">
            Ready to Plan Your Event Styling?
          </h3>
          <p className="text-sm text-[#61524F]">
            Share your event date, venue location in Udupi / nearby regions, and decor preferences on WhatsApp for a swift consultation.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppLink("Hi Ayezis Corner, I would like to check availability and discuss decor options for an upcoming celebration.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Connect on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-3.5 text-sm font-semibold text-[#32070F] bg-white border border-[#D8CEBE] hover:bg-[#F5EFE6] rounded-full shadow-xs cursor-pointer"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
