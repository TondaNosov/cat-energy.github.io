/** Open/close navigation */

const navToggle = document.querySelector(".main-nav__toggle");
const mainNavigation = document.querySelector(".main-nav");

mainNavigation.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", openNavigation);

function openNavigation() {
  if (mainNavigation.classList.contains("main-nav--closed")) {
    mainNavigation.classList.remove("main-nav--closed");
    mainNavigation.classList.add("main-nav--opened");
  } else {
    mainNavigation.classList.remove("main-nav--opened");
    mainNavigation.classList.add("main-nav--closed");
  }
}

/** slider */

const galerySlider = document.querySelector(".galery__slider");
const galeryImageBefore = document.querySelector(".galery__container-img--before");
const galeryImageAfter = document.querySelector(".galery__container-img--after");

galerySlider.addEventListener("input", function() {
  galeryImageAfter.style.width =  `${galerySlider.value}%`;
  galeryImageBefore.style.width = 100 - `${galerySlider.value}` + "%";
});
