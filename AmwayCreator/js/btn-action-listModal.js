(() => {
    function actionBtnList() {
        const BtnList = $(this);
        const BtnListData = BtnList.attr('data-typeList');
        const BtnListAll = $('.tab-ListShop-btn');
        const BtnListSelect = $(`.tab-ListShop-btn[data-typeList="${BtnListData}"]`)
        const Contentlist = $(`.content-list[data-typeList="${BtnListData}"]`);
        const ContentlistAll = $('.content-list');
        BtnList.on('click', () => {
            BtnListAll.removeClass('--selected');
            ContentlistAll.removeClass('--selected');
            BtnListSelect.addClass('--selected');
            Contentlist.addClass('--selected');
        });
    }

    const BtnList = $('.tab-ListShop-btn');
    BtnList.each(actionBtnList);

    // Expose `actionBtnList` to $ for reuses
    $.actionBtnList = actionBtnList;
})();