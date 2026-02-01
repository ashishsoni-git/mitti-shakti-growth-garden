import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/hooks/useProducts";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.product_images?.[0]?.image_url || 
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop";
  
  const lowestPrice = product.product_variants?.reduce(
    (min, v) => (v.price < min ? v.price : min),
    product.product_variants?.[0]?.price || 0
  );

  const hasMultipleVariants = product.product_variants?.length > 1;

  return (
    <Link to={`/products/${product.slug}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={primaryImage}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-display text-lg font-semibold text-foreground line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {hasMultipleVariants ? "From " : ""}₹{lowestPrice}
            </span>
            {product.product_variants?.length > 0 && (
              <span className="text-sm text-muted-foreground">
                {product.product_variants.map(v => v.weight).join(" / ")}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
