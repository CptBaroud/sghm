<script setup lang="ts">
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
            <span class="movements__eyebrow">{{ move.tag }}</span>
            <h3 class="movements__name">{{ move.name }}</h3>
            <p class="movements__desc">{{ move.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.movements {
  background: var(--bg-elevated);
  border-top: 1px solid var(--border-card);
  border-bottom: 1px solid var(--border-card);
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
  background: linear-gradient(200deg, #2a2a33, #101014);
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

.movements__photo-tag {
  position: relative;
  z-index: 1;
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-white);
  background: rgba(0, 0, 0, 0.45);
  padding: 6px 12px;
  border-radius: var(--radius-pill);
}

.movements__body {
  padding: var(--space-5) var(--space-5) var(--space-6);
}

.movements__eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-red);
}

.movements__name {
  margin-top: var(--space-1);
  font-size: 22px;
  color: var(--text-primary);
}

.movements__desc {
  margin-top: var(--space-3);
  font-size: 14px;
  color: var(--text-secondary);
}

@media (min-width: 768px) {
  .movements__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
