<template>
  <section class="hero">
    <!-- Animated background grid glow -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__bg-orb hero__bg-orb--1"></div>
      <div class="hero__bg-orb hero__bg-orb--2"></div>
    </div>

    <div class="container hero__inner">

      <!-- Badge de disponibilidad -->
      <div class="badge hero__badge reveal reveal--fade">
        <span class="status-dot status-dot--green"></span>
        OPEN TO REMOTE OPPORTUNITIES · {{ profile.availability }}
      </div>

      <!-- Saludo -->
      <div class="hero__greeting reveal reveal--up reveal--delay-1">HI, I'M</div>

      <!-- Título principal -->
      <h1 class="hero__title reveal reveal--up reveal--delay-1">
        <span class="hero__title-accent">{{ profile.name.toUpperCase() }}</span><br />
        {{ profile.lastName.toUpperCase() }}
      </h1>

      <!-- Rol / descripción -->
      <p class="hero__subtitle reveal reveal--up reveal--delay-2">
        {{ profile.title.toUpperCase() }} · DESIGNING SCALABLE SYSTEMS
        WITH TECHNICAL PRECISION AND ARCHITECTURAL RIGOR.
      </p>

      <!-- Métricas -->
      <div class="hero__metrics reveal reveal--up reveal--delay-2">
        <div class="hero__metric">
          <span class="hero__metric-value">3<span class="hero__metric-plus">+</span></span>
          <span class="hero__metric-label">YEARS OF EXPERIENCE</span>
        </div>
        <div class="hero__metric-sep" aria-hidden="true"></div>
        <div class="hero__metric">
          <span class="hero__metric-value">Full<span class="hero__metric-plus">stack</span></span>
          <span class="hero__metric-label">FRONTEND · BACKEND · CLOUD</span>
        </div>
        <div class="hero__metric-sep" aria-hidden="true"></div>
        <div class="hero__metric">
          <span class="hero__metric-value">BOT<span class="hero__metric-plus"> UTC-4</span></span>
          <span class="hero__metric-label">REMOTE-READY TIMEZONE</span>
        </div>
      </div>

      <!-- Stack principal -->
      <div class="hero__stack reveal reveal--up reveal--delay-3">
        <span class="hero__stack-label">CORE STACK →</span>
        <div class="hero__stack-tags">
          <span class="hero__tag hero__tag--highlight">Vue / Nuxt</span>
          <span class="hero__tag">Node.js / NestJS</span>
          <span class="hero__tag">PostgreSQL</span>
          <span class="hero__tag">Docker / K8s</span>
          <span class="hero__tag">AWS / Cloud</span>
          <span class="hero__tag">TypeScript</span>
        </div>
      </div>

      <!-- Divider -->
      <div class="gradient-divider hero__divider" aria-hidden="true"></div>

      <!-- CTAs -->
      <div class="hero__actions reveal reveal--up reveal--delay-3">
        <BaseButton variant="primary" href="#proyectos">VIEW PROJECTS</BaseButton>
        <BaseButton variant="ghost" href="#contacto">GET IN TOUCH</BaseButton>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
import { usePortfolioData } from '~/composables/usePortfolioData';
import { useScrollReveal } from '~/composables/useScrollReveal';

const { getProfile } = usePortfolioData();
const profile = getProfile();

useScrollReveal();
</script>

<style scoped>
/* ── SECCIÓN ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--header-height);
  position: relative;
  overflow: hidden;
}

.hero__inner {
  padding-top: var(--space-10);
  padding-bottom: var(--space-10);
  position: relative;
  z-index: 1;
}

/* ── FONDO ANIMADO ── */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.hero__bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orb-float 12s ease-in-out infinite;
}

.hero__bg-orb--1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(77, 124, 254, 0.12) 0%, transparent 70%);
  top: -10%;
  left: -5%;
  animation-delay: 0s;
}

.hero__bg-orb--2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(77, 124, 254, 0.08) 0%, transparent 70%);
  top: 20%;
  right: 10%;
  animation-delay: -6s;
  animation-direction: reverse;
}

@keyframes orb-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(20px, -30px) scale(1.05); }
  66%       { transform: translate(-15px, 20px) scale(0.95); }
}

/* ── BADGE ── */
.hero__badge {
  margin-bottom: var(--space-8);
}

/* ── GREETING ── */
.hero__greeting {
  font-family: var(--font-family-mono);
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ── TÍTULO ── */
.hero__title {
  font-family: var(--font-family-display);
  font-size: var(--text-heading-hero);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  text-transform: uppercase;
}

.hero__title-accent {
  color: var(--color-accent-blue);
}

/* ── SUBTÍTULO ── */
.hero__subtitle {
  font-family: var(--font-family-mono);
  font-size: clamp(var(--text-base), 1.5vw, 15px);
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 680px;
  margin-bottom: var(--space-12);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  overflow-wrap: break-word;
}

/* ── MÉTRICAS ── */
.hero__metrics {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.hero__metric {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.hero__metric-value {
  font-family: var(--font-family-display);
  font-size: var(--text-heading-metric);
  font-weight: 900;
  color: var(--color-text-primary);
  line-height: 1;
  letter-spacing: -0.02em;
}

.hero__metric-plus {
  font-size: 0.55em;
  color: var(--color-accent-blue);
  vertical-align: super;
  font-weight: 700;
}

.hero__metric-label {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.hero__metric-sep {
  width: 1px;
  height: 40px;
  background: var(--color-border);
  flex-shrink: 0;
  display: none;
}

/* ── STACK TAGS ── */
.hero__stack {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
  flex-wrap: wrap;
}

.hero__stack-label {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  flex-shrink: 0;
  padding-top: 5px;
}

.hero__stack-tags {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.hero__tag {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-1) var(--space-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: var(--transition-fast);
}

.hero__tag:hover {
  color: var(--color-accent-blue);
  border-color: var(--color-accent-blue-40);
  background: var(--color-accent-blue-06);
}

.hero__tag--highlight {
  color: var(--color-accent-blue);
  border-color: var(--color-accent-blue-35);
  background: var(--color-accent-blue-08);
}

/* ── DIVIDER ── */
.hero__divider {
  max-width: 600px;
  margin-bottom: var(--space-10);
}

/* ── ACTIONS ── */
.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}



/* ── RESPONSIVE ── */
@media (min-width: 600px) {
  .hero__metrics {
    gap: 0;
    flex-wrap: nowrap;
  }
  .hero__metric {
    padding: 0 var(--space-8);
  }
  .hero__metric:first-child {
    padding-left: 0;
  }
  .hero__metric-sep {
    display: block;
  }
}

@media (max-width: 480px) {
  .hero__actions {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
  .hero__greeting {
    font-size: var(--text-md);
  }
  .hero__subtitle {
    margin-bottom: var(--space-8);
  }
}

@media (max-width: 360px) {
  .hero__stack {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
