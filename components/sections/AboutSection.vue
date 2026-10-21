<template>
  <section id="sobre-mi" class="about section-padding">
    <div class="container">

      <SectionHeader number="03" title="About Me" />

      <!-- Intro -->
      <p class="about__intro reveal reveal--up">
        {{ profile.summary }}
      </p>

      <!-- Datos rápidos -->
      <div class="about__quick-info reveal reveal--up reveal--delay-1">
        <div class="about__quick-item">
          <span class="about__quick-label">LOCATION</span>
          <span class="about__quick-value">{{ profile.location.toUpperCase() }}</span>
        </div>
        <div class="about__quick-sep" aria-hidden="true"></div>
        <div class="about__quick-item">
          <span class="about__quick-label">LANGUAGES</span>
          <span class="about__quick-value">{{ profile.languages.toUpperCase() }}</span>
        </div>
        <div class="about__quick-sep" aria-hidden="true"></div>
        <div class="about__quick-item">
          <span class="about__quick-label">AVAILABILITY</span>
          <span class="about__quick-value">{{ profile.availability.toUpperCase() }}</span>
        </div>
        <div class="about__quick-sep" aria-hidden="true"></div>
        <div class="about__quick-item">
          <span class="about__quick-label">TIMEZONE</span>
          <span class="about__quick-value">{{ profile.timezone.toUpperCase() }}</span>
        </div>
      </div>

      <!-- Cards -->
      <div class="about__cards">

        <div class="about-card reveal reveal--up reveal--delay-1">
          <span class="about-card__num">[ 01 ]</span>
          <h3 class="about-card__title">HOW I WORK</h3>
          <p class="about-card__text">
            Clean code, precise documentation and proactive communication.
            In remote teams, visibility matters as much as the deliverable.
            I prefer over-communicating to leaving gaps.
          </p>
        </div>

        <div class="about-card reveal reveal--up reveal--delay-2">
          <span class="about-card__num">[ 02 ]</span>
          <h3 class="about-card__title">WHAT DRIVES ME</h3>
          <p class="about-card__text">
            Solving complex problems with elegant solutions. I love when
            the system scales without anyone noticing, and when the code I write
            today can be read by someone else without questions.
          </p>
        </div>

        <div class="about-card reveal reveal--up reveal--delay-3">
          <span class="about-card__num">[ 03 ]</span>
          <h3 class="about-card__title">BEYOND THE CODE</h3>
          <p class="about-card__text">
            Constant learner: courses, technical papers, open source contributions.
            Off the keyboard, chess and exploring new technologies keep my
            problem-solving mind sharp.
          </p>
        </div>

        <div class="about-card reveal reveal--up reveal--delay-4">
          <span class="about-card__num">[ 04 ]</span>
          <h3 class="about-card__title">MY GOAL NOW</h3>
          <p class="about-card__text">
            Join an ambitious product team where I can contribute from architecture
            to deployment — and grow alongside people who also push their limits.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import { usePortfolioData } from '~/composables/usePortfolioData';
import { useScrollReveal } from '~/composables/useScrollReveal';

const { getProfile } = usePortfolioData();
const profile = getProfile();

useScrollReveal();
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

/* ── QUICK INFO ── */
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
