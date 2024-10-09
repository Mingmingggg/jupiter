/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
  
  document.querySelectorAll('.card__button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default anchor behavior
        
        const url = this.href;  // The href value of the clicked link
  
        if (!sessionStorage.getItem('loadingShown')) {
            // Show loading screen, hide main content and responsive heading
            document.getElementById('loading-screen').style.display = 'flex';
            document.querySelector('.responsive-heading').classList.add('hidden');
  
            setTimeout(() => {
                window.location.href = url;  // Redirect after 2 seconds
            }, 2000);
            
            sessionStorage.setItem('loadingShown', 'true');
        } else {
            window.location.href = url;  // Redirect immediately if already shown
        }
    });
  });
  
  window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem('loadingShown');  // Reset session storage on page unload
  });
  