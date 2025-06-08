import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Calendar,
  User,
  Mail,
  Coffee,
  Lightbulb,
  Code,
  BookOpen,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 dark:bg-amber-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-amber-200 dark:border-amber-700">
              <Lightbulb className="h-4 w-4" />
              <span>Where ideas come to life</span>
              <Sparkles className="h-4 w-4 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <Image
              src="/logo.png"
              alt="Logo"
              width={250}
              height={250}
              // className="text-amber-600 dark:text-amber-500 transition-transform group-hover:rotate-12"
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              The Half Baked
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
                {" "}
                Lab
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A creative space where two minds collaborate to build, write, and
            experiment with ideas that are perfectly imperfect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                Featured Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Latest Experiments
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From half-baked ideas to fully-formed solutions, here are some of
              our collaborative projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Recipe Generator",
                description:
                  "A machine learning app that creates unique recipes from available ingredients.",
                tags: ["React", "Python", "OpenAI"],
                status: "In Progress",
                gradient: "from-green-400 to-blue-500",
              },
              {
                title: "Minimal Task Manager",
                description:
                  "A beautifully simple task management app focused on clarity and ease of use.",
                tags: ["Next.js", "TypeScript", "Tailwind"],
                status: "Completed",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                title: "Weather Poetry Bot",
                description:
                  "A creative bot that generates haikus based on current weather conditions.",
                tags: ["Node.js", "API", "Creative"],
                status: "Half Baked",
                gradient: "from-yellow-400 to-orange-500",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 overflow-hidden"
              >
                <div
                  className={`aspect-video bg-linear-to-br ${project.gradient} opacity-80 dark:opacity-60`}
                ></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : project.status === "In Progress"
                          ? "secondary"
                          : "outline"
                      }
                      className="shadow-sm"
                    >
                      {project.status}
                    </Badge>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all border-slate-200 dark:border-slate-600"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                Blog
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Recent Articles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our journey through code, creativity, and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Art of Half-Baked Ideas",
                excerpt:
                  "Why starting with imperfect concepts often leads to the most innovative solutions.",
                date: "Dec 15, 2024",
                author: "Partner A",
                readTime: "5 min read",
                slug: "the-art-of-half-baked-ideas",
              },
              {
                title: "Building Together: Our Collaboration Process",
                excerpt:
                  "How we've learned to merge different coding styles and creative approaches.",
                date: "Dec 10, 2024",
                author: "Partner B",
                readTime: "7 min read",
                slug: "building-together",
              },
            ].map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index}>
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

          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all border-slate-200 dark:border-slate-600"
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ideas Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Lightbulb className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              Ideas
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            The Idea Incubator
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Not every idea makes it to production, but every idea has value.
            Here's a preview of our half-baked concepts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "A social network for plant parents",
              "Code that writes poetry about itself",
              "A dating app for programming languages",
              "Weather-based music recommendations",
            ].map((idea, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:shadow-lg"
              >
                <div className="w-2 h-2 bg-amber-400 dark:bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-slate-700 dark:text-slate-300">
                  {idea}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/ideas">
              <Button
                size="lg"
                variant="outline"
                className="shadow-lg hover:shadow-xl transition-all border-slate-200 dark:border-slate-600"
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                Explore All Ideas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Coffee className="h-6 w-6 text-amber-400 dark:text-amber-500" />
              <span className="text-xl font-bold">The Half Baked Lab</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 dark:border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} The Half Baked Lab. Made with ❤️
              and lots of coffee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
