(() => {
    function initEditBtn() {
        const editBtnArea = $(this);
        const editBtn = editBtnArea.find('.wbp-bci-edit-btn');
        const backdrop = editBtnArea.find('.wbp-edit-backdrop');
        const editMenu = editBtnArea.find('.wbp-edit-menu');
        const list = editBtnArea.find('.wldh-edit-menu-list');
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
    const editBtn = $('.wbp-bci-edit');
    editBtn.each(initEditBtn);
})();