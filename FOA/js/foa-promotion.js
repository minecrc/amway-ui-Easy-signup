(() => {
    function ApplyCodeFunc() {
        const btnApplyCode = $(this);
        const promotionCodeBox = btnApplyCode.parents('.promotionCode');
        const contentShowPromotionCode = promotionCodeBox.find('.checkout-promotion-resulte');
        const inputBox = promotionCodeBox.find('.amway-input-area');
        const inputBoxData = promotionCodeBox.find('.amway-input');
        const inputBoxErrorText = promotionCodeBox.find('.amway-input-error');
        const resulteCode = promotionCodeBox.find('.resulte-code');
        const boxApply = promotionCodeBox.find('.checkout-promotion-insert');
        const btnApplyCodeData = btnApplyCode.attr('data-booleen')
        btnApplyCode.on('click', () => {
            console.log(btnApplyCodeData)
            if (btnApplyCodeData === 'true') {
                boxApply.addClass('selected');
                contentShowPromotionCode.addClass('selected');
                resulteCode.text(inputBoxData.val())
            } else if (btnApplyCodeData === 'unuse') {
                boxApply.removeClass('selected');
                contentShowPromotionCode.removeClass('selected');
                resulteCode.text('');
            } else if (btnApplyCodeData === 'false') {
                boxApply.removeClass('selected');
                contentShowPromotionCode.removeClass('selected');

                inputBoxData.addClass('input-errorMessage');
                inputBoxErrorText.addClass('alert_error');
            }
        })
    }
    const btnApplyCode = $('.applyCode');
    btnApplyCode.each(ApplyCodeFunc);

    // Expose `ApplyCodeFunc` to $ for reuses
    $.ApplyCodeFunc = ApplyCodeFunc;
})();


var reg = /^([A-Za-z0-9_\-ก-๏\.])/;
var mainBox = $("#promotionCode");
var inputChx = mainBox.find('.amway-input');
var inputChxArea = mainBox.find('.amway-input-area');
var btnApply = mainBox.find('.applyCode')
activeApply()

function activeApply() {
    if (reg.test(inputChx.val()) == false) {
        btnApply.removeClass('active');
        btnApply.attr('disabled', true);
        inputChxArea.removeClass('active');
    } else {
        btnApply.addClass('active');
        btnApply.attr('disabled', false);
        inputChxArea.addClass('active');
    }

}

inputChx.change(() => {
    activeApply()
});