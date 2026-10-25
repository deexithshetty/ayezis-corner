import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Gift, HeartHandshake } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';
import { ResilientImage } from '../ResilientImage';
import { PageRoute } from '../../types/navigation';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="space-y-0">
      {/* 1. Full-Screen / Large Editorial Hero */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#1E0509]">
        {/* Full-bleed background photography */}
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src="/images/decorations/decorations-09.jpeg"
            alt="Ayezis Corner Luxury Celebration Décor"
            className="w-full h-full object-cover object-center opacity-45 scale-102 transition-transform duration-1000 ease-out"
            fallbackTitle="Ayezis Corner Celebration Styling"
          />
          {/* Subtle multi-layer editorial gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0307] via-[#1A0307]/50 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0307]/70 via-transparent to-[#1A0307]/70" />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center text-white space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFBE7A] text-xs font-medium tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE7A]" />
            <span>Luxury Event Décor · Bespoke Gifting</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-[#FFFDF9] max-w-4xl mx-auto [text-wrap:balance]">
            Thoughtful Gifts.<br />
            <span className="font-normal italic text-[#DFBE7A]">Beautiful Celebrations.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#EAE0D2]/90 max-w-2xl mx-auto font-light leading-relaxed [text-wrap:pretty]">
            An editorial studio based in Udupi, crafting bespoke ceremonial decorations, elegant stage styling, and thoughtfully personalized keepsake hampers.
          </p>

          {/* Clean Thin-line Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('decorations')}
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#1A0307] bg-[#FFFDF9] hover:bg-[#F3ECE2] active:scale-[0.98] transition-all rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Decorations</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('gifts')}
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 active:scale-[0.98] transition-all rounded-full border border-white/30 backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Gifts</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] transition-all rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Subtle bottom scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[11px] tracking-widest uppercase flex items-center gap-2 pointer-events-none">
          <span className="w-6 h-px bg-white/30" />
          <span>Curated Portfolio</span>
          <span className="w-6 h-px bg-white/30" />
        </div>
      </section>

      {/* 2. Featured Work / Visual Portfolio Preview (Editorial Asymmetric Showcase) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
                Visual Portfolio Preview
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#32070F] tracking-tight">
                Moments Crafted With Care
              </h2>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="group text-xs sm:text-sm font-semibold text-[#7D1D2C] hover:text-[#4A0E18] flex items-center gap-2 self-start md:self-end pb-1 border-b border-[#7D1D2C]/30 hover:border-[#7D1D2C] transition-all cursor-pointer"
            >
              <span>View Full Gallery (60+ Works)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Asymmetric Gowjee-inspired Photo Bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Primary Large Feature Photo */}
            <div
              onClick={() => onNavigate('decorations')}
              className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-[#EAE0D2] border border-[#D8CEBE]/80 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-500"
            >
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden">
                <ResilientImage
                  src="/images/wedding.png"
                  alt="Wedding & Pre-Wedding Ceremonies"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                  <span className="text-xs uppercase tracking-widest text-[#DFBE7A] font-medium">
                    Ceremonial Styling
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light mt-1">
                    Wedding &amp; Pre-Wedding Décor
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 mt-1 max-w-md line-clamp-2">
                    Regal stage settings, entrance floral arches, and ceremonial backdrops designed with authentic elegance.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#DFBE7A] font-semibold group-hover:underline">
                    <span>Explore Stage Styling</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Stacked 2 Photos */}
            <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8">
              {/* Photo 1: Customized Gifting */}
              <div
                onClick={() => onNavigate('gifts')}
                className="flex-1 group relative rounded-3xl overflow-hidden bg-[#EAE0D2] border border-[#D8CEBE]/80 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-500"
              >
                <div className="relative aspect-16/10 w-full h-full overflow-hidden">
                  <ResilientImage
                    src="/images/customized-gifts/customized-gifts-31.jpeg"
                    alt="Customized Gifting & Keepsakes"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-5 sm:p-6 flex flex-col justify-end text-white">
                    <span className="text-xs uppercase tracking-widest text-[#DFBE7A] font-medium">
                      Thoughtful Keepsakes
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light mt-0.5">
                      Personalized Gift Hampers
                    </h3>
                    <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-[#DFBE7A] font-semibold group-hover:underline">
                      <span>Discover Gifting</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo 2: Baby & Newborn Celebrations */}
              <div
                onClick={() => onNavigate('decorations')}
                className="flex-1 group relative rounded-3xl overflow-hidden bg-[#EAE0D2] border border-[#D8CEBE]/80 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-500"
              >
                <div className="relative aspect-16/10 w-full h-full overflow-hidden">
                  <ResilientImage
                    src="/images/baby-newborn/baby-newborn-02.jpeg"
                    alt="Baby & Newborn Welcome"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-5 sm:p-6 flex flex-col justify-end text-white">
                    <span className="text-xs uppercase tracking-widest text-[#DFBE7A] font-medium">
                      Cherished Beginnings
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light mt-0.5">
                      Baby Welcome &amp; Newborn Favors
                    </h3>
                    <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-[#DFBE7A] font-semibold group-hover:underline">
                      <span>View Collection</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Two Main Service Choices (Full-Width Split Experience) */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-y border-[#E8DFD3]">
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

      {/* 4. Short Ayezis Corner Introduction (Editorial Clean Layout featuring decorations-02.jpeg) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9]">
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

      {/* 5. Selected Works Filmstrip / Visual Strip */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD3] overflow-hidden">
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

      {/* 6. Final WhatsApp Enquiry CTA Section */}
      <section className="py-20 sm:py-28 bg-[#32070F] text-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFBE7A] text-xs font-medium tracking-[0.2em] uppercase border border-white/15">
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
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-[#FAF7F2] bg-white/10 hover:bg-white/20 active:scale-[0.98] rounded-full border border-white/20 backdrop-blur-xs transition-all cursor-pointer"
            >
              <span>Request Quote</span>
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
