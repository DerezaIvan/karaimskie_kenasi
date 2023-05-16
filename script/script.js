// Скрипт для работы слайдера
$(document).ready(function () {
    $(".slider").slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });
});

//Скрипт бибилиотеки анимации
new WOW().init();
