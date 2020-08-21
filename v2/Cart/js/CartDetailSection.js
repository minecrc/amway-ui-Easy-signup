/* global $ */
(() => {
  const section = $('.mz-cart-detail-section');

  function getDiscountRowId(id) {
    return `${id}-discount-row`;
  }

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
    const totalAmount = $('.mz-cart-detail-section__row-value')
      .toArray()
      .reduce((acc, value) => acc + extractAmount(value.innerText).amount, 0);

    total.text(formatAmount(totalAmount));
  }

  function updateRow(row, amount) {
    row.find('.mz-cart-detail-section__row-value').text(formatAmount(-amount));
  }

  function isDiscountRowCreated(id) {
    return $(`#${getDiscountRowId(id)}`).length;
  }

  function createDiscountRow({ id, title, amount }, onRemove = () => {}) {
    const discountTemplate = section.find('#discount-template');
    const discountRow = discountTemplate.clone();

    discountRow.attr('id', getDiscountRowId(id));
    discountRow.find('.mz-cart-detail-section__row-title').text(title || id);
    updateRow(discountRow, amount);

    function handleRemove() {
      onRemove();
      discountRow.remove();
      updateTotal();
    }

    discountRow
      .find('.mz-cart-value-row__remove-button')
      .on('click', handleRemove);
    discountRow.on('discount:remove', handleRemove);

    discountRow.insertBefore('#discount-template');

    updateTotal();
  }

  function registerWalletRow(id, onRemove = () => {}) {
    const walletRow = $(`#${id}-row`);
    const removeButton = walletRow.find('.mz-cart-value-row__remove-button');

    removeButton.on('click', function handleRemove() {
      walletRow.removeClass('--active');
      updateRow(walletRow, 0);
      onRemove();
      updateTotal();
    });
  }

  function initWalletRow() {
    const walletRow = $(this);

    walletRow.on('wallet:update', function handleUpdate(e, amount) {
      if (amount > 0) {
        walletRow.addClass('--active');
      } else {
        walletRow.removeClass('--active');
      }

      updateRow(walletRow, amount);
      updateTotal();
    });
  }

  $('.mz-cart-detail-section__wallet-row').each(initWalletRow);

  updateTotal();

  $.isDiscountRowCreated = isDiscountRowCreated;
  $.createDiscountRow = createDiscountRow;
  $.registerWalletRow = registerWalletRow;
})();
