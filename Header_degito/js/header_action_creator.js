(() => {
    function chooseEditformHeader() {
        const listEdit = $(this);
        const modalHead = $('.amway-header-modal');
        listEdit.on('click', () => {
            modalHead.removeClass('active');
        })

    }

    const listEdit = $('.amway-header-creator-modal-all .ah-subtitle-signin');
    listEdit.each(chooseEditformHeader);

    // Expose `chooseEditformHeader` to $ for reuses
    $.chooseEditformHeader = chooseEditformHeader;
})();