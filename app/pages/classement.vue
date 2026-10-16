<script setup lang="ts">
// Canonical, og:* and twitter:* are derived from title/description by Nuxt SEO
const title = 'Classement du club'
const description =
  'Classement des athlètes de la SGHM par mouvement et au total (kg ou points IPF), filtrable par division et par sexe.'

useSeoMeta({ title, description })
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Classement' }] })
defineOgImage(
  'Sghm',
  { title, description: 'Top 5 squat, bench, deadlift et total des athlètes du club' },
  { alt: 'Classement des athlètes de la SGHM Guérande' }
)

const best = (values: (number | null)[]) => Math.max(0, ...values.map((v) => v ?? 0))

// Best lift of each athlete across all their meets; totals and IPF points only count full SBD meets
const ranking = clubAthletes.map((athlete) => {
  const sbd = athlete.results.filter((r) => r.event === 'SBD')
  return {
    name: athlete.name,
    slug: athlete.slug,
    sex: athlete.sex,
    division: athlete.division,
    weightClass: athlete.weightClass,
    squat: best(athlete.results.map((r) => r.squat.best3)),
    bench: best(athlete.results.map((r) => r.bench.best3)),
    deadlift: best(athlete.results.map((r) => r.deadlift.best3)),
    total: best(sbd.map((r) => r.totalKg)),
    ipf: best(sbd.map((r) => r.goodlift))
  }
})

type Score = 'squat' | 'bench' | 'deadlift' | 'total' | 'ipf'

const filters = reactive({ total: 'kg', division: '', sex: '' })

const filterGroups = [
  {
    key: 'total',
    label: 'Total',
    options: [
      { label: 'kg', value: 'kg' },
      { label: 'Points IPF', value: 'ipf' }
    ]
  },
  {
    key: 'division',
    label: 'Division',
    options: [
      { label: 'Toutes', value: '' },
      { label: 'Juniors', value: 'Juniors' },
      { label: 'Seniors', value: 'Seniors' },
      { label: 'Masters', value: 'Masters' }
    ]
  },
  {
    key: 'sex',
    label: 'Sexe',
    options: [
      { label: 'Tous', value: '' },
      { label: 'Femmes', value: 'F' },
      { label: 'Hommes', value: 'M' }
    ]
  }
] as const

const boards = computed(() => {
  // includes() so "Masters" matches Masters 1 to 4, and '' matches everyone
  const pool = ranking.filter((a) => a.division.includes(filters.division) && a.sex.includes(filters.sex))
  const top5 = (key: Score) => pool.filter((a) => a[key] > 0).toSorted((a, b) => b[key] - a[key]).slice(0, 5)

  return [
    { title: 'Squat', key: 'squat' as Score, unit: 'kg' },
    { title: 'Bench', key: 'bench' as Score, unit: 'kg' },
    { title: 'Deadlift', key: 'deadlift' as Score, unit: 'kg' },
    filters.total === 'kg'
      ? { title: 'Total', key: 'total' as Score, unit: 'kg' }
      : { title: 'Total IPF GL', key: 'ipf' as Score, unit: 'pts' }
  ].map((board) => ({ ...board, rows: top5(board.key) }))
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__head section__head--center">
        <h1 class="section__title">Classement du club</h1>
        <p class="section__lede">Top 5 des meilleures performances en compétition des athlètes du club.</p>
      </div>

      <div class="ranking__filters">
        <div v-for="group in filterGroups" :key="group.key" class="ranking__filter" role="group" :aria-label="group.label">
          <span class="stat-label">{{ group.label }}</span>
          <div class="results__tabs">
            <button
              v-for="option in group.options"
              :key="option.value"
              type="button"
              class="results__tab"
              :class="{ 'results__tab--active': filters[group.key] === option.value }"
              :aria-pressed="filters[group.key] === option.value"
              @click="filters[group.key] = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="ranking__boards">
        <div v-for="board in boards" :key="board.title" class="card ranking__board">
          <h2 class="ranking__board-title">{{ board.title }}</h2>
          <ol v-if="board.rows.length" class="ranking__list">
            <li v-for="(row, i) in board.rows" :key="row.name" class="ranking__row">
              <span class="ranking__rank tabular-nums">{{ i + 1 }}</span>
              <span class="ranking__athlete">
                <a :href="`/resultats/${row.slug}`">{{ row.name }}</a>
                <small class="stat-label">{{ formatWeightClass(row.weightClass) }}</small>
              </span>
              <span class="ranking__value stat-value tabular-nums">{{ row[board.key] }}<small class="stat-unit">{{ board.unit }}</small></span>
            </li>
          </ol>
          <p v-else class="ranking__empty">Aucun résultat pour ces filtres.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ranking__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5) var(--space-7);
  margin-bottom: var(--space-7);
}

.ranking__filter {
  display: grid;
  gap: var(--space-2);
}

.ranking__filter .results__tabs {
  justify-content: flex-start;
  gap: var(--space-2);
  margin-bottom: 0;
}

.ranking__filter .results__tab {
  padding: 9px 18px;
}

.ranking__boards {
  display: grid;
  gap: var(--space-5);
}

.ranking__board {
  padding: var(--space-5);
  min-width: 0;
}

.ranking__board-title {
  font-size: 24px;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.ranking__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ranking__row {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  border-top: 1px solid var(--border-card);
}

.ranking__rank {
  width: 1.5em;
  flex-shrink: 0;
  font-family: var(--font-display);
  color: var(--text-muted);
}

.ranking__row:first-child .ranking__rank {
  color: var(--color-red);
}

.ranking__athlete {
  flex: 1;
  min-width: 0;
  font-weight: 600;
  color: var(--text-primary);
}

.ranking__athlete a {
  text-decoration: none;
}

.ranking__athlete a:hover {
  color: var(--color-red);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ranking__athlete small {
  margin-left: var(--space-1);
  white-space: nowrap;
}

.ranking__value {
  font-size: 22px;
  white-space: nowrap;
}

.ranking__value .stat-unit {
  font-size: 13px;
}

.ranking__empty {
  color: var(--text-muted);
  font-size: 14px;
}

@media (min-width: 768px) {
  .ranking__filters {
    justify-content: center;
  }

  .ranking__filter {
    justify-items: center;
  }

  .ranking__boards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
