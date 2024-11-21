// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { playVideo } from './video';
import { flippingPriceTabs } from './price-tabs';
import { flippingThroughTheSlider } from './juri-swiper';
import { initTabs } from './faq-tabs';
import { validateForm } from './form-validation';
import './reviews-swiper';


document.addEventListener('DOMContentLoaded', () => {
  playVideo();
  flippingPriceTabs();
  flippingThroughTheSlider();
  initTabs();
  validateForm();
});
