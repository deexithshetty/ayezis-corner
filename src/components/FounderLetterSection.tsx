import React, { useEffect, useRef, useState } from 'react';

const LETTER_HEADING = 'A Note From Maliha';

const LETTER_PARAGRAPHS = [
  'Ayezis Corner is more than a business to me — it’s a creative journey that began in November 2020. As a woman entrepreneur, freelancer, daughter, wife and mom, I’ve built this space around something I truly love: helping people express their feelings through thoughtful gifts and meaningful celebrations.',
  'I believe that best gifts aren’t simply things; they carry a story. Whether you arrive with a clear idea or just a little inspiration, I love helping you explore options that fit your budget, expectations and timeline — so the final result feels personal to you.',
  'From customised gifts delivered across borders to event decorations around Udupi, Manipal and Mangalore, every enquiry is an opportunity to create something memorable. Thank you for being part of the Ayezis Corner story.',
];

const SIGNATURE_CLOSING = 'With love,';
const LETTER_SIGNATURE = 'Maliha';

// Persist playback state across scrolls/re-mounts within a single page visit
let hasPlayedFounderLetter = false;

/* Minimal champagne-gold floral illustration */
const GoldFloralEmblem: React.FC = () => (
  <div
    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFFDF9] border border-[#C5A059]/55 shadow-xs flex items-center justify-center relative"
    aria-hidden="true"
  >
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#DFBE7A]/40 flex items-center justify-center">
      <svg
        viewBox="0 0 80 80"
        className="w-14 h-14 sm:w-16 sm:h-16 text-[#B8924B]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 16 C45 25 46 34 40 43 C34 34 35 25 40 16 Z"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 43 C31 38 24 31 23 22 C31 24 37 31 40 43 Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 43 C49 38 56 31 57 22 C49 24 43 31 40 43 Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 44 C29 44 20 40 16 33 C24 32 33 36 40 44 Z"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeOpacity="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 44 C51 44 60 40 64 33 C56 32 47 36 40 44 Z"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeOpacity="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 44 L40 64"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M40 55 C34 55 29 52 26 48 C32 47 37 50 40 55 Z"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeOpacity="0.85"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 55 C46 55 51 52 54 48 C48 47 43 50 40 55 Z"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeOpacity="0.85"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="11" r="1.4" fill="currentColor" />
        <circle cx="31" cy="15" r="1" fill="currentColor" fillOpacity="0.65" />
        <circle cx="49" cy="15" r="1" fill="currentColor" fillOpacity="0.65" />
      </svg>
    </div>
  </div>
);

/* Subtle botanical corner sprig pattern for the warm ivory Founder section */
const BotanicalCorner: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 220 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M12 208 C46 156 96 102 184 36"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M68 136 C50 118 46 96 58 76 C74 88 78 112 68 136 Z"
      stroke="#C5A059"
      strokeWidth="1.1"
    />
    <path
      d="M104 102 C126 108 148 102 162 84 C140 78 118 84 104 102 Z"
      stroke="#C5A059"
      strokeWidth="1.1"
    />
    <path
      d="M134 74 C122 54 124 34 138 20 C150 36 148 56 134 74 Z"
      stroke="#C5A059"
      strokeWidth="1.1"
    />
    <path
      d="M42 168 C66 172 88 164 102 146 C80 140 58 148 42 168 Z"
      stroke="#C5A059"
      strokeWidth="1.1"
    />
    <circle cx="192" cy="30" r="2.5" fill="#C5A059" />
    <circle cx="172" cy="54" r="1.8" fill="#C5A059" />
    <circle cx="90" cy="64" r="1.8" fill="#C5A059" />
  </svg>
);

/* Burgundy & champagne-gold fountain pen illustration; exact nib tip at (2.2, 41.8) */
const FountainPenSvg: React.FC<{ className?: string }> = ({ className = 'w-10 h-10 sm:w-11 sm:h-11' }) => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <defs>
      <linearGradient id="penBarrelGrad" x1="12" y1="30" x2="38" y2="6" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4A0E18" />
        <stop offset="55%" stopColor="#7D1D2C" />
        <stop offset="100%" stopColor="#32070F" />
      </linearGradient>
      <linearGradient id="penGoldGrad" x1="2" y1="42" x2="18" y2="26" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A9823F" />
        <stop offset="50%" stopColor="#DFBE7A" />
        <stop offset="100%" stopColor="#C5A059" />
      </linearGradient>
    </defs>
    {/* Soft shadow beneath nib */}
    <ellipse cx="9" cy="40.5" rx="5.5" ry="1.5" fill="#32070F" fillOpacity="0.16" />
    {/* Fountain pen barrel */}
    <path
      d="M15.2 25.4 L33.6 7.0 C35.2 5.4 37.8 5.4 39.2 6.8 C40.6 8.2 40.6 10.8 39.0 12.4 L20.6 30.8 L15.2 25.4 Z"
      fill="url(#penBarrelGrad)"
      stroke="#24050B"
      strokeWidth="0.7"
    />
    {/* Delicate champagne-gold clip */}
    <path
      d="M27.4 12.2 L35.2 4.4 C36.1 3.5 37.4 3.8 37.9 4.5"
      stroke="#DFBE7A"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    {/* Gold collar rings */}
    <path
      d="M14.6 26.0 L20.0 31.4"
      stroke="#DFBE7A"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M17.8 22.8 L23.2 28.2"
      stroke="#DFBE7A"
      strokeOpacity="0.65"
      strokeWidth="1"
    />
    {/* Grip section */}
    <path
      d="M11.6 29.8 L15.0 26.4 L19.6 31.0 L16.2 34.4 L11.6 29.8 Z"
      fill="#32070F"
    />
    {/* Sculpted gold nib with writing tip at (2.2, 41.8) */}
    <path
      d="M2.2 41.8 L10.6 30.2 L15.8 35.4 L2.2 41.8 Z"
      fill="url(#penGoldGrad)"
      stroke="#8D692B"
      strokeWidth="0.75"
      strokeLinejoin="round"
    />
    {/* Nib slit & breather hole */}
    <line x1="2.8" y1="41.2" x2="9.4" y2="34.6" stroke="#32070F" strokeWidth="0.8" strokeLinecap="round" />
    <circle cx="9.8" cy="34.2" r="1.05" fill="#32070F" />
  </svg>
);

/**
 * Natural calligraphic vertical offset curve approximating the stroke rhythm
 * of cursive "Maliha" (M peaks -> a -> tall l loop -> i -> tall h arch -> a tail).
 */
const signatureStrokeOffset = (t: number, height: number): { dy: number; tilt: number } => {
  let yNorm = 0;
  if (t < 0.28) {
    const p = t / 0.28;
    yNorm = -0.62 * Math.abs(Math.sin(p * Math.PI * 2));
  } else if (t < 0.44) {
    const p = (t - 0.28) / 0.16;
    yNorm = -0.26 * Math.sin(p * Math.PI);
  } else if (t < 0.58) {
    const p = (t - 0.44) / 0.14;
    yNorm = -0.68 * Math.sin(p * Math.PI);
  } else if (t < 0.70) {
    const p = (t - 0.58) / 0.12;
    yNorm = -0.24 * Math.sin(p * Math.PI);
  } else if (t < 0.86) {
    const p = (t - 0.70) / 0.16;
    yNorm = -0.62 * Math.sin(p * Math.PI * 1.25);
  } else {
    const p = (t - 0.86) / 0.14;
    yNorm = -0.22 * Math.sin(p * Math.PI);
  }

  const tilt = -5 + Math.cos(t * Math.PI * 7) * 4.5;
  return { dy: yNorm * height * 0.55, tilt };
};

export const FounderLetterSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const closingRef = useRef<HTMLSpanElement | null>(null);
  const signatureBoxRef = useRef<HTMLDivElement | null>(null);
  const signatureTextRef = useRef<HTMLSpanElement | null>(null);
  const penRef = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  const [paperVisible, setPaperVisible] = useState(hasPlayedFounderLetter);
  const [bodyVisible, setBodyVisible] = useState(hasPlayedFounderLetter);
  const [showFlourish, setShowFlourish] = useState(hasPlayedFounderLetter);
  const [penResting, setPenResting] = useState(hasPlayedFounderLetter);
  const [skipAnimation] = useState<boolean>(() => {
    if (hasPlayedFounderLetter) return true;
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const clearInkMask = (el: HTMLElement | null) => {
    if (!el) return;
    el.style.opacity = '1';
    el.style.removeProperty('mask-image');
    el.style.removeProperty('-webkit-mask-image');
  };

  const applyInkReveal = (el: HTMLElement | null, progress: number, featherPct = 18) => {
    if (!el) return;
    if (progress <= 0) {
      el.style.opacity = '0';
      return;
    }
    if (progress >= 1) {
      clearInkMask(el);
      return;
    }
    const pct = progress * 100;
    const solidEnd = Math.max(0, pct - featherPct * 0.45);
    const fadeEnd = Math.min(100, pct + featherPct * 0.55);
    const mask = `linear-gradient(90deg, #000 ${solidEnd.toFixed(1)}%, transparent ${fadeEnd.toFixed(1)}%)`;
    el.style.opacity = '1';
    el.style.setProperty('mask-image', mask);
    el.style.setProperty('-webkit-mask-image', mask);
  };

  // Show complete letter immediately for reduced-motion or repeat visits
  useEffect(() => {
    if (!skipAnimation) return;
    hasPlayedFounderLetter = true;
    setPaperVisible(true);
    setBodyVisible(true);
    setShowFlourish(true);
    setPenResting(true);
    clearInkMask(closingRef.current);
    clearInkMask(signatureTextRef.current);
  }, [skipAnimation]);

  // Viewport-triggered one-time smooth paragraph fade-in + fountain pen signature animation
  useEffect(() => {
    if (skipAnimation || startedRef.current) return;
    const section = sectionRef.current;
    if (!section || typeof window === 'undefined') return;

    let rafId = 0;
    let bodyTimerId = 0;
    let signatureTimerId = 0;

    const revealSignatureImmediately = () => {
      clearInkMask(closingRef.current);
      clearInkMask(signatureTextRef.current);
      setShowFlourish(true);
      setPenResting(true);
      hasPlayedFounderLetter = true;
    };

    const startSignatureSequence = () => {
      type Phase = 'closing' | 'penArrive' | 'signature' | 'flourish';
      let phase: Phase = 'closing';
      let phaseStart = performance.now();

      const closingDuration = 620;
      const penArriveDuration = 340;
      const signatureDuration = 1400;
      const flourishDuration = 1050;

      const positionPenOnSignature = (
        xOffset: number,
        yOffset: number,
        tiltDeg: number,
        opacity: number
      ) => {
        const penEl = penRef.current;
        if (!penEl) return;
        penEl.style.opacity = String(opacity);
        penEl.style.transform = `translate3d(${(xOffset - 3).toFixed(1)}px, ${(yOffset - 40).toFixed(1)}px, 0) rotate(${tiltDeg.toFixed(1)}deg)`;
      };

      const tick = (now: number) => {
        const elapsed = now - phaseStart;

        if (phase === 'closing') {
          const t = Math.min(1, elapsed / closingDuration);
          const ease = 1 - Math.pow(1 - t, 2);
          applyInkReveal(closingRef.current, ease, 24);
          if (t >= 1) {
            clearInkMask(closingRef.current);
            phase = 'penArrive';
            phaseStart = now;
          }
          rafId = window.requestAnimationFrame(tick);
          return;
        }

        if (phase === 'penArrive') {
          const sigBox = signatureBoxRef.current;
          const sigText = signatureTextRef.current;
          if (!sigBox || !sigText) {
            revealSignatureImmediately();
            return;
          }
          const boxRect = sigBox.getBoundingClientRect();
          const textRect = sigText.getBoundingClientRect();
          const startX = textRect.left - boxRect.left + 2;
          const baselineY = textRect.bottom - boxRect.top - textRect.height * 0.24;

          const t = Math.min(1, elapsed / penArriveDuration);
          const ease = 1 - Math.pow(1 - t, 3);
          positionPenOnSignature(
            startX - (1 - ease) * 10,
            baselineY - (1 - ease) * 14,
            -10 + ease * 5,
            ease
          );

          if (t >= 1) {
            phase = 'signature';
            phaseStart = now;
          }
          rafId = window.requestAnimationFrame(tick);
          return;
        }

        if (phase === 'signature') {
          const sigBox = signatureBoxRef.current;
          const sigText = signatureTextRef.current;
          if (!sigBox || !sigText) {
            revealSignatureImmediately();
            return;
          }
          const boxRect = sigBox.getBoundingClientRect();
          const textRect = sigText.getBoundingClientRect();
          const startX = textRect.left - boxRect.left + 2;
          const sigWidth = Math.max(textRect.width - 4, 1);
          const baselineY = textRect.bottom - boxRect.top - textRect.height * 0.24;

          const t = Math.min(1, elapsed / signatureDuration);
          const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          applyInkReveal(sigText, ease, 16);

          const { dy, tilt } = signatureStrokeOffset(ease, textRect.height);
          positionPenOnSignature(startX + sigWidth * ease, baselineY + dy, tilt, 1);

          if (t >= 1) {
            clearInkMask(sigText);
            setShowFlourish(true);
            phase = 'flourish';
            phaseStart = now;
          }
          rafId = window.requestAnimationFrame(tick);
          return;
        }

        if (phase === 'flourish') {
          const sigBox = signatureBoxRef.current;
          const sigText = signatureTextRef.current;
          const t = Math.min(1, elapsed / flourishDuration);
          const ease = 1 - Math.pow(1 - t, 3);

          if (sigBox && sigText) {
            const boxRect = sigBox.getBoundingClientRect();
            const textRect = sigText.getBoundingClientRect();
            const startX = textRect.left - boxRect.left + 3;
            const flourishWidth = Math.max(textRect.width + 26, 128);
            const flourishY = textRect.bottom - boxRect.top + 8;

            const penX = startX + flourishWidth * ease;
            const penY = flourishY - Math.sin(ease * Math.PI) * 5.5;
            const tilt = -4 + ease * 12;
            positionPenOnSignature(penX, penY, tilt, 1 - Math.max(0, t - 0.72) * 0.55);
          }

          if (t >= 1) {
            hasPlayedFounderLetter = true;
            setPenResting(true);
            return;
          }
          rafId = window.requestAnimationFrame(tick);
        }
      };

      rafId = window.requestAnimationFrame(tick);
    };

    const startLetterSequence = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setPaperVisible(true);

      // Gentle complete-paragraph fade-in starts shortly after the stationery appears
      bodyTimerId = window.setTimeout(() => {
        setBodyVisible(true);
      }, 220);

      // Begin handwritten "With love," and fountain-pen "Maliha" signature after body fade settles
      signatureTimerId = window.setTimeout(() => {
        startSignatureSequence();
      }, 1550);
    };

    if (!('IntersectionObserver' in window)) {
      startLetterSequence();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          startLetterSequence();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (bodyTimerId) window.clearTimeout(bodyTimerId);
      if (signatureTimerId) window.clearTimeout(signatureTimerId);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [skipAnimation]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-12 pb-6 sm:pt-16 sm:pb-8 bg-[#FAF7F2]"
    >
      {/* Subtle botanical line-art watermarks */}
      <BotanicalCorner className="absolute -top-6 -left-6 w-48 h-48 sm:w-64 sm:h-64 opacity-[0.14]" />
      <BotanicalCorner className="absolute -bottom-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 opacity-[0.14] rotate-180" />

      <div
        className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          paperVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Premium Letter Stationery Card */}
        <div className="letter-stationery-paper relative rounded-3xl border border-[#C5A059]/45 p-7 sm:p-11 lg:p-14 shadow-[0_18px_50px_-22px_rgba(50,7,15,0.18)] overflow-hidden">
          {/* Very subtle cotton paper grain texture */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.045] mix-blend-multiply"
          >
            <filter id="stationeryPaperGrain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="2"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#stationeryPaperGrain)" />
          </svg>

          {/* Delicate double champagne-gold stationery frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 sm:inset-4 rounded-2xl border border-[#DFBE7A]/35"
          />

          {/* Decorative champagne-gold corner flourishes */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute top-4 left-4 sm:top-5 sm:left-5 w-8 h-8 sm:w-10 sm:h-10 text-[#C5A059]/60"
          >
            <path d="M2 22 L2 6 C2 3.8 3.8 2 6 2 L22 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6 14 C6 8.5 8.5 6 14 6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" />
          </svg>
          <svg
            viewBox="0 0 42 42"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 text-[#C5A059]/60 rotate-90"
          >
            <path d="M2 22 L2 6 C2 3.8 3.8 2 6 2 L22 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6 14 C6 8.5 8.5 6 14 6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" />
          </svg>
          <svg
            viewBox="0 0 42 42"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 right-4 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 text-[#C5A059]/60 rotate-180"
          >
            <path d="M2 22 L2 6 C2 3.8 3.8 2 6 2 L22 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6 14 C6 8.5 8.5 6 14 6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" />
          </svg>
          <svg
            viewBox="0 0 42 42"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 left-4 sm:bottom-5 sm:left-5 w-8 h-8 sm:w-10 sm:h-10 text-[#C5A059]/60 -rotate-90"
          >
            <path d="M2 22 L2 6 C2 3.8 3.8 2 6 2 L22 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6 14 C6 8.5 8.5 6 14 6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Minimal Gold Floral Illustration, Serif Heading & Founder Name */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
              <GoldFloralEmblem />

              <div className="space-y-3">
                <span className="block text-[11px] font-semibold tracking-[0.22em] uppercase text-[#A9823F]">
                  Founder&rsquo;s Note
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-[#32070F] tracking-tight leading-[1.15]">
                  The heart behind the brand
                </h3>

                <div className="space-y-0.5 pt-1">
                  <p className="text-base sm:text-lg font-medium text-[#32070F]">
                    Meet the founder,
                  </p>
                  <p className="font-serif text-3xl sm:text-4xl italic text-[#7D1D2C]">
                    Maliha.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5" aria-hidden="true">
                <span className="w-10 h-px bg-[#C5A059]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="w-5 h-px bg-[#C5A059]/50" />
              </div>
            </div>

            {/* Right Column: Personal Handwritten Letter Stationery */}
            <div className="relative lg:col-span-7 space-y-4 lg:border-l lg:border-[#DFBE7A]/40 lg:pl-11">
              {/* Handwritten Script Heading: "A Note From Maliha" */}
              <div className="pb-1">
                <p
                  className={`font-script text-4xl sm:text-[2.85rem] text-[#7D1D2C] leading-[1.15] tracking-normal inline-block transition-all duration-[1400ms] ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                    bodyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  {LETTER_HEADING}
                </p>
              </div>

              {/* Exact Preserved Founder Story Paragraphs — Smooth Complete-Paragraph Fade-In */}
              <div className="space-y-4 text-base sm:text-[1.0625rem] text-[#554643] font-light leading-relaxed">
                {LETTER_PARAGRAPHS.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    style={{
                      transitionDelay: !skipAnimation && bodyVisible ? `${200 + pIdx * 240}ms` : '0ms',
                    }}
                    className={`transition-all duration-[1600ms] ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                      pIdx === 2 ? 'text-[#32070F] font-normal' : ''
                    } ${bodyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Handwritten Closing "With love," + Animated Fountain Pen Writing "Maliha" + Gold Flourish */}
              <div ref={signatureBoxRef} className="relative pt-3 inline-flex flex-col items-start">
                {/* Animated fountain pen writing the signature & gold flourish */}
                {!skipAnimation && !penResting && (
                  <div
                    ref={penRef}
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 z-20 will-change-transform"
                    style={{ opacity: 0, transform: 'translate3d(0px, 0px, 0)' }}
                  >
                    <FountainPenSvg />
                  </div>
                )}

                <span
                  ref={closingRef}
                  className="font-script text-2xl sm:text-[1.75rem] text-[#8D692B] leading-tight mb-0.5 inline-block"
                  style={{ opacity: skipAnimation ? 1 : 0 }}
                >
                  {SIGNATURE_CLOSING}
                </span>

                <div className="flex items-end gap-2">
                  <span
                    ref={signatureTextRef}
                    className="font-script text-4xl sm:text-5xl text-[#7D1D2C] leading-none pr-1.5 inline-block"
                    style={{ opacity: skipAnimation ? 1 : 0 }}
                  >
                    {LETTER_SIGNATURE}
                  </span>

                  {/* Resting fountain pen settles gracefully beside the signature */}
                  <span
                    aria-hidden="true"
                    className={`inline-block -mb-1 transition-opacity duration-500 motion-reduce:transition-none ${
                      penResting ? 'opacity-90' : 'opacity-0'
                    }`}
                  >
                    <FountainPenSvg className="w-8 h-8 sm:w-9 sm:h-9 rotate-[8deg]" />
                  </span>
                </div>

                {/* Subtle champagne-gold ink flourish drawn after signature completes */}
                <svg
                  viewBox="0 0 156 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-32 sm:w-36 h-4 mt-0.5 overflow-visible"
                >
                  <path
                    d="M3 10 C32 3, 76 3.5, 118 9.5 C132 11.5, 145 10.5, 152 6.5 C144 13, 128 15, 112 12.5"
                    pathLength={100}
                    stroke="#C5A059"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`founder-flourish-path ${
                      showFlourish ? 'founder-flourish-active' : ''
                    }`}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
