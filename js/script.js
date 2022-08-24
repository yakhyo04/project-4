new Swiper(".bar", {
    slidesPerView: 0,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay:{
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 0
      }
    }
  });

  new Swiper(".product-swiper", {
    slidesPerView: 0,
    spaceBetween: 0,
    navigation: {
      nextEl: '.product__right--button',
      prevEl: '.product__left--button',
    },
    breakpoints: {
      500:{
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });


  new Swiper(".shop-swiper", {
    slidesPerView: 0,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      500:{
        slidesPerView: 2,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      980: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0
      }
    }
  });

  
  new Swiper(".shop__product--swiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.shop__rightbtn',
      prevEl: '.shop__leftbtn',
    },
    breakpoints: {
      500:{
        slidesPerView: 2,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      980: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0
      }
    }
  });