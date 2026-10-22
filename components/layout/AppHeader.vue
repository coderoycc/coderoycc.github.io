<template>
  <header class="app-header" :class="{ 'app-header--scrolled': isScrolled }">
    <div class="container app-header__container">

      <!-- Logo: monograma de iniciales estilo código -->
      <a href="#" class="logo" aria-label="Roberto Carlos - Inicio">
        <span class="logo__bracket">&lt;</span>
        <span class="logo__initials">RC</span>
        <span class="logo__bracket">/&gt;</span>
      </a>

      <!-- Navegación central -->
      <nav class="app-header__nav" aria-label="Main navigation">
        <a href="#proyectos" class="app-header__link">Projects</a>
        <a href="#experiencia" class="app-header__link">Experience</a>
        <a href="#stack" class="app-header__link">Stack</a>
        <a href="#sobre-mi" class="app-header__link">About</a>
        <a href="#contacto" class="app-header__link">Contact</a>
      </nav>

      <!-- Acción principal -->
      <div class="app-header__actions">
        <!-- Indicador disponible (desktop) -->
        <a href="#contacto" class="app-header__status" aria-label="Available for hire - Contact">
          <span class="status-dot status-dot--green"></span>
          <span class="app-header__status-text">Available</span>
        </a>
      </div>

      <!-- Hamburger mobile -->
      <button class="app-header__hamburger" :class="{ 'is-open': menuOpen }" aria-label="Abrir menú"
        :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- Mobile menu drawer -->
    <Transition name="menu-slide">
      <div v-if="menuOpen" class="app-header__mobile-menu" role="navigation" aria-label="Menú móvil">
        <a href="#proyectos" class="app-header__mobile-link" @click="menuOpen = false">Projects</a>
        <a href="#experiencia" class="app-header__mobile-link" @click="menuOpen = false">Experience</a>
        <a href="#stack" class="app-header__mobile-link" @click="menuOpen = false">Stack</a>
        <a href="#sobre-mi" class="app-header__mobile-link" @click="menuOpen = false">About</a>
        <a href="#contacto" class="app-header__mobile-link" @click="menuOpen = false">Contact</a>
        <div class="app-header__mobile-cta">
          <a href="#contacto" class="app-header__mobile-status-link" @click="menuOpen = false">
            <span class="status-dot status-dot--green"></span>
            <span class="app-header__status-text">Available for remote work</span>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from '~/components/ui/BaseButton.vue';

const menuOpen = ref(false);
const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
/* ── BASE ── */
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--color-surface-overlay-header);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.app-header--scrolled {
  border-bottom-color: var(--color-border);
}

/* ── CONTENEDOR ── */
.app-header__container {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

/* ── NAV ── */
.app-header__nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.app-header__link {
  font-family: var(--font-family-mono);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: var(--transition-fast);
}

.app-header__link:hover {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-accent-blue);
}

/* ── ACTIONS ── */
.app-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  flex-shrink: 0;
}

/* Status indicator */
.app-header__status {
  display: none;
  align-items: center;
  gap: var(--space-2);
}

.app-header__status-text {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--color-accent-green);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.app-header__status {
  text-decoration: none;
  cursor: pointer;
}

.app-header__status:hover .app-header__status-text {
  text-decoration: underline;
}

.app-header__mobile-status-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  padding: var(--space-2) var(--space-4);
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

/* ── HAMBURGER ── */
.app-header__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: border-color 0.2s ease;
  flex-shrink: 0;
}

.app-header__hamburger:hover {
  border-color: var(--color-accent-blue);
}

.app-header__hamburger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--color-text-secondary);
  border-radius: 2px;
  transition: all 0.25s ease;
  transform-origin: center;
}

.app-header__hamburger.is-open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.app-header__hamburger.is-open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.app-header__hamburger.is-open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ── MOBILE MENU ── */
.app-header__mobile-menu {
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-6) var(--space-6);
  border-top: 1px solid var(--color-border);
  background-color: var(--color-surface-overlay-menu-mobile);
  gap: var(--space-1);
}

.app-header__mobile-link {
  font-family: var(--font-family-mono);
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border);
  transition: color 0.2s ease;
}

.app-header__mobile-link:hover {
  color: var(--color-accent-blue);
}

.app-header__mobile-cta {
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.app-header__mobile-status {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* ── TRANSICIÓN DEL MENÚ ── */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── RESPONSIVE ── */

/* Mobile: hasta 768px */
@media (max-width: 768px) {

  .app-header__nav,
  .app-header__actions {
    display: none;
  }

  .app-header__hamburger {
    display: flex;
  }
}

/* Tablet: 769px - 1023px → mostrar nav, ocultar status */
@media (min-width: 769px) {
  .app-header__mobile-menu {
    display: none !important;
  }

  .app-header__hamburger {
    display: none;
  }

  .app-header__actions {
    display: flex;
  }

  .app-header__nav {
    display: flex;
    gap: var(--space-6);
  }
}

/* Desktop: desde 1024px → mostrar status dot */
@media (min-width: 1024px) {
  .app-header__status {
    display: flex;
  }

  .app-header__nav {
    gap: 36px;
  }
}
</style>
