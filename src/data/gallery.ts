/**
 * Ayezis Corner - Gallery Data
 * 
 * To add, change, or remove gallery photos, edit this file.
 * Images are served directly from public/images/
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Gifts' | 'Corporate';
  image: string; // Path in public/images/
  caption: string;
  size?: 'large' | 'standard'; // 'large' creates high-impact editorial showcase tiles
}

export const galleryCategories = ['All', 'Events', 'Gifts', 'Corporate'] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Burgundy & Gold Reception Stage',
    category: 'Events',
    image: '/images/wedding.jpg',
    caption: 'Bespoke grand floral stage with cascading white and wine roses, crystal chandeliers, and golden arches.',
    size: 'large',
  },
  {
    id: 'gal-2',
    title: 'Monogram Keepsake Gift Hamper',
    category: 'Gifts',
    image: '/images/gift-personalized.jpg',
    caption: 'Precision laser-engraved walnut box, embroidered ribbon, and hand-poured soy candle.',
    size: 'standard',
  },
  {
    id: 'gal-3',
    title: 'Pastel Dream Birthday Setup',
    category: 'Events',
    image: '/images/birthday.jpg',
    caption: 'Organic pastel balloon installations, glowing neon sign, and fluted pedestals for a 30th milestone.',
    size: 'standard',
  },
  {
    id: 'gal-4',
    title: 'Grand Entrance Floral Walkway',
    category: 'Events',
    image: '/images/hero.jpg',
    caption: 'Illuminated celebration entrance corridor with candle lantern pathways and draped florals.',
    size: 'large',
  },
  {
    id: 'gal-5',
    title: 'Executive Corporate Gifting Suite',
    category: 'Corporate',
    image: '/images/corporate.jpg',
    caption: 'Custom debossed faux-leather journal, laser-engraved thermos bottle, and metallic pen in a luxury gold foil box.',
    size: 'standard',
  },
  {
    id: 'gal-6',
    title: 'Romantic Candlelit Proposal Setup',
    category: 'Events',
    image: '/images/romantic.jpg',
    caption: 'Cozy romantic suite with rose petal pathways, warm ambient candles, and celebratory champagne flutes.',
    size: 'standard',
  },
  {
    id: 'gal-7',
    title: 'Luxury Delicacies & Champagne Hamper',
    category: 'Gifts',
    image: '/images/gift-hamper.jpg',
    caption: 'Woven artisan hamper filled with champagne, gourmet delicacies, fine chocolates, and scented candle.',
    size: 'standard',
  },
  {
    id: 'gal-8',
    title: 'Embroidered Custom Monogram Set',
    category: 'Gifts',
    image: '/images/embroidered.jpg',
    caption: 'Personalized cursive burgundy embroidery on plush ivory linens nestled in a ribbon gift box.',
    size: 'large',
  },
];

export const galleryImages = galleryItems;
