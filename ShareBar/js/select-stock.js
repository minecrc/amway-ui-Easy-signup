function openStock(id, idpd) {
    $('#' + id).addClass('active');
    const inputPd = $('#' + id).find('.product-stock-id');
    inputPd.attr('value', idpd);
    $('body').addClass('modal-show');
}
(() => {


    function initSelectBundle() {
        const allModalBD = $(this);
        const idSelect = allModalBD.find('.product-stock-id');
        const btnClose = allModalBD.find('.stock-close');
        const bgClose = allModalBD.find('.bg-modal');


        btnClose.on('click', () => {
            allModalBD.removeClass('active');
            $('body').removeClass('modal-show');
        })
        bgClose.on('click', () => {
            allModalBD.removeClass('active');
            $('body').removeClass('modal-show');
        })

    }
    const allModalBD = $('.amway-model-stock');
    allModalBD.each(initSelectBundle);

})();

(() => {


    function initStock() {
        const collapseC = $(this);
        const headerC = collapseC.find('.stock-result-region-header');
        const bodyC = collapseC.find('.stock-result-region-content');
        headerC.on('click', () => {
            collapseC.toggleClass('--close');
        })
    }
    const collapseC = $('.stock-result-region');
    collapseC.each(initStock);

})();

function lenghtRegionContent() {
    if ($('.stock-result-region.active').length == 0) {
        $('.stock-result-region').show();

    } else {
        $('.stock-result-region').hide();
        $('.stock-result-region.active').show();

    }
}
lenghtRegionContent()

function selectRegion(region) {
    const regions = $('.' + region);
    regions.toggleClass('active');
    lenghtRegionContent()
}

function lenghtStatusContent() {

    if ($('.stock-result-shop.active').length == 0) {
        $('.stock-result-shop').css('display', 'flex');

    } else {
        $('.stock-result-shop').hide();
        $('.stock-result-shop.active').css('display', 'flex');

    }
}
lenghtStatusContent()

function selectStatus(status) {
    const stateBtn = $('.' + status).parents('.btn-outlin-black');
    const stateShop = $('.' + status).parents('.stock-result-shop');
    stateBtn.toggleClass('active');
    stateShop.toggleClass('active');
    lenghtStatusContent()
}