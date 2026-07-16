// GET THE MENU BUTTON AND MENU
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

// OPEN/CLOSE MENU WHEN HAMBURGER IS CLICKED
menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('is-open');
  mainNav.classList.toggle('is-open');
});

// CLOSE MENU WHEN YOU CLICK A LINK
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuToggle.classList.remove('is-open');
    mainNav.classList.remove('is-open');
  });
});

// CLOSE MENU WHEN YOU CLICK OUTSIDE
document.addEventListener('click', function(event) {
  const isClickInside = mainNav.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside && mainNav.classList.contains('is-open')) {
    menuToggle.classList.remove('is-open');
    mainNav.classList.remove('is-open');
  }
});

// UPDATE FOOTER YEAR
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// CLOSE MENU IF WINDOW GETS BIG (desktop)
window.addEventListener('resize', function() {
  if (window.innerWidth > 760) {
    menuToggle.classList.remove('is-open');
    mainNav.classList.remove('is-open');
  }
});