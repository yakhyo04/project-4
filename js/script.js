
  new Swiper(".product-swiper", {
    slidesPerView: 0,
    spaceBetween: 0,
    loop: true,
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
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.shop__right--btn2',
      prevEl: '.shop__left--btn2',
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

  new Swiper(".designerSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    // navigation: {
    //   nextEl: '.shop__right--btn2',
    //   prevEl: '.shop__left--btn2',
    // },
    breakpoints: {
      500:{
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 16
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


  var swiperClassic = new Swiper(".swiperClassic", {
    loop: true,
    navigation: {
      nextEl: ".classic__next-arr ",
      prevEl: ".classic__prev-arr ",
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
      },
    },
  });