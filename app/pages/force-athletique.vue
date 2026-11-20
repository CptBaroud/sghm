<script setup lang="ts">
useSeoMeta({
  title: 'Force athlétique',
  description: 'Force athlétique (powerlifting) à Guérande : squat, développé couché et soulevé de terre, licence compétition FFForce, résultats du club.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Force athlétique' }] })
</script>

<template>
  <ActivityPage
    eyebrow="Pratique compétitive"
    title="Force"
    accent="athlétique"
    lede="Soulever la charge la plus lourde possible sur trois mouvements : squat, développé couché et soulevé de terre. La SGHM est affiliée à la Fédération Française de Force (FFForce)."
    photo="/hero@2x.jpg"
    photo-alt="Athlète en squat sur le plateau de la salle de musculation SGHM à Guérande"
    :facts="[
      { icon: 'flag', label: 'Club affilié FFForce' },
      { icon: 'trophy', label: '10+ compétiteurs licenciés' },
      { icon: 'equipment', label: 'Matériel aux normes IPF' }
    ]"
    :features="[
      { icon: 'discipline', title: 'Règles IPF', text: 'Les mouvements se travaillent selon les règles d\'arbitrage appliquées sur le plateau.' },
      { icon: 'equipment', title: 'Matériel de compétition', text: 'Racks de compétition, barres 20 kg et 15 kg, disques calibrés aux normes IPF.' },
      { icon: 'trophy', title: 'Résultats suivis', text: 'Les performances des athlètes du club sont publiées et classées sur ce site.' }
    ]"
    split-title="Se lancer en compétition"
    split-photo="/deadlift.jpg"
    :gallery="[
      { src: '/gallery/05.jpg', caption: 'Développé couché' },
      { src: '/gallery/23.jpg', caption: 'Séance de force' },
      { src: '/gallery/18.jpg', caption: 'Plateau de soulevé de terre' }
    ]"
    :cta="{
      title: 'Licence compétiteur',
      text: '100 € par an, inscription sur place à la salle.',
      primary: { label: 'Nous contacter', href: '/#contact' },
      secondary: { label: 'Résultats du club', href: '/resultats' }
    }"
    :related="['/musculation', '/coaching', '/classement']"
  >
    <p>
      La licence compétiteur coûte <strong>100 € par an</strong> et se prend sur place, à la salle. Le
      <NuxtLink to="/coaching">coach</NuxtLink> aide à préparer les mouvements selon les règles d'arbitrage.
    </p>
    <p>
      Le remboursement des compétitions et la charte du compétiteur sont détaillés dans le
      <a href="/documents/reglement-interieur-sghm-2026.pdf" target="_blank">règlement intérieur</a>.
    </p>
  </ActivityPage>
  <MovementsSection />
</template>
