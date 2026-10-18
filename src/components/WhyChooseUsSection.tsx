import React from 'react';
import { Sparkles, PartyPopper, Gift, Truck } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const points = [
    {
      icon: Sparkles,
      title: 'Personalized Creations',
      desc: 'Every gift is customized to your names, dates, and special vision.',
    },
    {
      icon: PartyPopper,
      title: 'Beautiful Event Décor',
      desc: 'Bespoke floral setups, stages, and balloon backdrops for life milestones.',
    },
    {
      icon: Gift,
      title: 'Customized Gifting',
      desc: 'Laser-engraved items, embroidery, photo keepsakes, and luxury hampers.',
    },
    {
      icon: Truck,
      title: 'Pan-India & Worldwide Shipping',
      desc: 'Secure packaging and reliable doorstep delivery to any location.',
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#F5EDE4]/60 border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="bg-[#FFFDF9] p-6 rounded-xl border border-[#E8DFD3] flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-9 h-9 rounded-lg bg-[#4A0E18] text-[#DFBE7A] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-bold text-[#32070F]">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#635552] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
