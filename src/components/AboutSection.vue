<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useScrollReveal } from '@/composables/useScrollReveal'

const langStore = useLanguageStore()
const sectionRef = ref(null)
useScrollReveal(sectionRef)

const stats = [
  { number: '3+', key: 'yearsExp', icon: 'bi-calendar-check' },
  { number: '20+', key: 'projectsDone', icon: 'bi-folder-check' },
  { number: '15+', key: 'happyClients', icon: 'bi-people-fill' },
]

const techStack = [
  { name: 'Vue.js', icon: 'bi-code-slash', color: '#41B883' },
  { name: 'React', icon: 'bi-diagram-3', color: '#61DAFB' },
  { name: 'Node.js', icon: 'bi-server', color: '#68A063' },
  { name: 'TypeScript', icon: 'bi-filetype-tsx', color: '#3178C6' },
  { name: 'Docker', icon: 'bi-box-seam', color: '#2496ED' },
  { name: 'PostgreSQL', icon: 'bi-database', color: '#336791' },
]
</script>

<template>
  <section id="about" class="section section-alt" ref="sectionRef">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 reveal">
        <span class="section-label">{{ langStore.t.about.sectionLabel }}</span>
        <h2 class="section-title">{{ langStore.t.about.title }}</h2>
        <p class="section-subtitle">{{ langStore.t.about.subtitle }}</p>
      </div>

      <div class="row align-items-center g-5">
        <!-- Left: Image -->
        <div class="col-lg-5 d-flex justify-content-center reveal">
          <div class="about-img-wrapper">
            <img src="/img/foto.png" alt="Indra Budi Darma" class="about-img" />
            <div class="about-img-decoration" aria-hidden="true"></div>
            <!-- Experience badge -->
            <div class="exp-badge">
              <div class="exp-badge-number">3+</div>
              <div class="exp-badge-text">Years<br>Exp.</div>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="col-lg-7 reveal" style="transition-delay:0.15s">
          <h3 class="about-name mb-1">Indra Budi Darma</h3>
          <p class="about-role mb-3">Frontend Developer · Jakarta, Indonesia</p>
          <p class="about-bio">{{ langStore.t.about.bio1 }}</p>
          <p class="about-bio">{{ langStore.t.about.bio2 }}</p>

          <!-- Stats -->
          <div class="row g-3 my-4">
            <div v-for="stat in stats" :key="stat.key" class="col-4">
              <div class="stat-card">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ langStore.t.about[stat.key] }}</div>
              </div>
            </div>
          </div>

          <!-- Tech quick view -->
          <div class="tech-quick">
            <div v-for="tech in techStack" :key="tech.name" class="tech-chip">
              <i :class="tech.icon" :style="{ color: tech.color }"></i>
              {{ tech.name }}
            </div>
          </div>

          <!-- Actions -->
          <div class="d-flex flex-wrap gap-3 mt-4">
            <a href="/resume.pdf" download class="btn-primary-custom">
              <i class="bi bi-download"></i>
              {{ langStore.t.hero.downloadResume }}
            </a>
            <a href="https://linkedin.com/in/indra-budi" target="_blank" rel="noopener" class="btn-outline-custom">
              <i class="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <!-- GitHub Stats -->
      <div class="github-stats-row reveal mt-5">
        <img
          src="https://github-readme-stats.vercel.app/api?username=indrabudidarma&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=6366f1&text_color=64748b&bg_color=00000000"
          alt="GitHub Stats"
          class="github-stat-img"
          loading="lazy"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=indrabudidarma&hide_border=true&stroke=00000000&background=00000000&ring=6366f1&fire=10b981&currStreakLabel=6366f1&dates=64748b&currStreakNum=0f172a&sideLabels=64748b&sideNums=0f172a"
          alt="GitHub Streak"
          class="github-stat-img"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-img-wrapper {
  position: relative; display: inline-block;
}
.about-img {
  width: clamp(260px, 32vw, 380px);
  height: clamp(260px, 32vw, 380px);
  border-radius: 24px; object-fit: cover;
  box-shadow: 0 20px 60px rgba(0,0,0,0.12);
  position: relative; z-index: 1;
}
.about-img-decoration {
  position: absolute;
  inset: -12px; border-radius: 28px;
  background: linear-gradient(135deg, rgba(var(--primary-rgb),0.15), rgba(16,185,129,0.1));
  z-index: 0;
}
.exp-badge {
  position: absolute; bottom: -16px; right: -16px;
  background: var(--primary);
  color: #fff; border-radius: 16px;
  padding: 1rem 1.25rem;
  text-align: center; z-index: 2;
  box-shadow: 0 8px 24px rgba(var(--primary-rgb),0.4);
}
.exp-badge-number { font-size: 1.75rem; font-weight: 900; line-height: 1; }
.exp-badge-text { font-size: 0.7rem; font-weight: 600; opacity: 0.85; }

.about-name {
  font-size: 1.75rem; font-weight: 800;
  color: var(--text-primary);
}
.about-role {
  color: var(--primary); font-weight: 600; font-size: 1rem;
}
.about-bio {
  color: var(--text-secondary);
  line-height: 1.8; margin-bottom: 1rem;
}

.stat-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem 1rem;
  text-align: center;
  transition: var(--transition);
}
.stat-card:hover {
  border-color: rgba(var(--primary-rgb), 0.3);
  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.1);
}
.stat-number { font-size: 2rem; font-weight: 900; color: var(--primary); line-height: 1; }
.stat-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; }

.tech-quick { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tech-chip {
  display: inline-flex; align-items: center; gap: 0.4rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  padding: 0.375rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem; font-weight: 600;
  color: var(--text-primary);
  transition: var(--transition);
}
.tech-chip:hover {
  border-color: rgba(var(--primary-rgb),0.3);
  background: rgba(var(--primary-rgb),0.05);
}

.github-stats-row {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem;
  padding: 2rem;
  background: var(--bg-surface);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}
.github-stat-img {
  max-width: 100%; height: auto;
  border-radius: 8px;
}
</style>
