(() => {
    function chooseDeliveryBtn() {
        const delivery = $(this);
        const deliveryAll = $('.ahd-bar-list');
        const deliveryData = delivery.attr('data-delivery');
        const deliverySame = $(`.ahd-bar-list[data-delivery="${deliveryData}"]`);
        const deliveryBox = $(`.amway-header-delivery-addressShow[data-delivery="${deliveryData}"] `);
        const deliveryBoxAll = $('.amway-header-delivery-addressShow');
        const deliveryBoxMb = $(`.ahd-delivery-addressShow[data-delivery="${deliveryData}"] `);
        const deliveryBoxAllMb = $('.ahd-delivery-addressShow');
        const deliveryTypeMb = $(`.ahd-type[data-delivery="${deliveryData}"] `);
        const deliveryTypeAllMb = $('.ahd-type');
        const inputDelivery = $('.inputDelivery');
        const menuSelectOnMb = $(`.ahd-bar-menu-select-area[data-delivery="${deliveryData}"]`);
        const menuSelectOnMbAll = $('.ahd-bar-menu-select-area');
        const chooseBarMb = $('.amway-header-delivery');
        const modelAll = $('.ahd-choose-menu');
        delivery.on('click', () => {
            deliveryAll.removeClass('--active');
            deliveryBoxAll.removeClass('active');
            deliveryBox.addClass('active');
            deliveryBoxAllMb.removeClass('active');
            deliveryBoxMb.addClass('active');
            deliveryTypeAllMb.removeClass('active');
            deliveryTypeMb.addClass('active');
            menuSelectOnMbAll.removeClass('active');
            menuSelectOnMb.addClass('active');
            chooseBarMb.attr('class', `amway-header-delivery ${deliveryData}`)
            modelAll.removeClass('active');
            deliverySame.addClass('--active');
            $('.ahd-bar').attr('class', `ahd-bar ${deliveryData}`)
            inputDelivery.val(deliveryData);
        });
    }

    const delivery = $('.ahd-bar-list');
    delivery.each(chooseDeliveryBtn);

    // Expose `chooseDelivery` to $ for reuses
    $.chooseDeliveryBtn = chooseDeliveryBtn;
})();
(() => {
    function actionDeliveryMB() {
        const deliveryBtn = $(this);
        const model = $('.nav-delivery');
        const body = $('body');
        deliveryBtn.on('click', () => {
            model.addClass('active');
            body.addClass('modal-show-mb');
        })
    }

    const deliveryBtn = $('.amway-header-delivery');
    deliveryBtn.each(actionDeliveryMB);

    // Expose `actionDeliveryMB` to $ for reuses
    $.actionDeliveryMB = actionDeliveryMB;
})();

(() => {
    function actionDelivery() {
        const deliveryBtn = $(this);
        const deliveryData = deliveryBtn.attr('data-delivery');
        const model = $(`.ahd-choose-menu[data-delivery="${deliveryData}"]`);
        const box = deliveryBtn.find('.ahd-delivery-addressShow');
        deliveryBtn.on('click', () => {
            model.toggleClass('active');
            box.toggleClass('active');
            $('.amway-header-modal.for-changeAddress').toggleClass('active');
        })
    }

    const deliveryBtn = $('.amway-header-delivery-addressShow');
    deliveryBtn.each(actionDelivery);

    // Expose `actionDelivery` to $ for reuses
    $.actionDelivery = actionDelivery;
})();
(() => {
    function chooseDelivery() {
        const deliveryBtn = $(this);
        const deliveryTextData = deliveryBtn.find('.ahd-cd-text').text();
        const model = $(`.amway-header-delivery-addressShow[data-delivery="delivery"]`);
        const modelMb = $(`.ahd-delivery-addressShow[data-delivery="delivery"]`);
        const box = model.find('.ahd-delivery-text');
        const boxMb = modelMb.find('.ahd-delivery-text');
        const MainModelMb = $('.nav-delivery');
        const MainModel = $('.ahd-choose-menu[data-delivery="delivery"]')
        const body = $('body');
        deliveryBtn.on('click', () => {
            model.addClass('active');
            box.text(deliveryTextData);
            boxMb.text(deliveryTextData);
            MainModelMb.removeClass('active');
            MainModel.removeClass('active');
            body.removeClass('modal-show-mb');
            $('.amway-header-delivery-addressShow[data-delivery="delivery"] .ahd-delivery-addressShow.active').removeClass('active');
            $('.amway-header-modal.for-changeAddress').removeClass('active');
        })
    }

    const deliveryBtn = $('.ahd-choose-delivery');
    deliveryBtn.each(chooseDelivery);

    // Expose `chooseDelivery` to $ for reuses
    $.chooseDelivery = chooseDelivery;
})();
(() => {
    function chooseShop() {
        const shopBtn = $(this);
        const shopTextData = shopBtn.find('.ahd-pickup-select-list-text').text();
        const model = $(`.amway-header-delivery-addressShow[data-delivery="pickup"]`);
        const modelMb = $(`.ahd-delivery-addressShow[data-delivery="pickup"]`);
        const box = model.find('.ahd-delivery-text');
        const boxMb = modelMb.find('.ahd-delivery-text');
        const MainModelMb = $('.nav-delivery');
        const MainModel = $('.ahd-choose-menu[data-delivery="pickup"]');
        const body = $('body');
        shopBtn.on('click', () => {
            model.addClass('active');
            box.html(shopTextData);
            boxMb.html(shopTextData);
            MainModelMb.removeClass('active');
            MainModel.removeClass('active');
            body.removeClass('modal-show-mb');
            $('.amway-header-delivery-addressShow[data-delivery="pickup"] .ahd-delivery-addressShow.active').removeClass('active');
            $('.amway-header-modal.for-changeAddress').removeClass('active');
        })

    }

    const shopBtn = $('.ahd-pickup-select-list');
    shopBtn.each(chooseShop);

    // Expose `chooseShop` to $ for reuses
    $.chooseShop = chooseShop;
})();
(() => {
    function actionBgGreyChangeAddress() {
        const BgGrey = $(this);
        const menuModal = $('.amway-header-modal');
        const Model = $('.ahd-choose-menu');
        const box = $('.amway-header-delivery-addressShow .ahd-delivery-addressShow');
        const body = $('body');
        BgGrey.on('click', () => {
            menuModal.removeClass('active');
            body.removeClass('modal-show');
            $(".amway-header-language").removeClass('active');
            Model.removeClass('active');
            box.removeClass('active');
        });
    }

    const actionBgGrey = $('.for-changeAddress .bg-ahm');
    actionBgGrey.each(actionBgGreyChangeAddress);

    // Expose `actionBgGrey` to $ for reuses
    $.actionBgGreyChangeAddress = actionBgGreyChangeAddress;
})();