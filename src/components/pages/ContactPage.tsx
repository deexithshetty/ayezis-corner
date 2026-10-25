import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';
import { PageRoute } from '../../types/navigation';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Event Decoration',
    occasion: 'Wedding & Pre-Wedding',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Generate WhatsApp URL with prefilled text and open it
    const msg = `Hi Ayezis Corner, I'm submitting an enquiry via your website:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nOccasion: ${formData.occasion}\nEvent Date: ${formData.date || 'TBD'}\nDetails: ${formData.message || 'None'}`;
    window.open(getWhatsAppLink(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. Header Banner */}
      <section className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E8DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E8DFD3] text-[#7D1D2C] text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Connect &amp; Collaborate</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#32070F] tracking-tight">
            Let’s Discuss Your Celebration
          </h1>

          <p className="text-base sm:text-lg text-[#61524F] max-w-2xl mx-auto font-light leading-relaxed">
            We are here to help curate your event decoration or customize a thoughtful gift hamper. Reach out via WhatsApp or submit your enquiry below.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7D1D2C]">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl font-light text-[#32070F]">
                Direct Studio Channels
              </h2>
              <p className="text-sm text-[#61524F] leading-relaxed">
                For the quickest consultation, reach us directly on WhatsApp. We typically respond within a few hours.
              </p>
            </div>

            {/* Primary Highlighted WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">
                    Fastest Response
                  </span>
                  <p className="font-serif text-lg font-bold text-[#32070F]">
                    WhatsApp Consultation
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#524441] leading-relaxed">
                Chat directly with our team to check availability, share photos, or discuss pricing.
              </p>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+91 {siteConfig.phone})</span>
              </a>
            </div>

            {/* Other Channels */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] hover:border-[#7D1D2C] transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#7D1D2C] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#7D6B67] uppercase tracking-wider block">Phone Call</span>
                  <p className="text-sm font-semibold text-[#32070F] group-hover:text-[#7D1D2C]">{siteConfig.phone}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] hover:border-[#7D1D2C] transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#7D1D2C] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#7D6B67] uppercase tracking-wider block">Email Inquiries</span>
                  <p className="text-sm font-semibold text-[#32070F] group-hover:text-[#7D1D2C]">{siteConfig.email}</p>
                </div>
              </a>

              {/* Address */}
              <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#7D1D2C] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#7D6B67] uppercase tracking-wider block">Studio Location</span>
                  <p className="text-sm font-semibold text-[#32070F]">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF9] p-8 sm:p-10 rounded-3xl border border-[#D8CEBE] shadow-sm">
            <h3 className="font-serif text-2xl font-light text-[#32070F] mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#61524F] mb-6">
              Fill in your details and we will formulate a personalized proposal for you.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#32070F]">Thank You!</h4>
                <p className="text-sm text-[#524441] max-w-md mx-auto">
                  Your enquiry has been prepared. If WhatsApp didn’t open automatically, click the button below to connect with us.
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#4A3E3D] uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Rao"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7D1D2C]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#4A3E3D] uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9632494070"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7D1D2C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#4A3E3D] uppercase tracking-wider">
                      Service Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7D1D2C]"
                    >
                      <option value="Event Decoration">Event Decoration</option>
                      <option value="Customized Gifts & Hampers">Customized Gifts &amp; Hampers</option>
                      <option value="Combined Decor & Favours Package">Combined Décor &amp; Favours Package</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#4A3E3D] uppercase tracking-wider">
                      Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7D1D2C]"
                    >
                      <option value="Wedding & Pre-Wedding">Wedding &amp; Pre-Wedding</option>
                      <option value="Baby Shower / Welcome Baby">Baby Shower / Welcome Baby</option>
                      <option value="Housewarming Ceremony">Housewarming Ceremony</option>
                      <option value="Corporate / Brand Event">Corporate / Brand Event</option>
                      <option value="Festive & Cultural Celebration">Festive &amp; Cultural Celebration</option>
                      <option value="Intimate Celebration / Other">Intimate Celebration / Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#4A3E3D] uppercase tracking-wider">
                    Tentative Date / Timeline
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g. Next month / November 15"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7D1D2C]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#4A3E3D] uppercase tracking-wider">
                    Celebration Details or Theme Ideas
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the venue, color palette, or items you’d like included..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7D1D2C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#7D1D2C] hover:bg-[#661320] active:scale-[0.98] rounded-full shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
