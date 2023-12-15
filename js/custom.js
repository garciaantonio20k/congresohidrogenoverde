$('.nav-link').on('click', function () {
    $(".tab-content").addClass("show");
});
$('.nav-link').on('dblclick', function () {
    //alert("yeah it works");
    $(this).removeClass("active");
    $(".tab-content").removeClass("show");
});

/********AFFIX*****************/
$(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 120) {
        $('.navbar').addClass('affix');
    } else {
        $('.navbar').removeClass('affix');
    }
});

/********SLIDER HOME***********/

$(document).ready(function () {
    $('.slider-hoteles').slick({
        centerMode: true,
        centerPadding: '300px',
        dots: true,
        arrows: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '150px'
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '100px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: '50px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '30px'
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
