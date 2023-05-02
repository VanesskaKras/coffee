
$(function () {

    $('.menu__btn').on('click', function () {
        $('.menu__list, .menu__btn').toggleClass('menu__list--active');
    });

});

new Swiper(".swiper", {
    scrollbarDraggable: true,
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 1,
    lazyLoading: true,
    loop: true,
    watchSlidesProgress: true,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            dynamicBullets: true,
        },
    }

});
