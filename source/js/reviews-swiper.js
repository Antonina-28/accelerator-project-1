import { Swiper } from './vendor/swiper';

const optionsReviews = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1,
      width: 500,
      spaceBetween: 40
    },
    1366: {
      width: 560
    }
  },
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  }
};

const swiperReviews = new Swiper('#swiper-reviews', optionsReviews);

const buttonSwiperPrevious = document.querySelector('.swiper-buttons-reviews .reviews__button--prev');
const buttonSwiperNext = document.querySelector('.swiper-buttons-reviews .reviews__button--next');

function checkNavButtons() {
  if (swiperReviews.isBeginning) {
    buttonSwiperPrevious.classList.add('swiper-button-disabled');
  } else {
    buttonSwiperPrevious.classList.remove('swiper-button-disabled');
  }

  if (swiperReviews.isEnd) {
    buttonSwiperNext.classList.add('swiper-button-disabled');
  } else {
    buttonSwiperNext.classList.remove('swiper-button-disabled');
  }
}

checkNavButtons();

swiperReviews.on('slideChange', checkNavButtons);

buttonSwiperPrevious.addEventListener('click', () => {
  swiperReviews.slidePrev(500, false);
});

buttonSwiperNext.addEventListener('click', () => {
  swiperReviews.slideNext(500, false);
});
