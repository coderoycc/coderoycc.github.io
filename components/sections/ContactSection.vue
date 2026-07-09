<template>
  <section id="contacto" class="contact section-padding">
    <div class="container contact__inner">

      <!-- Header (usa SectionHeader global) -->
      <SectionHeader number="04" title="Contacto" />

      <!-- CTA Principal -->
      <div class="contact__cta">
        <h3 class="contact__headline">
          LET'S BUILD<br />SOMETHING.
        </h3>

        <a href="mailto:roberto@coderoycc.com" class="contact__email-pill">
          <span class="contact__email-icon" aria-hidden="true">👋</span>
          roberto@coderoycc.com
        </a>
      </div>

      <!-- Redes sociales (usa .social-link global de main.css) -->
      <nav class="contact__social" aria-label="Redes sociales">
        <a href="#" class="contact__social-item">
          <span class="contact__dash" aria-hidden="true">—</span> GITHUB
        </a>
        <a href="#" class="contact__social-item">
          <span class="contact__dash" aria-hidden="true">—</span> LINKEDIN
        </a>
        <a href="#" class="contact__social-item">
          <span class="contact__dash" aria-hidden="true">—</span> TWITTER/X
        </a>
      </nav>

    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
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
  gap: var(--space-8);
  margin-bottom: var(--space-16);
  text-align: center;
  width: 100%;
}

.contact__headline {
  font-family: var(--font-family-display);
  font-size: clamp(32px, 6vw, 72px);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

/* ── EMAIL PILL ── */
.contact__email-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  font-family: var(--font-family-mono);
  font-size: clamp(13px, 2vw, 16px);
  color: var(--color-accent-blue);
  padding: 14px 32px;
  border: 1px solid var(--color-accent-blue);
  border-radius: var(--radius-full);
  background-color: var(--color-accent-blue-05);
  text-decoration: none;
  transition: var(--transition-normal);
  word-break: break-all;
}

.contact__email-icon {
  font-size: 1.2em;
  flex-shrink: 0;
}

.contact__email-pill:hover {
  background-color: var(--color-accent-blue);
  color: #000;
  box-shadow: var(--shadow-glow-blue);
  transform: translateY(-2px);
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
  font-size: 14px;
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
    gap: var(--space-6);
    margin-bottom: var(--space-10);
  }
}

@media (max-width: 480px) {
  .contact__email-pill {
    padding: 12px 20px;
    text-align: center;
    width: 100%;
    justify-content: center;
    font-size: 12px;
  }
  .contact__social {
    gap: var(--space-6);
  }
  .contact__social-item {
    font-size: 12px;
  }
}
</style>
