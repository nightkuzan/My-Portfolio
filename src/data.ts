/**
 * The facts that do not change with language: names, links, technology,
 * and the numbers themselves.
 *
 * Everything a reader actually reads lives in src/i18n and is looked up by
 * the `id` on each entry here. Splitting it this way means a translation
 * can restate a metric's label but never its value, and adding a language
 * cannot accidentally fork the list of jobs or reorder the projects.
 */

export const profile = {
  name: 'Aekkarit Surit',
  handle: 'nightkuzan',
  company: 'Mexty',
  email: 'aekkarit12@gmail.com',
  github: 'https://github.com/nightkuzan',
  linkedin: 'https://www.linkedin.com/in/aekkarit-surit-07103b257',
}

export const stats = [
  { id: 'years', value: '3+' },
  { id: 'industries', value: '4' },
  { id: 'p95', value: '639→211' },
  { id: 'drain', value: '12s' },
] as const

export type Role = {
  id: string
  company: string
  current?: boolean
  tech: string[]
}

export const roles: Role[] = [
  {
    id: 'mexty',
    company: 'Mexty',
    current: true,
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Omise', 'Chrome Extensions'],
  },
  /*
   * VICTORY WORK is two entries, not one.
   *
   * As a single Mar 2024 — Present run it sat straight through the H LAB
   * contract, and a freelance engagement overlapping a contract role is
   * the kind of thing a reader stops to work out. Split around it, the
   * timeline needs no explaining. It still overlaps Mexty, which is
   * ordinary for freelance alongside a full-time job.
   */
  {
    id: 'victory',
    company: 'VICTORY WORK CO., LTD',
    current: true,
    tech: ['Vue', 'Nuxt', 'Strapi', 'PostgreSQL', 'Redis', 'Socket.IO', 'k6', 'Cloudflare R2'],
  },
  {
    id: 'hlab',
    company: 'H LAB Co., Ltd.',
    tech: ['Go', 'TypeScript', 'Prisma', 'Jasper Reports'],
  },
  {
    id: 'victoryEarly',
    company: 'VICTORY WORK CO., LTD',
    tech: ['Vue', 'Nuxt', 'PWA', 'Middleware', 'REST'],
  },
  {
    id: 'ayudhya',
    company: 'Ayudhya Capital Services',
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'Scrum'],
  },
]

export type Project = {
  id: string
  tech: string[]
  metrics?: { id: string; value: string }[]
  href?: string
}

export const projects: Project[] = [
  {
    id: 'broadcast',
    metrics: [
      { id: 'types', value: '9' },
      { id: 'quota', value: '100%' },
    ],
    tech: ['Vue', 'Nuxt', 'Strapi', 'PostgreSQL', 'BullMQ', 'LINE Messaging API'],
  },
  {
    id: 'pipeline',
    metrics: [
      { id: 'job', value: '5s → 150ms' },
      { id: 'p95', value: '639 → 211ms' },
      { id: 'drain', value: '~12s' },
    ],
    tech: ['k6', 'PostgreSQL', 'Redis', 'BullMQ', 'Node.js'],
  },
  {
    id: 'amed',
    tech: ['Vue', 'Nuxt', 'PWA', 'Middleware', 'REST'],
  },
  {
    id: 'consent',
    tech: ['SurveyJS', 'Cytoscape.js', 'Chart.js', 'ApexCharts', 'Syncfusion'],
  },
  {
    id: 'dga',
    tech: ['Vue', 'Nuxt', 'Strapi', 'Socket.io'],
    href: 'https://www.dga.or.th/document-sharing/dga-news/93346/',
  },
  {
    id: 'r2',
    tech: ['Cloudflare R2', 'S3 API', 'Node.js', 'Streaming'],
  },
]

export const stack = [
  { id: 'languages', items: ['TypeScript', 'JavaScript', 'Go', 'Dart', 'SQL'] },
  { id: 'frontend', items: ['React', 'Vue', 'Nuxt', 'Next.js', 'Quasar', 'Flutter'] },
  {
    id: 'backend',
    items: ['Node.js', 'NestJS', 'Strapi', 'Koa', 'Express', 'Prisma', 'Knex'],
  },
  { id: 'data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Supabase'] },
  { id: 'systems', items: ['BullMQ', 'Socket.IO', 'k6', 'Docker', 'Cloudflare R2', 'S3'] },
  {
    id: 'integrations',
    items: ['Stripe', 'Omise', 'LINE Messaging API', 'Chrome Extensions'],
  },
]
