var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.main-series-button',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});

var headerButton = document.querySelector(".header-button");
var headerWindow = document.querySelector(".header");
var middleLine = document.querySelector(".header-button__line");

function toggleModal(){
  headerWindow.classList.toggle("header--visible");
  headerButton.classList.toggle("header-button--active");
  middleLine.classList.toggle("header-button__line--active");
}

headerButton.addEventListener("click", toggleModal);

