<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useLanguageStore } from '@/stores/language'

const themeStore = useThemeStore()
const langStore = useLanguageStore()

const isScrolled = ref(false)
const activeSection = ref('home')
const mobileOpen = ref(false)

const navItems = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'experience', key: 'experience' },
  { id: 'education', key: 'education' },
  { id: 'contact', key: 'contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
  const ids = navItems.map((i) => i.id)
  for (const id of [...ids].reverse()) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = id
      break
    }
  }
}

function scrollTo(id) {
  mobileOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="portfolio-nav" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between py-1">
        <!-- Brand -->
        <a href="#home" class="brand-link" @click.prevent="scrollTo('home')">
          <div class="brand-icon">IBD</div>
          <span class="brand-text d-none d-sm-inline">Indra Budi Darma</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="nav-links d-none d-xl-flex align-items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            href="#"
            class="nav-link-item"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)"
          >
            {{ langStore.t.nav[item.key] }}
          </a>
        </div>

        <!-- Controls -->
        <div class="d-flex align-items-center gap-2">
          <button class="ctrl-btn" @click="langStore.setLocale(langStore.locale === 'en' ? 'id' : 'en')" :title="langStore.locale === 'en' ? 'Switch to Indonesian' : 'Switch to English'">
            <span v-if="langStore.locale === 'en'">🇮🇩 ID</span>
            <span v-else>🇺🇸 EN</span>
          </button>
          <button class="ctrl-btn" @click="themeStore.toggle()" :aria-label="themeStore.isDark ? 'Light mode' : 'Dark mode'">
            <i :class="themeStore.isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
          </button>
          <a href="/resume.pdf" download class="btn-resume d-none d-md-inline-flex">
            <i class="bi bi-download me-1"></i>{{ langStore.t.nav.resume }}
          </a>
          <button class="ctrl-btn d-xl-none" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
            <i :class="mobileOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide-down">
        <div v-if="mobileOpen" class="mobile-nav d-xl-none">
          <a
            v-for="item in navItems"
            :key="item.id"
            href="#"
            class="mobile-nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)"
          >
            {{ langStore.t.nav[item.key] }}
          </a>
          <a href="/resume.pdf" download class="mobile-nav-link resume-link">
            <i class="bi bi-download me-2"></i>{{ langStore.t.nav.resume }}
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
.portfolio-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
  padding: 0.75rem 0;
}
.portfolio-nav.scrolled {
  padding: 0.5rem 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.brand-link {
  display: flex; align-items: center; gap: 0.625rem;
  text-decoration: none;
}
.brand-icon {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.75rem; letter-spacing: 0.05em;
  flex-shrink: 0;
}
.brand-text {
  font-weight: 700; font-size: 1rem;
  color: var(--text-primary);
  transition: var(--transition);
}
.nav-link-item {
  color: var(--text-secondary);
  font-weight: 500; font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
}
.nav-link-item:hover, .nav-link-item.active {
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.08);
}
.ctrl-btn {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.875rem; font-weight: 500;
  white-space: nowrap;
  display: inline-flex; align-items: center; gap: 0.25rem;
}
.ctrl-btn:hover {
  background: rgba(var(--primary-rgb), 0.1);
  border-color: rgba(var(--primary-rgb), 0.3);
  color: var(--primary);
}
.btn-resume {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff !important;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem; font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  align-items: center; gap: 0.25rem;
}
.btn-resume:hover {
  opacity: 0.9; transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.4);
}
.mobile-nav {
  border-top: 1px solid var(--border-color);
  padding: 0.75rem 0;
  display: flex; flex-direction: column; gap: 0.25rem;
}
.mobile-nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  padding: 0.625rem 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  transition: var(--transition);
  display: flex; align-items: center;
}
.mobile-nav-link:hover, .mobile-nav-link.active {
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.08);
}
.mobile-nav-link.resume-link {
  color: var(--primary); font-weight: 600;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0; max-height: 0; padding: 0;
}
.slide-down-enter-to, .slide-down-leave-from {
  opacity: 1; max-height: 400px;
}
</style>
