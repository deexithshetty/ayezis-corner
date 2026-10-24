import React from 'react';
import {
  Sparkles,
  HeartHandshake,
  Palette,
  Wallet,
  CheckCircle2,
  Building,
} from 'lucide-react';
import { whyChoosePoints } from '../data/services';

export const WhyChooseUsSection: React.FC = () => {
  const icons = [
    Sparkles,
    HeartHandshake,
    Palette,
    Wallet,
    CheckCircle2,
    Building,
  ];

  return (
    <section className="py-18 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
            Why Choose Ayezis Corner?
          </h2>
          <p className="text-sm sm:text-base text-[#61524F]">
            We merge artisanal gifting with bespoke celebration styling for a seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChoosePoints.map((pt, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pt.title}
                className="bg-[#FFFDF9] p-6 sm:p-7 rounded-2xl border border-[#D8CEBE] hover:border-[#C5A059] shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4A0E18] text-[#DFBE7A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-[#32070F]">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61524F] leading-relaxed">
                    {pt.description}
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
