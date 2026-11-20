<script setup lang="ts">
type Icon = 'discipline' | 'equipment' | 'community' | 'clock' | 'trophy' | 'flag' | 'heart' | 'calendar'

interface Link { label: string; href: string; external?: boolean }

defineProps<{
  eyebrow: string
  title: string
  accent: string
  lede: string
  photo: string
  photoAlt: string
  facts: { icon: Icon; label: string }[]
  features: { icon: Icon; title: string; text: string }[]
  splitTitle: string
  splitPhoto: string
  splitPhotoAlt?: string
  splitCaption?: { name: string; title: string }
  gallery: { src: string; caption: string }[]
  cta: { title: string; text: string; primary: Link; secondary?: Link }
  related: (keyof typeof pages)[]
}>()
</script>

<script lang="ts">
// "Voir aussi" cards, shared so each page only lists which ones it links to
const pages = {
  '/coaching': { eyebrow: 'Encadrement', title: 'Coach & cours collectif', text: 'Marc vous accompagne le mardi et le mercredi, Cross Training le mardi à 19 h.', photo: '/coach-marc.jpg' },
  '/musculation': { eyebrow: 'Pratique loisir', title: 'Musculation loisir', text: 'Créneaux libres 7j/7, à son rythme, dès 100 € par an.', photo: '/gallery/24.jpg' },
  '/force-athletique': { eyebrow: 'Pratique compétitive', title: 'Force athlétique', text: 'Squat, développé couché, soulevé de terre : la compétition FFForce.', photo: '/squat.jpg' },
  '/classement': { eyebrow: 'Compétition', title: 'Classement du club', text: 'Les meilleures performances des athlètes de la SGHM.', photo: '/bench.jpg' }
}
</script>

<template>
  <section class="activity-hero">
    <img :src="photo" :alt="photoAlt" class="activity-hero__photo" />
    <span class="activity-hero__scrim" aria-hidden="true" />
    <div class="container activity-hero__inner">
      <span class="section__eyebrow">{{ eyebrow }}</span>
      <h1 class="activity-hero__title">
        {{ title }} <span class="activity-hero__accent">{{ accent }}</span>
      </h1>
      <p class="activity-hero__lede">{{ lede }}</p>
      <ul class="activity-hero__facts">
        <li v-for="fact in facts" :key="fact.label" class="activity-hero__fact">
          <IconGlyph :name="fact.icon" :size="16" />
          {{ fact.label }}
        </li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="activity__features">
        <article v-for="feature in features" :key="feature.title" class="card activity__feature">
          <span class="activity__watermark" aria-hidden="true">
            <IconGlyph :name="feature.icon" :size="96" />
          </span>
          <span class="activity__icon"><IconGlyph :name="feature.icon" :size="20" /></span>
          <h2 class="activity__feature-title">{{ feature.title }}</h2>
          <p class="activity__feature-text">{{ feature.text }}</p>
        </article>
      </div>

      <div class="activity__split">
        <figure class="activity__split-figure">
          <div class="activity__split-photo">
            <img :src="splitPhoto" :alt="splitPhotoAlt ?? ''" />
          </div>
          <figcaption v-if="splitCaption" class="activity__split-caption">
            <span class="activity__split-name">{{ splitCaption.name }}</span>
            <span class="activity__split-role">{{ splitCaption.title }}</span>
          </figcaption>
        </figure>
        <div class="activity__split-body">
          <h2 class="section__title">{{ splitTitle }}</h2>
          <div class="activity__prose"><slot /></div>
        </div>
      </div>

      <slot name="extra" />

      <div class="activity__gallery">
        <figure v-for="item in gallery" :key="item.src" class="activity__gallery-item">
          <img :src="item.src" :alt="`${item.caption} à la salle de musculation SGHM de Guérande`" loading="lazy" />
          <figcaption>{{ item.caption }}</figcaption>
        </figure>
      </div>

      <div class="card activity__cta">
        <div>
          <h2 class="activity__cta-title">{{ cta.title }}</h2>
          <p>{{ cta.text }}</p>
        </div>
        <div class="activity__cta-actions">
          <a
            :href="cta.primary.href"
            :target="cta.primary.external ? '_blank' : undefined"
            :rel="cta.primary.external ? 'noopener' : undefined"
            class="btn btn-primary"
          >
            {{ cta.primary.label }}
            <IconGlyph name="arrow-right" :size="15" />
          </a>
          <a v-if="cta.secondary" :href="cta.secondary.href" class="btn btn-secondary">{{ cta.secondary.label }}</a>
        </div>
      </div>

      <nav class="activity__related" aria-label="Voir aussi">
        <h2 class="activity__related-title">Voir aussi</h2>
        <div class="activity__related-grid">
          <NuxtLink v-for="href in related" :key="href" :to="href" class="activity__related-card">
            <img :src="pages[href].photo" alt="" loading="lazy" class="activity__related-photo" />
            <span class="activity__related-scrim" aria-hidden="true" />
            <span class="activity__related-body">
              <span class="activity__related-eyebrow">{{ pages[href].eyebrow }}</span>
              <span class="activity__related-name">{{ pages[href].title }}</span>
              <span class="activity__related-text">{{ pages[href].text }}</span>
              <span class="activity__related-more">
                Découvrir
                <IconGlyph name="arrow-right" :size="15" />
              </span>
            </span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.activity-hero {
  position: relative;
  overflow: hidden;
  background: var(--color-navy-2);
  padding: var(--space-9) 0 var(--space-8);
  min-height: 460px;
  display: flex;
  align-items: flex-end;
}

.activity-hero__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}

.activity-hero__scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(11, 11, 14, 0.92) 0%, rgba(11, 11, 14, 0.6) 55%, rgba(11, 11, 14, 0.2) 100%),
    linear-gradient(180deg, rgba(11, 11, 14, 0) 50%, rgba(11, 11, 14, 0.7) 100%);
}

.activity-hero__inner {
  position: relative;
  width: 100%;
}

.activity-hero__title {
  font-size: 40px;
  color: var(--color-white);
  max-width: 14ch;
}

.activity-hero__accent {
  color: var(--color-red);
}

.activity-hero__lede {
  margin-top: var(--space-4);
  max-width: 52ch;
  font-size: 17px;
  color: var(--color-steel-300);
}

.activity-hero__facts {
  list-style: none;
  margin: var(--space-6) 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.activity-hero__fact {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  background: rgba(11, 11, 14, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-white);
}

.activity-hero__fact svg {
  color: var(--color-red);
}

.activity__features {
  display: grid;
  gap: var(--space-4);
}

.activity__feature {
  position: relative;
  overflow: hidden;
  padding: var(--space-6);
}

.activity__watermark {
  position: absolute;
  right: -14px;
  bottom: -14px;
  color: var(--color-red);
  opacity: 0.08;
  line-height: 0;
  pointer-events: none;
}

.activity__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--bg-elevated);
  color: var(--color-red);
}

[data-theme='light'] .activity__icon {
  background: var(--text-primary);
}

.activity__feature-title {
  margin-top: var(--space-4);
  font-size: 20px;
  color: var(--text-primary);
}

.activity__feature-text {
  margin-top: var(--space-2);
  font-size: 15px;
}

.activity__split {
  margin-top: var(--space-9);
  display: grid;
  gap: var(--space-6);
  align-items: center;
}

.activity__split-figure {
  margin: 0;
}

.activity__split-caption {
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.activity__split-name {
  font-family: var(--font-display);
  font-size: 22px;
  text-transform: uppercase;
  color: var(--text-primary);
}

.activity__split-role {
  font-size: 13px;
  color: var(--text-secondary);
}

.activity__split-photo {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 1;
}

.activity__split-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.activity__prose {
  margin-top: var(--space-4);
}

.activity__prose :deep(p + p) {
  margin-top: var(--space-4);
}

.activity__prose :deep(a) {
  color: var(--color-red);
}

.activity__prose :deep(strong) {
  color: var(--text-primary);
}

.activity__gallery {
  margin-top: var(--space-9);
  display: grid;
  gap: var(--space-4);
}

.activity__gallery-item {
  position: relative;
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.activity__gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.activity__gallery-item figcaption {
  position: absolute;
  inset: auto 0 0;
  padding: var(--space-6) var(--space-4) var(--space-3);
  background: linear-gradient(180deg, rgba(11, 11, 14, 0), rgba(11, 11, 14, 0.8));
  font-size: 13px;
  font-weight: 600;
  color: var(--color-white);
}

.activity__cta {
  margin-top: var(--space-9);
  padding: var(--space-6);
  border-color: var(--color-red);
  box-shadow: 0 12px 32px rgba(227, 25, 55, 0.16);
  display: grid;
  gap: var(--space-5);
}

.activity__cta-title {
  font-size: 26px;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.activity__cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.activity__cta-actions .btn {
  border-radius: var(--radius-pill);
}

.activity__related {
  margin-top: var(--space-9);
}

.activity__related-title {
  font-size: 28px;
  color: var(--text-primary);
}

.activity__related-grid {
  margin-top: var(--space-5);
  display: grid;
  gap: var(--space-4);
}

.activity__related-card {
  position: relative;
  overflow: hidden;
  min-height: 260px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: var(--color-white);
}

.activity__related-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  transition: transform 400ms ease;
}

.activity__related-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 11, 14, 0.1) 20%, rgba(11, 11, 14, 0.9) 100%);
}

.activity__related-body {
  position: relative;
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.activity__related-eyebrow {
  align-self: flex-start;
  margin-bottom: var(--space-1);
  padding: 3px 9px;
  border-radius: var(--radius-pill);
  background: var(--color-red);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-white);
}

.activity__related-name {
  font-family: var(--font-display);
  font-size: 26px;
  text-transform: uppercase;
  line-height: 1.1;
}

.activity__related-text {
  font-size: 14px;
  color: var(--color-steel-300);
}

.activity__related-more {
  margin-top: var(--space-3);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 13px;
  font-weight: 600;
}

.activity__related-more svg {
  color: var(--color-red);
  transition: transform 200ms ease;
}

.activity__related-card:hover .activity__related-photo {
  transform: scale(1.05);
}

.activity__related-card:hover .activity__related-more svg {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .activity__related-photo,
  .activity__related-more svg {
    transition: none;
  }
}


@media (max-width: 767px) {
  .activity-hero__scrim {
    background: linear-gradient(180deg, rgba(11, 11, 14, 0.35) 0%, rgba(11, 11, 14, 0.75) 45%, rgba(11, 11, 14, 0.95) 100%);
  }
}

@media (min-width: 768px) {
  .activity-hero {
    min-height: 560px;
  }

  .activity-hero__title {
    font-size: 60px;
    letter-spacing: -0.02em;
  }

  .activity__features {
    grid-template-columns: repeat(3, 1fr);
  }

  .activity__split {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }

  /* split photos are portraits (coach, athletes): keep faces whole */
  .activity__split-photo {
    aspect-ratio: 4 / 5;
  }

  .activity__gallery {
    grid-template-columns: repeat(3, 1fr);
  }

  .activity__related-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .activity__cta {
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: var(--space-7);
  }
}
</style>
