/* global $ */
(() => {
  const section = $('.mz-cart-detail-section');

  function extractAmount(text) {
    const amountInString = (text.match(/\d+/g) || []).join('');
    const isEmpty = amountInString.length === 0;
    const isNegative = text.startsWith('-');

    return {
      isEmpty,
      amount: (isEmpty ? 0 : Number(amountInString)) * (isNegative ? -1 : 1)
    };
  }

  function formatAmount(amount) {
    return amount < 0
      ? `- ฿ ${Math.abs(amount).toLocaleString()}`
      : `฿ ${amount.toLocaleString()}`;
  }

  function updateTotal() {
    const total = $('[data-total]');
    const totalAmount = $('.mz-cart-detail-section__value')
      .toArray()
      .reduce((acc, value) => acc + extractAmount(value.innerText).amount, 0);

    total.text(formatAmount(totalAmount));
  }

  function updateDiscountRow(title, value) {
    const discount = $(`#${title}-discount-row`);
    discount.find('.mz-cart-detail-section__value').text(formatAmount(-value));
  }

  function isDiscountRowCreated(title) {
    const titles = $('.mz-cart-detail-section__discount-title')
      .toArray()
      .map(code => code.innerText);

    return titles.includes(title);
  }

  function createOrUpdateDiscountRow(
    title,
    value,
    onRemove = () => {},
    { allowUpdate = true } = {}
  ) {
    const isCreated = isDiscountRowCreated(title);

    if (isCreated) {
      if (allowUpdate) {
        updateDiscountRow(title, value);
        updateTotal();
      }

      return;
    }

    const discountTemplate = section.find('#discount-template');
    const discount = discountTemplate.clone();

    discount.attr('id', `${title}-discount-row`);
    discount.find('.mz-cart-detail-section__discount-title').text(title);
    discount.find('.mz-cart-detail-section__value').text(formatAmount(-value));

    function handleRemove() {
      onRemove();
      discount.remove();
      updateTotal();
    }

    discount
      .find('.mz-cart-value-row__remove-button')
      .on('click', handleRemove);
    discount.on('discount:remove', handleRemove);

    discount.insertBefore('#discount-template');
    updateTotal();
  }

  function createDiscountRow(promoCode, value, onRemove = () => {}) {
    createOrUpdateDiscountRow(promoCode, value, onRemove, {
      allowUpdate: false
    });
  }

  updateTotal();

  $.isDiscountRowCreated = isDiscountRowCreated;
  $.createDiscountRow = createDiscountRow;
  $.createOrUpdateDiscountRow = createOrUpdateDiscountRow;
})();
