import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/shared/ContactForm";
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact | ${BUSINESS.name}`,
  description: `Contact ${BUSINESS.name} for a free solar contract consultation. Call ${BUSINESS.phone} or fill out our form.`,
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Contact Us
          </h1>
          <p className="text-[#858481] max-w-xl mx-auto">
            Ready to explore your options? Reach out for a free, no-obligation consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-[#1A1A19] border border-[#34322D] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#F8F8F7] mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Get in Touch
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#858481] mb-0.5">Call Us</p>
                    <a href={BUSINESS.phoneHref} className="text-[#F8F8F7] font-semibold hover:text-[#FFD700] transition-colors text-lg">
                      {BUSINESS.phone}
                    </a>
                    <p className="text-xs text-[#858481] mt-0.5">{BUSINESS.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#858481] mb-0.5">Office</p>
                    <p className="text-[#F8F8F7] font-semibold">{BUSINESS.city}, {BUSINESS.state}</p>
                    <p className="text-xs text-[#858481] mt-0.5">Serving homeowners in all 50 states</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#858481] mb-0.5">Hours</p>
                    <p className="text-[#F8F8F7] font-semibold">{BUSINESS.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A19] border border-[#34322D] rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F8F8F7] mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                What to Expect
              </h3>
              <ol className="space-y-3">
                {[
                  { step: "1", text: "We learn about your situation and contract type" },
                  { step: "2", text: "Our team reviews your agreement for exit paths" },
                  { step: "3", text: "We present your options with transparent pricing" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3 text-sm text-[#858481]">
                    <span className="h-5 w-5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
