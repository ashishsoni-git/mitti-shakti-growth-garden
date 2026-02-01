import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ProductCard } from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  const { data: products, isLoading } = useProducts();

  return (
    <Layout>
      <SEO
        title="Products"
        description="Browse our range of 100% organic vermicompost, natural fertilizers, and soil enhancers for home plants, kitchen gardens, and indoor gardening."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-muted/30 py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Our Products
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            100% organic vermicompost and natural fertilizers for healthy, thriving plants. Safe for home, indoor plants, and kitchen gardens.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-muted p-12 text-center">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Products Coming Soon!
              </h2>
              <p className="mt-2 text-muted-foreground">
                We're preparing our organic products catalog. Contact us on WhatsApp for current availability.
              </p>
              <a
                href="https://wa.me/917568380270?text=Hi,%20I%20want%20to%20know%20about%20available%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-2 font-medium text-white transition-colors hover:bg-[#20bd5a]"
              >
                Check Availability
              </a>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
