/* global $ */
(() => {
  const paymentContents = $('.oa-payment-method__content');

  function initPaymentMethod() {
    const paymentMethodContent = $(this);
    const paymentMethod = paymentMethodContent.parent();

    if (paymentMethodContent.attr('data-init')) return;

    paymentMethodContent.attr('data-init', true);

    paymentMethodContent.on('shown.bs.collapse', () => {
      paymentMethod.addClass('--active');
    });

    paymentMethodContent.on('hidden.bs.collapse', () => {
      paymentMethod.removeClass('--active');
    });
  }

  paymentContents.each(initPaymentMethod);
})();
