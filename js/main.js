$(document).ready(function () {
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
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom__visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  
  document.addEventListener("keydown", function(event) {
   if (event.key == "Escape") {
     closeModal(event);
   }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");    
    
  }
 
 
  
});