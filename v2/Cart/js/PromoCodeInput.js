/* global $ */
(() => {
  function initPromoCodeInput({ mockPromoCodes, createDiscountRow }) {
    const promoCodeInput = $(this);

    if (promoCodeInput.attr('data-init')) return;

    promoCodeInput.attr('data-init', true);

    const input = promoCodeInput.find('input');
    const button = promoCodeInput.find('.mz-promo-code-input__button');
    const errors = $('.mz-promo-code-input__error');

    input.on('keydown', e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        button.trigger('click');
        return false;
      }

      return true;
    });

    input.on('change keyup paste', function handleChange() {
      if (!input.val().trim()) {
        errors.removeClass('--active');
        input.removeClass('--has-error');
      }

      const currentVal = input.val();

      $('.mz-promo-code-input__input input')
        .not(this)
        .each(function syncPromoCodeInput() {
          const otherInput = $(this);

          if (otherInput.val() !== currentVal) {
            otherInput.val(currentVal);
            otherInput.trigger('change');
          }
        });
    });

    button.on('click', () => {
      const promoCode = input.val();
      const value = mockPromoCodes[promoCode];
      const codes = promoCodeInput
        .find('.mz-promo-code-section__discount-code')
        .toArray()
        .map(code => code.innerText);

      errors.removeClass('--active');
      input.removeClass('--has-error');

      if (!promoCode) return;

      if (codes.includes(promoCode)) {
        errors.filter('.--is-used').addClass('--active');
        input.addClass('--has-error');
      } else if (value) {
        createDiscountRow(promoCode, value);

        input.val('');
      } else {
        errors.filter('.--invalid').addClass('--active');
        input.addClass('--has-error');
      }
    });
  }

  function initPromoCodeInputs({ mockPromoCodes, createDiscountRow }) {
    const promoCodeInputs = $('.mz-promo-code-input');

    promoCodeInputs.each(function init(_, promoCodeInput) {
      initPromoCodeInput.call(promoCodeInput, {
        mockPromoCodes,
        createDiscountRow
      });
    });
  }

  $.initPromoCodeInputs = initPromoCodeInputs;
})();
