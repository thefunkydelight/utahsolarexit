import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solar Exit Utah | Escape Unfair Solar Contracts",
  description:
    "Feeling trapped in your solar contract? Solar Exit Utah connects homeowners with trusted professionals to legally cancel unfair solar agreements and restore financial peace of mind.",
  keywords: "solar contract cancellation Utah, solar exit Utah, cancel solar lease Utah, solar contract help",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  telephone: BUSINESS.phoneHref.replace("tel:", "+1"),
  url: "https://utahsolarexit.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "7",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <style>{`
          :root {
            --font-sans: ${inter.style.fontFamily};
            --font-heading: ${spaceGrotesk.style.fontFamily};
          }
          body { font-family: ${inter.style.fontFamily}; }
          h1,h2,h3,h4,h5,h6 { font-family: ${spaceGrotesk.style.fontFamily}; }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#0A0A0A] text-[#F8F8F7] overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
