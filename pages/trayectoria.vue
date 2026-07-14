<template>
  <div class="trayectoria-page page-padding-top">
    <div class="container">
      <!-- Navegación de regreso arriba -->
      <div class="trayectoria-page__back">
        <NuxtLink to="/" class="btn-back">
          [ ← VOLVER AL INICIO ]
        </NuxtLink>
      </div>

      <!-- Renderizado de la sección de trayectoria -->
      <ExperienceSection />

      <!-- Navegación de regreso abajo para facilitar lectura -->
      <div class="trayectoria-page__back trayectoria-page__back--bottom">
        <NuxtLink to="/" class="btn-back">
          [ ← VOLVER AL INICIO ]
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExperienceSection from '~/components/sections/ExperienceSection.vue';

useSeoMeta({
  title: 'Trayectoria Profesional - Roberto Carlos Chambi',
  description: 'Historial laboral, responsabilidades y logros de Roberto Carlos Chambi como desarrollador Fullstack y DevOps.',
  ogTitle: 'Trayectoria Profesional - Roberto Carlos Chambi',
  ogDescription: 'Detalle de la experiencia profesional y proyectos de Roberto Carlos Chambi.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
});
</script>

<style scoped>
.trayectoria-page {
  min-height: 80vh;
  padding-bottom: var(--space-20);
}

.page-padding-top {
  padding-top: calc(var(--header-height) + var(--space-10));
}

.trayectoria-page__back {
  margin-bottom: var(--space-6);
  display: flex;
  justify-content: flex-start;
}

.trayectoria-page__back--bottom {
  margin-top: var(--space-12);
  margin-bottom: 0;
  justify-content: center;
}

.btn-back {
  font-family: var(--font-family-mono);
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  background-color: transparent;
  border: 1px solid var(--color-border);
  padding: var(--space-3) var(--space-6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: var(--transition-fast);
  text-decoration: none;
  border-radius: var(--radius-md);
}

.btn-back:hover {
  border-color: var(--color-accent-blue);
  color: var(--color-accent-blue);
  background-color: var(--color-accent-blue-05);
  box-shadow: 0 0 8px var(--color-accent-blue-20);
}

@media (max-width: 768px) {
  .page-padding-top {
    padding-top: calc(var(--header-height) + var(--space-6));
  }
}
</style>
