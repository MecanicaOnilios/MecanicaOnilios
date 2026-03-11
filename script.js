// Menu mobile toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Fecha menu ao clicar em link
document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.servico-card, .contato-card, .sobre__img-wrapper, .sobre__content').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ========== SLIDESHOW SOBRE (clique para próxima) ==========
const sobreWrapper = document.getElementById('sobreSlideshow');
const sobreSlides = sobreWrapper.querySelectorAll('.sobre__slide');
const sobreDots = document.getElementById('sobreDots');
let sobreIndex = 0;

// Criar dots
sobreSlides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('sobre__dot');
  if (i === 0) dot.classList.add('active');
  dot.setAttribute('aria-label', `Foto ${i + 1}`);
  dot.addEventListener('click', (e) => {
    e.stopPropagation();
    goToSlide(i);
  });
  sobreDots.appendChild(dot);
});

function goToSlide(index) {
  sobreSlides[sobreIndex].classList.remove('active');
  sobreDots.children[sobreIndex].classList.remove('active');
  sobreIndex = index;
  sobreSlides[sobreIndex].classList.add('active');
  sobreDots.children[sobreIndex].classList.add('active');
}

// Clique no wrapper avança para a próxima
sobreWrapper.addEventListener('click', () => {
  goToSlide((sobreIndex + 1) % sobreSlides.length);
});
