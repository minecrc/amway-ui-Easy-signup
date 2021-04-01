/* global $ */


(() => {
    function initPromotionTab() {
        const promotionTab = $(this);
        const promotionTabAll = $('.promotion-tab');
        promotionTab.on('click', () => {

            promotionTabAll.removeClass('active');
            promotionTab.addClass('active');
        })
    }

    const promotionTab = $('.promotion-tab');
    promotionTab.each(initPromotionTab);

    // Expose `initPromotionTab` to $ for reuses
    $.initPromotionTab = initPromotionTab;
})();
submenuPromotion()
var widthchx = $(window).width();
$(window).resize(function() {
    if ($(this).width() !== widthchx) {
        widthchx = $(this).width();
        /* location.reload(); */
        submenuPromotion()
    }
});

function submenuPromotion() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var owlPost = $(".promotion-tab-bar");
    if (width < 1024) {
        owlPost.addClass('owl-carousel');
        $('.promotion-tab-bar').owlCarousel({
            nav: false,
            margin: 16,
            loop: false,
            autoWidth: true,
            items: 4,
            dots: false
        });

    } else {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel');
    }

}

var bricklayer = new Bricklayer(document.querySelector('.bricklayer'));


function loadmore() {
    /* 'addCard(val)' is data when you need to loadmore */
    $('.bricklayer').append(addCard(val));
    $('.bricklayer').bricklayer();
    /* In the bottom js is to force scroll to the bottom. */
    document.body.scrollTop = $('.bricklayer').height() - $('.bricklayer .promotion-card:last-child').height() * 2

}