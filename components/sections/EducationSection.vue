<template>
  <section id="education" class="education section-padding">
    <div class="container">
      <SectionHeader number="05" title="Education & Certifications" />

      <!-- Education Grid -->
      <div class="education__grid reveal reveal--up">
        <div
          v-for="(edu, i) in education"
          :key="i"
          class="edu-card"
        >
          <span class="edu-card__year">{{ edu.year }}</span>
          <h3 class="edu-card__degree">{{ edu.degree }}</h3>
          <p class="edu-card__institution">{{ edu.institution }}</p>
          <span class="edu-card__location">{{ edu.location }}</span>
        </div>
      </div>

      <!-- Certifications & Courses -->
      <div class="education__certs reveal reveal--up reveal--delay-1">
        <h4 class="education__sub-title">COURSES & CERTIFICATIONS</h4>
        <div class="cert-list">
          <div
            v-for="(course, i) in courses"
            :key="i"
            class="cert-item"
          >
            <span class="cert-item__year">{{ course.year }}</span>
            <div class="cert-item__body">
              <span class="cert-item__name">{{ course.name }}</span>
              <span class="cert-item__provider">{{ course.provider }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Trainings & Other -->
      <div class="education__trainings reveal reveal--up reveal--delay-2">
        <h4 class="education__sub-title">TRAINING & TEACHING</h4>
        <div class="cert-list">
          <div
            v-for="(training, i) in trainings"
            :key="i"
            class="cert-item"
          >
            <span class="cert-item__year">{{ training.year }}</span>
            <div class="cert-item__body">
              <span class="cert-item__name">{{ training.name }}</span>
              <span class="cert-item__provider">{{ training.provider }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import { usePortfolioData } from '~/composables/usePortfolioData';

const { getEducation, getCourses, getTrainings } = usePortfolioData();
const education = getEducation();
const courses = getCourses();
const trainings = getTrainings();
</script>

<style scoped>
/* ── EDUCATION GRID ── */
.education__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

.edu-card {
  background: var(--color-surface-level1);
  border: 1px solid var(--color-border);
  border-top: 2px solid var(--color-accent-blue);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  transition: var(--transition-fast);
}

.edu-card:hover {
  background: var(--color-accent-blue-05);
  border-color: var(--color-accent-blue-40);
}

.edu-card__year {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--color-accent-blue);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.edu-card__degree {
  font-family: var(--font-family-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.3;
}

.edu-card__institution {
  font-family: var(--font-family-mono);
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
}

.edu-card__location {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── SUBTITLE ── */
.education__sub-title {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--color-accent-blue);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}

/* ── CERTS ── */
.education__certs,
.education__trainings {
  margin-bottom: var(--space-10);
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.cert-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-6);
  padding: var(--space-4) var(--space-3);
  border-bottom: 1px solid var(--color-border);
  border-left: 2px solid transparent;
  transition: var(--transition-fast);
}

.cert-item:hover {
  border-left-color: var(--color-accent-blue);
  background: var(--color-accent-blue-05);
  padding-left: var(--space-4);
}

.cert-item__year {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  min-width: 40px;
  padding-top: 2px;
  flex-shrink: 0;
}

.cert-item__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  flex: 1;
  min-width: 0;
}

.cert-item__name {
  font-family: var(--font-family-mono);
  font-size: var(--text-md);
  color: var(--color-text-primary);
  line-height: 1.4;
}

.cert-item__provider {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .education__grid {
    grid-template-columns: 1fr;
  }

  .cert-item {
    gap: var(--space-4);
  }
}
</style>
