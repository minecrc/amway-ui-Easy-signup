(() => {
    function btnSearchAction() {
        const btnSearch = $(this);
        const modalSearch = $('.amway-search-area');
        const modalSearchTool = $('.asa-search-tool');
        const menuModal = $('.amway-header-modal');
        const mainRightSecond = $('.ahs-header-right');
        const amwaySubmenuAll = $('.acl-menu-list.has-sub');
        btnSearch.on('click', () => {
            amwaySubmenuAll.removeClass('active');
            mainRightSecond.addClass("active");
            btnSearch.addClass("active");
            modalSearch.addClass("active");
            modalSearchTool.addClass("active");
            menuModal.removeClass('active');

        })
    }

    const btnSearch = $('.amway-search');
    btnSearch.each(btnSearchAction);

    // Expose `btnSearchAction` to $ for reuses
    $.btnSearchAction = btnSearchAction;
})();
(() => {
    function btnSearchClose() {
        const btnClose = $(this);
        const mainSearch = btnClose.parents('.amway-search-area');
        const inputSearch = mainSearch.find('.asa-input');
        const btnSearch = $('.amway-search');
        const modalSearch = $('.amway-search-area');
        const modalSearchTool = $('.asa-search-tool');
        const body = $('body');
        const menuSearch = $('#amwayMenuSearch');
        const bg = $('.amwayMenuSearch .bg-ahm ');
        const menuModal = $('.amway-header-modal');
        const mainRightSecond = $('.ahs-header-right');
        btnClose.on('click', () => {

            btnSearch.removeClass("active");
            modalSearch.removeClass("active");
            modalSearchTool.removeClass("active");
            menuSearch.removeClass('active');
            mainRightSecond.removeClass("active");
            // body.removeClass('modal-show');
            $('.amway-header-delivery').removeClass('d-none');

        })
        inputSearch.on('click', () => {
            menuModal.removeClass('active');
            menuSearch.addClass('active');
            // body.addClass('modal-show');
            $('.amway-header-delivery').addClass('d-none');

        });
        bg.on('click', () => {
            $('.amway-header-delivery').removeClass('d-none');
        })
    }

    const btnClose = $('.asa-close');
    btnClose.each(btnSearchClose);

    // Expose `btnSearchClose` to $ for reuses
    $.btnSearchClose = btnSearchClose;
})();