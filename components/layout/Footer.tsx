import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A19] border-t border-[#34322D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-[#FFD700] text-lg font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {BUSINESS.name}
            </span>
            <p className="mt-3 text-sm text-[#858481]">
              Connecting Utah homeowners with trusted professionals to exit unfair solar contracts.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#F8F8F7] mb-3">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-[#858481] hover:text-[#FFD700] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#F8F8F7] mb-3">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "States We Serve", href: "/states" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#858481] hover:text-[#FFD700] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#F8F8F7] mb-3">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-2 text-sm text-[#858481] hover:text-[#FFD700] transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#858481]">
                <MapPin className="h-4 w-4 shrink-0" />
                {BUSINESS.city}, {BUSINESS.state}
              </li>
              <li className="flex items-center gap-2 text-sm text-[#858481]">
                <Clock className="h-4 w-4 shrink-0" />
                {BUSINESS.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#34322D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#858481]">
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#858481] hover:text-[#F8F8F7] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        <p className="mt-4 text-xs text-[#858481] text-center">
          {BUSINESS.name} connects homeowners with licensed professionals. We are not a law firm and do not provide legal advice.
        </p>
      </div>
    </footer>
  );
}
