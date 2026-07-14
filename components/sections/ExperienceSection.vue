<template>
  <section id="experiencia" class="experience section-padding">
    <div class="container">
      <SectionHeader number="04" title="Trayectoria Profesional" />

      <div class="experience__timeline">
        <div 
          v-for="(job, index) in experience" 
          :key="index" 
          class="experience__item"
        >
          <!-- Línea vertical decorativa de fondo -->
          <div class="experience__line" aria-hidden="true"></div>

          <!-- Lado izquierdo: Metadatos temporales y de empresa -->
          <div class="experience__meta">
            <span class="experience__period">{{ job.period }}</span>
            <h4 class="experience__company">{{ job.company.toUpperCase() }}</h4>
            <span class="experience__location">{{ job.location.toUpperCase() }}</span>
          </div>

          <!-- Nodo indicador en el timeline -->
          <div class="experience__node">
            <div class="experience__node-dot"></div>
          </div>

          <!-- Lado derecho: Detalles del rol -->
          <div class="experience__content">
            <h3 class="experience__role">{{ job.role.toUpperCase() }}</h3>
            
            <ul class="experience__list">
              <li 
                v-for="(accomplishment, accIndex) in job.accomplishments" 
                :key="accIndex" 
                class="experience__list-item"
              >
                {{ accomplishment }}
              </li>
            </ul>

            <div class="experience__tags" v-if="job.technologies && job.technologies.length">
              <span 
                v-for="tech in job.technologies" 
                :key="tech" 
                class="experience__tag"
              >
                {{ tech.toUpperCase() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import { usePortfolioData } from '~/composables/usePortfolioData';

const { getExperience } = usePortfolioData();
const experience = getExperience();
</script>

<style scoped>
.experience {
  position: relative;
  overflow: hidden;
}

.experience__timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  position: relative;
  margin-top: var(--space-8);
}

.experience__item {
  display: grid;
  grid-template-columns: 240px 40px 1fr;
  position: relative;
}

/* Línea vertical central */
.experience__line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 260px; /* Centrado en la columna del nodo */
  width: 1px;
  background-color: var(--color-border);
  z-index: 1;
}

/* Ocultar la línea en el último elemento */
.experience__item:last-child .experience__line {
  bottom: auto;
  height: 24px; /* Termina en el nodo */
}

/* Lado izquierdo */
.experience__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  padding-right: var(--space-4);
  font-family: var(--font-family-mono);
  padding-top: var(--space-2);
}

.experience__period {
  font-size: var(--text-base);
  color: var(--color-accent-blue);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-1);
}

.experience__company {
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0 0 var(--space-1) 0;
}

.experience__location {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

/* Nodo (círculo) */
.experience__node {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  z-index: 2;
  position: relative;
}

.experience__node-dot {
  width: 10px;
  height: 10px;
  background-color: var(--color-surface-base);
  border: 2px solid var(--color-accent-blue);
  border-radius: var(--radius-full);
  transition: var(--transition-fast);
}

.experience__item:hover .experience__node-dot {
  background-color: var(--color-accent-blue);
  box-shadow: var(--shadow-glow-blue-sm);
}

/* Lado derecho */
.experience__content {
  background-color: var(--color-surface-level1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-8);
  margin-left: var(--space-4);
  transition: var(--transition-fast);
}

.experience__item:hover .experience__content {
  background-color: var(--color-surface-level2);
  border-color: #2A2A40;
}

.experience__role {
  font-family: var(--font-family-display);
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
  margin: 0 0 var(--space-5) 0;
}

.experience__list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-6) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.experience__list-item {
  font-family: var(--font-family-mono);
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  position: relative;
  padding-left: var(--space-5);
}

.experience__list-item::before {
  content: "»";
  position: absolute;
  left: 0;
  color: var(--color-accent-blue);
}

.experience__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.experience__tag {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-2);
  transition: var(--transition-fast);
  letter-spacing: 0.05em;
}

.experience__item:hover .experience__tag {
  border-color: var(--color-accent-blue-20);
  background-color: var(--color-accent-blue-05);
  color: var(--color-text-primary);
}

/* Responsive */
@media (max-width: 991px) {
  .experience__item {
    grid-template-columns: 180px 40px 1fr;
  }
  
  .experience__line {
    left: 200px;
  }
}

@media (max-width: 768px) {
  .experience__timeline {
    gap: var(--space-8);
  }

  .experience__item {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .experience__line {
    display: none;
  }

  .experience__node {
    display: none;
  }

  .experience__meta {
    align-items: flex-start;
    text-align: left;
    padding-right: 0;
    padding-left: var(--space-4);
    padding-top: 0;
  }

  .experience__content {
    margin-left: 0;
    padding: var(--space-5);
  }
}
</style>
