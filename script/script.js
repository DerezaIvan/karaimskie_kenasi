// Скрипт для работы слайдера
$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
  });
});

//Скрипт библиотеки анимации
new WOW().init();
