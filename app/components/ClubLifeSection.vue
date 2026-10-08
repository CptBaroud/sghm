<script setup lang="ts">
type BentoIcon =
  | "discipline"
  | "equipment"
  | "community"
  | "heart"
  | "trophy"
  | "calendar"
  | "clock";

const heroCard = {
  icon: "community" as const,
  title: "Esprit Associatif",
  description:
    "Entraide entre pratiquants, quel que soit le niveau ou l'objectif : parades sur les gros squats, conseils partagés au quotidien.",
};

const photoCard = { caption: "Ambiance salle", photo: "/group.jpeg" };

interface ClubCard {
  icon: BentoIcon;
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

const cards: ClubCard[] = [
  {
    icon: "discipline",
    title: "Discipline & Technique",
    description:
      "L'apprentissage privilégie la technique avant la charge : profondeur du squat, trajectoire de la barre au développé couché, verrouillage au soulevé de terre.",
  },
  {
    icon: "equipment",
    title: "Matériel FFForce",
    description:
      "Racks de compétition, barres olympiques 20 kg et 15 kg, disques calibrés aux normes IPF.",
  },
];

// TODO: confirm exact counts with the bureau before publishing.
const topRightStats = [
  {
    icon: "heart" as const,
    value: "200+",
    label: "Adhérents en pratique loisir",
  },
  { icon: "trophy" as const, value: "10+", label: "Compétiteurs licenciés" },
];

const bottomLeftStats = [
  {
    icon: "calendar" as const,
    value: "35",
    label: "Ans d'existence associative, depuis 1991",
  },
  {
    icon: "clock" as const,
    value: "7j/7",
    label: "Créneaux libres, à son propre rythme",
  },
];

interface GalleryPair {
  caption: string;
  photo: string;
  quote: string;
  author: string;
  reverse?: boolean;
}

// TODO: confirm testimonials with members before publishing.
const galleryPairs: GalleryPair[] = [
  {
    caption: "Créneau libre",
    photo: "/gallery/20.jpg",
    quote:
      "Je viens m'entraîner après le travail, à mon rythme, dans une ambiance simple et conviviale.",
    author: "Adhérent(e) du club",
  },
  {
    caption: "Entraide entre membres",
    photo: "/gallery/05.jpg",
    quote:
      "L'ambiance est simple et bienveillante. On vient pour la régularité et les conseils des autres membres.",
    author: "Adhérent(e) du club",
    reverse: true,
  },
  {
    caption: "Tous niveaux, tous âges",
    photo: "/gallery/06.jpg",
    quote:
      "Pas besoin de viser la compétition pour se sentir à sa place ici, tout le monde progresse à son rythme.",
    author: "Adhérent(e) du club",
  },
];
</script>

<template>
  <section id="club" class="section club-life">
    <div class="container">
      <div class="section__head section__head--center">
        <h2 class="section__title">L'Esprit et la Vie du Club</h2>
        <p class="section__lede">
          Fondée en 1991, l'association vit grâce à ses bénévoles. La majorité
          des adhérents vient ici pour une raison simple : s'entraîner
          régulièrement, à son rythme.
        </p>
      </div>

      <div class="club-life__feature">
        <div class="club-life__feature-col">
          <article class="card club-life__feature-hero">
            <span class="club-life__watermark" aria-hidden="true">
              <IconGlyph :name="heroCard.icon" :size="110" />
            </span>
            <span class="club-life__card-icon">
              <IconGlyph :name="heroCard.icon" :size="20" />
            </span>
            <h3 class="club-life__card-title">{{ heroCard.title }}</h3>
            <p class="club-life__card-text">{{ heroCard.description }}</p>
          </article>

          <div class="club-life__feature-pair">
            <div
              v-for="stat in bottomLeftStats"
              :key="stat.label"
              class="card club-life__stat"
            >
              <span class="club-life__watermark" aria-hidden="true">
                <IconGlyph :name="stat.icon" :size="64" />
              </span>
              <span class="club-life__stat-value tabular-nums">{{
                stat.value
              }}</span>
              <span class="club-life__stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="club-life__feature-col">
          <div class="club-life__feature-pair">
            <div
              v-for="stat in topRightStats"
              :key="stat.label"
              class="card club-life__stat"
            >
              <span class="club-life__watermark" aria-hidden="true">
                <IconGlyph :name="stat.icon" :size="64" />
              </span>
              <span class="club-life__stat-value tabular-nums">{{
                stat.value
              }}</span>
              <span class="club-life__stat-label">{{ stat.label }}</span>
            </div>
          </div>

          <article class="card club-life__feature-photo">
            <img :src="photoCard.photo" alt="" class="club-life__photo-img" />
            <span class="club-life__photo-scrim" aria-hidden="true" />
            <span class="club-life__photo-caption">{{
              photoCard.caption
            }}</span>
          </article>
        </div>
      </div>

      <div class="club-life__cards">
        <article
          v-for="card in cards"
          :key="card.title"
          class="card club-life__card"
        >
          <span
            class="club-life__watermark club-life__watermark--card"
            aria-hidden="true"
          >
            <IconGlyph :name="card.icon" :size="100" />
          </span>
          <span class="club-life__card-icon">
            <IconGlyph :name="card.icon" :size="20" />
          </span>
          <h3 class="club-life__card-title">{{ card.title }}</h3>
          <p class="club-life__card-text">{{ card.description }}</p>
          <a
            v-if="card.cta"
            :href="card.cta.href"
            class="btn btn-primary club-life__card-cta"
          >
            {{ card.cta.label }}
            <IconGlyph name="arrow-right" :size="15" />
          </a>
        </article>
      </div>

      <div class="club-life__gallery">
        <div
          v-for="pair in galleryPairs"
          :key="pair.caption"
          class="club-life__gallery-col"
          :class="{ 'club-life__gallery-col--reverse': pair.reverse }"
        >
          <div class="club-life__photo">
            <img :src="pair.photo" alt="" class="club-life__photo-img" />
            <span class="club-life__photo-scrim" aria-hidden="true" />
            <span class="club-life__photo-caption">{{ pair.caption }}</span>
          </div>
          <article class="club-life__quote">
            <span class="club-life__quote-mark" aria-hidden="true"
              >&ldquo;</span
            >
            <p class="club-life__quote-text">{{ pair.quote }}</p>
            <span class="club-life__quote-author">{{ pair.author }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.club-life__watermark {
  position: absolute;
  right: -14px;
  bottom: -14px;
  color: var(--color-red);
  opacity: 0.09;
  line-height: 0;
  pointer-events: none;
}

[data-theme="light"] .club-life__watermark {
  opacity: 0.07;
}

.club-life__feature {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.club-life__feature-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.club-life__feature-pair {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.club-life__feature-hero,
.club-life__feature-photo {
  position: relative;
  overflow: hidden;
  flex: 1;
}

.club-life__feature-hero {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.club-life__feature-photo {
  padding: var(--space-5);
  display: flex;
  align-items: flex-end;
  min-height: 280px;
}

.club-life__stat {
  position: relative;
  overflow: hidden;
  padding: var(--space-5);
  text-align: center;
}

.club-life__stat-value {
  position: relative;
  display: block;
  font-family: var(--font-display);
  font-size: 34px;
  color: var(--color-red);
}

.club-life__stat-label {
  position: relative;
  display: block;
  margin-top: var(--space-2);
  font-size: 13px;
  color: var(--text-secondary);
}

.club-life__photo-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.club-life__photo-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(11, 11, 14, 0) 40%,
    rgba(11, 11, 14, 0.75) 100%
  );
}

.club-life__photo-caption {
  position: relative;
  z-index: 1;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-white);
}


.club-life__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.club-life__card {
  position: relative;
  overflow: hidden;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
}

.club-life__card-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--bg-elevated);
  color: var(--color-red);
  flex-shrink: 0;
}

[data-theme="light"] .club-life__card-icon {
  background: var(--text-primary);
  color: var(--color-red);
}

.club-life__card-title {
  position: relative;
  margin-top: var(--space-4);
  font-size: 18px;
  color: var(--text-primary);
}

.club-life__card-text {
  position: relative;
  margin-top: var(--space-2);
  font-size: 14px;
  color: var(--text-secondary);
  max-width: 40ch;
}

.club-life__card-cta {
  position: relative;
  margin-top: var(--space-5);
  align-self: flex-start;
  border-radius: var(--radius-pill);
  padding: 10px 20px;
  font-size: 13px;
}

.club-life__gallery {
  margin-top: var(--space-9);
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  gap: var(--space-6);
}

.club-life__gallery-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.club-life__photo {
  position: relative;
  overflow: hidden;
  flex: 1;
  min-height: 420px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: flex-end;
  padding: var(--space-3);
}

.club-life__quote {
  padding: 0 var(--space-2);
  position: relative;
  display: flex;
  flex-direction: column;
}

.club-life__quote-mark {
  font-family: var(--font-display);
  font-size: 48px;
  line-height: 1;
  color: var(--color-red);
}

.club-life__quote-text {
  margin-top: var(--space-2);
  font-size: 15px;
  color: var(--text-secondary);
  font-style: italic;
}

.club-life__quote-author {
  display: block;
  margin-top: var(--space-4);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

@media (min-width: 640px) {
  .club-life__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .club-life__feature {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
  }

  .club-life__gallery {
    grid-template-columns: repeat(3, 1fr);
  }

  .club-life__gallery-col--reverse {
    flex-direction: column-reverse;
  }
}
</style>
