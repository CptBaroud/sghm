export const HELLOASSO_LOISIR_URL = 'https://www.helloasso.com/associations/section-guerandaise-halterophilie-musculation/adhesions/adhesion-sghm-2026-2027-licence-loisir'

// Photo cards linking the activity pages ("Voir aussi" on activity pages)
export const PAGE_CARDS = {
  '/musculation': { title: 'Musculation loisir', photo: '/gallery/24.jpg' },
  '/force-athletique': { title: 'Force athlétique', photo: '/squat.jpg' },
  '/coaching': { title: 'Coach & cours collectif', photo: '/coach-marc.jpg' }
}

export type PageCardHref = keyof typeof PAGE_CARDS

// Coach Marc Yeurc'h's weekly slots (coaching page and homepage)
export const COACH_SLOTS = [
  { day: 'Mardi', hours: '17 h – 19 h', label: 'Accompagnement sur le plateau de musculation' },
  { day: 'Mardi', hours: '19 h – 20 h', label: 'Cours collectif de Cross Training, tous âges et tous niveaux', highlight: true },
  { day: 'Mercredi', hours: '17 h – 19 h 30', label: 'Accompagnement sur le plateau de musculation' }
]
