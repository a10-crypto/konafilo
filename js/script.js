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

// ========== WHATSAPP CLUB REGISTRATION LOGIC ==========
function sendToWhatsApp() {
  const phoneInput = document.getElementById('customerPhone').value.trim();
  
  if (phoneInput === "") {
    alert("لطفاً، أدخل رقم الجوال أولاً.");
    return;
  }
  
  // Basic validation to check for a valid Saudi mobile number structure
  const saPhoneRegex = /^(05|5|\+9665|9665)\d{8}$/;
  if(!saPhoneRegex.test(phoneInput)) {
    alert("الرجاء إدخال رقم جوال سعودي صحيح (مثال: 05xxxxxxxx)");
    return;
  }
  
  const businessNumber = "966569956512"; 
  const message = "أهلاً كنافيلو! أرغب بالانضمام إلى ناديكم الإخباري للحصول على العروض الحصرية. رقم جوالي هو: " + phoneInput;
  const whatsappUrl = "https://wa.me/" + businessNumber + "?text=" + encodeURIComponent(message);
  
  window.open(whatsappUrl, '_blank');
}