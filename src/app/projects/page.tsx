import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI Recipe Generator",
      description: "A machine learning app that creates unique recipes from available ingredients.",
      tags: ["React", "Python", "OpenAI"],
      status: "In Progress",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Minimal Task Manager",
      description: "A beautifully simple task management app focused on clarity and ease of use.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      status: "Completed",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Weather Poetry Bot",
      description: "A creative bot that generates haikus based on current weather conditions.",
      tags: ["Node.js", "API", "Creative"],
      status: "Half Baked",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Personal Finance Dashboard",
      description: "Visualize spending habits and track financial goals with customizable charts.",
      tags: ["React", "D3.js", "Firebase"],
      status: "Completed",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Collaborative Whiteboard",
      description: "Real-time collaborative drawing and brainstorming tool for remote teams.",
      tags: ["Canvas API", "WebSockets", "React"],
      status: "In Progress",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Markdown Note Taking App",
      description: "Minimalist note-taking with markdown support and cloud sync.",
      tags: ["Electron", "React", "IndexedDB"],
      status: "Completed",
      gradient: "from-indigo-400 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm py-16 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-slate-200 dark:border-slate-600">
            <Code className="h-4 w-4" />
            <span>Our work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Projects & Experiments</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A collection of our collaborative projects, from polished applications to experimental prototypes.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 overflow-hidden"
            >
              <div className={`aspect-video bg-linear-to-br ${project.gradient} opacity-80 dark:opacity-60`}></div>
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
                    <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-slate-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">{project.description}</CardDescription>
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
      </div>
    </div>
  )
}
