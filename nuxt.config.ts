// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],

  // Read by every Nuxt SEO module: canonical URLs, og:*, title template, sitemap, robots.txt, schema.org
  site: {
    url: 'https://www.sghm.fr',
    name: 'SGHM Guérande',
    description:
      'Salle de musculation associative à Guérande depuis 1991, affiliée FFForce. Musculation et force athlétique tous niveaux : horaires, tarifs, inscription.',
    defaultLocale: 'fr-FR'
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      '@type': 'SportsActivityLocation',
      name: 'SGHM — Section Guérandaise Haltérophilie Musculation',
      alternateName: 'SGHM Force Athlétique Guérande',
      description:
        'Salle de musculation associative et club de force athlétique (powerlifting) affilié FFForce, fondé en 1991 à Guérande.',
      image: 'https://www.sghm.fr/og-image.jpg',
      email: 'contact@sghm.fr',
      sameAs: ['https://www.instagram.com/sghm_guerande'],
      address: {
        streetAddress: 'Salle des Sports Jean Ménager, rue des Collèges',
        addressLocality: 'Guérande',
        postalCode: '44350',
        addressCountry: 'FR'
      },
      openingHoursSpecification: [
        { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '17:00', closes: '21:00' },
        { dayOfWeek: ['Saturday'], opens: '14:00', closes: '17:00' },
        { dayOfWeek: ['Sunday'], opens: '09:00', closes: '12:00' }
      ]
    }
  },

  // Pages are prerendered (below), so OG images are rendered once at build: no runtime image endpoint
  ogImage: {
    zeroRuntime: true
  },

  // Static club site: prerender every page linked from home (athlete pages included), which also feeds the sitemap
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt']
    }
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap'
        }
      ],
      // Vercel Web Analytics, served by Vercel itself (@vercel/analytics needs vue-router 4, we're on 5)
      script: [{ src: '/_vercel/insights/script.js', defer: true }]
    }
  }
})
