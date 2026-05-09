import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/shared/ContactForm";
import { Users, Shield, DollarSign, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: `About | ${BUSINESS.name}`,
  description: `Learn about ${BUSINESS.name} and our mission to help Utah homeowners escape unfair solar contracts.`,
};

const PILLARS = [
  {
    icon: <Users className="h-6 w-6 text-[#FFD700]" />,
    title: "Professional Connections",
    desc: "We connect you with qualified professionals who specialize in solar contract issues, ensuring you get expert help.",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#FFD700]" />,
    title: "Consumer Advocacy",
    desc: "We advocate for your rights as a homeowner, guiding you through the process and connecting you with resources to hold solar companies accountable.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-[#FFD700]" />,
    title: "Payment Relief",
    desc: "Stop overpaying for solar energy. We work to reduce or eliminate your financial burden from unfair contracts.",
  },
  {
    icon: <Heart className="h-6 w-6 text-[#FFD700]" />,
    title: "Dedicated Client Care",
    desc: "You are not just a case number. We provide personalized support throughout your entire journey to contract freedom.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            About <span className="text-[#FFD700]">{BUSINESS.name}</span>
          </h1>
          <p className="text-lg text-[#858481] max-w-2xl mx-auto">
            We believe no homeowner should be trapped in an unfair solar contract. Our mission is to connect Utah homeowners with trusted professionals who can help them find a legitimate path to freedom.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A19] border-y border-[#34322D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-[#0A0A0A] border border-[#34322D] rounded-xl p-6 hover:border-[#FFD700]/30 transition-colors">
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-base font-bold text-[#F8F8F7] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-[#858481]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1A1A19] border border-[#34322D] rounded-2xl p-8 sm:p-12">
            <h2
              className="text-2xl font-bold text-[#F8F8F7] mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-[#858481]">
              <p>
                Solar Exit Utah was born out of a simple observation: thousands of Utah homeowners were being sold solar systems with promises that never materialized — and then told there was no way out.
              </p>
              <p>
                We know that&apos;s not true. Many solar contracts contain vulnerabilities, consumer protection violations, and negotiation paths that the solar companies don&apos;t want you to know about. Our job is to find them.
              </p>
              <p>
                We&apos;re not a law firm. We&apos;re advocates — a team that reviews your contract, identifies your strongest exit options, and connects you with the qualified professionals who can act on them. Based in Salt Lake City, we serve homeowners across Utah and all 50 states.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-[#F8F8F7] mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Ready to Find Out Your Options?
            </h2>
            <p className="text-[#858481]">Your free consultation starts here. No commitment required.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
