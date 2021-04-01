function openNoti(id) {
    const modal = $('#' + id);
    modal.addClass('showNoti');
    setTimeout(function() {
        modal.removeClass('showNoti');
    }, 1500);
}



function closeNoti(id) {
    const modal = $('#' + id);
    modal.removeClass('showNoti');
}