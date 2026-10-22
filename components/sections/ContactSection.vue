<template>
  <section id="contacto" class="contact section-padding">
    <div class="container contact__inner">

      <SectionHeader number="06" title="Contact" />

      <!-- CTA Principal -->
      <div class="contact__cta reveal reveal--up">
        <h3 class="contact__headline">
          LET'S BUILD<br />SOMETHING.
        </h3>
        <p class="contact__sub">
          Open to full-time remote roles, freelance projects and technical collaborations.
          I reply to every message.
        </p>

        <a :href="'mailto:' + profile.email" class="contact__email-pill">
          <span class="status-dot status-dot--green"></span>
          {{ profile.email }}
        </a>
      </div>

      <!-- Links rápidos de info remota -->
      <div class="contact__remote-info reveal reveal--up reveal--delay-1">
        <div class="contact__remote-item">
          <span class="contact__remote-label">TIMEZONE</span>
          <span class="contact__remote-value">{{ profile.timezone }} · Overlap with US/EU teams ✓</span>
        </div>
        <div class="contact__remote-item">
          <span class="contact__remote-label">ENGLISH</span>
          <span class="contact__remote-value">Technical proficiency (B1/B2) — reading, writing & async comms</span>
        </div>
        <div class="contact__remote-item">
          <span class="contact__remote-label">AVAILABILITY</span>
          <span class="contact__remote-value">{{ profile.availability }} — immediate start</span>
        </div>
      </div>

      <!-- Redes sociales -->
      <nav class="contact__social reveal reveal--up reveal--delay-2" aria-label="Social links">
        <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="contact__social-item">
          <span class="contact__dash" aria-hidden="true">—</span> GITHUB
        </a>
        <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="contact__social-item">
          <span class="contact__dash" aria-hidden="true">—</span> LINKEDIN
        </a>
      </nav>

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
.contact__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── CTA ── */
.contact__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  margin-bottom: var(--space-10);
  text-align: center;
  width: 100%;
}

.contact__headline {
  font-family: var(--font-family-display);
  font-size: var(--text-heading-contact);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

.contact__sub {
  font-family: var(--font-family-mono);
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 500px;
  letter-spacing: 0.02em;
}

/* ── EMAIL PILL ── */
.contact__email-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  font-family: var(--font-family-mono);
  font-size: clamp(var(--text-md), 2vw, var(--text-xl));
  color: var(--color-accent-blue);
  padding: 14px var(--space-8);
  border: 1px solid var(--color-accent-blue);
  border-radius: var(--radius-full);
  background-color: var(--color-accent-blue-05);
  text-decoration: none;
  transition: var(--transition-normal);
  word-break: break-all;
}

.contact__email-pill:hover {
  background-color: var(--color-accent-blue);
  color: #000;
  box-shadow: var(--shadow-glow-blue);
  transform: translateY(-2px);
}

/* ── REMOTE INFO ── */
.contact__remote-info {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 640px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-level1);
  overflow: hidden;
  margin-bottom: var(--space-12);
}

.contact__remote-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border);
}

.contact__remote-item:last-child {
  border-bottom: none;
}

.contact__remote-label {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--color-accent-blue);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.contact__remote-value {
  font-family: var(--font-family-mono);
  font-size: var(--text-md);
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
}

/* ── SOCIAL LINKS ── */
.contact__social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-12);
}

.contact__social-item {
  font-family: var(--font-family-mono);
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  transition: var(--transition-fast);
}

.contact__dash {
  color: var(--color-border);
  transition: color 0.2s ease;
}

.contact__social-item:hover {
  color: var(--color-text-primary);
}

.contact__social-item:hover .contact__dash {
  color: var(--color-accent-blue);
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .contact__cta {
    gap: var(--space-5);
    margin-bottom: var(--space-8);
  }
  .contact__remote-info {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .contact__email-pill {
    padding: var(--space-3) var(--space-5);
    text-align: center;
    width: 100%;
    justify-content: center;
    font-size: var(--text-base);
  }
  .contact__social {
    gap: var(--space-4);
  }
  .contact__social-item {
    font-size: var(--text-base);
  }
}
</style>
