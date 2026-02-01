// Mitti Shakti Business Constants

export const SITE_CONFIG = {
  name: "Mitti Shakti",
  tagline: "Organic Vermicompost & Natural Fertilizers for Home Plants",
  description: "100% organic, chemical-free vermicompost and natural fertilizers for healthy home plants, pots, flowers, and kitchen gardens.",
  phone: "+91 7568380270",
  whatsappNumber: "917568380270",
  email: "contact@mittishakti.in",
  domain: "mittishakti.in",
} as const;

export const WHATSAPP_LINKS = {
  general: `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20your%20organic%20products`,
  order: (productName: string, variant: string) => 
    `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(productName)}%20(${encodeURIComponent(variant)})`,
} as const;

export const TRUST_BADGES = [
  {
    icon: "Leaf",
    title: "100% Organic",
    description: "Pure organic ingredients, no synthetic additives",
  },
  {
    icon: "ShieldCheck",
    title: "Chemical-Free",
    description: "Safe for your family, pets, and environment",
  },
  {
    icon: "Home",
    title: "Indoor Safe",
    description: "Perfect for home & indoor plants",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
