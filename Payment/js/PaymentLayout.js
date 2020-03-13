/* global $ */
(() => {
  const orderSummary = $('.oa-payment-layout__order-summary');
  const orderDetails = $('.oa-payment-layout__order-details');
  const hideButton = $('.oa-payment-layout__hide-button');

  orderSummary.on('click', () => {
    orderDetails.toggleClass('--active');
  });

  hideButton.on('click', () => {
    orderDetails.removeClass('--active');
  });
})();
