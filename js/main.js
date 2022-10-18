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

    $(window).scroll(function () {
        let navbar = $(this).scrollTop();
        let $top = $('.top');
        if (navbar > 0) {
            $top.addClass('on');
        } else {
            $top.removeClass('on');
        }
    });

    $('menu').click(function () {});

    /*     let menuBtn = 0;

    if (menuBtn == 0) {
        $('.menu').click(function () {
            $('.top').toggleClass('menuDown');
            menuBtn = 1;
            console.log(menuBtn);
        });
    } else {
        $('.menu').click(function () {
            $('.top').toggleClass('menuDown');
            menuBtn = 0;
            console.log(menuBtn);
        });
    } */
});
