<script setup lang="ts">
type Icon = 'discipline' | 'equipment' | 'community' | 'clock' | 'trophy' | 'flag' | 'heart' | 'calendar'

interface Link { label: string; href: string; external?: boolean }

defineProps<{
  title: string
  accent: string
  lede: string
  photo: string
  photoAlt: string
  facts?: { icon: Icon; label: string }[]
  features?: { title: string; text: string }[]
  splitTitle: string
  splitPhoto: string
  splitPhotoAlt?: string
  splitCaption?: { name: string; title: string }
  gallery: { src: string; caption: string }[]
  cta: { title: string; text: string; primary: Link; secondary?: Link }
  related: PageCardHref[]
}>()
</script>


<template>
  <section class="activity-hero">
    <img :src="photo" :alt="photoAlt" class="activity-hero__photo" />
    <span class="activity-hero__scrim" aria-hidden="true" />
    <div class="container activity-hero__inner">
      <h1 class="activity-hero__title">
        {{ title }} <span class="activity-hero__accent">{{ accent }}</span>
      </h1>
      <p class="activity-hero__lede">{{ lede }}</p>
      <ul v-if="facts" class="activity-hero__facts">
        <li v-for="fact in facts" :key="fact.label" class="activity-hero__fact">
          <IconGlyph :name="fact.icon" :size="16" />
          {{ fact.label }}
        </li>
      </ul>
      <a
        :href="cta.primary.href"
        :target="cta.primary.external ? '_blank' : undefined"
        :rel="cta.primary.external ? 'noopener' : undefined"
        class="btn btn-primary activity-hero__cta"
      >
        {{ cta.primary.label }}
        <IconGlyph name="arrow-right" :size="15" />
      </a>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div v-if="features" class="activity__features">
        <div v-for="feature in features" :key="feature.title" class="activity__feature">
          <h2 class="activity__feature-title">{{ feature.title }}</h2>
          <p class="activity__feature-text">{{ feature.text }}</p>
        </div>
      </div>

      <div class="activity__split" :class="{ 'activity__split--first': !features }">
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
    </div>
  </section>

  <!-- full-width band between the content and the closing call to action (e.g. the 3 movements) -->
  <slot name="band" />

  <section class="section">
    <div class="container">
      <div class="activity__cta">
        <div>
          <h2 class="activity__cta-title">{{ cta.title }}</h2>
          <p>{{ cta.text }}</p>
        </div>
        <div class="activity__cta-actions">
          <a
            :href="cta.primary.href"
            :target="cta.primary.external ? '_blank' : undefined"
            :rel="cta.primary.external ? 'noopener' : undefined"
            class="btn activity__cta-primary"
          >
            {{ cta.primary.label }}
            <IconGlyph name="arrow-right" :size="15" />
          </a>
          <a v-if="cta.secondary" :href="cta.secondary.href" class="btn activity__cta-secondary">{{ cta.secondary.label }}</a>
        </div>
      </div>

      <nav class="activity__related" aria-label="Voir aussi">
        <h2 class="activity__related-title">Voir aussi</h2>
        <PageCards :links="related" class="activity__related-cards" />
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
  animation: activity-hero-settle 1600ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* the header photo settles from a slight zoom on load */
@keyframes activity-hero-settle {
  from {
    transform: scale(1.08);
  }
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
  color: var(--accent-text);
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
  font-size: 16px;
  font-weight: 600;
  color: var(--color-white);
}

.activity-hero__facts {
  column-gap: var(--space-6);
  row-gap: var(--space-3);
}

.activity-hero__cta {
  margin-top: var(--space-6);
  border-radius: var(--radius-pill);
}

.activity-hero__fact svg {
  color: var(--accent-text);
}

/* plain text columns, no boxes or icons */
.activity__features {
  display: grid;
  gap: var(--space-6);
}

.activity__feature-title {
  font-size: 24px;
  color: var(--text-primary);
}

.activity__feature-text {
  margin-top: var(--space-3);
  font-size: 17px;
  color: var(--text-primary);
  max-width: 36ch;
}

.activity__split {
  margin-top: var(--space-9);
  display: grid;
  gap: var(--space-6);
  align-items: center;
}

.activity__split--first {
  margin-top: 0;
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
  font-size: 17px;
  max-width: 62ch;
}

.activity__prose :deep(p) {
  color: var(--text-primary);
}

.activity__prose :deep(p + p) {
  margin-top: var(--space-4);
}

.activity__prose :deep(a) {
  color: var(--accent-text);
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
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background: var(--color-red);
  display: grid;
  gap: var(--space-5);
}

.activity__cta-title {
  font-size: 30px;
  color: var(--color-white);
  margin-bottom: var(--space-2);
}

.activity__cta p {
  font-size: 17px;
  color: var(--color-white);
}

.activity__cta-primary {
  background: var(--color-white);
  color: var(--color-navy-2);
}

.activity__cta-secondary {
  color: var(--color-white);
  border-color: var(--color-white);
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

.activity__related-cards {
  margin-top: var(--space-5);
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
    gap: var(--space-7);
  }

  /* text column wider than the photo so long prose keeps a comfortable measure */
  .activity__split {
    grid-template-columns: 2fr 3fr;
    gap: var(--space-8);
  }

  /* split photos are portraits (coach, athletes): keep faces whole */
  .activity__split-photo {
    aspect-ratio: 4 / 5;
  }

  .activity__gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .activity__cta {
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: var(--space-7);
  }
}
</style>
