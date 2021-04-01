(() => {
    function selectedItemBundle() {
        const btnSelected = $(this);
        const mainContent = btnSelected.parents('.selected-item-bundle');
        const content = mainContent.find('.selected-item-bundle-content');
        btnSelected.on('click', () => {
            btnSelected.toggleClass('selected');
            content.toggleClass('selected');
        });
    }

    const btnSelected = $('.selected-item-bundle-header');
    btnSelected.each(selectedItemBundle);

    // Expose `selectedItemBundle` to $ for reuses
    $.selectedItemBundle = selectedItemBundle;
})();