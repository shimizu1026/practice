const thumbsSwiper = new Swiper(".swiper-thumbs", {
  slidesPerView: 4,
  // freeMode: true,
  // watchSlidesVisibility: true,
  // watchSlidesProgress: true,
});

const mySwiper = new Swiper(".swiper-main", {
  // Optional parameters
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: true,
    disabledClass: "ore-button-disabled",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    draggable: true,
  },

  // 自動再生
  autoplay: {
    delay: 4000,
  },

  // サムネイル
  thumbs: {
    swiper: thumbsSwiper,
  },
});
