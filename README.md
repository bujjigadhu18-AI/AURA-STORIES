# AURA STORIES | Luxury Wedding Photography & Cinematic Films

> Official frontend web application for **AURA STORIES** — luxury wedding photography and cinematic films studio based in Visakhapatnam, Andhra Pradesh, catering to discerning couples across South India and destination celebrations worldwide.

---

## ✦ Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/) (Strict mode, zero `any` types)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Typography**: Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Modern Sans)
- **Icons**: [Lucide React](https://lucide.dev/) + optimized custom SVGs
- **Build Output**: Clean single-page application (~87.8 kB gzipped JS bundle)

---

## ✦ Project Directory Structure

```
AURA STORIES/
├── dist/                     # Optimized production build artifacts
├── node_modules/             # Node dependencies
├── public/                   # Static public assets
├── src/
│   ├── components/           # Reusable UI & section components
│   │   ├── About.tsx         # Brand narrative & philosophy quote
│   │   ├── ContactSection.tsx# 10-field API-ready inquiry form & direct studio links
│   │   ├── FeaturedStory.tsx # "Arjun & Priya" case study & celebration index
│   │   ├── FinalCTA.tsx      # Dual-action reservation banner
│   │   ├── Footer.tsx        # Brand footer, navigation, social SVGs, demo disclaimer
│   │   ├── Hero.tsx          # Editorial hero with dual CTA and authentic highlights
│   │   ├── InquiryModal.tsx  # Context-aware date check & quotation modal dialog
│   │   ├── LightboxModal.tsx # Fullscreen accessible image lightbox
│   │   ├── Navbar.tsx        # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Packages.tsx      # 3-tier bespoke investment collections
│   │   ├── Portfolio.tsx     # Filterable visual archive with subtle hover scaling
│   │   ├── SafeImage.tsx     # CLS-preventing image component with fallback handler
│   │   └── Services.tsx      # 4 core service modules with contextual CTAs
│   ├── data/
│   │   └── demoData.ts       # Central business configuration, copy, and curated media
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces (InquiryFormData, PortfolioItem, etc.)
│   ├── App.tsx               # App root managing modal states and section flow
│   ├── index.css             # Tailwind layers, custom scrollbar, reduced-motion rules
│   └── main.tsx              # React DOM entry point
├── .env.example              # Template environment variables
├── index.html                # HTML entry point with font preconnects & SEO tags
├── package.json              # NPM scripts and dependencies
├── tailwind.config.js        # Custom luxury theme tokens (champagne, charcoal, ivory)
├── tsconfig.json             # TypeScript compiler settings
└── vite.config.ts            # Vite configuration
```

---

## ✦ Developer Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (with HMR)
npm run dev

# 3. Compile and verify TypeScript types + production build
npm run build

# 4. Preview the compiled production build locally
npm run preview
```

---

## ✦ Where to Make Changes

| Purpose | Primary File |
| :--- | :--- |
| **Business copy, contact info, images, package details** | [`src/data/demoData.ts`](src/data/demoData.ts) |
| **Brand colors, fonts, theme tokens** | [`tailwind.config.js`](tailwind.config.js) and [`src/index.css`](src/index.css) |
| **Connecting backend / Supabase to date inquiry form** | [`src/components/ContactSection.tsx`](src/components/ContactSection.tsx) |
| **Connecting backend to availability modal dialog** | [`src/components/InquiryModal.tsx`](src/components/InquiryModal.tsx) |
| **Adding or modifying portfolio categories & media** | [`src/data/demoData.ts`](src/data/demoData.ts) & [`src/types/index.ts`](src/types/index.ts) |

---

## ✦ Backend & Service Integration Points

The frontend forms currently execute complete client-side validation (phone format, email regex, required dates/venues) and display responsive loading/success/error states. To attach real services:

1. **Lead Intake / Form Submissions**: Replace the `setTimeout` mock handlers in [`ContactSection.tsx`](src/components/ContactSection.tsx) (`handleSubmit`) and [`InquiryModal.tsx`](src/components/InquiryModal.tsx) (`handleSubmit`) with your API client (e.g. `fetch('/api/inquiries', ...)` or `supabase.from('inquiries').insert(...)`).
2. **WhatsApp Direct**: Configured in [`src/data/demoData.ts`](src/data/demoData.ts) (`socialLinks.whatsapp`). Update the phone number to the studio's verified WhatsApp Business account.
3. **Analytics**: Inject Google Tag Manager or Google Analytics measurement script in [`index.html`](index.html) or hook into route mounting.

---

## ✦ Production Status

**Status**: `READY WITH PENDING BACKEND INTEGRATION`
The frontend is 100% stable, builds with zero errors or warnings, and contains zero broken routes or horizontal layout flaws. Production backend connection for database persistence and automated transactional email dispatch is pending.
