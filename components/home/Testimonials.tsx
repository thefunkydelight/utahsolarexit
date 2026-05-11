import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 bg-[#1A1A19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Real Results from Real Homeowners
          </h2>
          <p className="text-[#858481]">Real reviews from real homeowners who regained their freedom.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[#0A0A0A] border border-[#34322D] rounded-xl p-5"
            >
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <p className="text-sm text-[#858481] mb-4 leading-relaxed">&ldquo;{t.review}&rdquo;</p>
              <p className="text-sm font-semibold text-[#F8F8F7]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
