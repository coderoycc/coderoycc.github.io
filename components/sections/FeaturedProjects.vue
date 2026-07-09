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
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import ProjectCard from '~/components/ui/ProjectCard.vue';

const projects = [
  {
    year: '2024',
    category: 'PLATAFORMA CORE',
    status: '↑ DEPLOYED',
    title: 'SISTEMA CORE BANCARIO V2',
    description: 'Rediseño integral de la arquitectura de microservicios para el procesamiento de transacciones en tiempo real con baja latencia y alta disponibilidad. Construido sobre arquitectura distribuida con cero tiempo de inactividad.',
    tags: ['NESTJS', 'NODE', 'TYPESCRIPT', 'KUBERNETES'],
    metric: '10.000+ TRANSACCIONES / 99.99% DISPONIBILIDAD',
    links: { github: '#', demo: '#', docs: '#' },
    featured: true
  },
  {
    year: '2023',
    category: 'DEVOPS / CLOUD',
    status: '↑ DEPLOYED',
    title: 'ORQUESTADOR DE CI/CD',
    description: 'Herramienta interna para la orquestación de despliegues multi-cloud automatizando validaciones de seguridad en entornos críticos integrados.',
    tags: ['PYTHON', 'JAVA', 'AWS'],
    metric: '50 DEPLOYMENTS / HORA',
    links: { github: '#', docs: '#' }
  },
  {
    year: '2023',
    category: 'ANALÍTICA',
    status: '↑ OFFLINE',
    title: 'ENGINE ANALÍTICO REAL-TIME',
    description: 'Visualización de flujos de datos masivos para el monitoreo de infraestructura core en centros de telecomunicaciones.',
    tags: ['VUE', 'TYPESCRIPT', 'NUXT'],
    metric: '1TB/DÍA PROCESADO',
    links: { github: '#', demo: '#' }
  }
];
</script>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

/* Tablet: 2 columnas desde 992px */
@media (min-width: 992px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
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
}
</style>
