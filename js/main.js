$(function () {
    $('.sliderWrap').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        prevArrow: "<button type='button' class='slick-prev'></button>",
        nextArrow: "<button type='button' class='slick-next'></button>",
    });
});
