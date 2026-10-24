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

// 3. Combined Gifting & Decor Packages
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
    description: 'Auspicious home entrance decoration combined with traditional sweets, aromas, and home gifts.',
    iconName: 'Home',
  },
  {
    title: 'Corporate Gifting & Event Décor',
    description: 'Corporate stage & photo corner setup aligned with customized executive employee and client gift hampers.',
    iconName: 'Briefcase',
  },
  {
    title: 'Festival Gifting & Decoration',
    description: 'Festive pooja and venue decoration paired with premium traditional holiday hampers.',
    iconName: 'Flame',
  },
  {
    title: 'Fully Customized Celebration Packages',
    description: 'A tailor-made combination of decor and gifts designed around your unique occasion, theme, and budget.',
    iconName: 'Palette',
  },
];

// 4. Customization Features
export const customizationPoints = [
  {
    title: 'Personalized Gift Selection',
    description: 'Handpick items tailored specifically to the recipient’s taste and personality.',
  },
  {
    title: 'Custom Hamper Curation',
    description: 'Curate bespoke combinations of treats, keepsakes, textiles, and aromatic products.',
  },
  {
    title: 'Theme & Colour Coordination',
    description: 'Match gift wrappings, ribbons, florals, and backdrops to your exact event color palette.',
  },
  {
    title: 'Customized Names, Messages & Tags',
    description: 'Laser-engraved initials, embroidered monograms, custom gift tags, and printed note cards.',
  },
  {
    title: 'Customized Backdrops & Signage',
    description: 'Welcome boards, easel signage, acrylic neon plaques, and tailored backdrop banners.',
  },
  {
    title: 'Budget-Based Packages',
    description: 'Flexible packages designed thoughtfully to meet your desired budget without compromising beauty.',
  },
  {
    title: 'Small & Large Celebrations',
    description: 'Attentive service for cozy, intimate family gatherings as well as grand celebration venues.',
  },
  {
    title: 'Bulk Gifting & Event Orders',
    description: 'Reliable fulfillment for high-volume corporate giveaways and wedding return favor orders.',
  },
  {
    title: 'Personalized Concepts for Special Occasions',
    description: 'Creative styling and bespoke gifting designed exclusively for your unique milestone moments.',
  },
];

// 5. How It Works (4 Steps)
export const howItWorksSteps = [
  {
    step: '01',
    title: 'Share Your Occasion',
    description: 'Tell us what you are planning and what you have in mind.',
  },
  {
    step: '02',
    title: 'Choose Your Style',
    description: 'Select your gifts, décor, colours and budget.',
  },
  {
    step: '03',
    title: 'Customize Your Package',
    description: 'We help coordinate a personalized gifting or decoration experience.',
  },
  {
    step: '04',
    title: 'Celebrate Your Moment',
    description: 'Enjoy a thoughtfully planned celebration with Ayezis Corner.',
  },
];

// 6. Why Choose Ayezis Corner (6 Points)
export const whyChoosePoints = [
  {
    title: 'Gifts and décor under one roof',
    description: 'Seamless coordination for both your celebration ambience and personalized gifts.',
  },
  {
    title: 'Personalized solutions for every occasion',
    description: 'Every arrangement and gift box is tailored around your individual preferences.',
  },
  {
    title: 'Creative and coordinated themes',
    description: 'Harmonious color palettes, matching aesthetics, and unique decorative ideas.',
  },
  {
    title: 'Options for different budgets',
    description: 'Flexible packages and options curated to deliver maximum value at your chosen scale.',
  },
  {
    title: 'Attention to presentation and detail',
    description: 'Meticulous finishing in every ribbon, floral placement, and customized tag.',
  },
  {
    title: 'Personal and corporate celebration solutions',
    description: 'Experienced in catering to intimate family celebrations and professional business events.',
  },
];
