$('.choose-banner-profile').slick({
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

function initThemeProfile() {
    const theme = $(this);
    const AllTheme = $('.cbp-list-image');
    const inputTheme = $('#themeProfile');
    theme.on('click', () => {
        AllTheme.removeClass('active');
        theme.addClass('active');
        inputTheme.val(theme.attr('data-theme'));
    })
}
const ThemeProfile = $('.cbp-list-image');
ThemeProfile.each(initThemeProfile);