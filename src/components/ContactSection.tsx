import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  Send,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Event Decoration',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi Ayezis Corner, I'm reaching out from your website.\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    return getWhatsAppLink(text);
  };

  return (
    <section id="contact" className="py-18 sm:py-24 bg-[#FFFDF9] border-t border-[#E8DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#7D1D2C]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#32070F]">
            Let's Create Something Special
          </h2>
          <p className="text-sm sm:text-base text-[#61524F]">
            Planning an event or looking for a customized gift? WhatsApp us directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Contact Channels (5 cols) */}
          <div className="md:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#D8CEBE] space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#32070F]">
              Direct Contact
            </h3>

            {/* Primary Highlighted WhatsApp Channel */}
            <div className="p-4 bg-[#25D366]/10 rounded-xl border border-[#25D366]/30 space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">
                    Fastest Response
                  </span>
                  <p className="font-serif text-base font-bold text-[#32070F]">
                    Chat Directly on WhatsApp
                  </p>
                </div>
              </div>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-md transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <span>Open WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Other Channels */}
            <div className="space-y-4 pt-1 text-sm text-[#4A3E3D]">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#4A0E18] text-[#DFBE7A] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#7A6B68]">Phone</p>
                  <p className="font-medium font-mono text-[#32070F]">{siteConfig.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#4A0E18] text-[#DFBE7A] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#7A6B68]">Email</p>
                  <p className="font-medium font-mono text-[#32070F]">{siteConfig.email}</p>
                </div>
              </div>

              {/* Address & Google Maps */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#4A0E18] text-[#DFBE7A] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-serif font-bold">📍</span>
                </div>
                <div>
                  <p className="text-xs text-[#7A6B68]">Studio Address</p>
                  <p className="font-medium text-[#32070F] text-xs sm:text-sm">{siteConfig.address}</p>
                  {siteConfig.googleMapsUrl && (
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#7D1D2C] hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#833AB4] to-[#FD1D1D] text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#7A6B68]">Instagram</p>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#7D1D2C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{siteConfig.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8DFD3] text-xs text-[#7A6B68] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Pan-India &amp; worldwide shipping available</span>
            </div>
          </div>

          {/* Simple Enquiry Form (7 cols) */}
          <div className="md:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#D8CEBE]">
            <h3 className="font-serif text-2xl font-bold text-[#32070F] mb-1">
              Request a Quote
            </h3>
            <p className="text-xs sm:text-sm text-[#665754] mb-6">
              Fill out a quick note and we will reply promptly with details.
            </p>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/15 text-[#1E7E34] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#32070F]">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-sm text-[#5D4E4B]">
                  We have received your enquiry for <strong className="text-[#32070F]">{formData.service}</strong>.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-md transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send details via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: 'Event Decoration',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 text-xs font-medium text-[#4A0E18] bg-[#F3ECE2] hover:bg-[#EAE0D2] rounded-md border border-[#D8CEBE]"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-2 text-xs bg-red-50 text-red-700 border border-red-200 rounded-md">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-md border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-md border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                    What are you looking for?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-md border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C]"
                  >
                    <option value="Event Decoration">Event Decoration</option>
                    <option value="Wedding & Party Decor">Wedding &amp; Party Decor</option>
                    <option value="Customized Gifts">Customized Gifts</option>
                    <option value="Corporate Gifting">Corporate Gifting</option>
                    <option value="Personalized Gifts">Personalized Gifts</option>
                    <option value="Other">Other Custom Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your event date, theme, or custom gift idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-md border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-[#FAF7F2] bg-[#7D1D2C] hover:bg-[#661320] rounded-md transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
