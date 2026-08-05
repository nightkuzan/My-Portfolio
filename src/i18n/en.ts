/**
 * English copy. This file is the shape every other language has to match:
 * `Dict` is derived from it, so a missing or misspelled key in a
 * translation is a build error rather than a blank space on the page.
 *
 * Only prose lives here. Company names, technology chips, URLs and the
 * numbers in the stats are language-neutral facts and stay in data.ts,
 * keyed by id — that way a translation can never quietly disagree with
 * the English about what the metric actually was.
 */
export const en = {
  code: 'en',
  /** Shown in the language switcher, always in its own language. */
  label: 'EN',
  /** The BCP-47 tag that goes on <html lang>. */
  htmlLang: 'en',

  meta: {
    title: 'Aekkarit Surit — Full Stack Developer',
    description:
      'Full Stack Developer building web products end to end — Vue/Nuxt and React over Node.js, with a bias for the systems underneath: queues, indexes and real traffic.',
  },

  nav: {
    about: 'About',
    work: 'Work',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
  },

  gate: {
    enter: 'Enter',
    role: 'Full Stack Developer',
    sound: 'Best with sound',
  },

  sound: {
    on: 'Turn sound on',
    off: 'Turn sound off',
  },

  hero: {
    role: 'Full Stack Developer',
    location: 'Chiang Mai, Thailand',
    titleA: 'I build product features',
    titleB: { pre: 'and the ', em: 'systems', post: ' underneath.' },
    intro:
      "Full Stack Developer with 3+ years building web products end to end — Vue/Nuxt and React front ends over Node.js back ends on PostgreSQL, MySQL and MongoDB. I've worked across healthcare, banking and consumer finance, e-learning, and omnichannel customer messaging.",
    seeWork: 'See the work',
    scroll: 'Scroll to dive',
  },

  dive: [
    'Most of a product is the part you never see.',
    'Queues that back up. Indexes that were never created.',
    'That is the layer I work in.',
  ],

  sections: {
    about: 'About',
    work: "Where I've worked",
    projects: 'Selected work',
    stack: 'Stack',
  },

  about: {
    body: 'The part I enjoy most is the layer nobody sees: the queue that backs up, the index that was never created, the query that runs four hundred times instead of once. I measure before I optimise, and I would rather leave code that is easy for the next person to pick up.',
  },

  stats: {
    years: 'years shipping',
    industries: 'industries',
    p95: 'ms p95, one fix',
    drain: 'to drain a 2-min burst',
  },

  current: 'current',

  roles: {
    mexty: {
      title: 'Full Stack Developer',
      kind: 'Full-time · Hybrid',
      period: 'Oct 2025 — Present',
      points: [
        'Build interactive learning content as React components for the course and program builder.',
        'Implemented payments and subscription billing with Stripe and Omise.',
        'Developed data models and APIs on MongoDB / Mongoose ODM.',
        'Built a Chrome extension that extends the platform into the browser.',
      ],
    },
    victory: {
      title: 'Full Stack Developer',
      kind: 'Freelance · Remote',
      period: 'Nov 2025 — Present',
      points: [
        'Omnichannel chat platform — built the LINE Broadcast feature end to end: campaign builder, audience targeting, scheduling and delivery across nine LINE message types.',
        'Took the inbound pipeline from never draining to clearing a 2-minute 120 msg/s burst in ~12 seconds, and cut HTTP p95 from 639 ms to 211 ms.',
        'Moved broadcast media to a private Cloudflare R2 bucket behind a streaming proxy, so the URLs LINE fetches days later still resolve.',
      ],
    },
    hlab: {
      title: 'Full Stack Developer',
      kind: 'Contract · Hybrid',
      period: 'Jul 2025 — Oct 2025',
      points: [
        'Built back-end services in Go and TypeScript for internal business systems.',
        'Modelled and queried the database through Prisma ORM.',
        'Implemented reporting and document generation with Jasper Reports.',
      ],
    },
    victoryEarly: {
      title: 'Full Stack Developer',
      kind: 'Freelance · Remote',
      period: 'Mar 2024 — Jun 2025',
      points: [
        'A-MED CARE PLUS — hospital information system as a PWA: patient profile management, administrator management, and a middleware layer talking to external APIs.',
        'Kepler — PWA with a dynamic news feed, personalised profile feed, secure login and configurable settings.',
        'Digital Government platform — administrator and case management for a Thai Digital Government Agency platform, with real-time notifications over Socket.io.',
      ],
    },
    ayudhya: {
      title: 'Software Engineer',
      kind: 'Contract, then Internship · Krungsri group',
      period: 'Apr 2023 — Feb 2024',
      points: [
        'Developed features for a Flutter mobile application and internal software solutions.',
        'Worked a full SDLC inside a real engineering team, following Clean Architecture and a modular project structure.',
        'The internship was extended into a contract.',
      ],
    },
  },

  projects: {
    broadcast: {
      title: 'LINE Broadcast',
      context: 'Omnichannel chat platform · VICTORY WORK',
      blurb:
        'Campaign builder, audience targeting, scheduling and delivery tracking across nine LINE message types — gated against the official account quota so a campaign can never oversend.',
      metrics: { types: 'message types', quota: 'quota-safe sends' },
    },
    pipeline: {
      title: 'Inbound pipeline, rebuilt',
      context: 'Load testing with k6 · VICTORY WORK',
      blurb:
        'The queue never drained under load. Profiling showed notification delivery recomputing an entire unread count per message. Swapping full-table recounts for indexed aggregates and an in-memory bump cache fixed it — no extra servers.',
      metrics: { job: 'notification job', p95: 'HTTP p95', drain: 'to drain a 2-min burst' },
    },
    amed: {
      title: 'A-MED CARE PLUS',
      context: 'Hospital information system · VICTORY WORK',
      blurb:
        'A progressive web app for a healthcare provider: patient profile management, administrator tooling, and a middleware layer that keeps external clinical APIs and the platform in sync.',
    },
    consent: {
      title: 'Consent Management',
      context: 'Freelance · privacy / PDPA compliance',
      blurb:
        'Calendar scheduling, a dynamic form builder, a ROPA module, cookie consent banner, pivot-table analysis and node-edge data-flow visualisation — the whole surface a privacy team needs.',
    },
    dga: {
      title: 'Digital Government platform',
      context: 'DGA Thailand · VICTORY WORK',
      blurb:
        'Administrator management and case management for a Thai Digital Government Agency platform, with real-time notifications over Socket.io.',
      link: 'Published on dga.or.th',
    },
    r2: {
      title: 'Media storage on Cloudflare R2',
      context: 'Omnichannel chat platform · VICTORY WORK',
      blurb:
        'LINE fetches broadcast media lazily — sometimes days after a send — so a 15-minute signed URL breaks the image. Moved storage to a private R2 bucket behind a streaming proxy that keeps the URL durable without making the bucket public.',
    },
  },

  stackGroups: {
    languages: 'Languages',
    frontend: 'Front end',
    backend: 'Back end',
    data: 'Data',
    systems: 'Systems',
    integrations: 'Integrations',
  },

  contact: {
    titleA: 'Got something',
    titleB: 'worth building?',
    sub: 'Open to full-stack roles and freelance work — especially anything where the back end has to hold up under real traffic.',
  },

  footer: {
    built: 'React · three.js · a river of stars',
  },
}

// Deliberately not `as const`: the literal types that would produce make
// `Dict` demand the *same words* from every translation.
export type Dict = typeof en
