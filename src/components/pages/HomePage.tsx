
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Gift, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../config/siteConfig';
import { PageRoute } from '../../types/navigation';
import { HeroCarousel } from '../HeroCarousel';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

const GIFT_CATEGORIES = [
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

const DECORATION_CATEGORIES = [
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

let hasPlayedServicesEntrance = false;

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const servicesSectionRef = useRef<HTMLDivElement | null>(null);
  const [servicesVisible, setServicesVisible] = useState<boolean>(hasPlayedServicesEntrance);
  const [servicesSettled, setServicesSettled] = useState<boolean>(hasPlayedServicesEntrance);
  const [hoveredCard, setHoveredCard] = useState<'gifts' | 'decorations' | null>(null);

  useEffect(() => {
    if (hasPlayedServicesEntrance) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      hasPlayedServicesEntrance = true;
      setServicesVisible(true);
      setServicesSettled(true);
      return;
    }

    const node = servicesSectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      hasPlayedServicesEntrance = true;
      setServicesVisible(true);
      setServicesSettled(true);
      return;
    }

    let settleTimer: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          hasPlayedServicesEntrance = true;
          setServicesVisible(true);
          observer.disconnect();
          settleTimer = window.setTimeout(() => {
            setServicesSettled(true);
          }, 950);
        }
      },
      { threshold: 0.14 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, []);

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
      <div id="services" ref={servicesSectionRef} className="scroll-mt-20">

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
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

              {/* Desktop Connecting Gold Bridge between both cards */}
              <div
                aria-hidden="true"
                className={`hidden lg:flex pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-8 items-center justify-center z-20 transition-opacity duration-300 ${
                  hoveredCard ? 'opacity-100 svc-connector-active' : 'opacity-0'
                }`}
              >
                <svg
                  viewBox="0 0 56 24"
                  className="w-14 h-6 overflow-visible"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="svcBridgeGold" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#DFBE7A" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#C8A45D" stopOpacity="0.35" />
                    </linearGradient>
                    <filter id="svcBridgeGlow" x="-60%" y="-60%" width="220%" height="220%">
                      <feGaussianBlur stdDeviation="1.8" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <line
                    x1="2"
                    y1="12"
                    x2="54"
                    y2="12"
                    stroke="url(#svcBridgeGold)"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    className="svc-connector-line"
                  />
                  <circle cx="2" cy="12" r="2" fill="#C8A45D" opacity="0.7" />
                  <circle cx="54" cy="12" r="2" fill="#C8A45D" opacity="0.7" />
                  {hoveredCard && (
                    <g
                      key={hoveredCard}
                      className={
                        hoveredCard === 'gifts'
                          ? 'svc-connector-dot-ltr'
                          : 'svc-connector-dot-rtl'
                      }
                    >
                      <circle
                        cx="2"
                        cy="12"
                        r="3"
                        fill="#DFBE7A"
                        filter="url(#svcBridgeGlow)"
                      />
                      <circle cx="2" cy="12" r="1.4" fill="#FFFDF9" />
                    </g>
                  )}
                </svg>
              </div>

              {/* Gifts Card */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Explore Gifts & Personalised Keepsakes"
                onClick={() => onNavigate('gifts')}
                onMouseEnter={() => setHoveredCard('gifts')}
                onMouseLeave={() => setHoveredCard((prev) => (prev === 'gifts' ? null : prev))}
                onFocus={() => setHoveredCard('gifts')}
                onBlur={() => setHoveredCard((prev) => (prev === 'gifts' ? null : prev))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('gifts');
                  }
                }}
                style={{
                  transitionDelay: servicesSettled ? '0ms' : '0ms',
                }}
                className={`svc-card svc-gift-card group relative bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#D8CEBE] hover:border-[#C8A45D] shadow-sm hover:shadow-[0_18px_40px_-14px_rgba(197,160,89,0.42),0_0_0_1px_rgba(200,164,93,0.35)] hover:-translate-y-1.5 active:scale-[0.99] transition-all ${
                  servicesSettled ? 'duration-300 ease-out' : 'duration-700 ease-out'
                } ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } p-7 sm:p-10 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]`}
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">

                      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#A9823F] bg-[#FBF6EA] px-3.5 py-1 rounded-full border border-[#DCC596]">
                        SHIP ACROSS INDIA
                      </span>

                      <span
                        aria-hidden="true"
                        className="relative w-9 h-9 rounded-full bg-[#FBF6EA] border border-[#DCC596] text-[#A9823F] group-hover:bg-[#C8A45D] group-hover:text-white group-hover:border-[#C8A45D] group-hover:shadow-[0_0_16px_rgba(223,190,122,0.55)] flex items-center justify-center transition-all duration-300 shrink-0"
                      >
                        <Gift className="svc-gift-icon w-4 h-4" />
                        {/* Subtle champagne-gold sparkles around the gift icon */}
                        <svg
                          viewBox="0 0 12 12"
                          className="svc-gift-sparkle svc-gift-sparkle-1 absolute -top-2 -right-2 w-3 h-3 text-[#DFBE7A]"
                          fill="currentColor"
                        >
                          <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z" />
                        </svg>
                        <svg
                          viewBox="0 0 12 12"
                          className="svc-gift-sparkle svc-gift-sparkle-2 absolute -bottom-1.5 -left-2 w-2.5 h-2.5 text-[#C8A45D]"
                          fill="currentColor"
                        >
                          <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z" />
                        </svg>
                        <svg
                          viewBox="0 0 12 12"
                          className="svc-gift-sparkle svc-gift-sparkle-3 absolute -top-2.5 left-0 w-2 h-2 text-[#DFBE7A]"
                          fill="currentColor"
                        >
                          <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z" />
                        </svg>
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
                      {GIFT_CATEGORIES.map((category, idx) => (
                        <li
                          key={category}
                          style={{
                            transitionDelay: servicesSettled ? '0ms' : `${160 + idx * 42}ms`,
                          }}
                          className={`flex items-center gap-2.5 text-sm text-[#4A0E18] py-1 border-b border-[#F0E6D8]/70 transition-all duration-500 ease-out ${
                            servicesVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-2'
                          }`}
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
                    <span className="svc-explore-label">Explore gifts</span>
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
                onMouseEnter={() => setHoveredCard('decorations')}
                onMouseLeave={() => setHoveredCard((prev) => (prev === 'decorations' ? null : prev))}
                onFocus={() => setHoveredCard('decorations')}
                onBlur={() => setHoveredCard((prev) => (prev === 'decorations' ? null : prev))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('decorations');
                  }
                }}
                style={{
                  transitionDelay: servicesSettled ? '0ms' : '160ms',
                }}
                className={`svc-card svc-decor-card group relative bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#D8CEBE] hover:border-[#C8A45D] shadow-sm hover:shadow-[0_18px_40px_-14px_rgba(197,160,89,0.42),0_0_0_1px_rgba(200,164,93,0.35)] hover:-translate-y-1.5 active:scale-[0.99] transition-all ${
                  servicesSettled ? 'duration-300 ease-out' : 'duration-700 ease-out'
                } ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } p-7 sm:p-10 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]`}
              >
                {/* Subtle golden light sweep overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl z-10"
                >
                  <div className="svc-gold-sweep-beam" />
                </div>

                <div className="relative z-20 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">

                      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#A9823F] bg-[#FBF6EA] px-3.5 py-1 rounded-full border border-[#DCC596]">
                        UDUPI · MANIPAL · MANGALORE
                      </span>

                      <span
                        aria-hidden="true"
                        className="w-9 h-9 rounded-full bg-[#FBF6EA] border border-[#DCC596] text-[#A9823F] group-hover:bg-[#C8A45D] group-hover:text-white group-hover:border-[#C8A45D] group-hover:shadow-[0_0_16px_rgba(223,190,122,0.5)] flex items-center justify-center transition-all duration-300 shrink-0"
                      >
                        <ArrowUpRight className="svc-decor-arrow w-4 h-4 transition-transform duration-300" />
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
                      {DECORATION_CATEGORIES.map((category, idx) => (
                        <li
                          key={category}
                          style={{
                            transitionDelay: servicesSettled ? '0ms' : `${260 + idx * 46}ms`,
                          }}
                          className={`flex items-center gap-2.5 text-sm text-[#4A0E18] py-1 border-b border-[#F0E6D8]/70 transition-all duration-500 ease-out ${
                            servicesVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-2'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shrink-0" />
                          <span>{category}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-20 pt-7 mt-7 border-t border-[#F0E6D8] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('decorations');
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#A9823F] group-hover:text-[#8B692F] cursor-pointer transition-colors"
                  >
                    <span className="svc-explore-label">Explore decorations</span>
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
      </div>
    </div>
  );
};
