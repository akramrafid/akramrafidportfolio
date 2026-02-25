/* ============================================
   AKRAM RAFID - PORTFOLIO JAVASCRIPT
   GSAP Animations + Interactions
   ============================================ */

// ---- Register GSAP Plugins ----
gsap.registerPlugin(ScrollTrigger, CustomEase);

CustomEase.create("smoothOut", "M0,0 C0.25,0 0.35,1 1,1");
CustomEase.create("smoothInOut", "M0,0 C0.76,0 0.24,1 1,1");

// ============================================
// PRELOADER
// ============================================
const preloader = document.getElementById('preloader');
const preloaderProgress = document.getElementById('preloaderProgress');
const preloaderCount = document.getElementById('preloaderCount');

let count = 0;
const interval = setInterval(() => {
  count += Math.floor(Math.random() * 4) + 1;
  if (count >= 100) count = 100;

  preloaderProgress.style.width = count + '%';
  preloaderCount.textContent = count + '%';

  if (count === 100) {
    clearInterval(interval);
    setTimeout(() => {
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          preloader.style.display = 'none';
          initAnimations();
        }
      });
    }, 400);
  }
}, 30);

// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.05, ease: 'none' });
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  gsap.set(cursorFollower, { x: followerX, y: followerY });
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor scale effects
const hoverTargets = document.querySelectorAll('a, button, .project-item, .service-card');
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursorFollower, { scale: 1.8, duration: 0.3, ease: 'power2.out' });
    gsap.to(cursor, { scale: 0.5, duration: 0.3, ease: 'power2.out' });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(cursorFollower, { scale: 1, duration: 0.3, ease: 'power2.out' });
    gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' });
  });
});

// ============================================
// NAVIGATION
// ============================================
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

// Scroll effect on nav
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionBottom = sectionTop + section.offsetHeight;
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

    if (navLink) {
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        navLink.classList.add('active');
      }
    }
  });
});

// Mobile menu toggle
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const id = this.getAttribute('href');
    if (id && id !== '#') {
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ============================================
// MAIN ANIMATIONS (run after preloader)
// ============================================
function initAnimations() {
  heroAnimation();
  scrollReveal();
  projectsAnimation();
  aboutAnimation();
  servicesAnimation();
  contactAnimation();
}

// ---- HERO ANIMATION ----
function heroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: 'smoothOut' } });

  // Stagger hero lines
  const words = document.querySelectorAll('.hero-line .word');
  tl.set(words, { y: '100%', opacity: 0 });
  tl.to(words, {
    y: '0%',
    opacity: 1,
    duration: 1,
    stagger: 0.12,
    delay: 0.1
  });

  tl.to('.hero-tag', {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, '-=0.5');

  tl.fromTo('.hero-desc', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, '-=0.5');

  tl.fromTo('.hero-actions', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, '-=0.4');

  tl.fromTo('.hero-stat', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1
  }, '-=0.4');

  tl.fromTo('.hero-scroll', {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 0.6
  }, '-=0.3');

  // Floating orb animation
  gsap.to('.orb-1', { y: -30, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  gsap.to('.orb-2', { y: 20, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });
  gsap.to('.orb-3', { x: 15, y: -15, duration: 10, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 4 });
}

// ---- SCROLL REVEAL ----
function scrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ---- PROJECTS ANIMATION ----
function projectsAnimation() {
  // Animate section header
  gsap.from('.projects .section-tag', {
    scrollTrigger: { trigger: '.projects', start: 'top 80%' },
    opacity: 0, y: 20, duration: 0.6
  });
  gsap.from('.projects .section-title', {
    scrollTrigger: { trigger: '.projects', start: 'top 80%' },
    opacity: 0, y: 30, duration: 0.8, delay: 0.1
  });

  // Animate each project item
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((item, i) => {
    const left = item.querySelector('.project-left');
    const right = item.querySelector('.project-right');

    gsap.from(left, {
      scrollTrigger: { trigger: item, start: 'top 80%' },
      opacity: 0, x: -40, duration: 0.9, ease: 'smoothOut'
    });

    gsap.from(right, {
      scrollTrigger: { trigger: item, start: 'top 80%' },
      opacity: 0, x: 40, duration: 0.9, ease: 'smoothOut', delay: 0.1
    });
  });

  // Counter animation for stats
  const statNums = document.querySelectorAll('.stat-num');
  statNums.forEach(stat => {
    const text = stat.textContent;
    const num = parseFloat(text);
    const suffix = text.replace(/[0-9.]/g, '');

    gsap.from(stat, {
      scrollTrigger: { trigger: stat, start: 'top 90%' },
      textContent: 0,
      duration: 1.5,
      ease: 'power2.out',
      snap: { textContent: 1 },
      onUpdate: function() {
        stat.textContent = Math.floor(this.targets()[0].textContent) + suffix;
      }
    });
  });
}

// ---- ABOUT ANIMATION ----
function aboutAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: '.about', start: 'top 70%' }
  });

  tl.from('.about-left .section-tag', { opacity: 0, y: 20, duration: 0.5 })
    .from('.about-left .section-title', { opacity: 0, y: 30, duration: 0.7 }, '-=0.2')
    .from('.about-text', { opacity: 0, y: 20, duration: 0.6, stagger: 0.15 }, '-=0.4')
    .from('.about-links', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');

  gsap.from('.about-img', {
    scrollTrigger: { trigger: '.about-img', start: 'top 80%' },
    opacity: 0,
    scale: 0.94,
    duration: 1,
    ease: 'smoothOut'
  });

  gsap.from('.about-badge', {
    scrollTrigger: { trigger: '.about-img', start: 'top 70%' },
    opacity: 0, x: -30, duration: 0.8, delay: 0.3
  });

  gsap.from('.about-experience-card', {
    scrollTrigger: { trigger: '.about-img', start: 'top 70%' },
    opacity: 0, x: 30, duration: 0.8, delay: 0.4
  });
}

// ---- SERVICES ANIMATION ----
function servicesAnimation() {
  gsap.from('.services .section-tag', {
    scrollTrigger: { trigger: '.services', start: 'top 80%' },
    opacity: 0, y: 20, duration: 0.6
  });
  gsap.from('.services .section-title', {
    scrollTrigger: { trigger: '.services', start: 'top 80%' },
    opacity: 0, y: 30, duration: 0.8, delay: 0.1
  });

  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 85%' },
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: 'smoothOut',
      delay: (i % 2) * 0.1
    });
  });
}

// ---- CONTACT ANIMATION ----
function contactAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: '.contact', start: 'top 70%' }
  });

  tl.from('.contact .section-tag', { opacity: 0, y: 20, duration: 0.5 })
    .from('.contact-title', { opacity: 0, y: 40, duration: 0.8 }, '-=0.2')
    .from('.contact-subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('.contact-email', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
    .from('.social-item', { opacity: 0, y: 20, stagger: 0.08, duration: 0.5 }, '-=0.2');
}

// ============================================
// MARQUEE PAUSE ON HOVER
// ============================================
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

// ============================================
// PAGE LOAD FADE IN
// ============================================
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ============================================
// PROJECT ITEM MAGNETIC EFFECT
// ============================================
document.querySelectorAll('.project-link').forEach(link => {
  link.closest('.project-item')?.addEventListener('mousemove', (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(link, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.4,
      ease: 'power2.out'
    });
  });

  link.closest('.project-item')?.addEventListener('mouseleave', () => {
    gsap.to(link, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
  });
});

// ============================================
// INITIAL STATE SETUP (for hero elements before anim)
// ============================================
gsap.set('.hero-tag', { opacity: 0, y: 20 });
gsap.set('.hero-desc', { opacity: 0, y: 20 });
gsap.set('.hero-actions', { opacity: 0, y: 20 });
gsap.set('.hero-scroll', { opacity: 0 });
