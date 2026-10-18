import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD3]'
            : 'bg-[#FAF7F2] border-b border-[#E8DFD3]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Logo with safe text fallback if /logo.png is not found */}
          <a
            href="#home"
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
          >
            {!logoError && siteConfig.logo && (
              <img
                src={siteConfig.logo}
                alt={siteConfig.businessName}
                onError={() => setLogoError(true)}
                className="h-10 w-auto object-contain max-w-[160px]"
              />
            )}
            {(logoError || !siteConfig.logo) && (
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#4A0E18] group-hover:text-[#6B1724] transition-colors">
                {siteConfig.businessName}
              </span>
            )}
          </a>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A3E3D]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#7D1D2C] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#1E7E34] hover:text-[#176529] px-3 py-1.5 rounded-full border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-[#7D1D2C] hover:bg-[#661320] active:scale-95 transition-all rounded-md shadow-xs whitespace-nowrap cursor-pointer"
            >
              Get a Quote
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#4A0E18] hover:bg-[#F3ECE2] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-18 z-30 md:hidden bg-[#FAF7F2] border-b border-[#E8DFD3] px-6 py-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-lg text-[#32070F] hover:text-[#7D1D2C] py-1 border-b border-[#F0E6D8]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-[#FAF7F2] bg-[#7D1D2C] rounded-md"
            >
              Get a Quote
            </button>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-sm font-medium text-[#1E7E34] bg-[#25D366]/10 border border-[#25D366]/30 rounded-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
