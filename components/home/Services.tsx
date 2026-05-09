import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ClipboardList, Scale, DollarSign, RefreshCw, ArrowRight } from "lucide-react";

const ICONS = [
  <ClipboardList key="0" className="h-6 w-6 text-[#FFD700]" />,
  <Scale key="1" className="h-6 w-6 text-[#FFD700]" />,
  <DollarSign key="2" className="h-6 w-6 text-[#FFD700]" />,
  <RefreshCw key="3" className="h-6 w-6 text-[#FFD700]" />,
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#1A1A19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#F8F8F7] mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Solar Contract Exit Experts
          </h2>
          <p className="text-[#858481] max-w-2xl mx-auto">
            We guide you through every step of escaping unfair solar contracts by connecting you with the right professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.slug}
              className="bg-[#0A0A0A] border border-[#34322D] rounded-xl p-6 flex flex-col hover:border-[#FFD700]/40 transition-colors group"
            >
              <div className="mb-4">{ICONS[i]}</div>
              <h3
                className="text-base font-bold text-[#F8F8F7] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-[#858481] flex-1 mb-4">{service.desc}</p>
              <Link
                href={`/services/${service.slug}`}
                className="flex items-center gap-1 text-sm text-[#FFD700] hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
