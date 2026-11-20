<template>
  <section id="coach" class="section coach-home">
    <div class="container coach-home__layout">
      <figure class="coach-home__figure">
        <img
          src="/coach-marc.jpg"
          alt="Portrait de Marc Yeurc'h, coach sportif à la SGHM"
          class="coach-home__photo"
          loading="lazy"
        />
        <figcaption class="coach-home__caption">
          <span class="coach-home__name">Marc Yeurc'h</span>
          <span class="coach-home__role">Head coach LIFTRAINER · Champion de France de streetlifting 2022</span>
        </figcaption>
      </figure>

      <div>
        <h2 class="section__title">Un coach à la salle</h2>
        <p class="section__lede">
          La SGHM est la première salle où Marc s'est entraîné, en 2005. Il y revient pour vous aider à construire un
          programme, corriger vos mouvements et progresser en sécurité, quel que soit votre niveau.
        </p>

        <ul class="coach-home__slots">
          <li
            v-for="slot in COACH_SLOTS"
            :key="slot.day + slot.hours"
            class="card coach-home__slot"
            :class="{ 'coach-home__slot--highlight': slot.highlight }"
          >
            <span class="coach-home__slot-when">
              <span class="coach-home__slot-day">{{ slot.day }}</span>
              <span class="coach-home__slot-hours tabular-nums">{{ slot.hours }}</span>
            </span>
            <span class="coach-home__slot-label">{{ slot.label }}</span>
          </li>
        </ul>

        <NuxtLink to="/coaching" class="btn btn-primary coach-home__cta">
          Découvrir le coaching
          <IconGlyph name="arrow-right" :size="15" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.coach-home__layout {
  display: grid;
  gap: var(--space-7);
  align-items: center;
}

.coach-home__figure {
  margin: 0;
}

.coach-home__photo {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

.coach-home__caption {
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.coach-home__name {
  font-family: var(--font-display);
  font-size: 22px;
  text-transform: uppercase;
  color: var(--text-primary);
}

.coach-home__role {
  font-size: 13px;
  color: var(--text-secondary);
}

.coach-home__slots {
  list-style: none;
  margin: var(--space-6) 0 0;
  padding: 0;
  display: grid;
  gap: var(--space-3);
}

.coach-home__slot {
  padding: var(--space-4) var(--space-5);
  display: grid;
  gap: var(--space-1);
}

.coach-home__slot--highlight {
  border-color: var(--color-red);
  box-shadow: 0 12px 32px rgba(227, 25, 55, 0.16);
}

.coach-home__slot-when {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
}

.coach-home__slot-day {
  font-weight: 700;
  color: var(--text-primary);
}

.coach-home__slot-hours {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--color-red);
}

.coach-home__slot-label {
  font-size: 14px;
  color: var(--text-secondary);
}

.coach-home__cta {
  margin-top: var(--space-6);
  border-radius: var(--radius-pill);
}

@media (min-width: 768px) {
  .coach-home__layout {
    grid-template-columns: 2fr 3fr;
    gap: var(--space-8);
  }
}
</style>
