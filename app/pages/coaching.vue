<script setup lang="ts">
useSeoMeta({
  title: 'Coach et cours collectif',
  description: 'Un coach présent le mardi et le mercredi à la salle de musculation SGHM de Guérande, et un cours collectif le mardi soir.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Coach et cours collectif' }] })
</script>

<template>
  <ActivityPage
    eyebrow="Encadrement"
    title="Coach &"
    accent="cours collectif"
    lede="Un coach est présent à la salle le mardi et le mercredi pour corriger la technique, conseiller sur la programmation et aider les nouveaux adhérents à prendre leurs marques."
    photo="/group.jpeg"
    photo-alt="Adhérents du club SGHM réunis à la salle de musculation de Guérande"
    :facts="[
      { icon: 'calendar', label: 'Coach le mardi et le mercredi' },
      { icon: 'community', label: 'Cours collectif le mardi soir' },
      { icon: 'clock', label: 'Pendant les horaires d\'ouverture' }
    ]"
    :features="[
      { icon: 'discipline', title: 'Technique', text: 'Profondeur du squat, trajectoire de la barre, placement du dos : on corrige avant de charger.' },
      { icon: 'calendar', title: 'Programmation', text: 'Des conseils pour organiser ses séances et progresser sur la durée, selon son objectif.' },
      { icon: 'heart', title: 'Accueil', text: 'Un repère pour les débutants : découvrir la salle, le matériel et les bonnes habitudes.' }
    ]"
    split-title="Le cours du mardi soir"
    split-photo="/gallery/06.jpg"
    :gallery="[
      { src: '/gallery/01.jpg', caption: 'Séance en groupe' },
      { src: '/gallery/03.jpg', caption: 'Conseils sur le plateau' },
      { src: '/gallery/07.jpg', caption: 'La salle J. Ménager' }
    ]"
    :cta="{
      title: 'Venir le mardi ou le mercredi',
      text: 'Le coach est présent pendant les horaires d\'ouverture. Passez nous voir à la salle.',
      primary: { label: 'Horaires & tarifs', href: '/#tarifs' },
      secondary: { label: 'Nous contacter', href: '/#contact' }
    }"
    :related="[
      { label: 'Musculation loisir', href: '/musculation' },
      { label: 'Force athlétique', href: '/force-athletique' }
    ]"
  >
    <!-- TODO: add the exact class time and content once confirmed by the coach -->
    <p>
      Chaque <strong>mardi soir</strong>, le coach anime un cours collectif. C'est l'occasion de travailler les bases
      en groupe, d'apprendre les bons placements et de progresser dans une ambiance conviviale.
    </p>
    <p>
      Débutants qui veulent apprendre les mouvements en sécurité, pratiquants réguliers qui veulent un regard
      extérieur sur leur technique, futurs compétiteurs en force athlétique : tous les niveaux sont les bienvenus.
    </p>
  </ActivityPage>
</template>
