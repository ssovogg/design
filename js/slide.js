window.onload = function () {
  // about 슬라이드
  new Swiper(".sw-about-1", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1000,

    pagination: {
      el: ".sw-about-pg",
    },
  });
  new Swiper(".sw-about-2", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1000,

    pagination: {
      el: ".sw-about-pg",
    },
  });

    // gallery 슬라이드 
    // 일러스트
    new Swiper(".sw-gallery-illust", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: ".sw-gl-pg",
        clickable: true,
      },
    });
    // 카드뉴스
    new Swiper(".sw-gallery-card", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: ".sw-gl-pg",
        clickable: true,
      },
    });
    // 배너
    new Swiper('.sw-gallery-banner', {
      loop: true,
      navigation: {
        prevEl: '.sw-gl-prev',
        nextEl: '.sw-gl-next',
      },
      pagination: {
        el: '.sw-gl-pg',
      }
    })
};
