/* global $ */
(() => {
  function initToggleButton() {
    const toggleButton = $(this);

    const activeBackground = toggleButton.find(
      '.mz-toggle-button__active-background'
    );
    const buttons = toggleButton.find('.mz-toggle-button__button');

    buttons.each((index, b) => {
      const button = $(b);

      button.on('click', () => {
        if (!button.hasClass('--ative')) {
          buttons.removeClass('--active');
          button.addClass('--active');
          activeBackground.css('transform', `translate3d(${index * 100}%,0,0)`);
        }
      });
    });
  }

  const toggleButtons = $('.mz-toggle-button');

  toggleButtons.each(initToggleButton);
})();
