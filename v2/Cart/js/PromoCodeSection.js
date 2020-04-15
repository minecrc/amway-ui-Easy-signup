/* global $ */
(() => {
  const promoCodeSection = $('.mz-promo-code-section');

  const mockPromoCodes = {
    AMWAYABO50: 50,
    AMWAYABO100: 100
  };

  function createDiscountRow(promoCode, value, onRemove = () => {}) {
    const codes = $('.mz-promo-code-section__discount-code')
      .toArray()
      .map(code => code.innerText);

    if (codes.includes(promoCode)) return;

    const discountTemplate = promoCodeSection.find('#discount-template');
    const discount = discountTemplate.clone();

    discount.attr('id', `${promoCode}-discount-row`);
    discount.find('.mz-promo-code-section__discount-code').text(promoCode);
    discount
      .find('.mz-promo-code-section__discount-value')
      .text(value.toLocaleString());
    discount.find('.mz-cart-value-row__remove-button').on('click', e => {
      onRemove();
      $(e.target)
        .parents('.mz-cart-value-row')
        .remove();
    });

    discount.insertBefore('#discount-template');
  }

  $.initPromoCodeInputs({
    mockPromoCodes,
    createDiscountRow
  });

  Object.keys(mockPromoCodes).forEach(promoCode => {
    createDiscountRow(promoCode, mockPromoCodes[promoCode]);
  });

  $.createDiscountRow = createDiscountRow;
})();
