(() => {
    function couponBtnUse() {
        const btnCoupon = $(this);

        btnCoupon.on('click', () => {
            btnCoupon.toggleClass('selected');

        })


    }
    const btnCoupon = $('.coupon-list-card-btn');
    btnCoupon.each(couponBtnUse);

    // Expose `couponBtnUse` to $ for reuses
    $.couponBtnUse = couponBtnUse;
})();