<script setup lang="ts">
type Discipline = 'complete' | 'bench'

const tabs: { id: Discipline; label: string; icon: 'trophy' | 'flag' }[] = [
  { id: 'complete', label: 'Force Athlétique (SBD)', icon: 'trophy' },
  { id: 'bench', label: 'Développé Couché Seul', icon: 'flag' }
]

const activeTab = ref<Discipline>('complete')

interface FullResult {
  athlete: string
  category: string
  competition: string
  place: string
  year: string
  squat: number
  bench: number
  deadlift: number
  total: number
  result: string
  highlight?: boolean
}

interface BenchResult {
  athlete: string
  category: string
  competition: string
  place: string
  year: string
  bench: number
  result: string
  highlight?: boolean
}

const internationalResults: FullResult[] = [
  {
    athlete: 'Patrice Adam',
    category: 'Masters 1 -67.5 kg',
    competition: 'European Masters Powerlifting Championships',
    place: 'Hamm, Luxembourg',
    year: '2008',
    squat: 185,
    bench: 135,
    deadlift: 225,
    total: 545,
    result: '4e place'
  }
]

const nationalResults: FullResult[] = [
  {
    athlete: 'Marine Couëdel',
    category: 'Juniors -76 kg',
    competition: 'Championnats de France Jeunes de Force Athlétique',
    place: "Villenave-d'Ornon",
    year: '2025',
    squat: 137.5,
    bench: 85,
    deadlift: 172.5,
    total: 395,
    result: '10e place'
  },
  {
    athlete: 'Lenaïg Celle',
    category: 'Open -47 kg',
    competition: 'Championnats de France de Force Athlétique Open',
    place: 'Marseille',
    year: '2025',
    squat: 95,
    bench: 62.5,
    deadlift: 150,
    total: 307.5,
    result: '9e place'
  }
]

const regionalResults: FullResult[] = [
  {
    athlete: 'Tristan Avril-Allain',
    category: 'Seniors -105 kg',
    competition: 'Championnats Départementaux FA Seniors & Masters Mixes',
    place: 'Guérande',
    year: '2025',
    squat: 212.5,
    bench: 117.5,
    deadlift: 252.5,
    total: 582.5,
    result: '3e place'
  },
  {
    athlete: 'Gurvan Seveno',
    category: 'Seniors -105 kg',
    competition: 'Championnats Départementaux FA Seniors & Masters Mixes',
    place: 'Guérande',
    year: '2025',
    squat: 210,
    bench: 130,
    deadlift: 242.5,
    total: 582.5,
    result: '4e place'
  },
  {
    athlete: 'Marine Couëdel',
    category: 'Juniors -69 kg',
    competition: 'Challenge de Rezé Jeunes Mixtes',
    place: 'Rezé',
    year: '2025',
    squat: 137.5,
    bench: 92.5,
    deadlift: 170,
    total: 400,
    result: '1ère place',
    highlight: true
  },
  {
    athlete: 'Céliane Jaltier',
    category: 'Seniors -63 kg',
    competition: 'Grand Prix des Pays de la Loire',
    place: 'Nantes',
    year: '2026',
    squat: 110,
    bench: 80,
    deadlift: 145,
    total: 335,
    result: '3e place'
  },
  {
    athlete: 'Lenaïg Celle',
    category: 'Seniors -47 kg',
    competition: 'Grand Prix des Pays de la Loire',
    place: 'Nantes',
    year: '2026',
    squat: 105,
    bench: 65,
    deadlift: 160,
    total: 330,
    result: '1ère place',
    highlight: true
  }
]

const internationalBench: BenchResult[] = [
  {
    athlete: 'Richard Bertho',
    category: 'Masters 1 -105 kg',
    competition: 'World Classic & Equipped Bench Press Championships',
    place: 'Warsaw, Pologne',
    year: '2026',
    bench: 210,
    result: '3e place'
  }
]

const nationalBench: BenchResult[] = [
  {
    athlete: 'Richard Bertho',
    category: 'Open -105 kg',
    competition: 'Championnats de France de Développé Couché',
    place: 'La Garde',
    year: '2023',
    bench: 212.5,
    result: '1ère place',
    highlight: true
  },
  {
    athlete: 'Gérard Leiterer',
    category: 'Masters 3 -83 kg',
    competition: 'Championnats de France Powerlifting / Bench Press',
    place: 'Pontoise',
    year: '2020',
    bench: 150,
    result: '2e place'
  },
  {
    athlete: 'Patrice Adam',
    category: 'Masters 2 -74 kg',
    competition: 'Championnats de France de Développé Couché',
    place: 'Châteaubernard',
    year: '2024',
    bench: 130,
    result: '4e place'
  },
  {
    athlete: 'Serge Bodin',
    category: 'Masters 3 -105 kg',
    competition: 'Championnats de France Développé Couché',
    place: 'Albi',
    year: '2018',
    bench: 127.5,
    result: '4e place'
  },
  {
    athlete: 'Marine Couëdel',
    category: 'Juniors -69 kg',
    competition: 'Championnats de France de Développé Couché',
    place: 'Le Crès',
    year: '2026',
    bench: 92.5,
    result: '4e place'
  },
  {
    athlete: 'Céliane Jaltier',
    category: 'Open -63 kg',
    competition: 'Championnats de France de Développé Couché',
    place: 'Le Crès',
    year: '2026',
    bench: 82.5,
    result: '11e place'
  },
  {
    athlete: 'Lenaïg Celle',
    category: 'Open -47 kg',
    competition: 'Championnats de France de Développé Couché',
    place: 'Le Crès',
    year: '2026',
    bench: 60,
    result: '3e place'
  }
]

const regionalBench: BenchResult[] = [
  {
    athlete: 'Richard Bertho',
    category: 'Masters 1 -105 kg',
    competition: 'Grand prix des marais salants',
    place: 'Guérande',
    year: '2024',
    bench: 207.5,
    result: '1ère place',
    highlight: true
  },
  {
    athlete: 'Gérard Leiterer',
    category: 'Masters 3 -83 kg',
    competition: 'Régional DC BP Ligérienne',
    place: 'Saint-Joachim',
    year: '2019',
    bench: 140,
    result: '1ère place',
    highlight: true
  },
  {
    athlete: 'Teddy Lecuyer',
    category: 'Seniors -93 kg',
    competition: 'Championnats Départementaux DC/BP Ligérienne',
    place: 'Challans',
    year: '2025',
    bench: 135,
    result: '2e place'
  },
  {
    athlete: 'Yohann Jambon',
    category: 'Seniors -105 kg',
    competition: 'Championnat Régional DC/BP Ligérienne',
    place: 'La Bugallière',
    year: '2025',
    bench: 135,
    result: '3e place'
  },
  {
    athlete: 'Patrice Adam',
    category: 'Masters 2 -74 kg',
    competition: 'Grand prix des marais salants',
    place: 'Guérande',
    year: '2024',
    bench: 125,
    result: '1ère place',
    highlight: true
  },
  {
    athlete: 'Serge Bodin',
    category: 'Masters 3 -105 kg',
    competition: 'Départemental DC BP Ligérienne',
    place: 'Guérande',
    year: '2018',
    bench: 125,
    result: '1ère place',
    highlight: true
  },
  {
    athlete: 'Tristan Avril-Allain',
    category: 'Seniors -105 kg',
    competition: 'Grand prix des marais salants',
    place: 'Guérande',
    year: '2024',
    bench: 120,
    result: '2e place'
  },
  {
    athlete: 'Marine Couëdel',
    category: 'Juniors -76 kg',
    competition: 'Championnat Régional DC/BP Ligérienne',
    place: 'Guérande',
    year: '2024',
    bench: 92.5,
    result: '1ère place',
    highlight: true
  },
  {
    athlete: 'Céliane Jaltier',
    category: 'Seniors -63 kg',
    competition: 'Championnat Régional DC/BP Ligérienne',
    place: 'La Bugallière',
    year: '2025',
    bench: 80.5,
    result: '1ère place',
    highlight: true
  },
  {
    athlete: 'Lenaïg Celle',
    category: 'Seniors -47 kg',
    competition: 'Championnat Régional DC/BP Ligérienne',
    place: 'La Bugallière',
    year: '2025',
    bench: 62.5,
    result: '1ère place',
    highlight: true
  }
]

// Homepage only shows the current and previous year (evaluated at build/render time), newest first
const minYear = new Date().getFullYear() - 1
const recent = <T extends { year: string }>(rows: T[]) => rows.filter((row) => Number(row.year) >= minYear).toSorted((a, b) => b.year.localeCompare(a.year))

const completePanels = computed(() => [
  { title: 'Compétitions Internationales', icon: 'trophy' as const, rows: recent(internationalResults) },
  { title: 'Compétitions Nationales', icon: 'trophy' as const, rows: recent(nationalResults) },
  { title: 'Compétitions Régionales & Épreuves de Ligue', icon: 'flag' as const, rows: recent(regionalResults) }
].filter((panel) => panel.rows.length > 0))

const benchPanels = computed(() => [
  { title: 'Compétitions Internationales', icon: 'trophy' as const, rows: recent(internationalBench) },
  { title: 'Compétitions Nationales', icon: 'trophy' as const, rows: recent(nationalBench) },
  { title: 'Compétitions Régionales & Épreuves de Ligue', icon: 'flag' as const, rows: recent(regionalBench) }
].filter((panel) => panel.rows.length > 0))
</script>

<template>
  <section id="resultats" class="section results">
    <div class="container">
      <div class="section__head section__head--center">
        <h2 class="section__title">Résultats Récents du Club</h2>
        <p class="section__lede">
          Résultats des athlètes du club sur les plateaux FFForce et IPF.
        </p>
      </div>

      <div class="results__tabs" role="tablist" aria-label="Filtrer par discipline">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab.id"
          class="results__tab"
          :class="{ 'results__tab--active': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <IconGlyph :name="tab.icon" :size="15" />
          {{ tab.label }}
        </button>
      </div>

      <div v-if="activeTab === 'complete'" class="results__panels">
        <div v-for="panel in completePanels" :key="panel.title" class="results__panel">
          <h3 class="results__panel-title">
            <IconGlyph :name="panel.icon" :size="15" />
            {{ panel.title }}
          </h3>
          <div class="results__table-wrap">
            <table class="results__table">
              <thead>
                <tr>
                  <th>Athlète &amp; Catégorie</th>
                  <th>Compétition &amp; Lieu</th>
                  <th class="tabular-nums">Squat</th>
                  <th class="tabular-nums">Bench</th>
                  <th class="tabular-nums">Deadlift</th>
                  <th class="tabular-nums">Total</th>
                  <th>Résultat / Titre</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in panel.rows" :key="row.athlete">
                  <td>
                    <div class="results__cell-main">{{ row.athlete }}</div>
                    <div class="results__cell-sub">{{ row.category }}</div>
                  </td>
                  <td>
                    <div class="results__cell-main results__cell-main--clip" :title="row.competition">{{ row.competition }}</div>
                    <div class="results__cell-sub">
                      <span class="results__place-clip" :title="row.place">{{ row.place }}</span> — {{ row.year }}
                    </div>
                  </td>
                  <td class="tabular-nums">{{ row.squat }} kg</td>
                  <td class="tabular-nums">{{ row.bench }} kg</td>
                  <td class="tabular-nums">{{ row.deadlift }} kg</td>
                  <td class="tabular-nums results__total">{{ row.total }} kg</td>
                  <td>
                    <span class="results__pill" :class="{ 'results__pill--highlight': row.highlight }">
                      {{ row.result }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div v-else class="results__panels">
        <div v-for="panel in benchPanels" :key="panel.title" class="results__panel">
          <h3 class="results__panel-title">
            <IconGlyph :name="panel.icon" :size="15" />
            {{ panel.title }}
          </h3>
          <div class="results__table-wrap">
            <table class="results__table">
              <thead>
                <tr>
                  <th>Athlète &amp; Catégorie</th>
                  <th>Compétition &amp; Lieu</th>
                  <th class="tabular-nums">Bench</th>
                  <th>Résultat / Titre</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in panel.rows" :key="row.athlete">
                  <td>
                    <div class="results__cell-main">{{ row.athlete }}</div>
                    <div class="results__cell-sub">{{ row.category }}</div>
                  </td>
                  <td>
                    <div class="results__cell-main results__cell-main--clip" :title="row.competition">{{ row.competition }}</div>
                    <div class="results__cell-sub">
                      <span class="results__place-clip" :title="row.place">{{ row.place }}</span> — {{ row.year }}
                    </div>
                  </td>
                  <td class="tabular-nums results__total">{{ row.bench }} kg</td>
                  <td>
                    <span class="results__pill" :class="{ 'results__pill--highlight': row.highlight }">
                      {{ row.result }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="results__links">
        <a href="/resultats" class="btn btn-secondary">
          Tous les résultats
          <IconGlyph name="arrow-right" :size="15" />
        </a>
        <a href="/classement" class="btn btn-secondary">
          Classement du club
          <IconGlyph name="arrow-right" :size="15" />
        </a>
      </div>
    </div>
  </section>
</template>
