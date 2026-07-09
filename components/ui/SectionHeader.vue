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
  gap: 12px;
  margin-bottom: 48px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 16px;
}

.section-header__number {
  font-family: var(--font-family-mono);
  font-size: 14px;
  color: var(--color-accent-blue);
  font-weight: 600;
}

.section-header__title {
  font-family: var(--font-family-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
