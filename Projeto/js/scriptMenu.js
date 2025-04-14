const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.menu-link');
const botaoHome = document.querySelectorAll('.botaoHome');

// Abrir menu
menuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

// Fechar menu (botão X ou overlay)
const closeMenu = () => {
  mobileMenu.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
};

closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Fechar menu + scroll suave ao clicar nos links
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    closeMenu(); // Fecha o modal

    // Scroll suave após 300ms (tempo para o modal fechar)
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