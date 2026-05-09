"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "FAQ", href: "/faq" },
  { label: "States", href: "/states" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#34322D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/Logo_white_text.png" alt={BUSINESS.name} width={400} height={276} className="h-24 w-auto" style={{ width: "auto" }} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#858481] hover:text-[#F8F8F7] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden sm:flex items-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <button
            className="md:hidden text-[#F8F8F7] p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#1A1A19] border-t border-[#34322D] px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#F8F8F7] hover:text-[#FFD700] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#F0A500] text-[#0A0A0A] font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
        </div>
      )}
    </header>
  );
}
