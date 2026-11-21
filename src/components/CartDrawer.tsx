import React, { useEffect, useState } from 'react';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useCart, buildWhatsAppCartMessage } from '../context/CartContext';
import { getWhatsAppLink } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';
import { PageRoute } from '../types/navigation';

interface CartDrawerProps {
  onNavigate: (route: PageRoute) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigate }) => {
  const {
    items,
    customizationNote,
    setCustomizationNote,
    totalItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const [confirmClear, setConfirmClear] = useState(false);
  const [enquiryHandedOff, setEnquiryHandedOff] = useState(false);

  // Reset transient confirmation states when drawer closes or cart empties
  useEffect(() => {
    if (!isCartOpen || items.length === 0) {
      setConfirmClear(false);
      setEnquiryHandedOff(false);
    }
  }, [isCartOpen, items.length]);

  // Lock background scroll & support Escape key while drawer is open
  useEffect(() => {
    if (!isCartOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const whatsappHref =
    items.length > 0
      ? getWhatsAppLink(buildWhatsAppCartMessage(items, customizationNote))
      : getWhatsAppLink();

  const handleBrowseGifts = () => {
    closeCart();
    onNavigate('gallery');
  };

  const handleClearConfirmed = () => {
    clearCart();
    setConfirmClear(false);
    setEnquiryHandedOff(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gift enquiry shopping cart"
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs"
      onClick={closeCart}
    >
      <div
        className="relative w-full max-w-md h-full bg-[#FAF7F2] text-[#241E1C] shadow-2xl border-l border-[#DFBE7A]/30 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0E0305] text-[#FAF7F2] px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#DFBE7A]/25 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border border-[#DFBE7A]/40 bg-[#DFBE7A]/10 flex items-center justify-center text-[#DFBE7A]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-light tracking-wide text-[#DFBE7A] leading-tight">
                Gift Enquiry Cart
              </h2>
              <p className="text-[11px] text-[#EAE0D2]/75 tracking-wide">
                {totalItems === 0
                  ? 'No items selected'
                  : `${totalItems} ${totalItems === 1 ? 'item' : 'items'} selected · Price on Request`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 text-[#DFBE7A] hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#FFFDF9] border border-[#D8CEBE] flex items-center justify-center text-[#7D1D2C] shadow-xs">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <div className="space-y-2 max-w-xs">
              <h3 className="font-serif text-2xl font-light text-[#32070F]">
                Your Gift Cart is Empty
              </h3>
              <p className="text-xs sm:text-sm text-[#61524F] leading-relaxed">
                Explore our customized gifts and curated hampers, add your favorites here, and send a single WhatsApp enquiry.
              </p>
            </div>
            <button
              type="button"
              onClick={handleBrowseGifts}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7D1D2C] hover:bg-[#5F1420] text-[#FAF7F2] text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <span>Browse Gifts &amp; Hampers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            {/* Scrollable Items & Customization Section */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-5">
              {/* Post-WhatsApp Handoff Confirmation Banner */}
              {enquiryHandedOff && (
                <div className="rounded-2xl bg-[#FFFDF9] border border-[#C5A059] p-4 shadow-xs space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#1E7E34] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-semibold text-[#32070F]">
                        WhatsApp enquiry prepared!
                      </p>
                      <p className="text-xs text-[#61524F] leading-relaxed">
                        Once you&apos;ve sent your message on WhatsApp, you can clear your cart or keep these items to edit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <button
                      type="button"
                      onClick={handleClearConfirmed}
                      className="px-3.5 py-1.5 rounded-lg bg-[#7D1D2C] hover:bg-[#5F1420] text-[#FAF7F2] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Clear Cart Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setEnquiryHandedOff(false)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#F3ECE2] hover:bg-[#EAE0D2] text-[#4A0E18] text-xs font-medium transition-colors cursor-pointer"
                    >
                      Keep Items
                    </button>
                  </div>
                </div>
              )}

              {/* Selected Gift & Hamper Items */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3.5 p-3 rounded-2xl bg-[#FFFDF9] border border-[#D8CEBE] shadow-xs"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#EAE0D2] border border-[#E8DFD3] shrink-0">
                      <ResilientImage
                        src={item.image}
                        alt={item.name}
                        fallbackTitle={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A9823F]">
                            {item.category}
                          </span>
                          <h3 className="font-serif text-base font-medium text-[#32070F] leading-snug line-clamp-2">
                            {item.name}
                          </h3>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="p-1.5 text-[#7D6B67] hover:text-[#7D1D2C] hover:bg-[#FAF7F2] rounded-lg transition-colors cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-2">
                        <span className="text-[11px] font-medium text-[#61524F] bg-[#FAF7F2] border border-[#E8DFD3] px-2.5 py-0.5 rounded-full">
                          {item.priceLabel || 'Price on Request'}
                        </span>

                        {/* Quantity Stepper */}
                        <div className="inline-flex items-center rounded-lg border border-[#D8CEBE] bg-[#FAF7F2] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="w-7 h-7 flex items-center justify-center text-[#4A0E18] hover:bg-[#EAE0D2] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span
                            className="w-7 text-center text-xs font-semibold text-[#32070F] select-none"
                            aria-label={`Quantity ${item.quantity}`}
                          >
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="w-7 h-7 flex items-center justify-center text-[#4A0E18] hover:bg-[#EAE0D2] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customization Requests Input */}
              <div className="rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] p-4 space-y-2">
                <label
                  htmlFor="cart-customization-note"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7D1D2C]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Customization Requests (Optional)</span>
                </label>
                <textarea
                  id="cart-customization-note"
                  rows={3}
                  value={customizationNote}
                  onChange={(e) => setCustomizationNote(e.target.value)}
                  placeholder="Share names to engrave/embroider, preferred colors, occasion date, or delivery city..."
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] text-[#241E1C] placeholder:text-[#8E7D78] rounded-xl border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C] resize-none"
                />
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="border-t border-[#E8DFD3] bg-[#FFFDF9] px-5 sm:px-6 py-4 space-y-3 shrink-0">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#61524F]">
                  Total Selected ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </span>
                <span className="font-semibold text-[#32070F]">Price on Request</span>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setEnquiryHandedOff(true)}
                className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.99] text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send Enquiry on WhatsApp</span>
              </a>

              {/* Secondary Clear Cart Action with Inline Confirmation */}
              <div className="flex items-center justify-between pt-0.5">
                {confirmClear ? (
                  <div className="w-full flex items-center justify-between gap-2 bg-[#FAF7F2] border border-[#D8CEBE] rounded-xl px-3 py-2">
                    <span className="text-xs text-[#4A0E18] font-medium">
                      Clear all items from cart?
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleClearConfirmed}
                        className="px-2.5 py-1 rounded-lg bg-[#7D1D2C] hover:bg-[#5F1420] text-white text-xs font-semibold cursor-pointer"
                      >
                        Yes, Clear
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmClear(false)}
                        className="px-2.5 py-1 rounded-lg bg-white border border-[#D8CEBE] text-[#4A3E3D] text-xs font-medium cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setConfirmClear(true)}
                      className="text-xs font-medium text-[#7D6B67] hover:text-[#7D1D2C] transition-colors cursor-pointer"
                    >
                      Clear Cart
                    </button>
                    <span className="text-[11px] text-[#7D6B67]">
                      No online payment required
                    </span>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
