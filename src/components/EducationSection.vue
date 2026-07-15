<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useScrollReveal } from '@/composables/useScrollReveal'

const langStore = useLanguageStore()
const sectionRef = ref(null)
useScrollReveal(sectionRef)

const education = [
  {
    degree: {
      en: "Bachelor's Degree in Informatics Engineering",
      id: 'Sarjana Teknik Informatika',
    },
    institution: 'Sekolah Tinggi Ilmu Komputer Binaniaga Bogor',
    location: 'Bogor, West Java, Indonesia',
    period: '2016 – 2020',
    gpa: '3.11 / 4.00',
    highlights: {
      en: [
        'Relevant courses: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks',
        
      ],
      id: [
        'Mata kuliah relevan: Struktur Data, Algoritma, Sistem Database, Rekayasa Perangkat Lunak, Jaringan Komputer',
   
      ],
    },
    icon: 'bi-mortarboard-fill',
  },
]

const certifications = [
  {
    name: 'React Js Web Frontend',
    issuer: 'Sanbercode',
    year: '2024',
    icon: 'bi-patch-check-fill',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
    verify: 'https://drive.google.com/file/d/1X5dzVuIJFWk9CzpW1C3Icfhv3OIdQ2Bz/view?usp=drive_link',
  },
  {
    name: 'Vue JS 3 untuk Pemula',
    issuer: 'Udemy',
    year: '2025',
    icon: 'bi-code-square',
    color: '#0a0a23',
    bg: 'rgba(10,10,35,0.08)',
    verify: 'https://drive.google.com/file/d/1KzUl0s-QlzCG85Xh2RowtAL_05fDqtng/view?usp=sharing',
  },
  // {
  //   name: 'Responsive Web Design',
  //   issuer: 'freeCodeCamp',
  //   year: '2021',
  //   icon: 'bi-phone-fill',
  //   color: '#0a0a23',
  //   bg: 'rgba(10,10,35,0.08)',
  //   verify: '#',
  // },
  // {
  //   name: 'Node.js (Intermediate)',
  //   issuer: 'HackerRank',
  //   year: '2022',
  //   icon: 'bi-server',
  //   color: '#2ec866',
  //   bg: 'rgba(46,200,102,0.1)',
  //   verify: '#',
  // },
  // {
  //   name: 'Docker Foundations',
  //   issuer: 'Docker, Inc.',
  //   year: '2023',
  //   icon: 'bi-box-seam-fill',
  //   color: '#2496ED',
  //   bg: 'rgba(36,150,237,0.1)',
  //   verify: '#',
  // },
]
</script>

<template>
  <section id="education" class="section section-alt" ref="sectionRef">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 reveal">
        <span class="section-label">{{ langStore.t.education.sectionLabel }}</span>
        <h2 class="section-title">{{ langStore.t.education.title }}</h2>
        <p class="section-subtitle">{{ langStore.t.education.subtitle }}</p>
      </div>

      <div class="row g-4">
        <!-- Education Column -->
        <div class="col-lg-5 reveal">
          <h3 class="subsection-title mb-4">
            <i class="bi bi-mortarboard-fill me-2 text-primary-c"></i>
            {{ langStore.t.education.degree }}
          </h3>
          <div v-for="edu in education" :key="edu.institution" class="edu-card">
            <div class="edu-icon">
              <i :class="edu.icon"></i>
            </div>
            <div class="edu-content">
              <h4 class="edu-degree">{{ edu.degree[langStore.locale] }}</h4>
              <p class="edu-institution">
                <i class="bi bi-building me-1"></i>{{ edu.institution }}
                <span class="mx-1">·</span>
                <i class="bi bi-geo-alt me-1"></i>{{ edu.location }}
              </p>
              <div class="edu-meta">
                <span class="edu-period">
                  <i class="bi bi-calendar3 me-1"></i>{{ edu.period }}
                </span>
                <span class="edu-gpa">
                  <i class="bi bi-star-fill me-1"></i>{{ langStore.t.education.gpaLabel }}: {{ edu.gpa }}
                </span>
              </div>
              <ul class="edu-highlights">
                <li v-for="(h, i) in edu.highlights[langStore.locale]" :key="i">{{ h }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Certifications Column -->
        <div class="col-lg-7 reveal" style="transition-delay: 0.15s">
          <h3 class="subsection-title mb-4">
            <i class="bi bi-patch-check-fill me-2 text-primary-c"></i>
            {{ langStore.t.education.certifications }}
          </h3>
          <div class="cert-grid">
            <div v-for="cert in certifications" :key="cert.name" class="cert-card">
              <div class="cert-icon" :style="{ background: cert.bg, color: cert.color }">
                <i :class="cert.icon"></i>
              </div>
              <div class="cert-info">
                <p class="cert-name">{{ cert.name }}</p>
                <p class="cert-issuer">{{ cert.issuer }} · {{ cert.year }}</p>
              </div>
              <a :href="cert.verify" target="_blank" rel="noopener" class="cert-verify" aria-label="Verify certificate">
                <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.subsection-title {
  font-size: 1.1rem; font-weight: 700;
  color: var(--text-primary);
}
.text-primary-c { color: var(--primary); }

.edu-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex; gap: 1.25rem;
  transition: var(--transition);
}
.edu-card:hover {
  border-color: rgba(var(--primary-rgb), 0.3);
  box-shadow: 0 8px 32px rgba(var(--primary-rgb), 0.1);
}
.edu-icon {
  width: 48px; height: 48px; flex-shrink: 0;
  background: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem;
}
.edu-degree { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.375rem; }
.edu-institution { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem; }
.edu-meta { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem; }
.edu-period, .edu-gpa {
  font-size: 0.8rem; font-weight: 600;
  background: rgba(var(--primary-rgb), 0.08);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
}
.edu-highlights {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 0.375rem;
}
.edu-highlights li {
  font-size: 0.8rem; color: var(--text-secondary);
  padding-left: 1rem; position: relative;
}
.edu-highlights li::before {
  content: '•'; position: absolute; left: 0;
  color: var(--primary);
}

.cert-grid { display: flex; flex-direction: column; gap: 0.75rem; }
.cert-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex; align-items: center; gap: 1rem;
  transition: var(--transition);
}
.cert-card:hover {
  border-color: rgba(var(--primary-rgb), 0.3);
  transform: translateX(4px);
}
.cert-icon {
  width: 40px; height: 40px; flex-shrink: 0;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem;
}
.cert-info { flex: 1; }
.cert-name { font-size: 0.875rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.2rem; }
.cert-issuer { font-size: 0.78rem; color: var(--text-muted); margin: 0; }
.cert-verify {
  color: var(--text-muted); font-size: 1rem;
  text-decoration: none; transition: var(--transition);
}
.cert-verify:hover { color: var(--primary); }
</style>
