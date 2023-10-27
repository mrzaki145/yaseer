import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import Swiper, { Pagination, Autoplay } from "swiper";

const loading = document.querySelector("#loading");
document.addEventListener("DOMContentLoaded", () => {
  loading.classList.add("loaded");

  // aos
  AOS.init({
    once: true,
    // delay: 1100,
    duration: 1000,
    // startEvent: "DOMContentLoaded",
    // initClassName: "aos-init",
    useClassNames: false,
  });
});

// lenis
const lenis = new Lenis({
  duration: 1.5,
  orientation: "vertical",
  smoothWheel: true,
  smoothTouch: false,
  infinite: false,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// swiper
Swiper.use([Pagination, Autoplay]);
new Swiper(".text-slider", {
  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".clients__list", {
  loop: true,
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 50,
  direction: "horizontal",
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

new Swiper(".gallery-slider", {
  loop: true,
  speed: 1000,
  slidesPerView: 1.35,
  spaceBetween: 20,
  direction: "horizontal",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

new Swiper(".more-projects", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// nav toggler
document.querySelector("#navToggler").addEventListener("click", () => {
  document.querySelector("#navList").classList.toggle("open");
});

// tabs
const tabs = document.querySelector(".tab__wrapper");
if (tabs) {
  tabs.addEventListener("click", ({ target }) => {
    if (!target.matches("button")) return;

    const btn = target;
    if (btn.classList.contains("tab__item--active")) return;

    const activeBtn = tabs.querySelector(".tab__item--active");
    btn.classList.add("tab__item--active");
    activeBtn.classList.remove("tab__item--active");
  });
}
