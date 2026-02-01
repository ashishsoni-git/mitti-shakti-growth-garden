import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { SITE_CONFIG } from "@/lib/constants";

const Index = () => {
  return (
    <Layout>
      <SEO
        title={undefined}
        description={SITE_CONFIG.description}
      />
      <HeroSection />
      <FeaturedProducts />
      <BeforeAfterSection />
      
      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Ready to Transform Your Garden?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Join thousands of happy gardeners who trust Mitti Shakti for their organic plant care needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/917568380270?text=Hi,%20I%20am%20interested%20in%20your%20organic%20products`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 py-3 font-medium text-white transition-colors hover:bg-[#20bd5a]"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
