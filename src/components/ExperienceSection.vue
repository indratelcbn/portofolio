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
    company: 'PT. Digital Nusantara',
    location: { en: 'Jakarta, Indonesia', id: 'Jakarta, Indonesia' },
    period: { en: '2022 – Present', id: '2022 – Sekarang' },
    current: true,
    achievements: {
      en: [
        'Built and maintained 5+ client web applications using Vue.js 3 and Node.js',
        'Reduced average page load time by 40% through code splitting and lazy loading',
        'Led a team of 3 junior developers, conducting code reviews and mentoring sessions',
        'Implemented CI/CD pipelines with GitHub Actions, cutting deployment time by 60%',
        'Architected RESTful APIs serving 50,000+ monthly active users with 99.9% uptime',
      ],
      id: [
        'Membangun dan memelihara 5+ aplikasi web klien menggunakan Vue.js 3 dan Node.js',
        'Mengurangi waktu muat halaman rata-rata sebesar 40% melalui code splitting dan lazy loading',
        'Memimpin tim 3 developer junior, melakukan code review dan sesi mentoring',
        'Mengimplementasikan pipeline CI/CD dengan GitHub Actions, memotong waktu deployment 60%',
        'Merancang RESTful API yang melayani 50.000+ pengguna aktif bulanan dengan uptime 99.9%',
      ],
    },
  },
  {
    title: 'Junior Web Developer',
    company: 'Startup XYZ',
    location: { en: 'Jakarta, Indonesia', id: 'Jakarta, Indonesia' },
    period: { en: '2020 – 2022', id: '2020 – 2022' },
    current: false,
    achievements: {
      en: [
        'Developed RESTful APIs with Node.js/Express serving 10,000+ daily active users',
        'Built responsive UI components with Vue.js 2 and Bootstrap 4',
        'Integrated third-party payment gateways (Midtrans, Stripe) reducing cart abandonment by 20%',
        'Improved database query performance by 35% through proper indexing and query optimization',
        'Participated in Agile/Scrum sprints and daily standups',
      ],
      id: [
        'Mengembangkan RESTful API dengan Node.js/Express melayani 10.000+ pengguna aktif harian',
        'Membangun komponen UI responsif dengan Vue.js 2 dan Bootstrap 4',
        'Mengintegrasikan payment gateway pihak ketiga (Midtrans, Stripe) mengurangi cart abandonment 20%',
        'Meningkatkan performa query database sebesar 35% melalui indexing dan optimasi query',
        'Berpartisipasi dalam sprint Agile/Scrum dan daily standup',
      ],
    },
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: { en: 'Remote', id: 'Remote' },
    period: { en: '2019 – 2020', id: '2019 – 2020' },
    current: false,
    achievements: {
      en: [
        'Delivered 10+ web projects for local small businesses on time and budget',
        'Built e-commerce sites, landing pages, and company profiles using PHP, MySQL, and JavaScript',
        'Maintained 5-star client satisfaction rating across all completed projects',
      ],
      id: [
        'Menyelesaikan 10+ proyek web untuk bisnis lokal tepat waktu dan sesuai anggaran',
        'Membangun toko online, landing page, dan profil perusahaan menggunakan PHP, MySQL, JavaScript',
        'Mempertahankan penilaian kepuasan klien bintang 5 di semua proyek yang diselesaikan',
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
                      <span class="mx-2">·</span>
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
