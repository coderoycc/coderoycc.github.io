<template>
  <section id="stack" class="tech-stack section-padding">
    <div class="container">
      <SectionHeader number="02" title="Stack Técnico" />

      <div class="tech-stack__intro">
        <p>
          Las herramientas son el medio, no el fin. Mi experiencia se centra en arquitecturas
          limpias y patrones escalables, permitiéndome adaptar rápidamente el stack a las
          necesidades del negocio.
        </p>
      </div>

      <div class="tech-stack__grid">

        <!-- Frontend -->
        <div class="stack-col">
          <h3 class="stack-col__title">FRONTEND</h3>
          <ul class="stack-list">
            <li 
              v-for="(skill, index) in skills.frontend" 
              :key="index" 
              class="stack-list__item"
            >
              <span class="stack-list__name">{{ skill.name.toUpperCase() }}</span>
              <span 
                class="stack-badge" 
                :class="{ 'stack-badge--core': skill.level === 'CORE' }"
              >
                {{ skill.level }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Backend -->
        <div class="stack-col">
          <h3 class="stack-col__title">BACKEND &amp; DATA</h3>
          <ul class="stack-list">
            <li 
              v-for="(skill, index) in skills.backend" 
              :key="index" 
              class="stack-list__item"
            >
              <span class="stack-list__name">{{ skill.name.toUpperCase() }}</span>
              <span 
                class="stack-badge" 
                :class="{ 'stack-badge--core': skill.level === 'CORE' }"
              >
                {{ skill.level }}
              </span>
            </li>
          </ul>
        </div>

        <!-- DevOps -->
        <div class="stack-col">
          <h3 class="stack-col__title">DEVOPS &amp; CLOUD</h3>
          <ul class="stack-list">
            <li 
              v-for="(skill, index) in skills.devops" 
              :key="index" 
              class="stack-list__item"
            >
              <span class="stack-list__name">{{ skill.name.toUpperCase() }}</span>
              <span 
                class="stack-badge" 
                :class="{ 'stack-badge--core': skill.level === 'CORE' }"
              >
                {{ skill.level }}
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import { usePortfolioData } from '~/composables/usePortfolioData';

const { getSkills } = usePortfolioData();
const skills = getSkills();
</script>

<style scoped>
/* ── INTRO ── */
.tech-stack__intro {
  margin-bottom: var(--section-intro-mb);
  max-width: 760px;
}

.tech-stack__intro p {
  font-family: var(--font-family-mono);
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-text-secondary);
}

/* ── GRID DE COLUMNAS ── */
.tech-stack__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-12);
}

/* Tablet (2 cols) */
@media (min-width: 768px) and (max-width: 1023px) {
  .tech-stack__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-8);
  }
  /* DevOps ocupa la fila completa en tablet 2 cols */
  .tech-stack__grid > :last-child {
    grid-column: 1 / -1;
  }
}

/* Desktop (3 cols) */
@media (min-width: 1024px) {
  .tech-stack__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-8);
  }
}

/* ── COLUMNA ── */
.stack-col__title {
  font-family: var(--font-family-mono);
  font-size: var(--text-lg);
  color: var(--color-accent-blue);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-4);
  margin-bottom: 0;
}

/* ── LISTA ── */
.stack-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.stack-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family-mono);
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  padding: var(--space-4) var(--space-3);
  border-bottom: 1px solid var(--color-border);
  border-left: 2px solid transparent;
  transition: var(--transition-fast);
  cursor: default;
  gap: var(--space-3);
}

.stack-list__item:hover {
  background-color: var(--color-surface-level2);
  border-left-color: var(--color-accent-blue);
  color: var(--color-text-primary);
}

.stack-list__name {
  flex: 1;
  min-width: 0;
}

/* ── BADGE DE NIVEL ── */
.stack-badge {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  padding: 3px var(--space-2);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-base);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

.stack-badge--core {
  color: var(--color-accent-blue);
  border-color: var(--color-accent-blue-30);
  background-color: var(--color-accent-blue-05);
}

/* ── MOBILE ── */
@media (max-width: 480px) {
  .tech-stack__intro p {
    font-size: var(--text-md);
  }
  .stack-list__item {
    font-size: var(--text-base);
    padding: var(--space-3) var(--space-2);
  }
}
</style>
