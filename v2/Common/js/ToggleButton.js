/* global $ */
(() => {
  function updateBackground(button) {
    const activeBackground = this.find('.mz-toggle-button__active-background');
    const activeButton =
      button || this.find('.mz-toggle-button__button.--active');
    if (activeButton) {
      activeBackground.css('width', `${activeButton.outerWidth()}px`);
      activeBackground.css(
        'transform',
        `translate3d(${activeButton.position().left}px,0,0)`
      );
    }
  }

  function initToggleButton() {
    const toggleButton = $(this);
    const buttons = toggleButton.find('.mz-toggle-button__button');

    buttons.each((_, b) => {
      const button = $(b);

      button.on('click', () => {
        if (!button.hasClass('--active')) {
          buttons.removeClass('--active');
          button.addClass('--active');
          updateBackground.call(toggleButton, button);
        }
      });
    });

    updateBackground.call(toggleButton);

    window.addEventListener('resize', () => {
      updateBackground.call(toggleButton);
    });
  }

  const toggleButtons = $('.mz-toggle-button');

  toggleButtons.each(initToggleButton);

  // Added 'update:background' method for external update of background
  $.fn.toggleButton = function toggleButton(method) {
    if (!this.hasClass('mz-toggle-button')) {
      return;
    }
    if (method === 'update:background') {
      updateBackground.call(this);
    }
  };
})();
