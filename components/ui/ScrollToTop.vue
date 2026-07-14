<template>
  <Transition name="scroll-top">
    <button
      v-if="isVisible"
      class="scroll-top"
      aria-label="Volver al inicio"
      @click="scrollToTop"
    >
      <!-- Flecha SVG minimalista -->
      <svg
        class="scroll-top__icon"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 12V4M4 7.5L8 4L12 7.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="square"
          stroke-linejoin="miter"
        />
      </svg>

      <!-- Indicador de progreso circular -->
      <svg
        class="scroll-top__progress"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          class="scroll-top__track"
          cx="22"
          cy="22"
          r="19"
        />
        <circle
          class="scroll-top__fill"
          cx="22"
          cy="22"
          r="19"
          :stroke-dashoffset="dashOffset"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const SHOW_THRESHOLD  = 300;       // px desde el top para mostrar el botón
const CIRCUMFERENCE  = 2 * Math.PI * 19; // r=19

const scrollY     = ref(0);
const docHeight   = ref(1);

const isVisible = computed(() => scrollY.value > SHOW_THRESHOLD);

/** Offset del círculo de progreso: 0 = completo, CIRCUMFERENCE = vacío */
const dashOffset = computed(() => {
  const progress = Math.min(scrollY.value / (docHeight.value - window.innerHeight), 1);
  return CIRCUMFERENCE * (1 - progress);
});

function handleScroll() {
  scrollY.value   = window.scrollY;
  docHeight.value = document.documentElement.scrollHeight;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  docHeight.value = document.documentElement.scrollHeight;
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* ── BOTÓN ── */
.scroll-top {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: 90;

  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-surface-level2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0;

  transition: color var(--transition-fast), border-color var(--transition-fast),
              background-color var(--transition-fast);
}

.scroll-top:hover {
  color: var(--color-accent-blue);
  border-color: var(--color-accent-blue-40);
  background-color: var(--color-accent-blue-06);
}

/* ── ICONO FLECHA ── */
.scroll-top__icon {
  width: 16px;
  height: 16px;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

/* ── PROGRESO CIRCULAR ── */
.scroll-top__progress {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg); /* empieza desde las 12h */
}

.scroll-top__track {
  stroke: var(--color-border);
  stroke-width: 1.5;
  fill: none;
}

.scroll-top__fill {
  stroke: var(--color-accent-blue);
  stroke-width: 1.5;
  fill: none;
  stroke-dasharray: 119.38; /* 2π × 19 */
  transition: stroke-dashoffset 0.1s linear;
}

/* ── TRANSICIÓN DE ENTRADA / SALIDA ── */
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}

/* ── MOBILE: moverlo un poco hacia arriba para no tapar el footer ── */
@media (max-width: 480px) {
  .scroll-top {
    bottom: var(--space-4);
    right: var(--space-4);
  }
}
</style>
