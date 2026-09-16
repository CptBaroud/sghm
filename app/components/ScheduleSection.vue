<script setup lang="ts">
const schedule = [
  { days: 'Lundi, Mardi, Jeudi, Vendredi', hours: '17h00 – 21h00', closed: false },
  { days: 'Samedi', hours: '14h00 – 17h00', closed: false },
  { days: 'Dimanche', hours: '9h00 - 12h00', closed: false },
  { days: 'Jours fériés', hours: 'Fermé', closed: true },
]

const pricing = [
  {
    eyebrow: 'Entre 16 et 17 ans',
    title: 'Licence Loisir Jeunes',
    price: '70 €',
    period: '/ an',
    features: ['Accès a tous les créneaux libres', 'Licence loisir FFForce', "Accompagnement d'un adulte obligatoire"],
    cta: 'Rejoindre'
  },
  {
    eyebrow: 'Pratique Loisir',
    title: 'Licence Loisir Adultes',
    price: '100 €',
    period: '/ an',
    features: ['Accès à tous les créneaux libres', 'Licence loisir FFForce'],
    cta: 'Rejoindre',
    highlight: true
  },
  {
    eyebrow: 'Pratique compétitive',
    title: 'Licence Compétiteur',
    price: '100 €',
    period: '/ an',
    features: ['Accès à tous les créneaux libres', 'Licence compétition FFForce'],
    cta: 'Rejoindre'
  }
]
</script>

<template>
  <section id="tarifs" class="section schedule">
    <div class="container">
      <div class="section__head section__head--center">
        <span class="section__eyebrow">Transparence Associative</span>
        <h2 class="section__title">Horaires &amp; Adhésions</h2>
        <p class="section__lede">
          Tarifs annuels fixés par l'assemblée générale. Aucun frais caché, ni réengagement
          automatique.
        </p>
      </div>

      <div class="schedule__layout">
        <div class="card schedule__hours">
          <h3 class="schedule__hours-title">
            <IconGlyph name="clock" :size="16" />
            Horaires d'ouverture
          </h3>

          <ul class="schedule__list">
            <li v-for="slot in schedule" :key="slot.days" class="schedule__slot">
              <span class="schedule__slot-days">{{ slot.days }}</span>
              <span class="schedule__slot-hours" :class="{ 'schedule__slot-hours--closed': slot.closed }">
                {{ slot.hours }}
              </span>
            </li>
          </ul>

          <p class="schedule__location">
            <IconGlyph name="pin" :size="16" />
            <span>
              Salle des Sports J.MENAGER, rue des collèges, 44350 GUÉRANDE
            </span>
          </p>
        </div>

        <div class="schedule__pricing-grid">
          <article
            v-for="tier in pricing"
            :key="tier.title"
            class="card schedule__tier"
            :class="{ 'schedule__tier--highlight': tier.highlight }"
          >
            <span v-if="tier.highlight" class="schedule__tier-badge">Populaire</span>
            <span class="schedule__tier-eyebrow">{{ tier.eyebrow }}</span>
            <h4 class="schedule__tier-title">{{ tier.title }}</h4>
            <p class="schedule__tier-price">
              <span class="tabular-nums">{{ tier.price }}</span>
              <span class="schedule__tier-period">{{ tier.period }}</span>
            </p>
            <ul class="schedule__tier-features">
              <li v-for="feature in tier.features" :key="feature">{{ feature }}</li>
            </ul>
            <a
              href="#contact"
              class="btn schedule__tier-btn"
              :class="tier.highlight ? 'btn-primary' : 'btn-secondary'"
            >
              {{ tier.cta }}
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.schedule {
  background: var(--bg-elevated);
}

.schedule__layout {
  display: grid;
  gap: var(--space-5);
}

.schedule__hours {
  display: flex;
  flex-direction: column;
  padding: var(--space-6);
}

.schedule__hours-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
}

.schedule__hours-title svg {
  color: var(--color-red);
}

.schedule__list {
  list-style: none;
  margin: var(--space-5) 0 0;
  padding: 0;
  display: grid;
  gap: var(--space-3);
}

.schedule__slot {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border-card);
  font-size: 14px;
}

.schedule__slot:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.schedule__slot-days {
  color: var(--text-secondary);
}

.schedule__slot-hours {
  font-weight: 700;
  color: var(--color-red);
  white-space: nowrap;
}

.schedule__slot-hours--closed {
  color: var(--text-muted);
}

.schedule__location {
  margin-top: auto;
  padding-top: var(--space-5);
  border-top: 1px solid var(--border-card);
  display: flex;
  gap: var(--space-2);
  font-size: 13px;
  color: var(--text-muted);
}

.schedule__location svg {
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--color-red);
}

.schedule__pricing-grid {
  display: grid;
  gap: var(--space-4);
}

.schedule__tier {
  display: flex;
  flex-direction: column;
  padding: var(--space-5);
  position: relative;
}

.schedule__tier--highlight {
  border-color: var(--color-red);
  box-shadow: 0 12px 32px rgba(227, 25, 55, 0.16);
}

.schedule__tier-badge {
  position: absolute;
  top: -10px;
  right: var(--space-5);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-white);
  background: var(--color-red);
  padding: 3px 9px;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

.schedule__tier-eyebrow {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.schedule__tier-title {
  margin-top: var(--space-1);
  font-size: 17px;
  color: var(--text-primary);
}

.schedule__tier-price {
  margin-top: var(--space-2);
  font-family: var(--font-display);
  font-size: 26px;
  color: var(--text-primary);
}

.schedule__tier-period {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: none;
  margin-left: 3px;
}

.schedule__tier-features {
  margin: var(--space-3) 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--space-2);
  flex: 1;
  font-size: 12px;
  color: var(--text-secondary);
}

.schedule__tier-features li {
  padding-left: var(--space-4);
  position: relative;
}

.schedule__tier-features li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-red);
}

.schedule__tier-btn {
  margin-top: var(--space-4);
  width: 100%;
  padding: 9px 16px;
  font-size: 13px;
  border-radius: var(--radius-pill);
}

@media (min-width: 560px) {
  .schedule__pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .schedule__layout {
    grid-template-columns: 1fr 2fr;
    align-items: stretch;
  }
}
</style>
