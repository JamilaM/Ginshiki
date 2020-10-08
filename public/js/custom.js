// featured post slider
$('.featured-post-slider').slick({
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 600,
      settings: {
        vertical: false,
        verticalSwiping: false,
      }
    }]
  });