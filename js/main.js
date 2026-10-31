/**
 * Vineet Tiwari — Portfolio JavaScript
 * Modern, dependency-free interactive enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderScroll();
  initSectionRouter();
  initMobileMenu();
  initCopyButtons();
});

/**
 * 0. Theme Toggle Controller (Charcoal Black vs Clean Alabaster White)
 */
function initThemeToggle() {
  const desktopBtn = document.getElementById('themeToggle');
  const mobileBtn = document.getElementById('mobileThemeToggle');

  const getPreferredTheme = () => {
    return localStorage.getItem('vt_theme') || 'dark';
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vt_theme', theme);
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  // Ensure current theme matches stored
  setTheme(getPreferredTheme());

  if (desktopBtn) {
    desktopBtn.addEventListener('click', toggleTheme);
  }

  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleTheme);
  }
}

/**
 * 1. Header scroll listener to toggle elevated style
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Section Router — Tabbed / Single-Active-Section Controller
 * Only the selected section is opened; all other sections are hidden.
 */
function initSectionRouter() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const validIds = sections.map((s) => s.id);
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!sections.length) return;

  function switchSection(targetId, updateHistory = true) {
    const id = validIds.includes(targetId) ? targetId : 'hero';

    // Show only the target section; hide others
    sections.forEach((sec) => {
      if (sec.id === id) {
        sec.classList.add('active-section');
      } else {
        sec.classList.remove('active-section');
      }
    });

    // Update active state in desktop header navigation
    desktopLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update active state in mobile navigation drawer
    mobileLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Immediately reset scroll to top so the opened section begins at top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update URL hash without causing a default jump
    if (updateHistory) {
      if (window.location.hash !== `#${id}`) {
        history.pushState(null, '', `#${id}`);
      }
    }
  }

  // Intercept all internal anchor clicks pointing to #sectionId
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const targetId = href.substring(1);
    if (validIds.includes(targetId)) {
      e.preventDefault();
      switchSection(targetId, true);

      // Close mobile drawer if open
      const drawer = document.getElementById('mobileDrawer');
      const toggleBtn = document.getElementById('menuToggle');
      if (drawer && drawer.classList.contains('is-open')) {
        drawer.classList.remove('is-open');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  // Handle browser Back / Forward buttons
  window.addEventListener('popstate', () => {
    const currentHash = window.location.hash.replace('#', '') || 'hero';
    switchSection(currentHash, false);
  });

  window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash.replace('#', '') || 'hero';
    switchSection(currentHash, false);
  });

  // Initial load: Open section specified in URL hash (e.g. #projects) or default to #hero
  const initialHash = window.location.hash.replace('#', '') || 'hero';
  switchSection(initialHash, false);
}

/**
 * 3. Mobile Drawer Menu Navigation
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const drawer = document.getElementById('mobileDrawer');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      drawer.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  toggleBtn.addEventListener('click', toggleMenu);
}

/**
 * 4. Clipboard helper with toast notification
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');

  if (!copyButtons.length) return;

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });

  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}
