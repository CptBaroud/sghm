<script setup lang="ts">
// TODO: paste the HelloAsso boutique link and set the pre-order deadline before publishing.
const HELLOASSO_URL = ''
const PRICE = '25 €'
const DEADLINE = 'Précommandes bientôt ouvertes'
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
</script>

<template>
  <section id="boutique" class="section preorder">
    <div class="container">
      <div class="section__head section__head--center">
        <h2 class="section__title">Le T-shirt du Club</h2>
        <p class="section__lede">
          Portez fièrement les couleurs du club, à la salle comme en dehors. Réservez le vôtre dès maintenant et récupérez-le
          directement à la salle.
        </p>
      </div>

      <div class="card preorder__card">
        <div class="preorder__photo">
          <img
            src="/tshirt-club.jpeg"
            alt="T-shirt noir SGHM : logo du club sur le devant, inscription « Guérande depuis 1991 » dans le dos"
            loading="lazy"
            decoding="async"
          >
          <span class="badge preorder__badge">Précommande</span>
        </div>

        <div class="preorder__body">
          <div>
            <p class="preorder__price">{{ PRICE }}</p>
            <p class="preorder__deadline">{{ DEADLINE }}</p>
          </div>

          <div>
            <p class="preorder__label">Tailles disponibles</p>
            <ul class="preorder__sizes">
              <li v-for="size in SIZES" :key="size">{{ size }}</li>
            </ul>
          </div>

          <ul class="preorder__steps">
            <li>Choix de la taille et paiement sécurisé sur HelloAsso</li>
            <li>Retrait du t-shirt à la salle, aux heures d'ouverture</li>
          </ul>

          <a
            v-if="HELLOASSO_URL"
            :href="HELLOASSO_URL"
            target="_blank"
            rel="noopener"
            class="btn btn-primary preorder__cta"
          >
            Précommander — {{ PRICE }}
            <IconGlyph name="arrow-right" :size="15" />
          </a>
          <span v-else class="btn preorder__cta preorder__cta--soon" aria-disabled="true">
            Précommandes bientôt ouvertes
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.preorder__card {
  display: grid;
  overflow: hidden;
}

.preorder__photo {
  position: relative;
  aspect-ratio: 1200 / 896;
  background: #f1efec;
}

.preorder__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preorder__badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  background: var(--color-red);
  border-color: var(--color-red);
  color: var(--color-white);
}

.preorder__body {
  padding: var(--space-6);
  display: grid;
  gap: var(--space-5);
  align-content: center;
}

.preorder__price {
  margin: 0;
  font-family: var(--font-display);
  font-size: 40px;
  line-height: 1;
  color: var(--text-primary);
}

.preorder__deadline {
  margin: var(--space-2) 0 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.preorder__label {
  margin: 0 0 var(--space-2);
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
  background: var(--bg-base);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 14px;
}

.preorder__steps {
  margin: 0;
  padding-left: 1.2em;
  display: grid;
  gap: var(--space-2);
  font-size: 14px;
  color: var(--text-secondary);
}

.preorder__steps li::marker {
  color: var(--color-red);
}

.preorder__cta {
  border-radius: var(--radius-pill);
  justify-self: start;
}

.preorder__cta--soon {
  border: 1px solid var(--border-card);
  color: var(--text-muted);
  cursor: default;
}

@media (min-width: 1024px) {
  .preorder__card {
    grid-template-columns: 1.1fr 1fr;
  }

  .preorder__photo {
    aspect-ratio: auto;
    min-height: 100%;
  }
}
</style>
