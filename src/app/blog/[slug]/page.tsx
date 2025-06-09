import { getBlogPosts, getBlogPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import { MarkdownRenderer } from "@/components/markdown-renderer";

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  // Try to get the post from MDX files first
  let post = getBlogPost(slug);

  // Fallback to static posts if MDX file doesn't exist
  if (!post) {
    const posts = getBlogPosts();
    post = posts.find((p) => p.slug === slug) || null;
  }

  if (!post) {
    notFound();
  }

  const content = post.content

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Button>
          </Link>
        </div>

        <article className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {post.excerpt}
            </p>
          </div>

          <MarkdownRenderer content={content!} />
        </article>
      </div>
    </div>
  );
}
