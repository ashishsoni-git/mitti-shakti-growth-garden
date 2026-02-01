import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, WHATSAPP_LINKS, TRUST_BADGES } from "@/lib/constants";

const iconMap = {
  Leaf,
  ShieldCheck,
  Home,
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-muted/30 py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-in font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Organic Vermicompost &{" "}
            <span className="text-primary">Natural Fertilizers</span> for Home Plants
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-in text-lg text-muted-foreground [animation-delay:200ms] md:text-xl">
            {SITE_CONFIG.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 animate-fade-in [animation-delay:400ms] sm:flex-row">
            <Link to="/products">
              <Button size="lg" className="gap-2 text-base">
                View Products
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={WHATSAPP_LINKS.general} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid gap-6 animate-fade-in [animation-delay:600ms] sm:grid-cols-3">
          {TRUST_BADGES.map((badge) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap];
            return (
              <div
                key={badge.title}
                className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {badge.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
