export const HELLOASSO_LOISIR_URL = 'https://www.helloasso.com/associations/section-guerandaise-halterophilie-musculation/adhesions/adhesion-sghm-2026-2027-licence-loisir'

// Photo cards linking the activity pages (home page and "Voir aussi")
export const PAGE_CARDS = {
  '/musculation': { title: 'Musculation loisir', photo: '/gallery/24.jpg' },
  '/force-athletique': { title: 'Force athlétique', photo: '/squat.jpg' },
  '/coaching': { title: 'Coach & cours collectif', photo: '/coach-marc.jpg' },
  '/horaires-tarifs': { title: 'Horaires & tarifs', photo: '/gallery/26.jpg' }
}

export type PageCardHref = keyof typeof PAGE_CARDS
