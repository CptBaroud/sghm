<script setup lang="ts">
// h1 on the dedicated /horaires-tarifs page, h2 on the home page
defineProps<{ standalone?: boolean }>()

const schedule = [
  { days: 'Lundi, Mardi, Mercredi, Jeudi, Vendredi', hours: '17h00 – 21h00', closed: false },
  { days: 'Samedi', hours: '14h00 – 17h00', closed: false },
  { days: 'Dimanche', hours: '9h00 - 12h00', closed: false },
  { days: 'Jours fériés', hours: 'Fermé', closed: true },
]

const pricing = [
  {
    title: 'Licence Loisir Jeunes',
    price: '70 €',
    period: '/ an',
    features: ['Pour les 16 et 17 ans', "Accompagnement d'un adulte obligatoire", 'Accès à tous les créneaux libres', 'Licence loisir FFForce'],
    cta: 'S\'inscrire sur HelloAsso',
    url: HELLOASSO_LOISIR_URL
  },
  {
    title: 'Licence Loisir Adultes',
    price: '100 €',
    period: '/ an',
    features: ['Accès à tous les créneaux libres', 'Licence loisir FFForce'],
    cta: 'S\'inscrire sur HelloAsso',
    url: HELLOASSO_LOISIR_URL,
    highlight: true
  },
  {
    title: 'Licence Compétiteur',
    price: '100 €',
    period: '/ an',
    features: ['Accès à tous les créneaux libres', 'Licence compétition FFForce'],
    // compétition: on-site sign-up only, the button points to the contact section
    cta: 'S\'inscrire sur place',
    url: ''
  }
]
</script>

<template>
  <section id="tarifs" class="section schedule">
    <div class="container">
      <div class="section__head section__head--center">
        <component :is="standalone ? 'h1' : 'h2'" class="section__title">Horaires &amp; Tarifs d'Adhésion</component>
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


          <p class="schedule__summer">
            Juillet &amp; août : ouvert en semaine uniquement. Horaires indicatifs, susceptibles de changer
            selon les vacances, compétitions et disponibilité des bénévoles.
          </p>

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
            <!-- price first: it is what the card is read for, the plan name follows as its heading -->
            <p class="schedule__tier-price">
              <span class="tabular-nums">{{ tier.price }}</span>
              <span class="schedule__tier-period">{{ tier.period }}</span>
            </p>
            <h3 class="schedule__tier-title">{{ tier.title }}</h3>
            <ul class="schedule__tier-features">
              <li v-for="feature in tier.features" :key="feature">{{ feature }}</li>
            </ul>
            <a
              :href="tier.url || '#contact'"
              :target="tier.url ? '_blank' : undefined"
              :rel="tier.url ? 'noopener' : undefined"
              class="btn schedule__tier-btn"
              :class="tier.highlight ? 'btn-primary' : 'btn-secondary'"
            >
              <img v-if="tier.url" src="/helloasso.svg" alt="" class="schedule__tier-logo" width="16" height="16">
              {{ tier.cta }}
              <IconGlyph v-if="!tier.url" name="arrow-right" :size="14" />
            </a>
          </article>
          <p class="schedule__pricing-note">
            Licences loisir : inscription et paiement sécurisé en ligne via HelloAsso.
            Tarif loisir réduit de 50 % pour une licence prise après le 1er mai.
            Pas de séance d'essai. L'adhésion vaut acceptation du
            <a href="/documents/reglement-interieur-sghm-2026.pdf" target="_blank">règlement intérieur</a>
            (<a href="/documents/statuts-sghm-2026.pdf" target="_blank">statuts</a>).
          </p>
        </div>
      </div>

      <div v-if="!standalone" class="schedule__more">
        <NuxtLink to="/horaires-tarifs" class="btn btn-secondary">
          Voir le détail des horaires et tarifs
          <IconGlyph name="arrow-right" :size="15" />
        </NuxtLink>
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
  font-size: 17px;
  color: var(--text-primary);
  text-transform: none;
}

.schedule__hours-title svg {
  color: var(--accent-text);
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
  font-size: 15px;
}

.schedule__slot-days {
  color: var(--text-primary);
}

.schedule__slot-hours {
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
}

.schedule__slot-hours--closed {
  color: var(--text-muted);
}

.schedule__location {
  margin-top: auto;
  padding-top: var(--space-5);
  display: flex;
  gap: var(--space-2);
  font-size: 14px;
  color: var(--text-secondary);
}

.schedule__location svg {
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--accent-text);
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
}

/* h3 for document outline, styled like the former h4 (body font, not the display headings) */
.schedule__tier-title {
  margin-top: var(--space-2);
  font-family: var(--font-body);
  font-weight: 700;
  line-height: 1.55;
  text-transform: none;
  font-size: 17px;
  color: var(--text-primary);
}

.schedule__tier-price {
  font-family: var(--font-display);
  font-size: 26px;
  color: var(--text-primary);
}

.schedule__tier-period {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
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
  font-size: 15px;
  color: var(--text-primary);
}

.schedule__tier-features li {
  padding-left: var(--space-4);
  position: relative;
}

.schedule__tier-features li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent-text);
}

.schedule__tier-btn {
  margin-top: var(--space-4);
  width: 100%;
  padding: 9px 16px;
  font-size: 13px;
  line-height: 1.25;
  text-align: center;
  text-wrap: balance;
  border-radius: var(--radius-pill);
}

.schedule__tier-logo {
  flex-shrink: 0;
}

.schedule__pricing-note {
  margin: 0;
  grid-column: 1 / -1;
  max-width: 75ch;
  font-size: 14px;
  color: var(--text-secondary);
}

.schedule__more {
  margin-top: var(--space-7);
  display: flex;
  justify-content: center;
}

.schedule__more .btn {
  border-radius: var(--radius-pill);
}

.schedule__pricing-note a {
  color: inherit;
}

.schedule__summer {
  margin: var(--space-5) 0;
  font-size: 14px;
  color: var(--text-secondary);
}

/* Full-width rows: the price cards get the whole width, the hours card sits below them */
.schedule__layout {
  gap: var(--space-8);
}

.schedule__pricing-grid {
  order: -1;
  gap: var(--space-5);
}

.schedule__tier {
  padding: var(--space-6);
}

.schedule__tier-price {
  font-size: 36px;
}

.schedule__tier-features {
  margin-top: var(--space-4);
  gap: var(--space-3);
  font-size: 16px;
}

.schedule__tier-btn {
  margin-top: var(--space-6);
  padding: 13px 20px;
  font-size: 14px;
}

.schedule__pricing-note {
  margin-top: var(--space-2);
  font-size: 16px;
}

.schedule__hours {
  padding: var(--space-7);
}

.schedule__slot {
  font-size: 16px;
}

.schedule__summer {
  font-size: 15px;
}

@media (min-width: 560px) {
  .schedule__pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  /* hours list on the left, notes and address on the right */
  .schedule__hours {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--space-8);
    align-items: start;
  }

  .schedule__hours-title { grid-area: 1 / 1; }
  .schedule__list { grid-area: 2 / 1 / 5; }
  .schedule__summer { grid-area: 1 / 2 / 3; margin-top: 0; }
  .schedule__location { grid-area: 3 / 2; margin-top: 0; }
}
</style>
