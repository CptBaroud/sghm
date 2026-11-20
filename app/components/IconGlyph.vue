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
  Calendar,
  Globe,
  Mic
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
  | 'globe'
  | 'podcast'
  | 'youtube'
  | 'facebook'
  | 'linkedin'

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
  calendar: Calendar,
  globe: Globe,
  podcast: Mic
} as const

// lucide dropped brand logos: simple outline marks drawn in the same 24px stroke style
const brandIcons: Record<string, string> = {
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
  facebook: '<path d="M15.5 3.5H13a3.5 3.5 0 0 0-3.5 3.5v3H7v3.5h2.5v7H13v-7h2.5l.5-3.5h-3V7.5a1 1 0 0 1 1-1h1.5z"/>',
  linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10.5v6M8 7.5v.01M12 16.5v-6M12 13.5a2.5 2.5 0 0 1 5 0v3"/>'
}

const lucideIcon = computed(() => lucideIcons[props.name as keyof typeof lucideIcons])
</script>

<template>
  <component :is="lucideIcon" v-if="lucideIcon" :size="size" :stroke-width="1.8" aria-hidden="true" />
  <svg
    v-else-if="brandIcons[name]"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="brandIcons[name]"
  />
</template>
