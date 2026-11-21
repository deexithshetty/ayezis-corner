import React from 'react';
import { Gift, ArrowRight, MessageCircle, ShoppingBag, Check } from 'lucide-react';
import { giftingCategories } from '../data/services';
import { getWhatsAppLink } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';
import { useCart } from '../context/CartContext';

export const GiftingSection: React.FC = () => {
  const { addItem, getItemQuantity, openCart } = useCart();

  return (
    <section id="gifting" className="py-18 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
            <Gift className="w-3.5 h-3.5" />
            <span>Curated Gifting Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
            Thoughtfully Curated Gifts &amp; Hampers
          </h2>
          <p className="text-sm sm:text-base text-[#61524F]">
            Customized gifting solutions for bridal moments, newborn welcomes, corporate gifting, and special life occasions.
          </p>
        </div>

        {/* 9 Clean Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {giftingCategories.map((item) => {
            const qty = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden border border-[#D8CEBE] hover:border-[#C5A059] bg-[#FFFDF9] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image with subtle hover zoom */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#EAE0D2]">
                  <ResilientImage
                    src={item.image}
                    alt={item.name}
                    fallbackTitle={item.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl font-bold text-[#32070F] group-hover:text-[#7D1D2C] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#61524F] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        qty > 0
                          ? openCart()
                          : addItem({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              category: 'Gifts & Hampers',
                              priceLabel: 'Price on Request',
                            })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7D1D2C] hover:bg-[#5F1420] text-[#FAF7F2] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      {qty > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#DFBE7A]" />
                          <span>In Cart ({qty})</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-[#DFBE7A]" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppLink(`Hi Ayezis Corner, I would like to enquire about: ${item.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#7D1D2C] hover:text-[#4A0E18] flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
