import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['eot', 'goliath', 'jib', 'hoist', 'component', 'custom']),
    shortDescription: z.string(),
    sku: z.string(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    specs: z.object({
      capacity: z.string(),
      span: z.string().optional(),
      liftHeight: z.string().optional(),
      dutyClass: z.string().optional(),
      hoistSpeed: z.string().optional(),
      crossTravel: z.string().optional(),
      longTravel: z.string().optional(),
      powerSupply: z.string().optional(),
      controlType: z.string().optional(),
    }),
    features: z.array(z.string()).default([]),
    safetyFeatures: z.array(z.string()).default([]),
    applications: z.array(z.string()).default([]),
    industries: z.array(z.string()).default([]),
    certifications: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    leadTime: z.string().default('4–6 weeks'),
    warranty: z.string().default('12 months from commissioning'),
    availability: z.enum(['in-stock', 'made-to-order', 'engineered']).default('made-to-order'),
    datasheet: z.string().optional(),
    isNew: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    location: z.string(),
    products: z.array(z.string()).default([]),
    challenge: z.string(),
    solution: z.string(),
    outcome: z.string(),
    productLabel: z.string(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        role: z.string(),
      })
      .optional(),
    metrics: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    pdf: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    initials: z.string(),
    department: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    expertise: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { products, caseStudies, team };
