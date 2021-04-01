(() => {
    function actionAmwaycollapse() {
        const AmwaycollapseBtn = $(this);
        const AmwaycollapseData = AmwaycollapseBtn.parents().attr('data-collapse');
        const AmwaycollapseContent = $(`[data-collapse="${AmwaycollapseData}"] .collapse-content`).first();
        AmwaycollapseBtn.on('click', () => {
            AmwaycollapseBtn.toggleClass('active');
            AmwaycollapseContent.toggleClass('--show');
        })
    }

    const AmwaycollapseBtn = $('.collapse-btn');
    AmwaycollapseBtn.each(actionAmwaycollapse);

    // Expose `actionAmwaycollapse` to $ for reuses
    $.actionAmwaycollapse = actionAmwaycollapse;
})();