(() => {
    $('.add-bank').scroll(function() {
        const title = $('.add-bank-bar-title')
        var top = $('.add-bank-content').offset().top;
        if(top < 0) {
            title.removeClass('hidden');
        } else {
            title.addClass('hidden');
        }
    });
})();