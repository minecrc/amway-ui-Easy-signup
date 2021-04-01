function editBox(id) {
    const box = $('#' + id);
    const boxText = box.find('.checkout-box-edit-content-text');
    const boxEdit = box.find('.checkout-box-edit-content-edit');
    const btnEdit = box.find('.checkout-box-edit-btn-edit');
    boxText.addClass('active');
    boxEdit.addClass('active');
    btnEdit.addClass('active');
}

function closeEditBox(id) {
    const box = $('#' + id);
    const boxText = box.find('.checkout-box-edit-content-text');
    const boxEdit = box.find('.checkout-box-edit-content-edit');
    const btnEdit = box.find('.checkout-box-edit-btn-edit');
    boxText.removeClass('active');
    boxEdit.removeClass('active');
    btnEdit.removeClass('active');
}

function editSponserBox(id) {
    const box = $('#' + id);
    const btnEdit = $('#foreignSponserEditbtn');
    box.addClass('active');
    btnEdit.addClass('active');
}

function editSponserforeignBox(id) {
    const boxEdit = $('#' + id);
    const box = $('#checkout-box-foreignSponser-name');
    box.removeClass('active');
    boxEdit.addClass('active');

}

function saveSponserforeignBox(id) {
    const boxEdit = $('#' + id);
    const box = $('#checkout-box-foreignSponser-name');
    box.addClass('active');
    boxEdit.removeClass('active');
}

function closeSponserEditBox(id) {
    const box = $('#' + id);
    const btnEdit = $('#foreignSponserEditbtn');

    box.removeClass('active');
    btnEdit.removeClass('active');
}

function saveSponserEditBox(id) {
    const box = $('#' + id);
    const btnEdit = $('#foreignSponserEditbtn');
    const boxName = $('#checkout-box-foreignSponser-name');
    boxName.addClass('active');
    box.removeClass('active');
    /*  btnEdit.removeClass('active'); */
}