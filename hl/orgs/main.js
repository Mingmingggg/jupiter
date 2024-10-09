let currentIndex = 0;

document.addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.muted = false;
});



function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    images[currentIndex].classList.add('active');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


