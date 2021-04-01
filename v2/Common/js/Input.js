/* global $ */
(() => {
  function initInput() {
    const input = $(this).find('.mz-input__input');
    const clearButton = $(this).find('.mz-input__clear-button');

    input.on('change keyup paste', () => {
      if (input.val().trim()) {
        clearButton.addClass('--active');
      } else {
        clearButton.removeClass('--active');
      }
    });

    clearButton.on('click', () => {
      input.val('');
      input.trigger('change');
    });
  }

  const inputs = $('.mz-input');

  inputs.each(initInput);
})();
