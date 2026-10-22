<template>
  <footer class="app-footer">

    <!-- Separador con pulse -->
    <div class="app-footer__separator" aria-hidden="true">
      <div class="app-footer__separator-line"></div>
      <div class="app-footer__separator-pulse"></div>
    </div>

    <!-- Barra inferior -->
    <div class="app-footer__bottom">
      <div class="container app-footer__inner">

        <!-- Logo (usa clase global .logo del main.css) -->
        <a href="#" class="logo" aria-label="Inicio — Roberto Carlos">
          <span class="logo__bracket">&lt;</span>
          <span class="logo__initials">RC</span>
          <span class="logo__bracket">/&gt;</span>
        </a>

        <!-- Derecha: links + copyright -->
        <div class="app-footer__right">
          <nav class="app-footer__social" aria-label="Social links">
            <a :href="profile.github"   target="_blank" rel="noopener noreferrer" class="social-link">
              <span aria-hidden="true">⌥</span> GitHub
            </a>
            <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="social-link">
              <span aria-hidden="true">⌗</span> LinkedIn
            </a>
            <a href="#contacto" class="social-link">
              <span aria-hidden="true">✉</span> Contact
            </a>
          </nav>

          <p class="app-footer__copyright">
            &copy; {{ new Date().getFullYear() }} Roberto Carlos Chambi &middot; Built with Vue &amp; Nuxt
          </p>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { usePortfolioData } from '~/composables/usePortfolioData';

const { getProfile } = usePortfolioData();
const profile = getProfile();
</script>

<style scoped>
/* ── SEPARADOR ── */
.app-footer__separator {
  position: relative;
  width: 100%;
  height: 1px;
  overflow: visible;
}

.app-footer__separator-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-accent-blue) 30%,
    var(--color-accent-blue) 70%,
    transparent
  );
  opacity: 0.4;
}

.app-footer__separator-pulse {
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: var(--color-accent-blue);
  border-radius: 50%;
  box-shadow: var(--shadow-glow-blue);
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1;   transform: translateX(-50%) scale(1);   }
  50%       { opacity: 0.5; transform: translateX(-50%) scale(0.6); }
}

/* ── BOTTOM BAR ── */
.app-footer__bottom {
  background-color: var(--color-surface-level1);
  padding: var(--space-10) 0 var(--space-8);
}

.app-footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

/* ── DERECHA ── */
.app-footer__right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

/* ── SOCIAL (usa .social-link de main.css como base) ── */
.app-footer__social {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
  justify-content: center;
}

/* ── COPYRIGHT ── */
.app-footer__copyright {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-align: center;
  opacity: 0.6;
}

/* ── RESPONSIVE ── */
@media (min-width: 768px) {
  .app-footer__inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .app-footer__right {
    align-items: flex-end;
  }
  .app-footer__copyright {
    text-align: right;
  }
  .app-footer__social {
    justify-content: flex-end;
    flex-wrap: nowrap;
  }
}

@media (max-width: 480px) {
  .app-footer__bottom {
    padding: var(--space-8) 0 var(--space-6);
  }
  .app-footer__social {
    gap: var(--space-4);
  }
}
</style>
