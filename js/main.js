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

    let clickMenuBtn = 0;
    $('.menu').click(function () {
        if (clickMenuBtn == 0) {
            $('.top').removeClass('menuUp');
            $('.top').addClass('menuDown');
            $('button').removeClass('menu');
            $('button').addClass('menuX');

            $('.gnb').show();
            $('.enb span').show();
            $('.mobile_p').show();
            // $('.gnbsub li').show();
            $('.gnbsub').css('display', 'inline-block');

            clickMenuBtn = 1;
        } else {
            $('.top').removeClass('menuDown');
            $('.top').addClass('menuUp');
            $('button').removeClass('menuX');
            $('button').addClass('menu');

            $('.gnb').hide();
            $('.enb span').hide();
            $('.mobile_p').hide();
            // $('.gnbsub li').hide();
            $('.gnbsub').css('display', 'none');

            clickMenuBtn = 0;
        }
    });

    $(window).resize(function () {
        let winW = window.innerWidth;
        if (winW > 1023) {
            if ($('.top').has('menuUp')) {
                // mobile -> pc로 넘어갈때 menuUp이 있으면 헤더부분 보이게
                $('.top').removeClass('menuUp');
                $('.gnb').css('display', 'flex');
                $('.enb span').css('display', 'flex');
                $('.gnbsub > li').css('display', 'inline-block');
                $('.gnbsub').css('display', 'none');
            }
            if ($('.top').has('menuDown')) {
                // mobile -> pc로 넘어갈때 menuDown이 있으면 헤더부분 보이게
                $('.top').removeClass('menuDown');
                $('.mobile_p').css('display', 'none');
                $('.gnbsub > li').css('display', 'inline-block');
            }
        } else {
            //pc -> mobile로 넘어갈때
            $('button').removeClass('menuX');
            $('button').addClass('menu');
            $('.gnb').css('display', 'none');
            $('.enb span').css('display', 'none');
        }
    });
});
