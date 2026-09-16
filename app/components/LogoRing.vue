<script setup lang="ts">
/**
 * SGHM ring mark: two equal arcs (bleu nuit + rouge athlétique), a white
 * gap at top, an open gap at bottom. Reused as the logo, a section
 * divider (single arc) and the loading indicator.
 */
const props = withDefaults(
  defineProps<{
    size?: number
    animate?: boolean
    strokeWidth?: number
  }>(),
  {
    size: 48,
    animate: false,
    strokeWidth: 6
  }
)

const radius = computed(() => props.size / 2 - props.strokeWidth / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)

// Angles measured clockwise from 12 o'clock.
const arcs = {
  white: { start: -20, end: 20 },
  blue: { start: 20, end: 160 },
  red: { start: 200, end: 340 }
}

function arcPath(startDeg: number, endDeg: number, r: number, cx: number, cy: number) {
  const toXY = (deg: number) => {
    const rad = ((deg - 90) * Math.PI) / 180
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)]
  }
  const [x1, y1] = toXY(startDeg)
  const [x2, y2] = toXY(endDeg)
  const largeArc = endDeg - startDeg > 180 ? 1 : 0
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`
}

const cx = computed(() => props.size / 2)
const cy = computed(() => props.size / 2)

const blueArc = computed(() => arcPath(arcs.blue.start, arcs.blue.end, radius.value, cx.value, cy.value))
const redArc = computed(() => arcPath(arcs.red.start, arcs.red.end, radius.value, cx.value, cy.value))
const whiteArc = computed(() => arcPath(arcs.white.start, arcs.white.end, radius.value, cx.value, cy.value))

const arcLength = (deg: number) => (deg / 360) * circumference.value

const blueLength = computed(() => arcLength(arcs.blue.end - arcs.blue.start))
const redLength = computed(() => arcLength(arcs.red.end - arcs.red.start))
const whiteLength = computed(() => arcLength(arcs.white.end - arcs.white.start))

const traced = ref(!props.animate)

onMounted(() => {
  if (!props.animate) return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    traced.value = true
    return
  }
  requestAnimationFrame(() => {
    traced.value = true
  })
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    role="img"
    aria-label="SGHM Force Athlétique Guérande"
    class="logo-ring"
    :class="{ 'logo-ring--tracing': animate }"
  >
    <path
      :d="whiteArc"
      fill="none"
      stroke="var(--color-steel-300)"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      :stroke-dasharray="whiteLength"
      :stroke-dashoffset="traced ? 0 : whiteLength"
    />
    <path
      :d="blueArc"
      fill="none"
      stroke="var(--color-blue-accent)"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      :stroke-dasharray="blueLength"
      :stroke-dashoffset="traced ? 0 : blueLength"
    />
    <path
      :d="redArc"
      fill="none"
      stroke="var(--color-red)"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      :stroke-dasharray="redLength"
      :stroke-dashoffset="traced ? 0 : redLength"
    />
  </svg>
</template>

<style scoped>
.logo-ring path {
  transition: none;
}

.logo-ring--tracing path {
  transition: stroke-dashoffset 600ms ease-out;
}
</style>
