export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  readTime: string
}

export function getBlogPosts(): BlogPost[] {
  // For now, we'll return static blog posts
  // In the future, you can read from actual markdown files
  return [
    {
      slug: "the-art-of-half-baked-ideas",
      title: "The Art of Half-Baked Ideas",
      excerpt: "Why starting with imperfect concepts often leads to the most innovative solutions.",
      date: "2024-12-15",
      author: "Partner A",
      readTime: "5 min read",
    },
    {
      slug: "building-together",
      title: "Building Together: Our Collaboration Process",
      excerpt: "How we've learned to merge different coding styles and creative approaches.",
      date: "2024-12-10",
      author: "Partner B",
      readTime: "7 min read",
    },
    {
      slug: "from-prototype-to-production",
      title: "From Prototype to Production",
      excerpt: "Lessons learned from taking our side projects to the next level.",
      date: "2024-12-05",
      author: "Both",
      readTime: "6 min read",
    },
    {
      slug: "the-tools-we-love",
      title: "The Tools We Love",
      excerpt: "A curated list of our favorite development tools and creative resources.",
      date: "2024-11-28",
      author: "Partner A",
      readTime: "4 min read",
    },
  ]
}
