(() => {
    $('.btn-foa-close').on("click", function() {
        $('#foa-upgrade-banner').fadeOut();
    });
})();

(() => {
    function chooseRegister() {
        const register = $(this);
        const registerAll = $('.popup-switch-list');
        const registerData = register.attr('data-register');
        const registerUrl = register.attr('data-url');
        const registerSame = $(`.popup-switch-list[data-register="${registerData}"]`);
        const bannerAll = $('.fp-banner');
        const banner = $(`.fp-banner[data-register="${registerData}"]`);
        register.on('click', function() {
            registerAll.removeClass('--active');
            bannerAll.removeClass('--active');
            registerSame.addClass('--active');
            banner.addClass('--active');
            $('.popup-switch').attr('class', `popup-switch ${registerData}`);
            $('.foa-popup-btn a').attr('href', registerUrl);
        });
    }

    const register = $('.popup-switch-list');
    register.each(chooseRegister);

    // Expose `chooseRegister` to $ for reuses
    $.chooseRegister = chooseRegister;
})();

function openPopup(id) {
    const popup = $('#'+id);
    popup.addClass('active');
    $('body').addClass('modal-show');
}

function closePopup(id) {
    const popup = $('#'+id);
    popup.removeClass('active');
    $('body').removeClass('modal-show');
}
