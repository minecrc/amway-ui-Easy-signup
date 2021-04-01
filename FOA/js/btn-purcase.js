(() => {
    function purchaseBtnActions() {
        const Btnpurchase = $(this);
        const mainPurchaseId = Btnpurchase.attr('data-id');
        const mainPurchase = $(`#${mainPurchaseId}`);
        const inputPurchase = mainPurchase.find('.mylist-cart-purchase-integer-input');
        const inputVale = mainPurchase.find('.mz-integer-input__input');

        const inputBox = mainPurchase.find('.mz-integer-input__quantity')
        Btnpurchase.on('click', () => {

            Btnpurchase.addClass('active');
            inputPurchase.addClass('active');
            inputVale.val(1)
            inputBox.removeClass('set_zero')
        })


    }
    const Btnpurchase = $('.mylist-cart-purchase-btn');
    Btnpurchase.each(purchaseBtnActions);

    // Expose `purchaseBtnActions` to $ for reuses
    $.purchaseBtnActions = purchaseBtnActions;
})();

function purchaseBack(id) {
    const mainPurchase = $(`#${id}`);
    const Btnpurchase = mainPurchase.find('.mylist-cart-purchase-btn');
    const inputPurchase = mainPurchase.find('.mylist-cart-purchase-integer-input');
    Btnpurchase.removeClass('active');
    inputPurchase.removeClass('active');
}