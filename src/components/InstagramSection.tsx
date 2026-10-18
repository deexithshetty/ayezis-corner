import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { galleryImages } from '../data/gallery';
import { ResilientImage } from './ResilientImage';

export const InstagramSection: React.FC = () => {
  // Show 6 curated image tiles from the gallery data
  const feedTiles = galleryImages.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7D1D2C]">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#32070F]">
              Follow Ayezis Corner
            </h2>
            <p className="text-xs sm:text-sm text-[#61524F]">
              {siteConfig.instagramHandle} · 9.2K+ happy customers
            </p>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 rounded-md shadow-xs flex items-center gap-2 transition-opacity cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>View Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-grid image tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {feedTiles.map((tile) => (
            <a
              key={tile.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square border border-[#E8DFD3] bg-[#EAE0D2] shadow-xs block"
            >
              <ResilientImage
                src={tile.image}
                alt={tile.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-white">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
