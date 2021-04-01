(() => {
    function tutorailsSharetoearn() {
        const btnSelectedtutorails = $(this);
        const mainContent = btnSelectedtutorails.parents('.sharetoearn-show-tr');

        btnSelectedtutorails.on('click', () => {

            mainContent.removeClass('active');
        });

    }

    const btnSelectedtutorails = $('.sharetoearn-show-tr-backdrop');
    btnSelectedtutorails.each(tutorailsSharetoearn);

    // Expose `tutorailsSharetoearn` to $ for reuses
    $.tutorailsSharetoearn = tutorailsSharetoearn;
})();