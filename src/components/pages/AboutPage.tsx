import React from 'react';
import { Gift, Sparkles, HeartHandshake, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';
import { ResilientImage } from '../ResilientImage';
import { PageRoute } from '../../types/navigation';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. Header Banner */}
      <section className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E8DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E8DFD3] text-[#7D1D2C] text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Artisanal Event Studio &amp; Gifting House</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#32070F] tracking-tight">
            About {siteConfig.businessName}
          </h1>

          <p className="text-base sm:text-lg text-[#61524F] max-w-2xl mx-auto font-light leading-relaxed">
            {siteConfig.tagline}
          </p>
        </div>
      </section>

      {/* 2. Main Editorial Story with the designated decorations-02.jpeg image */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual side with required decorations-02.jpeg */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D8CEBE] aspect-4/3 sm:aspect-5/4 bg-[#EAE0D2]">
              <ResilientImage
                src="/images/decorations/decorations-02.jpeg"
                alt="Ayezis Corner Celebration Styling & Gifting"
                className="w-full h-full object-cover"
                fallbackTitle="Ayezis Corner Story"
              />
            </div>
            {/* Subtle decorative gold corner frame */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-32 h-32 border-r-2 border-b-2 border-[#C5A059]/40 rounded-br-2xl pointer-events-none" />
          </div>

          {/* Narrative side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
                Our Journey &amp; Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F] tracking-tight">
                Crafting Moments That Truly Matter
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#554643] font-light leading-relaxed">
              <p>
                {siteConfig.shortDescription}
              </p>
              <p className="text-sm sm:text-base text-[#61524F]">
                Based in Udupi, Karnataka, our studio was founded on a simple conviction: meaningful celebrations are elevated through attention to detail, tactile beauty, and bespoke customization.
              </p>
              <p className="text-sm sm:text-base text-[#61524F]">
                Whether curating personalized trousseau hampers for an auspicious wedding, preparing welcoming gifts for a newborn, or designing an enchanting floral backdrop for an intimate ceremony, we take the time to understand your story and manifest it visually.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('decorations')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#7D1D2C] hover:text-[#4A0E18] pb-1 border-b border-[#7D1D2C]/40 hover:border-[#7D1D2C] transition-all cursor-pointer"
              >
                <span>View Event Decorations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('gifts')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#7D1D2C] hover:text-[#4A0E18] pb-1 border-b border-[#7D1D2C]/40 hover:border-[#7D1D2C] transition-all cursor-pointer"
              >
                <span>Explore Customized Gifts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Three Pillars of Distinction */}
      <section className="py-16 sm:py-24 bg-[#FFFDF9] border-y border-[#E8DFD3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
              Core Principles
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#32070F]">
              What Defines Our Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#7D1D2C]/10 text-[#7D1D2C] flex items-center justify-center">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-light text-[#32070F]">
                Bespoke Curation
              </h4>
              <p className="text-sm text-[#61524F] leading-relaxed">
                Every hamper, color palette, and decorative detail is hand-selected. We do not use generic off-the-shelf bundles.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-light text-[#32070F]">
                Artisanal Elegance
              </h4>
              <p className="text-sm text-[#61524F] leading-relaxed">
                Warm cream tones, regal wine accents, handcrafted calligraphy, satin draping, and soft ambient illumination.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#7D1D2C]/10 text-[#7D1D2C] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-light text-[#32070F]">
                Dedicated Execution
              </h4>
              <p className="text-sm text-[#61524F] leading-relaxed">
                Direct consultation via WhatsApp, punctual on-site installation, and thorough quality inspection before handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Studio Location & Direct Contact Channels */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#D8CEBE] shadow-sm space-y-8 text-center sm:text-left">
          <div className="space-y-2 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
              Direct Connect
            </span>
            <h3 className="font-serif text-3xl font-light text-[#32070F]">
              Consult With Our Studio
            </h3>
            <p className="text-sm text-[#61524F]">
              Have an upcoming occasion in mind? Reach out to us directly through any of our channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-5 rounded-2xl bg-white border border-[#E8DFD3] hover:border-[#7D1D2C] transition-colors text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#7D1D2C] flex items-center justify-center mx-auto">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#7D6B67] uppercase tracking-wider block">Call Directly</span>
              <p className="text-sm font-semibold text-[#32070F] group-hover:text-[#7D1D2C]">{siteConfig.phone}</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-5 rounded-2xl bg-white border border-[#E8DFD3] hover:border-[#7D1D2C] transition-colors text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#7D1D2C] flex items-center justify-center mx-auto">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#7D6B67] uppercase tracking-wider block">Send Email</span>
              <p className="text-sm font-semibold text-[#32070F] group-hover:text-[#7D1D2C] break-all">{siteConfig.email}</p>
            </a>

            {/* Location */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#7D1D2C] flex items-center justify-center mx-auto">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#7D6B67] uppercase tracking-wider block">Studio Location</span>
              <p className="text-sm font-semibold text-[#32070F]">{siteConfig.address}</p>
            </div>
          </div>

          {/* WhatsApp Primary Banner */}
          <div className="pt-2 text-center">
            <a
              href={getWhatsAppLink("Hi Ayezis Corner, I'd like to consult with you about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp (+91 {siteConfig.phone})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
