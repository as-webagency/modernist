'use strict';

var swiper = new Swiper( '.hero-container', {
    navigation: {
        nextEl: '.hero-button-next',
        prevEl: '.hero-button-prev',
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
} );