(() => {
    function initEditBtn() {
        const editBtnArea = $(this);
        const editBtn = editBtnArea.find('.wldh-edit-btn');
        const backdrop = editBtnArea.find('.wldh-edit-backdrop');
        const editMenu = editBtnArea.find('.wldh-edit-menu');
        const editName = editBtnArea.find('.wldh-edit-menu-list.edit');
        const deleteList = editBtnArea.find('.wldh-edit-menu-list.delete');
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
    const editBtn = $('.wldh-edit');
    editBtn.each(initEditBtn);
})();