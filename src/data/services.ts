/**
 * Ayezis Corner - Services Data
 * 
 * To update services or images, edit this file.
 * Images are served directly from the public/images/ directory.
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string; // Path in public/images/
}

export const services: Service[] = [
  {
    id: 'event-decoration',
    name: 'Event Decoration',
    description: 'Grand floral arches, ambient drapery, and thematic concept styling for milestone celebrations.',
    image: '/images/hero.jpg',
  },
  {
    id: 'wedding-party-decor',
    name: 'Wedding & Party Decor',
    description: 'Regal mandaps, reception stages, anniversary settings, and birthday balloon dreamscapes.',
    image: '/images/wedding.jpg',
  },
  {
    id: 'customized-gifts',
    name: 'Customized Gifts',
    description: 'Bespoke celebration keepsakes customized with special dates, initials, and cherished memories.',
    image: '/images/gift-personalized.jpg',
  },
  {
    id: 'corporate-gifting',
    name: 'Corporate Gifting',
    description: 'Executive onboarding kits, laser-branded client gifts, and festive hampers for organizations.',
    image: '/images/corporate.jpg',
  },
  {
    id: 'personalized-gifts',
    name: 'Personalized Gifts',
    description: 'Laser-engraved wooden keepsakes, monogram embroidery, and handcrafted celebration hampers.',
    image: '/images/embroidered.jpg',
  },
];
