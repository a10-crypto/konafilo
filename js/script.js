// Mobile menu toggle for smaller screens
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Close mobile menu after selecting a link
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (mainNav) {
      mainNav.classList.remove('is-open');
    }
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Add a subtle header shadow on scroll
const siteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (!siteHeader) return;
  if (window.scrollY > 10) {
    siteHeader.style.boxShadow = '0 10px 30px rgba(43, 18, 69, 0.08)';
  } else {
    siteHeader.style.boxShadow = 'none';
  }
});
