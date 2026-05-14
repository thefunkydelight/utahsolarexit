import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { BUSINESS } from "@/lib/constants";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Calendar, Clock, ChevronRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${BUSINESS.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: "https://utahsolarexit.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://utahsolarexit.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[#858481] mb-8">
            <Link href="/" className="hover:text-[#F8F8F7] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-[#F8F8F7] transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#F8F8F7] truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="inline-block bg-[#FFD700]/10 text-[#FFD700] text-xs font-medium px-2.5 py-1 rounded-full border border-[#FFD700]/20 mb-4">
              {post.category}
            </span>
            <h1
              className="text-3xl sm:text-4xl font-bold text-[#F8F8F7] mb-4 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-[#858481]">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="border-t border-[#34322D] mb-10" />

          {/* Article body */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <CtaBanner />
      </div>
    </>
  );
}
