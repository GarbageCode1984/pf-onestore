$(function () {
    $(".sliderWrap").slick({
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
        let $top = $(".top");
        if (navbar > 0) {
            $top.addClass("on");
        } else {
            $top.removeClass("on");
        }
    });

    let clickMenuBtn = 0;
    $(".menu").click(function () {
        if (clickMenuBtn == 0) {
            $(".top").removeClass("menuUp");
            $(".top").addClass("menuDown");
            clickMenuBtn = 1;
        } else {
            $(".top").removeClass("menuDown");
            $(".top").addClass("menuUp");

            clickMenuBtn = 0;
        }
    });
});
