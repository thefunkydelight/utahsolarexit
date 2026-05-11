"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BUSINESS } from "@/lib/constants";
import { Phone, Check, ChevronRight, ChevronLeft } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  state: z.string().min(1, "Please select your state"),
  solarCompany: z.string().min(1, "Please enter your solar company name"),
  contractType: z.string().min(1, "Please select your contract type"),
  issues: z.array(z.string()).min(1, "Please select at least one issue"),
  contractLength: z.string().min(1, "Please select a timeframe"),
  monthlyPayment: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const CONTRACT_TYPES = ["Lease", "PPA (Power Purchase Agreement)", "Loan", "Owned System", "Not Sure"];
const CONTRACT_LENGTHS = [
  "Less than 1 year",
  "1–5 years",
  "5–10 years",
  "10–20 years",
  "More than 20 years",
];
const ISSUE_OPTIONS = [
  "Escalating payments",
  "Can't sell my home",
  "Paying more than old electric bill",
  "Misled by sales rep",
  "Company ignoring my calls",
  "Early termination fees",
  "Contract misrepresentation",
  "Other",
];

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { issues: [], state: "Utah" },
  });

  const { register, handleSubmit, watch, setValue, formState: { errors } } = form;
  const issues = watch("issues");

  const toggleIssue = (issue: string) => {
    const current = issues ?? [];
    setValue(
      "issues",
      current.includes(issue) ? current.filter((i) => i !== issue) : [...current, issue]
    );
  };

  const nextStep = async () => {
    let valid = false;
    if (step === 1) {
      valid = await form.trigger(["name", "phone", "state", "solarCompany", "contractType"]);
    } else if (step === 2) {
      valid = await form.trigger(["issues", "contractLength"]);
    }
    if (valid) setStep(step + 1);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at " + BUSINESS.phone);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 mb-4">
          <Check className="h-8 w-8 text-[#FFD700]" />
        </div>
        <h3 className="text-2xl font-bold text-[#F8F8F7] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          We&apos;ll Be in Touch!
        </h3>
        <p className="text-[#858481] mb-6">
          We&apos;ve received your information and will call you within 1 business day.
        </p>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-bold px-6 py-3 rounded-xl transition-colors"
        >
          <Phone className="h-4 w-4" />
          Or call us now: {BUSINESS.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#1A1A19] border border-[#34322D] rounded-2xl p-6 sm:p-8">
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              s < step ? "bg-[#FFD700] text-[#0A0A0A]" :
              s === step ? "border-2 border-[#FFD700] text-[#FFD700]" :
              "border border-[#34322D] text-[#858481]"
            }`}>
              {s < step ? <Check className="h-3.5 w-3.5" /> : s}
            </div>
            {s < 3 && <div className={`h-px flex-1 w-8 transition-colors ${s < step ? "bg-[#FFD700]" : "bg-[#34322D]"}`} />}
          </div>
        ))}
        <span className="ml-2 text-xs text-[#858481] hidden sm:inline">Step {step} of 3</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F8F8F7] mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Your Information</h3>
            <p className="text-sm text-[#858481] mb-5">Tell us a bit about yourself and your contract.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#858481] mb-1">Full Name *</label>
                <input {...register("name")} placeholder="Jane Smith" className="w-full bg-[#0A0A0A] border border-[#34322D] rounded-lg px-3 py-2.5 text-sm text-[#F8F8F7] placeholder-[#858481] focus:outline-none focus:border-[#FFD700]/60" />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#858481] mb-1">Phone Number *</label>
                <input {...register("phone")} placeholder="(385) 000-0000" type="tel" className="w-full bg-[#0A0A0A] border border-[#34322D] rounded-lg px-3 py-2.5 text-sm text-[#F8F8F7] placeholder-[#858481] focus:outline-none focus:border-[#FFD700]/60" />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#858481] mb-1">State *</label>
                <select {...register("state")} className="w-full bg-[#0A0A0A] border border-[#34322D] rounded-lg px-3 py-2.5 text-sm text-[#F8F8F7] focus:outline-none focus:border-[#FFD700]/60">
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.state && <p className="text-xs text-red-400 mt-1">{errors.state.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#858481] mb-1">Solar Company *</label>
                <input {...register("solarCompany")} placeholder="e.g. Sunrun, Tesla, Vivint" className="w-full bg-[#0A0A0A] border border-[#34322D] rounded-lg px-3 py-2.5 text-sm text-[#F8F8F7] placeholder-[#858481] focus:outline-none focus:border-[#FFD700]/60" />
                {errors.solarCompany && <p className="text-xs text-red-400 mt-1">{errors.solarCompany.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#858481] mb-1">Contract Type *</label>
              <select {...register("contractType")} className="w-full bg-[#0A0A0A] border border-[#34322D] rounded-lg px-3 py-2.5 text-sm text-[#F8F8F7] focus:outline-none focus:border-[#FFD700]/60">
                <option value="">Select contract type…</option>
                {CONTRACT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.contractType && <p className="text-xs text-red-400 mt-1">{errors.contractType.message}</p>}
            </div>

            <button type="button" onClick={nextStep} className="w-full flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-bold py-3 rounded-xl transition-colors mt-2">
              Next Step <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F8F8F7] mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Your Situation</h3>
            <p className="text-sm text-[#858481] mb-5">Help us understand your contract issues.</p>

            <div>
              <label className="block text-xs font-medium text-[#858481] mb-2">What issues are you experiencing? *</label>
              <div className="grid grid-cols-1 gap-2">
                {ISSUE_OPTIONS.map((issue) => (
                  <button
                    key={issue}
                    type="button"
                    onClick={() => toggleIssue(issue)}
                    className={`text-left text-sm px-3 py-2.5 rounded-lg border transition-colors ${
                      issues?.includes(issue)
                        ? "border-[#FFD700] bg-[#FFD700]/10 text-[#F8F8F7]"
                        : "border-[#34322D] text-[#858481] hover:border-[#FFD700]/40"
                    }`}
                  >
                    {issues?.includes(issue) ? "✓ " : ""}{issue}
                  </button>
                ))}
              </div>
              {errors.issues && <p className="text-xs text-red-400 mt-1">{errors.issues.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#858481] mb-1">How long in your contract? *</label>
                <select {...register("contractLength")} className="w-full bg-[#0A0A0A] border border-[#34322D] rounded-lg px-3 py-2.5 text-sm text-[#F8F8F7] focus:outline-none focus:border-[#FFD700]/60">
                  <option value="">Select…</option>
                  {CONTRACT_LENGTHS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
                {errors.contractLength && <p className="text-xs text-red-400 mt-1">{errors.contractLength.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#858481] mb-1">Monthly payment (optional)</label>
                <input {...register("monthlyPayment")} placeholder="e.g. $185" className="w-full bg-[#0A0A0A] border border-[#34322D] rounded-lg px-3 py-2.5 text-sm text-[#F8F8F7] placeholder-[#858481] focus:outline-none focus:border-[#FFD700]/60" />
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <button type="button" onClick={() => setStep(1)} className="flex items-center gap-1 border border-[#34322D] hover:border-[#FFD700]/40 text-[#858481] hover:text-[#F8F8F7] font-semibold py-3 px-4 rounded-xl transition-colors">
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
              <button type="button" onClick={nextStep} className="flex-1 flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-bold py-3 rounded-xl transition-colors">
                Next Step <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Confirmation */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F8F8F7] mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Confirm & Submit</h3>
            <p className="text-sm text-[#858481] mb-5">Review your information, then submit for your free consultation.</p>

            <div className="bg-[#0A0A0A] border border-[#34322D] rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#858481]">Name</span>
                <span className="text-[#F8F8F7]">{watch("name")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858481]">Phone</span>
                <span className="text-[#F8F8F7]">{watch("phone")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858481]">State</span>
                <span className="text-[#F8F8F7]">{watch("state")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858481]">Solar company</span>
                <span className="text-[#F8F8F7]">{watch("solarCompany")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858481]">Contract type</span>
                <span className="text-[#F8F8F7]">{watch("contractType")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858481]">Issues</span>
                <span className="text-[#F8F8F7] text-right">{issues?.join(", ")}</span>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">{error}</p>
            )}

            <div className="flex gap-3 mt-2">
              <button type="button" onClick={() => setStep(2)} className="flex items-center gap-1 border border-[#34322D] hover:border-[#FFD700]/40 text-[#858481] hover:text-[#F8F8F7] font-semibold py-3 px-4 rounded-xl transition-colors">
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] disabled:opacity-60 text-[#0A0A0A] font-bold py-3 rounded-xl transition-colors"
              >
                {loading ? "Submitting…" : "Get My Free Consultation"}
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1">
              {["98% Success Rate", "Built-In Guarantee", "Independent Law Firm"].map((item) => (
                <span key={item} className="flex items-center gap-1 text-xs text-[#858481]">
                  <span className="text-[#FFD700]">✓</span> {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#858481] text-center">
              We&apos;ll call you within 1 business day. Or call us now:{" "}
              <a href={BUSINESS.phoneHref} className="text-[#FFD700] hover:underline">{BUSINESS.phone}</a>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
