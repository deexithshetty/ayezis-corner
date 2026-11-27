import React, { useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  Gift,
  Briefcase,
  Gem,
  Truck,
  Heart,
  ArrowRight,
  Instagram,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';
import { ResilientImage } from '../ResilientImage';
import { PanIndiaDeliveryMap } from '../PanIndiaDeliveryMap';
import { FounderLetterSection } from '../FounderLetterSection';
import { PageRoute } from '../../types/navigation';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

const whyChooseItems = [
  {
    icon: Sparkles,
    text: 'Unique and personalised gifting solutions',
    iconAnimClass: 'why-icon-sparkle',
    hasGlint: false,
  },
  {
    icon: Gift,
    text: 'Customised gifts for every occasion',
    iconAnimClass: 'why-icon-gift',
    hasGlint: false,
  },
  {
    icon: Briefcase,
    text: 'Professional corporate gifting solutions',
    iconAnimClass: 'why-icon-briefcase',
    hasGlint: false,
  },
  {
    icon: Gem,
    text: 'Quality products at competitive prices',
    iconAnimClass: 'why-icon-gem',
    hasGlint: true,
  },
  {
    icon: Truck,
    text: 'Pan-India delivery',
    iconAnimClass: 'why-icon-truck',
    hasGlint: false,
  },
  {
    icon: Heart,
    text: 'Gifts designed with love, creativity, and attention to detail',
    iconAnimClass: 'why-icon-heart',
    hasGlint: false,
  },
];

interface StoryTransitionProps {
  variant: 'letter-to-india' | 'india-to-benefits';
}

const StoryTransitionConnector: React.FC<StoryTransitionProps> = ({ variant }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setVisible(true);
      return;
    }

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isLetterToIndia = variant === 'letter-to-india';

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative h-20 sm:h-24 overflow-hidden select-none pointer-events-none ${
        visible ? 'story-thread-visible' : ''
      } ${isLetterToIndia ? 'bg-[#1B0307]' : 'bg-[#FAF7F2]'}`}
    >
      {/* Seamless soft curved horizon between warm ivory and deep burgundy */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 ${
          isLetterToIndia ? 'bg-[#FAF7F2]' : 'bg-[#1B0307]'
        }`}
      />
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {isLetterToIndia ? (
          <>
            <path
              d="M0,44 Q720,86 1440,44 L1440,96 L0,96 Z"
              fill="#1B0307"
            />
            <path
              d="M0,44 Q720,86 1440,44"
              fill="none"
              stroke="#DFBE7A"
              strokeOpacity="0.28"
              strokeWidth="1.2"
            />
          </>
        ) : (
          <>
            <path
              d="M0,52 Q720,10 1440,52 L1440,96 L0,96 Z"
              fill="#FAF7F2"
            />
            <path
              d="M0,52 Q720,10 1440,52"
              fill="none"
              stroke="#C5A059"
              strokeOpacity="0.32"
              strokeWidth="1.2"
            />
          </>
        )}
      </svg>

      {/* Center animated champagne-gold connecting thread */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <svg viewBox="0 0 120 96" fill="none" className="w-28 h-full overflow-visible">
          <defs>
            <linearGradient
              id={isLetterToIndia ? 'threadLetterToIndia' : 'threadIndiaToBenefits'}
              x1="60"
              y1="4"
              x2="60"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={isLetterToIndia ? '#C5A059' : '#DFBE7A'} stopOpacity="0.45" />
              <stop offset="50%" stopColor="#DFBE7A" stopOpacity="0.95" />
              <stop offset="100%" stopColor={isLetterToIndia ? '#DFBE7A' : '#A9823F'} stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {isLetterToIndia ? (
            <>
              {/* Subtle gold flourish echo emerging from below Maliha's letter */}
              <path
                d="M42 8 Q54 11 60 18 Q66 11 78 8"
                pathLength={100}
                stroke="#C5A059"
                strokeOpacity="0.7"
                strokeWidth="1.15"
                strokeLinecap="round"
                className="story-thread-path"
              />
              {/* Thin champagne-gold thread extending into Pan-India Delivery */}
              <path
                d="M60 16 L60 82"
                pathLength={100}
                stroke="url(#threadLetterToIndia)"
                strokeWidth="1.35"
                strokeLinecap="round"
                className="story-thread-path"
              />
              {/* Luminous gold arrival point */}
              <circle
                cx="60"
                cy="84"
                r="3.2"
                fill="#DFBE7A"
                stroke="#1B0307"
                strokeWidth="1.2"
                className="story-thread-node"
              />
            </>
          ) : (
            <>
              {/* Dotted golden delivery route dissolving into a thin decorative gold line */}
              <path
                d="M60 6 L60 42"
                stroke="#DFBE7A"
                strokeOpacity="0.65"
                strokeWidth="1.4"
                strokeDasharray="2 5.5"
                strokeLinecap="round"
              />
              <path
                d="M60 36 L60 82"
                pathLength={100}
                stroke="url(#threadIndiaToBenefits)"
                strokeWidth="1.35"
                strokeLinecap="round"
                className="story-thread-path"
              />
              {/* Small gold diamond pointing into "Why Choose Ayezis Corner?" */}
              <path
                d="M60 80 L64 85 L60 90 L56 85 Z"
                fill="#C5A059"
                className="story-thread-node"
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const panIndiaRef = useRef<HTMLElement | null>(null);
  const [panIndiaVisible, setPanIndiaVisible] = useState(false);

  const whySectionRef = useRef<HTMLElement | null>(null);
  const [whyVisible, setWhyVisible] = useState(false);
  const [whySettled, setWhySettled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setPanIndiaVisible(true);
      return;
    }

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      setPanIndiaVisible(true);
      return;
    }

    const node = panIndiaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPanIndiaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setWhyVisible(true);
      setWhySettled(true);
      return;
    }

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      setWhyVisible(true);
      setWhySettled(true);
      return;
    }

    const node = whySectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!whyVisible || whySettled) return;
    const timer = window.setTimeout(() => setWhySettled(true), 1050);
    return () => window.clearTimeout(timer);
  }, [whyVisible, whySettled]);

  return (
    <div className="bg-[#FAF7F2] text-[#241E1C]">
      {/* 1. About Introduction — Compact Dark Burgundy & Champagne-Gold */}
      <section className="relative overflow-hidden bg-[#1A0307] text-[#FAF7F2] border-b border-[#DFBE7A]/20">
        {/* Subtle real studio photo backdrop behind measured dark burgundy scrim */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/hampers/new-premium-gift-box.jpeg"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A0307]/95 via-[#2E060E]/90 to-[#140205]/95" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Focused Heading & Exact Introductory Business Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5 text-xs tracking-[0.22em] uppercase text-[#DFBE7A] font-medium">
                <span>About {siteConfig.businessName}</span>
                <span aria-hidden="true">·</span>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#FFFDF9] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{siteConfig.instagramHandle}</span>
                </a>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.95rem] font-light text-[#FFFDF9] tracking-tight leading-[1.14] [text-wrap:balance]">
                Ayezis Corner – Gifts That Make Every Occasion Special!
              </h2>

              <div className="w-16 h-px bg-[#DFBE7A]/65" />

              <div className="space-y-3.5 text-sm sm:text-base text-[#EAE0D2]/90 leading-relaxed font-light">
                <p>
                  At Ayezis Corner, we specialise in customised gifts and corporate gifting solutions that make every occasion memorable.
                </p>
                <p>
                  From personalised gifts for your loved ones to premium corporate gifts for clients, employees, and business associates, we bring your ideas to life with creativity and care.
                </p>
                <p>
                  We deliver customised and corporate gifts across every corner of India, ensuring that your thoughtful gifts reach their destination, wherever you are.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('gifts')}
                  className="px-5 py-2.5 rounded-full bg-[#DFBE7A] hover:bg-[#C5A059] text-[#1A0307] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Customised Gifts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('decorations')}
                  className="px-5 py-2.5 rounded-full bg-[#FFFDF9]/[0.07] hover:bg-[#FFFDF9]/[0.14] text-[#FAF7F2] border border-[#DFBE7A]/35 text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>View Event Decorations</span>
                  <ArrowRight className="w-4 h-4 text-[#DFBE7A]" />
                </button>

                <a
                  href={getWhatsAppLink(
                    "Hi Ayezis Corner, I'd like to enquire about customised or corporate gifts."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#DFBE7A] hover:text-[#FFFDF9] px-2 py-2 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Curated Gift Hamper Photo */}
            <div className="lg:col-span-5">
              <div className="relative max-w-[320px] sm:max-w-[350px] mx-auto lg:ml-auto lg:mr-0">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#DFBE7A]/30 bg-[#2B060D]">
                  <ResilientImage
                    src="/images/baby-newborn/new-baby-gift-hamper.jpeg"
                    alt="Ayezis Corner curated gift hamper wrapped in blush tulle with satin ribbon, fresh roses, chocolates, scented candle, and floral keepsake box"
                    className="w-full h-auto block object-cover"
                    fallbackTitle="Ayezis Corner Customised Gifts"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-20 h-20 border-r-2 border-b-2 border-[#DFBE7A]/50 rounded-br-3xl pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Part 1 — A Note From Maliha (Handwritten Personal Letter) */}
      <FounderLetterSection />

      {/* Transition 1 — Champagne-Gold Ink Thread From Letter to Pan-India Delivery */}
      <StoryTransitionConnector variant="letter-to-india" />

      {/* 3. Part 2 — Pan-India Delivery (Preserved Accurate Map + Gentle Fade & Scale-Up) */}
      <section
        ref={panIndiaRef}
        className="relative overflow-hidden pt-6 pb-8 sm:pt-8 sm:pb-12 bg-[#1B0307] text-[#FAF7F2]"
      >
        {/* Soft burgundy radial depth */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(125,29,44,0.38),rgba(26,3,7,0.96)_72%)] pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & Delivery Promise */}
            <div
              className={`lg:col-span-6 space-y-5 text-center lg:text-left transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                panIndiaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#DFBE7A]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Pan-India Delivery · From Udupi, Karnataka</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-light text-[#FFFDF9] tracking-tight leading-[1.15] [text-wrap:balance]">
                Thoughtful Gifts, Delivered Across India
              </h3>

              <p className="text-base sm:text-lg text-[#EAE0D2]/90 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                From Udupi to every corner of India, we bring your gifting ideas to life with care and creativity.
              </p>

              {/* Tasteful regional coverage bar */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-xs uppercase tracking-[0.16em] text-[#DFBE7A]/85">
                <span>North</span>
                <span aria-hidden="true" className="text-[#DFBE7A]/40">·</span>
                <span>South</span>
                <span aria-hidden="true" className="text-[#DFBE7A]/40">·</span>
                <span>East</span>
                <span aria-hidden="true" className="text-[#DFBE7A]/40">·</span>
                <span>West</span>
                <span aria-hidden="true" className="text-[#DFBE7A]/40">·</span>
                <span>Across India</span>
              </div>

              <div className="pt-4 border-t border-[#DFBE7A]/20 space-y-4">
                <p className="font-serif text-xl sm:text-2xl italic text-[#DFBE7A] leading-snug">
                  Your Thoughtful Gift. Our Delivery Promise.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <a
                    href={getWhatsAppLink(
                      "Hi Ayezis Corner, I'd like to enquire about customised gift delivery across India."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#DFBE7A] hover:bg-[#C5A059] text-[#1A0307] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enquire for Pan-India Delivery</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Animated Accurate Outline Map of India with Gentle Fade-In & Scale-Up */}
            <div
              className={`lg:col-span-6 transition-all duration-[900ms] delay-150 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                panIndiaVisible
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-[0.95] translate-y-3'
              }`}
            >
              <div className="rounded-3xl bg-[#FFFDF9]/[0.03] border border-[#DFBE7A]/20 p-2.5 sm:p-5 shadow-2xl">
                <PanIndiaDeliveryMap />
                <div className="mt-2 pt-3 border-t border-[#DFBE7A]/15 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#EAE0D2]/70 px-2">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#DFBE7A]" aria-hidden="true" />
                    <span>Studio Origin: Udupi, Karnataka</span>
                  </span>
                  <span>Pan-India Custom &amp; Corporate Gifting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition 2 — Golden Route Fading Into Thin Decorative Line to Brand Benefits */}
      <StoryTransitionConnector variant="india-to-benefits" />

      {/* 4. Part 3 — Why Choose Ayezis Corner? & Closing Brand Experience */}
      <section
        ref={whySectionRef}
        className={`pt-6 pb-14 sm:pt-8 sm:pb-18 bg-[#FAF7F2] border-b border-[#E8DFD3] ${
          whyVisible ? 'why-visible' : ''
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9">
          {/* Heading with smooth viewport fade-in and subtle expanding gold underline */}
          <div
            className={`text-center max-w-2xl mx-auto space-y-2.5 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <span className="block text-xs font-semibold tracking-[0.22em] uppercase text-[#A9823F]">
              Craftsmanship · Personalisation · Pan-India Delivery
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-[#32070F] tracking-tight [text-wrap:balance]">
              Why Choose Ayezis Corner?
            </h3>
            <div
              aria-hidden="true"
              className={`mx-auto h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent origin-center transition-transform duration-700 delay-200 ease-out motion-reduce:transition-none ${
                whyVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>

          {/* Exact 6 Client Benefits — Compact 2-Column Desktop / 1-Column Mobile */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {whyChooseItems.map(({ icon: Icon, text, iconAnimClass, hasGlint }, index) => (
              <li
                key={text}
                style={{
                  transitionDelay: whyVisible && !whySettled ? `${120 + index * 85}ms` : '0ms',
                }}
                className={`why-card group flex items-center gap-3.5 rounded-2xl bg-[#FFFDF9] border border-[#DFBE7A]/40 hover:border-[#C5A059] px-4 py-3.5 sm:px-5 sm:py-4 shadow-2xs hover:-translate-y-1 hover:shadow-[0_10px_28px_-10px_rgba(197,160,89,0.42)] transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                  whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`${iconAnimClass} relative overflow-hidden w-9 h-9 rounded-full bg-[#FBF6EA] group-hover:bg-[#F7EEDB] border border-[#DFBE7A]/60 group-hover:border-[#C5A059] text-[#A9823F] flex items-center justify-center shrink-0 transition-colors duration-300`}
                >
                  {hasGlint && (
                    <span className="why-gem-glint pointer-events-none absolute inset-y-0 w-3 bg-gradient-to-r from-transparent via-[#FFFDF9]/90 to-transparent opacity-0" />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                </span>
                <span className="text-sm sm:text-[0.975rem] text-[#32070F] leading-snug font-medium">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Exact Preserved Closing Tagline & Promotional Text */}
          <div
            style={{ transitionDelay: whyVisible ? '420ms' : '0ms' }}
            className={`why-tagline-card relative overflow-hidden rounded-3xl bg-[#24050B] text-[#FAF7F2] border border-[#DFBE7A]/25 px-6 py-8 sm:px-10 sm:py-10 text-center space-y-3 shadow-md transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Animated thin champagne-gold decorative perimeter border */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] overflow-visible"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="23"
                ry="23"
                pathLength={100}
                fill="none"
                stroke="#DFBE7A"
                strokeWidth="1.25"
                className="why-tagline-border"
              />
            </svg>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-3 left-3 w-6 h-6 border-t border-l border-[#DFBE7A]/40 rounded-tl-lg"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#DFBE7A]/40 rounded-br-lg"
            />

            <p
              style={{ transitionDelay: whyVisible ? '520ms' : '0ms' }}
              className={`why-tagline-shimmer font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-normal italic leading-snug [text-wrap:balance] transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                whyVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              You Imagine It, We Customise It, We Deliver It!
            </p>
            <p className="text-sm sm:text-base text-[#EAE0D2]/90 leading-relaxed font-light max-w-2xl mx-auto">
              Make every celebration, relationship, and business connection more meaningful with Ayezis Corner.
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#FFFDF9] tracking-wide pt-1">
              Ayezis Corner – Your One-Stop Destination for Personalised &amp; Corporate Gifting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
