import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/shared/ContactForm";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Scale, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Legal Exit Strategies | ${BUSINESS.name}`,
  description: "We connect you with professionals who leverage consumer protection laws to exit your unfair solar contract.",
};

const STRATEGIES = [
  "Consumer protection law violations",
  "Truth-in-lending and disclosure violations",
  "Misrepresentation and fraud in the inducement",
  "Right of rescission opportunities",
  "Contract unconscionability arguments",
  "State-specific homeowner protection statutes",
  "FTC cooling-off rule violations",
  "Negotiated settlements and buyouts",
];

export default function LegalExitStrategiesPage() {
  return (
    <>
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 mb-6 mx-auto">
            <Scale className="h-7 w-7 text-[#FFD700]" />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Legal Exit Strategies
          </h1>
          <p className="text-lg text-[#858481] max-w-2xl mx-auto">
            We connect you with licensed professionals who leverage consumer protection laws to find legitimate exits from your solar contract.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A19] border-y border-[#34322D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#F8F8F7] mb-8" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Exit Strategies We Explore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {STRATEGIES.map((item) => (
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
              Explore Your Legal Options
            </h2>
            <p className="text-[#858481]">Free consultation — find out what strategies apply to your contract.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
