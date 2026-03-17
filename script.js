/* ══════════════════════════════════════════════
   STEP UP DIGITAL SOLUTIONS v3 — script.js
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Año actual ── */
  document.querySelectorAll('.year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ── Scroll reveal ── */
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseInt(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('in'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
  els.forEach(el => io.observe(el));

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 32, behavior: 'smooth' });
    });
  });

  /* ── WA float entrance ── */
  const waFloat = document.querySelector('.wa-float');
  if (waFloat) {
    setTimeout(() => waFloat.classList.add('show'), 1100);
  }

  /* ── Servicio card: barrita visible en hover desde JS (refuerzo) ── */
  document.querySelectorAll('.srv').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.srv__bar').style.transform = 'scaleX(1)';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.srv__bar').style.transform = 'scaleX(0)';
    });
  });

});
