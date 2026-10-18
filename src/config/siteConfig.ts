/**
 * Ayezis Corner - Central Site Configuration
 * 
 * Edit this file to quickly update business details, contact information,
 * logo, and social links without touching component code.
 */

export const siteConfig = {
  // Business Information
  businessName: "Ayezis Corner",
  tagline: "Event Decoration & Customized Gifts",
  logo: "/logo.png", // Located in public/logo.png (falls back to text wordmark if missing)

  // Hero Copy
  heroLabel: "EVENT DECORATION & CUSTOMIZED GIFTS",
  heroHeadline: "Beautiful Moments,\nThoughtfully Created.",
  heroDescription:
    "Event decoration and customized gifts made to make every celebration special.",

  // Contact Information (Update with client verified details)
  phone: "[CLIENT PHONE - TO BE PROVIDED]",
  whatsappNumber: "910000000000", // Digits only with country code (e.g. "919876543210")
  whatsappDisplay: "[CLIENT WHATSAPP - TO BE PROVIDED]",
  email: "[CLIENT EMAIL - TO BE PROVIDED]",
  address: "[CLIENT ADDRESS - TO BE PROVIDED]",
  googleMapsUrl: "https://maps.google.com/?q=Ayezis+Corner",

  // Social Links
  instagramUrl: "https://www.instagram.com/ayezis_corner/",
  instagramHandle: "@ayezis_corner",

  // Business Highlights
  stats: {
    customers: "9.2K+ happy customers",
    shipping: "Pan-India & worldwide shipping",
  },

  // Default WhatsApp Message
  defaultWhatsappMessage:
    "Hi Ayezis Corner, I would like to know more about your event decoration and customized gifting services.",
};

/**
 * Helper to generate pre-filled WhatsApp links
 */
export function getWhatsAppLink(customMessage?: string): string {
  const number = siteConfig.whatsappNumber;
  const message = encodeURIComponent(
    customMessage || siteConfig.defaultWhatsappMessage
  );
  return `https://wa.me/${number}?text=${message}`;
}
