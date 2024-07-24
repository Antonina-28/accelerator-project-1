import { Swiper } from './vendor/swiper';

const optionsReviews = {
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
      slidesPerView: 1,
      spaceBetween: 40
    },
    1366: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {

  const swiperReviews = new Swiper('#swiper-reviews', optionsReviews);

  const buttonSwiperPrevious = document.querySelector('.swiper-buttons-reviews .swiper-button-prev');

  buttonSwiperPrevious.addEventListener('click', () => {
    // if (this.isEnd) {
    //   // Если текущий слайд - последний, блокируем кнопку
    //   document.querySelector('.swiper-buttons-reviews .swiper-button-prev').disabled = true;
    // } else {
    //   // Иначе разблокируем кнопку
    //   document.querySelector('.swiper-buttons-reviews .swiper-button-prev').disabled = false;
    // }
    swiperReviews.slidePrev(500, false);
  });

  const buttonSwiperNext = document.querySelector('.swiper-buttons-reviews .swiper-button-next');

  buttonSwiperNext.addEventListener('click', () => {
    // if (this.isEnd) {
    //   // Если текущий слайд - последний, блокируем кнопку
    //   document.querySelector('.swiper-buttons-reviews .swiper-button-next').disabled = true;
    // } else {
    //   // Иначе разблокируем кнопку
    //   document.querySelector('.swiper-buttons-reviews .swiper-button-next').disabled = false;
    // }
    swiperReviews.slideNext(500, false);
  });
});
