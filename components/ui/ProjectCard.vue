<template>
  <article 
    class="project-card" 
    :class="{ 
      'project-card--featured': featured && !locked,
      'project-card--locked': locked 
    }"
  >
    <header class="project-card__header">
      <div class="project-card__meta">
        <span>{{ year }}</span>
        <span class="separator">|</span>
        <span>{{ category }}</span>
      </div>
      <div 
        class="project-card__status" 
        :class="{ 'project-card__status--locked': locked }"
        v-if="status"
      >
        <template v-if="locked">🔒 PRIVATE</template>
        <template v-else>{{ status }}</template>
      </div>
    </header>

    <h3 class="project-card__title">{{ title }}</h3>
    
    <p class="project-card__description">{{ description }}</p>

    <div class="project-card__tags" v-if="tags && tags.length">
      <TechTag v-for="tag in tags" :key="tag">{{ tag }}</TechTag>
    </div>

    <div class="project-card__metric" v-if="metric">
      <span class="metric-icon">⚡</span>
      <span class="metric-text text-break">{{ metric }}</span>
    </div>

    <footer class="project-card__links" v-if="!locked && links">
      <a v-if="links.github" :href="links.github" class="card-link" target="_blank" rel="noopener noreferrer">→ GITHUB</a>
      <a v-if="links.demo" :href="links.demo" class="card-link" target="_blank" rel="noopener noreferrer">→ LIVE DEMO</a>
      <a v-if="links.docs" :href="links.docs" class="card-link" target="_blank" rel="noopener noreferrer">→ DOCS</a>
      <a v-if="links.npm" :href="links.npm" class="card-link" target="_blank" rel="noopener noreferrer">→ NPM</a>
    </footer>
  </article>
</template>

<script setup lang="ts">
import TechTag from './TechTag.vue';

interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
  npm?: string;
}

defineProps<{
  year: string;
  category: string;
  status?: string;
  title: string;
  description: string;
  tags?: string[];
  metric?: string;
  links?: ProjectLinks;
  featured?: boolean;
  locked?: boolean;
}>()
</script>

<style scoped>
.project-card {
  background-color: var(--color-surface-level1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--card-padding);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  background-color: var(--color-surface-level2);
  border-color: #2A2A40; /* Ligero resalte en hover */
}

.project-card--locked {
  opacity: 0.65;
  cursor: default;
  border-style: dashed;
}

.project-card--locked:hover {
  background-color: var(--color-surface-level1);
  border-color: var(--color-border);
}

.project-card__status--locked {
  color: var(--color-text-secondary);
  border-color: var(--color-border);
  background-color: rgba(255, 255, 255, 0.02);
}

/* Acento azul a la izquierda si el proyecto es destacado */
.project-card--featured::before {
  content: '';
  position: absolute;
  left: -1px;
  top: var(--card-padding);
  bottom: var(--card-padding);
  width: 2px;
  background-color: var(--color-accent-blue);
}

.project-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.project-card__meta {
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.project-card__meta .separator {
  color: var(--color-border);
}

.project-card__status {
  color: var(--color-accent-blue);
  border: 1px solid var(--color-accent-blue);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  background-color: var(--color-accent-blue-05);
}

.project-card__title {
  font-family: var(--font-family-display);
  font-size: var(--text-heading-card);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  letter-spacing: -0.01em;
}

.project-card__description {
  font-family: var(--font-family-mono);
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  flex-grow: 1; /* Empuja los elementos del final hacia abajo */
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.project-card__metric {
  background-color: var(--color-surface-base);
  border-left: 2px solid var(--color-accent-blue);
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-family-mono);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  overflow-wrap: anywhere;
  word-break: break-word;
}

.metric-icon {
  color: var(--color-accent-blue);
  flex-shrink: 0;
}

.metric-text {
  flex: 1;
  min-width: 0;
}

.project-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
  font-family: var(--font-family-mono);
  font-size: var(--text-base);
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
</style>
