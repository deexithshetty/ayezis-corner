
import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { getWhatsAppLink } from '../../config/siteConfig';
import { ResilientImage } from '../ResilientImage';
import { PageRoute } from '../../types/navigation';
import { HeroCarousel } from '../HeroCarousel';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

const gold = '#DFBE7A';

const giftCategories = [
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
];

const decorationCategories = [
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
];

const cardClass =
  'group relative bg-[#180609] rounded-3xl overflow-hidden border border-[#6F5432]/70 hover:border-[#DFBE7A] shadow-sm hover:shadow-[0_15px_45px_rgba(223,190,122,0.12)] hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 ease-out p-7 sm:p-10 flex flex-col justify-between cursor-pointer';

const badgeClass =
  'inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#DFBE7A] bg-[#241014] px-3.5 py-1 rounded-full border border-[#6F5432]';

const arrowCircleClass =
  'w-9 h-9 rounded-full bg-[#241014] border border-[#6F5432] text-[#DFBE7A] group-hover:bg-[#DFBE7A] group-hover:text-[#180609] group-hover:border-[#DFBE7A] flex items-center justify-center transition-all duration-300 shrink-0';

const headingClass =
  'font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#FFF8ED] group-hover:text-[#DFBE7A] transition-colors duration-300';

const descriptionClass =
  'text-sm sm:text-base text-[#D8C9B2] leading-relaxed';

const exploreClass =
  'inline-flex items-center gap-2 text-sm font-semibold text-[#DFBE7A] hover:text-[#FFF0C9] cursor-pointer transition-colors duration-300';

const listClass =
  'flex items-center gap-2.5 text-sm text-[#E8DCCB] py-1 border-b border-[#6F5432]/40';

const bulletClass =
  'w-1.5 h-1.5 rounded-full bg-[#DFBE7A] shrink-0';

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="space-y-0 bg-[#0E0305]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0E0305] pt-6 sm:pt-8 pb-10 sm:pb-14 border-b border-[#DFBE7A]/15">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 mb-2">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-[#DFBE7A]/30 text-[#DFBE7A] text-xs font-light tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Luxury Event Décor · Bespoke Gifting Studio</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#FFFDF9] max-w-4xl mx-auto leading-[1.12]">
            Thoughtful Gifts.
            <br />
            <span className="font-normal italic text-[#DFBE7A]">
              Beautiful Celebrations.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#EAE0D2]/80 max-w-2xl mx-auto font-light leading-relaxed">
            An artisanal event styling studio based in Udupi, creating
            majestic ceremonial stages, intimate celebrations, and
            personalised gift hampers.
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
            Explore Decorations
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('gifts')}
            className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-white/10 hover:bg-white/20 active:scale-[0.98] transition-all rounded-full border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore Customized Gifts
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] transition-all rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* GIFTS AND DECORATIONS */}
      <div id="services" className="scroll-mt-20">

        <section className="py-18 sm:py-24 bg-[#0E0305] text-[#FFF8ED]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* SECTION HEADING */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-14 pb-6 border-b border-[#6F5432]/50">

              <div className="space-y-2">
                <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-[#DFBE7A]">
                  TWO WAYS WE MAKE MOMENTS SPECIAL
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#FFF8ED] tracking-tight">
                  Gifts &amp; Decorations
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#D8C9B2] md:text-right leading-relaxed">
                Personalised gifts delivered across India.
                <br />
                Event décor services around Udupi, Manipal &amp; Mangalore.
              </p>
            </div>

            {/* TWO CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

              {/* GIFTS CARD */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Explore Gifts and Personalised Keepsakes"
                onClick={() => onNavigate('gifts')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('gifts');
                  }
                }}
                className={`${cardClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFBE7A]`}
              >

                <div className="space-y-6">

                  <div className="space-y-3">

                    <div className="flex items-center justify-between gap-3">

                      <span className={badgeClass}>
                        SHIP ACROSS INDIA
                      </span>

                      <span aria-hidden="true" className={arrowCircleClass}>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className={headingClass}>
                      Gifts &amp; Personalised Keepsakes
                    </h3>

                    <p className={descriptionClass}>
                      Custom gifts, keepsakes and event essentials made
                      personal and shipped across India. Browse by recipient,
                      occasion or product type.
                    </p>
                  </div>

                  <div className="border-t border-[#6F5432]/50 pt-5">

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">

                      {giftCategories.map((category) => (
                        <li key={category} className={listClass}>
                          <span className={bulletClass} />
                          <span>{category}</span>
                        </li>
                      ))}

                    </ul>
                  </div>
                </div>

                {/* GIFTS CARD FOOTER */}
                <div className="pt-7 mt-7 border-t border-[#6F5432]/50 flex items-center justify-between">

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('gifts');
                    }}
                    className={exploreClass}
                  >
                    Explore gifts
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppLink(
                      "Hi Ayezis Corner, I'm interested in your personalised gifts and keepsakes."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>

              {/* DECORATIONS CARD */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Explore Decorations and Event Setups"
                onClick={() => onNavigate('decorations')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('decorations');
                  }
                }}
                className={`${cardClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFBE7A]`}
              >

                <div className="space-y-6">

                  <div className="space-y-3">

                    <div className="flex items-center justify-between gap-3">

                      <span className={badgeClass}>
                        UDUPI · MANIPAL · MANGALORE
                      </span>

                      <span aria-hidden="true" className={arrowCircleClass}>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className={headingClass}>
                      Decorations &amp; Event Setups
                    </h3>

                    <p className={descriptionClass}>
                      Local event decoration and setup services for personal
                      milestones, schools, businesses and special celebrations
                      across our service area.
                    </p>
                  </div>

                  <div className="border-t border-[#6F5432]/50 pt-5">

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">

                      {decorationCategories.map((category) => (
                        <li key={category} className={listClass}>
                          <span className={bulletClass} />
                          <span>{category}</span>
                        </li>
                      ))}

                    </ul>
                  </div>
                </div>

                {/* DECORATIONS CARD FOOTER */}
                <div className="pt-7 mt-7 border-t border-[#6F5432]/50 flex items-center justify-between">

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('decorations');
                    }}
                    className={exploreClass}
                  >
                    Explore decorations
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppLink(
                      "Hi Ayezis Corner, I'm interested in discussing an event decoration."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SELECTED PORTFOLIO */}
        <section className="py-14 sm:py-20 bg-[#FAF7F2] text-[#241E1C] border-t border-[#6F5432]/50 overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A9823F]">
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
                {
                  title: 'Ceremonial Stage',
                  img: '/images/decorations/decorations-09.jpeg',
                  cat: 'Decor',
                },
                {
                  title: 'Bridal Veil & Styling',
                  img: '/images/wedding-bridal/wedding-bridal-02.jpeg',
                  cat: 'Wedding',
                },
                {
                  title: 'Custom Travel Box',
                  img: '/images/customized-gifts/customized-gifts-31.jpeg',
                  cat: 'Gifts',
                },
                {
                  title: 'Baby Welcome Setup',
                  img: '/images/baby-newborn/baby-newborn-02.jpeg',
                  cat: 'Baby',
                },
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
                    <span className="text-[10px] uppercase tracking-wider text-[#DFBE7A] font-medium">
                      {item.cat}
                    </span>
                    <p className="font-serif text-sm font-light">
                      {item.title}
                    </p>
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
