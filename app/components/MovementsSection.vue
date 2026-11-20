<script setup lang="ts">
// Also rendered on /force-athletique itself, where the link would point to the current page
const route = useRoute()

const movements = [
  {
    number: '01',
    tag: 'Squat',
    name: 'Flexion de Jambes',
    photo: '/squat.jpg',
    description:
      "Descente contrôlée où le pli de la hanche doit impérativement passer sous le sommet du genou, avant une remontée fluide et complète."
  },
  {
    number: '02',
    tag: 'Bench',
    name: 'Développé Couché',
    photo: '/bench.jpg',
    description:
      "Poussée pure du torse. Arrêt complet et marqué sur la poitrine avant l'ordre de presse de l'arbitre, sans décollement du fessier ni des pieds."
  },
  {
    number: '03',
    tag: 'Deadlift',
    name: 'Soulevé de Terre',
    photo: '/deadlift.jpg',
    description:
      "Arrachage de la barre du sol jusqu'à la position verticale complète, avec verrouillage net des genoux et épaules tirées en arrière."
  }
]
</script>

<template>
  <section id="mouvements" class="section movements">
    <div class="container">
      <div class="section__head section__head--center">
        <h2 class="section__title">Les 3 Mouvements de la Force Athlétique</h2>
        <p class="section__lede">
          Les trois mouvements jugés en compétition, avec les règles FFForce telles qu'elles sont
          appliquées sur le plateau.
        </p>
      </div>

      <div class="movements__grid">
        <article v-for="move in movements" :key="move.name" class="card movements__card">
          <div class="movements__photo" :class="`movements__photo--${move.number}`">
            <img
              :src="move.photo"
              :alt="`Athlète en ${move.tag.toLowerCase()} sur le plateau de la salle de musculation SGHM à la Salle des Sports J.Ménager`"
              class="movements__photo-img"
            />
          </div>

          <div class="movements__body">
            <h3 class="movements__name">{{ move.name }}</h3>
            <p class="movements__desc">{{ move.description }}</p>
          </div>
        </article>
      </div>

      <div v-if="route.path !== '/force-athletique'" class="movements__more">
        <NuxtLink to="/force-athletique" class="btn btn-secondary">
          Découvrir la force athlétique
          <IconGlyph name="arrow-right" :size="15" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.movements {
  background: var(--bg-elevated);
}

.movements__grid {
  display: grid;
  gap: var(--space-5);
}

.movements__card {
  overflow: hidden;
  padding: 0;
}

.movements__photo {
  position: relative;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: flex-start;
  padding: var(--space-4);
  overflow: hidden;
  background: var(--surface-card-2);
}

.movements__photo-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.movements__photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 11, 14, 0.55) 0%, rgba(11, 11, 14, 0) 40%, rgba(11, 11, 14, 0.15) 100%);
}

.movements__body {
  padding: var(--space-5) var(--space-5) var(--space-6);
}

.movements__name {
  font-size: 22px;
  color: var(--text-primary);
}

.movements__desc {
  margin-top: var(--space-3);
  font-size: 16px;
  color: var(--text-primary);
}

.movements__more {
  margin-top: var(--space-7);
  display: flex;
  justify-content: center;
}

.movements__more .btn {
  border-radius: var(--radius-pill);
}

@media (min-width: 768px) {
  .movements__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
