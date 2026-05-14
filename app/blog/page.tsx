import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BUSINESS } from "@/lib/constants";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Blog | ${BUSINESS.name}`,
  description:
    "Expert guides on solar contract cancellation, lease exits, and homeowner rights. Learn how to escape unfair solar agreements in Utah and across the country.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-20 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full px-3 py-1.5 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#FFD700] shrink-0" />
            <span className="text-xs text-[#FFD700] font-medium">Solar Contract Guides & News</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Solar Exit <span className="text-[#FFD700]">Blog</span>
          </h1>
          <p className="text-[#858481] max-w-xl mx-auto">
            Practical guides for Utah homeowners navigating solar leases, PPAs, and contract exits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#0A0A0A] border border-[#34322D] rounded-xl p-6 hover:border-[#FFD700]/30 transition-colors flex flex-col"
            >
              <div className="mb-3">
                <span className="inline-block bg-[#FFD700]/10 text-[#FFD700] text-xs font-medium px-2.5 py-1 rounded-full border border-[#FFD700]/20">
                  {post.category}
                </span>
              </div>
              <h2
                className="text-base font-bold text-[#F8F8F7] mb-2 group-hover:text-[#FFD700] transition-colors leading-snug"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {post.title}
              </h2>
              <p className="text-sm text-[#858481] leading-relaxed flex-1 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#34322D]">
                <div className="flex items-center gap-3 text-xs text-[#858481]">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs text-[#FFD700] group-hover:gap-2 transition-all">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
