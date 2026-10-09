<script setup lang="ts">
// TODO: paste the HelloAsso boutique link, the compétition price and the pre-order deadline before publishing.
const HELLOASSO_URL = ''
const DEADLINE = 'Précommandes bientôt ouvertes'
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const products = [
  {
    name: 'T-shirt Classique',
    tagline: 'Le t-shirt classique du club, pour venir s\'entraîner comme pour le quotidien. Le logo SGHM sur le cœur, « Guérande, depuis 1991 » dans le dos.',
    price: '25 €',
    worn: { zoom: 2, focus: '45% 6%', src: '/tshirt-classic-worn.jpg', alt: 'Deux personnes portant le T-shirt Classique SGHM, vu de face et de dos' },
    flat: { src: '/tshirt-classic.jpg', alt: 'T-shirt Classique SGHM noir, face et dos : logo du club sur le cœur, « Guérande depuis 1991 » dans le dos' }
  },
  {
    name: 'T-shirt Compétition',
    tagline: 'Le t-shirt de compétition, conçu pour être porté sous le singlet et pensé pour des performances optimales sur le plateau.',
    price: 'Prix à confirmer',
    worn: { zoom: 1.2, focus: '60% 40%', src: '/tshirt-comp-worn.jpg', alt: 'Deux personnes portant le T-shirt Compétition SGHM, vu de face et de dos' },
    flat: { src: '/tshirt-comp.jpg', alt: 'T-shirt Compétition SGHM noir, face et dos : SGHM sur l\'encolure, écusson Force Athlétique dans le dos' }
  }
]
</script>

<template>
  <section id="boutique" class="section preorder">
    <div class="container">
      <div class="section__head section__head--center">
        <h2 class="section__title">Les T-shirts du Club</h2>
        <p class="section__lede">
          Portez fièrement les couleurs du club, à la salle comme en dehors. Réservez le vôtre dès
          maintenant et récupérez-le directement à la salle.
        </p>
      </div>

      <article
        v-for="(product, index) in products"
        :key="product.name"
        class="preorder__product"
        :class="{ 'preorder__product--reverse': index % 2 }"
      >
        <div class="preorder__media">
          <div class="preorder__frame">
            <img
              :src="product.worn.src"
              :alt="product.worn.alt"
              class="preorder__worn"
              :style="{ transform: `scale(${product.worn.zoom})`, transformOrigin: product.worn.focus }"
              loading="lazy"
              decoding="async"
            >
          </div>
          <img :src="product.flat.src" :alt="product.flat.alt" class="preorder__flat" loading="lazy" decoding="async">
        </div>

        <div class="preorder__text">
          <span class="preorder__tag">Précommande</span>
          <h3 class="preorder__name">{{ product.name }}</h3>
          <p class="preorder__tagline">{{ product.tagline }}</p>
          <p class="preorder__price">{{ product.price }}</p>

          <p class="preorder__label">Tailles</p>
          <ul class="preorder__sizes">
            <li v-for="size in SIZES" :key="size">{{ size }}</li>
          </ul>

          <a
            v-if="HELLOASSO_URL"
            :href="HELLOASSO_URL"
            target="_blank"
            rel="noopener"
            class="btn btn-primary preorder__cta"
          >
            <img src="/helloasso.svg" alt="" width="16" height="16">
            Précommander sur HelloAsso
          </a>
          <span v-else class="btn preorder__cta preorder__cta--soon" aria-disabled="true">
            Précommandes bientôt ouvertes
          </span>
        </div>
      </article>

      <p class="preorder__note">
        Paiement sécurisé sur HelloAsso · Retrait à la salle, aux heures d'ouverture · {{ DEADLINE }}
        <br>
        <em>Photos non contractuelles, générées par IA.</em>
      </p>
    </div>
  </section>
</template>

<style scoped>
.preorder__product {
  display: grid;
  gap: var(--space-7);
  align-items: center;
}

.preorder__product + .preorder__product {
  margin-top: var(--space-9);
}

.preorder__media {
  position: relative;
  /* room for the flat shot hanging below the photo on small screens */
  margin-bottom: var(--space-8);
}

.preorder__frame {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: #fff;
}

/* zoomed in on the shirts; zoom/focus set per photo in `products` */
.preorder__worn {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* flat product shot straddling the photo's edge */
.preorder__flat {
  position: absolute;
  right: var(--space-4);
  bottom: calc(var(--space-8) * -1);
  width: 48%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius);
  border: 4px solid var(--bg-base);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
}

.preorder__tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-red);
}

.preorder__name {
  margin-top: var(--space-2);
  font-size: 40px;
  line-height: 1;
  color: var(--text-primary);
}

.preorder__tagline {
  margin: var(--space-4) 0 0;
  max-width: 38ch;
  font-size: 16px;
  color: var(--text-secondary);
}

.preorder__price {
  margin: var(--space-5) 0 0;
  font-family: var(--font-display);
  font-size: 48px;
  line-height: 1;
  color: var(--color-red);
}

.preorder__label {
  margin: var(--space-6) 0 var(--space-2);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.preorder__sizes {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.preorder__sizes li {
  min-width: 44px;
  padding: 8px 12px;
  text-align: center;
  border-radius: var(--radius);
  border: 1px solid var(--border-card);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 14px;
}

.preorder__cta {
  margin-top: var(--space-6);
  border-radius: var(--radius-pill);
}

.preorder__cta--soon {
  border: 1px solid var(--border-card);
  color: var(--text-muted);
  cursor: default;
}

.preorder__note {
  margin: var(--space-9) 0 0;
  font-size: 13px;
  color: var(--text-muted);
}

@media (min-width: 768px) {
  .preorder__product {
    grid-template-columns: 1.15fr 1fr;
    gap: var(--space-9);
  }

  .preorder__media {
    margin-bottom: 0;
  }

  /* on wide screens the flat shot sits on the photo's left edge, kept inside the viewport */
  .preorder__flat {
    right: auto;
    left: max(-12%, calc(8px - var(--container-pad)));
    bottom: 8%;
    width: 58%;
  }

  .preorder__product--reverse {
    grid-template-columns: 1fr 1.15fr;
  }

  .preorder__product--reverse .preorder__media {
    order: 2;
  }

  .preorder__product--reverse .preorder__flat {
    left: -18%;
  }

  .preorder__note {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .preorder__name {
    font-size: 52px;
  }
}
</style>
