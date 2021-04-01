function selectedSearch() {
    const selectedSearchBtn = $(this);


    selectedSearchBtn.on('click', () => {
        selectedSearchBtn.toggleClass('selected');

    })


}
const selectedSearchBtn = $('.search-pd-card-btn');
selectedSearchBtn.each(selectedSearch);