// document.addEventListener("DOMContentLoaded", function () {
//   var carousel = document.querySelector(".nav");
//   const slid = document.querySelector("#carouselExampleSlidesOnly");
//   var carouselInstance = new bootstrap.Carousel(slid, {
//     interval: 100,
//   });

//   carousel.addEventListener("mouseenter", function () {
//     carouselInstance.cycle();
//   });

//   carousel.addEventListener("mouseleave", function () {
//     carouselInstance.pause();
//   });

//   var carousel = document.querySelector(".nav");
//   carousel.addEventListener("mouseenter", function () {
//     const carouselItem = document.querySelector("#carouselExampleSlidesOnly");
//     new bootstrap.Carousel(carouselItem, {
//       interval: 10,
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  var carouselElements = document.querySelectorAll(".navs");

  carouselElements.forEach(function (carouselElement) {
    var carouselInstance = new bootstrap.Carousel(
      carouselElement.querySelector(".carousel"),
      {
        interval: 3000,
      }
    );

    carouselElement.addEventListener("mouseenter", function () {
      carouselInstance.cycle();
    });

    carouselElement.addEventListener("mouseleave", function () {
      carouselInstance.pause();
    });
  });
});
const toggle = document.querySelector(".menu");
const close = document.querySelector(".close");
const drawer = document.querySelector(".drawer");

toggle.addEventListener("click", () => {
  drawer.classList.toggle("active");
});
close.addEventListener("click", () => {
  drawer.classList.toggle("active");
});
