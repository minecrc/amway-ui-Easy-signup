$('.wl-l-list').slick({
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<div class="wll-btn wll-next"></div>',
    prevArrow: '<div class="wll-btn wll-prev"></div>',
    responsive: [{
        breakpoint: 1023,
        settings: {
            arrows: false,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    }]
});
$('.wl-l-list.Noitem').slick('unslick');