const icon = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

icon.addEventListener('click', () => {
  icon.classList.toggle('rotate');
  navLinks.classList.toggle('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('show');
    icon.classList.remove('rotate');
  }
});