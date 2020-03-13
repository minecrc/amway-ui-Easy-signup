/* global $ */
(() => {
  const paymentLayout = $('.oa-payment-layout');
  const orderSummary = paymentLayout.find('.oa-payment-layout__order-summary');
  const orderDetails = paymentLayout.find('#order-details');

  function initPaymentLayout() {
    if (paymentLayout.attr('data-init')) return;

    paymentLayout.attr('data-init', true);

    paymentLayout.css('paddingBottom', orderSummary.outerHeight());
    orderDetails.css('bottom', orderSummary.outerHeight());

    orderSummary.on('click', () => {
      orderSummary.toggleClass('--active');
      orderDetails.toggleClass('--active');
    });
  }

  initPaymentLayout();
})();
