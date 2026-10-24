import React from 'react';
import {
  Layers,
  HeartHandshake,
  Baby,
  Sparkles,
  Gem,
  Home,
  Briefcase,
  Flame,
  Palette,
  Check,
  MessageCircle,
} from 'lucide-react';
import { combinedPackages, customizationPoints } from '../data/services';
import { getWhatsAppLink } from '../config/siteConfig';

export const PackagesSection: React.FC = () => {
  const getPackageIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Baby':
        return Baby;
      case 'Sparkles':
        return Sparkles;
      case 'Gem':
        return Gem;
      case 'Home':
        return Home;
      case 'Briefcase':
        return Briefcase;
      case 'Flame':
        return Flame;
      case 'Palette':
      default:
        return Palette;
    }
  };

  return (
    <section id="packages" className="py-18 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 4: Combined Gifting & Decor Packages */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
            <Layers className="w-3.5 h-3.5" />
            <span>Coordinated Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
            Combined Gifting &amp; Décor Packages
          </h2>
          <p className="text-sm sm:text-base text-[#61524F]">
            Save time and achieve seamless aesthetic harmony by letting Ayezis Corner coordinate both your celebration décor and guest gifts together.
          </p>
        </div>

        {/* Combined Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {combinedPackages.map((pkg) => {
            const Icon = getPackageIcon(pkg.iconName);
            return (
              <div
                key={pkg.title}
                className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#D8CEBE] hover:border-[#C5A059] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4A0E18] text-[#DFBE7A] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#32070F]">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61524F] leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(`Hi Ayezis Corner, I'm interested in the ${pkg.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 pt-3 border-t border-[#F0E6D8] text-xs font-semibold text-[#7D1D2C] hover:text-[#4A0E18] flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>Enquire for Package</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Section 5: Customization Highlights */}
        <div className="bg-[#4A0E18] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#C5A059]/40 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#DFBE7A] font-semibold">
              Bespoke Personalization
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Tailored Around Your Vision &amp; Budget
            </h3>
            <p className="text-xs sm:text-sm text-[#E8DFD3]/85 leading-relaxed">
              Every celebration is personal. From customized backdrops and tags to curated hampers and budget-friendly scale options, we bring your concepts to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customizationPoints.map((pt) => (
              <div
                key={pt.title}
                className="bg-[#32070F]/80 backdrop-blur-xs p-5 rounded-2xl border border-[#C5A059]/25 flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-[#DFBE7A]/20 text-[#DFBE7A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-[#E8DFD3]/75 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
