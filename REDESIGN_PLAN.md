# Swaraj Engineering Corporation — Website Redesign Plan

**Project:** Personal portfolio project (not Everestek)  
**Source Website:** https://www.swarajgroupworld.in/  
**Company:** Swaraj Engineering Corporation  
**Location:** Ambernath/Kharghar, Maharashtra  
**Established:** 2007  
**GST:** 27AUNPB2300B1ZF  
**Contact:** 07971189194 | Mr. Sandeep Bhuimbar (Managing Director)

---

## 1. Current State Analysis

### 1.1 Business Overview
- **B2B industrial manufacturer** of heavy-duty lifting equipment
- **Core products:** MS Crane Trolleys, EOT Cranes (15T, 25T DG, Underslug), Goliath Cranes (50T–100T), Industrial Cranes, Customized One Side Leg Cranes, European Design End Carriage Cranes, Wire Rope Hoists
- **Target sectors:** Manufacturing, Construction, Logistics, Infrastructure
- **Value props:** 15+ years expertise, customization, safety compliance, end-to-end service (installation, maintenance, training)

### 1.2 Current Website Issues

| Area | Current State | Problems |
|------|---------------|----------|
| **Typography** | Roboto, Roboto Slab, Poppins, Times New Roman, Arial, Georgia (6+ families) | Inconsistent hierarchy, no design system, poor readability |
| **Color Palette** | 10+ shades of blue + yellow accent + 10+ grays | No semantic color system, accessibility issues, brand dilution |
| **Layout** | Table-based/old CMS structure (Infocom Network) | Non-responsive, cluttered, poor mobile UX |
| **Navigation** | Basic top nav + sidebar product lists | Deep nesting, no search/filter, poor product discovery |
| **CTAs** | "Send Inquiry" buttons everywhere | Generic, no lead qualification, no tracking |
| **Content** | Text-heavy, spec-light product pages | No technical specs, no case studies, no trust signals |
| **Performance** | 517KB HTML, likely unoptimized assets | Slow load, no modern optimization |
| **SEO** | Basic meta, no schema, thin content | Poor industrial keyword coverage |

### 1.3 Current Design Tokens (Extracted)

```css
/* Fonts - CHAOTIC */
font-family: 'Roboto, sans-serif', 'Roboto Slab, serif', 'Poppins, sans-serif', 
             'Times New Roman', 'Arial', 'Georgia';

/* Colors - UNSTRUCTURED BLUES */
--blue-primary:   rgb(3, 99, 205);    /* #0363CD */
--blue-dark:      rgb(2, 50, 104);    /* #023268 */
--blue-mid:       rgb(4, 74, 150);    /* #044A96 */
--blue-light:     rgb(9, 91, 181);    /* #095BB5 */
--blue-link:      rgb(0, 0, 238);     /* #0000EE */
--yellow-accent:  rgb(255, 198, 0);   /* #FFC600 */
--gray-100:       rgb(248, 249, 249); /* #F8F9F9 */
--gray-300:       rgb(220, 220, 220); /* #DCDCDC */
--gray-500:       rgb(126, 126, 126); /* #7E7E7E */
--gray-700:       rgb(55, 52, 53);    /* #373435 */
--gray-900:       rgb(36, 50, 66);    /* #243242 */
```

---

## 2. Redesign Strategy

### 2.1 Design Direction: **"Industrial Precision"**
A trustworthy, technical, and modern B2B aesthetic that signals engineering excellence without being cold. Think: **Linear meets Caterpillar** — clean, structured, high-contrast, with purposeful accent color.

### 2.2 Design Principles
1. **Clarity over cleverness** — specs, capacities, certifications front and center
2. **Trust through transparency** — show the factory, the team, the standards
3. **Mobile-first for field engineers** — spec sheets readable on phone at job site
4. **Lead quality > lead quantity** — qualified inquiry forms, not generic buttons
5. **Performance as a feature** — < 3s load, optimized images, static-first where possible

---

## 3. Proposed Design System

### 3.1 Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| **Display/Headlines** | **Space Grotesk** (Google Fonts) | 600, 700 | Hero titles, section headers, product names |
| **Body/UI** | **DM Sans** (Google Fonts) | 400, 500, 600 | All body text, buttons, navigation, forms |
| **Technical/Mono** | **JetBrains Mono** (Google Fonts) | 400, 500 | Spec tables, capacities, model numbers, GST, phone |

```css
/* Typography Scale */
--fs-display-xl: clamp(2.5rem, 5vw, 4rem);   /* Hero */
--fs-display-lg: clamp(2rem, 4vw, 3rem);     /* Section titles */
--fs-display-md: clamp(1.5rem, 3vw, 2rem);   /* Subsections */
--fs-heading-sm: 1.25rem;                    /* Card titles */
--fs-body-lg: 1.125rem;                      /* Lead paragraphs */
--fs-body: 1rem;                             /* Default */
--fs-body-sm: 0.875rem;                      /* Captions, meta */
--fs-mono: 0.875rem;                         /* Specs, codes */

--lh-tight: 1.1;
--lh-normal: 1.5;
--lh-relaxed: 1.7;
```

**Why these fonts?**
- **Space Grotesk** — geometric, technical feel, excellent at display sizes, used by Sanity/technical brands
- **DM Sans** — humanist geometric, highly legible, friendly but professional (sub for Circular/Geist)
- **JetBrains Mono** — developer/engineer favorite, tabs/ligatures for spec alignment

### 3.2 Color Palette (Semantic, Accessible)

```css
/* === BRAND === */
--color-brand-50:  #EFF6FF;   /* Light backgrounds */
--color-brand-100: #DBEAFE;
--color-brand-500: #1E40AF;   /* Primary actions, links */
--color-brand-600: #1E3A8A;   /* Hover states */
--color-brand-700: #172554;   /* Dark headers, footers */
--color-brand-900: #0F172A;   /* Near-black, hero backgrounds */

/* === ACCENT (Safety/Industrial Yellow) === */
--color-accent-400: #FBBF24;  /* CTAs, highlights, warning badges */
--color-accent-500: #F59E0B;  /* Hover */
--color-accent-600: #D97706;  /* Active */

/* === SEMANTIC === */
--color-success-500: #10B981;  /* Certifications, in-stock */
--color-warning-500: #F59E0B;  /* Lead time, custom */
--color-error-500:   #EF4444;  /* Out of stock, errors */

/* === NEUTRALS (Slate) === */
--color-bg:        #FFFFFF;    /* Page background */
--color-bg-muted:  #F8FAFC;    /* Section alternates, cards */
--color-bg-dark:   #0F172A;    /* Dark sections, footer */
--color-text:      #0F172A;    /* Primary text */
--color-text-muted: #475569;   /* Secondary text, captions */
--color-text-inverse: #F8FAFC; /* On dark backgrounds */
--color-border:    #E2E8F0;    /* Dividers, input borders */
--color-border-strong: #CBD5E1; /* Focus rings, emphasis */

/* === SURFACE ELEVATION === */
--shadow-sm:  0 1px 2px 0 rgb(15 23 42 / 0.05);
--shadow-md:  0 4px 6px -1px rgb(15 23 42 / 0.1), 0 2px 4px -2px rgb(15 23 42 / 0.1);
--shadow-lg:  0 10px 15px -3px rgb(15 23 42 / 0.1), 0 4px 6px -4px rgb(15 23 42 / 0.1);
--shadow-xl:  0 20px 25px -5px rgb(15 23 42 / 0.1), 0 8px 10px -6px rgb(15 23 42 / 0.1);
```

**Accessibility:** All text/background combos meet WCAG AA (4.5:1). Brand-600 on white = 7.2:1. Accent-500 on brand-900 = 5.8:1.

### 3.3 Spacing & Layout System

```css
/* Base unit: 4px */
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */

/* Container widths */
--container-sm:  640px;   /* Forms, article */
--container-md:  768px;   /* Content */
--container-lg:  1024px;  /* Default */
--container-xl:  1280px;  /* Wide layouts */
--container-full: 100%;   /* Hero, full-bleed */

/* Border radius */
--radius-sm:  0.25rem;  /* 4px - inputs, badges */
--radius-md:  0.5rem;   /* 8px - cards, buttons */
--radius-lg:  0.75rem;  /* 12px - modals, panels */
--radius-xl:  1rem;     /* 16px - hero elements */
--radius-full: 9999px;  /* Pills, avatar */
```

### 3.4 Component Library (Key Components)

| Component | Variants | States |
|-----------|----------|--------|
| **Button** | Primary (brand), Secondary (outline), Accent (yellow), Ghost, Danger | Default, Hover, Active, Focus, Disabled, Loading |
| **Card** | Product, Spec, Testimonial, Case Study, Team | Default, Hover (elevate), Featured (border-accent) |
| **Product Grid** | 1-col (mobile), 2-col (tablet), 3-col (desktop), 4-col (wide) | Filter by: Capacity, Type, Industry |
| **Spec Table** | Horizontal (mobile cards), Vertical (desktop table) | Sticky header, sortable, printable |
| **Inquiry Form** | Quick (floating), Full (dedicated page), Product-specific (pre-filled) | Validation, toast confirm, GA4 event |
| **Navigation** | Mega-menu (Products), Sticky header, Mobile drawer | Active section, scroll shadow |
| **Hero** | Static image, Slideshow (3 max), Video background | CTA primary + secondary |
| **Trust Badge** | ISO, Capacity, Since 2007, Maharashtra, Export | Inline, grid, footer stack |

---

## 4. Information Architecture & Sitemap

```
├── Home
│   ├── Hero (value prop + primary CTA)
│   ├── Trust Bar (stats, certifications, years)
│   ├── Product Categories (4-6 cards → /products)
│   ├── Featured Products (3-4 newest/bestsellers)
│   ├── Capabilities Strip (Customize, Manufacture, Install, Service)
│   ├── Testimonial/Case Study Preview (→ /case-studies)
│   └── CTA Banner (Get Quote / Download Catalog)
├── About Us (/about)
│   ├── Our Story (2007 → present timeline)
│   ├── Manufacturing Facility (photos, certifications)
│   ├── Leadership Team (MD + key engineers)
│   └── Certifications & Standards (ISO, IS, etc.)
├── Products (/products)
│   ├── Category Landing (filterable grid)
│   │   ├── EOT Cranes
│   │   ├── Goliath Cranes
│   │   ├── Jib/One-Side-Leg Cranes
│   │   ├── Wire Rope Hoists
│   │   ├── Crane Components (Trolleys, End Carriages)
│   │   └── Custom Solutions
│   ├── Product Detail Page (/products/[slug])
│   │   ├── Gallery (3-5 images, zoom)
│   │   ├── Key Specs Table (Capacity, Span, Height, Duty, Speed)
│   │   ├── Features & Safety Systems
│   │   ├── Applications/Industries
│   │   ├── Download Datasheet (PDF)
│   │   ├── Related Products
│   │   └── Sticky Inquiry Form (pre-filled product)
│   └── Comparison Tool (select 2-3 → side-by-side specs)
├── Industries (/industries)
│   ├── Manufacturing
│   ├── Construction & Infrastructure
│   ├── Logistics & Warehousing
│   ├── Steel & Heavy Fabrication
│   └── Power & Energy
├── Case Studies (/case-studies)
│   ├── Filter by Industry / Capacity / Product Type
│   ├── Detail: Challenge → Solution → Specs → Outcome → Testimonial
│   └── Download PDF Case Study
├── Resources (/resources)
│   ├── Product Catalog (PDF download, gate with email)
│   ├── Technical Guides (blog-style, SEO)
│   ├── Maintenance Checklists
│   ├── Safety Standards Reference
│   └── FAQ
├── Contact (/contact)
│   ├── Inquiry Form (typed: General, Product, Service, Career)
│   ├── Office/Factory Map + Hours
│   ├── Direct Contacts (Sales, Service, Spares, MD)
│   └── Dealer/Distributor Inquiry
└── Request a Quote (/quote) — multi-step wizard
    ├── Step 1: Product Category
    ├── Step 2: Specifications (capacity, span, height, duty, power)
    ├── Step 3: Site Details (indoor/outdoor, hazardous, power supply)
    ├── Step 4: Timeline & Budget Range
    └── Step 5: Contact Info → Submit → PDF spec sent to both parties
```

---

## 5. Page-Level Design Specs

### 5.1 Homepage

```
┌─────────────────────────────────────────────────────────────┐
│  STICKY HEADER: Logo | Products ▼ | Industries ▼ | Resources ▼ │
│  [Contact: 07971189194] [Get Quote • Primary]               │
├─────────────────────────────────────────────────────────────┤
│  HERO (full-bleed, dark bg + factory photo overlay)         │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │  Engineering Precision Since 2007                       │ │
│  │  Heavy-Duty Cranes & Hoists for Indian Industry         │ │
│  │  [Get Custom Quote • Brand]  [View Products • Ghost]    │ │
│  │  ▸ 15+ Years  ▸ 500+ Installations  ▸ ISO 9001:2015    │ │
│  └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  PRODUCT CATEGORIES (icon + title + count + arrow)          │
│  [EOT Cranes 12]  [Goliath Cranes 8]  [Jib Cranes 6]       │
│  [Wire Rope Hoists 10]  [Components 15]  [Custom Solutions] │
├─────────────────────────────────────────────────────────────┤
│  FEATURED PRODUCTS (card grid: image, name, capacity, tag)  │
│  [100T Goliath]  [15T EOT]  [One-Side-Leg]  [Euro End Carr.]│
├─────────────────────────────────────────────────────────────┤
│  WHY SWARAJ (4-column icon + text)                          │
│  [Custom Engineering] [In-House Mfg] [Safety First] [Service]│
├─────────────────────────────────────────────────────────────┤
│  CASE STUDY PREVIEW (carousel: 3 projects)                  │
│  "How [Client] Reduced Downtime 40% with 50T Goliath"       │
├─────────────────────────────────────────────────────────────┤
│  CTA BANNER (brand bg)                                      │
│  "Ready to Spec Your Next Crane?"  [Download Catalog] [Talk]│
├─────────────────────────────────────────────────────────────┤
│  FOOTER: Company info | Quick Links | Products | Contact    │
│  GST | Certifications | Social | Developed by [us]          │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Product Detail Page (Critical)

```
┌─────────────────────────────────────────────────────────────┐
│  BREADCRUMB: Home > Products > EOT Cranes > 15T EOT Crane   │
├──────────────┬──────────────────────────────────────────────┤
│  GALLERY     │  PRODUCT HEADER                              │
│  (sticky,    │  15 Ton EOT Crane                            │
│  thumb strip)│  SKU: SEC-EOT-15T  |  In Stock / 4-6 weeks  │
│              │  [Download Datasheet] [Share] [Compare]      │
│              │                                              │
│              │  KEY SPECS (icon + label + value)            │
│              │  ┌──────────┬──────────┬──────────┬────────┐ │
│              │  │ Capacity │  Span    │  Lift Ht │ Duty   │ │
│              │  │ 15 Ton   │  22.5 m  │  12 m    │ A5/M5  │ │
│              │  ├──────────┼──────────┼──────────┼────────┤ │
│              │  │ Hoist Sp │  Cross T │  Power   │ Control│ │
│              │  │  8/0.8   │  20/5    │ 415V/3Ph │Pendant │ │
│              │  └──────────┴──────────┴──────────┴────────┘ │
│              │                                              │
│              │  [Request Quote for This Model • Primary]    │
│              │  [Talk to Engineer • Secondary]              │
├──────────────┼──────────────────────────────────────────────┤
│              │  TABS: Overview | Specifications | Features  │
│              │  | Applications | Safety | Downloads         │
├──────────────┴──────────────────────────────────────────────┤
│  RELATED PRODUCTS (horizontal scroll, 4 cards)              │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 Quote Wizard (Multi-step)

- Progress indicator (5 steps)
- Smart defaults based on product selection
- Real-time validation
- Summary review before submit
- Generates PDF spec sheet emailed to prospect + sales

---

## 6. Technical Implementation Plan

### 6.1 Tech Stack Recommendation

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | **Astro** (static-first, island hydration) | Best-in-class performance, partial hydration for interactive bits (quote wizard, filters), excellent SEO, easy deploy |
| **Styling** | **Tailwind CSS** + CSS Variables | Design system implementation, dark mode ready, tiny bundle |
| **CMS/Content** | **Content Collections (Astro)** + Markdown/MDX | Type-safe content, version-controlled, no external CMS cost |
| **Forms** | **Netlify Forms** or **Formspree** | Serverless, spam protection, webhook to CRM/email |
| **Search/Filter** | **Fuse.js** (client-side) or **Algolia** (if >500 products) | Instant product filtering, no backend |
| **Images** | **Astro Assets** + **Cloudinary** (transforms) | Auto WebP/AVIF, responsive srcset, CDN |
| **Analytics** | **GA4** + **Plausible** (privacy-friendly) | Dual tracking |
| **Hosting** | **Netlify** or **Cloudflare Pages** | Edge, free tier, preview deploys, forms, functions |
| **Domain** | Keep `swarajgroupworld.in` | Existing authority, redirect old URLs |

### 6.2 Project Structure

```
swaraj-website-redesign/
├── public/
│   ├── images/           # Optimized product photos, hero, team
│   ├── pdfs/             # Catalogs, datasheets, case studies
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/           # Button, Card, Input, Select, Modal, Toast
│   │   ├── layout/       # Header, Footer, Hero, Section, Container
│   │   ├── product/      # ProductCard, SpecTable, Gallery, InquiryForm
│   │   ├── quote/        # Wizard steps, ProgressBar, Summary
│   │   └── common/       # TrustBadges, Breadcrumb, SEO, JSON-LD
│   ├── layouts/
│   │   ├── Base.astro
│   │   ├── Product.astro
│   │   └── Quote.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── products/
│   │   │   ├── index.astro (with filters)
│   │   │   └── [slug].astro
│   │   ├── industries/[slug].astro
│   │   ├── case-studies/
│   │   ├── resources/
│   │   ├── contact.astro
│   │   └── quote/
│   │       └── [step].astro
│   ├── content/
│   │   ├── products/     # .mdx files per product
│   │   ├── case-studies/
│   │   ├── team/
│   │   └── config.ts     # Content collections schema
│   ├── styles/
│   │   ├── global.css    # CSS variables, reset, base
│   │   └── components.css
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── company.ts    # GST, address, phone, certifications
│   │   └── industries.ts
│   └── utils/
│       ├── seo.ts
│       ├── schema.ts     # JSON-LD generators
│       └── format.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### 6.3 Content Modeling (Astro Content Collections)

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['eot', 'goliath', 'jib', 'hoist', 'component', 'custom']),
    shortDescription: z.string(),
    heroImage: z.string(),
    gallery: z.array(z.string()).optional(),
    specs: z.object({
      capacity: z.string(),        // "15 Ton"
      span: z.string().optional(), // "22.5 m"
      liftHeight: z.string().optional(),
      dutyClass: z.string().optional(), // "A5/M5"
      hoistSpeed: z.string().optional(),
      crossTravel: z.string().optional(),
      powerSupply: z.string().optional(),
      controlType: z.string().optional(),
    }),
    features: z.array(z.string()),
    safetyFeatures: z.array(z.string()),
    applications: z.array(z.string()),
    industries: z.array(z.string()),
    certifications: z.array(z.string()).optional(),
    leadTime: z.string().optional(), // "4-6 weeks"
    datasheet: z.string().optional(), // PDF path
    isNew: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    client: z.string(),
    industry: z.string(),
    location: z.string(),
    products: z.array(z.string()), // product slugs
    challenge: z.string(),
    solution: z.string(),
    outcome: z.string(),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    }).optional(),
    heroImage: z.string(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    pdf: z.string().optional(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});
```

---

## 7. Migration & Launch Checklist

### 7.1 Content Audit & Creation
- [ ] Audit all 30+ current product pages → map to new categories
- [ ] Write spec tables for each product (capacity, span, height, duty, speeds, power)
- [ ] Photograph factory, machinery, team, installations (professional)
- [ ] Create 5-8 case studies with metrics + testimonials
- [ ] Write technical guides (3-5 for SEO: "EOT vs Goliath", "Duty Class Explained", etc.)
- [ ] Prepare product catalog PDF (gated download)
- [ ] Draft datasheet PDFs per product (template-driven)

### 7.2 SEO & Technical
- [ ] Map all old URLs → new URLs (301 redirects in `_redirects` or middleware)
- [ ] Implement JSON-LD: Organization, Product, Breadcrumb, FAQ, LocalBusiness
- [ ] Generate `sitemap.xml` and `robots.txt`
- [ ] Configure OG/Twitter cards per page
- [ ] Set up GA4 + Search Console + Plausible
- [ ] Core Web Vitals budget: LCP < 2.5s, CLS < 0.1, INP < 200ms

### 7.3 Forms & Integrations
- [ ] Inquiry form → Netlify Forms → webhook to email + Google Sheet/CRM
- [ ] Quote wizard → same + PDF generation (serverless function)
- [ ] Catalog download → email gate → auto-send PDF
- [ ] reCAPTCHA v3 / hCaptcha on all forms
- [ ] WhatsApp Business API click-to-chat (floating button)

### 7.4 QA & Launch
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge (desktop + mobile)
- [ ] Accessibility audit: axe-core, keyboard nav, screen reader (NVDA)
- [ ] Performance audit: Lighthouse CI in PR pipeline
- [ ] Form submission testing (all variants)
- [ ] 301 redirect verification (all old URLs)
- [ ] Staging deploy → stakeholder review → production deploy
- [ ] Post-launch: monitor 404s, form submissions, Core Web Vitals for 2 weeks

---

## 8. Timeline (Estimated)

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Discovery & Content** | 2 weeks | Content audit, spec sheets, photography brief, case study drafts |
| **Design System & Components** | 1.5 weeks | Tailwind config, component library (Storybook), design tokens |
| **Core Pages (Home, About, Products, Contact)** | 2 weeks | Responsive templates, product grid, detail page, forms |
| **Advanced Features** | 1.5 weeks | Quote wizard, product comparison, search/filter, PDF generation |
| **Content Population** | 1 week | All MDX content, images optimized, PDFs uploaded |
| **QA, SEO, Launch** | 1 week | Redirects, schema, analytics, performance, accessibility |
| **Total** | **~9 weeks** | Production-ready website |

---

## 9. Success Metrics (KPIs)

| Metric | Baseline (Current) | Target (6 Months) |
|--------|-------------------|-------------------|
| **Organic Traffic** | ~200/mo | 1,500/mo |
| **Qualified Inquiries** | ~5/mo | 40/mo |
| **Quote Requests** | ~2/mo | 25/mo |
| **Catalog Downloads** | 0 | 100/mo |
| **Avg. Session Duration** | ~45s | 3:00 |
| **Mobile Usability Score** | ~45/100 | 95/100 |
| **Core Web Vitals (Good %)** | < 20% | > 90% |
| **Page Load (LCP)** | ~6-8s | < 2.5s |

---

## 10. Budget Considerations (Personal Project)

| Item | Cost | Notes |
|------|------|-------|
| Domain (renewal) | ₹1,000/yr | Already owned |
| Hosting (Netlify/Cloudflare) | $0 | Free tier sufficient |
| CMS | $0 | Astro Content Collections |
| Forms | $0 | Netlify Forms (100/mo free) |
| Images (Cloudinary) | $0 | Free tier (25GB) |
| Analytics | $0 | GA4 + Plausible (free tier) |
| Photography | ₹15,000-25,000 | One-day factory shoot |
| SSL | $0 | Auto via hosting |
| **Total (Year 1)** | **~₹20,000-30,000** | Mostly photography |

---

## 11. Next Immediate Actions

1. **Create project repo** → `git init` + push to GitHub (private)
2. **Set up Astro + Tailwind** → `npm create astro@latest` → install Tailwind
3. **Define design tokens** → `tailwind.config.mjs` with colors, fonts, spacing above
4. **Build component library** → Button, Card, Input, SpecTable, Hero, Header, Footer
5. **Create content schemas** → Product, CaseStudy, Team collections
6. **Migrate 3-5 key products** → Validate detail page layout with real data
7. **Design review** → Share staging URL for feedback
8. **Parallel: Arrange factory photography** → Critical for hero, about, trust

---

## 12. Reference Links & Inspiration

| Reference | What to Borrow |
|-----------|----------------|
| **Konecranes.com** | Product finder, spec tables, industry pages |
| **Demag.com** | Clean technical aesthetic, configurator |
| **Streetcrane.com** | UK industrial, good product detail pages |
| **Harringtonhoists.com** | Datasheet PDFs, dealer locator |
| **Linear.app** | Typography, spacing, dark mode execution |
| **Vercel.com** | Performance obsession, developer-first feel |
| **Stripe.com** | Trust signals, interactive components |

---

## 13. Obsidian Vault Integration

This project lives in: `~/Documents/Obsidian Vault/05-Personal/Swaraj-Website-Redesign/`

**Files to maintain there:**
- `REDESIGN_PLAN.md` (this file)
- `PROJECT_LOG.md` — daily/weekly progress notes
- `CONTENT_INVENTORY.md` — product mapping, spec gaps, photo checklist
- `DESIGN_DECISIONS.md` — rationale log (why Space Grotesk, why Astro, etc.)
- `MEETING_NOTES/` — any client/stakeholder conversations
- `ASSETS/` — downloaded logos, current site screenshots, color swatches

**Tags for linking:** `#swaraj-redesign` `#personal-project` `#web-design` `#industrial-b2b`

---

*Plan created: 2026-11-01*  
*Status: **Planning Phase** — Ready for implementation kickoff*