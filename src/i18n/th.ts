import type { Dict } from './en'

/**
 * Thai copy.
 *
 * Written rather than translated: Thai developer writing keeps job titles,
 * frameworks and metric names in English, so forcing them into Thai would
 * read as machine output. What is translated is the prose around them.
 */
export const th: Dict = {
  code: 'th',
  label: 'ไทย',
  htmlLang: 'th',

  meta: {
    // Name left in Latin script: transliterating someone's own name is a
    // guess, and this one is spelled the same way on their CV and LinkedIn.
    title: 'Aekkarit Surit — Full Stack Developer',
    description:
      'Full Stack Developer ที่ทำเว็บโปรดักต์ตั้งแต่ต้นจนจบ — Vue/Nuxt และ React บน Node.js โดยให้น้ำหนักกับระบบที่อยู่ข้างใต้: คิว อินเด็กซ์ และทราฟฟิกจริง',
  },

  nav: {
    about: 'เกี่ยวกับ',
    work: 'ประสบการณ์',
    projects: 'ผลงาน',
    stack: 'เทคโนโลยี',
    contact: 'ติดต่อ',
  },

  gate: {
    enter: 'เข้าชม',
    role: 'Full Stack Developer',
    sound: 'เปิดเสียงจะได้อารมณ์กว่า',
  },

  sound: {
    on: 'เปิดเสียง',
    off: 'ปิดเสียง',
  },

  hero: {
    role: 'Full Stack Developer',
    location: 'เชียงใหม่ ประเทศไทย',
    titleA: 'ผมสร้างฟีเจอร์โปรดักต์',
    titleB: { pre: 'และ', em: 'ระบบ', post: 'ที่อยู่ข้างใต้' },
    intro:
      'Full Stack Developer ประสบการณ์ 3 ปีขึ้นไป ทำเว็บโปรดักต์ตั้งแต่ต้นจนจบ — หน้าบ้าน Vue/Nuxt และ React ต่อกับหลังบ้าน Node.js บน PostgreSQL, MySQL และ MongoDB เคยทำงานทั้งสายการแพทย์ ธนาคารและสินเชื่อผู้บริโภค อีเลิร์นนิง และระบบแชตลูกค้าแบบ omnichannel',
    seeWork: 'ดูผลงาน',
    scroll: 'เลื่อนเพื่อดำลง',
  },

  dive: [
    'ส่วนใหญ่ของโปรดักต์ คือส่วนที่คุณไม่เคยเห็น',
    'คิวที่ตัน อินเด็กซ์ที่ไม่เคยถูกสร้าง',
    'นั่นคือชั้นที่ผมทำงานอยู่',
  ],

  sections: {
    about: 'เกี่ยวกับ',
    work: 'ประสบการณ์ทำงาน',
    projects: 'ผลงานที่เลือกมา',
    stack: 'เทคโนโลยีที่ใช้',
  },

  about: {
    body: 'ส่วนที่ผมชอบที่สุดคือชั้นที่ไม่มีใครเห็น: คิวที่ตัน อินเด็กซ์ที่ไม่เคยถูกสร้าง คิวรีที่วิ่งสี่ร้อยรอบแทนที่จะรอบเดียว ผมวัดก่อนแล้วค่อยปรับ และอยากทิ้งโค้ดที่คนถัดไปรับช่วงต่อได้ง่าย',
  },

  stats: {
    years: 'ปีที่ส่งงานจริง',
    industries: 'อุตสาหกรรม',
    p95: 'ms p95 จากแก้จุดเดียว',
    drain: 'เคลียร์คิว 2 นาทีจนหมด',
  },

  // Not 'ปัจจุบัน': the period already ends in that word, and the badge sat
  // right beside it reading "ปัจจุบัน ปัจจุบัน".
  current: 'ทำอยู่',

  roles: {
    mexty: {
      title: 'Full Stack Developer',
      kind: 'พนักงานประจำ · ไฮบริด',
      period: 'ต.ค. 2025 — ปัจจุบัน',
      points: [
        'สร้างคอนเทนต์การเรียนแบบอินเทอร์แอกทีฟเป็น React component สำหรับตัวสร้างคอร์สและโปรแกรม',
        'ทำระบบชำระเงินและการเรียกเก็บแบบสมัครสมาชิกด้วย Stripe และ Omise',
        'ออกแบบโครงสร้างข้อมูลและ API บน MongoDB / Mongoose ODM',
        'ทำ Chrome extension ที่ต่อยอดแพลตฟอร์มเข้าไปในเบราว์เซอร์',
      ],
    },
    victory: {
      title: 'Full Stack Developer',
      kind: 'ฟรีแลนซ์ · รีโมต',
      period: 'พ.ย. 2025 — ปัจจุบัน',
      points: [
        'แพลตฟอร์มแชต omnichannel — ทำฟีเจอร์ LINE Broadcast ตั้งแต่ต้นจนจบ: ตัวสร้างแคมเปญ เลือกกลุ่มเป้าหมาย ตั้งเวลา และส่งครบทั้งเก้าชนิดข้อความของ LINE',
        'แก้ไปป์ไลน์ขาเข้าจากที่ระบายคิวไม่หมดเลย ให้เคลียร์เบิร์สต์ 120 ข้อความ/วินาที นาน 2 นาที ได้ใน ~12 วินาที และลด HTTP p95 จาก 639 ms เหลือ 211 ms',
        'ย้ายสื่อของ broadcast ไปบัคเก็ต Cloudflare R2 แบบส่วนตัวหลัง proxy ที่สตรีมไฟล์ออกมา URL ที่ LINE มาดึงอีกหลายวันให้หลังจึงยังใช้ได้',
      ],
    },
    hlab: {
      title: 'Full Stack Developer',
      kind: 'สัญญาจ้าง · ไฮบริด',
      period: 'ก.ค. 2025 — ต.ค. 2025',
      points: [
        'พัฒนาเซอร์วิสหลังบ้านด้วย Go และ TypeScript สำหรับระบบธุรกิจภายใน',
        'ออกแบบโมเดลและเขียนคิวรีฐานข้อมูลผ่าน Prisma ORM',
        'ทำระบบรายงานและการสร้างเอกสารด้วย Jasper Reports',
      ],
    },
    victoryEarly: {
      title: 'Full Stack Developer',
      kind: 'ฟรีแลนซ์ · รีโมต',
      period: 'มี.ค. 2024 — มิ.ย. 2025',
      points: [
        'A-MED CARE PLUS — ระบบสารสนเทศโรงพยาบาลในรูปแบบ PWA: จัดการข้อมูลผู้ป่วย จัดการผู้ดูแลระบบ และชั้น middleware ที่คุยกับ API ภายนอก',
        'Kepler — PWA ที่มีฟีดข่าวแบบไดนามิก ฟีดโปรไฟล์เฉพาะบุคคล ล็อกอินที่ปลอดภัย และการตั้งค่าที่ปรับได้',
        'แพลตฟอร์มรัฐบาลดิจิทัล — ระบบจัดการผู้ดูแลและจัดการเคสของสำนักงานพัฒนารัฐบาลดิจิทัล พร้อมการแจ้งเตือนแบบเรียลไทม์ผ่าน Socket.io',
      ],
    },
    ayudhya: {
      title: 'Software Engineer',
      kind: 'สัญญาจ้าง ต่อจากฝึกงาน · เครือกรุงศรี',
      period: 'เม.ย. 2023 — ก.พ. 2024',
      points: [
        'พัฒนาฟีเจอร์ของแอปมือถือ Flutter และซอฟต์แวร์ที่ใช้ภายในองค์กร',
        'ทำงานครบวงจร SDLC ในทีมวิศวกรรมจริง ตามแนวทาง Clean Architecture และโครงสร้างโปรเจกต์แบบโมดูล',
        'ได้ต่อเป็นสัญญาจ้างหลังจบการฝึกงาน',
      ],
    },
  },

  projects: {
    broadcast: {
      title: 'LINE Broadcast',
      context: 'แพลตฟอร์มแชต omnichannel · VICTORY WORK',
      blurb:
        'ตัวสร้างแคมเปญ เลือกกลุ่มเป้าหมาย ตั้งเวลา และติดตามผลการส่ง ครบทั้งเก้าชนิดข้อความของ LINE — มีการกันโควตาของ Official Account ไว้ แคมเปญจึงส่งเกินไม่ได้',
      metrics: { types: 'ชนิดข้อความ', quota: 'ส่งไม่เกินโควตา' },
    },
    pipeline: {
      title: 'รื้อไปป์ไลน์ขาเข้าใหม่',
      context: 'ทดสอบโหลดด้วย k6 · VICTORY WORK',
      blurb:
        'คิวระบายไม่หมดเมื่อโหลดสูง โปรไฟล์แล้วพบว่าการส่งการแจ้งเตือนนับยอดที่ยังไม่อ่านใหม่ทั้งหมดในทุกข้อความ เปลี่ยนจากการนับทั้งตารางเป็น aggregate ที่มีอินเด็กซ์ บวกแคชนับเพิ่มในหน่วยความจำ ก็จบ — ไม่ต้องเพิ่มเซิร์ฟเวอร์',
      metrics: { job: 'งานแจ้งเตือน', p95: 'HTTP p95', drain: 'เคลียร์เบิร์สต์ 2 นาที' },
    },
    amed: {
      title: 'A-MED CARE PLUS',
      context: 'ระบบสารสนเทศโรงพยาบาล · VICTORY WORK',
      blurb:
        'Progressive web app สำหรับผู้ให้บริการด้านสุขภาพ: จัดการข้อมูลผู้ป่วย เครื่องมือสำหรับผู้ดูแลระบบ และชั้น middleware ที่ทำให้ API ทางคลินิกภายนอกกับแพลตฟอร์มตรงกันตลอด',
    },
    consent: {
      title: 'ระบบจัดการความยินยอม',
      context: 'ฟรีแลนซ์ · ความเป็นส่วนตัว / PDPA',
      blurb:
        'ปฏิทินนัดหมาย ตัวสร้างฟอร์มแบบไดนามิก โมดูล ROPA แบนเนอร์ขอความยินยอมคุกกี้ วิเคราะห์ด้วย pivot table และผังการไหลของข้อมูลแบบ node-edge — ครบทุกอย่างที่ทีมความเป็นส่วนตัวต้องใช้',
    },
    dga: {
      title: 'แพลตฟอร์มรัฐบาลดิจิทัล',
      context: 'DGA ประเทศไทย · VICTORY WORK',
      blurb:
        'ระบบจัดการผู้ดูแลและจัดการเคสสำหรับแพลตฟอร์มของสำนักงานพัฒนารัฐบาลดิจิทัล พร้อมการแจ้งเตือนแบบเรียลไทม์ผ่าน Socket.io',
      link: 'เผยแพร่บน dga.or.th',
    },
    r2: {
      title: 'ที่เก็บสื่อบน Cloudflare R2',
      context: 'แพลตฟอร์มแชต omnichannel · VICTORY WORK',
      blurb:
        'LINE ดึงสื่อของ broadcast แบบ lazy บางครั้งหลังส่งไปแล้วหลายวัน signed URL อายุ 15 นาทีจึงทำให้รูปพัง เลยย้ายที่เก็บไปบัคเก็ต R2 แบบส่วนตัว หลัง proxy ที่สตรีมไฟล์ออกมา ทำให้ URL อยู่ได้ยาวโดยไม่ต้องเปิดบัคเก็ตเป็นสาธารณะ',
    },
  },

  stackGroups: {
    languages: 'ภาษา',
    frontend: 'ฝั่งหน้าบ้าน',
    backend: 'ฝั่งหลังบ้าน',
    data: 'ข้อมูล',
    systems: 'ระบบ',
    integrations: 'การเชื่อมต่อ',
  },

  contact: {
    titleA: 'มีอะไร',
    titleB: 'ที่น่าสร้างไหม?',
    sub: 'เปิดรับงานประจำสาย full-stack และงานฟรีแลนซ์ — โดยเฉพาะงานที่หลังบ้านต้องรับทราฟฟิกจริงให้อยู่',
  },

  footer: {
    built: 'React · three.js · สายน้ำแห่งดวงดาว',
  },
}
