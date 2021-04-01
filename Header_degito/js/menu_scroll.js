(() => {
    if($(window).outerHeight() > 425) {
        const height = $(window).height() - $('.ah-info-user').outerHeight() - 60;
        $('.ah-container-scroll').css('max-height', ''+ height +'px');
    } else {
        $('.ah-container-scroll').css('max-height', 'none');
    }
})();

$(window).resize(function() {
    if($(window).outerHeight() > 425) {
        const height = $(window).height() - $('.ah-info-user').outerHeight() - 60;
        $('.ah-container-scroll').css('max-height', ''+ height +'px');
    } else {
        $('.ah-container-scroll').css('max-height', 'none');
    }
});