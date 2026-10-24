import React from 'react';
import { howItWorksSteps } from '../data/services';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-18 sm:py-24 bg-[#FFFDF9] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#61524F]">
            From your first idea to your special celebration, we make personalized gifting and event styling effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((item) => (
            <div
              key={item.step}
              className="bg-[#FAF7F2] p-7 rounded-2xl border border-[#D8CEBE] shadow-xs hover:border-[#C5A059] transition-all space-y-3 relative group"
            >
              <div className="font-serif text-3xl font-bold text-[#C5A059]">
                {item.step}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#32070F]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#61524F] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
