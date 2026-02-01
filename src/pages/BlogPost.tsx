import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || "");

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-12">
          <Skeleton className="mb-8 h-8 w-48" />
          <Skeleton className="mb-4 aspect-video w-full max-w-4xl rounded-lg" />
          <Skeleton className="mb-4 h-12 w-3/4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="font-display text-2xl font-bold">Post Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button className="mt-4">Back to Blog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt || post.title}
        type="article"
        image={post.cover_image || undefined}
      />

      <article className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mx-auto max-w-3xl">
          {/* Cover Image */}
          {post.cover_image && (
            <div className="mb-8 aspect-video overflow-hidden rounded-xl">
              <img
                src={post.cover_image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Meta */}
          {post.published_at && (
            <div className="mb-4 text-sm text-muted-foreground">
              Published on {format(new Date(post.published_at), "MMMM d, yyyy")}
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose prose-lg mt-8 max-w-none text-muted-foreground prose-headings:font-display prose-headings:text-foreground prose-a:text-primary">
            {/* Render content as paragraphs - in real app, use a markdown parser */}
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
