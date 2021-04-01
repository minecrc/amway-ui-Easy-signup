const countSelect = $('.count-select');
(() => {
    function initEditCheck() {
        const Chx = $(this)
        const ChxAll = $('.wldlh-chx-all');
        const ChxItem = $('.wldli-checkbox-input');
        Chx.on('change', () => {
            if ($(this).prop("checked") == true) {
                $(this).parents('.wishlist-detail-list-item').addClass('active');
                $('.amway-modal-bar').show();
                $('.padding-for-mobile').addClass('active');
                ChxAll.prop("checked", true);
                $('.wishlist-detail-list-header').addClass('active');
            } else if ($(this).prop("checked") == false) {
                $(this).parents('.wishlist-detail-list-item').removeClass('active');

            }
            var countCheckedCheckboxes = ChxItem.filter(':checked').length;
            var countAll = ChxItem.length;
            countSelect.text(countCheckedCheckboxes);
            if (countCheckedCheckboxes <= 0) {
                ChxAll.prop("checked", false);
                $('.wishlist-detail-list-header').removeClass('active');
                // $('.amway-modal-bar').hide();
                $('#submitCart').attr('disabled', true);
                $('#shereThis').attr('disabled', true);
                $('.wld-bar-zero').addClass('active');
                $('.padding-for-mobile').removeClass('active');
                $('.remove-select').addClass('active');
                $('.add-select').removeClass('active');
            } else if (countAll == countCheckedCheckboxes) {
                $('.remove-select').addClass('active');
                $('.add-select').removeClass('active');
            } else {
                $('#submitCart').attr('disabled', false);
                $('#shereThis').attr('disabled', false);
                $('.wld-bar-zero').removeClass('active');
                $('.add-select').addClass('active');
                $('.remove-select').removeClass('active');
            }
        })
    }
    const Chx = $('.wldli-checkbox-input');
    Chx.each(initEditCheck);
})();
(() => {
    function initEditCheckAll() {
        const ChxAll = $(this)
        const Chx = $('.wldli-checkbox-input');
        var countCheckedCheckboxes = Chx.filter(':checked').length;

        if (countCheckedCheckboxes <= 0) {
            ChxAll.prop("checked", false);
        }
        ChxAll.on('change', () => {
            if ($(this).prop("checked") == true) {
                $('#submitCart').attr('disabled', false);
                $('#shereThis').attr('disabled', false);
                $('.wld-bar-zero').removeClass('active');
                if (countCheckedCheckboxes == 0) {
                    Chx.prop("checked", true);
                    $('.wishlist-detail-list-item').addClass('active');
                    $('.amway-modal-bar').show();
                    $('.padding-for-mobile').addClass('active');
                    countSelect.text(Chx.filter(':checked').length);
                    $(this).parents('.wishlist-detail-list-header').addClass('active');
                    $('.remove-select').addClass('active');
                    $('.add-select').removeClass('active');
                } else {
                    $(this).parents('.wishlist-detail-list-header').addClass('active');
                    $('.add-select').addClass('active');
                    $('.remove-select').removeClass('active');
                }


            } else if ($(this).prop("checked") == false) {
                $(this).parents('.wishlist-detail-list-header').removeClass('active');
                Chx.prop("checked", false);
                $('.wishlist-detail-list-item').removeClass('active');
                countSelect.text(Chx.filter(':checked').length);
                // $('.amway-modal-bar').hide();
                $('#submitCart').attr('disabled', true);
                $('#shereThis').attr('disabled', true);
                $('.wld-bar-zero').addClass('active');
                $('.padding-for-mobile').removeClass('active');
            }
        })
    }
    const ChxAll = $('.wldlh-chx-all');
    ChxAll.each(initEditCheckAll);
})();
(() => {
    $('#submitCart').attr('disabled', true);
    $('#shereThis').attr('disabled', true);
    $('.wld-bar-zero').addClass('active');
    $('.padding-for-mobile').removeClass('active');
    $('.add-select').on('click', () => {
        const ChxAll = $('.wldlh-chx-all');
        const ChxItem = $('.wldli-checkbox-input');
        ChxAll.prop("checked", true);
        ChxItem.prop("checked", true);
        $('.wishlist-detail-list-item').addClass('active');
        $('.amway-modal-bar').show();
        $('.padding-for-mobile').addClass('active');
        var countCheckedCheckboxes = ChxItem.filter(':checked').length;
        var countAll = ChxItem.length;
        countSelect.text(countCheckedCheckboxes);
        if (countCheckedCheckboxes <= 0) {
            ChxAll.prop("checked", false);
            $('#submitCart').attr('disabled', true);
            $('#shereThis').attr('disabled', true);
            $('.wld-bar-zero').addClass('active');
            $('.wishlist-detail-list-header').removeClass('active');
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
            $('.wld-bar-zero').removeClass('active');
            $('.add-select').addClass('active');
            $('.remove-select').removeClass('active');
        }
    })
    $('.remove-select').on('click', () => {
        const ChxAll = $('.wldlh-chx-all');
        const ChxItem = $('.wldli-checkbox-input');
        ChxAll.prop("checked", false);
        ChxItem.prop("checked", false);
        $('.wishlist-detail-list-header').removeClass('active');
        $('.wishlist-detail-list-item').removeClass('active');
        // $('.amway-modal-bar').hide();
        $('#submitCart').attr('disabled', true);
        $('#shereThis').attr('disabled', true);
        $('.wld-bar-zero').addClass('active');
        $('.padding-for-mobile').removeClass('active');
        var countCheckedCheckboxes = ChxItem.filter(':checked').length;
        countSelect.text(countCheckedCheckboxes);
    })
    $('.add-select-mb').on('click', () => {
        const ChxAll = $('.wldlh-chx-all');
        const ChxItem = $('.wldli-checkbox-input');
        ChxAll.prop("checked", true);
        ChxItem.prop("checked", true);
        $('.wishlist-detail-list-header').addClass('active');
        $('.amway-modal-bar').show();
        $('#submitCart').attr('disabled', false);
        $('#shereThis').attr('disabled', false);
        $('.wld-bar-zero').removeClass('active');
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