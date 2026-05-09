import Link from "next/link";
import { FAQS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export function FaqPreview() {
  const preview = FAQS.slice(0, 4);

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#858481]">
            Get answers to the most common questions about solar contract cancellation.
          </p>
        </div>

        <Accordion multiple={false} className="space-y-2">
          {preview.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
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

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm text-[#FFD700] hover:gap-3 transition-all"
          >
            View all FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
