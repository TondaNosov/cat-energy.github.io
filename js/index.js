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

/** map */

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "91f011b3a5d9f2e",
    center: { lat: 50.075389063382566, lng: 14.436260266094148 },
    zoom: 15,
  });

  new google.maps.Marker({
    position: { lat: 50.075389063382566, lng: 14.436260266094148 },
    map,
    title: "Cat Energy",
    icon: {
      url: "../img/map-pin.png",
      scaledSize: new google.maps.Size(56, 53),
    }
  });
}

window.initMap = initMap;