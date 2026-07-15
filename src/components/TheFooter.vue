<script setup>
import { useLanguageStore } from '@/stores/language'

const langStore = useLanguageStore()

const socials = [
  { icon: 'bi-github', href: 'https://github.com/indrabudidarma', label: 'GitHub' },
  { icon: 'bi-linkedin', href: 'https://linkedin.com/in/indrabudidarma', label: 'LinkedIn' },
  { icon: 'bi-envelope-fill', href: 'mailto:indrabudidarma@gmail.com', label: 'Email' },
  { icon: 'bi-twitter-x', href: '#', label: 'Twitter / X' },
]

const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="portfolio-footer">
    <div class="container">
      <div class="row g-4 align-items-center">
        <!-- Brand -->
        <div class="col-md-4">
          <div class="footer-brand">
            <div class="footer-logo">IBD</div>
            <div>
              <p class="footer-name">Indra Budi Darma</p>
              <p class="footer-role">Frontend Developer</p>
            </div>
          </div>
          <p class="footer-tagline">{{ langStore.t.footer.madeWith }} Vue.js · {{ new Date().getFullYear() }}</p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4 text-center">
          <div class="footer-links">
            <a
              v-for="key in navLinks"
              :key="key"
              href="#"
              class="footer-link"
              @click.prevent="scrollTo(key)"
            >
              {{ langStore.t.nav[key] }}
            </a>
          </div>
        </div>

        <!-- Socials -->
        <div class="col-md-4 text-md-end">
          <div class="footer-socials">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              class="footer-social-icon"
              :aria-label="s.label"
            >
              <i :class="s.icon"></i>
            </a>
          </div>
          <button class="back-to-top" @click="scrollTo('home')">
            <i class="bi bi-arrow-up-short"></i>
            {{ langStore.t.footer.backToTop }}
          </button>
        </div>
      </div>

      <hr class="footer-divider" />

      <p class="footer-copy">
        &copy; {{ new Date().getFullYear() }} Indra Budi Darma. {{ langStore.t.footer.rights }}
        <span class="ms-2">{{ langStore.t.footer.madeWith }} ❤️ {{ langStore.t.footer.by }}</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.portfolio-footer {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  padding: 3rem 0 2rem;
}
.footer-brand {
  display: flex; align-items: center; gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.footer-logo {
  width: 40px; height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 0.8rem;
}
.footer-name { font-weight: 700; font-size: 1rem; color: var(--text-primary); margin: 0; }
.footer-role { font-size: 0.8rem; color: var(--text-muted); margin: 0; }
.footer-tagline { font-size: 0.82rem; color: var(--text-muted); margin: 0; }

.footer-links {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1.25rem;
}
.footer-link {
  color: var(--text-secondary); font-size: 0.875rem; font-weight: 500;
  text-decoration: none; transition: var(--transition);
}
.footer-link:hover { color: var(--primary); }

.footer-socials {
  display: flex; justify-content: flex-end; gap: 0.5rem;
  margin-bottom: 1rem;
}
.footer-social-icon {
  width: 36px; height: 36px;
  background: var(--bg-surface-2);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary); font-size: 1rem;
  text-decoration: none; transition: var(--transition);
}
.footer-social-icon:hover {
  background: var(--primary); color: #fff;
  border-color: var(--primary);
}
.back-to-top {
  background: transparent; border: 1px solid var(--border-color);
  color: var(--text-secondary); padding: 0.375rem 0.875rem;
  border-radius: 50px; font-size: 0.8rem; font-weight: 500;
  cursor: pointer; transition: var(--transition);
  display: inline-flex; align-items: center; gap: 0.25rem;
}
.back-to-top:hover { border-color: var(--primary); color: var(--primary); }
.footer-divider { border-color: var(--border-color); margin: 2rem 0 1.25rem; }
.footer-copy {
  font-size: 0.8rem; color: var(--text-muted);
  text-align: center; margin: 0;
}
</style>
