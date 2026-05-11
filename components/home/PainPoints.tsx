import { PAIN_POINTS } from "@/lib/constants";
import { AlertCircle } from "lucide-react";

export function PainPoints() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Does This Sound Familiar?
          </h2>
          <p className="text-[#858481] max-w-2xl mx-auto">
            Thousands of Utah homeowners are stuck in the same situation. If any of these apply to you, we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.title}
              className="bg-[#1A1A19] border border-[#34322D] rounded-xl p-5 hover:border-[#FFD700]/30 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="h-5 w-5 text-[#FFD700] shrink-0 mt-0.5" />
                <h3 className="text-sm font-semibold text-[#F8F8F7]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {point.title}
                </h3>
              </div>
              <ul className="space-y-1.5 pl-5">
                {point.items.map((item) => (
                  <li key={item} className="text-xs text-[#858481] flex items-start gap-1.5">
                    <span className="text-[#FFD700] mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
