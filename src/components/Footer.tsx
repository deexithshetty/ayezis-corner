import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#32070F] text-[#FAF7F2] py-12 border-t border-[#4A0E18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div>
          <a
            href="#home"
            className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF7F2] hover:text-[#DFBE7A] transition-colors"
          >
            {siteConfig.businessName}
          </a>
          <p className="text-xs sm:text-sm text-[#DFBE7A] mt-1 tracking-wide">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#E8DFD3]/85">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Social channels */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#4A0E18] hover:bg-[#6B1724] border border-[#C5A059]/40 flex items-center justify-center text-[#DFBE7A] hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#4A0E18] hover:bg-[#25D366]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#25D366] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#E8DFD3]/60 pt-4 border-t border-[#4A0E18]/80">
          Copyright 2026 {siteConfig.businessName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
