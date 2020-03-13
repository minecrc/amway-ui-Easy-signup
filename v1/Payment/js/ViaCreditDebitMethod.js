/* global $ */
(() => {
  // NOTE: Keep this in sync with header's break point
  const BREAKPOINT = 992;

  function initCreditDebitSelector() {
    const cardSelector = $('#card-selection');

    if (cardSelector.attr('data-init')) return;

    cardSelector.attr('data-init', true);

    cardSelector.on('change', (e, label, value) => {
      if (!value) return;

      const windowWidth = $(window).width();

      if (windowWidth <= BREAKPOINT) {
        $(`.oa-via-credit-debit-method__collapsible-section`).collapse('show');
      }
    });
  }

  initCreditDebitSelector();
})();
