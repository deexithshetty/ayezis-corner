import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Optional gentle speech bubble tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FAF7F2] text-[#32070F] text-xs font-medium px-3.5 py-2 rounded-xl shadow-lg border border-[#D8CEBE] animate-in fade-in slide-in-from-bottom-2">
          <span>Chat with us on WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#7A6B68] hover:text-[#32070F] cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ayezis Corner on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20BA5A] active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none group-hover:hidden" />
      </a>
    </div>
  );
};
