import fs from "fs";
import path from "path";

export type PostMeta = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export type Post = PostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parseFile(filename: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const match = raw.match(/<script type="application\/json" id="post-meta">([\s\S]*?)<\/script>/);
  if (!match) throw new Error(`Missing post-meta in ${filename}`);
  const meta: PostMeta = JSON.parse(match[1]);
  const content = raw.replace(/<script type="application\/json" id="post-meta">[\s\S]*?<\/script>/, "").trim();
  return { ...meta, content };
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".html"))
    .map((f) => {
      const { content: _, ...meta } = parseFile(f);
      return meta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.html`);
  if (!fs.existsSync(file)) return null;
  return parseFile(`${slug}.html`);
}
