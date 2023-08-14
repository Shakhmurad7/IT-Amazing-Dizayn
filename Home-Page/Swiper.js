const swiper2 = new Swiper(".sample-slide", {
  loop: true, // loop
  slidesPerView: 2, // how many slides to show
  centeredSlides: true, // centering the first slide
  effect: "coverflow", // applying the coverflow effect
  coverflowEffect: {
    rotate: 0, // Rotate of the prev and next slides
    depth: 200, // Depth of the prev and next slides
    stretch: 30, // Space between the slides
    modifier: 1, // Multiply the values of rotate, depth, and stretc
    scale: 1, // Size ratio of the prev and next slides
    slideShadows: false, // Presence of shadow on the surfaces of the prev and next slides
  },
  pagination: {
    // pagination(dots)
    el: ".swiper-pagination",
  },
  navigation: {
    // navigation(arrows)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

