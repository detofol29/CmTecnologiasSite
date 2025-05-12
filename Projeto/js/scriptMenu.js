const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.menu-link');
const botaoHome = document.querySelectorAll('.botaoHome');


menuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});


const closeMenu = () => {
  mobileMenu.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
};

closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    closeMenu();

    setTimeout(() => {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }, 500);
  });
});

botaoHome.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    setTimeout(() => {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }, 200);
  });
});