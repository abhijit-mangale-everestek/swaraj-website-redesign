export const company = {
  name: 'Swaraj Engineering Corporation',
  shortName: 'Swaraj',
  legalName: 'Swaraj Engineering Corporation',
  tagline: 'Heavy-duty cranes and hoists engineered for Indian industry',
  description:
    'Since 2007, Swaraj Engineering Corporation has designed, manufactured and commissioned EOT cranes, goliath cranes, jib cranes, wire rope hoists and custom lifting systems from our works in Ambernath, Maharashtra.',
  founded: 2007,
  gst: '27AUNPB2300B1ZF',
  phone: '07971189194',
  phoneHref: 'tel:+917971189194',
  whatsapp: 'https://wa.me/917971189194',
  email: 'sales@swarajgroupworld.in',
  emailService: 'service@swarajgroupworld.in',
  address: {
    line1: 'Plot W-18, MIDC Industrial Area',
    line2: 'Ambernath East',
    city: 'Ambernath',
    district: 'Thane',
    state: 'Maharashtra',
    pin: '421506',
    country: 'India',
  },
  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 6:30 PM' },
    { days: 'Sunday', time: 'Closed (service on call)' },
  ],
  contacts: [
    {
      name: 'Sandeep Bhuimbar',
      role: 'Managing Director',
      department: 'Management',
      phone: '07971189194',
      phoneHref: 'tel:+917971189194',
      email: 'sandeep@swarajgroupworld.in',
    },
    {
      name: 'Sales Desk',
      role: 'New equipment enquiries',
      department: 'Sales',
      phone: '07971189194',
      phoneHref: 'tel:+917971189194',
      email: 'sales@swarajgroupworld.in',
    },
    {
      name: 'Service Desk',
      role: 'AMC, spares and breakdown support',
      department: 'Service',
      phone: '07971189194',
      phoneHref: 'tel:+917971189194',
      email: 'service@swarajgroupworld.in',
    },
  ],
  stats: [
    { value: '15+', label: 'Years of engineering', detail: 'Operating since 2007' },
    { value: '500+', label: 'Installations', detail: 'Across India' },
    { value: '100T', label: 'Max lifting capacity', detail: 'Goliath class' },
    { value: 'ISO 9001', label: 'Quality system', detail: '2015 certified process' },
  ],
  certifications: [
    'ISO 9001:2015',
    'IS 3177 & IS 807',
    'Factory Act compliant',
    'MSME registered',
    'GST 27AUNPB2300B1ZF',
  ],
  industries: [
    'Manufacturing',
    'Construction & infrastructure',
    'Logistics & warehousing',
    'Steel & heavy fabrication',
    'Power & energy',
  ],
} as const;

export const navProducts = [
  { label: 'EOT Cranes', href: '/products?category=eot', description: 'Single and double girder electric overhead travelling cranes' },
  { label: 'Goliath Cranes', href: '/products?category=goliath', description: 'Gantry cranes for outdoor yards and heavy fabrication' },
  { label: 'Jib & One-Side-Leg', href: '/products?category=jib', description: 'Wall-mounted, pillar and semi-gantry configurations' },
  { label: 'Wire Rope Hoists', href: '/products?category=hoist', description: 'Compact, high-duty hoisting units and monorail systems' },
  { label: 'Crane Components', href: '/products?category=component', description: 'Trolleys, end carriages, wheels and drive assemblies' },
  { label: 'Custom Solutions', href: '/products?category=custom', description: 'Purpose-built lifting systems for constrained sites' },
] as const;

export const mainNav = [
  { label: 'Products', href: '/products', hasMenu: true },
  { label: 'Industries', href: '/#industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const productCategories = [
  {
    slug: 'eot',
    label: 'EOT Cranes',
    description: 'Single and double girder overhead travelling cranes from 1T to 50T.',
    icon: 'crane',
    capacity: '1T – 50T',
  },
  {
    slug: 'goliath',
    label: 'Goliath Cranes',
    description: 'Rail-mounted gantry systems for yards, sheds and heavy assembly.',
    icon: 'gantry',
    capacity: '5T – 100T',
  },
  {
    slug: 'jib',
    label: 'Jib & One-Side-Leg',
    description: 'Wall-mounted, pillar and semi-gantry cranes for localised lifting.',
    icon: 'jib',
    capacity: '0.5T – 10T',
  },
  {
    slug: 'hoist',
    label: 'Wire Rope Hoists',
    description: 'Compact electric hoists with FEM-rated duty and precise control.',
    icon: 'hoist',
    capacity: '1T – 20T',
  },
  {
    slug: 'component',
    label: 'Components',
    description: 'Trolleys, end carriages, wheels, gearboxes and drive assemblies.',
    icon: 'gear',
    capacity: 'Custom',
  },
  {
    slug: 'custom',
    label: 'Custom Solutions',
    description: 'Purpose-built lifting equipment engineered around your site.',
    icon: 'custom',
    capacity: 'Engineered',
  },
] as const;

export const categoryLabels: Record<string, string> = {
  eot: 'EOT Crane',
  goliath: 'Goliath Crane',
  jib: 'Jib / One-Side-Leg',
  hoist: 'Wire Rope Hoist',
  component: 'Crane Component',
  custom: 'Custom Solution',
};
