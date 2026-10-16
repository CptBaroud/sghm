<script setup lang="ts">
// Social share image (1200×600) for pages without their own og-image.jpg
defineProps<{ title: string; description?: string }>()
</script>

<template>
  <div
    style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 64px 80px; background: #0b0b0e; border-left: 16px solid #e31937; color: #ffffff; font-family: Inter"
  >
    <div style="display: flex; align-items: center; gap: 24px">
      <img src="/logo-dark.png" width="68" height="72" alt="" />
      <span style="font-size: 26px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #b7bac2">
        SGHM Guérande · Force athlétique
      </span>
    </div>

    <div style="display: flex; flex-direction: column; gap: 20px">
      <span style="font-size: 80px; font-weight: 700; line-height: 1.05; text-transform: uppercase">{{ title }}</span>
      <span v-if="description" style="font-size: 34px; line-height: 1.3; color: #b7bac2">{{ description }}</span>
    </div>
  </div>
</template>
