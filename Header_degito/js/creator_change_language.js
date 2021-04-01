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
        const LanguageListMb = $(`.shop-f-content-language-text-list[data-lang="${LanguageData}"]`);
        const LanguageListMbAll = $('.shop-f-content-language-text-list');
        const LanguageListMbslectedAll = $(`.shop-change-lang-footer-btn`);
        const LanguageListMbslected = $(`.shop-change-lang-footer-btn[data-lang="${LanguageData}"]`);
        LanguageList.on('click', () => {
            $('.amway-header-modal.for-changeLang').removeClass('active');
            LanguageList.parents(".amway-header-language").removeClass('active');
            LanguageListALL.removeClass('--active');
            LanguageList.addClass('--active');
            LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
            inputLanguage.val(LanguageData)
            LanguageListMbAll.removeClass('active');
            LanguageListMb.addClass('active');
            LanguageListMbslectedAll.removeClass('active');
            LanguageListMbslected.addClass('active');
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
        const LanguageListMbAll = $('.shop-f-content-language-text-list');
        const inputLanguage = $('.inputLanguage');
        const LanguageListMBData = LanguageListMB.attr('data-lang')
        const LanguageListALL = $('.ahl-menu-list');
        const LanguageList = $(`.ahl-menu-list[data-lang="${LanguageListMBData}"]`);
        const LanguageListMbSlect = $(`.shop-f-content-language-text-list[data-lang="${LanguageListMBData}"]`);
        const LanguageListMbslectedAll = $(`.shop-change-lang-footer-btn`);
        const LanguageListMbslected = $(`.shop-change-lang-footer-btn[data-lang="${LanguageListMBData}"]`);
        LanguageListMB.on('click', () => {
            LanguageList.parents(".amway-header-language").removeClass('active');
            LanguageListALL.removeClass('--active');
            LanguageList.addClass('--active');
            LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
            inputLanguage.val(LanguageListMBData)
            LanguageListMbAll.removeClass('active');
            LanguageListMbSlect.addClass('active');
            LanguageListMbslectedAll.removeClass('active');
            LanguageListMbslected.addClass('active');
        })
    }

    const LanguageListMB = $('.shop-change-lang-footer-btn');
    LanguageListMB.each(chooseLanguageMB);

    // Expose `chooseLanguageMB` to $ for reuses
    $.chooseLanguageMB = chooseLanguageMB;
})();
// (() => {
//     function chooseLanguageMBmiddle() {
//         const LanguageListMBmiddle = $(this);
//         const LanguageListMbAll = $('.shop-f-content-language-text-list');
//         const inputLanguage = $('.inputLanguage');
//         const LanguageListMBData = LanguageListMBmiddle.attr('data-lang')
//         const LanguageListALL = $('.ahl-menu-list');
//         const LanguageList = $(`.ahl-menu-list[data-lang="${LanguageListMBData}"]`);
//         const LanguageListMbSlect = $(`.shop-f-content-language-text-list[data-lang="${LanguageListMBData}"]`);
//         LanguageListMBmiddle.on('click', () => {
//             LanguageList.parents(".amway-header-language").removeClass('active');
//             LanguageListALL.removeClass('--active');
//             LanguageList.addClass('--active');
//             LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
//             inputLanguage.val(LanguageListMBData)
//             LanguageListMbAll.removeClass('active');
//             LanguageListMbSlect.addClass('active');

//         })
//     }

//     const LanguageListMBmiddle = $('.shop-change-lang-middle-btn');
//     LanguageListMBmiddle.each(chooseLanguageMBmiddle);

//     // Expose `chooseLanguageMBmiddle` to $ for reuses
//     $.chooseLanguageMBmiddle = chooseLanguageMBmiddle;
// })();

(() => {
    function chooseLanguageInput() {
        const inputLanguage = $(this);
        const inputLanguageData = inputLanguage.val()
        const LanguageListMbAll = $('.shop-f-content-language-text-list');
        const LanguageListALL = $('.ahl-menu-list');
        const LanguageList = $(`.ahl-menu-list[data-lang="${inputLanguageData}"]`);
        const LanguageListMB = $(`.shop-f-content-language-text-list[data-lang="${inputLanguageData}"]`);
        const LanguageListMbslectedAll = $(`.shop-change-lang-footer-btn`);
        const LanguageListMbslected = $(`.shop-change-lang-footer-btn[data-lang="${inputLanguageData}"]`);
        LanguageList.parents(".amway-header-language").removeClass('active');
        LanguageListALL.removeClass('--active');
        LanguageList.addClass('--active');
        LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
        inputLanguage.val(inputLanguageData)
        LanguageListMbAll.removeClass('active');
        LanguageListMB.addClass('active');
        LanguageListMbslectedAll.removeClass('active');
        LanguageListMbslected.addClass('active');

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