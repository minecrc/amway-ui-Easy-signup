const countSelect = $('.count-select');
const countSelectBtn = $('.count-select-btn');
(() => {
    function initEditCheck() {
        const Chx = $(this)
        const ChxAll = $('.shop-list-all-chx-all');
        const ChxItem = $('.shop-list-pdI-checkbox-input');
        Chx.on('change', () => {
            if ($(this).prop("checked") == true) {
                $(this).parents('.shop-list-pd-item').addClass('active');
                $('.amway-modal-bar').show();
                $('.padding-for-mobile').addClass('active');
                ChxAll.prop("checked", true);
                $('.shop-list-all-header').addClass('active');
                $('.shop-list-select-bar').addClass('active');
            } else if ($(this).prop("checked") == false) {
                $(this).parents('.shop-list-pd-item').removeClass('active');

            }
            var countCheckedCheckboxes = ChxItem.filter(':checked').length;
            var countAll = ChxItem.length;
            countSelect.text(countCheckedCheckboxes);
            countSelectBtn.text('(' + countCheckedCheckboxes + ')');
            if (countCheckedCheckboxes <= 0) {
                ChxAll.prop("checked", false);
                $('.shop-list-all-header').removeClass('active');
                $('.shop-list-select-bar').removeClass('active');
                // $('.amway-modal-bar').hide();
                $('#submitCart').attr('disabled', true);
                $('#shereThis').attr('disabled', true);
                $('.shop-list-barI-bar-zero').addClass('active');
                $('.padding-for-mobile').removeClass('active');
                $('.remove-select').addClass('active');
                $('.add-select').removeClass('active');
            } else if (countAll == countCheckedCheckboxes) {
                $('.remove-select').addClass('active');
                $('.add-select').removeClass('active');
            } else {
                $('#submitCart').attr('disabled', false);
                $('#shereThis').attr('disabled', false);
                $('.shop-list-barI-bar-zero').removeClass('active');
                $('.add-select').addClass('active');
                $('.remove-select').removeClass('active');
            }
        })
    }
    const Chx = $('.shop-list-pdI-checkbox-input');
    Chx.each(initEditCheck);
})();
(() => {
    function initEditCheckAll() {
        const ChxAll = $(this)
        const Chx = $('.shop-list-pdI-checkbox-input');
        var countCheckedCheckboxes = Chx.filter(':checked').length;
        var countSoldOutCheckboxes = Chx.filter(':disabled').length;
        if (countCheckedCheckboxes <= 0) {
            ChxAll.prop("checked", false);
        }
        ChxAll.on('change', () => {

            if ($(this).prop("checked") == true) {
                $('#submitCart').attr('disabled', false);
                $('#shereThis').attr('disabled', false);
                $('.shop-list-barI-bar-zero').removeClass('active');
                if (countCheckedCheckboxes == 0) {
                    Chx.prop("checked", true);
                    $('.shop-list-pd-item').addClass('active');
                    $('.amway-modal-bar').show();
                    $('.padding-for-mobile').addClass('active');
                    countSelect.text(Chx.filter(':checked').length);
                    countSelectBtn.text('(' + Chx.filter(':checked').length + ')');
                    $(this).parents('.shop-list-all-header').addClass('active');
                    $('.shop-list-select-bar').addClass('active');
                    $('.remove-select').addClass('active');
                    $('.add-select').removeClass('active');
                } else {
                    $(this).parents('.shop-list-all-header').addClass('active');
                    $('.shop-list-select-bar').addClass('active');
                    $('.add-select').addClass('active');
                    $('.remove-select').removeClass('active');
                }


            } else if ($(this).prop("checked") == false) {
                $(this).parents('.shop-list-all-header').removeClass('active');
                $('.shop-list-select-bar').removeClass('active');
                Chx.prop("checked", false);
                $('.shop-list-pd-item').removeClass('active');
                countSelect.text(Chx.filter(':checked').length);
                countSelectBtn.text('(' + Chx.filter(':checked').length + ')');
                // $('.amway-modal-bar').hide();
                $('#submitCart').attr('disabled', true);
                $('#shereThis').attr('disabled', true);
                $('.shop-list-barI-bar-zero').addClass('active');
                $('.padding-for-mobile').removeClass('active');
            }
            // $('.shop-list-pdI-checkbox-input:disabled').
            // prop('checked', false);
        })
    }
    const ChxAll = $('.shop-list-all-chx-all');
    ChxAll.each(initEditCheckAll);
})();
(() => {
    $('#submitCart').attr('disabled', true);
    $('#shereThis').attr('disabled', true);
    $('.shop-list-barI-bar-zero').addClass('active');
    $('.padding-for-mobile').removeClass('active');
    $('.add-select').on('click', () => {
        const ChxAll = $('.shop-list-all-chx-all');
        const ChxItem = $('.shop-list-pdI-checkbox-input');
        ChxAll.prop("checked", true);
        ChxItem.prop("checked", true);
        $('.shop-list-pd-item').addClass('active');
        $('.amway-modal-bar').show();
        $('.padding-for-mobile').addClass('active');
        var countCheckedCheckboxes = ChxItem.filter(':checked').length;
        var countAll = ChxItem.length;
        countSelect.text(countCheckedCheckboxes);
        countSelectBtn.text('(' + countCheckedCheckboxes + ')');
        if (countCheckedCheckboxes <= 0) {
            ChxAll.prop("checked", false);
            $('#submitCart').attr('disabled', true);
            $('#shereThis').attr('disabled', true);
            $('.shop-list-barI-bar-zero').addClass('active');
            $('.shop-list-all-header').removeClass('active');
            $('.shop-list-select-bar').removeClass('active');
            // $('.amway-modal-bar').hide();
            $('#submitCart').attr('disabled', true);
            $('#shereThis').attr('disabled', true);
            $('.padding-for-mobile').removeClass('active');
            $('.remove-select').addClass('active');
            $('.add-select').removeClass('active');
        } else if (countAll == countCheckedCheckboxes) {
            $('.remove-select').addClass('active');
            $('.add-select').removeClass('active');
        } else {
            $('#submitCart').attr('disabled', false);
            $('#shereThis').attr('disabled', false);
            $('.shop-list-barI-bar-zero').removeClass('active');
            $('.add-select').addClass('active');
            $('.remove-select').removeClass('active');
        }
    })
    $('.remove-select').on('click', () => {
        const ChxAll = $('.shop-list-all-chx-all');
        const ChxItem = $('.shop-list-pdI-checkbox-input');
        ChxAll.prop("checked", false);
        ChxItem.prop("checked", false);
        $('.shop-list-all-header').removeClass('active');
        $('.shop-list-select-bar').removeClass('active');
        $('.shop-list-pd-item').removeClass('active');
        // $('.amway-modal-bar').hide();
        $('#submitCart').attr('disabled', true);
        $('#shereThis').attr('disabled', true);
        $('.shop-list-barI-bar-zero').addClass('active');
        $('.padding-for-mobile').removeClass('active');
        var countCheckedCheckboxes = ChxItem.filter(':checked').length;
        countSelect.text(countCheckedCheckboxes);
        countSelectBtn.text('(' + countCheckedCheckboxes + ')');
    })
    $('.add-select-mb').on('click', () => {
        const ChxAll = $('.shop-list-all-chx-all');
        const ChxItem = $('.shop-list-pdI-checkbox-input');
        ChxAll.prop("checked", true);
        ChxItem.prop("checked", true);
        $('.shop-list-all-header').addClass('active');
        $('.shop-list-select-bar').addClass('active');
        $('.amway-modal-bar').show();
        $('#submitCart').attr('disabled', false);
        $('#shereThis').attr('disabled', false);
        $('.shop-list-barI-bar-zero').removeClass('active');
        $('.padding-for-mobile').addClass('active');
    })
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 1024) {

        $('.shereThis').text('แชร์');
    } else {
        $('.shereThis').text('แชร์รายการ');
    }
    $(window).resize(function() {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width < 1024) {

            $('.shereThis').text('แชร์');
        } else {
            $('.shereThis').text('แชร์รายการ');
        }
    });
})();