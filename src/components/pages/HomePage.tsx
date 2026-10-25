import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Gift, HeartHandshake } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';
import { ResilientImage } from '../ResilientImage';
import { PageRoute } from '../../types/navigation';
import { HeroCarousel } from '../HeroCarousel';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="space-y-0 bg-[#0E0305]">
      {/* 1. Hero Section with 3D Coverflow Showcase (Gowjee Events Visual Inspiration) */}
      <section className="relative overflow-hidden bg-[#0E0305] pt-6 sm:pt-8 pb-10 sm:pb-14 border-b border-[#DFBE7A]/15">
        {/* Editorial Headline & Subtitle */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 mb-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-[#DFBE7A]/30 text-[#DFBE7A] text-xs font-light tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE7A]" />
            <span>Luxury Event Décor · Bespoke Gifting Studio</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#FFFDF9] max-w-4xl mx-auto [text-wrap:balance] leading-[1.12]">
            Thoughtful Gifts.<br />
            <span className="font-normal italic text-[#DFBE7A]">Beautiful Celebrations.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#EAE0D2]/80 max-w-2xl mx-auto font-light leading-relaxed">
            An artisanal event styling studio based in Udupi, creating majestic ceremonial stages, intimate celebrations, and curated personalized gift hampers.
          </p>
        </div>

        {/* 3D Coverflow Interactive Carousel */}
        <HeroCarousel
          onNavigate={onNavigate}
          onOpenQuoteModal={onOpenQuoteModal}
        />

        {/* Primary Exploration Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto px-4">
          <button
            onClick={() => onNavigate('decorations')}
            className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-[#1A0307] bg-[#DFBE7A] hover:bg-[#C5A059] active:scale-[0.98] transition-all rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Decorations</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('gifts')}
            className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-white/10 hover:bg-white/20 active:scale-[0.98] transition-all rounded-full border border-white/20 backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Customized Gifts</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] transition-all rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* 2. Two Main Service Choices (Full-Width Split Experience) */}
      <section className="py-18 sm:py-24 bg-[#FAF7F2] text-[#241E1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
              Bespoke Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#32070F] tracking-tight">
              Two Worlds of Distinction
            </h2>
            <p className="text-sm sm:text-base text-[#61524F]">
              Explore our dedicated services tailored for your celebration milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1: Event Decorations */}
            <div className="group bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#D8CEBE] hover:border-[#7D1D2C] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-16/10 overflow-hidden bg-[#EAE0D2]">
                <ResilientImage
                  src="/images/wedding.png"
                  alt="Event & Venue Decorations"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-[#7D1D2C] border border-white/60">
                  Event Styling
                </div>
              </div>
              <div className="p-7 sm:p-10 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#32070F]">
                    Event Decorations
                  </h3>
                  <p className="text-sm sm:text-base text-[#61524F] leading-relaxed">
                    Transforming spaces into extraordinary celebration environments. We design bespoke stage setups, floral arches, room styling, cradle ceremonies, and cultural backdrops with meticulous artistry.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Wedding Stages', 'Baby Showers', 'Housewarming', 'Corporate Galas'].map((t) => (
                      <span key={t} className="text-xs px-3 py-1 bg-[#FAF7F2] text-[#4A0E18] rounded-full border border-[#E8DFD3]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#F0E6D8] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('decorations')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#7D1D2C] hover:text-[#4A0E18] cursor-pointer"
                  >
                    <span>Explore Decorations</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={getWhatsAppLink("Hi Ayezis Corner, I'm interested in discussing an event decoration.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1E7E34] transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service 2: Customized Gifts */}
            <div className="group bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#D8CEBE] hover:border-[#7D1D2C] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-16/10 overflow-hidden bg-[#EAE0D2]">
                <ResilientImage
                  src="/images/customized-gifts/customized-gifts-31.jpeg"
                  alt="Customized Gifting & Hampers"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-[#7D1D2C] border border-white/60">
                  Custom Gifting
                </div>
              </div>
              <div className="p-7 sm:p-10 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#32070F]">
                    Customized Gifts &amp; Hampers
                  </h3>
                  <p className="text-sm sm:text-base text-[#61524F] leading-relaxed">
                    Personalized gifts that turn ordinary moments into treasured keepsakes. Curated trousseau boxes, baby announcement hampers, bespoke executive kits, and engraved commemorative gifts.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Bridal Favors', 'Newborn Hampers', 'Name Plaques', 'Corporate Kits'].map((t) => (
                      <span key={t} className="text-xs px-3 py-1 bg-[#FAF7F2] text-[#4A0E18] rounded-full border border-[#E8DFD3]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#F0E6D8] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('gifts')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#7D1D2C] hover:text-[#4A0E18] cursor-pointer"
                  >
                    <span>Explore Gifts</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={getWhatsAppLink("Hi Ayezis Corner, I'm interested in customizing a gift hamper.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1E7E34] transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Short Ayezis Corner Introduction (Editorial Clean Layout featuring decorations-02.jpeg) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9] text-[#241E1C] border-t border-[#E8DFD3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual with the designated decorations-02.jpeg image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D8CEBE] aspect-4/3 sm:aspect-5/4 bg-[#EAE0D2]">
                <ResilientImage
                  src="/images/decorations/decorations-02.jpeg"
                  alt="Ayezis Corner Celebration Styling"
                  className="w-full h-full object-cover"
                  fallbackTitle="Ayezis Corner Story"
                />
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
                  The Ayezis Corner Story
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#32070F] tracking-tight">
                  Crafting Celebrations That Linger in Memory
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#554643] leading-relaxed font-light">
                {siteConfig.shortDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3]">
                  <Gift className="w-5 h-5 text-[#7D1D2C] mb-2" />
                  <h4 className="font-serif text-base font-semibold text-[#32070F]">Bespoke Gifting</h4>
                  <p className="text-xs text-[#61524F] mt-1">Hand-personalized with love and premium packaging.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3]">
                  <Sparkles className="w-5 h-5 text-[#C5A059] mb-2" />
                  <h4 className="font-serif text-base font-semibold text-[#32070F]">Artisanal Décor</h4>
                  <p className="text-xs text-[#61524F] mt-1">Elegantly planned backdrops, florals, and lighting.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#7D1D2C] hover:text-[#4A0E18] pb-1 border-b border-[#7D1D2C]/40 hover:border-[#7D1D2C] transition-all cursor-pointer"
                >
                  <span>Read Our Philosophy &amp; Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Selected Works Filmstrip / Visual Strip */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2] text-[#241E1C] border-t border-[#E8DFD3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
                Selected Portfolio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#32070F]">
                Recent Celebrations &amp; Hampers
              </h3>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="text-xs sm:text-sm font-semibold text-[#7D1D2C] hover:underline cursor-pointer hidden sm:inline-block"
            >
              Explore All 60 Images →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'Ceremonial Stage', img: '/images/decorations/decorations-09.jpeg', cat: 'Decor' },
              { title: 'Bridal Veil & Styling', img: '/images/wedding-bridal/wedding-bridal-02.jpeg', cat: 'Wedding' },
              { title: 'Custom Travel Box', img: '/images/customized-gifts/customized-gifts-31.jpeg', cat: 'Gifts' },
              { title: 'Baby Welcome Setup', img: '/images/baby-newborn/baby-newborn-02.jpeg', cat: 'Baby' },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('gallery')}
                className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-[#EAE0D2] border border-[#D8CEBE] cursor-pointer shadow-xs hover:shadow-lg transition-all"
              >
                <ResilientImage
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFBE7A] font-medium">{item.cat}</span>
                  <p className="font-serif text-sm font-light">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => onNavigate('gallery')}
              className="text-xs font-semibold text-[#7D1D2C] underline"
            >
              Explore All 60 Images in Gallery →
            </button>
          </div>
        </div>
      </section>

      {/* 5. Final WhatsApp Enquiry CTA Section */}
      <section className="py-20 sm:py-28 bg-[#0E0305] text-[#FAF7F2] relative overflow-hidden border-t border-[#DFBE7A]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-[#DFBE7A] text-xs font-medium tracking-[0.2em] uppercase border border-[#DFBE7A]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE7A]" />
            <span>Consultation &amp; Bookings</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight [text-wrap:balance]">
            Let’s Design Something Extraordinary Together
          </h2>

          <p className="text-sm sm:text-base text-[#E8DFD3]/85 max-w-xl mx-auto font-light leading-relaxed">
            Whether you are planning an auspicious celebration, venue styling, or a bespoke gift hamper, we would love to bring your vision to life.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] rounded-full shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Direct WhatsApp Consultation</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-[#1A0307] bg-[#DFBE7A] hover:bg-[#C5A059] active:scale-[0.98] rounded-full transition-all cursor-pointer shadow-md"
            >
              <span>Plan Your Event</span>
            </button>
          </div>

          <p className="text-xs text-[#E8DFD3]/60 pt-2">
            Studio in {siteConfig.address} · Rapid response on WhatsApp
          </p>
        </div>
      </section>
    </div>
  );
};
