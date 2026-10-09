<script setup lang="ts">
const slides = [
  {
    src: '/hero@1x.png',
    srcset: '/hero@1x.png 1x, /hero@2x.jpg 2x',
    alt: 'Athlète en squat sur le plateau de la salle de musculation SGHM à la Salle des Sports J.Ménager, Guérande'
  },
  {
    src: '/group.jpeg',
    srcset: '',
    alt: 'Groupe d\'adhérents du club SGHM réunis à la salle de musculation'
  }
]

const activeSlide = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion) {
    timer = setInterval(() => {
      activeSlide.value = (activeSlide.value + 1) % slides.length
    }, 5666)
  }
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__bg">
      <img
        v-for="(slide, index) in slides"
        :key="slide.src"
        :src="slide.src"
        :srcset="slide.srcset || undefined"
        :alt="slide.alt"
        :aria-hidden="index === activeSlide ? undefined : 'true'"
        class="hero__bg-photo"
        :class="{ 'hero__bg-photo--active': index === activeSlide }"
      />
      <div class="hero__bg-scrim" aria-hidden="true" />
    </div>

    <div class="container hero__container">
      <div class="hero__card">
        <h1 class="hero__title">
          Salle de Musculation <br><span class="hero__title-accent">à Guérande</span>
        </h1>

        <p class="hero__subtitle">
          Depuis 1991, débutants et confirmés se retrouvent ici pour s'entraîner. Une salle de musculation associative où l'on progresse ensemble, entre conseils et bonne humeur, au sein d'un club affilié à la FFForce.
        </p>

        <div class="hero__ctas">
          <a href="#contact" class="btn btn-primary">
            Nous rencontrer
            <IconGlyph name="arrow-right" :size="15" />
          </a>
          <a href="#club" class="btn btn-secondary">
            Découvrir le club
            <IconGlyph name="chevron-down" :size="15" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: calc(var(--space-7) * 2.25) 0 var(--space-5);
  overflow: hidden;
  background: var(--color-navy-2);
}

.hero__bg {
  position: absolute;
  inset: 0;
}

.hero__bg-photo {
  position: absolute;
  /* same box as the old scale(1.5) from top 20%, but capped to the hero width so the left fade stays on screen */
  top: -5%;
  right: 0;
  height: 150%;
  width: auto;
  max-width: 100%;
  object-fit: cover;
  object-position: right center;
  opacity: 0;
  transition: opacity 666ms ease;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 25%,
    black 55%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 25%,
    black 55%
  );
}

.hero__bg-photo--active {
  opacity: 1;
}

.hero__bg-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      var(--color-navy-2) 0%,
      rgba(11, 11, 14, 0.75) 25%,
      rgba(11, 11, 14, 0.4) 45%,
      rgba(11, 11, 14, 0.1) 65%,
      rgba(11, 11, 14, 0) 80%
    ),
    linear-gradient(180deg, rgba(11, 11, 14, 0.15) 0%, rgba(11, 11, 14, 0) 30%, rgba(11, 11, 14, 0.35) 100%);
}

@media (max-width: 767px) {
  .hero__bg-photo {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    /* every slide gets the portrait frame the scrim is built for */
    aspect-ratio: 1080 / 1350;
    object-position: center;
    transform: scale(1.15) translateX(-4%);
    transform-origin: center;
    mask-image: none;
    -webkit-mask-image: none;
  }

  .hero__bg-scrim {
    inset: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    aspect-ratio: 1080 / 1350;
    transform: scale(1.15) translateX(-4%);
    transform-origin: center;
    background: linear-gradient(
      180deg,
      rgba(11, 11, 14, 0.6) 0%,
      rgba(11, 11, 14, 0.1) 40%,
      rgba(11, 11, 14, 0.5) 75%,
      var(--color-navy-2) 100%
    );
  }

  .hero__badge {
    background: rgba(11, 11, 14, 0.6);
    border-color: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
}

.hero__container {
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding-top: var(--space-8);
}

.hero__card {
  width: 100%;
  max-width: 560px;
  padding: 0;
  text-align: left;
}

.hero__badge {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.18);
  color: var(--color-steel-300);
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-red);
  flex-shrink: 0;
}

.hero__title {
  margin-top: var(--space-5);
  font-size: 36px;
  color: var(--color-white);
}

.hero__title-accent {
  color: var(--color-red);
}

.hero__subtitle {
  margin: var(--space-4) 0 0;
  max-width: 46ch;
  font-size: 16px;
  color: var(--color-steel-300);
}

.hero__ctas {
  margin-top: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--space-3);
}

.hero__ctas .btn-primary {
  border-radius: var(--radius-pill);
}

.hero__ctas .btn-secondary {
  border-radius: var(--radius-pill);
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.28);
}

@media (min-width: 768px) {
  .hero {
    padding: calc(var(--space-8) * 2.25) 0 calc(var(--space-9) * 2.25);
  }

  .hero__title {
    font-size: 52px;
    letter-spacing: -0.02em;
  }
}
</style>
