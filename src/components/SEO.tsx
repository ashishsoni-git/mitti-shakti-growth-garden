import { useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article" | "product";
  url?: string;
}

export function SEO({
  title,
  description = SITE_CONFIG.description,
  image = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=630&fit=crop",
  type = "website",
  url,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;

  useEffect(() => {
    document.title = fullTitle;

    // Update meta tags
    const metaTags = {
      description: description,
      "og:title": fullTitle,
      "og:description": description,
      "og:image": image,
      "og:type": type,
      "og:url": url || window.location.href,
      "twitter:title": fullTitle,
      "twitter:description": description,
      "twitter:image": image,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      const isOg = name.startsWith("og:");
      const isTwitter = name.startsWith("twitter:");
      
      let meta: HTMLMetaElement | null;
      if (isOg) {
        meta = document.querySelector(`meta[property="${name}"]`);
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("property", name);
          document.head.appendChild(meta);
        }
      } else if (isTwitter) {
        meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("name", name);
          document.head.appendChild(meta);
        }
      } else {
        meta = document.querySelector(`meta[name="${name}"]`);
      }
      
      if (meta) {
        meta.setAttribute("content", content);
      }
    });
  }, [fullTitle, description, image, type, url]);

  return null;
}
