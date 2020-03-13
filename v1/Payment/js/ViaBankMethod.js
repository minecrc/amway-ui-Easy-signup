/* global $ */
(() => {
  function initBankSelector() {
    const backSelector = $('#bank-selection');

    if (backSelector.attr('data-init')) return;

    backSelector.attr('data-init', true);

    backSelector.on('change', (e, label, value) => {
      if (value) {
        $(`#bank-option-selection`).collapse('show');
      }
    });
  }

  initBankSelector();
})();
