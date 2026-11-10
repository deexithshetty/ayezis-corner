
import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../config/siteConfig';
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
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#0E0305] pt-6 sm:pt-8 pb-10 sm:pb-14 border-b border-[#DFBE7A]/15">
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

        <HeroCarousel
          onNavigate={onNavigate}
          onOpenQuoteModal={onOpenQuoteModal}
        />

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

      {/* Services Section */}
      <div id="services" className="scroll-mt-20">

        {/* Gifts & Decorations Overview */}
        <section className="py-18 sm:py-24 bg-[#FAF7F2] text-[#241E1C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-14 pb-6 border-b border-[#E8DFD3]">
              <div className="space-y-2">
                <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-[#A9823F]">
                  TWO WAYS WE MAKE MOMENTS SPECIAL
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#32070F] tracking-tight">
                  Gifts &amp; Decorations
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#61524F] md:text-right leading-relaxed">
                Personalised gifts delivered across India.<br />
                Event décor services around Udupi, Manipal &amp; Mangalore.
              </p>
            </div>

            {/* Two Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

              {/* Gifts Card */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Explore Gifts & Personalised Keepsakes"
                onClick={() => onNavigate('gifts')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('gifts');
                  }
                }}
                className="group relative bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#D8CEBE] hover:border-[#C8A45D] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 ease-out p-7 sm:p-10 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">

                      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#A9823F] bg-[#FBF6EA] px-3.5 py-1 rounded-full border border-[#DCC596]">
                        SHIP ACROSS INDIA
                      </span>

                      <span
                        aria-hidden="true"
                        className="w-9 h-9 rounded-full bg-[#FBF6EA] border border-[#DCC596] text-[#A9823F] group-hover:bg-[#C8A45D] group-hover:text-white group-hover:border-[#C8A45D] flex items-center justify-center transition-all duration-300 shrink-0"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#32070F] group-hover:text-[#A9823F] transition-colors">
                      Gifts &amp; Personalised Keepsakes
                    </h3>

                    <p className="text-sm sm:text-base text-[#61524F] leading-relaxed">
                      Custom gifts, keepsakes and event essentials made personal and shipped across India. Browse by recipient, occasion or product type.
                    </p>
                  </div>

                  <div className="border-t border-[#F0E6D8] pt-5">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {[
                        "Men's gifts",
                        "Ladies' gifts",
                        "Kids' corner",
                        'Faith & festivities',
                        'Home & keepsakes',
                        'Corporate gifts',
                        'Wedding gifts',
                        'Mementos & trophies',
                        'Return gifts for all occasions',
                        'Wedding invitation cards',
                        'Business cards',
                        'Acrylic QR scanners / stands',
                      ].map((category) => (
                        <li
                          key={category}
                          className="flex items-center gap-2.5 text-sm text-[#4A0E18] py-1 border-b border-[#F0E6D8]/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shrink-0" />
                          <span>{category}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-7 mt-7 border-t border-[#F0E6D8] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('gifts');
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#A9823F] group-hover:text-[#8B692F] cursor-pointer transition-colors"
                  >
                    <span>Explore gifts</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppLink("Hi Ayezis Corner, I'm interested in your personalised gifts and keepsakes.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1E7E34] transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>

              {/* Decorations Card */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Explore Decorations & Event Setups"
                onClick={() => onNavigate('decorations')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('decorations');
                  }
                }}
                className="group relative bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#D8CEBE] hover:border-[#C8A45D] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 ease-out p-7 sm:p-10 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">

                      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#A9823F] bg-[#FBF6EA] px-3.5 py-1 rounded-full border border-[#DCC596]">
                        UDUPI · MANIPAL · MANGALORE
                      </span>

                      <span
                        aria-hidden="true"
                        className="w-9 h-9 rounded-full bg-[#FBF6EA] border border-[#DCC596] text-[#A9823F] group-hover:bg-[#C8A45D] group-hover:text-white group-hover:border-[#C8A45D] flex items-center justify-center transition-all duration-300 shrink-0"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#32070F] group-hover:text-[#A9823F] transition-colors">
                      Decorations &amp; Event Setups
                    </h3>

                    <p className="text-sm sm:text-base text-[#61524F] leading-relaxed">
                      Local event decoration and setup services for personal milestones, schools, businesses and special celebrations across our service area.
                    </p>
                  </div>

                  <div className="border-t border-[#F0E6D8] pt-5">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {[
                        'Wedding & reception',
                        'Haqiqah celebrations',
                        'Corporate events & gifting',
                        'Achievement celebrations',
                        'Newborn welcoming',
                        'School & college celebrations',
                        'Stalls & exhibition setups',
                        'Shop grand openings',
                        'Brand launches',
                        'Corporate setups',
                      ].map((category) => (
                        <li
                          key={category}
                          className="flex items-center gap-2.5 text-sm text-[#4A0E18] py-1 border-b border-[#F0E6D8]/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shrink-0" />
                          <span>{category}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-7 mt-7 border-t border-[#F0E6D8] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('decorations');
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#A9823F] group-hover:text-[#8B692F] cursor-pointer transition-colors"
                  >
                    <span>Explore decorations</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppLink("Hi Ayezis Corner, I'm interested in discussing an event decoration.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1E7E34] transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Selected Portfolio Section */}
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
  { title: 'Floral Bedroom Decoration', img: '/images/decorations/new-wedding-floral-stage.jpeg', cat: 'Decor' },
  { title: 'Chocolate Gift Tower', img: '/images/hampers/new-decorated-gift-hamper.jpeg', cat: 'Hampers' },
  { title: 'Personalized Kids Gift Set', img: '/images/baby-newborn/baby-newborn-02.jpeg', cat: 'Baby' },
  { title: 'Festive Gift Hampers', img: '/images/hampers/hampers-01.jpeg', cat: 'Hampers' },
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
      </div>
    </div>
  );
};
