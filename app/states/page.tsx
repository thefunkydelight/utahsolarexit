import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { STATES } from "@/lib/states";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `States We Serve | ${BUSINESS.name}`,
  description: "Solar Exit Utah helps homeowners escape unfair solar contracts in Utah and all 50 states.",
};

export default function StatesPage() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            States We Serve
          </h1>
          <p className="text-[#858481] max-w-xl mx-auto">
            Based in Salt Lake City, Utah — helping homeowners escape unfair solar contracts across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STATES.map((state) => (
            <Link
              key={state.slug}
              href={`/states/${state.slug}`}
              className="bg-[#1A1A19] border border-[#34322D] rounded-xl p-5 hover:border-[#FFD700]/40 transition-colors group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F8F8F7]">{state.name}</p>
                  <p className="text-xs text-[#858481]">{state.city}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-[#858481] group-hover:text-[#FFD700] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
