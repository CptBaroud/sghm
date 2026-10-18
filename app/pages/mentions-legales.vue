<script setup lang="ts">
const RNA = 'W443003963'
const PRESIDENT = 'Gurvan SEVENO'

useSeoMeta({
  title: 'Mentions légales',
  description: 'Mentions légales du site de la SGHM Guérande : éditeur, hébergeur, propriété intellectuelle et conditions de précommande.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Mentions légales' }] })
</script>

<template>
  <section class="section">
    <div class="container legal">
      <h1 class="section__title">Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        SGHM — Section Guérandaise Haltérophilie Musculation, association loi 1901 déclarée sous le numéro RNA {{ RNA }}.<br>
        Siège social : Mairie de Guérande, 7 place du Marché au Bois, 44350 Guérande.<br>
        Salle d'entraînement : Salle des Sports Jean Ménager, rue des Collèges, 44350 Guérande.<br>
        Contact : <a href="mailto:contact@sghm.fr">contact@sghm.fr</a><br>
        Directeur de la publication : {{ PRESIDENT }}.
      </p>

      <h2>Documents officiels</h2>
      <p>
        <a href="/documents/statuts-sghm-2026.pdf" target="_blank">Statuts</a> et
        <a href="/documents/reglement-interieur-sghm-2026.pdf" target="_blank">règlement intérieur</a>
        (tarifs, composition du bureau, remboursement des compétitions, charte du compétiteur),
        adoptés le 10 juillet 2026.
      </p>

      <h2>Hébergement</h2>
      <p>
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br>
        <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Le logo, les textes et les photos de ce site appartiennent à la SGHM ou sont utilisés avec l'accord de leurs
        auteurs et des personnes photographiées. Toute reproduction sans autorisation est interdite.
      </p>
      <p>
        Les résultats de compétition proviennent de la base publique
        <a href="https://www.openipf.org" target="_blank" rel="noopener">OpenIPF</a>.
      </p>

      <h2 id="precommandes">Précommandes de t-shirts</h2>
      <p>
        Les prix sont indiqués en euros, toutes taxes comprises. Le paiement se fait en ligne sur HelloAsso, qui
        traite les données bancaires ; la SGHM n'y a jamais accès. Les t-shirts sont à retirer à la salle, aux heures
        d'ouverture, une fois la commande reçue par le club.
      </p>

      <p class="legal__see-also">
        Voir aussi la <NuxtLink to="/confidentialite">politique de confidentialité</NuxtLink>.
      </p>
    </div>
  </section>
</template>
