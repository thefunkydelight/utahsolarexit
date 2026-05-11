import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "Tell us about your contract. We review your situation and outline your options — completely free, no obligation.",
  },
  {
    number: "02",
    title: "Strategy & Action",
    desc: "We connect you with an independent law firm that leverages consumer protection laws on your behalf — with no conflict of interest.",
  },
  {
    number: "03",
    title: "Contract Freedom",
    desc: "Walk away from your unfair solar agreement with a clean slate and restored financial peace of mind.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Three Simple Steps to Freedom
          </h2>
          <p className="text-[#858481] max-w-2xl mx-auto">
            Our streamlined process makes exiting your solar contract straightforward and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-[#34322D] z-0" style={{ width: "calc(100% - 2rem)" }} />
              )}
              <div className="relative z-10">
                <div
                  className="text-5xl font-bold text-[#FFD700]/20 mb-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl font-bold text-[#F8F8F7] mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#858481]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-bold text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            <Phone className="h-5 w-5" />
            Start with a Free Call — {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
