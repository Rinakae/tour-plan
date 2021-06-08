const hotelSider = new Swiper('.hotel-slider', {
  // Optional parameters 
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.hotel-slider__button--prev',
    nextEl: '.hotel-slider__button--next',
  },

keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters 
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.reviews-slider__button--prev',
    nextEl: '.reviews-slider__button--next',
  },

keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
console.log("клик по кнопке меню");
document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom__visible");
});
