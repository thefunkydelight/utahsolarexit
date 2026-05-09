import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/shared/ContactForm";
import { CtaBanner } from "@/components/home/CtaBanner";
import { RefreshCw, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Fresh Start Solutions | ${BUSINESS.name}`,
  description: "Complete solar contract exit solutions so you can move forward with a clean slate.",
};

const OUTCOMES = [
  "Full contract termination and release",
  "Lien and UCC filing removal from your property",
  "Resolution of title complications blocking home sale",
  "Clean transfer or removal of equipment",
  "Credit protection and financial standing preservation",
  "Comprehensive documentation of contract exit",
];

export default function FreshStartPage() {
  return (
    <>
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 mb-6 mx-auto">
            <RefreshCw className="h-7 w-7 text-[#FFD700]" />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Fresh Start Solutions
          </h1>
          <p className="text-lg text-[#858481] max-w-2xl mx-auto">
            Complete contract exit solutions that give you a genuine clean slate — not just a pause, but a full and final exit from your unfair solar agreement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A19] border-y border-[#34322D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#F8F8F7] mb-8" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            What a Fresh Start Looks Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OUTCOMES.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFD700] shrink-0 mt-0.5" />
                <span className="text-sm text-[#858481]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#F8F8F7] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Start Your Clean Slate Today
            </h2>
            <p className="text-[#858481]">Free consultation — no commitment, just clarity.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
