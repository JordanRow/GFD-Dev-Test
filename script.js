document.addEventListener("DOMContentLoaded", function () {
    $(".main-promo-container").slick({
        fade: true,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    $(".ot-container").slick({
        rows: 3,
        dots: false,
        arrows: true,
        appendArrows: $('.ot-arrow-container'),
        prevArrow: $('.ot-arrow-container button.left'),
        nextArrow: $('.ot-arrow-container button.right'),
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
    });
});
