/* global $ */
(() => {
    function initPromoCodeInput() {
        const promoCodeInput = $(this);

        const input = promoCodeInput.find('input');
        const button = promoCodeInput.find('.mz-promo-code-input__button');

        const errors = $('.mz-promo-code-input__error');
        const inputs = $('.mz-promo-code-input__input input');

        input.on('keydown', e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                button.trigger('click');
                return false;
            }

            return true;
        });

        input.on('change input', function handleChange() {
            const currentVal = input.val();

            inputs.not(this).each(function syncPromoCodeInput() {
                const otherInput = $(this);

                if (otherInput.val() !== currentVal) {
                    otherInput.val(currentVal);
                    otherInput.trigger('change');
                }
            });
        });

        button.on('click', () => {
            const code = input.val();
            const amount = $.getPromoCodeAmount(code);

            errors.removeClass('--active');
            inputs.removeClass('--has-error');

            if (!code) return;

            if ($.isDiscountRowCreated(code)) {
                errors.filter('.--is-used').addClass('--active');
                inputs.addClass('--has-error');
            } else if (amount) {
                $.createDiscountRow({ id: code, amount });
                errors.filter('.--is-pass').addClass('--active');
                input.val('');
            } else {
                errors.filter('.--invalid').addClass('--active');
                inputs.addClass('--has-error');
            }
        });
    }

    $('.mz-promo-code-input').each(initPromoCodeInput);
})();