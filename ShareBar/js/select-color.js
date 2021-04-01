(() => {


    function initSelectColor() {
        const allModalSC = $(this);
        const options = allModalSC.find('.select-color-option');
        const nameSelect = allModalSC.find('.select-color-selected-result');
        const valSelect = allModalSC.find('.select-color-input-val');
        const idSelect = allModalSC.find('.select-color-input-id');
        const srcSelect = allModalSC.find('.select-color-input-src');
        const altSelect = allModalSC.find('.select-color-input-alt');
        const btnClose = allModalSC.find('.aw-header-bar-btn-back');
        const bgClose = allModalSC.find('.bg-modal');
        const btnConfirm = allModalSC.find('.confirm');
        const item = $('#' + idSelect.val()).find('.mz-dropdown-input__dropdown');
        const inputDropdown = item.find('.mz-dropdown-input__input');
        const btnDropdown = item.find('.mz-dropdown__button');
        const divBtnDropdown = btnDropdown.find('.mz-dropdown__button-text');
        const textDropdown = btnDropdown.find('.mz-dropdown__text');
        const chooseMenuColor = $('#' + idSelect.val()).find('.wldli-product-change');
        const chooseMenu = $('#' + idSelect.val()).find('.wldli-choose');


        options.on('click', e => {
            e.preventDefault();
            const target = $(e.target);
            const option = target.hasClass('select-color-option') ?
                target :
                target.closest('.select-color-option');
            const textSelect = option.attr('data-text');
            const valueSelect = option.attr('data-value');
            const srcSelectval = option.find('.mz-image').attr('src');
            const altSelectval = option.find('.mz-image').attr('alt');
            nameSelect.text(textSelect);
            valSelect.attr('value', valueSelect);
            srcSelect.attr('value', srcSelectval);
            altSelect.attr('value', altSelectval);
            /*  var html = '<img class="mz-image mz-dropdown__option-image mz-cart-item-variant-dropdown__image"';
             html += ' data-src="' + srcSelect.val() + '" ';
             html += 'alt="' + altSelect.val() + '" src="' + srcSelect.val() + '" />';
             html += '<div class = "mz-dropdown__text" >' + textSelect;
             divBtnDropdown.html(html); */
            inputDropdown.attr('value', valSelect);
            /* textDropdown.text(textSelect); */
            /* console.log(valSelect.val(), srcSelect.val()); */
            options.removeClass('--selected');
            option.addClass('--selected');


        })
        btnClose.on('click', () => {
            allModalSC.removeClass('active');
            $('body').removeClass('modal-show');
        })
        bgClose.on('click', () => {
            allModalSC.removeClass('active');
            $('body').removeClass('modal-show');
        })
        btnConfirm.on('click', () => {
            allModalSC.removeClass('active');
            chooseMenuColor.addClass('active');
            chooseMenu.removeClass('active');
            $('body').removeClass('modal-show');

        })
    }
    const allModalSC = $('.amway-modal-color');
    allModalSC.each(initSelectColor);

})();

function openChooseColor(id, idpd) {
    $('#' + id).addClass('active');
    const inputPd = $('#' + id).find('.select-color-input-id');
    inputPd.attr('value', idpd);
    $('body').addClass('modal-show');
}