/**
 * Ayezis Corner - Central Site Configuration
 * 
 * Edit this file to quickly update business details, contact information,
 * logo, and social links without touching component code.
 */

export const siteConfig = {
  // Business Information
  businessName: "Ayezis Corner",
  tagline: "Thoughtful Gifts. Beautiful Celebrations.",
  logo: "/logo.png", // Located in public/logo.png (falls back to text wordmark if missing)

  // Short Brand Positioning
  shortDescription:
    "At Ayezis Corner, we bring special moments to life through thoughtfully curated gifts, personalized hampers, and beautiful decorations. From intimate celebrations to special occasions, we create memorable experiences with creativity, elegance, and attention to detail.",

  // Hero Copy
  heroLabel: "THOUGHTFUL GIFTS · BEAUTIFUL CELEBRATIONS",
  heroHeadline: "Thoughtful Gifts.\nBeautiful Celebrations.",
  heroDescription:
    "From thoughtfully curated gifts and personalized hampers to beautiful decorations, we design memorable experiences for your special celebrations with creativity and elegance.",

  // Contact Information (Temporary testing details)
phone: "919148123660",
whatsappNumber: "919148123660", // Digits only with country code
whatsappDisplay: "+91 9148123660",
email: "ayezis@gmail.com",
address: "Shop No. 4-293A1, Sri Gurudeva Complex, Laxmindra Nagar, Kunjibettu, Udupi, Karnataka - 576102",
googleMapsUrl: "https://maps.app.goo.gl/k8stdF2JAEjxT4oBA",

  // Social Links
  instagramUrl: "https://www.instagram.com/ayezis_corner/",
  instagramHandle: "@ayezis_corner",

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
