(() => {
    function initPdCard() {

        const pdCard = $(this);
        const checkBox = pdCard.find('.acc-input');
        const checkAll = $('.amway-card-list .amway-card .amway-card-check .acc-input');
        const linkAllpd = $('.acc-btn-list');
        const BarPopup = $('.amway-add-cart');
        const chooseShortDetail = $('.acc-pdl-detail');
        const countChx = BarPopup.find('.acc-choose-product');

        function checkCount() {
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            var countCheckedCheckboxes = checkAll.filter(':checked').length;
            countChx.text(countCheckedCheckboxes);
            if (width > 1023) {
                /*  chooseShortDetail.show(); */
                linkAllpd.text('ดูสินค้าที่เลือก');
            } else {
                /*  chooseShortDetail.hide(); */
                linkAllpd.text('คลิกดู ' + countCheckedCheckboxes + ' รายการที่เลือก');
            }
            if (countCheckedCheckboxes > 0) {
                BarPopup.show();

            } else {
                BarPopup.hide();
            }
        }
        checkCount()
        checkBox.change(() => {
            if (checkBox.prop("checked") == true) {
                pdCard.addClass('active');
            } else if (checkBox.prop("checked") == false) {
                pdCard.removeClass('active');
            }
        });
        checkAll.change(() => {
            checkCount()
        });
        $(window).resize(() => {
            checkCount()
        });
    }
    const pdCard = $('.amway-card');
    pdCard.each(initPdCard);
})();