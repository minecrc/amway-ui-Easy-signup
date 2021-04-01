$('.choose-banner-wishlist').slick({
    dots: false,
    infinite: false,
    arrows: false,
    variableWidth: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1023,
        settings: {
            variableWidth: true,
            slidesToShow: 4,
            slidesToScroll: 1,
        }
    }]
});

function initTheme() {
    const theme = $(this);
    const AllTheme = $('.cbw-list-image');
    const inputTheme = $('#themeSharelist');
    theme.on('click', () => {
        AllTheme.removeClass('active');
        theme.addClass('active');
        inputTheme.val(theme.attr('data-theme'));
    })
}
const theme = $('.cbw-list-image');
theme.each(initTheme);

var regList = /^([A-Za-z0-9_\-ก-๏\.])/;
var modalListInput = $("#newShareList");
var inputChxList = modalListInput.find('.amway-input');
var btnSendList = modalListInput.find('.confirm')
activeNewSend()

function activeNewSend() {
    if (regList.test(inputChxList.val()) == false) {
        btnSendList.removeClass('active');
        btnSendList.attr('disabled', true);
    } else {
        btnSendList.addClass('active');
        btnSendList.attr('disabled', false);
    }

}

inputChxList.change(() => {
    activeNewSend()
});