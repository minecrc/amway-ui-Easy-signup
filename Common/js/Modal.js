function copyAction(id) {
    $('.amway-modal').removeClass('active');
    $('body').removeClass('modal-show');
    $("#" + id).addClass('active');
    setTimeout(function() {
        $("#" + id).removeClass('active');
    }, 1500);
}

function openModal(id) {
    const modal = $('#' + id);
    $('.amway-modal').removeClass('active');
    $('.amway-modal-fullPageOnMb').removeClass('active');

    modal.addClass('active');
    $('body').addClass('modal-show');
}

function openModalEditP(id) {
    const modal = $('#' + id);
    $('.amway-modal').removeClass('active');
    $('.amway-modal-fullPageOnMb').removeClass('active');
    $('.amway-modal-fullPageOnMb').removeClass('show');
    modal.addClass('active');
    $('body').addClass('modal-show');
}


function openModalInput(id, valueToinput) {
    const modal = $('#' + id);
    const input = modal.find('.input-for-use-something');
    input.val(valueToinput);
    modal.addClass('active');
    $('body').addClass('modal-show');
}

function closeModal(id) {
    const modal = $('#' + id);
    modal.removeClass('active');
    $('body').removeClass('modal-show');
}



function initModal() {
    const allModal = $(this);
    const bgModal = allModal.find('.bg-modal');
    const btnClose = allModal.find('.btn-close-modal');

    bgModal.on('click', () => {
        allModal.removeClass('active');
        $('body').removeClass('modal-show');
    })
    btnClose.on('click', () => {
        allModal.removeClass('active');
        $('body').removeClass('modal-show');
    })

}
const allModal = $('.amway-modal');
allModal.each(initModal);

const allModalFull = $('.amway-modal-fullPageOnMb');
allModalFull.each(initModal);
const allModalSearch = $('.amway-modal-search-pd');
allModalSearch.each(initModal);
const allModalCustomer = $('.amway-modal-customer-right');
allModalCustomer.each(initModal);