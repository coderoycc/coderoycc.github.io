<template>
  <div class="trayectoria-page page-padding-top">
    <div class="container">
      <!-- Navegación de regreso -->
      <div class="trayectoria-page__back">
        <NuxtLink to="/" class="btn-back">
          [ ← BACK TO HOME ]
        </NuxtLink>
      </div>

      <!-- Renderizado de la sección de trayectoria -->
      <ExperienceSection />

      <!-- Navegación de regreso abajo -->
      <div class="trayectoria-page__back trayectoria-page__back--bottom">
        <NuxtLink to="/" class="btn-back">
          [ ← BACK TO HOME ]
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExperienceSection from '~/components/sections/ExperienceSection.vue';

useSeoMeta({
  title: 'Professional Experience — Roberto Carlos Chambi',
  description: 'Full work history, responsibilities and achievements of Roberto Carlos Chambi as a Full Stack Developer & DevOps Engineer. 3+ years designing scalable systems.',
  ogTitle: 'Professional Experience — Roberto Carlos Chambi | Full Stack Developer',
  ogDescription: 'Detailed professional experience of Roberto Carlos Chambi: Full Stack Developer & DevOps Engineer with expertise in Vue, NestJS, Docker and AWS.',
  ogImage: '/og-image.jpg',
  ogType: 'profile',
  robots: 'index, follow',
  twitterCard: 'summary_large_image',
});

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'canonical', href: 'https://coderoycc.github.io/trayectoria' },
  ],
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
