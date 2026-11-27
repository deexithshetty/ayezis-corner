
import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  ShoppingBag,
  Plus,
  Minus,
  Check,
} from 'lucide-react';

import {
  galleryItems,
  galleryCategories,
  GalleryCategory,
  GalleryItem,
} from '../../data/gallery';

import { getWhatsAppLink } from '../../config/siteConfig';
import { ResilientImage } from '../ResilientImage';
import { PageRoute } from '../../types/navigation';
import { useCart, isCartEligibleGalleryItem } from '../../context/CartContext';

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
  selectedCategory?: GalleryCategory;
}

const featuredPortfolioItems = [
  {
    id: 'new-new-wedding-floral-stage',
    title: 'Red Rose Floral Canopy Bedroom Decoration',
    img: '/images/decorations/new-wedding-floral-stage.jpeg',
    cat: 'Decorations',
    cartEligible: false,
  },
  {
    id: 'new-new-decorated-gift-hamper',
    title: 'Just Engaged Floral Chocolate Gift Tower',
    img: '/images/hampers/new-decorated-gift-hamper.jpeg',
    cat: 'Hampers',
    cartEligible: true,
  },
  {
    id: 'baby-02',
    title: 'Personalized Kids Travel Bag & Lunch Set',
    img: '/images/baby-newborn/baby-newborn-02.jpeg',
    cat: 'Baby & Newborn',
    cartEligible: true,
  },
  {
    id: 'hampers-01',
    title: 'Curated Celebration Fruit & Gourmet Hampers',
    img: '/images/hampers/hampers-01.jpeg',
    cat: 'Hampers',
    cartEligible: true,
  },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenQuoteModal,
  selectedCategory,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>('All');

  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  const [showAllImages, setShowAllImages] = useState(false);
  const galleryGridRef = useRef<HTMLElement | null>(null);
  const { addItem, updateQuantity, getItemQuantity, openCart } = useCart();

  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
      setShowAllImages(false);
      setLightboxIndex(null);
    }
  }, [selectedCategory]);

  const handleExploreAllImages = () => {
    setActiveCategory('All');
    setShowAllImages(true);
    setLightboxIndex(null);

    requestAnimationFrame(() => {
      const target = galleryGridRef.current;
      if (target) {
        const navbarHeight = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    });
  };

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter(
          (img) => img.category === activeCategory
        );

  // Show only 8 images initially.
  // All existing images remain available.
  const previewItems = showAllImages
    ? filteredItems
    : filteredItems.slice(0, 8);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) %
          filteredItems.length
      );
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex + 1) % filteredItems.length
      );
    }
  };

  const currentItem: GalleryItem | null =
    lightboxIndex !== null
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E8DFD3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E8DFD3] text-[#7D1D2C] text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Photography &amp; Portfolio Archive</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#32070F] tracking-tight">
            Celebration &amp; Gifting Gallery
          </h1>

          <p className="text-base sm:text-lg text-[#61524F] max-w-2xl mx-auto font-light leading-relaxed">
            An editorial showcase of our handcrafted stage setups,
            ceremonial backdrops, bridal keepsakes, and personalized
            gift hampers.
          </p>

        </div>
      </section>

      {/* Selected Portfolio Highlights */}
      <section className="py-12 sm:py-16 bg-[#FAF7F2] text-[#241E1C] border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
                Selected Portfolio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#32070F]">
                Recent Celebrations &amp; Hampers
              </h2>
            </div>

            <button
              type="button"
              onClick={handleExploreAllImages}
              className="text-xs sm:text-sm font-semibold text-[#7D1D2C] hover:underline cursor-pointer inline-flex items-center self-start sm:self-auto shrink-0"
            >
              Explore All {galleryItems.length} Images →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {featuredPortfolioItems.map((item) => {
              const qty = item.cartEligible ? getItemQuantity(item.id) : 0;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    const idx = filteredItems.findIndex((entry) => entry.id === item.id);
                    if (idx !== -1) {
                      openLightbox(idx);
                    } else {
                      setActiveCategory('All');
                      setShowAllImages(true);
                    }
                  }}
                  className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-[#EAE0D2] border border-[#D8CEBE] cursor-pointer shadow-xs hover:shadow-lg transition-all"
                >
                  <ResilientImage
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 sm:p-4 flex flex-col justify-end text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#DFBE7A] font-medium">
                      {item.cat}
                    </span>
                    <p className="font-serif text-sm font-light leading-snug line-clamp-2">
                      {item.title}
                    </p>

                    {item.cartEligible && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (qty > 0) {
                            openCart();
                          } else {
                            addItem({
                              id: item.id,
                              name: item.title,
                              image: item.img,
                              category: item.cat,
                              priceLabel: 'Price on Request',
                            });
                          }
                        }}
                        className={`mt-2.5 w-full py-1.5 px-2.5 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer backdrop-blur-xs ${
                          qty > 0
                            ? 'bg-[#DFBE7A] text-[#1A0307] hover:bg-[#C5A059]'
                            : 'bg-[#7D1D2C]/90 text-[#FAF7F2] hover:bg-[#7D1D2C] border border-[#DFBE7A]/40'
                        }`}
                      >
                        {qty > 0 ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Cart ({qty})</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5 text-[#DFBE7A]" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filters and Gallery */}
      <section
        id="gallery-archive"
        ref={galleryGridRef}
        className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">

          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#7D1D2C] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F3ECE2] text-[#4A3E3D] hover:bg-[#EAE0D2]'
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Image Count */}
        <div className="text-center text-xs text-[#7D6B67] mb-8 font-medium tracking-wide">
          Showing{' '}
          {showAllImages
            ? filteredItems.length
            : Math.min(filteredItems.length, 8)}{' '}
          of {filteredItems.length} images
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">

          {previewItems.map((item, index) => {
            const canAddToCart = isCartEligibleGalleryItem(item);
            const qtyInCart = canAddToCart ? getItemQuantity(item.id) : 0;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between text-left rounded-2xl overflow-hidden border border-[#D8CEBE] hover:border-[#C5A059] bg-white shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-label={`View ${item.title}`}
                  className="text-left w-full cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#EAE0D2]">
                    <ResilientImage
                      src={item.image}
                      alt={item.title}
                      fallbackTitle={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Category & Accurate Image Title */}
                  <div className="px-3 pt-2.5 pb-2 space-y-0.5">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#7D1D2C]">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-medium text-[#32070F] leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </button>

                {/* Add to Cart Control — Gifts, Customized Gifts & Hampers Only */}
                {canAddToCart && (
                  <div className="px-3 pb-3 pt-0.5">
                    {qtyInCart > 0 ? (
                      <div className="flex items-center justify-between gap-1.5 rounded-xl border border-[#C5A059]/60 bg-[#FAF7F2] px-2 py-1">
                        <div className="inline-flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Decrease quantity of ${item.title}`}
                            className="w-6 h-6 rounded-md bg-white border border-[#D8CEBE] hover:border-[#7D1D2C] text-[#4A0E18] flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="min-w-[1.25rem] text-center text-xs font-semibold text-[#32070F]">
                            {qtyInCart}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase quantity of ${item.title}`}
                            className="w-6 h-6 rounded-md bg-white border border-[#D8CEBE] hover:border-[#7D1D2C] text-[#4A0E18] flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={openCart}
                          className="text-[11px] font-semibold text-[#7D1D2C] hover:underline whitespace-nowrap cursor-pointer pr-1"
                        >
                          View Cart
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          addItem({
                            id: item.id,
                            name: item.title,
                            image: item.image,
                            category: item.category,
                            priceLabel: 'Price on Request',
                          })
                        }
                        className="w-full py-1.5 px-3 rounded-xl bg-[#7D1D2C] hover:bg-[#5F1420] active:scale-[0.98] text-[#FAF7F2] text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#DFBE7A]" />
                        <span>Add to Cart</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Explore All Images */}
        {filteredItems.length > 8 && (
          <div className="mt-9 text-center">

            <button
              type="button"
              onClick={() =>
                setShowAllImages((current) => !current)
              }
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white bg-[#7D1D2C] hover:bg-[#5F1420] transition-colors shadow-sm cursor-pointer"
            >
              {showAllImages
                ? 'Show Less'
                : 'Explore All Images'}
            </button>

          </div>
        )}

        {/* Bottom Contact Section */}
        <div className="mt-16 text-center pt-10 border-t border-[#E8DFD3] space-y-4">

          <p className="text-sm text-[#61524F]">
            Like a specific style or wish to blend elements from multiple photos?
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href={getWhatsAppLink(
                "Hi Ayezis Corner, I was browsing your gallery and have a reference photo to discuss."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share Reference on WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-7 py-3 text-xs sm:text-sm font-semibold text-[#1A0307] bg-white border border-[#D8CEBE] hover:bg-[#F3ECE2] rounded-full shadow-xs cursor-pointer"
            >
              Request Custom Estimate
            </button>

          </div>
        </div>

      </section>

      {/* Image Viewer / Lightbox */}
      {currentItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >

          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#D8CEBE] max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFD3] bg-[#FFFDF9]">

              <span className="text-xs font-semibold text-[#7D1D2C] uppercase tracking-wider">
                {currentItem.category} · {lightboxIndex + 1} of{' '}
                {filteredItems.length}
              </span>

              <button
                onClick={closeLightbox}
                className="p-1.5 text-[#4A0E18] hover:bg-[#F3ECE2] rounded-full transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

            </div>

            {/* Image Preview */}
            <div className="relative overflow-hidden bg-black/5 flex items-center justify-center max-h-[62vh] p-3">

              <ResilientImage
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[60vh] max-w-full object-contain mx-auto rounded-xl"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/85 text-white rounded-full transition-colors cursor-pointer shadow-md"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/85 text-white rounded-full transition-colors cursor-pointer shadow-md"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </div>

            {/* Image Title, Cart Action (Gifts/Hampers only) and WhatsApp */}
            <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DFD3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-serif text-xl font-medium text-[#32070F]">
                  {currentItem.title}
                </h4>
                {isCartEligibleGalleryItem(currentItem) && (
                  <span className="text-[11px] font-medium text-[#7D1D2C] bg-[#FFFDF9] border border-[#D8CEBE] px-2.5 py-0.5 rounded-full">
                    Price on Request
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-center shrink-0">
                {isCartEligibleGalleryItem(currentItem) && (
                  (() => {
                    const lightboxQty = getItemQuantity(currentItem.id);
                    return lightboxQty > 0 ? (
                      <button
                        type="button"
                        onClick={() => {
                          closeLightbox();
                          openCart();
                        }}
                        className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-[#7D1D2C] hover:bg-[#5F1420] rounded-full transition-colors shadow-xs flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#DFBE7A]" />
                        <span>In Cart ({lightboxQty}) · View</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          addItem({
                            id: currentItem.id,
                            name: currentItem.title,
                            image: currentItem.image,
                            category: currentItem.category,
                            priceLabel: 'Price on Request',
                          })
                        }
                        className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-[#7D1D2C] hover:bg-[#5F1420] rounded-full transition-colors shadow-xs flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#DFBE7A]" />
                        <span>Add to Cart</span>
                      </button>
                    );
                  })()
                )}

                <a
                  href={getWhatsAppLink(
                    `Hi Ayezis Corner, I'm interested in this design from your gallery: ${currentItem.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full transition-colors shadow-xs flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire This on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
