const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && window.innerWidth <= 768) {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please fill in all fields correctly.';
    status.style.color = '#b91c1c';
    form.reportValidity();
    return;
  }
  status.textContent = 'Message ready to send. Connect this form to a backend or email service.';
  status.style.color = '#166534';
  form.reset();
});