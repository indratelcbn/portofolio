<script setup>
import { ref, reactive } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useScrollReveal } from '@/composables/useScrollReveal'

const langStore = useLanguageStore()
const sectionRef = ref(null)
useScrollReveal(sectionRef)

const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | sending | success | error

const contactInfo = [
  { icon: 'bi-envelope-fill', label: 'emailLabel', value: 'indrabudidarma@gmail.com', href: 'mailto:indrabudidarma@gmail.com', color: '#6366f1' },
  { icon: 'bi-linkedin', label: 'linkedinLabel', value: 'linkedin.com/in/indra-budi', href: 'https://linkedin.com/in/indra-budi', color: '#0077b5' },
  { icon: 'bi-github', label: 'githubLabel', value: 'github.com/indratelcbn', href: 'https://github.com/indratelcbn', color: '#333' },
  { icon: 'bi-geo-alt-fill', label: 'locationLabel', value: 'Bogor, West Java, Indonesia', href: null, color: '#10b981' },
]

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) return
  status.value = 'sending'
  try {
    // Replace YOUR_FORM_ID with your Formspree form ID at https://formspree.io
    const res = await fetch('https://formspree.io/f/mykrzvqr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    })
    if (res.ok) {
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="section" ref="sectionRef">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 reveal">
        <span class="section-label">{{ langStore.t.contact.sectionLabel }}</span>
        <h2 class="section-title">{{ langStore.t.contact.title }}</h2>
        <p class="section-subtitle">{{ langStore.t.contact.subtitle }}</p>
      </div>

      <div class="row g-5 justify-content-center">
        <!-- Contact Info Column -->
        <div class="col-lg-5 reveal">
          <!-- Open to Work -->
          <div class="available-banner mb-4">
            <span class="avail-dot"></span>
            <div>
              <p class="avail-title">{{ langStore.t.contact.availableFor }}</p>
              <p class="avail-sub">{{ langStore.locale === 'en' ? 'US timezone compatible (UTC+7 → flexible hours)' : 'Kompatibel zona waktu AS (UTC+7 → jam fleksibel)' }}</p>
            </div>
          </div>

          <!-- Contact Cards -->
          <div v-for="info in contactInfo" :key="info.label" class="contact-card mb-3">
            <div class="contact-card-icon" :style="{ background: info.color + '18', color: info.color }">
              <i :class="info.icon"></i>
            </div>
            <div>
              <p class="contact-card-label">{{ langStore.t.contact[info.label] }}</p>
              <a v-if="info.href" :href="info.href" target="_blank" rel="noopener" class="contact-card-value">
                {{ info.value }}
              </a>
              <p v-else class="contact-card-value no-link">{{ info.value }}</p>
            </div>
          </div>

          <!-- Resume Download -->
          <a href="/resume.pdf" download class="btn-resume-download mt-2">
            <i class="bi bi-file-earmark-pdf-fill me-2"></i>
            {{ langStore.t.contact.downloadResume }}
            <i class="bi bi-download ms-auto"></i>
          </a>
        </div>

        <!-- Form Column -->
        <div class="col-lg-6 reveal" style="transition-delay:0.15s">
          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
            <!-- Name -->
            <div class="form-group">
              <label class="form-label-custom">
                <i class="bi bi-person me-1"></i>
                {{ langStore.locale === 'en' ? 'Full Name' : 'Nama Lengkap' }}
              </label>
              <input
                v-model="form.name"
                type="text"
                class="input-custom"
                :placeholder="langStore.t.contact.namePlaceholder"
                required
                autocomplete="name"
              />
            </div>

            <!-- Email -->
            <div class="form-group">
              <label class="form-label-custom">
                <i class="bi bi-envelope me-1"></i>
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                class="input-custom"
                :placeholder="langStore.t.contact.emailPlaceholder"
                required
                autocomplete="email"
              />
            </div>

            <!-- Message -->
            <div class="form-group">
              <label class="form-label-custom">
                <i class="bi bi-chat-text me-1"></i>
                {{ langStore.locale === 'en' ? 'Message' : 'Pesan' }}
              </label>
              <textarea
                v-model="form.message"
                class="input-custom textarea"
                :placeholder="langStore.t.contact.messagePlaceholder"
                rows="5"
                required
              ></textarea>
            </div>

            <!-- Status Messages -->
            <Transition name="fade">
              <p v-if="status === 'success'" class="status-msg success">{{ langStore.t.contact.successMsg }}</p>
              <p v-else-if="status === 'error'" class="status-msg error">{{ langStore.t.contact.errorMsg }}</p>
            </Transition>

            <!-- Submit -->
            <button type="submit" class="btn-submit" :disabled="status === 'sending'">
              <template v-if="status === 'sending'">
                <span class="spinner" aria-hidden="true"></span>
                {{ langStore.t.contact.sending }}
              </template>
              <template v-else>
                <i class="bi bi-send-fill me-2"></i>
                {{ langStore.t.contact.sendBtn }}
              </template>
            </button>

            <p class="form-note">
              <i class="bi bi-shield-check me-1"></i>
              {{ langStore.locale === 'en' ? 'Your information is kept private and never shared.' : 'Informasi Anda dijaga privasi dan tidak pernah dibagikan.' }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.available-banner {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex; align-items: center; gap: 1rem;
}
.avail-dot {
  width: 12px; height: 12px; flex-shrink: 0;
  background: #10b981; border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 0 4px rgba(16,185,129,0.2);
}
@keyframes pulse { 0%,100%{transform:scale(1)}50%{transform:scale(0.8)} }
.avail-title { font-weight: 700; color: #10b981; margin: 0 0 0.2rem; font-size: 0.9rem; }
.avail-sub { font-size: 0.78rem; color: var(--text-muted); margin: 0; }

.contact-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex; align-items: center; gap: 1rem;
  transition: var(--transition);
}
.contact-card:hover { border-color: rgba(var(--primary-rgb), 0.3); transform: translateX(4px); }
.contact-card-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.25rem;
}
.contact-card-label { font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.2rem; }
.contact-card-value { font-size: 0.9rem; font-weight: 600; color: var(--text-primary); text-decoration: none; margin: 0; transition: var(--transition); }
.contact-card-value:hover { color: var(--primary); }
.contact-card-value.no-link { color: var(--text-secondary); }

.btn-resume-download {
  display: flex; align-items: center;
  width: 100%;
  background: var(--bg-surface);
  border: 2px solid var(--primary);
  border-radius: 12px;
  padding: 0.875rem 1.25rem;
  color: var(--primary); font-weight: 700;
  text-decoration: none; transition: var(--transition);
  font-size: 0.95rem;
}
.btn-resume-download:hover {
  background: var(--primary); color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(var(--primary-rgb), 0.3);
}

/* Form */
.contact-form { display: flex; flex-direction: column; gap: 0; }
.form-group { margin-bottom: 1.25rem; }
.form-label-custom { font-size: 0.875rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem; display: block; }
.input-custom {
  width: 100%;
  background: var(--bg-surface);
  border: 1.5px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  transition: var(--transition);
  font-family: inherit;
  outline: none;
}
.input-custom:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.12);
  background: var(--bg-surface);
}
.input-custom::placeholder { color: var(--text-muted); }
.input-custom.textarea { resize: vertical; min-height: 130px; }

.status-msg { padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.9rem; font-weight: 500; margin-bottom: 1rem; }
.status-msg.success { background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.25); }
.status-msg.error { background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.25); }

.btn-submit {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff; border: none;
  padding: 0.875rem 2rem;
  border-radius: 50px; font-weight: 700; font-size: 1rem;
  cursor: pointer; transition: var(--transition);
  display: flex; align-items: center; justify-content: center;
  width: 100%; margin-bottom: 0.75rem;
}
.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(var(--primary-rgb), 0.4);
}
.btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

.spinner {
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-right: 0.5rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

.form-note { font-size: 0.78rem; color: var(--text-muted); text-align: center; margin: 0; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
