import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/shared/ContactForm";
import { CtaBanner } from "@/components/home/CtaBanner";
import { DollarSign, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Payment Relief | ${BUSINESS.name}`,
  description: "Stop overpaying for solar. We help reduce or eliminate your financial burden from unfair solar contracts.",
};

const RELIEF_OPTIONS = [
  "Suspension of monthly solar payments during dispute",
  "Reduction of escalating payment obligations",
  "Recovery of overpayments and refunds",
  "Restructuring of remaining contract financial terms",
  "Elimination of improper fees and charges",
  "Protection from collections during negotiation",
];

export default function PaymentReliefPage() {
  return (
    <>
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 mb-6 mx-auto">
            <DollarSign className="h-7 w-7 text-[#FFD700]" />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Payment Relief
          </h1>
          <p className="text-lg text-[#858481] max-w-2xl mx-auto">
            Stop overpaying for solar energy. We help reduce or eliminate your financial burden from unfair contracts — and in some cases, recover what you&apos;ve already paid.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A19] border-y border-[#34322D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#F8F8F7] mb-8" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Payment Relief Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RELIEF_OPTIONS.map((item) => (
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
              Get Payment Relief Now
            </h2>
            <p className="text-[#858481]">Tell us what you&apos;re paying — we&apos;ll tell you if we can help reduce it.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
