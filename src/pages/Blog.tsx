import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const Blog = () => {
  const { data: posts, isLoading } = useBlogPosts();

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Gardening tips, plant care guides, and organic farming insights from Mitti Shakti. Learn how to grow healthy plants naturally."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-muted/30 py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Gardening Tips & Guides
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Expert advice on organic gardening, plant care, and sustainable practices for your home garden.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-video w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={
                          post.cover_image ||
                          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                        }
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-2 text-sm text-muted-foreground">
                        {post.published_at &&
                          format(new Date(post.published_at), "MMMM d, yyyy")}
                      </div>
                      <h2 className="font-display text-xl font-semibold text-foreground line-clamp-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mt-2 text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-muted p-12 text-center">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Blog Posts Coming Soon!
              </h2>
              <p className="mt-2 text-muted-foreground">
                We're preparing helpful gardening tips and guides. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
