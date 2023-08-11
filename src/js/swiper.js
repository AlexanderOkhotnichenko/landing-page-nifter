import Swiper, { Navigation } from "swiper";
import { EffectCoverflow } from "swiper";
import 'swiper/scss';


const AuctionSlider = new Swiper('.swiper', {
  modules: [EffectCoverflow, Navigation],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    scale: 0.88,
    depth: 0,
  },
  navigation: {
    nextEl: ".auction-slider-button-next",
    prevEl: ".auction-slider-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      coverflowEffect: {
        scale: 0.75
      }
    },
    410: {
      navigation: false,
      spaceBetween: 0,
      slidesPerView: 1.5
    },
    500: {
      spaceBetween: 0,
      slidesPerView: 1.5
    },
    640: {
      spaceBetween: 0,
      slidesPerView: 2
    },
    785: {
      spaceBetween: 0,
      slidesPerView: 2
    },
    855: {
      spaceBetween: 40,
      slidesPerView: 2
    },
    1165: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});

function responsiveSwiper(section) {
  const swiper = document.querySelector(section);

  window.addEventListener('resize', (event) => {});

}
responsiveSwiper(".swiper");