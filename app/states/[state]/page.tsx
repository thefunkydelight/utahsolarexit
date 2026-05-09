import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS } from "@/lib/constants";
import { STATES, getStateBySlug } from "@/lib/states";
import { ContactForm } from "@/components/shared/ContactForm";
import { Services } from "@/components/home/Services";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Phone } from "lucide-react";

type Props = {
  params: Promise<{ state: string }>;
};

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};
  const isSameAsBusinessName = `Solar Exit ${state.name}` === BUSINESS.name;
  return {
    title: isSameAsBusinessName
      ? `${BUSINESS.name} | Escape Unfair Solar Contracts`
      : `Solar Exit ${state.name} | ${BUSINESS.name}`,
    description: state.blurb,
  };
}

export default async function StatePage({ params }: Props) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  return (
    <>
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-[#FFD700] font-medium">Serving {state.name} Homeowners</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#F8F8F7] mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Solar Exit <span className="text-[#FFD700]">{state.name}</span>
          </h1>
          <p className="text-lg text-[#858481] max-w-2xl mx-auto mb-8">
            {state.blurb}
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-bold text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone} — Free Consultation
          </a>
        </div>
      </section>

      <Services />

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-[#F8F8F7] mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Get Your Free {state.name} Consultation
            </h2>
            <p className="text-[#858481]">
              Tell us about your solar contract. We&apos;ll review your situation at no cost.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
