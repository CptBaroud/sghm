import data from '~~/sghm_athletes_results.json'

// Found athletes with at least one valid result; DQ dropped, newest first
export const clubAthletes = data.athletes.flatMap((athlete) => {
  const results = (athlete.results ?? [])
    .filter((r) => r.place !== 'DQ')
    .toSorted((a, b) => b.date.localeCompare(a.date))
  const latest = results[0]
  if (!athlete.matchedName || !latest) return []

  return [{
    name: athlete.matchedName,
    slug: normalizeName(athlete.matchedName).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    sex: latest.sex,
    // FFForce "Open" is an all-ages category, not an age division
    division: (results.find((r) => r.division !== 'Open') ?? latest).division,
    weightClass: latest.weightClassKg,
    latest,
    results
  }]
})

export const formatWeightClass = (kg: string) => (kg.endsWith('+') ? `${kg} kg` : `-${kg} kg`)

// Case and accent insensitive: "coued" matches "Couëdel"
export function normalizeName(s: string) {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
}

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
