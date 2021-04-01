(() => {
    function initEditBtnShop() {
        const editBtnArea = $(this);
        const editBtn = editBtnArea.find('.shop-list-edit-btn');
        const backdrop = editBtnArea.find('.shop-list-edit-backdrop');
        const editMenu = editBtnArea.find('.shop-list-edit-menu');
        const editName = editBtnArea.find('.shop-list-edit-menu-list.edit');
        const deleteList = editBtnArea.find('.shop-list-edit-menu-list.delete');
        editBtn.on('click', () => {
            editBtnArea.toggleClass('selected');
        })
        backdrop.on('click', () => {
            editBtnArea.removeClass('selected');
        })
        editName.on('click', () => {
            editBtnArea.removeClass('selected');
        })
        deleteList.on('click', () => {
            editBtnArea.removeClass('selected');
        })
    }
    const editBtnShop = $('.shop-list-edit');
    editBtnShop.each(initEditBtnShop);
})();