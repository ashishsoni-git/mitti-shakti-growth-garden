import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ProductVariant {
  id: string;
  weight: string;
  price: number;
  compare_at_price: number | null;
  in_stock: boolean;
}

export interface ProductImage {
  id: string;
  image_url: string;
  display_order: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  benefits: string[] | null;
  usage_instructions: string | null;
  featured: boolean | null;
  created_at: string;
  product_images: ProductImage[];
  product_variants: ProductVariant[];
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          product_images (id, image_url, display_order),
          product_variants (id, weight, price, compare_at_price, in_stock)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Product[];
    },
  });
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          product_images (id, image_url, display_order),
          product_variants (id, weight, price, compare_at_price, in_stock)
        `)
        .eq("featured", true)
        .limit(4);

      if (error) throw error;
      return data as Product[];
    },
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          product_images (id, image_url, display_order),
          product_variants (id, weight, price, compare_at_price, in_stock)
        `)
        .eq("slug", slug)
        .single();

      if (error) throw error;
      return data as Product;
    },
    enabled: !!slug,
  });
}
