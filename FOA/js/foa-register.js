(() => {
    function addRegisterToCart() {
        const checkRegisMember = $(this);
        const inputCheckMember = $('#mylist-cart-register-input');
        const checkRegisMemberData = checkRegisMember.attr('data-member');
        const contentEligibility = $('#eligibility-becoming-member-box');
        const contentPurchaseSelected = $('#mylist-cart-purchase-selected');
        const contentMemberSelected = $('#checkout-cart-register-cost');
        const priceMember = $('.checkout-card-price');
        const priceNoRegis = $('.checkout-card-price-nonregis');
        const priceMemberBar = $('.checkout-cart-bar-price-box');
        const priceNoRegisBar = $('.checkout-cart-bar-price-noregis-box');
        const costPrice = $('#cost-member');
        const promotionCode = $('#promotionCode');
        checkRegisMember.on('click', () => {
            inputCheckMember.val(checkRegisMemberData).trigger('change');
            inputCheckMember.attr('value', checkRegisMemberData).trigger('change');
            inputCheckRegist(inputCheckMember, contentEligibility, contentPurchaseSelected, contentMemberSelected, costPrice, priceMember, priceNoRegis, priceMemberBar, priceNoRegisBar, promotionCode)
        })



    }
    const checkRegisMember = $('.mylist-cart-register-select-item-label');
    checkRegisMember.each(addRegisterToCart);

    // Expose `addRegisterToCart` to $ for reuses
    $.addRegisterToCart = addRegisterToCart;



})();

(() => {
    function inputCheckMemberFunc() {
        const inputCheckMember = $(this);
        const contentEligibility = $('#eligibility-becoming-member-box');
        const contentPurchaseSelected = $('#mylist-cart-purchase-selected');
        const contentMemberSelected = $('#checkout-cart-register-cost');
        const priceMember = $('.checkout-card-price');
        const priceNoRegis = $('.checkout-card-price-nonregis');
        const priceMemberBar = $('.checkout-cart-bar-price-box');
        const priceNoRegisBar = $('.checkout-cart-bar-price-noregis-box');
        const costPrice = $('#cost-member');
        const promotionCode = $('#promotionCode');
        inputCheckRegist(inputCheckMember, contentEligibility, contentPurchaseSelected, contentMemberSelected, costPrice, priceMember, priceNoRegis, priceMemberBar, priceNoRegisBar, promotionCode);
    }

    const inputCheckMemberGb = $('#mylist-cart-register-input');
    inputCheckMemberGb.each(inputCheckMemberFunc);

    // Expose `inputCheckMemberFunc` to $ for reuses
    $.inputCheckMemberFunc = inputCheckMemberFunc;
})();

// (() => {
//     function checkRegisMemberInputFunc() {
//         const checkRegisMemberInput = $(this);
//         const inputCheckMember = $('#mylist-cart-register-input');

//         const contentEligibility = $('#eligibility-becoming-member-box');
//         const contentPurchaseSelected = $('#mylist-cart-purchase-selected');
//         const contentMemberSelected = $('#checkout-cart-register-cost');
//         const priceMember = $('.checkout-card-price');
//         const priceNoRegis = $('.checkout-card-price-nonregis');
//         const priceMemberBar = $('.checkout-cart-bar-price-box');
//         const priceNoRegisBar = $('.checkout-cart-bar-price-noregis-box');
//         const costPrice = $('#cost-member');
//         checkRegisMemberInput.bind('click mousedown', (function() {

//             var isChecked;

//             return function(event) {
//                 if (event.type == 'click') {
//                     if (isChecked) {
//                         inputCheckMember.val('').trigger('change');
//                         inputCheckMember.attr('value', '').trigger('change');
//                         isChecked = this.checked = false;
//                         inputCheckRegist(inputCheckMember, contentEligibility, contentPurchaseSelected, contentMemberSelected, costPrice, priceMember, priceNoRegis, priceMemberBar, priceNoRegisBar)
//                     } else {
//                         isChecked = true;
//                     }
//                 } else {
//                     isChecked = this.checked;
//                 }
//             }
//         })());

//     }
//     const checkRegisMemberInput = $('.mylist-cart-register-select-item-input');
//     checkRegisMemberInput.each(checkRegisMemberInputFunc);

//     // Expose `checkRegisMemberInputFunc` to $ for reuses
//     $.checkRegisMemberInputFunc = checkRegisMemberInputFunc;
// })();

function delRegisOrder() {
    const inputCheckMember = $('#mylist-cart-register-input');
    const contentEligibility = $('#eligibility-becoming-member-box');
    const contentPurchaseSelected = $('#mylist-cart-purchase-selected');
    const contentMemberSelected = $('#checkout-cart-register-cost');
    const priceMember = $('.checkout-card-price');
    const priceNoRegis = $('.checkout-card-price-nonregis');
    const priceMemberBar = $('.checkout-cart-bar-price-box');
    const priceNoRegisBar = $('.checkout-cart-bar-price-noregis-box');
    const costPrice = $('#cost-member');
    const promotionCode = $('#promotionCode');
    inputCheckMember.val('').trigger('change');
    inputCheckMember.attr('value', '').trigger('change');
    inputCheckRegist(inputCheckMember, contentEligibility, contentPurchaseSelected, contentMemberSelected, costPrice, priceMember, priceNoRegis, priceMemberBar, priceNoRegisBar, promotionCode)
    $('.mylist-cart-register-select-item-input').prop('checked', false);
}

function inputCheckRegist(inputVal, contentEligibility, contentPurchaseSelected, contentMemberSelected, costPrice, priceMember, priceNoRegis, priceMemberBar, priceNoRegisBar, promotionCode) {
    const valInput = inputVal.val();
    if (valInput === null || valInput === 'undifind' || valInput === '') {
        contentEligibility.removeClass('selected');
        contentPurchaseSelected.removeClass('selected');
        contentMemberSelected.removeClass('selected');
        priceMember.removeClass('selected');
        priceNoRegis.removeClass('selected');
        priceMemberBar.removeClass('selected');
        priceNoRegisBar.removeClass('selected');
        promotionCode.removeClass('selected');

    } else if (valInput === 'abo') {
        contentEligibility.addClass('selected');
        contentPurchaseSelected.addClass('selected');
        contentMemberSelected.addClass('selected');
        priceMember.addClass('selected');
        priceNoRegis.addClass('selected');
        priceMemberBar.addClass('selected');
        priceNoRegisBar.addClass('selected');
        promotionCode.addClass('selected');
        costPrice.text('900');
    } else if (valInput === 'mbo') {
        contentEligibility.addClass('selected');
        contentPurchaseSelected.addClass('selected');
        contentMemberSelected.addClass('selected');
        priceMember.addClass('selected');
        priceNoRegis.addClass('selected');
        priceMemberBar.addClass('selected');
        priceNoRegisBar.addClass('selected');
        promotionCode.addClass('selected');
        costPrice.text('100');
    }
}