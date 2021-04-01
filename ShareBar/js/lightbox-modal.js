function openLModal(id) {
    const modal = $('#' + id);
    $('.amway-model-lightbox').removeClass('active');
    modal.addClass('active');
    $('body').addClass('modal-show');
}

function closeLModal(id) {
    const modal = $('#' + id);
    modal.removeClass('active');
}

function initLModal() {
    const allLModal = $(this);
    const bgModal = allLModal.find('.am-lb-bg');
    bgModal.on('click', () => {
        allLModal.removeClass('active');
    })
}
const allLModal = $('.amway-model-lightbox');
allLModal.each(initLModal);