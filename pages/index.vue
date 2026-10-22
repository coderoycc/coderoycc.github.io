<template>
  <div>
    <HeroSection />
    <FeaturedProjects />
    <ExperienceSection />
    <TechStack />
    <AboutSection />
    <EducationSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import ContactSection from '~/components/sections/ContactSection.vue';
import FeaturedProjects from '~/components/sections/FeaturedProjects.vue';
import HeroSection from '~/components/sections/HeroSection.vue';
import AboutSection from '~/components/sections/AboutSection.vue';
import TechStack from '~/components/sections/TechStack.vue';
import ExperienceSection from '~/components/sections/ExperienceSection.vue';
import EducationSection from '~/components/sections/EducationSection.vue';

useSeoMeta({
  title: 'Roberto Carlos Chambi — Full Stack Developer & DevOps Engineer',
  description: 'Full Stack Developer & DevOps Engineer with 3+ years of experience. Specialized in Vue.js, TypeScript, Node.js, NestJS, Docker and AWS. Open to full-time remote roles worldwide.',
  ogTitle: 'Roberto Carlos Chambi — Full Stack Developer & DevOps Engineer',
  ogDescription: 'Full Stack Developer & DevOps Engineer building scalable systems with precision. Available for remote roles. Vue · NestJS · TypeScript · Docker · AWS.',
  ogImage: '/og-image.jpg',
  ogType: 'website',
  ogUrl: 'https://coderoycc.github.io',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Roberto Carlos Chambi — Full Stack Developer & DevOps Engineer',
  twitterDescription: 'Full Stack Developer & DevOps Engineer. Available for remote roles. Vue · NestJS · TypeScript · Docker · AWS.',
  twitterImage: '/og-image.jpg',
  robots: 'index, follow',
  author: 'Roberto Carlos Chambi Calizaya',
})

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'canonical', href: 'https://coderoycc.github.io' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Roberto Carlos Chambi Calizaya',
        jobTitle: 'Full Stack Developer & DevOps Engineer',
        url: 'https://coderoycc.github.io',
        email: 'rcchambi4@gmail.com',
        sameAs: [
          'https://github.com/coderoycc',
          'https://www.linkedin.com/in/rcchambi4',
        ],
        knowsAbout: [
          'Vue.js', 'Nuxt.js', 'React', 'TypeScript', 'Node.js',
          'NestJS', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL',
          'CI/CD', 'Microservices', 'DevOps',
        ],
        description: 'Full Stack Developer & DevOps Engineer with 3+ years of experience designing and developing scalable end-to-end web applications. Available for remote work.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'La Paz',
          addressCountry: 'BO',
        },
      }),
    },
  ],
})
</script>
