<script setup lang="ts">
useSeoMeta({
  title: 'Horaires et tarifs',
  description: 'Horaires d\'ouverture de la salle de musculation SGHM à Guérande et tarifs des licences loisir et compétition FFForce.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Horaires et tarifs' }] })
</script>

<template>
  <!-- ContactSection backs the "S'inscrire sur place" button (#contact) -->
  <ScheduleSection standalone />
  <ContactSection />
</template>
