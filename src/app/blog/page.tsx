import { getBlogPosts } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = getBlogPosts()

  if (posts.length === 0) {
    return <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <BookOpen className="h-10 w-10 text-amber-600 dark:text-amber-500 mb-4" />
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2">No blog posts yet</h2>
      <p className="text-slate-600 dark:text-slate-300">Check back soon for new content and updates!</p>
    </div>
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm py-16 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-500" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">The Half Baked Blog</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Thoughts, insights, and stories from our journey through code, creativity, and collaboration.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-xl text-slate-900 dark:text-white">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
