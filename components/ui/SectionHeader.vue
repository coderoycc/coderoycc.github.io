<template>
  <div class="section-header">
    <span class="section-header__number">{{ number }} /</span>
    <h2 class="section-header__title">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ number: string, title: string }>()
</script>

<style scoped>
.section-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  margin-bottom: var(--section-header-mb);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-4);
}

.section-header__number {
  font-family: var(--font-family-mono);
  font-size: var(--text-lg);
  color: var(--color-accent-blue);
  font-weight: 600;
}

.section-header__title {
  font-family: var(--font-family-display);
  font-size: var(--text-heading-section);
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
