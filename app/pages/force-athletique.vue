<script setup lang="ts">
useSeoMeta({
  title: 'Force athlétique',
  description: 'Force athlétique (powerlifting) à Guérande : squat, développé couché et soulevé de terre, licence compétition FFForce, résultats du club.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Force athlétique' }] })

type Lift = 'squat' | 'bench' | 'deadlift' | 'total'

// Club record per lift, for women and men (kg are not comparable across sexes)
const records = ([
  ['squat', 'Squat'],
  ['bench', 'Développé couché'],
  ['deadlift', 'Soulevé de terre'],
  ['total', 'Total']
] as [Lift, string][]).map(([key, title]) => ({
  title,
  rows: [['F', 'Femmes'], ['M', 'Hommes']].flatMap(([sex, label]) => {
    const top = clubRanking.filter((a) => a.sex === sex && a[key] > 0).toSorted((a, b) => b[key] - a[key])[0]
    return top ? [{ label, name: top.name, slug: top.slug, value: top[key] }] : []
  })
}))
</script>

<template>
  <ActivityPage
    title="Force"
    accent="athlétique"
    lede="Soulever la charge la plus lourde possible sur trois mouvements : squat, développé couché et soulevé de terre. La SGHM est affiliée à la Fédération Française de Force (FFForce)."
    photo="/hero@2x.jpg"
    photo-alt="Athlète en squat sur le plateau de la salle de musculation SGHM à Guérande"
    :facts="[
      { icon: 'flag', label: 'Club affilié FFForce' },
      { icon: 'trophy', label: '10+ compétiteurs licenciés' },
      { icon: 'equipment', label: 'Matériel aux normes IPF' }
    ]"
    :features="[
      { icon: 'discipline', title: 'Règles IPF', text: 'Les mouvements se travaillent selon les règles d\'arbitrage appliquées sur le plateau.' },
      { icon: 'equipment', title: 'Matériel de compétition', text: 'Racks de compétition, barres 20 kg et 15 kg, disques calibrés aux normes IPF.' },
      { icon: 'trophy', title: 'Résultats suivis', text: 'Les performances des athlètes du club sont publiées et classées sur ce site.' }
    ]"
    split-title="Se lancer en compétition"
    split-photo="/deadlift.jpg"
    :gallery="[
      { src: '/gallery/05.jpg', caption: 'Développé couché' },
      { src: '/gallery/23.jpg', caption: 'Séance de force' },
      { src: '/gallery/18.jpg', caption: 'Plateau de soulevé de terre' }
    ]"
    :cta="{
      title: 'Licence compétiteur',
      text: '100 € par an, inscription sur place à la salle.',
      primary: { label: 'Nous contacter', href: '/#contact' },
      secondary: { label: 'Résultats du club', href: '/resultats' }
    }"
    :related="['/musculation', '/coaching']"
  >
    <p>
      La licence compétiteur coûte <strong>100 € par an</strong> et se prend sur place, à la salle. Le
      <NuxtLink to="/coaching">coach</NuxtLink> aide à préparer les mouvements selon les règles d'arbitrage.
    </p>
    <p>
      Le remboursement des compétitions et la charte du compétiteur sont détaillés dans le
      <a href="/documents/reglement-interieur-sghm-2026.pdf" target="_blank">règlement intérieur</a>.
    </p>

    <template #extra>
      <div class="records">
        <h2 class="section__title">Classement du club</h2>
        <p class="section__lede">
          Les records des athlètes de la SGHM en compétition. Le classement complet donne le top 5 par mouvement, en kg
          ou en points IPF, par division et par sexe.
        </p>
        <div class="records__grid">
          <article v-for="record in records" :key="record.title" class="card records__card">
            <span class="records__watermark" aria-hidden="true"><IconGlyph name="trophy" :size="96" /></span>
            <h3 class="records__title">{{ record.title }}</h3>
            <ul class="records__list">
              <li v-for="row in record.rows" :key="row.label" class="records__row">
                <span class="records__who">
                  <NuxtLink :to="`/resultats/${row.slug}`">{{ row.name }}</NuxtLink>
                  <small class="stat-label">{{ row.label }}</small>
                </span>
                <span class="stat-value tabular-nums">{{ row.value }}<small class="stat-unit">kg</small></span>
              </li>
            </ul>
          </article>
        </div>
        <NuxtLink to="/classement" class="btn btn-primary records__cta">
          Voir le classement complet
          <IconGlyph name="arrow-right" :size="15" />
        </NuxtLink>
      </div>
    </template>
  </ActivityPage>
  <MovementsSection />
</template>

<style scoped>
.records {
  margin-top: var(--space-9);
}

.records__grid {
  margin-top: var(--space-6);
  display: grid;
  gap: var(--space-4);
}

.records__card {
  position: relative;
  overflow: hidden;
  padding: var(--space-5);
}

.records__watermark {
  position: absolute;
  right: -14px;
  bottom: -14px;
  color: var(--color-red);
  opacity: 0.08;
  line-height: 0;
  pointer-events: none;
}

.records__title {
  font-size: 20px;
  color: var(--text-primary);
}

.records__list {
  position: relative;
  list-style: none;
  margin: var(--space-4) 0 0;
  padding: 0;
  display: grid;
  gap: var(--space-3);
}

.records__row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-3);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border-card);
}

.records__row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.records__who {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.records__who a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
}

.records__who a:hover {
  color: var(--color-red);
}

.records__row .stat-value {
  font-size: 28px;
  color: var(--color-red);
}

.records__row .stat-unit {
  font-size: 14px;
}

.records__cta {
  margin-top: var(--space-6);
  border-radius: var(--radius-pill);
}

@media (min-width: 640px) {
  .records__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .records__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
