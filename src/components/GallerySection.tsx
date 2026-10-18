import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Maximize2 } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryCategory, GalleryItem } from '../data/gallery';
import { getWhatsAppLink } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-18 sm:py-24 bg-[#FFFDF9] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
            Celebration &amp; Gifting Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#61524F]">
            An editorial look at our custom decorations, wedding setups, and personalized gifts.
          </p>
        </div>

        {/* Clean, Simple Category Filters: All, Events, Decor, Gifts */}
        <div className="flex items-center justify-center gap-2 mb-10 sm:mb-12 flex-wrap">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#7D1D2C] text-[#FAF7F2] shadow-xs'
                  : 'bg-[#F3ECE2] text-[#4A3E3D] hover:bg-[#EAE0D2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry / Varied-Size Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => {
            // Editorial grid rhythm: large feature items span 8 or 7 columns, standard items span 4 or 5 columns
            const isLarge = item.size === 'large';
            const colClass = isLarge ? 'lg:col-span-8' : 'lg:col-span-4';
            const aspectClass = isLarge ? 'aspect-16/10 sm:aspect-16/9' : 'aspect-4/3 sm:aspect-square';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-[#D8CEBE] hover:border-[#C5A059] bg-[#EAE0D2] ${colClass} cursor-pointer transition-all duration-300`}
              >
                <div className={`relative w-full ${aspectClass}`}>
                  <ResilientImage
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  />

                  {/* Soft Luxury Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                    <div className="self-end bg-black/40 backdrop-blur-xs p-2 rounded-full">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-widest text-[#DFBE7A] font-semibold">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2 max-w-lg">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#D8CEBE] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close bar */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#E8DFD3] bg-[#FFFDF9]">
              <span className="text-xs font-semibold text-[#7D1D2C] uppercase tracking-wider">
                {currentItem.category} · {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-1.5 text-[#4A0E18] hover:bg-[#F3ECE2] rounded-full transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Preview */}
            <div className="relative overflow-hidden bg-black/5 flex items-center justify-center max-h-[62vh] p-2">
              <ResilientImage
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[60vh] max-w-full object-contain mx-auto rounded-lg"
              />

              {/* Prev / Next controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/85 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/85 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption & WhatsApp Action */}
            <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DFD3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#32070F]">
                  {currentItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5D4E4B] mt-1 max-w-lg">
                  {currentItem.caption}
                </p>
              </div>

              <a
                href={getWhatsAppLink(`Hi Ayezis Corner, I'm interested in this design: ${currentItem.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-md transition-colors shadow-xs flex items-center justify-center gap-2 whitespace-nowrap self-start sm:self-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
