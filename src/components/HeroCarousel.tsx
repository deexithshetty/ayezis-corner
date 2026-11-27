import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { PageRoute } from '../types/navigation';

export interface CarouselSlide {
  id: string;
  category: string;
  alt: string;
  image: string;
  fit: 'cover' | 'contain-framed';
  objectPosition?: string;
}

const slides: CarouselSlide[] = [
  {
    id: 'slide-blush-wedding-stage',
    category: 'Wedding & Stage Decorations',
    alt: 'Blush & Ivory Floral Wedding Stage Setup – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.39_PM_7a8ba3fc.jpeg',
    fit: 'cover',
    objectPosition: '50% 45%',
  },
  {
    id: 'slide-chocolate-rose-hamper',
    category: 'Gift Hampers',
    alt: 'Luxury Chocolate & Fresh Rose Gift Box Hamper – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.41_PM__2__cbb970ab.jpeg',
    fit: 'cover',
    objectPosition: '50% 50%',
  },
  {
    id: 'slide-pastel-pink-stage',
    category: 'Wedding & Event Decorations',
    alt: 'Pastel Blush Rose Arch & Tufted Sofa Stage – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.44_PM__2__5ee581e0.jpeg',
    fit: 'cover',
    objectPosition: '50% 45%',
  },
  {
    id: 'slide-ferrero-rose-basket',
    category: 'Gift Hampers',
    alt: 'Ferrero Rocher & Red Roses Gold Gift Basket – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.41_PM__1__735e9cf8.jpeg',
    fit: 'contain-framed',
  },
  {
    id: 'slide-fairylight-backdrop',
    category: 'Stage Setups',
    alt: 'Warm Fairy-Light & Floral Wedding Backdrop – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.44_PM_517e81bf.jpeg',
    fit: 'cover',
    objectPosition: '50% 40%',
  },
  {
    id: 'slide-personalised-prayer-mats',
    category: 'Customised Gifts',
    alt: 'Personalised Velvet Couple Prayer Mats with Gold Embroidery – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.43_PM__2__dc2be594.jpeg',
    fit: 'cover',
    objectPosition: '50% 50%',
  },
  {
    id: 'slide-mehendi-floral-stage',
    category: 'Event Decorations',
    alt: 'Vibrant Mehendi & Haldi Floral Arch Stage Setup – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.40_PM__2__42c38141.jpeg',
    fit: 'contain-framed',
  },
  {
    id: 'slide-led-acrylic-plaque',
    category: 'Customised Gifts',
    alt: 'Personalised Illuminated Acrylic Couple LED Plaque – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.43_PM_1a3d9195.jpeg',
    fit: 'contain-framed',
  },
  {
    id: 'slide-crimson-rose-arch-stage',
    category: 'Wedding Decorations',
    alt: 'Red & Pink Rose Circular Arch Reception Stage – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.41_PM_7ec5ed89.jpeg',
    fit: 'contain-framed',
  },
  {
    id: 'slide-couple-keepsake-frame',
    category: 'Customised Gifts',
    alt: 'Personalised Gold-Trimmed Couple Keepsake Frame – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.42_PM_28c7bdd6.jpeg',
    fit: 'contain-framed',
  },
  {
    id: 'slide-sage-floral-arch-stage',
    category: 'Stage Setups',
    alt: 'White Rose & Sage Pleated Drape Circular Arch Stage – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.39_PM__1__ed2311aa.jpeg',
    fit: 'contain-framed',
  },
  {
    id: 'slide-engraved-led-keepsake',
    category: 'Customised Gifts',
    alt: 'Custom Engraved Glowing LED Couple Keepsake Lamp – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.43_PM__1__08f23fb4.jpeg',
    fit: 'cover',
    objectPosition: '50% 45%',
  },
  {
    id: 'slide-ivory-floral-arch-stage',
    category: 'Event Decorations',
    alt: 'Ivory Rose & Fairy-Light Celebration Stage – Ayezis Corner',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-27_at_2.08.40_PM__1__cebf8f74.jpeg',
    fit: 'contain-framed',
  },
];

interface HeroCarouselProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play timer
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Constellation / Particle Network Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particleCount = Math.min(36, Math.floor(width / 32));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.45 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles with faint gold lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(223, 190, 122, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223, 190, 122, ${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full min-h-[580px] sm:min-h-[680px] lg:min-h-[740px] bg-[#0E0305] overflow-hidden flex flex-col justify-between py-8 sm:py-12 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Constellation Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* 2. Ambient Golden Spotlight Glow centered on stage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[480px] bg-gradient-to-b from-[#C5A059]/15 via-[#7D1D2C]/20 to-transparent blur-3xl pointer-events-none z-0 rounded-full" />
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[340px] sm:w-[460px] h-[70px] bg-[#DFBE7A]/25 blur-2xl pointer-events-none z-0 rounded-full" />

      {/* 3. Top Subtle Title */}
      <div className="relative z-10 text-center px-4 mb-2">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#DFBE7A]/90">
          Curated Showcase · Ayezis Corner
        </span>
      </div>

      {/* 4. 3D Coverflow Showcase Cards Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-4 perspective-[1200px]">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 lg:left-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/75 border border-[#DFBE7A]/30 text-[#DFBE7A] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 lg:right-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/75 border border-[#DFBE7A]/30 text-[#DFBE7A] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* The Carousel Cards Track */}
        <div className="relative w-full h-[420px] sm:h-[490px] lg:h-[530px] flex items-center justify-center">
          {slides.map((slide, index) => {
            let offset = index - activeIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;
            const isFarPrev = offset === -2;
            const isFarNext = offset === 2;

            const isVisible = Math.abs(offset) <= 2;
            if (!isVisible) return null;

            let translateX = '0%';
            let scale = 1;
            let zIndex = 30;
            let opacity = 1;
            let blur = 'blur(0px)';

            if (isActive) {
              translateX = '0%';
              scale = 1;
              zIndex = 30;
              opacity = 1;
              blur = 'blur(0px)';
            } else if (isPrev) {
              translateX = '-62%';
              scale = 0.84;
              zIndex = 20;
              opacity = 0.45;
              blur = 'blur(1px)';
            } else if (isNext) {
              translateX = '62%';
              scale = 0.84;
              zIndex = 20;
              opacity = 0.45;
              blur = 'blur(1px)';
            } else if (isFarPrev) {
              translateX = '-115%';
              scale = 0.7;
              zIndex = 10;
              opacity = 0.2;
              blur = 'blur(2px)';
            } else if (isFarNext) {
              translateX = '115%';
              scale = 0.7;
              zIndex = 10;
              opacity = 0.2;
              blur = 'blur(2px)';
            }

            return (
              <div
                key={slide.id}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(index);
                  }
                }}
                style={{
                  transform: `translateX(${translateX}) scale(${scale})`,
                  zIndex,
                  opacity,
                  filter: blur,
                  transition: 'all 0.55s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
                className={`absolute w-[260px] sm:w-[320px] lg:w-[360px] h-[380px] sm:h-[450px] lg:h-[490px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer ${
                  isActive
                    ? 'border-2 border-[#DFBE7A] shadow-[0_0_35px_rgba(223,190,122,0.35)]'
                    : 'border border-white/20 hover:border-[#DFBE7A]/50'
                }`}
              >
                {/* Background Image */}
                {slide.fit === 'contain-framed' ? (
                  <div className="relative w-full h-full bg-[#160508]">
                    <img
                      src={slide.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover scale-115 blur-xl opacity-45"
                    />
                    <ResilientImage
                      src={slide.image}
                      alt={slide.alt}
                      className="relative z-10 w-full h-full object-contain object-center"
                    />
                  </div>
                ) : (
                  <ResilientImage
                    src={slide.image}
                    alt={slide.alt}
                    style={{ objectPosition: slide.objectPosition || 'center center' }}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Subtle Bottom Gradient Overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Only "Ayezis Corner" below each image */}
                <div className="absolute bottom-5 left-4 right-4 z-20 text-center pointer-events-none">
                  <span className="font-serif text-xs sm:text-sm tracking-[0.2em] text-[#DFBE7A] font-medium">
                    Ayezis Corner
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Bottom Pagination Dots */}
      <div className="relative z-10 flex items-center justify-center gap-2 pt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === activeIndex
                ? 'w-8 h-2 bg-[#DFBE7A] shadow-[0_0_8px_rgba(223,190,122,0.6)]'
                : 'w-2 h-2 bg-white/25 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
