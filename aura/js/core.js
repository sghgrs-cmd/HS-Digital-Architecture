/* ============================================================================
   AURA MEDSPA — ZERO-LAG CORE ENGINE
   - Instant page navigation (zero transition overlay delay)
   - Luxury Cursor ported 1:1 from Agoura Signature (with pointerleave reset,
     scrollbar stand-down, iframe stand-down & middle-click autoscroll disc)
   - Fullscreen Mobile Drawer with locked body scroll (position: fixed + savedScrollY)
   ============================================================================ */
'use strict';

(function () {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const lerp = (a, b, t) => a + (b - a) * t;

  /* --------------------------------------------------------------------------
     1. LUXURY CURSOR (1:1 Agoura Signature settings in Emerald-Black)
     -------------------------------------------------------------------------- */
  function initCursor() {
    if (!FINE || REDUCED) return;

    const dot = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    const label = document.getElementById('cur-label');
    if (!dot || !ring) return;

    const root = document.documentElement;
    const hide = document.createElement('style');
    hide.textContent =
      'html, html *{cursor:none!important} ' +
      '[data-cursor-off], [data-cursor-off] *{cursor:auto!important} ' +
      '::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-button, ::-webkit-scrollbar-corner{cursor:none!important} ' +
      'html.autoscroll-on #cur-dot, html.autoscroll-on #cur-ring{opacity:0!important;visibility:hidden!important}';
    document.head.appendChild(hide);

    const disc = document.createElement('div');
    disc.className = 'autoscroll-disc';
    disc.setAttribute('aria-hidden', 'true');
    disc.innerHTML =
      '<svg viewBox="0 0 24 24"><path class="autoscroll-disc__up" d="M8 7l4-4 4 4"/><circle class="autoscroll-disc__dot" cx="12" cy="12" r="2.2"/><path class="autoscroll-disc__dn" d="M8 17l4 4 4-4"/></svg>';
    document.body.appendChild(disc);

    let autoScrollActive = false;
    let autoOriginX = 0, autoOriginY = 0, autoCurX = 0, autoCurY = 0, autoDownTime = 0;
    let autoRaf = null;
    let live = false, off = false, blocked = false;

    const show = (state) => {
      const want = (off || blocked || autoScrollActive) ? false : state;
      if (want === live) return;
      live = want;
      root.classList.toggle('cursor-on', want);
    };

    const m = { x: -100, y: -100 };
    const d = { x: -100, y: -100 };
    const r = { x: -100, y: -100 };
    let raf = null;

    let edgeX = 0, edgeY = 0;
    const measure = () => { edgeX = root.clientWidth; edgeY = root.clientHeight; };
    measure();
    window.addEventListener('resize', measure, { passive: true });

    const EDGE = 3;
    const inGutter = (x, y) =>
      (window.innerWidth > edgeX && x >= edgeX - EDGE) ||
      (window.innerHeight > edgeY && y >= edgeY - EDGE);

    const tick = () => {
      d.x = lerp(d.x, m.x, 0.85); d.y = lerp(d.y, m.y, 0.85);
      r.x = lerp(r.x, m.x, 0.15); r.y = lerp(r.y, m.y, 0.15);
      dot.style.transform = `translate(${d.x.toFixed(2)}px, ${d.y.toFixed(2)}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${r.x.toFixed(2)}px, ${r.y.toFixed(2)}px) translate(-50%,-50%)`;
      const settled = Math.abs(m.x - r.x) < 0.1 && Math.abs(m.y - r.y) < 0.1;
      raf = settled ? null : requestAnimationFrame(tick);
    };

    const stopAutoScroll = (e) => {
      if (!autoScrollActive) return;
      autoScrollActive = false;
      root.classList.remove('autoscroll-on');
      root.style.scrollBehavior = '';
      disc.classList.remove('is-active', 'is-up', 'is-dn');
      disc.style.transform = `translate(${autoCurX.toFixed(1)}px, ${autoCurY.toFixed(1)}px) translate(-50%, -50%) scale(0.6)`;
      if (autoRaf) { cancelAnimationFrame(autoRaf); autoRaf = null; }
      const fx = (e && typeof e.clientX === 'number') ? e.clientX : autoCurX;
      const fy = (e && typeof e.clientY === 'number') ? e.clientY : autoCurY;
      m.x = d.x = r.x = fx;
      m.y = d.y = r.y = fy;
      dot.style.transform = `translate(${fx.toFixed(2)}px, ${fy.toFixed(2)}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${fx.toFixed(2)}px, ${fy.toFixed(2)}px) translate(-50%,-50%)`;
      show(true);
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tickAutoScroll = () => {
      if (!autoScrollActive) return;
      const dy = autoCurY - autoOriginY;
      const absDy = Math.abs(dy);
      if (absDy > 8) {
        const sign = dy > 0 ? 1 : -1;
        const speed = Math.min(46, Math.pow((absDy - 8) / 8.5, 1.35));
        window.scrollBy({ top: sign * speed, left: 0, behavior: 'instant' });
        disc.classList.toggle('is-dn', sign > 0);
        disc.classList.toggle('is-up', sign < 0);
      } else {
        disc.classList.remove('is-up', 'is-dn');
      }
      autoRaf = requestAnimationFrame(tickAutoScroll);
    };

    window.addEventListener('mousedown', (e) => {
      if (e.button === 1) {
        e.preventDefault();
        if (autoScrollActive) {
          stopAutoScroll(e);
        } else {
          autoScrollActive = true;
          autoOriginX = autoCurX = m.x = d.x = r.x = e.clientX;
          autoOriginY = autoCurY = m.y = d.y = r.y = e.clientY;
          autoDownTime = performance.now();
          root.classList.add('autoscroll-on');
          root.style.scrollBehavior = 'auto';
          show(false);
          disc.style.transform = `translate(${autoCurX.toFixed(1)}px, ${autoCurY.toFixed(1)}px) translate(-50%, -50%) scale(1)`;
          disc.classList.add('is-active');
          if (!autoRaf) autoRaf = requestAnimationFrame(tickAutoScroll);
        }
      } else if (autoScrollActive) {
        e.preventDefault();
        stopAutoScroll(e);
      }
    }, { passive: false });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 1 && autoScrollActive) {
        if ((performance.now() - autoDownTime) > 240 && Math.hypot(e.clientX - autoOriginX, e.clientY - autoOriginY) > 18) {
          stopAutoScroll(e);
        }
      }
    }, { passive: true });

    window.addEventListener('auxclick', (e) => { if (e.button === 1) e.preventDefault(); }, { passive: false });
    window.addEventListener('wheel', () => { if (autoScrollActive) stopAutoScroll(); }, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (autoScrollActive && (e.key === 'Escape' || e.key === 'ArrowUp' || e.key === 'ArrowDown')) stopAutoScroll();
    });

    window.addEventListener('mousemove', (e) => {
      if (autoScrollActive) {
        autoCurX = m.x = d.x = r.x = e.clientX;
        autoCurY = m.y = d.y = r.y = e.clientY;
        disc.style.transform = `translate(${autoCurX.toFixed(1)}px, ${autoCurY.toFixed(1)}px) translate(-50%, -50%) scale(1)`;
        return;
      }
      if (e.target && e.target.closest && e.target.closest('[data-cursor-off]')) {
        blocked = true;
        show(false);
        return;
      }
      blocked = false;
      if (off) return;
      if (inGutter(e.clientX, e.clientY)) { show(false); return; }
      m.x = e.clientX; m.y = e.clientY;
      show(true);
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });

    const CLICKY = 'a, button, [role="tab"], [role="button"], select, label, .xray-card, [data-cursor]';
    const TEXTY = 'input:not([type="hidden"]):not([type="checkbox"]), textarea';

    const setState = (el) => {
      const texty = el && el.closest ? el.closest(TEXTY) : null;
      const clicky = !texty && el && el.closest ? el.closest(CLICKY) : null;
      dot.classList.toggle('is-text', !!texty);
      ring.classList.toggle('is-text', !!texty);
      dot.classList.toggle('is-over', !!clicky);
      ring.classList.toggle('is-over', !!clicky);
      ring.classList.toggle('is-active', !!clicky);

      let txt = '';
      if (clicky) {
        if (clicky.hasAttribute('data-cursor')) txt = clicky.getAttribute('data-cursor');
        else if (clicky.matches('a[href^="tel:"]')) txt = 'Call';
        else if (clicky.matches('a[href*="booking"]')) txt = 'Book';
        else if (clicky.matches('button[type="submit"]')) txt = 'Send';
        else if (clicky.matches('.xray-card')) txt = 'Explore';
      }
      if (label) label.textContent = txt;
    };

    const resetCursorState = () => {
      setState(null);
      show(false);
    };

    document.addEventListener('mouseover', (e) => {
      if (e.target && e.target.closest && e.target.closest('[data-cursor-off]')) {
        blocked = true;
        show(false);
        return;
      }
      blocked = false;
      setState(e.target);
      show(true);
    });
    document.addEventListener('mouseout', (e) => { if (!e.relatedTarget) resetCursorState(); });
    document.addEventListener('mouseleave', resetCursorState);
    document.addEventListener('pointerleave', resetCursorState);
    window.addEventListener('blur', resetCursorState);

    document.querySelectorAll('[data-cursor-off]').forEach((el) => {
      el.addEventListener('mouseenter', () => { blocked = true; show(false); });
      el.addEventListener('mouseleave', () => { blocked = false; show(true); });
    });

    window.addEventListener('touchstart', () => {
      off = true;
      show(false);
      hide.remove();
    }, { once: true, passive: true });
  }

  /* --------------------------------------------------------------------------
     2. STICKY NAV & PROGRESS BAR
     -------------------------------------------------------------------------- */
  function initNav() {
    const nav = document.getElementById('main-nav');
    const bar = document.getElementById('scroll-progress');
    const menu = document.getElementById('mobile-menu');
    if (!nav) return;

    let lastY = 0;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const menuOpen = menu && menu.dataset.open === 'true';
      if (menuOpen) {
        ticking = false;
        return;
      }
      nav.classList.toggle('is-stuck', y > 36);
      if (performance.now() < (window.__suppressNavHideUntil || 0)) {
        nav.classList.remove('is-hidden');
      } else {
        if (y > lastY + 8 && y > 240) nav.classList.add('is-hidden');
        else if (y < lastY - 8 || y < 120) nav.classList.remove('is-hidden');
      }
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? (y / max).toFixed(4) : 0})`;
      }
      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* --------------------------------------------------------------------------
     3. FULLSCREEN MOBILE MENU (Locks background scroll 100%, focus-trap, Escape)
     -------------------------------------------------------------------------- */
  function initMenu() {
    const menu = document.getElementById('mobile-menu');
    const openBtn = document.getElementById('menu-open');
    const closeBtn = document.getElementById('menu-close');
    if (!menu || !openBtn || !closeBtn) return;

    let lastFocus = null;
    let savedScrollY = 0;

    const setOpen = (state, opts = {}) => {
      const next = Boolean(state);
      const wasOpen = menu.dataset.open === 'true';
      if (next === wasOpen && !opts.force) return;

      menu.dataset.open = String(next);
      menu.setAttribute('aria-hidden', String(!next));
      menu.inert = !next;
      openBtn.setAttribute('aria-expanded', String(next));

      if (next) {
        savedScrollY = window.scrollY || window.pageYOffset || 0;
        document.documentElement.classList.add('menu-open');
        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        menu.scrollTop = 0;
        lastFocus = document.activeElement;
        window.setTimeout(() => closeBtn.focus(), 50);
      } else {
        window.__suppressNavHideUntil = performance.now() + 280;
        document.documentElement.classList.remove('menu-open');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
        const nav = document.getElementById('main-nav');
        if (nav) {
          nav.classList.remove('is-hidden');
          nav.classList.toggle('is-stuck', savedScrollY > 36);
        }
        if (!opts.skipFocus && lastFocus && lastFocus.focus) lastFocus.focus();
      }
    };

    menu.inert = true;
    openBtn.addEventListener('click', () => setOpen(!(menu.dataset.open === 'true')));
    closeBtn.addEventListener('click', () => setOpen(false));

    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        const href = a.getAttribute('href') || '';
        setOpen(false, { skipFocus: href.startsWith('#') });
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.dataset.open === 'true') setOpen(false);
    });

    menu.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || menu.dataset.open !== 'true') return;
      const focusable = menu.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. SCROLL REVEALS, COUNTERS, X-RAY CARDS, TABS, ACCORDIONS & FORMS
     -------------------------------------------------------------------------- */
  function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (REDUCED || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;
    const run = (el) => {
      const target = parseFloat(el.dataset.counter);
      const isFloat = target % 1 !== 0;
      const start = performance.now();
      const dur = 1400;
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = target * ease;
        el.textContent = isFloat ? val.toFixed(1) : Math.round(val).toLocaleString('en-US');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (REDUCED || !('IntersectionObserver' in window)) {
      counters.forEach((el) => { el.textContent = el.dataset.counter; });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => io.observe(el));
  }

  function initXRayCards() {
    document.querySelectorAll('.xray-card[data-primary]').forEach((card) => {
      const bg = card.querySelector('.xray-bg');
      if (!bg) return;
      const primary = card.dataset.primary;
      const alt = card.dataset.xray || primary;
      bg.style.backgroundImage = `url('${primary}')`;
      if (alt !== primary) {
        const pre = new Image();
        pre.src = alt;
        card.addEventListener('mouseenter', () => { bg.style.backgroundImage = `url('${alt}')`; });
        card.addEventListener('mouseleave', () => { bg.style.backgroundImage = `url('${primary}')`; });
      }
    });
  }

  function initMarquee() {
    document.querySelectorAll('.marquee-track').forEach((track) => {
      track.innerHTML = track.innerHTML + track.innerHTML;
    });
  }

  function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn[data-tab]');
    const panels = document.querySelectorAll('.treatment-panel');
    if (!tabs.length) return;
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.tab;
        tabs.forEach((t) => {
          t.classList.toggle('active', t === tab);
          t.setAttribute('aria-selected', String(t === tab));
        });
        panels.forEach((p) => {
          const match = p.id === 'panel-' + id;
          p.classList.toggle('active', match);
          if (match) {
            p.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      });
    });
  }

  function initCasesExplorer() {
    const btns = document.querySelectorAll('.case-tab[data-case]');
    if (!btns.length) return;
    const panels = document.querySelectorAll('.case-panel');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.case;
        btns.forEach((b) => {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-selected', String(b === btn));
        });
        panels.forEach((p) => {
          p.hidden = p.id !== 'case-' + key;
        });
      });
    });
  }

  function initAccordions() {
    document.querySelectorAll('.accordion-item').forEach((item) => {
      const header = item.querySelector('.accordion-header');
      const body = item.querySelector('.accordion-body');
      if (!header || !body) return;
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        const parent = item.parentElement;
        if (parent) {
          parent.querySelectorAll('.accordion-item.open').forEach((other) => {
            other.classList.remove('open');
            const ob = other.querySelector('.accordion-body');
            if (ob) ob.style.maxHeight = '0px';
          });
        }
        if (!isOpen) {
          item.classList.add('open');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    const dateInput = form.querySelector('input[type="date"]');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

    const params = new URLSearchParams(window.location.search);
    const preProtocol = params.get('protocol');
    const sel = form.querySelector('#booking-treatment');
    if (preProtocol && sel) {
      Array.from(sel.options).forEach((opt) => {
        if (opt.value === preProtocol) sel.value = preProtocol;
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach((f) => {
        if (!f.value.trim()) {
          f.style.borderColor = '#ef4444';
          valid = false;
          f.addEventListener('input', () => { f.style.borderColor = ''; }, { once: true });
        }
      });
      if (!valid) return;

      const btn = form.querySelector('button[type="submit"]');
      const status = document.getElementById('booking-status');
      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Confirming Suite Availability...';

      window.setTimeout(() => {
        btn.textContent = 'Private Consultation Requested';
        if (status) {
          status.hidden = false;
          status.textContent = 'Thank you. Our West Hollywood concierge will confirm your 90-minute private suite window within 4 hours.';
        }
        window.setTimeout(() => {
          form.reset();
          btn.disabled = false;
          btn.textContent = orig;
        }, 4200);
      }, 600);
    });
  }

  function boot() {
    document.documentElement.classList.add('js-ready');
    initCursor();
    initNav();
    initMenu();
    initMarquee();
    initXRayCards();
    initTabs();
    initCasesExplorer();
    initAccordions();
    initCounters();
    initBookingForm();
    initReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
