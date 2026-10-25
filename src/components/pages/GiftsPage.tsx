import React from 'react';
import { Gift, MessageCircle, ArrowRight, Sparkles, Check, PackageCheck } from 'lucide-react';
import { getWhatsAppLink } from '../../config/siteConfig';
import { ResilientImage } from '../ResilientImage';
import { PageRoute } from '../../types/navigation';

interface GiftsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

interface GiftCollectionItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
}

const giftCollections: GiftCollectionItem[] = [
  {
    id: 'wedding-bridal-hampers',
    title: 'Wedding & Bridal Hampers',
    tagline: 'Bridal trousseau boxes, groom accessories & bridesmaid tokens',
    image: '/images/wedding-bridal/wedding-bridal-04.jpeg',
    description: 'Exquisite trousseau packaging, bridesmaid favor boxes, personalized groom kits, and ceremonial keepsake trunks matching your wedding color palette.',
    highlights: ['Bespoke Trousseau Trays', 'Bridal Robe & Keepsake Boxes', 'Groom Accessory Cases'],
  },
  {
    id: 'baby-announcement-hampers',
    title: 'Baby Announcements & Welcome Hampers',
    tagline: 'Newborn celebrations, baby shower favors & milestone chests',
    image: '/images/baby-newborn/baby-newborn-02.jpeg',
    description: 'Enchanting pastel announcement boxes with custom baby name details, milestone cards, baby-safe essentials, and celebratory mementos for loved ones.',
    highlights: ['Custom Name Engraving', 'Soft Pastel Keepsake Trunks', 'Announcement Gift Favors'],
  },
  {
    id: 'luxury-keepsake-boxes',
    title: 'Luxury Keepsake Boxes & Trays',
    tagline: 'Artisanal trunks, velvet boxes & heirloom packaging',
    image: '/images/customized-gifts/customized-gifts-31.jpeg',
    description: 'Handcrafted rigid boxes, leatherette cases, and wooden organizer trays finished with gold foil calligraphy, satin ribbons, and bespoke wax seals.',
    highlights: ['Leatherette & Velvet Finishes', 'Custom Embossing / Monograms', 'Reusable Premium Boxes'],
  },
  {
    id: 'gifts-him-her',
    title: 'Gifts for Him & Her',
    tagline: 'Personalized accessories, leatherette organizers & curated sets',
    image: '/images/customized-gifts/customized-gifts-07.jpeg',
    description: 'Thoughtfully customized personal accessories including personalized passport sleeves, luggage tags, eyewear cases, custom mugs, and everyday keepsakes.',
    highlights: ['Personalized Name Embossing', 'Curated Lifestyle Items', 'Elegant Minimal Aesthetics'],
  },
  {
    id: 'housewarming-home-keepsakes',
    title: 'Housewarming & Home Keepsakes',
    tagline: 'Auspicious home accents, aromatic sets & blessing trays',
    image: '/images/customized-gifts/customized-gifts-18.jpeg',
    description: 'Welcoming hampers for new beginnings featuring bespoke home accents, artisanal candle sets, customized brass trays, and traditional blessings.',
    highlights: ['Artisanal Home Fragrances', 'Handcrafted Accents', 'Customized Name Badges'],
  },
  {
    id: 'corporate-executive-kits',
    title: 'Corporate & Executive Gift Kits',
    tagline: 'Client appreciation gifts, onboarding hampers & summit mementos',
    image: '/images/corporate/corporate-12.jpeg',
    description: 'Elevate your brand presence with premium corporate gift kits. Subtle branding, executive stationery, tech organizers, and high-quality gourmet treats.',
    highlights: ['Subtle Brand Integration', 'Bulk Handcrafting Capability', 'Fast Turnaround Logistics'],
  },
  {
    id: 'festive-traditional-gifting',
    title: 'Festive & Traditional Gift Boxes',
    tagline: 'Cultural celebration hampers & seasonal token assortments',
    image: '/images/festive/festive-01.jpeg',
    description: 'Joyful boxes tailored for festive occasions and cultural gatherings. Packed with artisanal sweets, festive lighting accents, dry fruits, and bespoke greetings.',
    highlights: ['Traditional Brass & Terracotta', 'Curated Festive Treats', 'Theme-Specific Presentation'],
  },
  {
    id: 'name-plaques-frames',
    title: 'Personalized Name Plaques & Frames',
    tagline: 'Engraved acrylic art, wooden plaques & memory keepsakes',
    image: '/images/customized-gifts/customized-gifts-15.jpeg',
    description: 'Handcrafted acrylic and wooden nameplates, celebration plaques, and customized frames celebrating names, dates, and meaningful milestones.',
    highlights: ['Laser Cut Precision', 'Custom Typography & Fonts', 'Durable Heirloom Quality'],
  },
  {
    id: 'gourmet-celebration-hampers',
    title: 'Gourmet & Celebration Hampers',
    tagline: 'Artisanal chocolates, premium dry fruits & delicacy baskets',
    image: '/images/hampers/hampers-01.jpeg',
    description: 'Deliciously arranged hampers combining gourmet treats, single-origin coffees, artisanal teas, nuts, and handcrafted preserves in woven or acrylic hampers.',
    highlights: ['Fresh Premium Confections', 'Custom Dietary Curation', 'Sealed Luxury Presentation'],
  },
  {
    id: 'return-gifts-event-favours',
    title: 'Return Gifts & Event Favours',
    tagline: 'Coordinated guest giveaways for ceremonies & gatherings',
    image: '/images/wedding-bridal/wedding-bridal-06.jpeg',
    description: 'Thank your guests with memorable, tastefully packaged event favors. From customized keepsakes to mini hampers that complement your celebration decor.',
    highlights: ['Consistent Theme Matching', 'Bulk Tier Pricing', 'Personalized Thank You Cards'],
  },
];

export const GiftsPage: React.FC<GiftsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. Large Visual Hero Banner */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#1E0509]">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src="/images/customized-gifts/customized-gifts-31.jpeg"
            alt="Ayezis Corner Customized Gifting"
            className="w-full h-full object-cover object-center opacity-40 scale-102"
            fallbackTitle="Ayezis Corner Customized Gifts"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0307] via-[#1A0307]/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFBE7A] text-xs font-medium tracking-[0.2em] uppercase">
            <Gift className="w-3.5 h-3.5 text-[#DFBE7A]" />
            <span>Artisanal Keepsakes · Bespoke Hampers</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#FFFDF9]">
            The Art of Thoughtful Gifting
          </h1>

          <p className="text-base sm:text-lg text-[#EAE0D2]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Every gift tells a story of care and celebration. We curate personalized hampers, bridal trousseau trunks, newborn welcomes, and corporate favors handcrafted to leave an indelible impression.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppLink("Hi Ayezis Corner, I'd like to consult on customized gifting options.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] transition-all rounded-full shadow-md flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Customize a Gift on WhatsApp</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#1A0307] bg-[#FFFDF9] hover:bg-[#F3ECE2] active:scale-[0.98] transition-all rounded-full shadow-md cursor-pointer"
            >
              Request Gifting Catalogue
            </button>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Packaging Craft */}
      <section className="py-14 sm:py-20 bg-[#FFFDF9] border-b border-[#E8DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
            Our Curation Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F]">
            More Than Just a Box
          </h2>
          <p className="text-base text-[#61524F] leading-relaxed font-light">
            We source premium materials, hand-tie satin ribbons, emboss custom initials, and personally assemble every item with genuine devotion. No mass-market packaging—only memorable, refined presentations tailored to your recipient.
          </p>
        </div>
      </section>

      {/* 3. 10 Curated Gifting Collections */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
                Explore Collections
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F] mt-1">
                Curated Gifting Categories
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#7D6B67] max-w-md">
              Available for individual orders as well as large-scale celebration batches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftCollections.map((col, index) => {
              const isFeature = index === 0;
              return (
                <div
                  key={col.id}
                  className={`group bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#D8CEBE] hover:border-[#7D1D2C] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    isFeature ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-[#EAE0D2] ${isFeature ? 'aspect-16/9 sm:aspect-21/10' : 'aspect-16/10'}`}>
                    <ResilientImage
                      src={col.image}
                      alt={col.title}
                      fallbackTitle={col.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#32070F]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#DFBE7A]">
                      Bespoke Collection
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl font-light text-[#32070F] group-hover:text-[#7D1D2C] transition-colors">
                        {col.title}
                      </h4>
                      <p className="text-xs font-medium text-[#7D1D2C] uppercase tracking-wider">
                        {col.tagline}
                      </p>
                      <p className="text-sm text-[#61524F] leading-relaxed">
                        {col.description}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {col.highlights.map((h, i) => (
                          <span key={i} className="text-[11px] bg-[#FAF7F2] text-[#4A0E18] px-2.5 py-1 rounded-full border border-[#E8DFD3]">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#F0E6D8] flex items-center justify-between">
                      <a
                        href={getWhatsAppLink(`Hi Ayezis Corner, I'm interested in ordering/customizing: ${col.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E7E34] hover:text-[#176529] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                        <span>Customize on WhatsApp</span>
                      </a>
                      <button
                        onClick={onOpenQuoteModal}
                        className="text-xs text-[#7D1D2C] hover:underline font-medium cursor-pointer"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. The 4-Step Customization Experience */}
      <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#E8DFD3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
              Simple &amp; Seamless
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F]">
              How We Create Your Gift
            </h3>
            <p className="text-sm text-[#61524F]">
              From your initial concept to the finalized heirloom box.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Share the Occasion',
                desc: 'Tell us who the gift is for, your color preferences, and celebration theme.',
              },
              {
                step: '02',
                title: 'Curate the Selection',
                desc: 'Select from our curated products, keepsakes, gourmet delicacies, or custom items.',
              },
              {
                step: '03',
                title: 'Handcrafted Styling',
                desc: 'We personalize names, monogram cards, hand-tie silks, and seal each box.',
              },
              {
                step: '04',
                title: 'Delivery & Joy',
                desc: 'Ready for doorstep handover or direct dispatch across Udupi and beyond.',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-3 relative overflow-hidden"
              >
                <span className="font-serif text-3xl font-bold text-[#7D1D2C]/20">{s.step}</span>
                <h4 className="font-serif text-lg font-semibold text-[#32070F]">{s.title}</h4>
                <p className="text-xs text-[#61524F] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct WhatsApp Order CTA */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DFD3] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F]">
            Want to Discuss a Custom Gift or Bulk Favors?
          </h3>
          <p className="text-sm text-[#61524F]">
            Chat with us directly to see recent examples, discuss personalized branding, or request a custom hamper tailored to your exact budget.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppLink("Hi Ayezis Corner, I'd like to discuss a custom gift hamper order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-3.5 text-sm font-semibold text-[#32070F] bg-white border border-[#D8CEBE] hover:bg-[#F5EFE6] rounded-full shadow-xs cursor-pointer"
            >
              Browse Gallery Works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
