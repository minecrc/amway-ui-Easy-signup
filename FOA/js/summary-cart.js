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

/* (() => {
    function inputCheckMemberFunc() {
        const inputCheckMember = $(this);
        const addShowContentRegis = $('#mylist-cart-subscription-fee-area')
        const btnRegitChangeState = $('.btn-bar-register');
        const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');
        const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');

        const costPrice = $('#subscription-fee');

        inputCheckRegist(inputCheckMember, costPrice, addShowContentRegis, btnRegitChangeState, purchaseRedeemBar, purchaseFreeBar);
    }

    const inputCheckMemberGb = $('#mylist-cart-register-input');
    inputCheckMemberGb.each(inputCheckMemberFunc);

    // Expose `inputCheckMemberFunc` to $ for reuses
    $.inputCheckMemberFunc = inputCheckMemberFunc;
})(); */
(() => {
    function addRegisterToCart() {
        const checkRegisMember = $(this);
        const inputCheckMember = $('#mylist-cart-register-input');

        const addShowContentRegis = $('#mylist-cart-subscription-fee-area')
        const btnRegitChangeState = $('.btn-bar-register');
        const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');
        const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');
        const checkRegisMemberData = checkRegisMember.attr('data-member');
        const checkRegisMemberInput = $(`#${checkRegisMemberData}`);
        const costPrice = $('#subscription-fee');

        checkRegisMember.on('click', () => {
            inputCheckMember.val(checkRegisMemberData).trigger('change');
            inputCheckMember.attr('value', checkRegisMemberData).trigger('change');
            const valInput = inputCheckMember.val();
            inputCheckRegist(valInput, costPrice, addShowContentRegis, btnRegitChangeState, purchaseRedeemBar, purchaseFreeBar)
        })



    }
    const checkRegisMember = $('.mylist-cart-register-select-item-label');
    checkRegisMember.each(addRegisterToCart);

    // Expose `addRegisterToCart` to $ for reuses
    $.addRegisterToCart = addRegisterToCart;
})();
(() => {
    function removeRegisterToCart() {
        const checkRegisMember = $(this);
        const inputCheckMember = $('#mylist-cart-register-input');
        const addShowContentRegis = $('#mylist-cart-subscription-fee-area')
        const btnRegitChangeState = $('.btn-bar-register');
        const purchaseRedeemBar = $('.mylist-cart-with-icon-action-bar.purchase-redeem');
        const purchaseFreeBar = $('.mylist-cart-with-icon-action-bar.free');
        const costPrice = $('#subscription-fee');
        const purchaseCart = $('#purchase-redeem-to-cart');

        checkRegisMember.on('click', () => {
            addShowContentRegis.removeClass('selected');
            btnRegitChangeState.removeClass('selectedMember');
            purchaseRedeemBar.removeClass('selected');
            purchaseFreeBar.removeClass('selected');
            inputCheckMember.val('');
            purchaseCart.removeClass('selected');
        })



    }
    const delcheckRegisMember = $('.btn-subscription-fee-bin-del');
    delcheckRegisMember.each(removeRegisterToCart);

    // Expose `removeRegisterToCart` to $ for reuses
    $.removeRegisterToCart = removeRegisterToCart;
})();

function inputCheckRegist(valInput, costPrice, addShowContentRegis, btnRegitChangeState, purchaseRedeemBar, purchaseFreeBar) {
    /* const valInput = inputVal.val(); */

    if (valInput === null || valInput === 'undifind' || valInput === '') {
        addShowContentRegis.removeClass('selected');
        btnRegitChangeState.removeClass('selectedMember');
        purchaseRedeemBar.removeClass('selected');
        purchaseFreeBar.removeClass('selected');
        $('.list-pd-cart-card-price').removeClass('selectedMember');
        $('.mylist-cart-bar-price-box').removeClass('selected');
        $('.mylist-cart-bar-price-noregis-box').removeClass('selected');
    } else if (valInput === 'abo') {
        addShowContentRegis.addClass('selected');
        btnRegitChangeState.addClass('selectedMember');
        $('.list-pd-cart-card-price').addClass('selectedMember');
        purchaseRedeemBar.addClass('selected');
        purchaseFreeBar.addClass('selected');
        $('.mylist-cart-bar-price-box').addClass('selected');
        $('.mylist-cart-bar-price-noregis-box').addClass('selected');
        costPrice.text('900');
    } else if (valInput === 'mbo') {
        addShowContentRegis.addClass('selected');
        btnRegitChangeState.addClass('selectedMember');
        $('.list-pd-cart-card-price').addClass('selectedMember');
        purchaseRedeemBar.addClass('selected');
        purchaseFreeBar.addClass('selected');
        $('.mylist-cart-bar-price-box').addClass('selected');
        $('.mylist-cart-bar-price-noregis-box').addClass('selected');
        costPrice.text('100');
    }
}
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
    } else if (valInput === 'have') {
        purchaseBar.removeClass('selected');
    }
}

function inputCheckPurchaseCart(purchasefreeBar, purchaseRedeemBar, purchaseCart) {
    const purchasefreeBarInput = purchasefreeBar.val();
    const purchaseRedeemBarInput = purchaseRedeemBar.val();

    if (purchasefreeBarInput === '' && purchaseRedeemBarInput === '') {
        purchaseCart.removeClass('selected');
    } else {
        purchaseCart.addClass('selected');

    }
}