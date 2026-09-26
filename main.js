// Progressive enhancements: config-driven links, nav state, mobile menu, reveals, parallax, copy email.
(function () {
  window.__site = true;
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cfg = window.SITE || {};

  // ---- email + social links from config.js ----
  if (cfg.email) {
    document.querySelectorAll('[data-email]').forEach(function (a) {
      var q = a.getAttribute('href').split('?')[1];
      a.setAttribute('href', 'mailto:' + cfg.email + (q ? '?' + q : ''));
      if (a.hasAttribute('data-email-text') || a.textContent.indexOf('@') > -1) a.textContent = cfg.email;
    });
  }
  var NAMES = { github: 'GitHub', linkedin: 'LinkedIn', substack: 'Substack', youtube: 'YouTube', instagram: 'Instagram' };
  if (cfg.social) {
    document.querySelectorAll('[data-social]').forEach(function (ul) {
      var html = '';
      Object.keys(NAMES).forEach(function (k) {
        var url = cfg.social[k];
        if (url) html += '<li><a class="u" href="' + url + '" rel="me noopener" target="_blank">' + NAMES[k] + ' ↗</a></li>';
      });
      if (html) ul.innerHTML = html;
    });
  }

  // ---- nav: scrolled state ----
  var nav = document.querySelector('[data-nav]');
  function onScrollNav() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 8); }
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  // ---- mobile menu ----
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.firstElementChild.textContent = open ? 'Close' : 'Menu';
    root.style.overflow = open ? 'hidden' : '';
    if (open) { var first = menu.querySelector('a'); if (first) first.focus(); }
  }
  if (toggle && menu && nav) {
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  // ---- reveal on scroll ----
  var targets = document.querySelectorAll('.reveal, .mask, .hero');
  if (!('IntersectionObserver' in window) || reduce) {
    targets.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  }

  // ---- home: underline the nav item for the section in view ----
  var sectionLinks = document.querySelectorAll('.nav-links [data-section]');
  if (sectionLinks.length && 'IntersectionObserver' in window) {
    var current = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { current[e.target.id] = e.isIntersecting; });
      sectionLinks.forEach(function (a) { a.classList.toggle('is-active', !!current[a.dataset.section]); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sectionLinks.forEach(function (a) {
      var s = document.getElementById(a.dataset.section);
      if (s) spy.observe(s);
    });
  }

  // ---- hero: very mild parallax on the ridge layers ----
  var layers = document.querySelectorAll('.parallax[data-depth]');
  if (layers.length && !reduce) {
    var ticking = false;
    var update = function () {
      var y = Math.min(window.scrollY, 1200);
      layers.forEach(function (l) { l.style.transform = 'translateY(' + (y * parseFloat(l.dataset.depth)).toFixed(1) + 'px)'; });
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
  }

  // ---- copy email ----
  var copy = document.querySelector('[data-copy]');
  var status = document.querySelector('[data-copy-status]');
  if (copy) {
    copy.addEventListener('click', function () {
      var text = cfg.email || document.querySelector('[data-email-text]').textContent.trim();
      var done = function (msg) {
        copy.textContent = msg;
        if (status) status.textContent = msg;
        setTimeout(function () { copy.textContent = 'Copy email'; }, 2400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done('Copied'); }, function () { done('Press Ctrl+C to copy'); });
      } else {
        done('Press Ctrl+C to copy');
      }
    });
  }
})();
