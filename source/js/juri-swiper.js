import { Swiper } from './vendor/swiper';

const options = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('#swiper-juri', options);

  const buttonSwiperPrevious = document.querySelector('.swiper-buttons-juri .swiper-button-prev');

  buttonSwiperPrevious.addEventListener('click', () => {
    swiper.slidePrev(500, false);
  });

  const buttonSwiperNext = document.querySelector('.swiper-buttons-juri .swiper-button-next');

  buttonSwiperNext.addEventListener('click', () => {
    swiper.slideNext(500, false);
  });
});
