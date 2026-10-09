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
            "Salle de musculation associative à Guérande depuis 1991, affiliée FFForce. Musculation et force athlétique tous niveaux : horaires, tarifs, inscription."
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'SGHM Guérande' },
        { property: 'og:title', content: 'Salle de Musculation Guérande | SGHM — Club Associatif FFForce' },
        {
          property: 'og:description',
          content:
            "Salle de musculation associative à Guérande, affiliée FFForce. Musculation et force athlétique pour tous les niveaux, à la Salle des Sports Jean Ménager depuis 1991."
        },
        { property: 'og:url', content: 'https://www.sghm.fr' },
        { property: 'og:image', content: 'https://www.sghm.fr/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Logo SGHM et titre « Salle de Musculation à Guérande » sur une photo floutée des athlètes du club' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Salle de Musculation Guérande | SGHM — Club Associatif FFForce' },
        {
          name: 'twitter:description',
          content: "Salle de musculation associative à Guérande, affiliée FFForce. Musculation et force athlétique pour tous les niveaux, depuis 1991."
        },
        { name: 'twitter:image', content: 'https://www.sghm.fr/og-image.jpg' }
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
            name: 'SGHM — Section Guérandaise Haltérophilie Musculation',
            alternateName: 'SGHM Force Athlétique Guérande',
            description:
              "Salle de musculation associative et club de force athlétique (powerlifting) affilié FFForce, fondé en 1991 à Guérande.",
            url: 'https://www.sghm.fr',
            image: 'https://www.sghm.fr/og-image.jpg',
            email: 'contact@sghm.fr',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Salle des Sports Jean Ménager, rue des Collèges',
              addressLocality: 'Guérande',
              postalCode: '44350',
              addressCountry: 'FR'
            },
            sameAs: ['https://www.instagram.com/sghm_guerande'],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '17:00',
                closes: '21:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday'],
                opens: '14:00',
                closes: '17:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Sunday'],
                opens: '09:00',
                closes: '12:00'
              }
            ]
          })
        }
      ]
    }
  }
})
