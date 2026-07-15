<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useScrollReveal } from '@/composables/useScrollReveal'

const langStore = useLanguageStore()
const sectionRef = ref(null)
useScrollReveal(sectionRef)

const skillCategories = [
  {
    key: 'frontend',
    icon: 'bi-layout-text-window-reverse',
    color: '#6366f1',
    skills: [
      { name: 'Vue.js 3', level: 95 }, { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 }, { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3', level: 95 }, { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap 5', level: 90 }, { name: 'Vite / Webpack', level: 82 },
    ],
  },
  {
    key: 'backend',
    icon: 'bi-server',
    color: '#10b981',
    skills: [
      { name: 'Node.js', level: 90 }, { name: 'Express.js', level: 90 },

      { name: 'REST API', level: 92 },
      { name: 'JWT', level: 85 },
    ],
  },
  {
    key: 'database',
    icon: 'bi-database',
    color: '#f59e0b',
    skills: [
      { name: 'PostgreSQL', level: 85 }, { name: 'MySQL', level: 88 },
     { name: 'Prisma ORM', level: 80 },
    ],
  },
  {
    key: 'tools',
    icon: 'bi-tools',
    color: '#ef4444',
    skills: [
      { name: 'Git', level: 95 }, { name: 'Docker', level: 80 },
      { name: 'Linux / Bash', level: 78 }, 
     { name: 'Vercel / Netlify', level: 90 },
     { name: 'Postman', level: 90 },
    ],
  },
]

const featuredTech = [
  { name: 'Vue.js', icon: 'bi-code-slash', color: '#41B883', bg: 'rgba(65,184,131,0.1)' },
  { name: 'React', icon: 'bi-circle', color: '#61DAFB', bg: 'rgba(97,218,251,0.1)' },
  { name: 'Node.js', icon: 'bi-server', color: '#68A063', bg: 'rgba(104,160,99,0.1)' },
  { name: 'TypeScript', icon: 'bi-filetype-tsx', color: '#3178C6', bg: 'rgba(49,120,198,0.1)' },
  { name: 'Docker', icon: 'bi-box-seam', color: '#2496ED', bg: 'rgba(36,150,237,0.1)' },
  { name: 'PostgreSQL', icon: 'bi-database-fill', color: '#336791', bg: 'rgba(51,103,145,0.1)' },
  { name: 'AWS', icon: 'bi-cloud-fill', color: '#FF9900', bg: 'rgba(255,153,0,0.1)' },
  { name: 'Git', icon: 'bi-git', color: '#F05032', bg: 'rgba(240,80,50,0.1)' },
]
</script>

<template>
  <section id="skills" class="section" ref="sectionRef">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 reveal">
        <span class="section-label">{{ langStore.t.skills.sectionLabel }}</span>
        <h2 class="section-title">{{ langStore.t.skills.title }}</h2>
        <p class="section-subtitle">{{ langStore.t.skills.subtitle }}</p>
      </div>

      <!-- Featured Technologies Chips -->
      <div class="featured-tech reveal mb-5">
        <div v-for="tech in featuredTech" :key="tech.name" class="tech-featured-chip"
          :style="{ background: tech.bg, borderColor: tech.color + '40' }">
          <i :class="tech.icon" :style="{ color: tech.color }"></i>
          <span>{{ tech.name }}</span>
        </div>
      </div>

      <!-- Skill Categories Grid -->
      <div class="row g-4">
        <div v-for="(cat, i) in skillCategories" :key="cat.key" class="col-md-6 col-xl-3 reveal"
          :style="{ transitionDelay: `${i * 0.1}s` }">
          <div class="skill-category-card">
            <div class="skill-cat-icon" :style="{ background: cat.color + '18', color: cat.color }">
              <i :class="cat.icon"></i>
            </div>
            <h3 class="skill-cat-title">{{ langStore.t.skills[cat.key] }}</h3>
            <div class="skill-list">
              <div v-for="skill in cat.skills" :key="skill.name" class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-pct" :style="{ color: cat.color }">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar-bg">
                  <div class="skill-bar-fill"
                    :style="{ width: skill.level + '%', background: `linear-gradient(90deg, ${cat.color}, ${cat.color}bb)` }">
                  </div>
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
.featured-tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.tech-featured-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  border: 1px solid;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-primary);
  transition: var(--transition);
  cursor: default;
}

.tech-featured-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.skill-category-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem;
  height: 100%;
  transition: var(--transition);
}

.skill-category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(var(--primary-rgb), 0.12);
}

.skill-cat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.skill-cat-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-item {}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.skill-name {
  font-size: 0.82rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.skill-pct {
  font-size: 0.75rem;
  font-weight: 700;
}

.skill-bar-bg {
  height: 5px;
  background: var(--bg-surface-2);
  border-radius: 3px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1s ease;
}
</style>
