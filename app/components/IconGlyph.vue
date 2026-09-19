<script setup lang="ts">
import {
  CircleCheckBig,
  Dumbbell,
  Users,
  Clock,
  MapPin,
  Mail,
  Phone,
  Trophy,
  Flag,
  ChevronDown,
  ArrowRight,
  Sun,
  Moon,
  Heart,
  Calendar
} from '@lucide/vue'

type IconName =
  | 'discipline'
  | 'equipment'
  | 'community'
  | 'clock'
  | 'pin'
  | 'mail'
  | 'phone'
  | 'instagram'
  | 'trophy'
  | 'flag'
  | 'chevron-down'
  | 'arrow-right'
  | 'sun'
  | 'moon'
  | 'heart'
  | 'calendar'

const props = withDefaults(defineProps<{ name: IconName; size?: number }>(), { size: 20 })

const lucideIcons = {
  discipline: CircleCheckBig,
  equipment: Dumbbell,
  community: Users,
  clock: Clock,
  pin: MapPin,
  mail: Mail,
  phone: Phone,
  trophy: Trophy,
  flag: Flag,
  'chevron-down': ChevronDown,
  'arrow-right': ArrowRight,
  sun: Sun,
  moon: Moon,
  heart: Heart,
  calendar: Calendar
} as const

const lucideIcon = computed(() => lucideIcons[props.name as keyof typeof lucideIcons])
</script>

<template>
  <component :is="lucideIcon" v-if="lucideIcon" :size="size" :stroke-width="1.8" aria-hidden="true" />
  <svg
    v-else-if="name === 'instagram'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
  </svg>
</template>
