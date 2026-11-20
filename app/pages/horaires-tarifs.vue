<script setup lang="ts">
useSeoMeta({
  title: 'Horaires et tarifs',
  description: 'Horaires d\'ouverture de la salle de musculation SGHM à Guérande et tarifs des licences loisir et compétition FFForce.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Horaires et tarifs' }] })

const photos = [
  { src: '/gallery/24.jpg', caption: 'Bancs et haltères' },
  { src: '/gallery/20.jpg', caption: 'Plateau de soulevé de terre' },
  { src: '/gallery/26.jpg', caption: 'Racks et barres' },
  { src: '/gallery/15.jpg', caption: 'Machines et cardio' }
]
</script>

<template>
  <!-- ContactSection backs the "S'inscrire sur place" button (#contact) -->
  <ScheduleSection standalone />

  <section class="section">
    <div class="container">
      <h2 class="section__title">Ce que la licence vous ouvre</h2>
      <p class="section__lede">
        La salle J. Ménager en accès libre aux horaires d'ouverture : plateau de force, racks, haltères, machines
        et cardio.
      </p>
      <div class="room">
        <figure v-for="photo in photos" :key="photo.src" class="room__item">
          <img :src="photo.src" :alt="`${photo.caption} à la salle de musculation SGHM de Guérande`" loading="lazy" />
          <figcaption>{{ photo.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <ContactSection />
</template>

<style scoped>
.room {
  margin-top: var(--space-6);
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(2, 1fr);
}

.room__item {
  position: relative;
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 3 / 4;
}

.room__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room__item figcaption {
  position: absolute;
  inset: auto 0 0;
  padding: var(--space-6) var(--space-4) var(--space-3);
  background: linear-gradient(180deg, rgba(11, 11, 14, 0), rgba(11, 11, 14, 0.8));
  font-size: 14px;
  font-weight: 600;
  color: var(--color-white);
}

@media (min-width: 1024px) {
  .room {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
