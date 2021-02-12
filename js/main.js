$(function(){
    $(".slider_big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider-prev"><img src="./img/slider/prev.svg" alt=""></button>',
        nextArrow: '<button class="slider-next"><img src="./img/slider/next.svg" alt=""></button>',
        arrows: true,
        fade: true,
        asNavFor: '.slider_little'
    });

    $('.slider_little').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider_big',
        centerMode: true,
        focusOnSelect: true
      });

});


