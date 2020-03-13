/* global $ */
(() => {
  const paymentMethodHeaders = $('.oa-payment-method__method-content');

  function initPaymentMethod() {
    const paymentMethodHeader = $(this);
    const paymentMethod = paymentMethodHeader.parent();

    if (paymentMethodHeader.attr('data-init')) return;

    paymentMethodHeader.attr('data-init', true);

    paymentMethodHeader.on('shown.bs.collapse', () => {
      paymentMethod.addClass('--active');
    });

    paymentMethodHeader.on('hidden.bs.collapse', () => {
      paymentMethod.removeClass('--active');
    });
  }

  paymentMethodHeaders.each(initPaymentMethod);
})();
