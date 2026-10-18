import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { services } from '../data/services';
import { getWhatsAppLink } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-18 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
            Our Specialties
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-[#61524F]">
            High-quality event decor styling and customized gifts tailored for every occasion.
          </p>
        </div>

        {/* 5 Visual Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const isWide = index === 0 || index === 1;
            return (
              <div
                key={item.id}
                className={`group rounded-2xl overflow-hidden border border-[#D8CEBE] hover:border-[#C5A059] bg-[#FFFDF9] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1.5' : 'lg:col-span-1'
                }`}
              >
                {/* Large Dominant Image */}
                <div className="relative aspect-16/11 sm:aspect-16/10 overflow-hidden bg-[#EAE0D2]">
                  <ResilientImage
                    src={item.image}
                    alt={item.name}
                    fallbackTitle={item.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#32070F] group-hover:text-[#7D1D2C] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#61524F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hi Ayezis Corner, I'm interested in: ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-3 text-xs font-semibold text-[#7D1D2C] hover:text-[#4A0E18] flex items-center gap-1.5 border-t border-[#F0E6D8] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-auto" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
