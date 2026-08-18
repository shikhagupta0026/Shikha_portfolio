// ===== Loader =====
// Hide as soon as the DOM is ready, with a hard fallback timeout so it
// never gets stuck waiting on slow/blocked external resources (fonts, CDN, etc.)
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hide');
}
document.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 500));
window.addEventListener('load', () => setTimeout(hideLoader, 100));
setTimeout(hideLoader, 2500); // absolute fallback, no matter what

// ===== Mobile menu =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

hamburger?.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// ===== Typer effect =====
const roles = [
  'Data Analyst',
  'Python Developer',
  'Django Developer',
  'Machine Learning Enthusiast',
  'Power BI Analyst'
];
let roleIndex = 0, charIndex = 0, deleting = false;
const typerEl = document.getElementById('typer');

function typeLoop() {
  if (!typerEl) return;
  const current = roles[roleIndex];
  if (!deleting) {
    typerEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(typeLoop, 1400); return; }
  } else {
    typerEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Scroll to top button =====
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn?.classList.toggle('show', window.scrollY > 500);
});
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Navbar background on scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar.style.borderBottomColor = 'rgba(255,201,60,0.2)';
  else navbar.style.borderBottomColor = 'rgba(255,255,255,0.06)';
});
