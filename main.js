let currentIndex = 0;

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    images[currentIndex].classList.add('active');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
  });

  function sn(snNumber) {
    const nextSec = document.getElementById(`sec${snNumber + 1}`);
    if (nextSec) {
        nextSec.classList.remove('hdn');
    }
}