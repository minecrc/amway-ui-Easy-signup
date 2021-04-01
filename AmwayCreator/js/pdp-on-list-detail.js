(() => {
    function ShowCollapse() {
        const btnShowCollapse = $(this);
        const collapseMain = btnShowCollapse.parents('.pdp-mylist-collapse-area');
        const contentArea = collapseMain.find('.pdp-mylist-collapse-content');
        btnShowCollapse.on('click', () => {
            btnShowCollapse.toggleClass('active');
            contentArea.toggleClass('active');
        })

    }

    const btnShowCollapse = $('.pdp-mylist-collapse');
    btnShowCollapse.each(ShowCollapse);

    // Expose `ShowCollapse` to $ for reuses
    $.ShowCollapse = ShowCollapse;
})();
$('.pdp-mylist-img-area').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true
})