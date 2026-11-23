// Scroll entrance: headings, text, pictures and cards rise in as their section enters the screen.
// Only runs in the browser and never with reduced motion, so content is never hidden without it.
const TARGETS = 'main h1, main h2, main h3, main p, main figure, main img, main .card, main .btn, main li'
// The gallery runs its own pinned scroll; the header photo of a page is already on screen
const SKIP = '.gallery, .activity-hero__photo, .hero__bg, .results__table, .ranking__list'

export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let pending: HTMLElement[] = []
  let frame = 0

  // Everything whose top is above the bottom of the screen is shown, so a fast scroll or an
  // anchor jump never leaves anything hidden above the reader
  function check() {
    frame = 0
    const line = window.innerHeight * 0.92
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top >= line) return true
      el.classList.add('reveal--in')
      return false
    })
  }

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(check)
  }

  function setup() {
    pending = []
    for (const section of document.querySelectorAll('main section')) {
      // outermost matches only, so a card and its text rise once, not twice
      const items = [...section.querySelectorAll<HTMLElement>(TARGETS)].filter(
        (el) => !el.closest(SKIP) && !el.parentElement?.closest(TARGETS) && !el.classList.contains('reveal--in')
      )
      items.forEach((el, i) => {
        el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 70}ms`)
        el.classList.add('reveal')
      })
      pending.push(...items)
    }
    schedule()
  }

  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  nuxtApp.hook('page:finish', () => requestAnimationFrame(setup))
})
