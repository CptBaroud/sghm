<script setup lang="ts">
useSeoMeta({
  title: 'Politique de confidentialité',
  description: 'Données personnelles sur le site de la SGHM Guérande : résultats des athlètes, mesure d\'audience, vos droits.'
})
useBreadcrumbItems({ overrides: [{ label: 'Accueil' }, { label: 'Confidentialité' }] })
</script>

<template>
  <section class="section">
    <div class="container legal">
      <h1 class="section__title">Politique de confidentialité</h1>

      <p>
        Le responsable du traitement est la SGHM, association loi 1901 (voir les
        <NuxtLink to="/mentions-legales">mentions légales</NuxtLink>). Pour toute question ou demande :
        <a href="mailto:contact@sghm.fr">contact@sghm.fr</a>.
      </p>

      <h2>Résultats des athlètes</h2>
      <p>
        Les pages Résultats et Classement affichent, pour les athlètes du club, leur nom, leur sexe, leur catégorie
        de poids et d'âge et leurs résultats en compétition officielle. Ces informations sont déjà publiques : elles
        proviennent de la base <a href="https://www.openipf.org" target="_blank" rel="noopener">OpenIPF</a>, qui
        reprend les résultats publiés par les fédérations.
      </p>
      <p>
        Nous les publions pour valoriser les performances du club (intérêt légitime). Elles restent en ligne tant que
        l'athlète a concouru pour le club. Vous pouvez à tout moment demander que votre page soit retirée ou
        corrigée : écrivez-nous et nous le faisons sous un mois.
      </p>

      <h2>Mesure d'audience</h2>
      <p>
        Nous utilisons Vercel Web Analytics pour compter les visites. Cet outil ne dépose aucun cookie et n'enregistre
        pas votre adresse IP ; il ne permet pas de vous identifier ni de vous suivre sur d'autres sites. Aucun
        bandeau de consentement n'est donc nécessaire.
      </p>
      <p>
        Les polices de caractères sont hébergées sur notre propre site : aucune donnée n'est envoyée à Google ou à
        un autre tiers lors de votre visite.
      </p>

      <h2>Contact et précommandes</h2>
      <p>
        Si vous nous écrivez, votre e-mail sert uniquement à vous répondre. Les précommandes sont gérées par
        HelloAsso, qui a sa propre
        <a href="https://www.helloasso.com/confidentialite" target="_blank" rel="noopener">politique de confidentialité</a> ;
        nous recevons votre nom, votre e-mail et votre commande pour vous remettre vos articles.
      </p>

      <h2>Adhérents et droit à l'image</h2>
      <p>
        Les données des adhérents servent uniquement à la gestion du club. Des photos peuvent être prises pour la
        communication du club ; chaque adhérent peut s'y opposer par écrit (article 9 du
        <a href="/documents/reglement-interieur-sghm-2026.pdf" target="_blank">règlement intérieur</a>).
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Écrivez à
        <a href="mailto:contact@sghm.fr">contact@sghm.fr</a>. Si notre réponse ne vous satisfait pas, vous pouvez
        saisir la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener">CNIL</a>.
      </p>
    </div>
  </section>
</template>
