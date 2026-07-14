<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
import ScrollToTop from '~/components/ui/ScrollToTop.vue';
</script>
<template>
  <div class="layout-default">
    <AppHeader />
    <main class="main-content">
      <slot />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>
<style scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.main-content {
  flex: 1;
}
</style>
