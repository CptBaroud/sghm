<script setup lang="ts">
const route = useRoute()
const athlete = clubAthletes.find((a) => a.slug === route.params.slug)
if (!athlete) throw createError({ statusCode: 404, statusMessage: 'Athlète introuvable', fatal: true })

type Result = (typeof clubAthletes)[number]['results'][number]
type Lift = 'squat' | 'bench' | 'deadlift'

const sbdLifts = [
  { key: 'squat', label: 'Squat' },
  { key: 'bench', label: 'Bench' },
  { key: 'deadlift', label: 'Deadlift' }
] as const

// Same split as the home results section; a bench-only meet's total is its bench
const tables = [
  { title: 'Force Athlétique (SBD)', icon: 'trophy' as const, lifts: sbdLifts, rows: athlete.results.filter((r) => r.event !== 'B') },
  { title: 'Développé Couché Seul', icon: 'flag' as const, lifts: [sbdLifts[1]], rows: athlete.results.filter((r) => r.event === 'B') }
]
  .filter((table) => table.rows.length > 0)
  .map((table) => {
    const best = Math.max(...table.rows.map((r) => r.totalKg ?? 0))
    return { ...table, best, rows: table.rows.map((r) => ({ ...r, isBest: r.totalKg === best })) }
  })

// Unique, data-rich title/description per athlete; canonical, og:* and twitter:* are derived by Nuxt SEO
const category = `${athlete.division} ${formatWeightClass(athlete.weightClass)}`
const records = tables.map((t) => `${t.lifts.length > 1 ? 'meilleur total' : 'meilleur développé couché'} ${t.best} kg`)
const count = `${athlete.results.length} compétition${athlete.results.length > 1 ? 's' : ''}`

useSeoMeta({
  title: `${athlete.name} — Résultats`,
  description: `Résultats de ${athlete.name}, athlète de la SGHM Guérande (${category}) : ${count} FFForce et IPF, ${records.join(', ')}.`
})
// Absolute @ids: relative ones get rewritten differently per node and stop linking up
const { url: siteUrl } = useSiteConfig()
const athleteId = `${siteUrl}/resultats/${athlete.slug}#athlete`
useSchemaOrg([
  defineWebPage({ '@type': 'ProfilePage', mainEntity: { '@id': athleteId } }),
  definePerson({ '@id': athleteId, name: athlete.name, memberOf: { '@id': `${siteUrl}/#identity` } })
])
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Résultats' }, { label: athlete.name }] })
defineOgImage(
  'Sghm',
  { title: athlete.name, description: [category, ...records].join(' · ') },
  { alt: `Résultats de ${athlete.name}, SGHM Guérande` }
)

const attempts = (r: Result, lift: Lift) => [r[lift].attempt1, r[lift].attempt2, r[lift].attempt3].filter((kg) => kg !== null)
const formatKg = (kg: number | null) => (kg === null ? '—' : `${kg} kg`)
const formatPlace = (place: string) => (place === 'G' ? 'Invité' : place === '1' ? '1ère place' : `${place}e place`)
</script>

<template>
  <section class="section">
    <div class="container">
      <a href="/resultats" class="athlete-page__back"><span aria-hidden="true">←</span> Tous les résultats</a>

      <div class="section__head">
        <h1 class="section__title">{{ athlete.name }}</h1>
        <p class="section__lede">
          {{ formatWeightClass(athlete.weightClass) }} · {{ athlete.division }} ·
          {{ athlete.results.length }} compétition{{ athlete.results.length > 1 ? 's' : '' }}
        </p>
      </div>

      <div class="results__panels">
        <div v-for="table in tables" :key="table.title" class="results__panel">
          <h2 class="results__panel-title">
            <IconGlyph :name="table.icon" :size="15" />
            {{ table.title }}
          </h2>
          <div class="results__table-wrap athlete-page__table">
            <table class="results__table">
              <thead>
                <tr>
                  <th>Compétition &amp; Lieu</th>
                  <th>Catégorie</th>
                  <th v-for="lift in table.lifts" :key="lift.key" class="tabular-nums">{{ lift.label }}</th>
                  <th v-if="table.lifts.length > 1" class="tabular-nums">Total</th>
                  <th class="tabular-nums">Points IPF</th>
                  <th>Résultat</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="meet in table.rows"
                  :key="`${meet.date}-${meet.meetName}`"
                  :class="{ 'athlete-page__best': meet.isBest }"
                >
                  <td>
                    <div class="results__cell-main results__cell-main--clip" :title="meet.meetName">{{ meet.meetName }}</div>
                    <div class="results__cell-sub">
                      {{ formatDate(meet.date) }}<template v-if="meet.meetTown"> · <span class="results__place-clip" :title="meet.meetTown">{{ meet.meetTown }}</span></template>
                    </div>
                  </td>
                  <td>
                    <div class="results__cell-main">{{ formatWeightClass(meet.weightClassKg) }}</div>
                    <div class="results__cell-sub">
                      {{ meet.division }}<template v-if="meet.equipment !== 'Raw'"> · Équipé</template>
                    </div>
                  </td>
                  <td
                    v-for="lift in table.lifts"
                    :key="lift.key"
                    class="tabular-nums"
                    :class="{ results__total: table.lifts.length === 1 }"
                  >
                    {{ formatKg(meet[lift.key].best3) }}
                    <div class="results__cell-sub athlete-page__attempts">
                      <span
                        v-for="(kg, n) in attempts(meet, lift.key)"
                        :key="n"
                        :class="{ 'attempt--dim': kg !== meet[lift.key].best3, 'attempt--failed': kg < 0 }"
                      >
                        {{ Math.abs(kg) }}<span v-if="kg < 0" class="visually-hidden"> (manqué)</span>
                      </span>
                    </div>
                  </td>
                  <td v-if="table.lifts.length > 1" class="tabular-nums results__total">{{ formatKg(meet.totalKg) }}</td>
                  <td class="tabular-nums">{{ meet.goodlift ?? '—' }}</td>
                  <td>
                    <div class="athlete-page__pills">
                      <span class="results__pill">{{ formatPlace(meet.place) }}</span>
                      <span v-if="meet.isBest" class="results__pill results__pill--highlight">Record perso</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mobile: same rows as cards -->
          <ul class="meets">
            <li
              v-for="meet in table.rows"
              :key="`${meet.date}-${meet.meetName}`"
              class="card meet"
              :class="{ 'meet--best': meet.isBest }"
            >
              <div class="meet__heading">
                <h3 class="meet__name" :title="meet.meetName">{{ meet.meetName }}</h3>
                <p class="meet__info">{{ [formatDate(meet.date), meet.meetTown].filter(Boolean).join(' · ') }}</p>
              </div>

              <div class="meet__meta">
                <p class="stat-class">
                  {{ formatWeightClass(meet.weightClassKg)
                  }}<small class="stat-label">{{ meet.division }}<template v-if="meet.equipment !== 'Raw'"> · Équipé</template></small>
                </p>
                <div class="athlete-page__pills">
                  <span class="results__pill">{{ formatPlace(meet.place) }}</span>
                  <span v-if="meet.isBest" class="results__pill results__pill--highlight">Record perso</span>
                </div>
              </div>

              <div class="meet__body">
                <div>
                  <p class="meet__total stat-total tabular-nums">{{ meet.totalKg }}<small class="stat-unit">kg</small></p>
                  <p v-if="meet.goodlift" class="meet__points stat-label">{{ meet.goodlift }} pts IPF</p>
                </div>

                <table class="meet__attempts">
                  <caption class="visually-hidden">Essais</caption>
                  <thead>
                    <tr>
                      <th scope="col"><span class="visually-hidden">Mouvement</span></th>
                      <th scope="col" class="stat-label">1</th>
                      <th scope="col" class="stat-label">2</th>
                      <th scope="col" class="stat-label">3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="lift in table.lifts" :key="lift.key">
                      <th scope="row" class="stat-label">{{ lift.label }}</th>
                      <td
                        v-for="(kg, n) in attempts(meet, lift.key)"
                        :key="n"
                        class="stat-value tabular-nums"
                        :class="{ 'attempt--dim': kg !== meet[lift.key].best3, 'attempt--failed': kg < 0 }"
                      >
                        {{ Math.abs(kg) }}<span v-if="kg < 0" class="visually-hidden"> (manqué)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.athlete-page__back {
  display: inline-flex;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
}

.athlete-page__back:hover {
  color: var(--color-red);
}

/* 8 columns: tighter than the home table so it fits the container on desktop */
.results__table th,
.results__table td {
  padding-left: 12px;
  padding-right: 12px;
}

.athlete-page__best td,
.meet--best {
  background: color-mix(in srgb, var(--color-red) 8%, var(--surface-card));
}

.athlete-page__attempts {
  display: flex;
  gap: 6px;
}

.athlete-page__pills {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-1);
}

/* Cards below 768px, table above */
.athlete-page__table {
  display: none;
}

.meets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-4);
}

.meet {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-5);
  min-width: 0;
}

.meet--best {
  border-color: var(--color-red);
}

.meet__heading {
  min-width: 0;
}

.meet__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2) var(--space-3);
}

.meet__meta .athlete-page__pills {
  flex-direction: row;
}

.meet__name,
.meet__info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.meet__name {
  font-size: 20px;
  color: var(--text-primary);
}

.meet__info {
  margin-top: var(--space-1);
  font-size: 13px;
  color: var(--text-muted);
}

.meet__body {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-4) var(--space-6);
  margin-top: var(--space-2);
}

.meet__total {
  font-size: 64px;
}

.meet__points {
  margin-top: var(--space-2);
}

.meet__attempts {
  border-collapse: collapse;
}

.meet__attempts th,
.meet__attempts td {
  padding: 4px 10px;
  text-align: right;
}

.meet__attempts tbody th {
  padding-left: 0;
  text-align: left;
}

.meet__attempts td {
  font-size: 24px;
}

@media (min-width: 768px) {
  .athlete-page__table {
    display: block;
  }

  .meets {
    display: none;
  }
}
</style>
