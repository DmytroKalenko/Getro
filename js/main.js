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
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider_big',
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1281,
              settings: {
                slidesToShow: 5,
                centerMode: true,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 491,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            }
          ]
    });

    $('.burger_menu').on('click', function(){
        $('.menu').slideToggle();
    });

    $('.menu_link.drop_down').on('click', function(){
        $(this).children('.drop_down_list').toggleClass('active');
    });

   


});


