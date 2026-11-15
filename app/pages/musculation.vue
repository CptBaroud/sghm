<script setup lang="ts">
useSeoMeta({
  title: 'Musculation loisir',
  description: 'Musculation en accès libre à Guérande : créneaux 7j/7, licence loisir FFForce dès 16 ans, inscription en ligne sur HelloAsso.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Musculation loisir' }] })
</script>

<template>
  <ActivityPage
    eyebrow="Pratique loisir"
    title="Musculation"
    accent="à son rythme"
    lede="La majorité des adhérents vient à la SGHM pour une raison simple : s'entraîner régulièrement, sans objectif de compétition, dans une salle associative et conviviale."
    photo="/gallery/24.jpg"
    photo-alt="Bancs et haltères de la salle de musculation SGHM à Guérande"
    :facts="[
      { icon: 'clock', label: 'Ouvert 7j/7' },
      { icon: 'heart', label: '100 € / an' },
      { icon: 'community', label: 'Dès 16 ans' }
    ]"
    :features="[
      { icon: 'clock', title: 'Créneaux libres', text: 'Venez quand vous voulez pendant les horaires d\'ouverture et suivez votre propre programme.' },
      { icon: 'equipment', title: 'Matériel complet', text: 'Racks, barres olympiques, disques calibrés, haltères, bancs et machines.' },
      { icon: 'community', title: 'Entraide', text: 'Une parade sur un squat lourd, un conseil : les autres membres ne sont jamais loin.' }
    ]"
    split-title="Licence loisir"
    split-photo="/gallery/20.jpg"
    :gallery="[
      { src: '/gallery/25.jpg', caption: 'Espace haltères' },
      { src: '/gallery/26.jpg', caption: 'Bancs et racks' },
      { src: '/gallery/15.jpg', caption: 'Machines et cardio' }
    ]"
    :cta="{
      title: 'Prendre sa licence loisir',
      text: 'Inscription et paiement sécurisé en ligne, puis rendez-vous à la salle.',
      primary: { label: 'S\'inscrire sur HelloAsso', href: HELLOASSO_LOISIR_URL, external: true },
      secondary: { label: 'Horaires & tarifs', href: '/#tarifs' }
    }"
    :related="[
      { label: 'Coach & cours collectif', href: '/coaching' },
      { label: 'Force athlétique', href: '/force-athletique' }
    ]"
  >
    <p>
      <strong>100 € par an</strong> pour les adultes, <strong>70 €</strong> pour les 16-17 ans (accompagnement d'un
      adulte obligatoire). Tarif réduit de 50 % pour une licence prise après le 1er mai.
    </p>
    <p>
      La licence donne accès à tous les créneaux libres. Pas de séance d'essai. Envie d'un regard extérieur ? Le
      <NuxtLink to="/coaching">coach</NuxtLink> est présent le mardi et le mercredi.
    </p>
  </ActivityPage>
</template>
