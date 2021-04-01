(() => {
    function openImage() {
        const imageThumbnail = $(this);
        const popup = $('.image-popup');
        imageThumbnail.on('click', function() {
            popup.addClass('active');
        });
    }

    const image = $('.bank-detail-image');
    image.each(openImage);

    $.openImage = openImage;
})();

(() => {
    function closePopup() {
        const bg = $(this);
        const popup = $('.image-popup');
        const btnClose = $('.image-popup-close');
        bg.on('click', function() {
            popup.removeClass('active');
        });
        btnClose.on('click', function() {
            popup.removeClass('active');
        });
    }

    const bg = $('.popup-bg');
    bg.each(closePopup);

    $.closePopup = closePopup;
})();