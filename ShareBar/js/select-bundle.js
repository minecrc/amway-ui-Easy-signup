function openChooseBundle(id, idpd) {
    $('#' + id).addClass('active');
    const inputPd = $('#' + id).find('.select-bundle-input-id');
    inputPd.attr('value', idpd);
    $('body').addClass('modal-show');
}(() => {


    function initSelectBundle() {
        const allModalBD = $(this);
        const idSelect = allModalBD.find('.select-bundle-input-id');
        const btnClose = allModalBD.find('.aw-header-bar-btn-back');
        const bgClose = allModalBD.find('.bg-modal');
        const btnConfirm = allModalBD.find('.confirm');

        btnClose.on('click', () => {
            allModalBD.removeClass('active');
            $('body').removeClass('modal-show');
        })
        bgClose.on('click', () => {
            allModalBD.removeClass('active');
            $('body').removeClass('modal-show');
        })
        btnConfirm.on('click', () => {
            allModalBD.removeClass('active');
            const chooseMenuBundle = $('#' + idSelect.attr('value')).find('.wldli-product-change');
            const chooseMenu = $('#' + idSelect.attr('value')).find('.wldli-choose');
            const bundlelist = $('#' + idSelect.attr('value')).find('.wldli-bundle');
            const btnGetMore = $('#' + idSelect.attr('value')).find('.wldli-get-more');
            btnGetMore.addClass('active');
            bundlelist.addClass('active');
            chooseMenuBundle.addClass('active');
            chooseMenu.removeClass('active');
            $('body').removeClass('modal-show');
        })
    }
    const allModalBD = $('.amway-modal-bundle');
    allModalBD.each(initSelectBundle);

})();