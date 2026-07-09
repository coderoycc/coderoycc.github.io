<template>
  <article class="project-card" :class="{ 'project-card--featured': featured }">
    <header class="project-card__header">
      <div class="project-card__meta">
        <span>{{ year }}</span>
        <span class="separator">|</span>
        <span>{{ category }}</span>
      </div>
      <div class="project-card__status" v-if="status">
        {{ status }}
      </div>
    </header>

    <h3 class="project-card__title">{{ title }}</h3>
    
    <p class="project-card__description">{{ description }}</p>

    <div class="project-card__tags" v-if="tags && tags.length">
      <TechTag v-for="tag in tags" :key="tag">{{ tag }}</TechTag>
    </div>

    <div class="project-card__metric" v-if="metric">
      <span class="metric-icon">⚡</span>
      {{ metric }}
    </div>

    <footer class="project-card__links">
      <a v-if="links.github" :href="links.github" class="card-link">→ GITHUB</a>
      <a v-if="links.demo" :href="links.demo" class="card-link">→ LIVE DEMO</a>
      <a v-if="links.docs" :href="links.docs" class="card-link">→ DOCS</a>
    </footer>
  </article>
</template>

<script setup lang="ts">
import TechTag from './TechTag.vue';

interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
}

defineProps<{
  year: string;
  category: string;
  status?: string;
  title: string;
  description: string;
  tags?: string[];
  metric?: string;
  links: ProjectLinks;
  featured?: boolean;
}>()
</script>

<style scoped>
.project-card {
  background-color: var(--color-surface-level1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  background-color: var(--color-surface-level2);
  border-color: #2A2A40; /* Ligero resalte en hover */
}

/* Acento azul a la izquierda si el proyecto es destacado */
.project-card--featured::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 32px;
  bottom: 32px;
  width: 2px;
  background-color: var(--color-accent-blue);
}

.project-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-family: var(--font-family-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.project-card__meta {
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.project-card__meta .separator {
  color: var(--color-border);
}

.project-card__status {
  color: var(--color-accent-blue);
  border: 1px solid var(--color-accent-blue);
  padding: 4px 8px;
  border-radius: 2px;
  background-color: rgba(77, 124, 254, 0.05);
}

.project-card__title {
  font-family: var(--font-family-display);
  font-size: 32px;
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.project-card__description {
  font-family: var(--font-family-mono);
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 24px;
  flex-grow: 1; /* Empuja los elementos del final hacia abajo */
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.project-card__metric {
  background-color: var(--color-surface-base);
  border-left: 2px solid var(--color-accent-blue);
  padding: 12px 16px;
  font-family: var(--font-family-mono);
  font-size: 12px;
  color: var(--color-text-primary);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.metric-icon {
  color: var(--color-accent-blue);
}

.project-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-family: var(--font-family-mono);
  font-size: 12px;
  font-weight: 600;
}

.card-link {
  color: var(--color-text-secondary);
  transition: color 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.card-link:hover {
  color: var(--color-accent-blue);
}

/* Responsividad en tablet/móvil */
@media (max-width: 768px) {
  .project-card {
    padding: 24px;
  }
  .project-card__title {
    font-size: 24px;
  }
  .project-card--featured::before {
    top: 24px;
    bottom: 24px;
  }
}
</style>
