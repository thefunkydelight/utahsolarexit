import type { Metadata } from "next";
import { BUSINESS, FAQS } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: `FAQ | ${BUSINESS.name}`,
  description: "Answers to the most common questions about solar contract cancellation in Utah.",
};

const CATEGORIES = Array.from(new Set(FAQS.map((f) => f.category)));

export default function FaqPage() {
  return (
    <>
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-[#858481]">
            Get answers to the most common questions about solar contract cancellation.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          {CATEGORIES.map((cat) => (
            <div key={cat}>
              <h2
                className="text-lg font-bold text-[#FFD700] mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {cat}
              </h2>
              <Accordion multiple={false} className="space-y-2">
                {FAQS.filter((f) => f.category === cat).map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat}-${i}`}
                    className="bg-[#1A1A19] border border-[#34322D] rounded-xl px-5 data-[state=open]:border-[#FFD700]/30"
                  >
                    <AccordionTrigger className="text-sm font-semibold text-[#F8F8F7] hover:text-[#FFD700] hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[#858481] pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
