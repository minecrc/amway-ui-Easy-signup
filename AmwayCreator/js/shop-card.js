$('.fl-card-pd-list').owlCarousel({

    responsiveClass: true,
    navText: ["<div class='favorite-list-card-arrow favorite-list-card-arrow-prev'></div>", "<div class='favorite-list-card-arrow favorite-list-card-arrow-next'></div>"],
    loop: false,
    dots: false,
    responsive: {
        0: {
            items: 3,
            margin: 4,
            nav: false,
        },
        767: {
            items: 4,
            margin: 4,
            nav: false,
        },
        1024: {
            margin: 10,
            items: 4,
            nav: true,
        },
        1199: {
            margin: 10,
            items: 4,
            nav: true,
        }
    }
})