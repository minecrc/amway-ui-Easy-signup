(() => {
    function initLanguage() {
        const Language = $(this);
        const btn = Language.find(".ahl-btn");
        const inputLang = $('#inputLanguage');
        const listMenu = Language.find(".ahl-menu-list");
        btn.on('click', () => {
            Language.toggleClass('active');
            $('.amway-header-modal.for-changeLang').toggleClass('active');
        })
    }

    const Language = $('.amway-header-language');
    Language.each(initLanguage);

    // Expose `initLanguage` to $ for reuses
    $.initLanguage = initLanguage;
})();
(() => {
    function chooseLanguage() {
        const LanguageList = $(this);
        const LanguageListALL = $('.ahl-menu-list');
        const inputLanguage = $('.inputLanguage');
        const LanguageData = LanguageList.attr('data-lang')
        const LanguageListMb = $(`.amway-header-language-list[data-lang="${LanguageData}"]`);
        const LanguageListMbAll = $('.amway-header-language-list');
        LanguageList.on('click', () => {
            $('.amway-header-modal.for-changeLang').removeClass('active');
            LanguageList.parents(".amway-header-language").removeClass('active');
            LanguageListALL.removeClass('--active');
            LanguageList.addClass('--active');
            LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
            inputLanguage.val(LanguageData)
            LanguageListMbAll.removeClass('--selected');
            LanguageListMb.addClass('--selected');

        })
    }

    const LanguageList = $('.ahl-menu-list');
    LanguageList.each(chooseLanguage);

    // Expose `chooseLanguage` to $ for reuses
    $.chooseLanguage = chooseLanguage;
})();
(() => {
    function chooseLanguageMB() {
        const LanguageListMB = $(this);
        const LanguageListMbAll = $('.amway-header-language-list');
        const inputLanguage = $('.inputLanguage');
        const LanguageListMBData = LanguageListMB.attr('data-lang')
        const LanguageListALL = $('.ahl-menu-list');
        const LanguageList = $(`.ahl-menu-list[data-lang="${LanguageListMBData}"]`);
        LanguageListMB.on('click', () => {
            LanguageList.parents(".amway-header-language").removeClass('active');
            LanguageListALL.removeClass('--active');
            LanguageList.addClass('--active');
            LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
            inputLanguage.val(LanguageListMBData)
            LanguageListMbAll.removeClass('--selected');
            LanguageListMB.addClass('--selected');

        })
    }

    const LanguageListMB = $('.amway-header-language-list');
    LanguageListMB.each(chooseLanguageMB);

    // Expose `chooseLanguageMB` to $ for reuses
    $.chooseLanguageMB = chooseLanguageMB;
})();
(() => {
    function chooseLanguageInput() {
        const inputLanguage = $(this);
        const inputLanguageData = inputLanguage.val()
        const LanguageListMbAll = $('.amway-header-language-list');
        const LanguageListALL = $('.ahl-menu-list');
        const LanguageList = $(`.ahl-menu-list[data-lang="${inputLanguageData}"]`);
        const LanguageListMB = $(`.amway-header-language-list[data-lang="${inputLanguageData}"]`);
        LanguageList.parents(".amway-header-language").removeClass('active');
        LanguageListALL.removeClass('--active');
        LanguageList.addClass('--active');
        LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
        inputLanguage.val(inputLanguageData)
        LanguageListMbAll.removeClass('--selected');
        LanguageListMB.addClass('--selected');

    }

    const inputLanguage = $('.inputLanguage');
    inputLanguage.each(chooseLanguageInput);

    // Expose `chooseLanguageInput` to $ for reuses
    $.chooseLanguageInput = chooseLanguageInput;
})();

$(window).resize(function() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 1024) {
        $('.amwaySubmenu').removeClass('active');
        $('.for-changeLang').removeClass('active');
    }
});