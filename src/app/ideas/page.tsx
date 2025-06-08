import { Button } from "@/components/ui/button"
import { Lightbulb, Plus, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function IdeasPage() {
  const ideas = [
    {
      title: "A social network for plant parents",
      description: "Connect plant enthusiasts to share care tips, trade cuttings, and show off their green friends.",
      tags: ["Social", "Mobile App", "Community"],
      status: "Exploring",
    },
    {
      title: "Code that writes poetry about itself",
      description:
        "An AI experiment that analyzes its own code structure and generates poetic descriptions of what it does.",
      tags: ["AI", "Creative", "Experiment"],
      status: "Half Baked",
    },
    {
      title: "A dating app for programming languages",
      description: "Match languages based on compatibility, strengths, and what they could build together.",
      tags: ["Humor", "Educational", "Web"],
      status: "Just an Idea",
    },
    {
      title: "Weather-based music recommendations",
      description: "An app that suggests playlists and songs that match the current weather and time of day.",
      tags: ["Music", "API", "Mobile"],
      status: "In Progress",
    },
    {
      title: "AI that generates color palettes from emotions",
      description: "Describe how you feel, and get a harmonious color palette that represents that emotion.",
      tags: ["Design", "AI", "Tool"],
      status: "Exploring",
    },
    {
      title: "A time capsule for code commits",
      description: "Store messages, thoughts, or jokes in your commits that are only revealed years later.",
      tags: ["Developer Tools", "Fun", "Git"],
      status: "Just an Idea",
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm py-16 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-amber-200 dark:border-amber-700">
            <Lightbulb className="h-4 w-4" />
            <span>Where creativity begins</span>
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">The Idea Incubator</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Not every idea makes it to production, but every idea has value. Here's where we share our thoughts,
            experiments, and "what-ifs."
          </p>
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={
                      idea.status === "In Progress"
                        ? "default"
                        : idea.status === "Half Baked"
                          ? "secondary"
                          : idea.status === "Exploring"
                            ? "outline"
                            : "destructive"
                    }
                    className="shadow-sm"
                  >
                    {idea.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/20"
                    title="Add to your favorites"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="text-xs">Save</span>
                  </Button>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">{idea.title}</CardTitle>
                <CardDescription className="text-base text-slate-600 dark:text-slate-300">
                  {idea.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, tagIndex) => (
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

          {/* Add New Idea Card */}
          <Card className="border-dashed border-2 border-slate-300 dark:border-slate-600 bg-transparent shadow-none hover:border-amber-500 dark:hover:border-amber-400 transition-all duration-300 flex items-center justify-center h-64 hover:shadow-lg hover:bg-amber-50/50 dark:hover:bg-amber-950/20">
            <CardContent className="text-center p-6">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-amber-600 dark:text-amber-500" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Got a half-baked idea?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Share your wild, incomplete, or experimental concepts with us.
              </p>
              <Button className="shadow-lg hover:shadow-xl transition-all">
                <Plus className="h-4 w-4 mr-2" />
                Submit an Idea
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
