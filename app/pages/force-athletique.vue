<script setup lang="ts">
useSeoMeta({
  title: 'Force athlétique',
  description: 'Force athlétique (powerlifting) à Guérande : squat, développé couché et soulevé de terre, licence compétition FFForce, résultats du club.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Force athlétique' }] })
</script>

<template>
  <section class="section">
    <div class="container legal">
      <h1 class="section__title">Force athlétique</h1>
      <p>
        La force athlétique (powerlifting) consiste à soulever la charge la plus lourde possible sur trois
        mouvements : le squat, le développé couché et le soulevé de terre. La SGHM est affiliée à la Fédération
        Française de Force (FFForce) et une dizaine de ses adhérents sont licenciés en compétition.
      </p>

      <h2>Se lancer en compétition</h2>
      <p>
        La licence compétiteur coûte 100 € par an et se prend sur place, à la salle. Le
        <NuxtLink to="/coaching">coach</NuxtLink> aide à préparer les mouvements selon les règles d'arbitrage.
        Le remboursement des compétitions et la charte du compétiteur sont détaillés dans le
        <a href="/documents/reglement-interieur-sghm-2026.pdf" target="_blank">règlement intérieur</a>.
      </p>

      <p class="legal__see-also">
        Voir aussi : <NuxtLink to="/resultats">résultats du club</NuxtLink> ·
        <NuxtLink to="/classement">classement</NuxtLink> ·
        <NuxtLink to="/musculation">la pratique loisir</NuxtLink>
      </p>
    </div>
  </section>
  <MovementsSection />
</template>
