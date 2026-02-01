import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProduct } from "@/hooks/useProducts";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading, error } = useProduct(slug || "");
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="font-display text-2xl font-bold">Product Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/products">
            <Button className="mt-4">Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const images = product.product_images?.length
    ? product.product_images.sort((a, b) => a.display_order - b.display_order)
    : [{ id: "default", image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop", display_order: 0 }];

  const currentVariant = selectedVariant
    ? product.product_variants?.find((v) => v.id === selectedVariant)
    : product.product_variants?.[0];

  const whatsappLink = WHATSAPP_LINKS.order(
    product.name,
    currentVariant?.weight || ""
  );

  return (
    <Layout>
      <SEO
        title={product.name}
        description={product.description || `Buy ${product.name} - organic vermicompost and natural fertilizers from Mitti Shakti`}
        type="product"
      />

      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <Link
          to="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-muted">
              <img
                src={images[selectedImage].image_url}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors",
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-border"
                    )}
                  >
                    <img
                      src={img.image_url}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              {product.featured && (
                <Badge className="mb-2 bg-accent text-accent-foreground">
                  Featured Product
                </Badge>
              )}
              <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Price */}
            {currentVariant && (
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">
                  ₹{currentVariant.price}
                </span>
                {currentVariant.compare_at_price && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{currentVariant.compare_at_price}
                  </span>
                )}
              </div>
            )}

            {/* Variants */}
            {product.product_variants && product.product_variants.length > 0 && (
              <div>
                <h3 className="mb-3 font-medium text-foreground">Select Size:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.product_variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      disabled={!variant.in_stock}
                      className={cn(
                        "rounded-lg border-2 px-4 py-2 font-medium transition-colors",
                        (selectedVariant === variant.id ||
                          (!selectedVariant && variant.id === product.product_variants?.[0]?.id))
                          ? "border-primary bg-primary text-primary-foreground"
                          : variant.in_stock
                          ? "border-border hover:border-primary"
                          : "cursor-not-allowed border-border bg-muted text-muted-foreground opacity-50"
                      )}
                    >
                      {variant.weight}
                      {!variant.in_stock && " (Out of Stock)"}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {product.description && (
              <div>
                <h3 className="mb-2 font-medium text-foreground">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div>
                <h3 className="mb-3 font-medium text-foreground">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage Instructions */}
            {product.usage_instructions && (
              <div className="rounded-lg bg-muted p-4">
                <h3 className="mb-2 font-medium text-foreground">How to Use</h3>
                <p className="text-sm text-muted-foreground">
                  {product.usage_instructions}
                </p>
              </div>
            )}

            {/* Order Button */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full gap-2 bg-[#25D366] text-lg hover:bg-[#20bd5a]"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
