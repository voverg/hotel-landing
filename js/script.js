// Slick-slider settings
$(document).ready(function(){
  $('.sl').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
        breakpoint: 960,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
        breakpoint: 720,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false
            }
        }
    ]
  });
});