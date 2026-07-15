<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguageStore } from '@/stores/language'

const langStore = useLanguageStore()

const titles = {
  en: ['Frontend Developer', 'Vue.js Specialist', 'UI/UX Enthusiast', 'Problem Solver'],
  id: ['Frontend Developer', 'Spesialis Vue.js', 'Penggemar UI/UX', 'Pemecah Masalah'],
}

const currentTitle = ref('')
const titleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let timeout = null

function typeWriter() {
  const list = titles[langStore.locale] ?? titles.en
  const full = list[titleIndex.value]

  if (!isDeleting.value) {
    currentTitle.value = full.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value > full.length) {
      isDeleting.value = true
      timeout = setTimeout(typeWriter, 2200)
      return
    }
  } else {
    currentTitle.value = full.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      titleIndex.value = (titleIndex.value + 1) % list.length
      timeout = setTimeout(typeWriter, 400)
      return
    }
  }
  timeout = setTimeout(typeWriter, isDeleting.value ? 45 : 95)
}

onMounted(() => typeWriter())
onUnmounted(() => clearTimeout(timeout))
</script>

<template>
  <section id="home" class="hero-section">
    <!-- Background gradient blobs -->
    <div class="hero-blob hero-blob-1" aria-hidden="true"></div>
    <div class="hero-blob hero-blob-2" aria-hidden="true"></div>

    <div class="container">
      <div class="row align-items-center min-vh-100 py-5">
        <!-- Left: Content -->
        <div class="col-lg-6 hero-content">
          <!-- Open to Work Badge -->
          <div class="open-to-work-badge fade-in delay-1">
            <span class="dot"></span>
            {{ langStore.t.hero.openToWork }}
          </div>

          <!-- Greeting + Name -->
          <h1 class="hero-greeting fade-in delay-2">
            {{ langStore.t.hero.greeting }}
          </h1>
          <h1 class="hero-name fade-in delay-2">Indra Budi Darma</h1>

          <!-- Animated Title -->
          <div class="hero-title-line fade-in delay-3">
            <span class="hero-dynamic-title">{{ currentTitle }}</span>
            <span class="cursor" aria-hidden="true">|</span>
          </div>

          <!-- Description -->
          <p class="hero-description fade-in delay-4">
            {{ langStore.locale === 'en'
              ? 'I build beautiful, responsive web applications with clean code and great user experiences. Open to remote opportunities with US-based companies.'
              : 'Saya membangun aplikasi web yang indah dan responsif dengan kode bersih dan pengalaman pengguna yang luar biasa. Terbuka untuk peluang remote dengan perusahaan berbasis AS.' }}
          </p>

          <!-- CTAs -->
          <div class="hero-actions fade-in delay-5">
            <a href="#projects" class="btn-hero-primary" @click.prevent="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">
              <i class="bi bi-grid-3x3-gap-fill me-2"></i>{{ langStore.t.hero.viewProjects }}
            </a>
            <a href="#contact" class="btn-hero-outline" @click.prevent="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
              <i class="bi bi-envelope me-2"></i>{{ langStore.t.hero.contactMe }}
            </a>
          </div>

          <!-- Social links -->
          <div class="hero-socials fade-in delay-5">
            <a href="https://github.com/indrabudidarma" target="_blank" rel="noopener" class="social-icon" aria-label="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/indrabudidarma" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="mailto:indrabudidarma@gmail.com" class="social-icon" aria-label="Email">
              <i class="bi bi-envelope-fill"></i>
            </a>
            <a href="/resume.pdf" download class="social-icon" :aria-label="langStore.t.hero.downloadResume">
              <i class="bi bi-file-earmark-arrow-down"></i>
            </a>
          </div>
        </div>

        <!-- Right: Avatar -->
        <div class="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0 fade-in delay-3">
          <div class="hero-avatar-wrapper">
            <img src="/img/foto.png" alt="Indra Budi Darma" class="hero-avatar" />
            <div class="avatar-ring" aria-hidden="true"></div>
            <!-- Floating badges -->
            <div class="float-badge float-badge-vue">
              <i class="bi bi-code-slash me-1"></i>Vue.js
            </div>
            <div class="float-badge float-badge-node">
              <i class="bi bi-server me-1"></i>Node.js
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator fade-in delay-5">
        <span class="scroll-text">{{ langStore.t.hero.scrollDown }}</span>
        <div class="scroll-arrow"><i class="bi bi-chevron-down"></i></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  background: var(--bg-body);
  overflow: hidden;
  padding-top: 80px;
}
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.35;
}
.hero-blob-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(var(--primary-rgb), 0.25), transparent 70%);
  top: -100px; right: -100px;
}
.hero-blob-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(16,185,129,0.15), transparent 70%);
  bottom: 50px; left: -50px;
}

.hero-greeting {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}
.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  background: linear-gradient(135deg, var(--text-primary) 30%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 0.75rem;
}
.hero-title-line {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1.5rem;
  min-height: 2.5rem;
}
.hero-dynamic-title { color: var(--primary); }
.cursor {
  color: var(--primary);
  animation: blink 0.9s step-end infinite;
  font-weight: 300;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

.hero-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 520px;
  line-height: 1.75;
  margin-bottom: 2rem;
}
.hero-actions {
  display: flex; flex-wrap: wrap; gap: 1rem;
  margin-bottom: 2rem;
}
.btn-hero-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff; border: none;
  padding: 0.8rem 1.75rem;
  border-radius: 50px; font-weight: 600; font-size: 0.95rem;
  text-decoration: none; transition: var(--transition);
  display: inline-flex; align-items: center;
}
.btn-hero-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.4);
  color: #fff;
}
.btn-hero-outline {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
  padding: 0.8rem 1.75rem;
  border-radius: 50px; font-weight: 600; font-size: 0.95rem;
  text-decoration: none; transition: var(--transition);
  display: inline-flex; align-items: center;
}
.btn-hero-outline:hover {
  border-color: var(--primary); color: var(--primary);
  transform: translateY(-2px);
}
.hero-socials {
  display: flex; gap: 0.75rem;
}
.social-icon {
  width: 40px; height: 40px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary); font-size: 1.1rem;
  text-decoration: none; transition: var(--transition);
}
.social-icon:hover {
  background: var(--primary); color: #fff;
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);
}

/* Avatar */
.hero-avatar-wrapper {
  position: relative; display: inline-block;
}
.hero-avatar {
  width: clamp(240px, 35vw, 340px);
  height: clamp(240px, 35vw, 340px);
  border-radius: 50%; object-fit: cover;
  border: 4px solid var(--bg-surface);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  position: relative; z-index: 1;
}
.avatar-ring {
  position: absolute; inset: -12px;
  border-radius: 50%;
  background: conic-gradient(var(--primary), #10b981, var(--primary));
  z-index: 0;
  animation: spin 8s linear infinite;
  opacity: 0.6;
}
.avatar-ring::after {
  content: '';
  position: absolute; inset: 6px;
  border-radius: 50%;
  background: var(--bg-body);
}
@keyframes spin { to { transform: rotate(360deg); } }

.float-badge {
  position: absolute;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.375rem 0.875rem;
  font-size: 0.8rem; font-weight: 600;
  color: var(--text-primary);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  z-index: 2;
  white-space: nowrap;
  display: flex; align-items: center;
}
.float-badge-vue {
  top: 10%; right: -10%;
  animation: float1 4s ease-in-out infinite;
}
.float-badge-node {
  bottom: 15%; left: -12%;
  animation: float2 5s ease-in-out infinite;
}
@keyframes float1 {
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(-10px); }
}
@keyframes float2 {
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(8px); }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute; bottom: 2rem;
  left: 50%; transform: translateX(-50%);
  text-align: center;
}
.scroll-text {
  font-size: 0.75rem; color: var(--text-muted);
  display: block; margin-bottom: 0.375rem;
  text-transform: uppercase; letter-spacing: 0.1em;
}
.scroll-arrow {
  color: var(--primary); font-size: 1.25rem;
  animation: bounce 2s ease infinite;
}
@keyframes bounce {
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(6px); }
}

/* Animations */
.fade-in { opacity: 0; animation: fadeInUp 0.7s ease forwards; }
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.35s; }
.delay-4 { animation-delay: 0.5s; }
.delay-5 { animation-delay: 0.65s; }
@keyframes fadeInUp {
  from { opacity:0; transform:translateY(25px); }
  to   { opacity:1; transform:translateY(0); }
}
</style>
