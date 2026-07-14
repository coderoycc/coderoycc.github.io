<template>
  <section id="proyectos" class="projects section-padding">
    <div class="container">
      <SectionHeader number="01" title="Proyectos Destacados" />

      <div class="projects__grid">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          v-bind="project"
        />
      </div>

      <!-- Botón para ver trayectoria en una nueva página -->
      <div class="projects__actions">
        <NuxtLink to="/trayectoria" class="btn-experience">
          [ VER TRAYECTORIA PROFESIONAL → ]
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import ProjectCard from '~/components/ui/ProjectCard.vue';
import { usePortfolioData } from '~/composables/usePortfolioData';

const { getProjects } = usePortfolioData();
const projects = getProjects().slice(0, 3);
</script>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-6);
}

.projects__actions {
  display: flex;
  justify-content: center;
  margin-top: var(--space-12);
}

.btn-experience {
  font-family: var(--font-family-mono);
  font-size: var(--text-md);
  color: var(--color-accent-blue);
  background-color: transparent;
  border: 1px solid var(--color-accent-blue-30);
  padding: var(--space-4) var(--space-8);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: var(--transition-fast);
  text-decoration: none;
  border-radius: var(--radius-md);
}

.btn-experience:hover {
  background-color: var(--color-accent-blue-05);
  border-color: var(--color-accent-blue);
  color: var(--color-text-primary);
  /* sutil resplandor técnico */
  box-shadow: 0 0 8px var(--color-accent-blue-20);
}

/* Tablet: 2 columnas desde 992px */
@media (min-width: 992px) {
  .projects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* El primer card (featured) ocupa la fila completa */
  .projects__grid > :first-child {
    grid-column: 1 / -1;
  }
}

/* Mobile pequeño: gap reducido */
@media (max-width: 480px) {
  .projects__grid {
    gap: var(--space-4);
  }
  .btn-experience {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
  }
}
</style>
