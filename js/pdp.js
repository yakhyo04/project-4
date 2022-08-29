new Swiper(".cardSwiper", {
  slidesPerView: 0,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.card__next',
    prevEl: '.card__prev',
  },
  breakpoints: {
    500:{
      slidesPerView: 2,
      spaceBetween: 0
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 0
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  }
});

new Swiper(".cardSecondSwiper", {
  slidesPerView: 0,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.card__next--btn',
    prevEl: '.card__prev--btn',
  },
  breakpoints: {
    500:{
      slidesPerView: 2,
      spaceBetween: 0
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 0
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  }
});


// freeMode: true,
// watchSlidesProgress: true,


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  direction: "vertical",
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  // effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

