(() => {
    function purchaseBtnActionsSelect() {
        const BtnpurchaseSelect = $(this);
        BtnpurchaseSelect.on('click', () => {
            BtnpurchaseSelect.toggleClass('selected');

            if (BtnpurchaseSelect.hasClass("selected")) {

                actionModalNoti('notiRemovePurchaseItem')
            } else {

                actionModalNoti('notiAddPurchaseItem')
            }

            function actionModalNoti(nameID) {
                const modal = $(`#${nameID}`);
                modal.addClass('showNoti');
                setTimeout(function() {
                    modal.removeClass('showNoti');
                }, 1500);
            }

        })


    }
    const BtnpurchaseSelect = $('.purchase-member-card-content-tool-btn');
    BtnpurchaseSelect.each(purchaseBtnActionsSelect);

    // Expose `purchaseBtnActionsSelect` to $ for reuses
    $.purchaseBtnActionsSelect = purchaseBtnActionsSelect;
})();