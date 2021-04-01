$('.foa-recommand-main-list').owlCarousel({

    responsiveClass: true,
    navText: ["<div class='foa-recommand-card-arrow foa-recommand-card-arrow-prev'></div>", "<div class='foa-recommand-card-arrow foa-recommand-card-arrow-next'></div>"],
    loop: false,
    dots: false,
    responsive: {
        0: {
            items: 3,
            autoWidth: true,
            nav: false,
        },
        1024: {
            items: 4,
            nav: true,
        },
        1199: {
            items: 5,
            nav: true,
        }
    }
})