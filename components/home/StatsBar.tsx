import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section id="trust-bar" className="bg-[#1A1A19] border-y border-[#34322D] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-[#858481] uppercase tracking-widest mb-6">
          Trusted by Thousands of Homeowners Nationwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-3xl font-bold text-[#FFD700]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-[#858481] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
