<script setup lang="ts">
useSeoMeta({
  title: 'Coach et cours collectif',
  description: 'Marc Yeurc\'h, coach sportif à la SGHM : accompagnement sur le plateau le mardi et le mercredi, cours collectif de Cross Training le mardi de 19 h à 20 h.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Coach et cours collectif' }] })

const slots = COACH_SLOTS

const linkGroups = [
  {
    title: 'Marc',
    links: [
      { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/marco_liftrainer/' },
      { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/marc-liftrainer/' }
    ]
  },
  {
    title: 'LIFTRAINER',
    links: [
      { label: 'Site officiel', icon: 'globe', href: 'https://liftrainer.com/' },
      { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/liftrainer/' },
      { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@liftrainer' },
      { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/liftrainer/' },
      { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/liftrainer/' }
    ]
  },
  {
    title: 'LIFT TALK',
    links: [
      { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@lifttalk' },
      { label: 'Apple Podcasts', icon: 'podcast', href: 'https://podcasts.apple.com/fr/podcast/lift-talk-streetlifting-performance-coaching/id6794599839' }
    ]
  },
  {
    title: 'Streetlifting Coach Academy',
    links: [
      { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/streetlifting_coach_academy/' }
    ]
  }
] as const
</script>

<template>
  <ActivityPage
    title="Coach &"
    accent="cours collectif"
    lede="Marc Yeurc'h, coach sportif à la SGHM, vous accompagne sur le plateau le mardi et le mercredi, et anime un cours collectif de Cross Training le mardi soir."
    photo="/group.jpeg"
    photo-alt="Adhérents du club SGHM réunis à la salle de musculation de Guérande"
    split-title="Le mot du coach"
    :split-caption="{
      name: 'Marc Yeurc\'h',
      title: 'Coach sportif à la SGHM · Head coach et fondateur de LIFTRAINER · Champion de France de streetlifting 2022 (-101 kg)'
    }"
    split-photo="/coach-marc.jpg"
    split-photo-alt="Portrait de Marc Yeurc'h, coach sportif à la SGHM"
    :gallery="[
      { src: '/gallery/01.jpg', caption: 'Séance en groupe' },
      { src: '/gallery/03.jpg', caption: 'Conseils sur le plateau' },
      { src: '/gallery/07.jpg', caption: 'La salle J. Ménager' }
    ]"
    :cta="{
      title: 'On vous attend le mardi à 19 h',
      text: 'N\'hésitez pas à venir voir Marc, même pour une simple question.',
      primary: { label: 'Horaires & tarifs', href: '/horaires-tarifs' },
      secondary: { label: 'Nous contacter', href: '/#contact' }
    }"
    :related="['/musculation', '/force-athletique']"
  >
    <blockquote class="coach__quote">
      <p>
        La SGHM, c'est la première salle de sport dans laquelle je me suis entraîné, en 2005. C'est ici, à Guérande,
        que ma passion pour la musculation a grandi. Aujourd'hui, ça compte beaucoup pour moi de revenir dans cette
        salle et de transmettre à mon tour ce que j'ai appris.
      </p>
      <p>
        Je suis head coach et fondateur de <a href="https://liftrainer.com/" target="_blank" rel="noopener">LIFTRAINER</a>,
        une entreprise de coaching en ligne dédiée au streetlifting, un sport de force qui allie street workout et force
        athlétique. J'accompagne des athlètes de tous niveaux, des débutants aux compétiteurs internationaux. Je suis
        moi-même compétiteur en streetlifting : j'ai remporté le titre de champion de France en 2022 dans la catégorie
        des moins de 101 kg et je compte plusieurs titres à mon actif.
      </p>
      <p>
        Je forme aussi de futurs coachs en streetlifting au sein de la Streetlifting Coach Academy et j'interviens dans
        des formations professionnelles du sport, notamment en BPJEPS et en CQP.
      </p>
      <p>
        Sur le plateau de musculation, je peux vous aider à construire un programme adapté à vos objectifs, à corriger
        vos mouvements et à trouver les bons placements pour progresser en sécurité. J'adapte mes conseils à votre âge,
        à votre niveau et à votre expérience.
      </p>
    </blockquote>

    <template #extra>
      <div class="coach__block">
        <h2 class="section__title">Quand venir</h2>
        <ul class="coach__slots">
          <li
            v-for="slot in slots"
            :key="slot.day + slot.hours"
            class="card coach__slot"
            :class="{ 'coach__slot--highlight': slot.highlight }"
          >
            <span class="coach__slot-when">
              <span class="coach__slot-day">{{ slot.day }}</span>
              <span class="coach__slot-hours tabular-nums">{{ slot.hours }}</span>
            </span>
            <span class="coach__slot-label">{{ slot.label }}</span>
          </li>
        </ul>
      </div>

      <div class="coach__block">
        <h2 class="section__title">Suivre Marc</h2>
        <div class="coach__link-groups">
          <div v-for="group in linkGroups" :key="group.title" class="card coach__link-group">
            <h3 class="coach__link-title">{{ group.title }}</h3>
            <ul class="coach__links">
              <li v-for="link in group.links" :key="link.href">
                <a :href="link.href" target="_blank" rel="noopener" class="badge coach__link">
                  <IconGlyph :name="link.icon" :size="15" />
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </ActivityPage>
</template>

<style scoped>
.coach__quote {
  margin: var(--space-5) 0 0;
  padding-left: var(--space-4);
  border-left: 3px solid var(--color-red);
}

.coach__quote p + p {
  margin-top: var(--space-3);
}

.coach__block {
  margin-top: var(--space-9);
}

.coach__slots {
  list-style: none;
  margin: var(--space-5) 0 0;
  padding: 0;
  display: grid;
  gap: var(--space-4);
}

.coach__slot {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.coach__slot-when {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
}

.coach__slot-day {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

/* the group class: a solid red card instead of an outline */
.coach__slot--highlight {
  background: var(--color-red);
  border-color: var(--color-red);
}

.coach__slot--highlight .coach__slot-day,
.coach__slot--highlight .coach__slot-hours,
.coach__slot--highlight .coach__slot-label {
  color: var(--color-white);
}

.coach__slot-hours {
  font-family: var(--font-display);
  font-size: 30px;
  color: var(--accent-text);
}

.coach__slot-label {
  font-size: 14px;
  color: var(--text-secondary);
}

.coach__link-groups {
  margin-top: var(--space-5);
  display: grid;
  gap: var(--space-4);
}

.coach__link-group {
  padding: var(--space-5);
}

.coach__link-title {
  font-size: 18px;
  color: var(--text-primary);
}

.coach__links {
  list-style: none;
  margin: var(--space-3) 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.coach__link {
  text-decoration: none;
}

.coach__link svg {
  color: var(--accent-text);
}

.coach__link:hover {
  border-color: var(--color-red);
  color: var(--text-primary);
}

@media (min-width: 768px) {
  .coach__slots {
    grid-template-columns: repeat(3, 1fr);
  }

  .coach__link-groups {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
