import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Leaf, Users, Globe, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Organic",
      description:
        "We use only natural, organic ingredients in all our products. No chemicals, no synthetics.",
    },
    {
      icon: Users,
      title: "Supporting Farmers",
      description:
        "We work directly with local farmers to source the best organic materials.",
    },
    {
      icon: Globe,
      title: "Sustainable Practices",
      description:
        "Our production methods minimize environmental impact and promote soil health.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Every batch is tested to ensure consistent quality and effectiveness.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about Mitti Shakti - our story, mission, and commitment to organic gardening and sustainable farming practices in India."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Mitti Shakti was born from a simple belief: healthy soil creates healthy plants, and healthy plants create a healthy world.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                alt="Organic farming"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                From Soil to Soul
              </h2>
              <p className="text-muted-foreground">
                We started Mitti Shakti with a passion for organic gardening and a concern for the increasing use of chemical fertilizers in Indian homes. We witnessed how synthetic products were harming our soil, our plants, and ultimately our health.
              </p>
              <p className="text-muted-foreground">
                Our journey began in a small backyard, experimenting with vermicomposting and natural fertilizers. What started as a hobby quickly became a mission – to provide every Indian household with access to pure, organic plant nutrition.
              </p>
              <p className="text-muted-foreground">
                Today, Mitti Shakti serves thousands of happy gardeners across India, from apartment balcony gardens to large kitchen gardens. Our products are crafted with love, tested rigorously, and delivered with a promise of purity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Our Values
            </h2>
            <p className="mt-3 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl bg-card p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              To make organic gardening accessible to every Indian household. We believe that everyone deserves to grow healthy, chemical-free plants – whether on a balcony, terrace, or backyard.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              By choosing Mitti Shakti, you're not just buying fertilizer – you're investing in healthier soil, healthier plants, and a healthier planet.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
