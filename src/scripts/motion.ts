/* ============================================================
   Global motion layer — recreated from the design's runMotion().
   Uses the `motion` library (motion.dev). Everything is guarded
   behind (hover:hover) + prefers-reduced-motion; content is fully
   visible without JS (reveal/count-up default to their final state).
   ============================================================ */
import { animate, inView, scroll, spring } from 'motion';

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canHover =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(hover:hover)').matches;

function scrollReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('bc-in'));
    return;
  }
  els.forEach((el) => el.classList.add('bc-reveal'));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const parent = en.target.parentElement;
        const sibs = parent
          ? Array.from(parent.querySelectorAll<HTMLElement>(':scope > [data-reveal]'))
          : [];
        const idx = Math.max(0, sibs.indexOf(en.target as HTMLElement));
        (en.target as HTMLElement).style.transitionDelay = idx * 80 + 'ms';
        en.target.classList.add('bc-in');
        io.unobserve(en.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  els.forEach((el) => io.observe(el));
}

function headerScroll() {
  const hw = document.querySelector('.bc-headwrap');
  if (!hw) return;
  const onScroll = () => hw.classList.toggle('bc-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function customCursor() {
  const dot = document.querySelector<HTMLElement>('.bc-cursor');
  if (!dot || !canHover) return;
  let mx = innerWidth / 2,
    my = innerHeight / 2,
    cx = mx,
    cy = my;
  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.opacity = '1';
  });
  const loop = () => {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    dot.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.querySelectorAll('a,button,[data-tilt]').forEach((el) => {
    el.addEventListener('pointerenter', () => dot.classList.add('bc-cursor-lg'));
    el.addEventListener('pointerleave', () => dot.classList.remove('bc-cursor-lg'));
  });
}

function magneticButtons() {
  if (!canHover) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.3;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.45;
      animate(el, { x, y }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
    });
    el.addEventListener('pointerleave', () => {
      animate(el, { x: 0, y: 0 }, { type: spring, stiffness: 260, damping: 14 });
    });
  });
}

function tiltCards() {
  if (!canHover) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      animate(
        el,
        { transformPerspective: 800, rotateY: px * 9, rotateX: -py * 9, y: -8 },
        { duration: 0.3, ease: 'easeOut' }
      );
    });
    el.addEventListener('pointerleave', () => {
      animate(el, { rotateX: 0, rotateY: 0, y: 0 }, { type: spring, stiffness: 220, damping: 16 });
    });
  });
}

function countUp() {
  document.querySelectorAll<HTMLElement>('.bc-num').forEach((el) => {
    const to = parseInt(el.getAttribute('data-to') || '0', 10) || 0;
    if (prefersReduced) {
      el.textContent = String(to);
      return;
    }
    let done = false;
    inView(
      el,
      () => {
        if (done) return;
        done = true;
        animate(0, to, {
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => {
            el.textContent = String(Math.round(v));
          },
        });
      },
      { amount: 0.6 }
    );
  });
}

function parallax() {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const sp = parseFloat(el.getAttribute('data-parallax') || '0.2') || 0.2;
    try {
      scroll((p: number) => {
        el.style.transform = `translateY(${p * 320 * sp}px)`;
      });
    } catch {
      /* no-op */
    }
  });
}

function init() {
  scrollReveal();
  headerScroll();
  if (prefersReduced) {
    // Counts/reveals already default to final state via CSS + the guard above.
    countUp();
    return;
  }
  customCursor();
  magneticButtons();
  tiltCards();
  countUp();
  parallax();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
