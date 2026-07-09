<template>
  <span class="tech-tag"><slot /></span>
</template>

<style scoped>
.tech-tag {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  background-color: var(--color-surface-level2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
}
</style>
