(() => {
    function activeSearch() {
        const BtnSearch = $(this);
        const mainSearch = BtnSearch.parents('.amway-header-search');
        const BtnClose = mainSearch.find('.ahst-close');
        const inputSearch = mainSearch.find('.ahst-input');
        const widthchx = $(window).width();
        const menuModal = $('.amway-header-modal');
        const body = $('body');
        const menuSearch = $('#amwayMenuSearch');
        const bg = $('.amwayMenuSearch .bg-ahm ');
        BtnSearch.on('click', () => {
            mainSearch.addClass('active');
            menuModal.removeClass('active');
        });
        BtnClose.on('click', () => {
            mainSearch.removeClass('active');
            menuSearch.removeClass('active');
            body.removeClass('modal-show');
            $('.amway-header-delivery').removeClass('d-none');
        });
        inputSearch.on('click', () => {
            menuModal.removeClass('active');
            menuSearch.addClass('active');
            body.addClass('modal-show');
            $('.amway-header-delivery').addClass('d-none');

        });
        bg.on('click', () => {
            $('.amway-header-delivery').removeClass('d-none');
        })
    }

    const BtnSearch = $('.ahst-btn');
    BtnSearch.each(activeSearch);

    // Expose `activeSearch` to $ for reuses
    $.activeSearch = activeSearch;
})();