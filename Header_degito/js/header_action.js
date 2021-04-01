(() => {
    function actionBgGrey() {
        const BgGrey = $(this);
        const menuModal = $('.amway-header-modal');
        const body = $('body');
        BgGrey.on('click', () => {
            menuModal.removeClass('active');
            body.removeClass('modal-show');
            body.removeClass('modal-show-mb');
            body.removeClass('modal-show-d');
            $(".amway-header-language").removeClass('active');
        });
    }

    const BgGrey = $('.bg-ahm');
    BgGrey.each(actionBgGrey);

    // Expose `actionBgGrey` to $ for reuses
    $.actionBgGrey = actionBgGrey;
})();
(() => {
    function actionAhmClose() {
        const AhmClose = $(this);
        const body = $('body');
        const menuModal = $('.amway-header-modal');
        AhmClose.on('click', () => {
            menuModal.removeClass('active');
            body.removeClass('modal-show');
            body.removeClass('modal-show-mb');
            body.removeClass('modal-show-d');
        });
    }

    const AhmClose = $('.ahm-close');
    AhmClose.each(actionAhmClose);

    // Expose `actionAhmClose` to $ for reuses
    $.actionAhmClose = actionAhmClose;
})();
(() => {
    function actionAmwaySubmenu() {
        const amwaySubmenu = $(this);
        const BgGrey = $('.bg-ahm');
        const amwaySubmenuAll = $('.acl-menu-list.has-sub');
        const amwaySubmenuData = amwaySubmenu.attr('data-submenu');
        const menuModal = $(`.amwaySubmenu[data-submenu="${amwaySubmenuData}"]`);
        const menuModalAll = $('.amwaySubmenu');
        const body = $('body');
        amwaySubmenu.on('click', () => {
            console.log(amwaySubmenu.hasClass('active'))
            if (amwaySubmenu.hasClass('active') == true) {
                amwaySubmenuAll.removeClass('active');
                menuModalAll.removeClass('active');
                // body.removeClass('modal-show');
            } else {
                amwaySubmenuAll.removeClass('active');
                menuModalAll.removeClass('active');
                menuModal.addClass('active');
                amwaySubmenu.addClass('active');
                // body.addClass('modal-show-d');
            }
        });
        BgGrey.on('click', () => {
            amwaySubmenuAll.removeClass('active');
            menuModal.removeClass('active');
            // body.removeClass('modal-show-d');
        });
    }

    const amwaySubmenu = $('.acl-menu-list.has-sub');
    amwaySubmenu.each(actionAmwaySubmenu);

    // Expose `actionAmwaySubmenu` to $ for reuses
    $.actionAmwaySubmenu = actionAmwaySubmenu;
})();



(() => {
    function actionAmwayBtnlogin() {
        const amwayBtnlogin = $(this);
        const amwayBtnloginData = amwayBtnlogin.attr('data-login');
        const menuModal = $(`.amway-header-modal[data-login="${amwayBtnloginData}"]`);
        const menuModalAll = $(".amway-header-modal");
        const body = $('body');
        amwayBtnlogin.on('click', () => {
            menuModalAll.removeClass('active');
            menuModal.addClass('active');
            body.addClass('modal-show-mb');
        });

    }

    const amwayBtnlogin = $('.amwayBtnlogin');
    amwayBtnlogin.each(actionAmwayBtnlogin);

    // Expose `actionAmwayBtnlogin` to $ for reuses
    $.actionAmwayBtnlogin = actionAmwayBtnlogin;
})();

(() => {
    function actionAmwayHam() {
        const AmwayHam = $(this);
        const body = $('body');
        const menuModal = $('.amway-header-modal[data-nav="nav-hamburger"]');
        const menuModalAll = $(".amway-header-modal");
        const amwaySubmenuAll = $('.acl-menu-list.has-sub');
        AmwayHam.on('click', () => {
            amwaySubmenuAll.removeClass('active');
            menuModalAll.removeClass('active');
            menuModal.addClass('active');
            body.addClass('modal-show-mb');
        })
    }

    const AmwayHam = $('.amway-hamburger');
    AmwayHam.each(actionAmwayHam);

    // Expose `actionAmwayHam` to $ for reuses
    $.actionAmwayHam = actionAmwayHam;
})();
$(window).resize(function() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 1024) {

        $('.amwaySubmenu').removeClass('active');
        $('.acl-menu-list.has-sub').removeClass('active');
        $(".amway-header-language").removeClass('active');
    } else {
        if ($('.acl-menu-list.has-sub').hasClass('active') == false) {
            $('body').removeClass('modal-show-d');
        }
    }
});
(() => {
    function actionAlertClose() {
        const AlertClose = $(this);
        const menuModal = $('.amway-header-noti');
        AlertClose.on('click', () => {
            menuModal.removeClass('active');

        });
    }

    const AlertClose = $('.amway-header-noti-close');
    AlertClose.each(actionAlertClose);

    // Expose `actionAlertClose` to $ for reuses
    $.actionAlertClose = actionAlertClose;
})();

(() => {
    function actionAmwaySwitchAccount() {
        const amwaySwitchAccount = $(this);
        const amwaySwitchAccountData = amwaySwitchAccount.attr('data-id');
        const menuModal = $(`.amway-header-modal[id="${amwaySwitchAccountData}"]`);
        const menuModalAll = $(".amway-header-modal");
        const body = $('body');
        amwaySwitchAccount.on('click', () => {
            menuModalAll.removeClass('active');
            menuModal.addClass('active');
            body.addClass('modal-show-mb');
        });

    }

    const amwaySwitchAccount = $('.btn-switch-account');
    amwaySwitchAccount.each(actionAmwaySwitchAccount);

    // Expose `actionAmwaySwitchAccount` to $ for reuses
    $.actionAmwaySwitchAccount = actionAmwaySwitchAccount;
})();