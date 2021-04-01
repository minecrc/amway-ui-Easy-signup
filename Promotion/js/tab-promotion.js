/* global $ */
var $grid = $('.promotion-card-tabArea').masonry({

    columnWidth: '.promotion-card',
    gutter: '.gutter-sizer',
    itemSelector: '.promotion-card',
    horizontalOrder: true,

});

(() => {
    function initPromotionTab() {
        const promotionTab = $(this);
        const promotionTabAll = $('.promotion-tab');
        const promotionTabData = promotionTab.attr('data-active');
        const content = $('.promotion-card-tabArea');
        content.hide();
        $('.promotion-card-tabArea[data-active="--all"]').show();
        promotionTab.on('click', () => {
            content.hide();
            promotionTabAll.removeClass('active');
            promotionTab.addClass('active');
            $(`.promotion-card-tabArea[data-active="${promotionTabData}"]`).show();
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
        location.reload();
        /* submenuPromotion() */
    }
});

function submenuPromotion() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 1024) {
        $('.promotion-tab-bar').slick({
            infinite: false,
            arrows: false,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    } else {
        $('.slider-class').slick('unslick').slick();
    }

}