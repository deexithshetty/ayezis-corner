import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';
import { PageRoute } from '../types/navigation';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Decorations', route: 'decorations' },
    { label: 'Gifts', route: 'gifts' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0305]/95 backdrop-blur-md shadow-lg border-b border-[#DFBE7A]/20'
            : 'bg-[#0E0305] border-b border-[#DFBE7A]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Logo / Wordmark in Gold Serif */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group text-left cursor-pointer"
          >
            {/* Luxury crest emblem */}
            <div className="w-9 h-9 rounded-full border border-[#DFBE7A]/40 flex items-center justify-center bg-[#DFBE7A]/10 text-[#DFBE7A] group-hover:border-[#DFBE7A] transition-colors">
              <Sparkles className="w-4 h-4 text-[#DFBE7A]" />
            </div>

            {!logoError && siteConfig.logo && (
              <img
                src={siteConfig.logo}
                alt={siteConfig.businessName}
                onError={() => setLogoError(true)}
                className="h-10 w-auto object-contain max-w-[150px] hidden"
              />
            )}
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-[#DFBE7A] group-hover:text-[#F3ECE2] transition-colors">
              {siteConfig.businessName}
            </span>
          </button>

          {/* Desktop Navigation - Minimal & Elegant in Center */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-light tracking-wider">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`relative py-1 transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#DFBE7A] font-medium'
                      : 'text-[#FAF7F2]/80 hover:text-[#DFBE7A]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DFBE7A] rounded-full shadow-[0_0_6px_rgba(223,190,122,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side: "Plan your event" Golden CTA Button + WhatsApp */}
          <div className="flex items-center gap-3 shrink-0">
            {/* WhatsApp Icon Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-[#25D366] hover:text-white px-3 py-2 rounded-xl border border-[#25D366]/40 hover:bg-[#25D366] transition-all whitespace-nowrap"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] group-hover:fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* "Plan your event" button styled exactly like screenshot */}
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-[#1A0307] bg-[#DFBE7A] hover:bg-[#C5A059] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap font-sans"
            >
              Plan your event
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#DFBE7A] hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0E0305]/98 backdrop-blur-xl flex flex-col justify-between p-6 text-[#FAF7F2] lg:hidden animate-in fade-in duration-200"
        >
          {/* Top Bar with Brand & Close */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="font-serif text-2xl font-light tracking-wider text-[#DFBE7A]">
              {siteConfig.businessName}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6 py-8">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-left font-serif text-3xl font-light tracking-tight transition-colors cursor-pointer ${
                    isActive ? 'text-[#DFBE7A] font-normal pl-3 border-l-2 border-[#DFBE7A]' : 'text-white/85 hover:text-[#DFBE7A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-[#DFBE7A] text-[#1A0307] font-semibold text-center shadow-lg cursor-pointer"
            >
              Plan your event
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            <p className="text-center text-xs text-[#E8DFD3]/60 tracking-wider pt-1">
              {siteConfig.address} · {siteConfig.phone}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
