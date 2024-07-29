import { Swiper } from './vendor/swiper';
const buttonSwiperPrevious = document.querySelector('.swiper-buttons-juri .swiper-button-prev');
const buttonSwiperNext = document.querySelector('.swiper-buttons-juri .swiper-button-next');

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

export function flippingThroughTheSlider() {

  const swiper = new Swiper('#swiper-juri', options);

  buttonSwiperPrevious.addEventListener('click', () => {
    swiper.slidePrev(500, false);
  });

  buttonSwiperNext.addEventListener('click', () => {
    swiper.slideNext(500, false);
  });
}
