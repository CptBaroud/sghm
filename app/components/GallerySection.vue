<script setup lang="ts">
// Order matters: 2-row grid, smalls/wides come in pairs so each column fills. Landscape (24, 25, 27) get big/wide tiles.
const photos: { n: string, alt: string, size: 'big' | 'wide' | 'tall' | 'small' }[] = [
  { n: '24', alt: "Espace haltères et bancs inclinables de la salle SGHM, banderole SGHM Force Athlétique au fond", size: 'big' },
  { n: '01', alt: "Adhérents à l'entraînement entre les racks de la salle de musculation SGHM à Guérande", size: 'tall' },
  { n: '03', alt: "Banc de développé couché et racks à squat de la salle de musculation SGHM", size: 'small' },
  { n: '05', alt: "Adhérent au développé couché avec un pareur, salle de musculation SGHM", size: 'small' },
  { n: '27', alt: "Râteliers d'haltères et bancs réglables rouges de la salle SGHM à Guérande", size: 'wide' },
  { n: '25', alt: "Rangée d'haltères sous la banderole SGHM Force Athlétique, salle des sports Jean Ménager", size: 'wide' },
  { n: '06', alt: "Adhérents échangeant entre deux séries à la salle de musculation SGHM", size: 'tall' },
  { n: '07', alt: "Développé couché à la barre, adhérents de la salle SGHM à Guérande", size: 'small' },
  { n: '15', alt: "Espace cardio et machines guidées de la salle de musculation SGHM", size: 'small' },
  { n: '18', alt: "Cages à squat et disques de compétition de la salle SGHM", size: 'tall' },
  { n: '20', alt: "Soulevé de terre sur le plateau en bois de la salle de force athlétique SGHM", size: 'small' },
  { n: '23', alt: "Séance de développé couché entre adhérents à la salle SGHM de Guérande", size: 'small' },
  { n: '26', alt: "Râtelier d'haltères, bancs et miroir de la salle de musculation SGHM", size: 'tall' },
]

const section = ref<HTMLElement>()
const track = ref<HTMLElement>()
const distance = ref(0)
const offset = ref(0)

// Reduced motion gets native swipe (distance 0 = static mode).
let animate: MediaQueryList | undefined

function measure() {
  if (!track.value) return
  distance.value = animate?.matches
    ? Math.max(0, track.value.scrollWidth - window.innerWidth)
    : 0
  update()
}

function update() {
  if (!section.value) return
  const top = -section.value.getBoundingClientRect().top
  offset.value = Math.min(distance.value, Math.max(0, top))
}

onMounted(() => {
  animate = window.matchMedia('(prefers-reduced-motion: no-preference)')
  measure()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', measure)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', measure)
})
</script>

<template>
  <section
    id="galerie"
    ref="section"
    class="gallery"
    :style="{ height: distance ? `calc(100svh + ${distance}px)` : undefined }"
    aria-label="Galerie photos de la salle"
  >
    <div class="gallery__sticky" :class="{ 'gallery__sticky--static': !distance }">
      <div class="gallery__head container">
        <h2 class="section__title">La salle en images</h2>
      </div>
      <div
        ref="track"
        class="gallery__track"
        :style="{ transform: `translate3d(${-offset}px, 0, 0)` }"
      >
        <figure
          v-for="photo in photos"
          :key="photo.n"
          class="gallery__item"
          :class="`gallery__item--${photo.size}`"
        >
          <img :src="`/gallery/${photo.n}.jpg`" :alt="photo.alt" loading="lazy" decoding="async">
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  position: relative;
  background: var(--bg-base);
}

.gallery__sticky {
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-5);
}

/* reduced motion: native swipe with snap */
.gallery__sticky--static {
  position: static;
  height: auto;
  padding: var(--space-8) 0;
}

.gallery__sticky--static .gallery__track {
  --cell: min(calc((100svh - 220px) / 2), 55vw, 340px);
  width: auto;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--container-pad);
  scrollbar-width: none;
  overscroll-behavior-x: contain;
}

.gallery__sticky--static .gallery__item {
  scroll-snap-align: start;
}

.gallery__head .section__title {
  margin-top: var(--space-2);
}

.gallery__track {
  --cell: min(calc((100svh - 220px) / 2), 340px);
  display: grid;
  grid-template-rows: repeat(2, var(--cell));
  grid-auto-columns: calc(var(--cell) * 0.8);
  grid-auto-flow: column dense;
  gap: var(--space-3);
  width: max-content;
  padding: 0 var(--container-pad);
  will-change: transform;
}

.gallery__item {
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--surface-card);
}

.gallery__item--wide { grid-column: span 2; }
.gallery__item--tall { grid-row: span 2; }
.gallery__item--big { grid-column: span 2; grid-row: span 2; }

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease;
}

@media (hover: hover) {
  .gallery__item:hover img {
    transform: scale(1.04);
  }
}
</style>
