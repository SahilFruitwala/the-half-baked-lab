import { Button } from "@/components/ui/button"
import { Github, Mail, Code, Lightbulb, BookOpen, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm py-16 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-slate-200 dark:border-slate-600">
            <Users className="h-4 w-4" />
            <span>About us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About The Half Baked Lab
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Two creative minds, countless half-baked ideas, and the determination to bring them to life.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-slate dark:prose-invert mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-slate-900 dark:text-white">Our Story</h2>
          <p className="text-slate-700 dark:text-slate-300">
            The Half Baked Lab was born from a simple realization: some of the best ideas start out imperfect. In 2022,
            we—two developers with complementary skills and a shared love for experimentation—decided to create a space
            where we could collaborate on projects without the pressure of perfection.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            What began as casual weekend coding sessions quickly evolved into something more structured. We found that
            by embracing the "half-baked" nature of our early concepts, we were free to explore, fail, learn, and
            occasionally stumble upon something truly special.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            Today, The Half Baked Lab serves as both our creative playground and our professional portfolio. It's where
            we document our journey, share our successes (and failures), and connect with like-minded creators who
            understand that innovation rarely arrives fully formed.
          </p>

          <h2 className="text-slate-900 dark:text-white">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-2">
                  <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Start Imperfect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  We believe in starting before you're ready and refining as you go.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-2">
                  <Code className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Build in Public</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Sharing our process invites collaboration and keeps us accountable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-2">
                  <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Learn Always</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Every project is an opportunity to expand our skills and knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">The Lab Partners</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 shadow-lg"></div>
                <CardTitle className="text-slate-900 dark:text-white">Partner A</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Full-Stack Developer & Designer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Passionate about creating beautiful, functional experiences. Loves React, design systems, and coffee.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full mx-auto mb-4 shadow-lg"></div>
                <CardTitle className="text-slate-900 dark:text-white">Partner B</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Backend Engineer & Data Enthusiast
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Enjoys solving complex problems and building scalable systems. Specializes in Python, APIs, and
                  machine learning.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Want to collaborate?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              We're always open to new ideas, collaborations, and conversations.
            </p>
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
