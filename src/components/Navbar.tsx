import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
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
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD3]'
            : 'bg-[#FAF7F2] border-b border-[#E8DFD3]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Logo / Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group text-left cursor-pointer"
          >
            {!logoError && siteConfig.logo && (
              <img
                src={siteConfig.logo}
                alt={siteConfig.businessName}
                onError={() => setLogoError(true)}
                className="h-10 w-auto object-contain max-w-[150px]"
              />
            )}
            {(logoError || !siteConfig.logo) && (
              <span className="font-serif text-2xl sm:text-3xl font-light tracking-wider uppercase text-[#32070F] group-hover:text-[#7D1D2C] transition-colors">
                {siteConfig.businessName}
              </span>
            )}
          </button>

          {/* Desktop Navigation - Minimal & Editorial */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`relative py-1 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#7D1D2C] font-semibold'
                      : 'text-[#4A3E3D] hover:text-[#7D1D2C]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7D1D2C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side: Enquire on WhatsApp CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7E34] hover:text-white px-4 py-2 rounded-full border border-[#25D366] hover:bg-[#25D366] transition-all whitespace-nowrap shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white fill-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#32070F] hover:bg-[#F3ECE2] rounded-full transition-colors cursor-pointer"
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
          className="fixed inset-0 z-50 bg-[#32070F]/95 backdrop-blur-lg flex flex-col justify-between p-6 text-[#FAF7F2] lg:hidden animate-in fade-in duration-200"
        >
          {/* Top Bar with Brand & Close */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="font-serif text-2xl font-light tracking-wider uppercase text-[#DFBE7A]">
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

          {/* Nav Links in Large Editorial Typography */}
          <nav className="flex flex-col gap-6 py-8">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-left font-serif text-3xl sm:text-4xl font-light tracking-tight transition-colors cursor-pointer ${
                    isActive ? 'text-[#DFBE7A] font-normal pl-3 border-l-2 border-[#DFBE7A]' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#25D366] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            <p className="text-center text-xs text-[#E8DFD3]/60 tracking-wider">
              {siteConfig.address} · {siteConfig.phone}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
