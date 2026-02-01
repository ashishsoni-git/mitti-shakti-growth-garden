import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, WHATSAPP_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary">
                <span className="font-display text-lg font-bold">M</span>
              </div>
              <span className="font-display text-xl font-bold">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Nurturing your garden with 100% organic vermicompost and natural fertilizers. Safe for home plants, pets, and the environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Trust */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Our Promise</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>✓ 100% Organic Products</li>
              <li>✓ Chemical-Free & Safe</li>
              <li>✓ Quality Guaranteed</li>
              <li>✓ Pan India Delivery</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
