$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })

});

AOS.init();