export const profile = {
  name: 'Aekkarit Surit',
  handle: 'nightkuzan',
  role: 'Full Stack Developer',
  company: 'Mexty',
  location: 'Chiang Mai, Thailand',
  email: 'aekkarit12@gmail.com',
  github: 'https://github.com/nightkuzan',
  linkedin: 'https://www.linkedin.com/in/aekkarit-surit-07103b257',
  // Two lines the hero types out.
  headline: ['I build product features', 'and the systems underneath them.'],
  intro:
    "Full Stack Developer with 3+ years building web products end to end — Vue/Nuxt and React front ends over Node.js back ends on PostgreSQL, MySQL and MongoDB. I've worked across healthcare, banking and consumer finance, e-learning, and omnichannel customer messaging.",
  intro2:
    'The part I enjoy most is the layer nobody sees: the queue that backs up, the index that was never created, the query that runs four hundred times instead of once. I measure before I optimise, and I would rather leave code that is easy for the next person to pick up.',
}

export const stats = [
  { value: '3+', label: 'years shipping' },
  { value: '4', label: 'industries' },
  { value: '639→211', label: 'ms p95, one fix' },
  { value: '12s', label: 'to drain a 2-min burst' },
]

export type Role = {
  company: string
  title: string
  kind: string
  period: string
  current?: boolean
  points: string[]
  tech: string[]
}

export const roles: Role[] = [
  {
    company: 'Mexty',
    title: 'Full Stack Developer',
    kind: 'Full-time · Hybrid',
    period: 'Oct 2025 — Present',
    current: true,
    points: [
      'Build interactive learning content as React components for the course and program builder.',
      'Implemented payments and subscription billing with Stripe and Omise.',
      'Developed data models and APIs on MongoDB / Mongoose ODM.',
      'Built a Chrome extension that extends the platform into the browser.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Omise', 'Chrome Extensions'],
  },
  {
    company: 'VICTORY WORK CO., LTD',
    title: 'Full Stack Developer',
    kind: 'Freelance · Remote',
    period: 'Mar 2024 — Present',
    current: true,
    points: [
      'A-MED CARE PLUS — hospital information system as a PWA: patient profile management, administrator management, and a middleware layer talking to external APIs.',
      'Kepler — PWA with a dynamic news feed, personalised profile feed, secure login and configurable settings.',
      'Omnichannel chat platform — built the LINE Broadcast feature end to end and took the inbound pipeline from never draining to clearing a 2-minute 120 msg/s burst in ~12 seconds.',
    ],
    tech: ['Vue', 'Nuxt', 'Strapi', 'PostgreSQL', 'Redis', 'Socket.IO', 'k6', 'Cloudflare R2'],
  },
  {
    company: 'H LAB Co., Ltd.',
    title: 'Full Stack Developer',
    kind: 'Contract · Hybrid',
    period: 'Jul 2025 — Oct 2025',
    points: [
      'Built back-end services in Go and TypeScript for internal business systems.',
      'Modelled and queried the database through Prisma ORM.',
      'Implemented reporting and document generation with Jasper Reports.',
    ],
    tech: ['Go', 'TypeScript', 'Prisma', 'Jasper Reports'],
  },
  {
    company: 'Ayudhya Capital Services',
    title: 'Software Engineer',
    kind: 'Contract, then Internship · Krungsri group',
    period: 'Apr 2023 — Feb 2024',
    points: [
      'Developed features for a Flutter mobile application and internal software solutions.',
      'Worked a full SDLC inside a real engineering team, following Clean Architecture and a modular project structure.',
      'The internship was extended into a contract.',
    ],
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'Scrum'],
  },
]

export type Project = {
  title: string
  context: string
  blurb: string
  metrics?: { value: string; label: string }[]
  tech: string[]
  link?: { href: string; label: string }
}

export const projects: Project[] = [
  {
    title: 'LINE Broadcast',
    context: 'Omnichannel chat platform · VICTORY WORK',
    blurb:
      'Campaign builder, audience targeting, scheduling and delivery tracking across nine LINE message types — gated against the official account quota so a campaign can never oversend.',
    metrics: [
      { value: '9', label: 'message types' },
      { value: '100%', label: 'quota-safe sends' },
    ],
    tech: ['Vue', 'Nuxt', 'Strapi', 'PostgreSQL', 'BullMQ', 'LINE Messaging API'],
  },
  {
    title: 'Inbound pipeline, rebuilt',
    context: 'Load testing with k6 · VICTORY WORK',
    blurb:
      'The queue never drained under load. Profiling showed notification delivery recomputing an entire unread count per message. Swapping full-table recounts for indexed aggregates and an in-memory bump cache fixed it — no extra servers.',
    metrics: [
      { value: '5s → 150ms', label: 'notification job' },
      { value: '639 → 211ms', label: 'HTTP p95' },
      { value: '~12s', label: 'to drain a 2-min burst' },
    ],
    tech: ['k6', 'PostgreSQL', 'Redis', 'BullMQ', 'Node.js'],
  },
  {
    title: 'A-MED CARE PLUS',
    context: 'Hospital information system · VICTORY WORK',
    blurb:
      'A progressive web app for a healthcare provider: patient profile management, administrator tooling, and a middleware layer that keeps external clinical APIs and the platform in sync.',
    tech: ['Vue', 'Nuxt', 'PWA', 'Middleware', 'REST'],
  },
  {
    title: 'Consent Management',
    context: 'Freelance · privacy / PDPA compliance',
    blurb:
      'Calendar scheduling, a dynamic form builder, a ROPA module, cookie consent banner, pivot-table analysis and node-edge data-flow visualisation — the whole surface a privacy team needs.',
    tech: ['SurveyJS', 'Cytoscape.js', 'Chart.js', 'ApexCharts', 'Syncfusion'],
  },
  {
    title: 'Digital Government platform',
    context: 'DGA Thailand · VICTORY WORK',
    blurb:
      'Administrator management and case management for a Thai Digital Government Agency platform, with real-time notifications over Socket.io.',
    tech: ['Vue', 'Nuxt', 'Strapi', 'Socket.io'],
    link: {
      href: 'https://www.dga.or.th/document-sharing/dga-news/93346/',
      label: 'Published on dga.or.th',
    },
  },
  {
    title: 'Media storage on Cloudflare R2',
    context: 'Omnichannel chat platform · VICTORY WORK',
    blurb:
      'LINE fetches broadcast media lazily — sometimes days after a send — so a 15-minute signed URL breaks the image. Moved storage to a private R2 bucket behind a streaming proxy that keeps the URL durable without making the bucket public.',
    tech: ['Cloudflare R2', 'S3 API', 'Node.js', 'Streaming'],
  },
]

export const stack = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Go', 'Dart', 'SQL'],
  },
  {
    group: 'Front end',
    items: ['React', 'Vue', 'Nuxt', 'Next.js', 'Quasar', 'Flutter'],
  },
  {
    group: 'Back end',
    items: ['Node.js', 'NestJS', 'Strapi', 'Koa', 'Express', 'Prisma', 'Knex'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Supabase'],
  },
  {
    group: 'Systems',
    items: ['BullMQ', 'Socket.IO', 'k6', 'Docker', 'Cloudflare R2', 'S3'],
  },
  {
    group: 'Integrations',
    items: ['Stripe', 'Omise', 'LINE Messaging API', 'Chrome Extensions'],
  },
]
