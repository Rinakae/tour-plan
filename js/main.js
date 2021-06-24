
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
 
  // обработка форм
  $('.form').each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Please specify your phone number",
        minlength: "Please enter at least 10 characters",
      },
    }
  })
  })

  $('.phone').each(function(){
$(this).mask('+7 (999) 999-99-99');
});

  AOS.init();



});