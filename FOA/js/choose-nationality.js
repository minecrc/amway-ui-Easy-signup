(() => {
    function selectNation() {
        const selectItem = $(this);
        const mainContent = selectItem.parents('.checkout-choose-nationality');
        const inputNation = mainContent.find('.checkout-choose-nationality-input-val');
        const dataSelected = selectItem.attr('data-nation');
        const selectItemAll = mainContent.find('.checkout-choose-nationality-box');
        const contentSelected = mainContent.find(`.checkout-choose-nationality-box[data-nation=${dataSelected}]`);
        selectItem.on('click', () => {
            selectItemAll.removeClass('selected');
            inputNation.val(dataSelected);
            contentSelected.addClass('selected');
        })


    }
    const selectItem = $('.checkout-choose-nationality-label');
    selectItem.each(selectNation);

    // Expose `selectNation` to $ for reuses
    $.selectNation = selectNation;
})();