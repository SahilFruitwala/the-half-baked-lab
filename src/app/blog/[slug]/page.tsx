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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

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

  // Static content for posts that don't have MDX files
  const getStaticContent = (slug: string) => {
    switch (slug) {
      case "the-art-of-half-baked-ideas":
        return `
In the world of creativity and innovation, there's a common misconception that great ideas emerge fully formed, like Athena from the head of Zeus. But the reality is quite different. Most groundbreaking innovations start as what we affectionately call "half-baked ideas" – concepts that are incomplete, imperfect, and sometimes even a little absurd.

## Embracing Imperfection

The beauty of half-baked ideas lies in their malleability. When an idea isn't fully formed, it's open to interpretation, modification, and collaboration. It hasn't hardened into something rigid and unchangeable. Instead, it's a living, breathing concept that can evolve and adapt.

> "The most innovative solutions often come from the most unexpected places."

At The Half Baked Lab, we've learned to embrace these embryonic ideas rather than dismissing them for their imperfections. We've found that by giving these nascent concepts room to breathe and develop, we often end up with something far more interesting than if we had waited for the "perfect" idea to arrive.

## The Collaborative Advantage

Half-baked ideas also have another advantage: they invite collaboration. When you present a fully formed concept, others might admire it, but they're less likely to contribute to it. A half-baked idea, on the other hand, practically begs for input.

Here's how we nurture our half-baked ideas:

1. **Capture everything** - No idea is too small or too strange to write down
2. **Share early** - Don't wait until it's "ready"
3. **Welcome all feedback** - Even criticism helps shape the final product
4. **Iterate quickly** - Try, fail, learn, repeat

## From Half-Baked to Fully Realized

Some of our most successful projects started as nothing more than vague notions or quirky questions. Our Weather Poetry Bot began as a simple question: "What if the weather could write haikus?" It seemed silly at first, but as we played with the concept, it evolved into one of our most beloved creations.

Similarly, our Minimal Task Manager wasn't born from a comprehensive vision of task management revolution. It started with a frustration: "Why are task managers so complicated?" That simple question led us down a path of simplification and refinement that resulted in a tool we use every day.

## Conclusion

So the next time you have an idea that seems too unfinished or imperfect to share, remember: that's exactly the kind of idea that deserves attention. In its half-baked state, it has the potential to become something truly remarkable.

After all, even the most delicious cookies start as raw dough.
        `;

      case "building-together":
        return `
Collaboration is both an art and a science. When two creative minds come together, there's potential for both magnificent harmony and chaotic discord. At The Half Baked Lab, we've spent years refining our collaborative process, learning how to blend our distinct approaches into something greater than the sum of its parts.

## Different Minds, Different Methods

My partner and I couldn't be more different in our approaches to problem-solving. I'm methodical, planning each step before writing a single line of code. They're intuitive, diving in and letting the solution emerge organically. I favor backend systems with clear architecture; they thrive in the frontend where creativity meets functionality.

These differences could have been obstacles. Instead, they've become our greatest strength.

## Our Collaborative Framework

Over time, we've developed a framework that allows us to harness our different styles:

### 1. Diverge

We begin by working separately, approaching the problem from our unique perspectives. This creates space for individual creativity without immediate compromise.

\`\`\`javascript
// Partner A might start with a detailed plan
const projectStructure = {
  components: [...],
  dataFlow: [...],
  architecture: [...]
};

// While Partner B might begin with experimental code
function tryThisApproach() {
  // Quick prototype to test an idea
}
\`\`\`

### 2. Present

We come together to share our initial thoughts, prototypes, or sketches. The key here is to present without judgment – each approach has merit, even if it's not the final direction.

### 3. Converge

We identify the strengths in each approach and find ways to combine them. Sometimes this means adopting one person's solution wholesale; other times it's a true hybrid.

### 4. Refine Together

The final step is collaborative refinement. We pair program, sketch together, or work side by side to polish the solution until we're both satisfied.

## Tools That Support Our Process

Effective collaboration requires the right tools. Here's what works for us:

- **Shared Notion workspace** for documentation and planning
- **GitHub** with detailed PR templates and review processes
- **Figma** for collaborative design work
- **Discord** for quick communication and screen sharing
- **Regular coffee shop sessions** for face-to-face ideation

## Conclusion

Collaboration isn't about erasing differences; it's about harnessing them. By creating a process that respects and integrates our distinct approaches, we've built not just better products, but a stronger partnership.

The half-baked ideas that emerge from our collaborative process may start incomplete, but they benefit from two different perspectives from the very beginning. And that makes all the difference.
        `;

      case "from-prototype-to-production":
        return `
The journey from a working prototype to a production-ready application is often more challenging than building the initial concept. At The Half Baked Lab, we've learned this lesson repeatedly as we've taken our experimental projects and transformed them into tools that others can actually use.

## The Prototype Trap

It's easy to fall in love with your prototype. It works, it demonstrates the core concept, and it feels like you're 90% done. But that last 10% often represents 90% of the remaining work. We've learned to recognize the signs that a prototype is ready for the production treatment:

- **People are actually using it** (even if it's just us)
- **The core functionality is solid** and addresses a real need
- **We find ourselves coming back to it** weeks or months later
- **Others express genuine interest** in using it themselves

## The Production Checklist

When we decide to take a project from prototype to production, we follow a systematic approach:

### Technical Foundation
- **Error handling** - What happens when things go wrong?
- **Performance optimization** - Can it handle real-world usage?
- **Security considerations** - Is user data protected?
- **Testing coverage** - Are the critical paths tested?

### User Experience
- **Onboarding flow** - Can new users figure it out?
- **Documentation** - Is it clear how to use the features?
- **Responsive design** - Does it work on all devices?
- **Accessibility** - Can everyone use it?

### Operational Concerns
- **Deployment pipeline** - Can we ship updates easily?
- **Monitoring and logging** - Will we know if something breaks?
- **Backup and recovery** - What if data is lost?
- **Scaling considerations** - What if it becomes popular?

## Case Study: Weather Poetry Bot

Our Weather Poetry Bot started as a weekend experiment. The initial version was a simple script that fetched weather data and generated haikus using a basic template system. It was charming but limited.

The production version required:
- A proper web interface for users to interact with
- Multiple poetry styles beyond just haikus
- Location-based weather fetching
- A database to store and share favorite poems
- Rate limiting to prevent API abuse
- Mobile-responsive design

What started as 100 lines of Python became a full-stack application with authentication, a REST API, and a React frontend.

## Conclusion

The path from prototype to production is rarely straightforward, but it's where the real learning happens. Each project teaches us something new about building software that others can rely on.

The key is to embrace both sides of the spectrum – the wild creativity of prototyping and the disciplined craft of production development. Both have their place in the lab.
        `;

      case "the-tools-we-love":
        return `
After years of experimenting with different tools and workflows, we've settled on a core set of applications and services that power our creative process. Here's our current toolkit and why we love each piece.

## Development Environment

### Code Editors
- **VS Code** - Our primary editor with a carefully curated set of extensions
- **Cursor** - For AI-assisted coding when we need a creative boost
- **Vim** - Still the fastest way to edit config files and quick scripts

### Terminal & Shell
- **iTerm2** with **Oh My Zsh** - Beautiful, customizable, and powerful
- **tmux** - Essential for managing multiple sessions and pair programming
- **fzf** - Fuzzy finding everything from files to command history

## Design & Creativity

### Visual Design
- **Figma** - Our go-to for UI design and collaborative mockups
- **Excalidraw** - Perfect for quick sketches and system diagrams
- **Canva** - When we need something polished quickly

### Color & Typography
- **Coolors.co** - Generating and exploring color palettes
- **Google Fonts** - Reliable typography that works everywhere
- **Contrast** - Ensuring our designs are accessible

## Development Stack

### Frontend
- **Next.js** - Our framework of choice for React applications
- **Tailwind CSS** - Utility-first styling that speeds up development
- **Framer Motion** - When we need smooth animations and interactions

### Backend & Database
- **Supabase** - Postgres database with real-time features and auth
- **Vercel** - Deployment and hosting that just works
- **Upstash** - Redis for caching and rate limiting

### APIs & Services
- **OpenAI API** - For adding AI capabilities to our projects
- **Resend** - Reliable email delivery for transactional emails
- **Stripe** - Payment processing when we need to monetize

## Productivity & Collaboration

### Project Management
- **Notion** - Our second brain for documentation and planning
- **Linear** - Issue tracking that doesn't get in the way
- **GitHub Projects** - For managing code-related tasks

### Communication
- **Discord** - Quick voice calls and screen sharing
- **Loom** - Async video communication for complex topics
- **Slack** - When we need threaded conversations

## Creative Inspiration

### Learning & Research
- **YouTube** - Endless tutorials and conference talks
- **Dev.to** - Community-driven technical content
- **Dribbble** - Visual inspiration for UI design

### Experimentation
- **CodePen** - Quick prototypes and CSS experiments
- **Observable** - Data visualization and interactive notebooks
- **Replit** - When we need to test something in a different language

## Hardware & Setup

### Computers
- **MacBook Pro M2** - Primary development machine
- **iPad Pro** - For sketching and reading documentation
- **Mechanical keyboard** - Because typing should feel good

### Accessories
- **Dual monitors** - More screen real estate for complex projects
- **Good headphones** - Essential for focus and video calls
- **Standing desk** - Health and energy during long coding sessions

## The Philosophy Behind Our Choices

We prioritize tools that:
- **Reduce friction** between idea and implementation
- **Enable collaboration** without forcing it
- **Scale with our needs** from prototype to production
- **Have strong communities** and good documentation
- **Integrate well** with our existing workflow

## What We're Exploring

Our toolkit is always evolving. Currently, we're experimenting with:
- **Bun** - Faster JavaScript runtime and package manager
- **Astro** - For content-heavy sites that need to be fast
- **Tauri** - Building desktop apps with web technologies
- **Deno** - Alternative JavaScript runtime with better defaults

## Conclusion

The best tools are the ones you don't have to think about. They fade into the background and let you focus on creating. While it's tempting to constantly chase the newest, shiniest tools, we've found that mastering a smaller set of reliable options is more valuable than being a jack-of-all-trades with dozens of half-learned applications.

That said, we're always open to trying new things. If you have a tool that's transformed your workflow, we'd love to hear about it!
        `;

      default:
        return "This blog post content is not available yet.";
    }
  };

  const content = post.content || getStaticContent(slug);

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

          <MarkdownRenderer content={content} />
        </article>
      </div>
    </div>
  );
}
