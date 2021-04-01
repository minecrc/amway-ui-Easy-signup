(() => {
    function initEditBtnShop() {
        const editBtnArea = $(this);
        const editBtn = editBtnArea.find('.shop-detail-edit-btn');
        const backdrop = editBtnArea.find('.shop-detail-edit-backdrop');
        const editMenu = editBtnArea.find('.shop-detail-edit-menu');
        const list = editBtnArea.find('.shop-detail-edit-menu-list');
        const onMb = $('#editPop');
        editBtn.on('click', () => {
            editBtnArea.toggleClass('selected');
            onMb.addClass('active');
        })

        list.on('click', () => {
            editBtnArea.removeClass('selected');
            onMb.removeClass('active');
        })
        backdrop.on('click', () => {
            editBtnArea.removeClass('selected');
        })


    }
    const editBtnShop = $('.shop-detail-edit');
    editBtnShop.each(initEditBtnShop);
})();