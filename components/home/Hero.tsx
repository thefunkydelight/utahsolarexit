import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { BUSINESS, TICKER_ITEMS } from "@/lib/constants";
import { Ticker } from "@/components/shared/Ticker";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A]">
      {/* Background gradients — clipped independently so they don't affect content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a00]/20 via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.06)_0%,_transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center pt-8 sm:pt-20 pb-8 sm:pb-10">
        <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full px-3 py-1.5 mb-5 max-w-full">
          <span className="h-2 w-2 rounded-full bg-[#FFD700] animate-pulse shrink-0" />
          <span className="text-xs text-[#FFD700] font-medium">Free Consultations Available Now</span>
        </div>

        <h1
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F8F8F7] leading-snug mb-4 sm:mb-6 break-words"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Expert Guidance Out of{" "}
          <span className="text-[#FFD700]">Unfair Solar Agreements</span>
        </h1>

        <p className="text-sm sm:text-base text-[#858481] mx-auto mb-6 sm:mb-8">
          We connect Utah homeowners with trusted professionals to exit solar leases, PPAs, and contracts.
          Free consultation — no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8 sm:mb-12">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-bold text-base px-6 py-3.5 rounded-xl transition-colors"
          >
            <Phone className="h-5 w-5 shrink-0" />
            Call {BUSINESS.phone}
          </a>
          <Link
            href="#contact-form"
            className="flex items-center justify-center gap-2 border border-[#34322D] hover:border-[#FFD700]/50 text-[#F8F8F7] hover:text-[#FFD700] font-semibold text-base px-6 py-3.5 rounded-xl transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>

        <Ticker items={TICKER_ITEMS} />
      </div>

      <a
        href="#trust-bar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#858481] hover:text-[#FFD700] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
