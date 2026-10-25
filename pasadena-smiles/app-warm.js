/* ==========================================================================
   TEMPLATE WARM (Style B — Friendly, Editorial & Family-Focused)
   Defensive Vanilla JS:
     0. CLINIC_APPLY(data) — supports data-c, data-c-href, data-c-src, data-c-bg
     1. One-Photo Discipline — single real portrait in Section 01 or monogram fallback
     2. Hero Phone, Credentials & Rating sync from proof / book.phone / doctor
     3. Smart Sticky header + Mobile fixed bottom bar (with strict ARIA inert safety)
     4. Smooth anchor scroll + Mobile drawer with Escape & inert focus safety
     5. Custom accessible treatment listbox + Treatment -> #book scroll
     6. Booking confirmation modal (focus-trap & Escape)
     7. Custom cursor with strict pointerleave reset on document & scrollbar stand-down
     8. Deferred Google Maps iframe loader (0 main-thread blocking on initial load)
   ========================================================================== */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Ensure any [hidden] element is also inert and does not trip aria-hidden-focus */
  function enforceHiddenInertSafety() {
    document.querySelectorAll('[hidden]').forEach((el) => {
      el.inert = true;
      if (el.hasAttribute('aria-hidden')) {
        el.removeAttribute('aria-hidden');
      }
    });
  }
  enforceHiddenInertSafety();

  /* ------------------------------------------------------------------------
     0. CONTENT LOADER — supports data-c, data-c-href, data-c-src, data-c-bg
     ------------------------------------------------------------------------ */
  window.CLINIC_APPLY = function (data) {
    if (!data || typeof data !== 'object') return;
    document.querySelectorAll('[data-c]').forEach((el) => {
      const k = el.getAttribute('data-c');
      if (k && k in data && data[k] != null) {
        if (el.tagName === 'IFRAME' && k === 'map.embed') {
          el.setAttribute('data-map-src', data[k]);
          if (el.getAttribute('data-map-loaded') === 'true') {
            el.setAttribute('src', data[k]);
          }
        } else if (el.tagName === 'A' && k === 'map.directions') {
          el.setAttribute('href', data[k]);
        } else {
          el.innerHTML = data[k];
        }
      }
    });
    document.querySelectorAll('[data-c-href]').forEach((el) => {
      const k = el.getAttribute('data-c-href');
      if (k && k in data && data[k]) el.setAttribute('href', data[k]);
    });
    document.querySelectorAll('[data-c-src]').forEach((el) => {
      const k = el.getAttribute('data-c-src');
      if (k && k in data && data[k]) el.setAttribute('src', data[k]);
    });
    document.querySelectorAll('[data-c-bg]').forEach((el) => {
      const k = el.getAttribute('data-c-bg');
      if (k && k in data && data[k]) el.style.backgroundImage = 'url("' + data[k] + '")';
    });
    syncWarmDynamicBindings();
    initOnePhotoDiscipline();
    initMultiLocations(data);
    enforceHiddenInertSafety();
  };

  /* ------------------------------------------------------------------------
     1. ONE-PHOTO DISCIPLINE (Single doctor portrait in Section 01 or Monogram)
     ------------------------------------------------------------------------ */
  function computeInitials(rawName) {
    if (!rawName) return 'DR';
    const cleaned = String(rawName)
      .replace(/<[^>]*>/g, ' ')
      .replace(/\b(Dr\.?|Doctor|DDS|DMD|MS|PhD|FAGD|MAGD|FAACD|PC|Inc\.?)\b/gi, ' ')
      .replace(/[^A-Za-z\s-]/g, ' ')
      .trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    if (parts.length === 1 && parts[0].length >= 2) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return 'DR';
  }

  function activateMonogramFallback(frame) {
    if (!frame) return;
    frame.classList.add('is-monogram');
    const img = frame.querySelector('img');
    if (img && img.parentNode) {
      img.parentNode.removeChild(img);
    }
    const ph = frame.querySelector('.portrait__ph');
    if (ph) {
      ph.style.display = '';
      ph.removeAttribute('hidden');
      ph.inert = false;
    }
  }

  function initOnePhotoDiscipline() {
    const docNameEl = document.querySelector('[data-c="doctor.name"]');
    const docCredEl = document.querySelector('[data-c="doctor.creds"]') || document.querySelector('[data-c="doctor.school1.v"]');
    const docQuoteEl = document.querySelector('[data-c="doctor.quote"]');
    const docCaptionEl = document.querySelector('[data-c="doctor.caption"]');

    const rawName = docNameEl ? docNameEl.textContent.trim() : '';
    const initials = computeInitials(rawName);
    const credText = docCredEl ? docCredEl.textContent.trim() : '';
    const quoteText = docQuoteEl ? docQuoteEl.textContent.trim() : '';
    const captionText = docCaptionEl ? docCaptionEl.textContent.trim() : '';

    document.querySelectorAll('[data-monogram-initials]').forEach((el) => {
      el.textContent = initials;
    });
    document.querySelectorAll('[data-monogram-name]').forEach((el) => {
      if (rawName && rawName !== 'DATA NOT FOUND') el.textContent = rawName;
    });
    document.querySelectorAll('[data-monogram-cred]').forEach((el) => {
      if (credText && credText !== 'DATA NOT FOUND') el.textContent = credText;
    });
    document.querySelectorAll('[data-monogram-quote]').forEach((el) => {
      if (quoteText && quoteText !== 'DATA NOT FOUND') el.textContent = quoteText;
    });
    const heroDocCap = document.getElementById('hero-doc-caption');
    if (heroDocCap && captionText && captionText !== 'DATA NOT FOUND') {
      heroDocCap.textContent = captionText;
    }

    const frames = document.querySelectorAll('.portrait__frame');
    frames.forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) {
        activateMonogramFallback(frame);
        return;
      }
      const src = img.getAttribute('src') || '';
      if (!src || src === 'DATA NOT FOUND') {
        activateMonogramFallback(frame);
        return;
      }
      const onBroken = () => activateMonogramFallback(frame);
      const onLoaded = () => {
        if (img.naturalWidth > 0) {
          frame.classList.remove('is-monogram');
          const ph = frame.querySelector('.portrait__ph');
          if (ph) {
            ph.style.display = 'none';
            ph.setAttribute('hidden', '');
            ph.inert = true;
          }
        } else {
          activateMonogramFallback(frame);
        }
      };
      img.addEventListener('error', onBroken, { once: true });
      img.addEventListener('load', onLoaded, { once: true });
      if (img.complete) {
        if (img.naturalWidth === 0) {
          activateMonogramFallback(frame);
        } else {
          onLoaded();
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. SYNC HERO CALL BUTTON, PILLARS, RATING & MOBILE BOTTOM BAR LINKS
     ------------------------------------------------------------------------ */
  function syncWarmDynamicBindings() {
    const phoneEl = document.querySelector('[data-c="book.phone"]') || document.querySelector('[data-c="loc.phone1.value"]');
    const phoneText = phoneEl ? phoneEl.textContent.trim() : '';
    const digits = phoneText.replace(/\D/g, '');
    const telHref = digits ? 'tel:+1' + (digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits) : '#book';

    const heroCallBtn = document.getElementById('hero-call-btn');
    const heroCallNum = document.getElementById('hero-call-num');
    if (heroCallNum && phoneText && phoneText !== 'DATA NOT FOUND') {
      heroCallNum.textContent = phoneText;
    }
    if (heroCallBtn && digits) {
      heroCallBtn.setAttribute('href', telHref);
    }

    const mobCallBtn = document.getElementById('mobile-bar-call');
    if (mobCallBtn && digits) {
      mobCallBtn.setAttribute('href', telHref);
    }

    const dirEl = document.querySelector('[data-c="map.directions"]');
    const mobDirBtn = document.getElementById('mobile-bar-directions');
    if (dirEl && mobDirBtn) {
      const dirHref = dirEl.getAttribute('href');
      if (dirHref && dirHref !== '#') {
        mobDirBtn.setAttribute('href', dirHref);
      }
    }

    const locScoreEl = document.querySelector('[data-c="loc.score"]');
    const locSourceEl = document.querySelector('[data-c="loc.source"]');
    const proofValEl = document.querySelector('[data-c="proof.1.value"]');
    const proofLblEl = document.querySelector('[data-c="proof.1.label"]');
    const heroProofBadge = document.getElementById('hero-proof-rating');
    if (heroProofBadge) {
      const score = locScoreEl ? locScoreEl.textContent.trim() : '';
      const src = locSourceEl ? locSourceEl.textContent.trim() : '';
      const pVal = proofValEl ? proofValEl.textContent.trim() : '';
      const pLbl = proofLblEl ? proofLblEl.textContent.trim() : '';
      if (score && score !== 'DATA NOT FOUND' && score !== '—') {
        const cleanScore = score.replace(/★/g, '').trim();
        heroProofBadge.textContent = '\u2605 ' + cleanScore + (src && src !== 'DATA NOT FOUND' ? ' \u00b7 ' + src : ' Google Rating');
      } else if (pVal && pVal !== 'DATA NOT FOUND') {
        const cleanPVal = pVal.replace(/★/g, '').trim();
        heroProofBadge.textContent = '\u2605 ' + cleanPVal + (pLbl ? ' \u00b7 ' + pLbl : '');
      }
    }

    /* Sync Hero Atelier Pills from treatments or proof if present */
    const tx1 = document.querySelector('[data-c="treatment.1.name"]');
    const tx2 = document.querySelector('[data-c="treatment.2.name"]');
    const tx3 = document.querySelector('[data-c="treatment.3.name"]');
    const p1 = document.getElementById('hero-art-pill-1');
    const p2 = document.getElementById('hero-art-pill-2');
    const p3 = document.getElementById('hero-art-pill-3');
    if (p1 && tx1 && tx1.textContent.trim()) p1.textContent = '01 \u00b7 ' + tx1.textContent.trim();
    if (p2 && tx2 && tx2.textContent.trim()) p2.textContent = '02 \u00b7 ' + tx2.textContent.trim();
    if (p3 && tx3 && tx3.textContent.trim()) p3.textContent = '03 \u00b7 ' + tx3.textContent.trim();

    /* Smart Auto-Bento vs Equal 3-Column Layout for 03 · Patient Stories */
    const wordsGrid = document.querySelector('#words .words__grid');
    if (wordsGrid) {
      const quotes = Array.from(wordsGrid.querySelectorAll('.word__q')).map((q) => (q.textContent || '').trim().length);
      if (quotes.length >= 3) {
        const maxLen = Math.max(...quotes);
        const minLen = Math.max(1, Math.min(...quotes));
        if (maxLen < 280 || maxLen / minLen < 1.45) {
          wordsGrid.classList.add('words__grid--equal');
          wordsGrid.classList.remove('words__grid--bento');
        } else {
          wordsGrid.classList.add('words__grid--bento');
          wordsGrid.classList.remove('words__grid--equal');
        }
      }
    }
  }

  initOnePhotoDiscipline();
  syncWarmDynamicBindings();
  if (window.CLINIC_DATA) window.CLINIC_APPLY(window.CLINIC_DATA);

  /* ------------------------------------------------------------------------
     3. SMART HEADER SCROLL STATE + MOBILE FIXED BOTTOM BAR + SCROLL PROGRESS
     ------------------------------------------------------------------------ */
  const header = document.getElementById('header') || document.getElementById('nav');
  const progressBar = document.querySelector('.scroll-bar');
  const mobileBar = document.getElementById('mobile-bottom-bar');
  const heroSection = document.querySelector('.hero') || document.getElementById('top');

  function getScrollY() {
    return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  let lastY = getScrollY();
  let scrollTicking = false;

  function updateScrollState() {
    const y = getScrollY();
    if (header) {
      header.classList.toggle('is-scrolled', y > 24);

      const drawer = document.getElementById('mobile-menu');
      const isDrawerOpen = drawer && drawer.classList.contains('is-open');
      if (!isDrawerOpen) {
        if (y > lastY + 6 && y > 160) {
          header.classList.add('is-hidden');
        } else if (y < lastY - 4 || y <= 80) {
          header.classList.remove('is-hidden');
        }
      } else {
        header.classList.remove('is-hidden');
      }
    }
    if (progressBar) {
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const max = Math.max(1, docHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, y / max));
      progressBar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    }
    if (mobileBar) {
      let threshold = 240;
      if (heroSection) {
        threshold = Math.min(340, Math.max(180, heroSection.offsetHeight * 0.45));
      }
      const isMobileViewport = window.innerWidth <= 768;
      const showMobileBar = isMobileViewport && y > threshold;
      mobileBar.classList.toggle('is-visible', showMobileBar);
      mobileBar.setAttribute('aria-hidden', showMobileBar ? 'false' : 'true');
      mobileBar.inert = !showMobileBar;
    }
    lastY = y;
    scrollTicking = false;
  }

  function onScroll() {
    if (!scrollTicking) {
      requestAnimationFrame(updateScrollState);
      scrollTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateScrollState();

  /* ------------------------------------------------------------------------
     4. MOBILE DRAWER + SMOOTH ANCHOR SCROLL (WITH STRICT INERT FOCUS SAFETY)
     ------------------------------------------------------------------------ */
  const burger = document.querySelector('.burger');
  const drawer = document.getElementById('mobile-menu');
  let drawerOpen = false;

  if (drawer) {
    drawer.inert = true;
  }

  function setDrawer(open) {
    drawerOpen = Boolean(open);
    if (burger) {
      burger.classList.toggle('is-open', drawerOpen);
      burger.setAttribute('aria-expanded', String(drawerOpen));
    }
    if (drawer) {
      drawer.classList.toggle('is-open', drawerOpen);
      drawer.setAttribute('aria-hidden', String(!drawerOpen));
      drawer.inert = !drawerOpen;
    }
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
  }

  if (burger) {
    burger.addEventListener('click', () => setDrawer(!drawerOpen));
  }
  if (drawer) {
    drawer.querySelectorAll('[data-nav], [data-menu-close], a').forEach((a) => {
      a.addEventListener('click', () => setDrawer(false));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (drawerOpen) setDrawer(false);
      if (id === '#location') {
        const mapIframe = document.querySelector('.map__iframe');
        if (mapIframe && mapIframe.getAttribute('data-map-src') && mapIframe.getAttribute('data-map-loaded') !== 'true') {
          mapIframe.setAttribute('src', mapIframe.getAttribute('data-map-src'));
          mapIframe.setAttribute('data-map-loaded', 'true');
        }
      }
      const top = target.getBoundingClientRect().top + getScrollY() - 76;
      window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  });

  /* ------------------------------------------------------------------------
     5. CUSTOM ACCESSIBLE SELECT (LISTBOX) + TREATMENT -> BOOK INTERACTION
     ------------------------------------------------------------------------ */
  const nativeSelect = document.getElementById('f-treat');
  let selectTreatByValueOrText = null;

  if (nativeSelect && nativeSelect.parentElement) {
    const field = nativeSelect.parentElement;
    const labelEl = field.querySelector('.field__label');
    if (labelEl && !labelEl.id) labelEl.id = 'f-treat-label';

    const wrap = document.createElement('div');
    wrap.className = 'cselect';
    wrap.setAttribute('data-cselect', '');

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'cselect__btn';
    trigger.id = 'f-treat-btn';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    if (labelEl) trigger.setAttribute('aria-labelledby', labelEl.id);

    const triggerText = document.createElement('span');
    triggerText.className = 'cselect__val';
    const triggerArrow = document.createElement('span');
    triggerArrow.className = 'cselect__chev';
    triggerArrow.setAttribute('aria-hidden', 'true');
    trigger.appendChild(triggerText);
    trigger.appendChild(triggerArrow);

    const list = document.createElement('ul');
    list.className = 'cselect__list';
    list.id = 'f-treat-Menu';
    list.setAttribute('role', 'listbox');
    list.tabIndex = -1;
    if (labelEl) list.setAttribute('aria-labelledby', labelEl.id);

    function rebuildOptions() {
      list.innerHTML = '';
      const opts = Array.from(nativeSelect.options);
      opts.forEach((opt, i) => {
        const li = document.createElement('li');
        li.className = 'cselect__opt';
        li.id = 'f-treat-opt-' + i;
        li.setAttribute('role', 'option');
        li.setAttribute('data-value', opt.value);
        li.textContent = opt.textContent;
        const isSel = i === nativeSelect.selectedIndex;
        li.setAttribute('aria-selected', isSel ? 'true' : 'false');
        if (isSel) {
          li.classList.add('is-selected');
          triggerText.textContent = opt.textContent;
        }
        li.addEventListener('click', (e) => {
          e.stopPropagation();
          chooseIndex(i, true);
        });
        list.appendChild(li);
      });
    }

    function chooseIndex(idx, closeAfter) {
      const opts = Array.from(nativeSelect.options);
      if (idx < 0 || idx >= opts.length) return;
      nativeSelect.selectedIndex = idx;
      nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
      const items = Array.from(list.querySelectorAll('.cselect__opt'));
      items.forEach((li, i) => {
        const sel = i === idx;
        li.classList.toggle('is-selected', sel);
        li.setAttribute('aria-selected', sel ? 'true' : 'false');
      });
      triggerText.textContent = opts[idx].textContent;
      if (closeAfter) closeMenu(true);
    }

    let isOpen = false;
    function openMenu() {
      if (isOpen) return;
      rebuildOptions();
      isOpen = true;
      wrap.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu(focusTrigger) {
      if (!isOpen) return;
      isOpen = false;
      wrap.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      if (focusTrigger) trigger.focus();
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen ? closeMenu(false) : openMenu();
    });

    document.addEventListener('click', (e) => {
      if (isOpen && !wrap.contains(e.target)) closeMenu(false);
    });

    rebuildOptions();
    /* Hide native select via hidden + inert so Lighthouse aria-hidden-focus passes 100% */
    nativeSelect.classList.add('is-enhanced');
    nativeSelect.hidden = true;
    nativeSelect.inert = true;
    nativeSelect.tabIndex = -1;
    nativeSelect.removeAttribute('aria-hidden');
    wrap.appendChild(trigger);
    wrap.appendChild(list);
    field.appendChild(wrap);

    selectTreatByValueOrText = function (label) {
      if (!label) return;
      const clean = label.trim().toLowerCase();
      let opts = Array.from(nativeSelect.options);
      let matchIdx = opts.findIndex((o) => {
        const t = o.textContent.trim().toLowerCase();
        const v = (o.value || '').trim().toLowerCase();
        return t === clean || v === clean || t.includes(clean) || clean.includes(t);
      });
      if (matchIdx === -1) {
        const newOpt = document.createElement('option');
        newOpt.value = label.trim();
        newOpt.textContent = label.trim();
        nativeSelect.appendChild(newOpt);
        rebuildOptions();
        matchIdx = nativeSelect.options.length - 1;
      }
      chooseIndex(matchIdx, false);
      wrap.classList.add('is-highlighted');
      setTimeout(() => wrap.classList.remove('is-highlighted'), 1400);
    };
  }

  /* Interactive treatment card or Hero pillar click -> scroll to #book & select treatment */
  const txRows = document.querySelectorAll('.tx__row, [data-pick-treatment]');
  txRows.forEach((row) => {
    row.addEventListener('click', (e) => {
      if (e.target && e.target.closest('a')) return;
      const nameEl = row.querySelector('.tx__name, [data-c$=".name"]');
      const rawText = nameEl ? nameEl.textContent.trim() : row.textContent.replace(/^0\d\s*\u00b7\s*/, '').trim();
      if (rawText && selectTreatByValueOrText) {
        selectTreatByValueOrText(rawText);
      } else if (rawText && nativeSelect) {
        const opts = Array.from(nativeSelect.options);
        const idx = opts.findIndex((o) => o.textContent.trim().toLowerCase() === rawText.toLowerCase());
        if (idx >= 0) nativeSelect.selectedIndex = idx;
      }
      const bookEl = document.getElementById('book');
      if (bookEl) {
        const top = bookEl.getBoundingClientRect().top + getScrollY() - 72;
        window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
        setTimeout(() => {
          const nameInput = document.getElementById('f-name');
          if (nameInput) nameInput.focus({ preventScroll: true });
        }, prefersReduced ? 50 : 550);
      }
    });

    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        row.click();
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. BOOKING FORM & ACCESSIBLE CONFIRMATION MODAL (Focus-trap + Escape)
     ------------------------------------------------------------------------ */
  const form = document.getElementById('book-form');
  const sentBox = document.getElementById('sent');
  const modal = document.getElementById('book-modal');
  const modalSummary = document.getElementById('book-modal-summary');
  const modalCloseBtn = document.getElementById('book-modal-close');
  let lastFocusedEl = null;

  function openBookModal(summaryText) {
    if (!modal) return;
    lastFocusedEl = document.activeElement;
    if (modalSummary && summaryText) {
      modalSummary.textContent = summaryText;
    }
    modal.hidden = false;
    modal.inert = false;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeBookModal() {
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.inert = true;
    modal.hidden = true;
    modal.removeAttribute('aria-hidden');
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeBookModal);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.hasAttribute('data-modal-backdrop')) {
        closeBookModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (drawerOpen) setDrawer(false);
      if (modal && modal.classList.contains('is-open')) {
        e.preventDefault();
        closeBookModal();
      }
    }
    if (e.key === 'Tab' && modal && modal.classList.contains('is-open')) {
      const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  if (form) {
    const submitLabel = document.getElementById('submit-label') || form.querySelector('[data-c="form.submit"]');
    const origText = submitLabel ? submitLabel.textContent : 'Book a Visit';

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('f-name');
      const phoneInput = document.getElementById('f-phone');
      const valid = (!nameInput || nameInput.value.trim().length > 0) &&
                    (!phoneInput || phoneInput.value.trim().length > 0);
      if (!valid) {
        const firstEmpty = [nameInput, phoneInput].find((el) => el && !el.value.trim());
        if (firstEmpty) {
          firstEmpty.focus();
          firstEmpty.style.borderColor = 'var(--accent-terracotta)';
          setTimeout(() => { firstEmpty.style.borderColor = ''; }, 1800);
        }
        return;
      }
      const chosenService = nativeSelect && nativeSelect.options[nativeSelect.selectedIndex]
        ? nativeSelect.options[nativeSelect.selectedIndex].textContent
        : 'Dental Visit';
      const patientName = nameInput ? nameInput.value.trim() : 'Friend';

      form.classList.add('is-sent');
      if (sentBox) sentBox.setAttribute('data-on', 'true');
      if (submitLabel) submitLabel.textContent = 'Request Received';
      openBookModal('Thank you, ' + patientName + '. We have noted your interest in ' + chosenService + ' and our front desk will reach out within two working days.');

      setTimeout(() => {
        form.reset();
        form.classList.remove('is-sent');
        if (submitLabel) submitLabel.textContent = origText;
      }, 4500);
    });
  }

  /* ------------------------------------------------------------------------
     7. CUSTOM CURSOR WITH STRICT POINTERLEAVE RESET & SCROLLBAR STAND-DOWN
     ------------------------------------------------------------------------ */
  const lerp = (a, b, t) => a + (b - a) * t;

  function initCursor() {
    if (!finePointer || prefersReduced) return;

    const cursor = document.querySelector('.cursor');
    const label = cursor ? cursor.querySelector('.cursor__label') : null;
    if (!cursor) return;

    const root = document.documentElement;
    const hide = document.createElement('style');
    hide.textContent = 'html, html *{cursor:none!important} ::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-button, ::-webkit-scrollbar-corner, ::-webkit-resizer{cursor:none!important}';
    document.head.appendChild(hide);

    /* Prevent middle-click (mouse wheel press) browser autoscroll from spawning a 2nd native OS cursor */
    window.addEventListener('mousedown', (e) => {
      if (e.button === 1) e.preventDefault();
    }, { passive: false });
    window.addEventListener('auxclick', (e) => {
      if (e.button === 1) e.preventDefault();
    }, { passive: false });

    let live = false;
    let off = false;
    let blocked = false;

    const show = (state) => {
      const want = (off || blocked) ? false : state;
      if (want === live) return;
      live = want;
      root.classList.toggle('cursor-on', want);
    };

    let edgeX = 0;
    let edgeY = 0;
    const measure = () => {
      edgeX = root.clientWidth;
      edgeY = root.clientHeight;
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });

    const EDGE = 4;
    const inGutter = (x, y) => {
      const hasVertScrollbar = root.scrollHeight > window.innerHeight;
      return (
        (window.innerWidth > edgeX && x >= edgeX - EDGE) ||
        (hasVertScrollbar && x >= window.innerWidth - 15) ||
        (window.innerHeight > edgeY && y >= edgeY - EDGE)
      );
    };

    const m = { x: -100, y: -100 };
    const d = { x: -100, y: -100 };
    let raf = null;

    const tick = () => {
      measure();
      d.x = lerp(d.x, m.x, 0.85);
      d.y = lerp(d.y, m.y, 0.85);

      cursor.style.transform = `translate(${d.x.toFixed(2)}px, ${d.y.toFixed(2)}px) translate(-50%,-50%)`;

      const settled = Math.abs(m.x - d.x) < 0.1 && Math.abs(m.y - d.y) < 0.1;
      raf = settled ? null : requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', (e) => {
      if (off) return;
      if (inGutter(e.clientX, e.clientY)) {
        show(false);
        return;
      }
      m.x = e.clientX;
      m.y = e.clientY;
      show(true);
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });

    const CLICKY = 'a, button, [role="radio"], [role="option"], [role="combobox"], label, summary, .tx__row, [data-pick-treatment], [data-cursor]';
    const TEXTY = 'input:not([type="hidden"]), textarea';

    const setState = (el) => {
      const texty = el && el.closest ? el.closest(TEXTY) : null;
      const clicky = !texty && el && el.closest ? el.closest(CLICKY) : null;
      cursor.classList.toggle('is-text', !!texty);
      cursor.classList.toggle('is-over', !!clicky);
      cursor.classList.toggle('is-active', !!clicky);

      let cursorText = '';
      if (clicky) {
        if (clicky.hasAttribute('data-cursor')) {
          cursorText = clicky.getAttribute('data-cursor');
        } else if (clicky.matches('.warm-ai-btn')) {
          cursorText = 'Ask AI';
        } else if (clicky.matches('a[href^="tel:"]')) {
          cursorText = 'Call';
        } else if (clicky.matches('a[href="#book"]')) {
          cursorText = 'Book';
        } else if (clicky.matches('button[type="submit"]')) {
          cursorText = 'Send';
        } else if (clicky.matches('[data-c="map.directions"]')) {
          cursorText = 'Maps';
        } else if (clicky.matches('.loc-branch-pill')) {
          cursorText = 'Office';
        }
      }
      if (label) label.textContent = cursorText;
    };

    const resetCursorState = () => {
      setState(null);
      show(false);
    };

    document.addEventListener('mouseover', (e) => {
      if (inGutter(e.clientX, e.clientY)) {
        show(false);
        return;
      }
      setState(e.target);
      show(true);
    });
    document.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget) resetCursorState();
    });
    document.addEventListener('mouseleave', resetCursorState);
    document.addEventListener('pointerleave', resetCursorState);
    window.addEventListener('blur', resetCursorState);

    document.querySelectorAll('[data-cursor-off]').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        blocked = true;
        show(false);
      });
      el.addEventListener('mouseleave', () => {
        blocked = false;
        show(true);
      });
    });

    window.addEventListener('touchstart', () => {
      off = true;
      resetCursorState();
      hide.remove();
    }, { once: true, passive: true });
  }
  initCursor();

  /* ------------------------------------------------------------------------
     8. DEFERRED GOOGLE MAPS LOADER (Zero Initial Mobile CPU/Network Blocking)
     ------------------------------------------------------------------------ */
  function initLazyMap() {
    const mapIframe = document.querySelector('.map__iframe');
    if (!mapIframe) return;
    const loadMap = () => {
      if (mapIframe.getAttribute('data-map-loaded') === 'true') return;
      const src = mapIframe.getAttribute('data-map-src');
      if (src && src !== 'about:blank') {
        mapIframe.setAttribute('src', src);
        mapIframe.setAttribute('data-map-loaded', 'true');
      }
    };
    if ('IntersectionObserver' in window) {
      const mapIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadMap();
              mapIo.disconnect();
            }
          });
        },
        { rootMargin: '600px 0px' }
      );
      mapIo.observe(mapIframe);
    } else {
      window.addEventListener('load', () => setTimeout(loadMap, 1500), { once: true });
    }
  }
  initLazyMap();

  /* ------------------------------------------------------------------------
     8b. SMART MULTI-LOCATION / MULTI-BRANCH SUPPORT (2+ Physical Offices)
     ------------------------------------------------------------------------ */
  function initMultiLocations(data) {
    const rawLocations =
      (data && Array.isArray(data.locations) && data.locations) ||
      (window.CLINIC_DATA && Array.isArray(window.CLINIC_DATA.locations) && window.CLINIC_DATA.locations) ||
      (Array.isArray(window.CLINIC_LOCATIONS) && window.CLINIC_LOCATIONS) ||
      [];
    if (rawLocations.length < 2) return;

    const locInfo = document.querySelector('#location .info');
    if (locInfo && !locInfo.querySelector('.loc-branches')) {
      const bar = document.createElement('div');
      bar.className = 'loc-branches';
      bar.setAttribute('role', 'tablist');
      bar.setAttribute('aria-label', 'Practice Locations');

      rawLocations.forEach((loc, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'loc-branch-pill' + (idx === 0 ? ' is-active' : '');
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
        btn.setAttribute('data-cursor', 'Office');
        const labelText = loc.name || loc.city || `Office ${idx + 1}`;
        btn.innerHTML = `<span class="loc-branch-pill__dot" aria-hidden="true"></span><span>${labelText}</span>`;
        btn.addEventListener('click', () => {
          bar.querySelectorAll('.loc-branch-pill').forEach((b, i) => {
            b.classList.toggle('is-active', i === idx);
            b.setAttribute('aria-selected', i === idx ? 'true' : 'false');
          });
          const addrEl = document.querySelector('[data-c="loc.address"]');
          if (addrEl && loc.address) addrEl.innerHTML = loc.address;
          const ph1El = document.querySelector('[data-c="loc.phone1.value"]');
          if (ph1El && loc.phone) {
            ph1El.textContent = loc.phone;
            const phLink = ph1El.closest('a');
            if (phLink && loc.phoneHref) phLink.setAttribute('href', loc.phoneHref);
          }
          const dirEl = document.querySelector('[data-c="map.directions"]');
          if (dirEl && loc.mapDirections) dirEl.setAttribute('href', loc.mapDirections);
          const mapIframe = document.querySelector('.map__iframe');
          if (mapIframe && loc.mapEmbed) {
            mapIframe.setAttribute('data-map-src', loc.mapEmbed);
            mapIframe.setAttribute('src', loc.mapEmbed);
            mapIframe.setAttribute('data-map-loaded', 'true');
          }
        });
        bar.appendChild(btn);
      });
      locInfo.insertBefore(bar, locInfo.firstChild);
    }

    const bookAddr = document.querySelector('[data-c="book.address"]');
    if (bookAddr && !bookAddr.hasAttribute('data-multi-rendered')) {
      bookAddr.setAttribute('data-multi-rendered', 'true');
      bookAddr.innerHTML = rawLocations
        .map((loc) => `<strong>${loc.name || loc.city || 'Office'}:</strong> ${loc.address || ''}`)
        .join('<br>');
    }
  }
  initMultiLocations(window.CLINIC_DATA);

  /* ------------------------------------------------------------------------
     9. GENTLE SCROLL REVEAL & HERO ATELIER PARALLAX
     ------------------------------------------------------------------------ */
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  const atelierCard = document.querySelector('.hero-atelier');
  const atelierSvg = document.querySelector('.hero-atelier__svg');
  if (atelierCard && atelierSvg && finePointer && !prefersReduced) {
    atelierCard.addEventListener('mousemove', (e) => {
      const r = atelierCard.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 8;
      const ny = ((e.clientY - r.top) / r.height - 0.5) * 8;
      atelierSvg.style.transform = `translate3d(${nx.toFixed(2)}px, ${ny.toFixed(2)}px, 0)`;
    }, { passive: true });
    atelierCard.addEventListener('mouseleave', () => {
      atelierSvg.style.transform = 'translate3d(0, 0, 0)';
    });
  }

  /* ------------------------------------------------------------------------
     10. SCROLL-ASSEMBLED CORNER GEOMETRIC CIRCLES (.warm-figmark)
     ------------------------------------------------------------------------ */
  const figmarks = Array.from(document.querySelectorAll('[data-warm-figmark]'));
  if (figmarks.length > 0) {
    const figItems = figmarks.map((el) => ({
      el,
      paths: Array.from(el.querySelectorAll('[data-warm-draw]')),
    }));

    if (prefersReduced) {
      figItems.forEach((item) => {
        item.paths.forEach((p) => { p.style.strokeDashoffset = '0'; });
      });
    } else {
      const updateFigmarks = () => {
        const vh = window.innerHeight || 800;
        figItems.forEach((item) => {
          const r = item.el.getBoundingClientRect();
          const raw = (vh - r.top) / (vh * 0.95);
          const prog = Math.max(0, Math.min(1, raw));
          item.paths.forEach((p, idx) => {
            const delayed = Math.max(0, Math.min(1, (prog - idx * 0.08) / (1 - idx * 0.08)));
            p.style.strokeDashoffset = (1 - delayed).toFixed(3);
          });
        });
      };
      window.addEventListener('scroll', updateFigmarks, { passive: true });
      window.addEventListener('resize', updateFigmarks, { passive: true });
      updateFigmarks();
    }
  }
})();
