import { getBlogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const posts = getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-4 hover:bg-slate-100 dark:hover:bg-slate-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Button>
          </Link>
        </div>

        <article className="prose prose-slate dark:prose-invert max-w-none bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
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
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{post.title}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">{post.excerpt}</p>
          </div>

          {/* Blog content based on slug */}
          {slug === "the-art-of-half-baked-ideas" && (
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                In the world of creativity and innovation, there's a common misconception that great ideas emerge fully
                formed, like Athena from the head of Zeus. But the reality is quite different. Most groundbreaking
                innovations start as what we affectionately call "half-baked ideas" – concepts that are incomplete,
                imperfect, and sometimes even a little absurd.
              </p>

              <h2>Embracing Imperfection</h2>
              <p>
                The beauty of half-baked ideas lies in their malleability. When an idea isn't fully formed, it's open to
                interpretation, modification, and collaboration. It hasn't hardened into something rigid and
                unchangeable. Instead, it's a living, breathing concept that can evolve and adapt.
              </p>

              <blockquote>"The most innovative solutions often come from the most unexpected places."</blockquote>

              <p>
                At The Half Baked Lab, we've learned to embrace these embryonic ideas rather than dismissing them for
                their imperfections. We've found that by giving these nascent concepts room to breathe and develop, we
                often end up with something far more interesting than if we had waited for the "perfect" idea to arrive.
              </p>

              <h2>The Collaborative Advantage</h2>
              <p>
                Half-baked ideas also have another advantage: they invite collaboration. When you present a fully formed
                concept, others might admire it, but they're less likely to contribute to it. A half-baked idea, on the
                other hand, practically begs for input.
              </p>

              <p>Here's how we nurture our half-baked ideas:</p>

              <ol>
                <li>
                  <strong>Capture everything</strong> - No idea is too small or too strange to write down
                </li>
                <li>
                  <strong>Share early</strong> - Don't wait until it's "ready"
                </li>
                <li>
                  <strong>Welcome all feedback</strong> - Even criticism helps shape the final product
                </li>
                <li>
                  <strong>Iterate quickly</strong> - Try, fail, learn, repeat
                </li>
              </ol>

              <h2>From Half-Baked to Fully Realized</h2>
              <p>
                Some of our most successful projects started as nothing more than vague notions or quirky questions. Our
                Weather Poetry Bot began as a simple question: "What if the weather could write haikus?" It seemed silly
                at first, but as we played with the concept, it evolved into one of our most beloved creations.
              </p>

              <p>
                Similarly, our Minimal Task Manager wasn't born from a comprehensive vision of task management
                revolution. It started with a frustration: "Why are task managers so complicated?" That simple question
                led us down a path of simplification and refinement that resulted in a tool we use every day.
              </p>

              <h2>Conclusion</h2>
              <p>
                So the next time you have an idea that seems too unfinished or imperfect to share, remember: that's
                exactly the kind of idea that deserves attention. In its half-baked state, it has the potential to
                become something truly remarkable.
              </p>

              <p>After all, even the most delicious cookies start as raw dough.</p>
            </div>
          )}

          {slug === "building-together" && (
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                Collaboration is both an art and a science. When two creative minds come together, there's potential for
                both magnificent harmony and chaotic discord. At The Half Baked Lab, we've spent years refining our
                collaborative process, learning how to blend our distinct approaches into something greater than the sum
                of its parts.
              </p>

              <h2>Different Minds, Different Methods</h2>
              <p>
                My partner and I couldn't be more different in our approaches to problem-solving. I'm methodical,
                planning each step before writing a single line of code. They're intuitive, diving in and letting the
                solution emerge organically. I favor backend systems with clear architecture; they thrive in the
                frontend where creativity meets functionality.
              </p>

              <p>These differences could have been obstacles. Instead, they've become our greatest strength.</p>

              <h2>Our Collaborative Framework</h2>
              <p>Over time, we've developed a framework that allows us to harness our different styles:</p>

              <h3>1. Diverge</h3>
              <p>
                We begin by working separately, approaching the problem from our unique perspectives. This creates space
                for individual creativity without immediate compromise.
              </p>

              <pre>
                <code>{`// Partner A might start with a detailed plan
const projectStructure = {
  components: [...],
  dataFlow: [...],
  architecture: [...]
};

// While Partner B might begin with experimental code
function tryThisApproach() {
  // Quick prototype to test an idea
}`}</code>
              </pre>

              <h3>2. Present</h3>
              <p>
                We come together to share our initial thoughts, prototypes, or sketches. The key here is to present
                without judgment – each approach has merit, even if it's not the final direction.
              </p>

              <h3>3. Converge</h3>
              <p>
                We identify the strengths in each approach and find ways to combine them. Sometimes this means adopting
                one person's solution wholesale; other times it's a true hybrid.
              </p>

              <h3>4. Refine Together</h3>
              <p>
                The final step is collaborative refinement. We pair program, sketch together, or work side by side to
                polish the solution until we're both satisfied.
              </p>

              <h2>Tools That Support Our Process</h2>
              <p>Effective collaboration requires the right tools. Here's what works for us:</p>

              <ul>
                <li>
                  <strong>Shared Notion workspace</strong> for documentation and planning
                </li>
                <li>
                  <strong>GitHub</strong> with detailed PR templates and review processes
                </li>
                <li>
                  <strong>Figma</strong> for collaborative design work
                </li>
                <li>
                  <strong>Discord</strong> for quick communication and screen sharing
                </li>
                <li>
                  <strong>Regular coffee shop sessions</strong> for face-to-face ideation
                </li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Collaboration isn't about erasing differences; it's about harnessing them. By creating a process that
                respects and integrates our distinct approaches, we've built not just better products, but a stronger
                partnership.
              </p>

              <p>
                The half-baked ideas that emerge from our collaborative process may start incomplete, but they benefit
                from two different perspectives from the very beginning. And that makes all the difference.
              </p>
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
