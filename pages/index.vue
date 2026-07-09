<template>
  <div>
    <HeroSection />
    <FeaturedProjects />
    <TechStack />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import ContactSection from '~/components/sections/ContactSection.vue';
import FeaturedProjects from '~/components/sections/FeaturedProjects.vue';
import HeroSection from '~/components/sections/HeroSection.vue';
import AboutSection from '~/components/sections/AboutSection.vue';
import TechStack from '~/components/sections/TechStack.vue';

useSeoMeta({
  title: 'Roberto Carlos Chambi - Fullstack & DevOps Engineer',
  description: 'Portafolio Técnico de Roberto Carlos Chambi Calizaya. Desarrollador Fullstack y DevOps Engineer especializado en Node, NestJS, Vue y ecosistemas Cloud.',
  ogTitle: 'Roberto Carlos Chambi - Portafolio',
  ogDescription: 'Senior Fullstack Developer y DevOps Engineer diseñando sistemas escalables con precisión técnica.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>
