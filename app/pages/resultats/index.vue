<script setup lang="ts">
// Canonical, og:* and twitter:* are derived from title/description by Nuxt SEO
const title = 'Résultats des athlètes'
const description =
  'Derniers résultats en compétition FFForce et IPF des athlètes de la SGHM, club de force athlétique de Guérande.'

useSeoMeta({ title, description })
useSchemaOrg([defineWebPage({ '@type': 'CollectionPage' })])
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Résultats' }] })
defineOgImage(
  'Sghm',
  { title, description: 'Dernière compétition de chaque athlète du club' },
  { alt: 'Résultats des athlètes de la SGHM Guérande' }
)

const athletes = clubAthletes
  .toSorted((a, b) => b.latest.date.localeCompare(a.latest.date))
  .map((a) => ({
    ...a,
    benchAttempts: [a.latest.bench.attempt1, a.latest.bench.attempt2, a.latest.bench.attempt3].filter((kg) => kg !== null)
  }))

const search = ref('')
const filtered = computed(() => {
  const query = normalizeName(search.value.trim())
  return athletes.filter((a) => normalizeName(a.name).includes(query))
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__head section__head--center">
        <h1 class="section__title">Résultats des athlètes</h1>
        <p class="section__lede">Dernière compétition de chaque athlète du club sur les plateaux FFForce et IPF.</p>
      </div>

      <label class="search">
        <span class="visually-hidden">Rechercher un athlète</span>
        <input v-model="search" type="search" placeholder="Nom de l'athlète" autocomplete="off" />
      </label>

      <TransitionGroup name="list" tag="ul" class="athletes">
        <li v-for="(athlete, i) in filtered" :key="athlete.name" class="athletes__item" :style="{ '--delay': `${i * 5}ms` }">
          <a :href="`/resultats/${athlete.slug}`" class="card athlete">
            <div class="athlete__main">
              <h2 class="athlete__name">{{ athlete.name }}</h2>
              <p class="athlete__total stat-total tabular-nums">{{ athlete.latest.totalKg }}<small class="stat-unit">kg</small></p>
              <p class="stat-class">{{ formatWeightClass(athlete.weightClass) }}<small class="stat-label">{{ athlete.division }}</small></p>
            </div>

            <dl class="athlete__lifts">
              <template v-if="athlete.latest.event === 'B'">
                <div
                  v-for="(kg, n) in athlete.benchAttempts"
                  :key="n"
                  :class="{ 'attempt--dim': kg !== athlete.latest.bench.best3 }"
                >
                  <dt class="stat-label">Essai {{ n + 1 }}</dt>
                  <dd class="stat-value tabular-nums" :class="{ 'attempt--failed': kg < 0 }">{{ Math.abs(kg) }}<span v-if="kg < 0" class="visually-hidden"> (manqué)</span></dd>
                </div>
              </template>
              <template v-else>
                <div>
                  <dt class="stat-label">Squat</dt>
                  <dd class="stat-value tabular-nums">{{ athlete.latest.squat.best3 ?? '—' }}</dd>
                </div>
                <div>
                  <dt class="stat-label">Bench</dt>
                  <dd class="stat-value tabular-nums">{{ athlete.latest.bench.best3 ?? '—' }}</dd>
                </div>
                <div>
                  <dt class="stat-label">Deadlift</dt>
                  <dd class="stat-value tabular-nums">{{ athlete.latest.deadlift.best3 ?? '—' }}</dd>
                </div>
              </template>
            </dl>

            <div class="athlete__meet">
              <p class="athlete__meet-name" :title="athlete.latest.meetName">{{ athlete.latest.meetName }}</p>
              <p>{{ [formatDate(athlete.latest.date), athlete.latest.meetTown].filter(Boolean).join(' · ') }}</p>
            </div>
          </a>
        </li>
      </TransitionGroup>

      <p v-if="!filtered.length" class="athletes__empty" role="status">Aucun athlète ne correspond à cette recherche.</p>
    </div>
  </section>
</template>

<style scoped>
.search {
  display: block;
  max-width: 420px;
  margin: 0 auto var(--space-7);
}

.search input {
  width: 100%;
  font: inherit;
  font-size: 16px;
  padding: 13px 20px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-card);
  background: var(--surface-card);
  color: var(--text-primary);
}

.search input::placeholder {
  color: var(--text-muted);
}

.athletes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-5);
}

.athletes__item {
  container-type: inline-size;
}

/* ipf-result card layout: name, total and class on the left, lifts on the right */
.athlete {
  display: grid;
  grid-template-areas: 'main' 'side' 'meet';
  gap: var(--space-5);
  height: 100%;
  padding: var(--space-5);
  color: inherit;
  text-decoration: none;
}

.athlete:hover {
  border-color: var(--color-red);
}

.athlete__main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-3);
  min-width: 0;
}

.athlete__name {
  font-size: 26px;
  color: var(--text-primary);
}

.athlete__total {
  font-size: clamp(64px, 24cqi, 96px);
}

.athlete__lifts {
  grid-area: side;
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  margin: 0;
}

/* Sized from the card width (cqi) so three "252.5" fit side by side on a phone */
.athlete__lifts dd {
  margin: 0;
  font-size: min(40px, 10cqi);
}

.athlete__meet {
  grid-area: meet;
  min-width: 0;
  padding-top: var(--space-3);
  border-top: 1px solid var(--border-card);
}

.athlete__meet p {
  font-size: 13px;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.athlete__meet .athlete__meet-name {
  font-weight: 600;
  color: var(--text-secondary);
}

/* Wide card: lifts stacked on the right, label beside the number */
@container (min-width: 480px) {
  .athlete {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas: 'main side' 'meet meet';
  }

  .athlete__name {
    font-size: 30px;
  }

  .athlete__total {
    font-size: min(110px, 20cqi);
  }

  /* Lift column spans the full height of the name/total/class column */
  .athlete__lifts {
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-2);
  }

  .athlete__lifts div {
    display: flex;
    align-items: baseline;
    gap: var(--space-2);
  }

  .athlete__lifts dd {
    font-size: min(44px, 8cqi);
  }
}

.athletes__empty {
  text-align: center;
  color: var(--text-muted);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 300ms;
  transition-delay: var(--delay);
}

@media (min-width: 768px) {
  .athletes {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
