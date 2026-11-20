<script setup lang="ts">
// Home keeps its own full title instead of the "%s | SGHM Guérande" template; og:image comes from public/og-image.jpg
useHead({ titleTemplate: '%s' })
useSeoMeta({ title: 'Salle de Musculation Guérande | SGHM — Club Associatif FFForce' })
</script>

<template>
  <HeroSection />
  <ClubLifeSection />
  <GallerySection />
  <MovementsSection />
  <ScheduleSection />
  <ResultsSection />
  <PreorderSection />
  <ContactSection />
</template>
