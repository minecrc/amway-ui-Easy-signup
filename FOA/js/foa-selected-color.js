(() => {
    function freeSelectColor() {
        const btnColorItem = $(this);
        const cardMain = btnColorItem.parents('.free-member-card');
        const btnColorItemAll = cardMain.find('.free-member-card-select-item');
        const btnColorItemDataColor = btnColorItem.attr('data-color');
        const btnColorItemDataName = btnColorItem.attr('data-name');
        const nameColor = cardMain.find('.free-member-card-selected');
        const inputData = $('.free-member-card-select-input');
        btnColorItem.on('click', () => {
            btnColorItemAll.removeClass('selected');
            btnColorItem.addClass('selected');
            inputData.val(btnColorItemDataColor);
            nameColor.text(btnColorItemDataName);
        })


    }
    const btnColorItem = $('.free-member-card-select-item');
    btnColorItem.each(freeSelectColor);

    // Expose `freeSelectColor` to $ for reuses
    $.freeSelectColor = freeSelectColor;
})();