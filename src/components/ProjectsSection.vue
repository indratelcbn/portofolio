<script setup>
import { ref, computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useScrollReveal } from '@/composables/useScrollReveal'

const langStore = useLanguageStore()
const sectionRef = ref(null)
useScrollReveal(sectionRef)

const projects = [
  {
    title: {
      en: 'PTIG – Integrated Geospatial Services Platform',
      id: 'PTIG – Platform Layanan Geospasial Terpadu',
    },
    role: { en: 'Frontend Developer', id: 'Frontend Developer' },
    description: {
      en: 'Enterprise e-commerce platform for purchasing official geospatial information products provided by the Geospatial Information Agency of Indonesia. Developed product catalog, shopping cart, checkout, and order management features. Integrated REST APIs and the Ministry of Finance\'s SIMPONI payment gateway. Built reusable Vue.js components and responsive interfaces. Supported end-to-end online transactions from product selection to payment and transaction tracking. Troubleshot production issues and implemented enhancements based on user feedback.',
      id: 'Platform e-commerce enterprise untuk pembelian produk informasi geospasial resmi dari Badan Informasi Geospasial Indonesia. Mengembangkan katalog produk, keranjang belanja, checkout, dan fitur manajemen pesanan. Mengintegrasikan REST API dan payment gateway SIMPONI Kementerian Keuangan. Membangun komponen Vue.js yang dapat digunakan ulang dan antarmuka responsif. Mendukung transaksi online end-to-end dari pemilihan produk hingga pembayaran dan pelacakan transaksi.',
    },
    tech: ['Vue.js', 'Quasar Framework', 'JavaScript', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Docker', 'Linux', 'Git'],
    emoji: '🗺️',
    gradient: 'linear-gradient(135deg, #1a6fc4 0%, #00b4d8 100%)',
    github: 'https://github.com/indrabudidarma',
    demo: 'https://ptig.big.go.id',
    featured: true,
  },
  {
    title: {
      en: 'MIAS Depok – Mosque Information System',
      id: 'MIAS Depok – Sistem Informasi Masjid',
    },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    description: {
      en: 'Designed and developed a full-stack web application to support mosque administration and community engagement. Built frontend using Vue.js and backend using Node.js & Express.js. Implemented authentication, financial reporting, donation management, and event management modules. Collaborated with backend engineers to deliver secure and reliable payment workflows. Managed Docker deployment, Linux server, Nginx, and PostgreSQL.',
      id: 'Merancang dan mengembangkan aplikasi web full-stack untuk mendukung administrasi masjid dan keterlibatan komunitas. Membangun frontend menggunakan Vue.js dan backend menggunakan Node.js & Express.js. Mengimplementasikan modul autentikasi, laporan keuangan, manajemen donasi, dan manajemen acara. Berkolaborasi dengan engineer backend untuk menghadirkan alur pembayaran yang aman dan andal. Mengelola deployment Docker, server Linux, Nginx, dan PostgreSQL.',
    },
    tech: ['Vue.js', 'Quasar Framework', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Docker', 'Linux', 'Git'],
    emoji: '🕌',
    gradient: 'linear-gradient(135deg, #2d6a4f 0%, #95d5b2 100%)',
    github: 'https://github.com/indrabudidarma',
    demo: 'https://miasdepok.com',
    featured: true,
  },
]

const showAll = ref(false)
const displayed = computed(() => showAll.value ? projects : projects.filter(p => p.featured))
</script>

<template>
  <section id="projects" class="section section-alt" ref="sectionRef">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 reveal">
        <span class="section-label">{{ langStore.t.projects.sectionLabel }}</span>
        <h2 class="section-title">{{ langStore.t.projects.title }}</h2>
        <p class="section-subtitle">{{ langStore.t.projects.subtitle }}</p>
      </div>

      <!-- Projects Grid -->
      <div class="row g-4 justify-content-center">
        <div
          v-for="(project, i) in displayed"
          :key="project.title.en"
          class="col-md-6 reveal"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="project-card">
            <!-- Banner -->
            <div class="project-banner" :style="{ background: project.gradient }">
              <span class="project-emoji">{{ project.emoji }}</span>
              <div class="project-banner-overlay"></div>
            </div>

            <!-- Body -->
            <div class="project-body">
              <div class="project-role-badge">{{ project.role[langStore.locale] }}</div>
              <h3 class="project-title">{{ project.title[langStore.locale] }}</h3>
              <p class="project-desc">{{ project.description[langStore.locale] }}</p>

              <!-- Tech Stack -->
              <div class="project-tech">
                <span v-for="tech in project.tech" :key="tech" class="tech-badge">{{ tech }}</span>
              </div>

              <!-- Links -->
              <div class="project-links">
                <a :href="project.github" target="_blank" rel="noopener" class="project-link">
                  <i class="bi bi-github"></i> {{ langStore.t.projects.viewCode }}
                </a>
                <a :href="project.demo" target="_blank" rel="noopener" class="project-link project-link-primary">
                  <i class="bi bi-box-arrow-up-right"></i> {{ langStore.locale === 'en' ? 'Visit Website' : 'Kunjungi Website' }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All / Collapse toggle -->
      <div class="text-center mt-5 reveal">
        <button class="btn-outline-custom" @click="showAll = !showAll">
          <i :class="showAll ? 'bi bi-chevron-up' : 'bi bi-grid-3x3-gap'"></i>
          {{ showAll ? (langStore.locale === 'en' ? 'Show Less' : 'Tampilkan Lebih Sedikit') : langStore.t.projects.viewAll }}
        </button>
        <a
          href="https://github.com/indrabudidarma"
          target="_blank"
          rel="noopener"
          class="btn-primary-custom ms-3"
        >
          <i class="bi bi-github"></i>
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: var(--transition);
  height: 100%;
  display: flex; flex-direction: column;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(var(--primary-rgb), 0.15);
  border-color: rgba(var(--primary-rgb), 0.3);
}
.project-banner {
  height: 160px;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.project-emoji { font-size: 3.5rem; z-index: 1; }
.project-banner-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15));
}
.project-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.project-role-badge {
  display: inline-block;
  background: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  border: 1px solid rgba(var(--primary-rgb), 0.25);
  padding: 0.2rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  letter-spacing: 0.03em;
}
.project-title {
  font-size: 1.1rem; font-weight: 700;
  color: var(--text-primary); margin-bottom: 0.5rem;
}
.project-desc {
  font-size: 0.875rem; color: var(--text-secondary);
  line-height: 1.65; flex: 1; margin-bottom: 1rem;
}
.project-tech { display: flex; flex-wrap: wrap; gap: 0.375rem; margin-bottom: 1.25rem; }
.tech-badge {
  background: rgba(var(--primary-rgb), 0.08);
  color: var(--primary);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 50px; font-size: 0.72rem; font-weight: 600;
}
.project-links { display: flex; gap: 1rem; margin-top: auto; }
.project-link {
  display: inline-flex; align-items: center; gap: 0.35rem;
  color: var(--text-secondary); font-size: 0.875rem; font-weight: 500;
  text-decoration: none; transition: var(--transition);
}
.project-link:hover { color: var(--primary); }
.project-link-primary { color: var(--primary); font-weight: 600; }
</style>
