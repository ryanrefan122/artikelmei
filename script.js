/**
 * ===================================================================
 * ALEX PRATAMA - PERSONAL PORTFOLIO
 * Senior Frontend Developer & UI/UX Designer
 * Pure Vanilla JavaScript (Modular, Clean, Accessible & Interactive)
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =================================================================
  // 1. DATA STORE: PROJECT CASE STUDIES
  // =================================================================
  const projectDatabase = {
    finova: {
      title: 'Finova Enterprise Financial Dashboard',
      category: 'Fintech & SaaS Platform',
      badge: 'Flagship Case Study',
      tags: ['Pure JavaScript ES6+', 'Custom CSS Grid', 'Figma Design System', 'SVG Data Visualization', 'ARIA WCAG 2.1'],
      overview: 'Finova adalah platform analitik keuangan untuk perusahaan multinasional yang mengelola jutaan transaksi harian. Tantangan utama adalah waktu muat data yang lambat dan visualisasi grafik yang membebani browser.',
      challenge: 'Dashboard versi lama mengalami freeze saat memuat 10.000+ data transaksi dan skor aksesibilitas hanya mencapai 62/100, menyulitkan tim compliance dan pengguna dengan keterbatasan motorik.',
      solution: 'Membangun arsitektur virtual list rendering berbasis vanilla JS, mengoptimasi reflow DOM, serta merancang ulang visual interface dari dasar di Figma dengan token warna kontras tinggi dan keyboard navigation lengkap.',
      metrics: [
        { label: 'Peningkatan Kecepatan Keputusan', val: '+140%' },
        { label: 'Largest Contentful Paint (LCP)', val: '0.6 detik' },
        { label: 'Google Lighthouse Score', val: '100 / 100' },
        { label: 'Retensi Pengguna Aktif Harian', val: '+38%' }
      ],
      liveUrl: 'https://github.com',
      codeUrl: 'https://github.com'
    },
    lumina: {
      title: 'Lumina Artisan: Luxury E-Commerce Platform',
      category: 'E-Commerce Architecture',
      badge: 'Frontend Engineering',
      tags: ['Vanilla JavaScript', 'CSS Flex/Grid', 'Responsive Layout', 'Local Storage State'],
      overview: 'Platform e-commerce butik premium dengan fokus pada kurasi produk kriya lokal berkelas internasional. Dirancang untuk memberikan pengalaman belanja yang mulus dan elegan tanpa lag.',
      challenge: 'Klien menginginkan transisi antar-kategori instan tanpa reload halaman penuh serta performa mobile 60fps untuk pelanggan dengan jaringan internet terbatas.',
      solution: 'Menerapkan dynamic client-side filtering berbasis array manipulation efisien, modular state shopping bag di LocalStorage, dan layout responsif fluid menggunakan CSS clamp.',
      metrics: [
        { label: 'Konversi Checkout', val: '+24.5%' },
        { label: 'Skor Kecepatan Mobile', val: '98 / 100' },
        { label: 'Penurunan Ukuran Bundle', val: '-72%' }
      ],
      liveUrl: 'https://github.com',
      codeUrl: 'https://github.com'
    },
    carepulse: {
      title: 'CarePulse: Telemedicine & Lab App',
      category: 'UI/UX Research & Product Design',
      badge: 'UI/UX Case Study',
      tags: ['UX Research', 'Figma High-Fidelity', 'Usability Testing', 'Design System'],
      overview: 'Riset dan perancangan antarmuka aplikasi telemedisin untuk membantu pasien lanjut usia berkonsultasi dengan dokter spesialis dan memesan pemeriksaan laboratorium dari rumah.',
      challenge: 'Pengguna berusia di atas 50 tahun sering merasa bingung dengan banyaknya opsi navigasi dan ukuran teks kecil pada aplikasi kesehatan pada umumnya.',
      solution: 'Melakukan wawancara mendalam dengan 15 partisipan, menyusun User Journey, merancang Typography Scale khusus lansia, dan menyederhanakan alur konsultasi menjadi 3 langkah mudah.',
      metrics: [
        { label: 'System Usability Scale (SUS)', val: '88.5 (Grade A)' },
        { label: 'Task Completion Rate', val: '96%' },
        { label: 'Penurunan Keluhan UX', val: '-65%' }
      ],
      liveUrl: 'https://github.com',
      codeUrl: 'https://github.com'
    },
    aether: {
      title: 'Aether Design System for Enterprise',
      category: 'Enterprise Infrastructure',
      badge: 'Design System',
      tags: ['Design Tokens', 'Atomic CSS', 'Accessible Components', 'WCAG 2.1 AA'],
      overview: 'Infrastruktur desain sistem terpadu yang menyelaraskan bahasa visual dan token komponen antara 40+ desainer dan developer lintas 14 produk digital korporasi.',
      challenge: 'Inkonsistensi komponen tombol, palet warna yang tumpang tindih, dan duplikasi kode CSS yang memperlambat siklus perilisan produk baru.',
      solution: 'Membangun 45+ komponen UI aksesibel (Buttons, Modals, Forms, Alerts, Navigation) dengan token desain JSON terstandarisasi yang siap diekspor ke CSS Variables secara otomatis.',
      metrics: [
        { label: 'Waktu Rilis Fitur Baru', val: '35% Lebih Cepat' },
        { label: 'Pengurangan Redundansi CSS', val: '-48%' },
        { label: 'Adopsi Tim Engineering', val: '100%' }
      ],
      liveUrl: 'https://github.com',
      codeUrl: 'https://github.com'
    },
    taskflow: {
      title: 'TaskFlow: Interactive Agile Kanban',
      category: 'Productivity Web App',
      badge: 'Frontend Engineering',
      tags: ['HTML5 Drag & Drop API', 'Vanilla JavaScript', 'Local Storage', 'Dark Mode'],
      overview: 'Aplikasi papan kanban interaktif berbasis web untuk manajemen sprint tim pengembang perangkat lunak, bebas dari beban library pihak ketiga.',
      challenge: 'Membuat fitur drag-and-drop yang sangat responsif, mendukung keyboard accessibility (reorder kartu dengan tombol panah), dan state tersimpan otomatis.',
      solution: 'Memanfaatkan HTML5 Drag and Drop API native dengan visual feedback dinamis, touch event adapter untuk pengguna smartphone, serta auto-save ke browser storage.',
      metrics: [
        { label: 'Frame Rate Animasi', val: 'Solid 60 FPS' },
        { label: 'Ukuran Kode JavaScript', val: '< 18 KB' },
        { label: 'Waktu Pemuatan Awal', val: '0.2 Detik' }
      ],
      liveUrl: 'https://github.com',
      codeUrl: 'https://github.com'
    },
    wanderlust: {
      title: 'WanderLust: Travel Booking Redesign',
      category: 'Mobile-First UX',
      badge: 'UI/UX Case Study',
      tags: ['Mobile UX', 'Conversion Audit', 'Figma Motion', 'Heuristic Evaluation'],
      overview: 'Proyek evaluasi heuristik dan rancang ulang alur pemesanan tiket penerbangan dan penginapan untuk platform travel online terkemuka.',
      challenge: 'Tingkat drop-off (cart abandonment) pada langkah pembayaran mencapai 58% karena form input yang terlalu rumit dan biaya tersembunyi yang muncul di akhir alur.',
      solution: 'Menyederhanakan funnel pembayaran menjadi single-page checkout transparan, menghadirkan price breakdown real-time, dan micro-copy yang menenangkan pengguna.',
      metrics: [
        { label: 'Penurunan Cart Abandonment', val: '-32%' },
        { label: 'Kenaikan Pembayaran Berhasil', val: '+18.4%' },
        { label: 'Waktu Selesai Pemesanan', val: '2 Menit Lebih Singkat' }
      ],
      liveUrl: 'https://github.com',
      codeUrl: 'https://github.com'
    },
    soundwave: {
      title: 'SoundWave: Real-Time Audio Visualizer',
      category: 'Web Audio & Canvas',
      badge: 'Frontend Engineering',
      tags: ['Web Audio API', 'HTML5 Canvas 2D', 'Modular JavaScript', 'Audio Analysis'],
      overview: 'Eksperimen teknologi web audio interaktif yang menerjemahkan frekuensi suara menjadi partikel visual dinamis dengan akselerasi GPU perangkat keras.',
      challenge: 'Merender grafik audio visualizer tanpa menurunkan performa utama halaman web pada laptop dengan spesifikasi standar.',
      solution: 'Memanfaatkan requestAnimationFrame loop, AnalyserNode dari Web Audio API, serta teknik canvas double buffering untuk rendering ultra halus.',
      metrics: [
        { label: 'Latensi Respon Audio', val: '< 12 ms' },
        { label: 'Penggunaan Memori CPU', val: '< 5%' },
        { label: 'Kompatibilitas Lintas Browser', val: '100%' }
      ],
      liveUrl: 'https://github.com',
      codeUrl: 'https://github.com'
    }
  };

  // =================================================================
  // 2. THEME SWITCHER (Dark & Warm Light Mode)
  // =================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or fallback to prefers-color-scheme
  const savedTheme = localStorage.getItem('ap_theme');
  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    htmlRoot.setAttribute('data-theme', 'light');
  }

  function toggleTheme() {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlRoot.setAttribute('data-theme', nextTheme);
    localStorage.setItem('ap_theme', nextTheme);

    const themeName = nextTheme === 'dark' ? 'Warm Dark' : 'Warm Light';
    showToast(`Mode tema diubah ke ${themeName} ☀️/🌙`);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // =================================================================
  // 3. TOAST NOTIFICATION SYSTEM
  // =================================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    toast.innerHTML = `
      <span class="toast-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto remove after 3.5s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 350);
    }, 3500);
  }

  // =================================================================
  // 4. MOBILE NAVIGATION DRAWER
  // =================================================================
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') &&
          !navMenu.contains(e.target) &&
          !menuToggleBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    navMenu.classList.add('is-open');
    menuToggleBtn.classList.add('is-active');
    menuToggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    navMenu.classList.remove('is-open');
    menuToggleBtn.classList.remove('is-active');
    menuToggleBtn.setAttribute('aria-expanded', 'false');
  }

  // =================================================================
  // 5. SCROLLSPY & ACTIVE NAVBAR STATE
  // =================================================================
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
  updateActiveNavOnScroll();

  // =================================================================
  // 6. CARD SPOTLIGHT EFFECT (MOUSE TRACKING GLOW)
  // =================================================================
  const spotlightCards = document.querySelectorAll('[data-spotlight]');

  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
    });
  });

  // =================================================================
  // 7. ANIMATED METRICS COUNTER (INTERSECTION OBSERVER)
  // =================================================================
  const metricElements = document.querySelectorAll('.metric-number');
  let metricsAnimated = false;

  function animateCounters() {
    metricElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1600; // ms
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: easeOutCubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeProgress * target);

        el.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  if (metricElements.length > 0 && 'IntersectionObserver' in window) {
    const metricsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !metricsAnimated) {
          metricsAnimated = true;
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const metricsContainer = document.querySelector('.metrics-grid');
    if (metricsContainer) {
      metricsObserver.observe(metricsContainer);
    }
  }

  // =================================================================
  // 8. ABOUT ME TIMELINE TABS (Experience vs Education)
  // =================================================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPanelId = btn.getAttribute('aria-controls');

      // Update button states
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panels
      tabPanels.forEach(panel => {
        if (panel.id === targetPanelId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // =================================================================
  // 9. SKILLS CATEGORY FILTER
  // =================================================================
  const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards with smooth opacity transition
      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // =================================================================
  // 10. PROJECTS GRID CATEGORY FILTER
  // =================================================================
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active filter button
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter project cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.97)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // =================================================================
  // 11. PROJECT DETAIL MODAL
  // =================================================================
  const projectModal = document.getElementById('project-modal');
  const modalBodyContent = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const openModalBtns = document.querySelectorAll('.btn-open-modal');

  function openProjectModal(projectId) {
    const data = projectDatabase[projectId];
    if (!data || !modalBodyContent || !projectModal) return;

    // Render Metrics HTML
    const metricsHtml = data.metrics.map(m => `
      <div class="modal-metric-box">
        <strong>${m.val}</strong>
        <span>${m.label}</span>
      </div>
    `).join('');

    // Render Tags HTML
    const tagsHtml = data.tags.map(t => `<span class="tech-tag highlight">${t}</span>`).join('');

    modalBodyContent.innerHTML = `
      <span class="modal-project-badge">${data.badge} • ${data.category}</span>
      <h3 class="modal-title">${data.title}</h3>

      <div class="modal-tags">
        ${tagsHtml}
      </div>

      <div class="modal-metrics-list">
        ${metricsHtml}
      </div>

      <h4 class="modal-section-title">Gambaran Umum Proyek</h4>
      <p class="modal-text">${data.overview}</p>

      <h4 class="modal-section-title">Tantangan & Problem Bisnis</h4>
      <p class="modal-text">${data.challenge}</p>

      <h4 class="modal-section-title">Solusi & Arsitektur Frontend / UX</h4>
      <p class="modal-text">${data.solution}</p>

      <div class="modal-actions">
        <a href="#contact" class="btn btn-primary btn-modal-contact">
          <span>Diskusikan Kebutuhan Serupa</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <button type="button" class="btn btn-secondary btn-modal-close-action">
          <span>Tutup Preview</span>
        </button>
      </div>
    `;

    // Bind contact button inside modal
    const contactBtnInModal = modalBodyContent.querySelector('.btn-modal-contact');
    if (contactBtnInModal) {
      contactBtnInModal.addEventListener('click', () => {
        closeProjectModal();
      });
    }

    const closeBtnInModal = modalBodyContent.querySelector('.btn-modal-close-action');
    if (closeBtnInModal) {
      closeBtnInModal.addEventListener('click', closeProjectModal);
    }

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      if (projectId) {
        openProjectModal(projectId);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Close modal when clicking backdrop
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // =================================================================
  // 12. 1-CLICK COPY EMAIL TO CLIPBOARD
  // =================================================================
  const copyEmailButtons = [
    document.getElementById('quick-copy-email'),
    document.getElementById('copy-email-btn')
  ];
  const emailToCopy = 'alex.pratama.dev@email.com';

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((resolve, reject) => {
        try {
          document.execCommand('copy');
          textArea.remove();
          resolve();
        } catch (err) {
          textArea.remove();
          reject(err);
        }
      });
    }
  }

  copyEmailButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        copyTextToClipboard(emailToCopy)
          .then(() => {
            showToast('Alamat email berhasil disalin ke clipboard! 📋');
          })
          .catch(() => {
            showToast('Gagal menyalin, silakan gunakan alex.pratama.dev@email.com', 'error');
          });
      });
    }
  });

  // =================================================================
  // 13. RESUME / CV DOWNLOAD TRIGGER
  // =================================================================
  const downloadCvBtn = document.getElementById('download-cv-btn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Provide immediate UX feedback
      showToast('Menyiapkan berkas CV Alex Pratama (PDF)... 📄');

      // Create a mock downloadable text file as realistic demonstration
      setTimeout(() => {
        const dummyCvContent = `
=====================================================
ALEX PRATAMA, S.Kom
Senior Frontend Developer & UI/UX Designer
Email: alex.pratama.dev@email.com
LinkedIn: linkedin.com/in/alexpratama
Jakarta, Indonesia | Open for Remote / Hybrid
=====================================================

RINGKASAN PROFESIONAL:
Senior Frontend Developer & UI/UX Designer dengan pengalaman 5+ tahun
dalam membangun web applications berkinerja tinggi, design systems,
dan arsitektur frontend modern berbasis HTML, CSS, dan JavaScript murni.

KEAHLIAN UTAMA:
- Frontend Core: Semantic HTML5, CSS3 Grid/Flexbox/Keyframes, Pure JavaScript ES6+
- UI/UX Design: Figma, Usability Testing, User Journey Mapping, Wireframing
- Arsitektur: Design Systems, WCAG 2.1 AA Accessibility, Core Web Vitals Optimization

PENGALAMAN KERJA:
1. Lead Frontend Engineer & UI Specialist - Nusantara Digital Tech (2022 - Sekarang)
2. Senior UI/UX & Web Developer - Inovasi Kreasi Studio (2020 - 2022)
3. Frontend Web Developer - Global Solusi Mandiri (2018 - 2020)

PENDIDIKAN & SERTIFIKASI:
- Sarjana Komputer (S.Kom) - Universitas Indonesia (IPK 3.82 / Cum Laude)
- Google Professional UX Design Certificate
- W3Cx Web Accessibility Certified
=====================================================
        `.trim();

        const blob = new Blob([dummyCvContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const tempLink = document.createElement('a');
        tempLink.href = url;
        tempLink.download = 'CV_Alex_Pratama_Frontend_UIUX.txt';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        URL.revokeObjectURL(url);

        showToast('Berkas CV berhasil diunduh! Silakan cek folder Download Anda. ✅');
      }, 800);
    });
  }

  // =================================================================
  // 14. INTERACTIVE CONTACT FORM WITH VALIDATION
  // =================================================================
  const contactForm = document.getElementById('contact-form');
  const formSuccessState = document.getElementById('form-success-state');
  const resetFormBtn = document.getElementById('reset-form-btn');
  const submitBtn = document.getElementById('submit-btn');

  // Input Fields & Error Elements
  const fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('name-error'),
      validate: (val) => val.trim().length >= 3 ? '' : 'Nama lengkap minimal 3 karakter.'
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!val.trim()) return 'Alamat email wajib diisi.';
        if (!emailRegex.test(val.trim())) return 'Format email tidak valid (contoh: budi@domain.com).';
        return '';
      }
    },
    subject: {
      input: document.getElementById('subject'),
      error: document.getElementById('subject-error'),
      validate: (val) => val ? '' : 'Silakan pilih tujuan komunikasi Anda.'
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: (val) => val.trim().length >= 10 ? '' : 'Pesan minimal 10 karakter agar maksud tersampaikan jelas.'
    }
  };

  // Real-time input validation on blur / input
  Object.keys(fields).forEach(key => {
    const item = fields[key];
    if (item.input) {
      item.input.addEventListener('input', () => {
        if (item.input.classList.contains('is-invalid')) {
          const err = item.validate(item.input.value);
          if (!err) {
            item.input.classList.remove('is-invalid');
            item.error.textContent = '';
          }
        }
      });

      item.input.addEventListener('blur', () => {
        const err = item.validate(item.input.value);
        if (err) {
          item.input.classList.add('is-invalid');
          item.error.textContent = err;
        } else {
          item.input.classList.remove('is-invalid');
          item.error.textContent = '';
        }
      });
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Validate all required fields
      Object.keys(fields).forEach(key => {
        const item = fields[key];
        const errorMsg = item.validate(item.input.value);
        if (errorMsg) {
          item.input.classList.add('is-invalid');
          item.error.textContent = errorMsg;
          hasError = true;
        } else {
          item.input.classList.remove('is-invalid');
          item.error.textContent = '';
        }
      });

      if (hasError) {
        showToast('Mohon lengkapi seluruh formulir dengan benar.', 'error');
        return;
      }

      // Enter loading state
      if (submitBtn) {
        submitBtn.classList.add('is-loading');
        submitBtn.disabled = true;
      }

      // Simulate network submission (1.2s delay)
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove('is-loading');
          submitBtn.disabled = false;
        }

        contactForm.style.display = 'none';
        if (formSuccessState) {
          formSuccessState.style.display = 'flex';
        }

        showToast('Pesan berhasil terkirim! Saya akan segera merespon email Anda. 🎉');
      }, 1200);
    });
  }

  // Reset form button
  if (resetFormBtn && contactForm && formSuccessState) {
    resetFormBtn.addEventListener('click', () => {
      contactForm.reset();
      Object.keys(fields).forEach(key => {
        const item = fields[key];
        item.input.classList.remove('is-invalid');
        item.error.textContent = '';
      });

      formSuccessState.style.display = 'none';
      contactForm.style.display = 'flex';
    });
  }

  // =================================================================
  // 15. SCROLL TO TOP & YEAR AUTO-UPDATE
  // =================================================================
  const scrollTopBtn = document.getElementById('scroll-to-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
