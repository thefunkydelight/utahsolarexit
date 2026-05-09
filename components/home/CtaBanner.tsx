import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="py-20 bg-[#1A1A19] border-y border-[#34322D]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#F8F8F7] mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Take the First Step Toward{" "}
          <span className="text-[#FFD700]">Contract Freedom</span>
        </h2>
        <p className="text-[#858481] mb-8 max-w-xl mx-auto">
          Book your free consultation today and let our experts review your situation. No commitment, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-bold text-lg px-8 py-4 rounded-xl transition-colors w-full sm:w-auto justify-center"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
          <div className="text-center sm:text-left">
            <p className="text-xs text-[#858481]">{BUSINESS.hours}</p>
            <p className="text-xs text-[#858481]">{BUSINESS.city}, {BUSINESS.state}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
