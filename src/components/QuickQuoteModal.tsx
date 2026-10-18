import React, { useState } from 'react';
import { X, Send, CheckCircle, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../config/siteConfig';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Event Decoration',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `Hi Ayezis Corner, I would like to get a quote.\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nNotes: ${formData.message}`;
    return getWhatsAppLink(text);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-[#FAF7F2] rounded-2xl border border-[#D8CEBE] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#4A0E18] text-[#FAF7F2] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#DFBE7A]" />
            <h3 className="font-serif text-xl font-bold">Get a Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-md hover:bg-[#6B1724] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/15 text-[#1E7E34] flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#32070F]">
                Thank You, {formData.name}!
              </h4>
              <p className="text-xs sm:text-sm text-[#5D4E4B]">
                We have received your enquiry for <strong>{formData.service}</strong>.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send details via WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs font-medium text-[#4A0E18] bg-[#F3ECE2] hover:bg-[#EAE0D2] rounded-md border border-[#D8CEBE]"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMsg && (
                <div className="p-2 bg-red-50 text-red-700 text-xs rounded-md border border-red-200">
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
                  placeholder="e.g. Pooja"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white rounded-md border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white rounded-md border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                  What are you looking for?
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white rounded-md border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C]"
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
                  Message / Ideas
                </label>
                <textarea
                  rows={2}
                  placeholder="Date, location, or customization details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white rounded-md border border-[#D8CEBE] focus:outline-hidden focus:ring-1 focus:ring-[#7D1D2C] focus:border-[#7D1D2C]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-[#7D1D2C] hover:bg-[#661320] rounded-md transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer mt-1"
              >
                <span>Submit Quote Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
