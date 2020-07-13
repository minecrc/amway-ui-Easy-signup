/* global $ */
(() => {
  const copyButtons = $('[data-copy-button]');

  function initCopyButton() {
    const copyButton = $(this);
    const id = copyButton.attr('id');
    const input = $(`#${id}-input`).get(0);
    const tooltip = $(`#${id}-tooltip`);

    copyButton.on('click', () => {
      input.select();
      input.setSelectionRange(0, 999999);

      let succeeded = false;

      try {
        succeeded = document.execCommand('copy');
      } catch (e) {
        console.error(e);
      }

      if (succeeded) {
        tooltip.removeClass('--active');

        window.requestAnimationFrame(() => {
          tooltip.addClass('--active');
          setTimeout(() => {
            tooltip.removeClass('--active');
          }, 1000);
        });
      }
    });
  }

  copyButtons.each(initCopyButton);
})();
