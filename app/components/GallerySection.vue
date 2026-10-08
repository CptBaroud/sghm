<script setup lang="ts">
// Photos in /public/gallery, deduped from "Photo salle SGHM". Landscape ones get wide/big tiles.
const landscape = new Set([8, 9, 10, 22, 24, 25, 27, 28])

const photos = Array.from({ length: 28 }, (_, i) => {
  const n = i + 1
  let size: 'big' | 'wide' | 'tall' | 'small'
  if (landscape.has(n)) size = n % 3 === 0 ? 'big' : 'wide'
  else size = n % 3 === 0 ? 'tall' : 'small'
  return { src: `/gallery/${String(n).padStart(2, '0')}.jpg`, size }
})

const section = ref<HTMLElement>()
const track = ref<HTMLElement>()
const distance = ref(0)
const offset = ref(0)

function measure() {
  if (!track.value) return
  distance.value = Math.max(0, track.value.scrollWidth - window.innerWidth)
  update()
}

function update() {
  if (!section.value) return
  const top = -section.value.getBoundingClientRect().top
  offset.value = Math.min(distance.value, Math.max(0, top))
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
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
    :style="{ height: distance ? `calc(100vh + ${distance}px)` : undefined }"
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
          :key="photo.src"
          class="gallery__item"
          :class="`gallery__item--${photo.size}`"
        >
          <img :src="photo.src" alt="Salle de musculation SGHM à Guérande" loading="lazy" decoding="async">
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
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-5);
}

/* reduced motion / not measured: native horizontal scroll */
.gallery__sticky--static {
  position: static;
  height: auto;
  padding: var(--space-8) 0;
  overflow-x: auto;
}

.gallery__head .section__title {
  margin-top: var(--space-2);
}

.gallery__track {
  --cell: min(calc((100vh - 220px) / 2), 340px);
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

.gallery__item:hover img {
  transform: scale(1.04);
}
</style>
