  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    //  Search Form Open
    $('#searchOpen').on('click', function () {
      $('.search-wrapper').addClass('open');
    });
    $('#searchClose').on('click', function () {
      $('.search-wrapper').removeClass('open');
    });

    // featured post slider
    
     $('.featured-post-slider').slick({
      infinite: true,
      vertical: true,
      autoplay: true,
      slidesToScroll: 3,
      slidesToShow: 1,
      cssEase: 'ease',
      autoplaySpeed: 3000,
      verticalSwiping: true,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }]
    });
    

    // venobox initialize
    $('.venobox').venobox();

  })(jQuery);