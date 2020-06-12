/* global $ */
(() => {
  const mockAmwayCard = {
    number: '5555555555554444',
    name: 'Mastercard',
    expiryDate: '01/30',
    securityCode: '111'
  };

  const newCreditDebits = $('.mz-new-credit-debit');
  const newAmwayCardOptions = $('#new-amway-card-options');

  newCreditDebits
    .find('.mz-new-credit-debit__number input')
    .val(mockAmwayCard.number)
    .trigger('input');

  newCreditDebits
    .find('.mz-new-credit-debit__name input')
    .val(mockAmwayCard.name)
    .trigger('input');

  newCreditDebits
    .find('.mz-new-credit-debit__expiry-date input')
    .val(mockAmwayCard.expiryDate)
    .trigger('input');

  newCreditDebits
    .find('.mz-new-credit-debit__security-code input')
    .val(mockAmwayCard.securityCode)
    .trigger('input');

  newAmwayCardOptions.collapse('show');
})();
