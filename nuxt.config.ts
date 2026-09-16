// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Salle de Musculation Guérande | SGHM — Club Associatif FFForce',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "SGHM, salle de musculation associative à Guérande — club de force athlétique affilié FFForce (N°44-012) et IPF, plateau homologué à Kerbiniou. Squat, bench press, soulevé de terre."
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'SGHM Guérande' },
        { property: 'og:title', content: 'Salle de Musculation Guérande | SGHM — Club Associatif FFForce' },
        {
          property: 'og:description',
          content:
            "Salle de musculation associative affiliée FFForce à Guérande. Squat, bench, deadlift sur plateau homologué à Kerbiniou. Depuis 1991."
        },
        { property: 'og:url', content: 'https://www.sghm.fr' },
        { property: 'og:image', content: 'https://www.sghm.fr/hero@1x.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Salle de Musculation Guérande | SGHM — Club Associatif FFForce' },
        {
          name: 'twitter:description',
          content: "Salle de musculation associative affiliée FFForce à Guérande, depuis 1991."
        },
        { name: 'twitter:image', content: 'https://www.sghm.fr/hero@1x.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo-light.png' },
        { rel: 'canonical', href: 'https://www.sghm.fr' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap'
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SportsActivityLocation',
            name: 'SGHM — Société Guérandaise d\'Haltérophilie et de Musculation',
            alternateName: 'SGHM Force Athlétique Guérande',
            description:
              "Salle de musculation associative et club de force athlétique (powerlifting) affilié FFForce et IPF, fondé en 1991 à Guérande.",
            url: 'https://www.sghm.fr',
            image: 'https://www.sghm.fr/hero@1x.png',
            telephone: 'TODO_PHONE',
            email: 'contact@sghm-guerande.fr',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Avenue Gustave Flaubert, Complexe Sportif de Kerbiniou',
              addressLocality: 'Guérande',
              postalCode: '44350',
              addressCountry: 'FR'
            },
            sameAs: ['https://www.instagram.com/sghm_guerande'],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
                opens: '17:00',
                closes: '21:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday'],
                opens: '14:00',
                closes: '17:00'
              }
            ]
          })
        }
      ]
    }
  }
})
