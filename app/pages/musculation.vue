<script setup lang="ts">
useSeoMeta({
  title: 'Musculation loisir',
  description: 'Musculation en accès libre à Guérande : créneaux 7j/7, licence loisir FFForce dès 16 ans, inscription en ligne sur HelloAsso.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Musculation loisir' }] })
</script>

<template>
  <section class="section">
    <div class="container legal">
      <h1 class="section__title">Musculation loisir</h1>
      <p>
        La majorité des adhérents vient à la SGHM pour une raison simple : s'entraîner régulièrement, à son rythme,
        sans objectif de compétition. La salle est ouverte 7 jours sur 7 en créneaux libres.
      </p>

      <h2>Comment ça marche</h2>
      <p>
        Vous venez quand vous voulez pendant les horaires d'ouverture et suivez votre propre programme. Les autres
        membres sont là pour une parade sur un squat lourd ou un conseil, et le
        <NuxtLink to="/coaching">coach</NuxtLink> est présent le mardi et le mercredi.
      </p>

      <h2>Licence loisir</h2>
      <p>
        100 € par an pour les adultes, 70 € pour les 16-17 ans (accompagnement d'un adulte obligatoire). Tarif
        réduit de 50 % pour une licence prise après le 1er mai. Pas de séance d'essai.
      </p>
      <p>
        <a :href="HELLOASSO_LOISIR_URL" target="_blank" rel="noopener" class="btn btn-primary">
          S'inscrire sur HelloAsso
        </a>
      </p>

      <p class="legal__see-also">
        Voir aussi : <NuxtLink to="/force-athletique">la force athlétique</NuxtLink> ·
        <a href="/#tarifs">horaires et tarifs</a>
      </p>
    </div>
  </section>
</template>
