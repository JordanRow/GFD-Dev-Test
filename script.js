document.addEventListener("DOMContentLoaded", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        $(".main-promo-container").slick({
            fade: true,
            cssEase: "linear",
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: false
        });
    }

    var showDots = window.matchMedia("(max-width: 767px)").matches;

    $(".ot-container").slick({
        mobileFirst: true,
        rows: 3,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: showDots,
        arrows: true,
        appendArrows: $(".ot-arrow-container"),
        appendDots: $(".ot-dot-container"),
        prevArrow: $(".ot-arrow-container button.left"),
        nextArrow: $(".ot-arrow-container button.right"),
        infinite: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    rows: 3,
                    infinite: true
                }
            }
        ]
    });
});
