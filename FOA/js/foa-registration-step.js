(() => {
    function nextStepCheckout() {
        const BtnNext = $(this);
        const nextToData = BtnNext.attr('data-nextNumTo');
        const nextContentToData = BtnNext.attr('data-nextContentTo');
        const titleText = $('#checkout-title-text');
        const stepNumActive = $(`.checkout-progress-trackers-number[data-trackNumber=${nextToData}]`);
        const stepNumActiveTitleData = $(`.checkout-progress-trackers-number[data-trackNumber=${nextToData}]`).attr('data-titleTrack');
        const contentAll = $(`.checkout-progress-trackers-content-box`);
        const contentActive = $(`.checkout-progress-trackers-content-box[data-Content=${nextContentToData}]`);
        BtnNext.on('click', () => {
            contentAll.removeClass('--selected');
            stepNumActive.addClass('active');
            for (var i = 1; i < nextToData; i++) {
                $(`.checkout-progress-trackers-number[data-trackNumber=${i}]`).addClass('success');
                $(`.checkout-progress-trackers-line[data-trackNumber=${i}]`).addClass('pass');
            }
            titleText.text(stepNumActiveTitleData)
            contentActive.addClass('--selected');
        })


    }
    const BtnNextCheckout = $('.next-step-checkout');
    BtnNextCheckout.each(nextStepCheckout);

    // Expose `nextStepCheckout` to $ for reuses
    $.nextStepCheckout = nextStepCheckout;
})();

function openBox(id) {
    const sidebox_id = $('#'+id);
    sidebox_id.addClass('active');
    $('body').addClass('modal-show');
}
function closeBox(id) {
    const sidebox_id = $('#'+id);
    sidebox_id.removeClass('active');
    $('body').removeClass('modal-show');
}

function addBank(id) {
    closeBox(id);
    $('.added-bank-detail').addClass('active');
    $('.checkout-box-add-bank').addClass('active');
    $('.edit-btn-add-bank.active').removeClass('active');
}

function selectKit(id) {
    closeBox(id);
    const stype = $('.starter-checkbox-input:checked').attr('data-stype');
    const text = $(`.checkout-box-sub-title[data-stype="${stype}"]`);
    const textAll = $('.checkout-box-sub-title');
    const bannerAll = $('.kit-banner');
    const banner = $(`.kit-banner[data-stype="${stype}"]`);
    const kitType = $('.sidebox-switch-list.--active');
    const kitTypeData = kitType.attr('data-kit');
    const kitAddress = $(`.kit-address[data-kit="${kitTypeData}"]`);
    const kitAddressAll = $('.kit-address');

    if(stype == 'starterkit') {
        kitAddress.parent().removeClass('hidden');
        kitAddressAll.removeClass('active');
        kitAddress.addClass('active');
    } else {
        kitAddressAll.removeClass('active');
        kitAddress.parent().addClass('hidden');
    }

    bannerAll.removeClass('active');
    textAll.removeClass('active');
    banner.addClass('active');
    text.addClass('active');
}

(() => {
    function chooseKitType() {
        const type = $(this);
        const typeAll = $('.sidebox-switch-list');
        const typeData = type.attr('data-kit');
        const typeSame = $(`.sidebox-switch-list[data-kit="${typeData}"]`);
        const detailAll = $('.switch-box-detail');
        const detail = $(`.switch-box-detail[data-kit="${typeData}"]`);
        type.on('click', function() {
            typeAll.removeClass('--active');
            detailAll.removeClass('--active');
            typeSame.addClass('--active');
            detail.addClass('--active');
            $('.sidebox-switch').attr('class', `sidebox-switch ${typeData}`);
        });
    }

    const type = $('.sidebox-switch-list');
    type.each(chooseKitType);

    // Expose `chooseKitType` to $ for reuses
    $.chooseKitType = chooseKitType;
})();

function saveAddress(id) {
    const sidebox_id = $('#'+id);
    sidebox_id.removeClass('active');
    $('.address-checkbox.hidden').removeClass('hidden').find('.address-checkbox-input').attr('checked', 'checked');
}