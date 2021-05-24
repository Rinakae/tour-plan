const swiper = new Swiper('.swiper-container', {
  // Optional parameters 
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.slider-button__prev',
    nextEl: '.slider-button__next',
  },

keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});