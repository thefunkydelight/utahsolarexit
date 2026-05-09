import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { PainPoints } from "@/components/home/PainPoints";
import { Services } from "@/components/home/Services";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ContactForm } from "@/components/shared/ContactForm";
import { BUSINESS } from "@/lib/constants";
import { Phone, MapPin, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PainPoints />
      <Services />
      <ProcessSteps />
      <Testimonials />
      <FaqPreview />

      <section id="contact-form" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#F8F8F7] mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Get Your Free Consultation
              </h2>
              <p className="text-[#858481] mb-8">
                Tell us about your contract. We&apos;ll review your situation and outline your options — completely free, no obligation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#858481]">Call us directly</p>
                    <a href={BUSINESS.phoneHref} className="text-[#F8F8F7] font-semibold hover:text-[#FFD700] transition-colors">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#858481]">Office hours</p>
                    <p className="text-[#F8F8F7] font-semibold">{BUSINESS.hours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#858481]">Location</p>
                    <p className="text-[#F8F8F7] font-semibold">{BUSINESS.city}, {BUSINESS.state} — Serving all 50 states</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
