<script setup lang="ts">
const navLinks = [
  { label: 'Le Club', href: '#club' },
  { label: 'Les Mouvements', href: '#mouvements' },
  { label: 'Horaires & Tarifs', href: '#tarifs' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'Contact', href: '#contact' }
]

const { theme, init, toggle } = useTheme()
const drawerOpen = ref(false)

onMounted(init)

function closeDrawer() {
  drawerOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#top" class="header__brand" @click="closeDrawer">
        <img
          :src="theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'"
          alt="Logo SGHM Guérande"
          class="header__logo"
        />
        <span class="header__name">
          SGHM 
        </span>
      </a>

      <nav class="header__nav" aria-label="Navigation principale">
        <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>

      <div class="header__actions">
        <button
          type="button"
          class="theme-toggle"
          :aria-label="theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'"
          @click="toggle"
        >
          <IconGlyph v-if="theme === 'dark'" name="sun" :size="17" />
          <IconGlyph v-else name="moon" :size="17" />
        </button>

        <a href="#contact" class="btn btn-primary header__cta">
          Nous rencontrer
          <IconGlyph name="arrow-right" :size="15" />
        </a>

        <button
          type="button"
          class="header__burger"
          :aria-expanded="drawerOpen"
          aria-label="Ouvrir le menu"
          @click="drawerOpen = !drawerOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <div v-if="drawerOpen" class="drawer">
        <div class="drawer__inner">
          <nav class="drawer__nav" aria-label="Navigation mobile">
            <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="closeDrawer">{{ link.label }}</a>
            <a href="#contact" class="btn btn-primary drawer__cta" @click="closeDrawer">
              Nous rencontrer
              <IconGlyph name="arrow-right" :size="15" />
            </a>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  background: var(--header-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-card);
  position: sticky;
  top: 0;
  z-index: 20;
}

.header__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  height: 72px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  color: var(--text-primary);
  flex-shrink: 0;
}

.header__logo {
  height: 34px;
  width: auto;
  flex-shrink: 0;
}

.header__name {
  font-family: var(--font-display);
  font-size: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.header__name-sub {
  font-family: var(--font-body);
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.header__nav {
  display: none;
  align-items: center;
  gap: var(--space-6);
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.header__nav a {
  position: relative;
  color: var(--text-secondary);
  text-decoration: none;
  white-space: nowrap;
}

.header__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 2px;
  background: transparent;
}

.header__nav a:hover {
  color: var(--text-primary);
}

.header__nav a:hover::after {
  background: var(--color-red);
}

.header__actions {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: var(--space-4);
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border-card);
  background: var(--surface-card);
  color: var(--text-primary);
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 150ms ease, background-color 150ms ease, border-color 150ms ease, color 150ms ease;
}

.theme-toggle:active {
  transform: scale(0.9);
  transition-duration: 80ms;
}

.header__cta {
  display: none;
  border-radius: var(--radius-pill);
  flex-shrink: 0;
  white-space: nowrap;
}

.header__burger {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  border-radius: var(--radius);
  border: 1px solid var(--border-card);
  background: var(--surface-card);
  cursor: pointer;
  align-items: center;
  transition: transform 150ms ease, background-color 150ms ease, border-color 150ms ease;
}

.header__burger:active {
  transform: scale(0.92);
  transition-duration: 80ms;
}

.header__burger span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--text-primary);
}

.drawer {
  display: grid;
  grid-template-rows: 1fr;
  border-top: 1px solid var(--border-card);
  background: var(--bg-base);
}

/* 0fr → 1fr animates to the content's real height; the inner wrapper must be able to shrink to 0 */
.drawer__inner {
  min-height: 0;
  overflow: hidden;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: grid-template-rows 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease;
}

.drawer-enter-from,
.drawer-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .drawer-enter-active,
  .drawer-leave-active {
    transition: opacity 150ms ease;
  }
}

.drawer__nav {
  display: flex;
  flex-direction: column;
  padding: var(--space-5) var(--container-pad);
  gap: var(--space-4);
}

.drawer__nav a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
}

.drawer__cta {
  margin-top: var(--space-2);
}

@media (min-width: 768px) {
  .header__nav {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 14px;
    font-size: 11px;
  }

  .header__burger {
    display: none;
  }

  .header__name-sub {
    display: none;
  }
}

@media (min-width: 1024px) {
  .header__nav {
    gap: var(--space-4);
    font-size: 12px;
  }

  .header__actions {
    gap: var(--space-3);
  }

  .header__cta {
    padding: 9px 14px;
    font-size: 12.5px;
  }

  .header__name-sub {
    display: block;
  }

  .header__cta {
    display: inline-flex;
  }
}
</style>
