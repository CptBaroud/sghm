<script setup lang="ts">
// Home keeps its own full title instead of the "%s | SGHM Guérande" template; og:image comes from public/og-image.jpg
useHead({ titleTemplate: '%s' })
useSeoMeta({ title: 'Salle de Musculation Guérande | SGHM — Club Associatif FFForce' })
</script>

<template>
  <HeroSection />
  <ClubLifeSection />
  <section class="section practices">
    <div class="container">
      <div class="section__head section__head--center">
        <h2 class="section__title">S'entraîner à la SGHM</h2>
        <p class="section__lede">
          Musculation à son rythme, force athlétique en compétition ou séances avec le coach : choisissez votre pratique.
        </p>
      </div>
      <PageCards :links="['/musculation', '/force-athletique', '/coaching', '/horaires-tarifs']" />
    </div>
  </section>
  <GallerySection />
  <MovementsSection />
  <ScheduleSection />
  <ResultsSection />
  <PreorderSection />
  <ContactSection />
</template>

<style scoped>
.practices {
  padding-top: 0;
}
</style>
