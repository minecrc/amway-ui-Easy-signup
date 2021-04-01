(() => {
    function showDataSum() {
        const headerBtn = $(this);
        const contentBox = $('.mylist-cart-summary-content');
        headerBtn.on('click', () => {
            headerBtn.toggleClass('selected');
            contentBox.toggleClass('selected');
        })
    }
    const headerBtn = $('.mylist-cart-summary-header ');
    headerBtn.each(showDataSum);

    // Expose `showDataSum` to $ for reuses
    $.showDataSum = showDataSum;
})();
(() => {
    $('.foa-non-subscription-btn.subscription').on('click', () => {
        const boxNonSub = $('.foa-non-subscription');
        const boxSub = $('.subscription-foa-cart');
        const pd = $('.list-pd-cart-card');
        const modelsub = $('.subscription-foa-modal');
        boxSub.removeClass('select-nonsub');
        boxNonSub.removeClass('selected');
        pd.removeClass('member-pd');
        openModal('subscriptionFoaCart');
        modelsub.addClass('form-del');

    })
    $('.subscription-foa-cart-del-btn').on('click', () => {
        const boxSub = $('.subscription-foa-cart');
        const selectSub = $('.subscription-foa-modal-selected-input');
        boxSub.removeClass('choose');
        selectSub.prop("checked", false);
        $('.foa-cart-summary-btn').attr('onClick', 'window.location.href="FOA_cart_case_mixpd_show_del_pd.html"');
        const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');
        const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');
        purchaseRedeemBar.removeClass('selected');
        purchaseFreeBar.removeClass('selected');
    })
    $('.subscription-foa-cart-btn').on('click', () => {
        const modelsub = $('.subscription-foa-modal');
        openModal('subscriptionFoaCart')
        modelsub.removeClass('form-del');
        $('.foa-cart-summary-btn').attr('onClick', 'window.location.href="FOA_cart_case_mixpd_show_del_pd.html"');

    })


    $('.subscription-foa-modal-close').on('click', () => {
        const boxSub = $('.subscription-foa-cart');
        const selectSub = $('.subscription-foa-modal-selected-input');
        boxSub.removeClass('choose');
        selectSub.prop("checked", false);
        const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');
        const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');
        purchaseRedeemBar.removeClass('selected');
        purchaseFreeBar.removeClass('selected');
    })

})();

function gotodel() {
    const boxSub = $('.subscription-foa-cart');
    const selectSub = $('.subscription-foa-modal-selected-input');
    boxSub.removeClass('choose');
    selectSub.prop("checked", false);
    $('.foa-cart-summary-btn').attr('onClick', 'window.location.href="FOA_cart_case_mixpd_show_del_pd.html"');
    const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');
    const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');
    purchaseRedeemBar.removeClass('selected');
    purchaseFreeBar.removeClass('selected');
}
(() => {
    function selecttypeFunc() {
        const selecttype = $(this);
        const typeSub = selecttype.attr('data-type')
        const boxSub = $('.subscription-foa-cart');
        const selectSubSelected = $(`subscription-foa-modal-selected[data-type=${typeSub}] .subscription-foa-modal-selected-input`);
        $('#subscriptionFoaCartData').val(typeSub);
        const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');
        const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');
        selecttype.on('click', () => {
            boxSub.addClass('choose');
            selectSubSelected.prop("checked", true);
            if (typeSub === 'abo') {
                $('#subscription-foa-cart-content-tool-price').text('900');
            } else if (typeSub === 'mbo') {
                $('#subscription-foa-cart-content-tool-price').text('100');
            }

            purchaseRedeemBar.addClass('selected');
            purchaseFreeBar.addClass('selected');
            $('.foa-cart-summary-btn').attr('onClick', 'openDD()');
        })


    }
    const selecttype = $('.subscription-foa-modal-selected');
    selecttype.each(selecttypeFunc);

    // Expose `selecttypeFunc` to $ for reuses
    $.selecttypeFunc = selecttypeFunc;
})();
(() => {
    function addPurchaseRedeemToCart() {
        const checkpurchaseRedeem = $(this);
        const purchaseCart = $('#purchase-redeem-to-cart');
        const inputCheckpurchaseFreeBar = $('#purchase-free-modal-input');
        const inputCheckpurchaseRedeem = $('#purchase-redeem-modal-input');
        const checkpurchaseRedeemData = checkpurchaseRedeem.attr('data-state');
        const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');

        checkpurchaseRedeem.on('click', () => {
            inputCheckpurchaseRedeem.val(checkpurchaseRedeemData).trigger('change');
            inputCheckpurchaseRedeem.attr('value', checkpurchaseRedeemData).trigger('change');
            inputCheckPurchase(inputCheckpurchaseRedeem, purchaseRedeemBar);
            inputCheckPurchaseCart(inputCheckpurchaseFreeBar, inputCheckpurchaseRedeem, purchaseCart);
        })



    }
    const checkpurchaseRedeem = $('.purchase-redeem-modal-card-label');
    checkpurchaseRedeem.each(addPurchaseRedeemToCart);

    // Expose `addPurchaseRedeemToCart` to $ for reuses
    $.addPurchaseRedeemToCart = addPurchaseRedeemToCart;
})();

function removePurchaseRedeemToCart() {
    const checkpurchaseRedeem = $(this);
    const purchaseCart = $('#purchase-redeem-to-cart');
    const inputCheckpurchaseFreeBar = $('#purchase-free-modal-input');
    const inputCheckpurchaseRedeem = $('#purchase-redeem-modal-input');

    const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');

    checkpurchaseRedeem.on('click', () => {
        inputCheckpurchaseRedeem.val('').trigger('change');
        inputCheckpurchaseRedeem.attr('value', '').trigger('change');
        inputCheckPurchase(inputCheckpurchaseRedeem, purchaseRedeemBar);
        inputCheckPurchaseCart(inputCheckpurchaseFreeBar, inputCheckpurchaseRedeem, purchaseCart);
    })
}
(() => {
    function addPurchaseFreeToCart() {
        const checkpurchaseFreeBar = $(this);
        const purchaseCart = $('#purchase-redeem-to-cart');
        const inputCheckpurchaseFreeBar = $('#purchase-free-modal-input');
        const inputCheckpurchaseRedeem = $('#purchase-redeem-modal-input');
        const checkpurchaseFreeBarData = checkpurchaseFreeBar.attr('data-state');
        const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');

        checkpurchaseFreeBar.on('click', () => {
            inputCheckpurchaseFreeBar.val(checkpurchaseFreeBarData).trigger('change');
            inputCheckpurchaseFreeBar.attr('value', checkpurchaseFreeBarData).trigger('change');
            inputCheckPurchase(inputCheckpurchaseFreeBar, purchaseFreeBar);
            inputCheckPurchaseCart(inputCheckpurchaseFreeBar, inputCheckpurchaseRedeem, purchaseCart);

        })



    }
    const checkpurchaseFreeBar = $('.purchase-free-modal-card-label');
    checkpurchaseFreeBar.each(addPurchaseFreeToCart);

    // Expose `addPurchaseFreeToCart` to $ for reuses
    $.addPurchaseFreeToCart = addPurchaseFreeToCart;
})();

function removePurchaseFreeToCart() {
    const checkpurchaseFreeBar = $(this);
    const purchaseCart = $('#purchase-redeem-to-cart');
    const inputCheckpurchaseFreeBar = $('#purchase-free-modal-input');
    const inputCheckpurchaseRedeem = $('#purchase-redeem-modal-input');

    const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');

    checkpurchaseFreeBar.on('click', () => {
        inputCheckpurchaseFreeBar.val('').trigger('change');
        inputCheckpurchaseFreeBar.attr('value', '').trigger('change');
        inputCheckPurchase(inputCheckpurchaseFreeBar, purchaseFreeBar);
        inputCheckPurchaseCart(inputCheckpurchaseFreeBar, inputCheckpurchaseRedeem, purchaseCart);
    })



}

function inputCheckPurchase(inputVal, purchaseBar) {
    const valInput = inputVal.val();

    if (valInput === null || valInput === 'undifind' || valInput === '') {
        purchaseBar.addClass('selected');
        $('.foa-cart-summary-btn').attr('onClick', 'openDD()');
    } else if (valInput === 'have') {
        purchaseBar.removeClass('selected');
        $('.alert-purchase-non-selected').removeClass('selected');
    }
}

function inputCheckPurchaseCart(purchasefreeBar, purchaseRedeemBar, purchaseCart) {
    const purchasefreeBarInput = purchasefreeBar.val();
    const purchaseRedeemBarInput = purchaseRedeemBar.val();

    if (purchasefreeBarInput === '' && purchaseRedeemBarInput === '') {
        purchaseCart.removeClass('selected');
        $('.foa-cart-summary-btn').attr('onClick', 'openDD()');

    } else {
        purchaseCart.addClass('selected');

        $('.foa-cart-summary-btn').attr('onClick', 'window.location.href="FOA_checkout_login.html"');
    }
}

function openDD() {
    openModal('notiAddRedeem')
}

function openNotiPurchase() {
    $('.alert-purchase-non-selected').addClass('selected');
}