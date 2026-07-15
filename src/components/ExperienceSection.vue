<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useScrollReveal } from '@/composables/useScrollReveal'

const langStore = useLanguageStore()
const sectionRef = ref(null)
useScrollReveal(sectionRef)

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Badan Informasi Geospasial (BIG)',
    department: 'Directorate of Geospatial Information Standards and Technology',
    location: { en: 'Bogor, West Java, Indonesia', id: 'Bogor, Jawa Barat, Indonesia' },
    period: { en: '2024 – Present', id: '2024 – Sekarang' },
    current: true,
    achievements: {
      en: [
        'Develop and maintain enterprise web applications supporting Indonesia\'s national geospatial information services.',
        'Design and develop responsive Single Page Applications (SPA) using Vue.js and Quasar Framework.',
        'Integrate frontend applications with RESTful APIs and enterprise backend services.',
        'Collaborate with cross-functional teams, including backend engineers, GIS specialists, QA engineers, and infrastructure teams.',
        'Participate in feature planning, implementation, deployment, and production support.',
        'Support Docker, Linux, PostgreSQL, and Nginx production environments.',
        'Develop applications integrated with ArcGIS Enterprise.',
      ],
      id: [
        'Mengembangkan dan memelihara aplikasi web enterprise yang mendukung layanan informasi geospasial nasional Indonesia.',
        'Merancang dan mengembangkan Single Page Application (SPA) responsif menggunakan Vue.js dan Quasar Framework.',
        'Mengintegrasikan aplikasi frontend dengan RESTful API dan layanan backend enterprise.',
        'Berkolaborasi dengan tim lintas fungsi, termasuk backend engineer, spesialis GIS, QA engineer, dan tim infrastruktur.',
        'Berpartisipasi dalam perencanaan fitur, implementasi, deployment, dan dukungan produksi.',
        'Mendukung lingkungan produksi Docker, Linux, PostgreSQL, dan Nginx.',
        'Mengembangkan aplikasi yang terintegrasi dengan ArcGIS Enterprise.',
      ],
    },
  },
]
</script>

<template>
  <section id="experience" class="section" ref="sectionRef">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 reveal">
        <span class="section-label">{{ langStore.t.experience.sectionLabel }}</span>
        <h2 class="section-title">{{ langStore.t.experience.title }}</h2>
        <p class="section-subtitle">{{ langStore.t.experience.subtitle }}</p>
      </div>

      <!-- Timeline -->
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="timeline">
            <div
              v-for="(exp, i) in experiences"
              :key="i"
              class="timeline-item reveal"
              :style="{ transitionDelay: `${i * 0.15}s` }"
            >
              <!-- Timeline dot -->
              <div class="timeline-dot" :class="{ current: exp.current }">
                <i class="bi bi-briefcase-fill"></i>
              </div>

              <!-- Card -->
              <div class="exp-card" :class="{ current: exp.current }">
                <div class="exp-header">
                  <div>
                    <h3 class="exp-title">{{ exp.title }}</h3>
                    <p class="exp-company">
                      <i class="bi bi-building me-1"></i>{{ exp.company }}
                    </p>
                    <p class="exp-department" v-if="exp.department">
                      {{ exp.department }}
                    </p>
                    <p class="exp-company">
                      <i class="bi bi-geo-alt me-1"></i>{{ exp.location[langStore.locale] }}
                    </p>
                  </div>
                  <div class="text-end">
                    <span class="exp-period">{{ exp.period[langStore.locale] }}</span>
                    <span v-if="exp.current" class="current-badge">
                      <span class="dot"></span>
                      {{ langStore.t.experience.present }}
                    </span>
                  </div>
                </div>

                <!-- Achievements -->
                <div class="exp-achievements">
                  <p class="achievements-label">
                    <i class="bi bi-trophy me-1"></i>{{ langStore.t.experience.keyAchievements }}
                  </p>
                  <ul class="achievements-list">
                    <li v-for="(item, j) in exp.achievements[langStore.locale]" :key="j">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 3rem;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 1rem; top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), rgba(var(--primary-rgb), 0.1));
  border-radius: 2px;
}
.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
}
.timeline-dot {
  position: absolute;
  left: -2.1rem; top: 1.25rem;
  width: 36px; height: 36px;
  background: var(--bg-surface);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted); font-size: 0.875rem;
  transition: var(--transition);
}
.timeline-dot.current {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  box-shadow: 0 0 0 5px rgba(var(--primary-rgb), 0.2);
}

.exp-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.75rem;
  transition: var(--transition);
}
.exp-card:hover {
  border-color: rgba(var(--primary-rgb), 0.3);
  box-shadow: 0 8px 32px rgba(var(--primary-rgb), 0.1);
}
.exp-card.current {
  border-color: rgba(var(--primary-rgb), 0.3);
  background: linear-gradient(135deg, var(--bg-surface), rgba(var(--primary-rgb), 0.02));
}
.exp-header {
  display: flex; justify-content: space-between;
  align-items: flex-start; gap: 1rem;
  flex-wrap: wrap; margin-bottom: 1.25rem;
}
.exp-title { font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem; }
.exp-company { font-size: 0.875rem; color: var(--text-muted); margin: 0; }
.exp-department { font-size: 0.8rem; color: var(--text-muted); margin: 0.15rem 0 0; font-style: italic; }
.exp-period {
  display: block;
  background: rgba(var(--primary-rgb), 0.08);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem; font-weight: 600;
  margin-bottom: 0.5rem;
}
.current-badge {
  display: inline-flex; align-items: center; gap: 0.35rem;
  background: rgba(16,185,129,0.1);
  color: #10b981;
  border: 1px solid rgba(16,185,129,0.25);
  padding: 0.2rem 0.625rem;
  border-radius: 50px;
  font-size: 0.75rem; font-weight: 600;
}
.current-badge .dot {
  width: 6px; height: 6px;
  background: #10b981; border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }

.achievements-label {
  font-size: 0.8rem; font-weight: 700;
  color: var(--primary); text-transform: uppercase;
  letter-spacing: 0.08em; margin-bottom: 0.75rem;
}
.achievements-list {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 0.5rem;
}
.achievements-list li {
  font-size: 0.9rem; color: var(--text-secondary);
  line-height: 1.6; padding-left: 1.25rem;
  position: relative;
}
.achievements-list li::before {
  content: '▸';
  position: absolute; left: 0;
  color: var(--primary); font-size: 0.75rem;
}
</style>
