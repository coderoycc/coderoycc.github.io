<template>
  <component :is="href ? 'a' : 'button'" :href="href" :class="['base-button', `base-button--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}>()
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  font-family: var(--font-family-mono);
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  background: transparent;
  color: var(--color-text-primary);
}

.base-button--primary {
  background-color: var(--color-accent-blue);
  color: var(--color-surface-base);
}
.base-button--primary:hover {
  filter: brightness(1.2);
}

.base-button--secondary {
  border-color: var(--color-accent-blue);
  color: var(--color-text-primary);
}
.base-button--secondary:hover {
  background-color: rgba(77, 124, 254, 0.1);
}

.base-button--ghost {
  border-color: var(--color-border);
  color: var(--color-text-secondary);
}
.base-button--ghost:hover {
  border-color: var(--color-accent-blue);
  color: var(--color-text-primary);
  background-color: var(--color-surface-level2);
}
</style>
