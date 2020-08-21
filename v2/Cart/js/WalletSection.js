/* global $ */
(() => {
    function initDiscountInput() {
        const section = $(this);

        if (section.attr('data-init')) return;

        section.attr('data-init', true);

        const currentAmountElement = section.find(
            '.mz-wallet-section__current-amount'
        );
        const input = section.find('input');
        const error = section.find('.mz-wallet-section__error');

        const button = section.find('.mz-wallet-section__button');

        const id = input.attr('data-id');
        const initialAmount = Number(input.attr('data-initial-amount'));

        function extractAmount(value) {
            const amountInString = (value.match(/\d+/g) || []).join('');
            const isEmpty = amountInString.length === 0;

            return {
                isEmpty,
                amount: isEmpty ? 0 : Number(amountInString)
            };
        }

        function formatAmount(amount) {
            return `฿ ${amount.toLocaleString()}`;
        }

        input.on('keydown', e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                button.trigger('click');
                return false;
            }

            return true;
        });

        input.on('input', function handleChange() {
            const { isEmpty, amount } = extractAmount(input.val());
            const { amount: currentAmount } = extractAmount(
                currentAmountElement.text()
            );
            const { amount: totalAmount } = extractAmount($('[data-total]').text());

            error.removeClass('--active');
            input.removeClass('--has-error');

            if (isEmpty) {
                input.val('');
            } else {
                input.val(formatAmount(Math.min(amount, currentAmount, totalAmount)));
                input.trigger('keyup');
            }
        });

        input.on('blur', function handleBlur() {
            error.removeClass('--active');
            input.removeClass('--has-error');
        });

        let hasRegisterd = false;

        button.on('click', () => {
            if (!hasRegisterd) {
                $.registerWalletRow(id, function onRemove() {
                    currentAmountElement.text(formatAmount(initialAmount));
                });

                hasRegisterd = true;
            }



            const { isEmpty, amount } = extractAmount(input.val());
            const { amount: currentAmount } = extractAmount(
                currentAmountElement.text()
            );
            const { amount: totalAmount } = extractAmount($('[data-total]').text());

            error.removeClass('--active');
            input.removeClass('--has-error');

            if (isEmpty) {
                error.text('กรุณาใส่จำนวนเงิน');
                error.css('padding', '10px');
                error.css('color', '#cb5454');
                error.addClass('--active');
                input.addClass('--has-error');
                input.focus();
                return;
            } else {
                error.css('padding', '10px');
                error.css('color', '#000000');
                error.addClass('--active');
                input.focus();
            }

            if (amount > currentAmount || amount > totalAmount) {
                error.addClass('--active');
                input.addClass('--has-error');
                input.focus();
                return;
            }

            $(`#${id}-row`).trigger(
                'wallet:update',
                initialAmount - currentAmount + amount
            );

            currentAmountElement.text(formatAmount(currentAmount - amount));
            input.val('');
        });
    }

    $('.mz-wallet-section').each(initDiscountInput);
})();