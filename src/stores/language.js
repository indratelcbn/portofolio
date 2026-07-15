import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const translations = {
  en: {
    nav: {
      home: 'Home', about: 'About', skills: 'Skills',
      projects: 'Projects', experience: 'Experience',
      education: 'Education', contact: 'Contact', resume: 'Resume',
    },
    hero: {
      greeting: "Hi, I'm",
      openToWork: 'Open to Work',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      downloadResume: 'Download Resume',
      scrollDown: 'Scroll Down',
    },
    about: {
      sectionLabel: 'Get to Know Me',
      title: 'About Me',
      subtitle: 'Passionate developer crafting digital experiences',
      bio1: "I'm a Frontend Developer with 3+ years of experience building beautiful, responsive web applications. I specialize in Vue.js, React, and TypeScript, with a strong focus on performance, accessibility, and user experience.",
      bio2: "Based in Jakarta, Indonesia, I'm actively seeking remote opportunities with innovative US-based companies. I thrive in collaborative environments and love tackling complex technical challenges.",
      yearsExp: 'Years of Experience',
      projectsDone: 'Projects Completed',
      happyClients: 'Happy Clients',
    },
    skills: {
      sectionLabel: 'Technical Expertise',
      title: 'Skills & Technologies',
      subtitle: 'Technologies I use to bring ideas to life',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools & DevOps',
    },
    projects: {
      sectionLabel: 'My Work',
      title: 'Featured Projects',
      subtitle: 'A selection of my recent work',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      viewAll: 'View All on GitHub',
    },
    experience: {
      sectionLabel: 'Career',
      title: 'Work Experience',
      subtitle: 'My professional journey so far',
      present: 'Present',
      keyAchievements: 'Key Achievements',
    },
    education: {
      sectionLabel: 'Education',
      title: 'Education & Certifications',
      subtitle: 'My academic and professional learning journey',
      gpaLabel: 'GPA',
      certifications: 'Certifications & Courses',
    },
    contact: {
      sectionLabel: 'Get in Touch',
      title: "Let's Work Together",
      subtitle: "I'm open to new opportunities. Whether you have a project in mind or just want to say hi — drop me a message!",
      namePlaceholder: 'Your Full Name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project or opportunity...',
      sendBtn: 'Send Message',
      sending: 'Sending...',
      successMsg: '✅ Message sent! I\'ll get back to you within 24 hours.',
      errorMsg: '❌ Something went wrong. Please email me directly.',
      locationLabel: 'Location',
      availableFor: 'Available for Remote Work',
      downloadResume: 'Download Resume (PDF)',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Built with ❤️ and',
      by: 'by Indra Budi Darma',
      backToTop: 'Back to Top',
    },
  },
  id: {
    nav: {
      home: 'Beranda', about: 'Tentang', skills: 'Keahlian',
      projects: 'Proyek', experience: 'Pengalaman',
      education: 'Pendidikan', contact: 'Kontak', resume: 'Resume',
    },
    hero: {
      greeting: 'Halo, Saya',
      openToWork: 'Siap Bekerja',
      viewProjects: 'Lihat Proyek',
      contactMe: 'Hubungi Saya',
      downloadResume: 'Unduh Resume',
      scrollDown: 'Gulir Bawah',
    },
    about: {
      sectionLabel: 'Kenali Saya',
      title: 'Tentang Saya',
      subtitle: 'Developer bersemangat yang menciptakan pengalaman digital',
      bio1: 'Saya adalah Frontend Developer dengan 3+ tahun pengalaman membangun aplikasi web yang indah dan responsif. Spesialisasi saya pada Vue.js, React, dan TypeScript, dengan fokus kuat pada performa, aksesibilitas, dan pengalaman pengguna.',
      bio2: 'Berbasis di Jakarta, Indonesia, saya aktif mencari peluang remote dengan perusahaan inovatif berbasis AS. Saya berkembang di lingkungan kolaboratif dan senang menangani tantangan teknis yang kompleks.',
      yearsExp: 'Tahun Pengalaman',
      projectsDone: 'Proyek Selesai',
      happyClients: 'Klien Puas',
    },
    skills: {
      sectionLabel: 'Keahlian Teknis',
      title: 'Keahlian & Teknologi',
      subtitle: 'Teknologi yang saya gunakan untuk mewujudkan ide',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Alat & DevOps',
    },
    projects: {
      sectionLabel: 'Karya Saya',
      title: 'Proyek Unggulan',
      subtitle: 'Pilihan karya terbaru saya',
      viewCode: 'Lihat Kode',
      liveDemo: 'Demo Langsung',
      viewAll: 'Lihat Semua di GitHub',
    },
    experience: {
      sectionLabel: 'Karier',
      title: 'Pengalaman Kerja',
      subtitle: 'Perjalanan profesional saya sejauh ini',
      present: 'Sekarang',
      keyAchievements: 'Pencapaian Utama',
    },
    education: {
      sectionLabel: 'Pendidikan',
      title: 'Pendidikan & Sertifikasi',
      subtitle: 'Perjalanan akademik dan pembelajaran profesional saya',
      gpaLabel: 'IPK',
      certifications: 'Sertifikasi & Kursus',
    },
    contact: {
      sectionLabel: 'Hubungi Saya',
      title: 'Mari Berkolaborasi',
      subtitle: 'Saya terbuka untuk peluang baru. Punya proyek atau sekadar ingin menyapa — kirim pesan ke saya!',
      namePlaceholder: 'Nama Lengkap Anda',
      emailPlaceholder: 'email@anda.com',
      messagePlaceholder: 'Ceritakan tentang proyek atau peluang Anda...',
      sendBtn: 'Kirim Pesan',
      sending: 'Mengirim...',
      successMsg: '✅ Pesan terkirim! Saya akan membalas dalam 24 jam.',
      errorMsg: '❌ Terjadi kesalahan. Silakan email saya langsung.',
      locationLabel: 'Lokasi',
      availableFor: 'Tersedia untuk Kerja Remote',
      downloadResume: 'Unduh Resume (PDF)',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      rights: 'Semua hak dilindungi.',
      madeWith: 'Dibangun dengan ❤️ dan',
      by: 'oleh Indra Budi Darma',
      backToTop: 'Kembali ke Atas',
    },
  },
}

export const useLanguageStore = defineStore('language', () => {
  const locale = ref(localStorage.getItem('locale') || 'en')
  const t = computed(() => translations[locale.value])

  function setLocale(lang) {
    locale.value = lang
    localStorage.setItem('locale', lang)
  }

  return { locale, t, setLocale }
})
