const carousel = document.getElementById('carouselImages');
const totalSlides = carousel.children.length;
let currentIndex = 0;

function updateSlide() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

setInterval(nextSlide, 5000);