# Site Architecture — Solar Exit Utah

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | Best Claude maintainability, Vercel-native, SSR/SSG built-in |
| Language | TypeScript | Type safety, fewer runtime bugs |
| Styling | Tailwind CSS v4 | Same as original, utility-first, easy to match brand |
| Components | shadcn/ui | Pre-built accessible components, easy to theme |
| Forms | React Hook Form | Lightweight, great validation |
| Email | Resend | Simple API, free tier, sends form leads to gmail |
| Hosting | Vercel | Zero-config Next.js deployment |
| Analytics | Umami (optional) | Same as original, privacy-first |

---

## Directory Structure

```
utahsolarexit/
├── app/
│   ├── layout.tsx              # Root layout (fonts, nav, footer)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── contract-review/page.tsx
│   │   ├── legal-exit-strategies/page.tsx
│   │   ├── payment-relief/page.tsx
│   │   └── fresh-start-solutions/page.tsx
│   ├── states/
│   │   ├── [state]/page.tsx    # Dynamic state sub-pages
│   │   └── page.tsx            # States index
│   └── api/
│       └── contact/route.ts    # Form submission → Resend email
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── StatsBar.tsx
│   │   ├── PainPoints.tsx
│   │   ├── Services.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CtaBanner.tsx
│   │   └── FaqPreview.tsx
│   ├── shared/
│   │   ├── ContactForm.tsx     # Multi-step form (reused across pages)
│   │   ├── StatItem.tsx
│   │   ├── FaqItem.tsx
│   │   └── PhoneButton.tsx
│   └── ui/                     # shadcn/ui primitives
├── lib/
│   ├── constants.ts            # Business info, phone, address, hours
│   ├── states.ts               # State data for sub-pages
│   └── resend.ts               # Email helper
├── docs/                       # Planning docs (this folder)
├── public/
│   └── images/
├── tailwind.config.ts
└── next.config.ts
```

---

## Pages & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Home — full landing page |
| `/about` | Static | About the service (no team names) |
| `/faq` | Static | Full FAQ accordion |
| `/contact` | Static | Contact page + form |
| `/services/contract-review` | Static | Service detail page |
| `/services/legal-exit-strategies` | Static | Service detail page |
| `/services/payment-relief` | Static | Service detail page |
| `/services/fresh-start-solutions` | Static | Service detail page |
| `/states` | Static | All states index |
| `/states/utah` | Static | Utah-specific landing (primary) |
| `/states/[state]` | Dynamic (SSG) | Other state landing pages |
| `/api/contact` | API Route | POST handler → Resend email |

---

## Home Page Section Order

1. **Navbar** — logo, nav links, phone CTA button
2. **Hero** — headline, subheadline, scrolling ticker, CTA buttons
3. **Trust Bar** — BBB, Google, Trustpilot badges
4. **Stats Bar** — 4 key metrics
5. **Pain Points** — 6 accordion/card pain points
6. **Services** — 4 service cards with icons
7. **Process Steps** — 3-step numbered process
8. **Calculator** — simple interactive savings estimator
9. **Testimonials** — 7 review cards (carousel or grid)
10. **FAQ Preview** — top 4 questions, link to full FAQ
11. **CTA Banner** — final push, phone number prominent
12. **Footer** — links, disclaimer, copyright

---

## Contact Form (Multi-Step)

**Step 1 — Your Situation**
- Full name (text)
- Phone number (tel)
- State (select — defaults to Utah)
- Solar company name (text)
- Contract type (select: Lease / PPA / Loan / Other)

**Step 2 — Your Problem**
- Main issue (checkboxes from pain points list)
- How long have you been in the contract? (select)
- Monthly payment amount (number)

**Step 3 — Confirmation**
- Summary of inputs
- Submit button → POST to `/api/contact`
- On success: show "We'll call you within 1 business day" message

**Email delivery:** Resend → mvalentine310@gmail.com

---

## State Sub-Pages Strategy

Each `/states/[state]` page:
- Swaps H1 to "Solar Exit [State]" or "Escape Your Solar Contract in [State]"
- Localizes intro paragraph
- Same services, FAQ, form, CTAs
- Unique `<title>` and meta description for SEO

**States to generate at build time:**
Utah, Arizona, Nevada, California, Colorado, Idaho, Texas, Florida, Georgia, North Carolina, Oregon, Washington, New Mexico, Hawaii, Virginia, Ohio, Illinois, Pennsylvania, New York, New Jersey

---

## Key Business Constants (lib/constants.ts)

```ts
export const BUSINESS = {
  name: "Solar Exit Utah",
  phone: "(385) 490-8606",
  phoneHref: "tel:+13854908606",
  city: "Salt Lake City",
  state: "UT",
  hours: "Mon–Fri, 8AM–5PM MT",
  leadEmail: "mvalentine310@gmail.com",
} as const;
```

---

## Environment Variables

| Key | Value | Where |
|---|---|---|
| `RESEND_API_KEY` | From resend.com dashboard | Vercel env + `.env.local` |
| `LEAD_EMAIL` | mvalentine310@gmail.com | Vercel env + `.env.local` |
