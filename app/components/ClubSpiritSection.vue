<script setup lang="ts">
const values = [
  {
    icon: 'discipline' as const,
    title: 'Discipline & Technique',
    description:
      "L'apprentissage privilégie la technique avant la charge : profondeur du squat, trajectoire de la barre au développé couché, verrouillage au soulevé de terre."
  },
  {
    icon: 'equipment' as const,
    title: 'Matériel FFForce',
    description:
      "Racks de compétition, barres olympiques 20 kg et 15 kg, disques calibrés aux normes IPF."
  },
  {
    icon: 'community' as const,
    title: 'Esprit Associatif',
    description:
      "Entraide entre pratiquants : parades sur les gros squats, conseils des athlètes confirmés aux nouveaux membres."
  }
]
</script>

<template>
  <section id="club" class="section club">
    <div class="container">
      <div class="section__head section__head--center">
        <span class="section__eyebrow">Association Loi 1901</span>
        <h2 class="section__title">L'Esprit du Club</h2>
        <p class="section__lede">
          Association loi 1901 fondée en 1991. Les cotisations financent le matériel et le bureau
          est tenu par des bénévoles.
        </p>
      </div>

      <div class="club__grid">
        <article v-for="value in values" :key="value.title" class="card club__card">
          <span class="club__icon">
            <IconGlyph :name="value.icon" :size="20" />
          </span>
          <h3 class="club__card-title">{{ value.title }}</h3>
          <p class="club__card-text">{{ value.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.club__grid {
  display: grid;
  gap: var(--space-5);
}

.club__card {
  padding: var(--space-7) var(--space-6);
  text-align: center;
}

.club__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--color-navy-2);
  color: var(--color-red);
}

[data-theme='light'] .club__icon {
  background: var(--text-primary);
  color: var(--color-red);
}

.club__card-title {
  margin-top: var(--space-5);
  font-size: 18px;
  color: var(--text-primary);
}

.club__card-text {
  margin-top: var(--space-3);
  font-size: 14px;
  color: var(--text-secondary);
}

@media (min-width: 768px) {
  .club__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
