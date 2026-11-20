import data from '~~/data/athletes.json'

// Found athletes with at least one valid result; DQ dropped, newest first
export const clubAthletes = data.athletes.flatMap((athlete) => {
  const results = (athlete.results ?? [])
    .filter((r) => r.place !== 'DQ')
    .toSorted((a, b) => b.date.localeCompare(a.date))
  const latest = results[0]
  if (!latest) return []

  return [{
    name: athlete.name,
    slug: normalizeName(athlete.name).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    sex: latest.sex,
    // FFForce "Open" is an all-ages category, not an age division
    division: (results.find((r) => r.division !== 'Open') ?? latest).division,
    weightClass: latest.weightClassKg,
    latest,
    results
  }]
})

const best = (values: (number | null)[]) => Math.max(0, ...values.map((v) => v ?? 0))

// Best lift of each athlete across all their meets; totals and IPF points only count full SBD meets
export const clubRanking = clubAthletes.map((athlete) => {
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

export const formatWeightClass = (kg: string) => (kg.endsWith('+') ? `${kg} kg` : `-${kg} kg`)

// Case and accent insensitive: "coued" matches "Couëdel"
export function normalizeName(s: string) {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
}

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
