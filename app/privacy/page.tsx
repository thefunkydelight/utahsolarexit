import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS.name}`,
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#F8F8F7] mb-8" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-sm max-w-none text-[#858481] space-y-6">
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>
            {BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information you provide when using our website.
          </p>
          <h2 className="text-lg font-semibold text-[#F8F8F7]">Information We Collect</h2>
          <p>
            We collect information you voluntarily provide through our contact form, including your name, phone number, state of residence, solar company name, contract details, and issues you describe.
          </p>
          <h2 className="text-lg font-semibold text-[#F8F8F7]">How We Use Your Information</h2>
          <p>
            We use your information solely to contact you regarding your solar contract situation and connect you with appropriate professionals. We do not sell your information to third parties.
          </p>
          <h2 className="text-lg font-semibold text-[#F8F8F7]">Contact</h2>
          <p>
            For questions about this policy, call us at{" "}
            <a href={BUSINESS.phoneHref} className="text-[#FFD700] hover:underline">{BUSINESS.phone}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
