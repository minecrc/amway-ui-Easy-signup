(() => {
    function ShowAllPd() {
        const btnShow = $(this);
        const pdHide = $('.checkout-order-pic-img.orderHide');
        btnShow.on('click', () => {
            btnShow.addClass('show');
            pdHide.removeClass('orderHide');
        })

    }

    const btnShow = $('.checkout-order-pic-img-action');
    btnShow.each(ShowAllPd);

    // Expose `ShowAllPd to $ for reuses
    $.ShowAllPd = ShowAllPd;
})();