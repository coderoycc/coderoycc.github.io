<template>
  <section id="sobre-mi" class="about section-padding">
    <div class="container">

      <SectionHeader number="03" title="Sobre Mí" />

      <!-- Intro -->
      <p class="about__intro">
        {{ profile.summary }}
      </p>

      <!-- Datos rápidos: fila horizontal -->
      <div class="about__quick-info">
        <div class="about__quick-item">
          <span class="about__quick-label">UBICACIÓN</span>
          <span class="about__quick-value">{{ profile.location.toUpperCase() }}</span>
        </div>
        <div class="about__quick-sep" aria-hidden="true"></div>
        <div class="about__quick-item">
          <span class="about__quick-label">IDIOMAS</span>
          <span class="about__quick-value">{{ profile.languages.toUpperCase() }}</span>
        </div>
        <div class="about__quick-sep" aria-hidden="true"></div>
        <div class="about__quick-item">
          <span class="about__quick-label">DISPONIBILIDAD</span>
          <span class="about__quick-value">{{ profile.availability.toUpperCase() }}</span>
        </div>
        <div class="about__quick-sep" aria-hidden="true"></div>
        <div class="about__quick-item">
          <span class="about__quick-label">ZONA HORARIA</span>
          <span class="about__quick-value">{{ profile.timezone.toUpperCase() }}</span>
        </div>
      </div>

      <!-- Cards: 2x2 + 1 full -->
      <div class="about__cards">

        <div class="about-card">
          <span class="about-card__num">[ 01 ]</span>
          <h3 class="about-card__title">CÓMO TRABAJO</h3>
          <p class="about-card__text">
            Código limpio, documentación precisa y comunicación proactiva. En equipos remotos, la visibilidad
            es tan importante como el entregable. Prefiero sobre-comunicar a dejar huecos.
          </p>
        </div>

        <div class="about-card">
          <span class="about-card__num">[ 02 ]</span>
          <h3 class="about-card__title">QUÉ ME MOTIVA</h3>
          <p class="about-card__text">
            Resolver problemas complejos con soluciones elegantes. Me gusta que el sistema escale sin
            que nadie lo note, y que el código que escribo hoy lo pueda leer otro sin preguntas.
          </p>
        </div>

        <div class="about-card">
          <span class="about-card__num">[ 03 ]</span>
          <h3 class="about-card__title">MÁS ALLÁ DEL CÓDIGO</h3>
          <p class="about-card__text">
            Aprendo constantemente: cursos, papers técnicos, contribuciones open source. Fuera del teclado,
            el ajedrez y el estudio de nuevas tecnologías mantienen mi cerebro activo.
          </p>
        </div>

        <div class="about-card">
          <span class="about-card__num">[ 04 ]</span>
          <h3 class="about-card__title">MI OBJETIVO AHORA</h3>
          <p class="about-card__text">
            Unirme a un equipo de producto ambicioso donde pueda aportar desde la arquitectura hasta
            el deploy — y crecer junto a personas que también se exigen al máximo.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import { usePortfolioData } from '~/composables/usePortfolioData';

const { getProfile } = usePortfolioData();
const profile = getProfile();
</script>

<style scoped>
/* ── INTRO ── */
.about__intro {
  font-family: var(--font-family-mono);
  font-size: var(--text-lg);
  line-height: 1.9;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin-bottom: var(--space-10);
  letter-spacing: 0.02em;
}

.about__intro strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

/* ── QUICK INFO: fila de datos ── */
.about__quick-info {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-level1);
  overflow: hidden;
  margin-bottom: var(--space-10);
}

.about__quick-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-5);
  flex: 1;
  min-width: 160px;
}

.about__quick-sep {
  width: 1px;
  background: var(--color-border);
  flex-shrink: 0;
}

.about__quick-label {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--color-accent-blue);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.about__quick-value {
  font-family: var(--font-family-mono);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  overflow-wrap: break-word;
}

/* ── CARDS GRID: 2x2 ── */
.about__cards {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .about__cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .about__cards {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.about-card {
  background: var(--color-surface-level1);
  border: 1px solid var(--color-border);
  border-top: 2px solid transparent;
  border-radius: var(--radius-md);
  padding: var(--space-6);
  transition: var(--transition-fast);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.about-card:hover {
  border-top-color: var(--color-accent-blue);
  background: var(--color-accent-blue-05);
}

.about-card__num {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--color-accent-blue);
  letter-spacing: 0.08em;
}

.about-card__title {
  font-family: var(--font-family-display);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: var(--space-1);
}

.about-card__text {
  font-family: var(--font-family-mono);
  font-size: var(--text-base);
  line-height: 1.8;
  color: var(--color-text-secondary);
  letter-spacing: 0.02em;
  margin-top: var(--space-1);
}

/* ── RESPONSIVE QUICK-INFO ── */
@media (max-width: 768px) {
  .about__quick-sep {
    display: none;
  }

  .about__quick-info {
    flex-direction: column;
  }

  .about__quick-item {
    border-bottom: 1px solid var(--color-border);
    min-width: unset;
  }

  .about__quick-item:last-child {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .about__intro {
    font-size: var(--text-md);
  }
  .about__cards {
    gap: var(--space-3);
  }
}
</style>
