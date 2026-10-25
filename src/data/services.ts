/**
 * Ayezis Corner - Services & Packages Data
 * 
 * Centralized data file for Gifting Services, Decoration Services,
 * Combined Packages, Customization Features, How It Works, and Brand Reasons.
 */

export interface ServiceCategory {
  id: string;
  name: string;
  summary: string;
  image: string;
}

// 1. Gifting Services (9 categories)
export const giftingCategories: ServiceCategory[] = [
  {
    id: 'wedding-bridal-gifting',
    name: 'Wedding & Bridal Gifting',
    summary: 'Trousseau packing, bridesmaids favors, groom boxes, and bespoke wedding gift hampers.',
    image: '/images/wedding-bridal/wedding-bridal-04.jpeg',
  },
  {
    id: 'baby-newborn-gifting',
    name: 'Baby & Newborn Gifting',
    summary: 'Curated welcome baby hampers, keepsake boxes, baby shower gifts, and nursery accessories.',
    image: '/images/baby-newborn/baby-newborn-02.jpeg',
  },
  {
    id: 'housewarming-home-gifting',
    name: 'Housewarming & Home Gifting',
    summary: 'Elegant home decor hampers, aroma sets, customized accents, and keepsake boxes.',
    image: '/images/customized-gifts/customized-gifts-31.jpeg',
  },
  {
    id: 'corporate-gifting',
    name: 'Corporate Gifting',
    summary: 'Executive welcome kits, branded client appreciation hampers, and annual business summit favors.',
    image: '/images/corporate/corporate-12.jpeg',
  },
  {
    id: 'gifts-him-her',
    name: 'Gifts for Him & Her',
    summary: 'Thoughtfully personalized accessories, embroidered keepsakes, leatherette organizers, and curated sets.',
    image: '/images/customized-gifts/customized-gifts-07.jpeg',
  },
  {
    id: 'kids-gifts',
    name: 'Kids’ Gifts',
    summary: 'Personalized gift packs, custom activity sets, name keepsakes, and celebration boxes.',
    image: '/images/baby-newborn/baby-newborn-03.jpeg',
  },
  {
    id: 'festive-traditional-gifting',
    name: 'Festive & Traditional Gifting',
    summary: 'Special celebration boxes for festive occasions, traditional cultural celebrations, and holidays.',
    image: '/images/festive/festive-01.jpeg',
  },
  {
    id: 'personalized-gifts-hampers',
    name: 'Personalized Gifts & Hampers',
    summary: 'Handcrafted gifts with engraved names, embroidered initials, custom tags, and curated items.',
    image: '/images/customized-gifts/customized-gifts-18.jpeg',
  },
  {
    id: 'return-gifts-event-favours',
    name: 'Return Gifts & Event Favours',
    summary: 'Coordinated guest favors and giveaway hampers matching your event’s theme and color palette.',
    image: '/images/wedding-bridal/wedding-bridal-06.jpeg',
  },
];

// 2. Decoration Services (7 categories - NO birthday or anniversary)
export const decorationCategories: ServiceCategory[] = [
  {
    id: 'wedding-pre-wedding-decor',
    name: 'Wedding & Pre-Wedding Decorations',
    summary: 'Regal stage setups, ceremonial backdrops, entrance arches, and ceremonial floral styling.',
    image: '/images/wedding.png',
  },
  {
    id: 'bridal-groom-room-decor',
    name: 'Bridal & Groom Room Decorations',
    summary: 'Intimate, elegant room styling with ambient florals, fairy lights, and personalized welcoming touches.',
    image: '/images/decorations/decorations-01.jpeg',
  },
  {
    id: 'baby-shower-newborn-decor',
    name: 'Baby Shower & Newborn Decorations',
    summary: 'Charming pastel setups, cradle styling, floral backdrops, and joyous welcome installations.',
    image: '/images/decorations/decorations-09.jpeg',
  },
  {
    id: 'housewarming-home-decor',
    name: 'Housewarming & Home Event Decorations',
    summary: 'Traditional and contemporary entrance styling, draped canopies, and auspicious home celebration setups.',
    image: '/images/decorations/decorations-06.jpeg',
  },
  {
    id: 'corporate-business-decor',
    name: 'Corporate & Business Event Decorations',
    summary: 'Professional photo walls, stage backdrops, launch events, and gala dinner celebration styling.',
    image: '/images/corporate/corporate-03.jpeg',
  },
  {
    id: 'festival-seasonal-decor',
    name: 'Festival & Seasonal Decorations',
    summary: 'Thematic decor for festive occasions, celebration pooja backdrops, and seasonal gatherings.',
    image: '/images/decorations/decorations-08.jpeg',
  },
  {
    id: 'special-occasion-decor',
    name: 'Special Occasion Decorations',
    summary: 'Bespoke celebration arrangements, stage setups, dinner settings, and themed event backdrops.',
    image: '/images/decorations/decorations-02.jpeg',
  },
];

// Decoration Elements
export const decorationElements = [
  'Balloon arches and garlands',
  'Floral arrangements',
  'Customized backdrops',
  'Welcome boards and signage',
  'LED signs and lighting',
  'Table and dessert styling',
  'Photo corners',
  'Theme-based props',
];

// Combined Packages
export interface CombinedPackage {
  title: string;
  description: string;
  iconName: string;
}

export const combinedPackages: CombinedPackage[] = [
  {
    title: 'Wedding & Bridal Packages',
    description: 'Complete ceremonial decor coordinated with bridesmaids favors, groom hampers, and guest return gifts.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Baby Shower Packages',
    description: 'Pastel backdrop and balloon styling paired with curated mom-to-be hampers and guest favors.',
    iconName: 'Baby',
  },
  {
    title: 'Newborn Welcome Packages',
    description: 'Charming homecoming room decor combined with personalized newborn gift boxes and keepsakes.',
    iconName: 'Sparkles',
  },
  {
    title: 'Engagement Gifting & Décor',
    description: 'Ceremonial ring backdrops beautifully matched with customized couple gifting boxes.',
    iconName: 'Gem',
  },
  {
    title: 'Housewarming Packages',
    description: 'Entrance and living area auspicious styling coordinated with guest giveaway boxes.',
    iconName: 'Home',
  },
];

// How It Works Steps
export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Share Your Occasion',
    description: 'Tell us about your celebration, date, theme colors, or who the gift hamper is for.',
  },
  {
    step: '02',
    title: 'Curate the Experience',
    description: 'Select from our tailored packages or let us customize items to match your target budget.',
  },
  {
    step: '03',
    title: 'Artisanal Personalization',
    description: 'We personalize names, calligraphy tags, drape fabrics, and arrange ambient lighting.',
  },
  {
    step: '04',
    title: 'Setup & Handover',
    description: 'Punctual on-site installation or doorstep gift hamper delivery across Udupi and beyond.',
  },
];

// Customization Points
export interface CustomizationPoint {
  title: string;
  description: string;
}

export const customizationPoints: CustomizationPoint[] = [
  {
    title: 'Personalized Themes',
    description: 'Every decor setup and hamper is tailored to your color palette and celebration mood.',
  },
  {
    title: 'Flexible Budgeting',
    description: 'Curated tiers to maximize aesthetic value at every budget level.',
  },
  {
    title: 'Handcrafted Packaging',
    description: 'Embossed names, laser cut plaques, satin ribbons, and bespoke wax seals.',
  },
  {
    title: 'Single & Bulk Orders',
    description: 'From an intimate keepsake box to hundreds of wedding return favors.',
  },
  {
    title: 'Coordinated Aesthetics',
    description: 'Match your venue decor seamlessly with your welcome favors and bridal hampers.',
  },
  {
    title: 'Direct WhatsApp Support',
    description: 'Prompt communication with photos and progress updates throughout the process.',
  },
];

// Why Choose Points
export interface WhyChoosePoint {
  title: string;
  description: string;
}

export const whyChoosePoints: WhyChoosePoint[] = [
  {
    title: 'Artisanal Craftsmanship',
    description: 'Every gift is assembled by hand and every backdrop is personally curated with premium materials.',
  },
  {
    title: 'Transparent Collaboration',
    description: 'Clear communication with honest inclusions, avoiding last-minute surprises or hidden fees.',
  },
  {
    title: 'Udupi & Coastal Focus',
    description: 'Local presence with rapid delivery and punctual on-site celebration styling.',
  },
  {
    title: 'Bespoke Customization',
    description: 'Custom names, dates, colors, and items integrated into every setup or hamper.',
  },
  {
    title: 'Coordinated Solutions',
    description: 'Get both venue decor and guest hampers from a single cohesive design team.',
  },
  {
    title: 'Prompt WhatsApp Consultations',
    description: 'Instant assistance, photo references, and hassle-free booking on WhatsApp.',
  },
];
