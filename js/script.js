// Mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Close the mobile menu after a link is selected
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Add a subtle shadow when the page is scrolled
const siteHeader = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (!siteHeader) return;
  siteHeader.style.boxShadow = window.scrollY > 10 ? '0 10px 30px rgba(43, 18, 69, 0.08)' : 'none';
});

// Set the current year in the footer
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
