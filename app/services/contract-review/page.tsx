import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/shared/ContactForm";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ClipboardList, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Contract Review & Audit | ${BUSINESS.name}`,
  description: "We analyze your solar contract to identify unfair terms, hidden fees, and potential exit paths.",
};

const WHAT_WE_CHECK = [
  "Escalation clauses and rate increase schedules",
  "Early termination fee structures",
  "Misrepresentation or omission in original sales disclosures",
  "UCC filings and lien impacts on your property title",
  "Net metering terms and production guarantees",
  "Arbitration clauses and dispute resolution terms",
  "Warranty obligations and equipment responsibilities",
  "Transfer and assignment provisions",
];

export default function ContractReviewPage() {
  return (
    <>
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 mb-6 mx-auto">
            <ClipboardList className="h-7 w-7 text-[#FFD700]" />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Contract Review & Audit
          </h1>
          <p className="text-lg text-[#858481] max-w-2xl mx-auto">
            We analyze your solar contract line by line to identify unfair terms, hidden fees, and every potential exit path available to you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A19] border-y border-[#34322D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#F8F8F7] mb-8" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            What We Review
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WHAT_WE_CHECK.map((item) => (
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
              Request Your Free Contract Review
            </h2>
            <p className="text-[#858481]">No commitment. No cost. Just answers.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
