
import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
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

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>('All');

  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  const [showAllImages, setShowAllImages] = useState(false);

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

      {/* Category Filters and Gallery */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">

          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAllImages(false);
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

          {previewItems.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => openLightbox(index)}
              aria-label={`View ${item.category} image`}
              className="group text-left rounded-2xl overflow-hidden border border-[#D8CEBE] hover:border-[#C5A059] bg-white shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
            >

              <div className="relative aspect-square overflow-hidden bg-[#EAE0D2]">

                <ResilientImage
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

              </div>

              {/* Only Category Name */}
              <div className="px-3 py-2.5">
                <span className="block text-xs sm:text-sm font-medium text-[#4A3E3D]">
                  {item.category === 'Decorations'
                    ? 'Decoration'
                    : item.category}
                </span>
              </div>

            </button>
          ))}

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

            {/* Image Caption and WhatsApp */}
            <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DFD3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <div className="space-y-1">

                <h4 className="font-serif text-xl font-medium text-[#32070F]">
                  {currentItem.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#5D4E4B] max-w-xl">
                  {currentItem.caption}
                </p>

              </div>

              <a
                href={getWhatsAppLink(
                  `Hi Ayezis Corner, I'm interested in this design from your gallery: ${currentItem.title}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full transition-colors shadow-xs flex items-center justify-center gap-2 whitespace-nowrap self-start sm:self-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire This on WhatsApp</span>
              </a>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
