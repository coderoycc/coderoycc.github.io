<template>
  <section class="hero">
    <div class="container hero__inner">

      <!-- Badge de disponibilidad (usa .badge global) -->
      <div class="badge hero__badge">
        <span class="status-dot status-dot--blue"></span>
        DISPONIBLE PARA NUEVOS PROYECTOS
      </div>

      <!-- Saludo -->
      <div class="hero__greeting">HOLA, SOY</div>

      <!-- Título principal -->
      <h1 class="hero__title">
        <span class="hero__title-accent">ROBERTO CARLOS</span><br />
        CHAMBI CALIZAYA
      </h1>

      <!-- Rol / descripción -->
      <p class="hero__subtitle">
        INGENIERO DE SOFTWARE · FULLSTACK &amp; DEVOPS · DISEÑANDO SISTEMAS
        ESCALABLES CON PRECISIÓN TÉCNICA Y RIGOR ARQUITECTÓNICO.
      </p>

      <!-- Métricas -->
      <div class="hero__metrics">
        <div class="hero__metric">
          <span class="hero__metric-value">5<span class="hero__metric-plus">+</span></span>
          <span class="hero__metric-label">AÑOS DE EXPERIENCIA</span>
        </div>
        <div class="hero__metric-sep" aria-hidden="true"></div>
        <div class="hero__metric">
          <span class="hero__metric-value">Full<span class="hero__metric-plus">stack</span></span>
          <span class="hero__metric-label">FRONTEND · BACKEND · CLOUD</span>
        </div>
      </div>

      <!-- Stack principal -->
      <div class="hero__stack">
        <span class="hero__stack-label">STACK PRINCIPAL →</span>
        <div class="hero__stack-tags">
          <span class="hero__tag hero__tag--highlight">Vue / Nuxt</span>
          <span class="hero__tag">Node.js / NestJS</span>
          <span class="hero__tag">PostgreSQL</span>
          <span class="hero__tag">Docker / K8s</span>
          <span class="hero__tag">AWS / GCP</span>
          <span class="hero__tag">TypeScript</span>
        </div>
      </div>

      <!-- Divider (usa .gradient-divider global) -->
      <div class="gradient-divider hero__divider" aria-hidden="true"></div>

      <!-- CTAs -->
      <div class="hero__actions">
        <BaseButton variant="primary"  href="#proyectos">VER PROYECTOS</BaseButton>
        <BaseButton variant="ghost"    href="#contacto">CONTACTO</BaseButton>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
</script>

<style scoped>
/* ── SECCIÓN ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--header-height);
}

.hero__inner {
  padding-top: var(--space-10);
  padding-bottom: var(--space-10);
}

/* ── BADGE ── */
.hero__badge {
  margin-bottom: var(--space-8);
}

/* ── GREETING ── */
.hero__greeting {
  font-family: var(--font-family-mono);
  font-size: 16px;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ── TÍTULO ── */
.hero__title {
  font-family: var(--font-family-display);
  font-size: clamp(36px, 6vw, 72px);
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
  font-size: clamp(12px, 1.5vw, 15px);
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 680px;
  margin-bottom: var(--space-12);
  text-transform: uppercase;
  letter-spacing: 0.02em;
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
  font-size: clamp(26px, 4vw, 40px);
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
  font-size: 10px;
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
  font-size: 11px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  flex-shrink: 0;
  padding-top: 5px; /* alineación visual con los tags */
}

.hero__stack-tags {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.hero__tag {
  font-family: var(--font-family-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 4px 10px;
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
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* ── RESPONSIVE ── */

/* Tablet: 600px+ → separador vertical en métricas */
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

/* Mobile: hasta 480px */
@media (max-width: 480px) {
  .hero__actions {
    flex-direction: column;
    width: 100%;
  }
  .hero__greeting {
    font-size: 13px;
  }
  .hero__badge {
    font-size: 10px;
    padding: 5px 12px;
  }
  .hero__subtitle {
    margin-bottom: var(--space-8);
  }
}

/* Mobile pequeño: hasta 360px */
@media (max-width: 360px) {
  .hero__stack {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
