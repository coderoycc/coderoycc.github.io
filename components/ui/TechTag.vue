<template>
  <span class="tech-tag"><slot /></span>
</template>

<style scoped>
.tech-tag {
  display: inline-flex;
  align-items: center;
  height: var(--space-6);
  padding: 0 var(--space-2);
  background-color: var(--color-surface-level2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-transform: uppercase;
}
</style>
