<script setup lang="ts">
defineProps<{ links: PageCardHref[] }>()
</script>

<template>
  <div class="page-cards">
    <NuxtLink v-for="href in links" :key="href" :to="href" class="page-cards__card">
      <img :src="PAGE_CARDS[href].photo" alt="" loading="lazy" class="page-cards__photo" />
      <span class="page-cards__scrim" aria-hidden="true" />
      <span class="page-cards__body">
        <span class="page-cards__name">{{ PAGE_CARDS[href].title }}</span>
        <span class="page-cards__more">
          Découvrir
          <IconGlyph name="arrow-right" :size="15" />
        </span>
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.page-cards {
  display: grid;
  gap: var(--space-4);
}

.page-cards__card {
  position: relative;
  overflow: hidden;
  min-height: 260px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: var(--color-white);
}

.page-cards__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  transition: transform 400ms ease;
}

.page-cards__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 11, 14, 0.1) 20%, rgba(11, 11, 14, 0.9) 100%);
}

.page-cards__body {
  position: relative;
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.page-cards__name {
  font-family: var(--font-display);
  font-size: 26px;
  text-transform: uppercase;
  line-height: 1.1;
}

.page-cards__more {
  margin-top: var(--space-3);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 13px;
  font-weight: 600;
}

.page-cards__more svg {
  color: var(--accent-text);
  transition: transform 200ms ease;
}

.page-cards__card:hover .page-cards__photo {
  transform: scale(1.05);
}

.page-cards__card:hover .page-cards__more svg {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .page-cards__photo,
  .page-cards__more svg {
    transition: none;
  }
}

@media (min-width: 768px) {
  .page-cards {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}
</style>
