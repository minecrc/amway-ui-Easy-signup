/* global $ */
(() => {
  function initRefCopyButton() {
    const $this = $(this);
    const tooltip = $this.find('.mz-payment-info__copy-tooltip');

    $this.on('click', () => {
      const input = $this.find('input').get(0);
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

  $('.mz-payment-info__copy-button').each(initRefCopyButton);
})();
