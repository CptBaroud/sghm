<script setup lang="ts">
const year = new Date().getFullYear()

const navLinks = [
  { label: 'Accueil', href: '#top' },
  { label: 'Le Club', href: '#club' },
  { label: 'Les Mouvements', href: '#mouvements' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'Contact', href: '#contact' }
]

const schedule = [
  { days: 'Lun, Mar, Mer, Jeu, Ven', hours: '17h00 - 21h00', closed: false },
  { days: 'Samedi', hours: '14h00 - 17h00', closed: false },
  { days: 'Dimanche', hours: '9h00 - 12h00', closed: false },
  { days: 'Fériés', hours: 'Fermé', closed: true }
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <img src="/logo-dark.png" alt="Logo SGHM Guérande" class="footer__logo" />
        <div>
          <span class="footer__brand-name">SGHM Guérande</span>
          <p class="footer__brand-tagline">
            Section Guérandaise Haltérophilie Musculation · Fondée en 1991
          </p>
        </div>
      </div>

      <div class="footer__hours">
        <h3 class="footer__heading">
          <IconGlyph name="clock" :size="14" />
          Horaires d'ouverture
        </h3>
        <ul class="footer__hours-list">
          <li v-for="slot in schedule" :key="slot.days">
            <span>{{ slot.days }}</span>
            <span :class="{ 'footer__hours-value--closed': slot.closed }">{{ slot.hours }}</span>
          </li>
        </ul>
      </div>

      <nav class="footer__nav" aria-label="Navigation secondaire">
        <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
    </div>

    <div class="container footer__bottom">
      <p>&copy; {{ year }} SGHM Force Athlétique Guérande. Association Loi 1901. Salle des Sports J.Ménager.</p>
      <p>Club affilié à la Fédération Française de Force (FFForce)</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-navy-2);
  color: var(--color-steel-300);
  padding: var(--space-7) 0 var(--space-6);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.footer__heading {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-white);
}

.footer__heading svg {
  color: var(--color-red);
}

.footer__hours-list {
  list-style: none;
  margin: var(--space-3) 0 0;
  padding: 0;
  display: grid;
  gap: var(--space-2);
  font-size: 13px;
}

.footer__hours-list li {
  display: flex;
  gap: var(--space-4);
  justify-content: space-between;
  color: var(--color-steel-300);
}

.footer__hours-list li span:last-child {
  color: var(--color-white);
  font-weight: 600;
  white-space: nowrap;
}

.footer__hours-value--closed {
  color: var(--color-steel-400) !important;
  font-weight: 500 !important;
}

.footer__brand {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.footer__logo {
  height: 30px;
  width: auto;
  flex-shrink: 0;
}

.footer__brand-name {
  font-family: var(--font-display);
  text-transform: uppercase;
  color: var(--color-white);
  font-size: 16px;
  letter-spacing: 0.02em;
}

.footer__brand-tagline {
  margin-top: var(--space-2);
  font-size: 12px;
  color: var(--color-steel-400);
  max-width: 46ch;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.footer__nav a {
  color: var(--color-steel-300);
  text-decoration: none;
}

.footer__nav a:hover {
  color: var(--color-white);
}

.footer__bottom {
  margin-top: var(--space-7);
  padding-top: var(--space-4);
  border-top: 1px solid #27272f;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-size: 12px;
  color: var(--color-steel-400);
}

@media (min-width: 768px) {
  .footer__inner {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: var(--space-7);
  }

  .footer__brand {
    min-width: 0;
  }

  .footer__nav {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: var(--space-3) var(--space-5);
    align-content: start;
  }

  .footer__bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
