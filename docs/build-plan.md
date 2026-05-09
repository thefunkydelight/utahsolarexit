# Build Plan — Solar Exit Utah

## Phase 1: Foundation
1. Scaffold Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui
2. Configure brand tokens in `tailwind.config.ts` (colors, fonts)
3. Load Google Fonts (Space Grotesk + Inter) in root layout
4. Build Navbar (logo, nav links, phone CTA)
5. Build Footer (links, disclaimer, copyright)
6. Create `lib/constants.ts` with all business info

## Phase 2: Home Page
7. Hero section (headline, ticker, CTA)
8. Trust bar (badge images)
9. Stats bar (4 metrics)
10. Pain points section (6 cards)
11. Services section (4 cards)
12. 3-step process section
13. Testimonials section (7 reviews)
14. FAQ preview (top 4, accordion)
15. CTA banner (phone number)

## Phase 3: Inner Pages
16. About page
17. Full FAQ page
18. Contact page
19. 4 Service detail pages

## Phase 4: Form & Email
20. Multi-step contact form (React Hook Form, 3 steps)
21. `/api/contact` route (Resend integration)
22. Form validation + success/error states

## Phase 5: State Sub-Pages
23. State data file (`lib/states.ts`)
24. Dynamic `[state]` page template
25. Static params for 20 states
26. States index page

## Phase 6: Polish & Deploy
27. SEO metadata for all pages
28. Mobile responsiveness audit
29. Accessibility pass (focus states, aria labels)
30. Vercel deployment + environment variables
