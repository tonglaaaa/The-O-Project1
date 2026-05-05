// Sticky nav
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile nav
function openMenu(){ document.getElementById('mob-nav').classList.add('open'); document.body.style.overflow='hidden'; }
function closeMenu(){ document.getElementById('mob-nav').classList.remove('open'); document.body.style.overflow=''; }

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    e.target.classList.toggle('visible', e.isIntersecting);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  observer.observe(el);
});
