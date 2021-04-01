function openPolicy(id) {
    const modal = $('#' + id);
    modal.addClass('active');
    $('body').addClass('modal-show');
}

function closePolicy(id) {
    const modal = $('#' + id);
    modal.removeClass('active');
    $('body').removeClass('modal-show');
}
(() => {
    function bgClosePolicy() {
        const bgPolicy = $(this);
        const modal = $('.amway-policy-modal');
        bgPolicy.on('click', () => {
            modal.removeClass('active');
            $('body').removeClass('modal-show');
        })

    }

    const bgPolicy = $('.amway-policy-modal .bg-modal');
    bgPolicy.each(bgClosePolicy);

    // Expose `bgClosePolicy` to $ for reuses
    $.bgClosePolicy = bgClosePolicy;
})();