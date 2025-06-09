import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  content?: string;
};

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getBlogPosts(): BlogPost[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return getFallbackPosts();
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          author: data.author,
          readTime: data.readTime,
        };
      });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return getFallbackPosts();
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      readTime: data.readTime,
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

function getFallbackPosts(): BlogPost[] {
  return [
    {
      slug: "the-art-of-half-baked-ideas",
      title: "The Art of Half-Baked Ideas",
      excerpt:
        "Why starting with imperfect concepts often leads to the most innovative solutions.",
      date: "2024-12-15",
      author: "Partner A",
      readTime: "5 min read",
    },
    {
      slug: "building-together",
      title: "Building Together: Our Collaboration Process",
      excerpt:
        "How we've learned to merge different coding styles and creative approaches.",
      date: "2024-12-10",
      author: "Partner B",
      readTime: "7 min read",
    },
    {
      slug: "from-prototype-to-production",
      title: "From Prototype to Production",
      excerpt:
        "Lessons learned from taking our side projects to the next level.",
      date: "2024-12-05",
      author: "Both",
      readTime: "6 min read",
    },
    {
      slug: "the-tools-we-love",
      title: "The Tools We Love",
      excerpt:
        "A curated list of our favorite development tools and creative resources.",
      date: "2024-11-28",
      author: "Partner A",
      readTime: "4 min read",
    },
  ];
}
