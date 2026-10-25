import React from 'react';
import { Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';
import { PageRoute } from '../types/navigation';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1E0509] text-[#FAF7F2] py-16 border-t border-[#32070F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Brand info */}
          <div className="space-y-3 max-w-sm">
            <button
              onClick={() => onNavigate('home')}
              className="font-serif text-2xl sm:text-3xl font-light tracking-wider uppercase text-[#FAF7F2] hover:text-[#DFBE7A] transition-colors cursor-pointer"
            >
              {siteConfig.businessName}
            </button>
            <p className="text-xs sm:text-sm text-[#DFBE7A] font-light tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-[#E8DFD3]/70 leading-relaxed font-light">
              Bespoke event decorations, stage styling, and thoughtfully personalized gifting hampers handcrafted in {siteConfig.address}.
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFBE7A]">
              Navigation
            </span>
            <nav className="flex flex-col gap-2 text-xs sm:text-sm text-[#E8DFD3]/85">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors text-center md:text-left cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('decorations')}
                className="hover:text-white transition-colors text-center md:text-left cursor-pointer"
              >
                Event Decorations
              </button>
              <button
                onClick={() => onNavigate('gifts')}
                className="hover:text-white transition-colors text-center md:text-left cursor-pointer"
              >
                Customized Gifts
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="hover:text-white transition-colors text-center md:text-left cursor-pointer"
              >
                Visual Gallery
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-white transition-colors text-center md:text-left cursor-pointer"
              >
                About Our Studio
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-white transition-colors text-center md:text-left cursor-pointer"
              >
                Contact &amp; Enquiries
              </button>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs sm:text-sm text-[#E8DFD3]/85">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFBE7A]">
              Studio Details
            </span>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DFBE7A]" />
                <span>{siteConfig.address}</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DFBE7A]" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#DFBE7A]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* Direct WhatsApp Consultation */}
          <div className="space-y-3 max-w-xs">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFBE7A]">
              Direct Connect
            </span>
            <p className="text-xs text-[#E8DFD3]/70 font-light">
              Chat directly with our styling &amp; gifting team for immediate availability.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBE7A] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center text-white transition-colors shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DFD3]/60 gap-4">
          <p>
            &copy; 2026 {siteConfig.businessName}. All Rights Reserved.
          </p>
          <p className="tracking-wide">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};
