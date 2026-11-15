<script setup lang="ts">
useSeoMeta({
  title: 'Coach et cours collectif',
  description: 'Un coach présent le mardi et le mercredi à la salle de musculation SGHM de Guérande, et un cours collectif le mardi soir.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Coach et cours collectif' }] })
</script>

<template>
  <section class="section">
    <div class="container legal">
      <h1 class="section__title">Coach et cours collectif</h1>
      <p>
        Un coach est présent à la salle le <strong>mardi</strong> et le <strong>mercredi</strong>, pendant les horaires
        d'ouverture. Il est là pour corriger la technique, conseiller sur la programmation et aider les nouveaux
        adhérents à prendre leurs marques.
      </p>

      <h2>Cours collectif du mardi soir</h2>
      <!-- TODO: add the exact class time and content once confirmed by the coach -->
      <p>
        Chaque mardi soir, le coach anime un cours collectif. C'est l'occasion de travailler les bases en groupe,
        d'apprendre les bons placements et de progresser dans une ambiance conviviale, quel que soit le niveau.
      </p>

      <h2>Pour qui ?</h2>
      <p>
        Débutants qui veulent apprendre les mouvements en sécurité, pratiquants réguliers qui veulent un regard
        extérieur sur leur technique, ou futurs compétiteurs en force athlétique.
      </p>

      <p class="legal__see-also">
        Voir aussi : <NuxtLink to="/musculation">la pratique loisir</NuxtLink> ·
        <NuxtLink to="/force-athletique">la force athlétique</NuxtLink> ·
        <a href="/#tarifs">horaires et tarifs</a>
      </p>
    </div>
  </section>
</template>
