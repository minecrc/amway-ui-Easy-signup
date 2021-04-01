/* global $ */
(() => {
    // let modalTimeout = null;

    // const bankDropdownModal = bankButton.parent('.mz-dropdown-modal');
    const bankButton = $('#bank-method');
    const dropdownText = bankButton.find('.mz-dropdown-modal__button-text');
    const bankPlaceholder = dropdownText.html();
    const mobileInput = $('input[name="recipient-mobile"]');
    const buttonTextTemplate = $('.mz-bank-method__button-text-template');

    function resetButtons() {
        dropdownText.html(bankPlaceholder);
        mobileInput.val('');
        $('.mz-bank-method__button-text-template').css('display', 'none');
        $('.mz-bank-method__button-text-bank>div').css('display', 'none');
    }

    function updateButtons() {
        const bank = $('input[name="bank"]:checked');
        if (!bank.length) {
            resetButtons();
            return;
        }
        $('.mz-bank-method__button-text-template').css('display', 'block');
        $('.mz-bank-method__button-text-bank>div').css('display', 'block');
        const bankLabel = $(`label[for="${bank.attr('id')}"]`);
        const newDropdownText = buttonTextTemplate.clone();
        newDropdownText
            .find('.mz-dropdown-modal__button-text')
            .html(bankLabel.html());

        dropdownText.empty();
        dropdownText.append(newDropdownText);
    }
    $('.mz-bank-method-option__bank-toggle').on('click', updateButtons);



    // bankDropdownModal.on('hide.bs.dropdown', () => {
    //     ensureSelectedBank();
    //     clearTimeout(modalTimeout);
    // });

    // function ensureSelectedBank() {
    //     const checkedMethod = $('input[name="bank-method"]:checked');
    //     const checkedBank = $('input[name="bank"]:checked');

    //     if (checkedMethod.length) {
    //       const [bank] = checkedMethod.attr('id').split(':');
    //       if (bank !== checkedBank.attr('id')) {
    //         $(
    //           `.mz-bank-method-option__bank-toggle[data-target="#content-${bank}"]`
    //         ).click();
    //       }
    //     } else if (checkedBank.length) {
    //       checkedBank.prop('checked', false);
    //       resetButtons();
    //     }
    //   }
    // function closeDropdown() {
    //     if (bankDropdownModal.hasClass('open')) {
    //         bankButton.dropdown('toggle');
    //     }
    // }

    // function handleDropdownModalUpdate(e) {
    //     if ($(e.target).is('input[name="bank-method"]')) {
    //         modalTimeout = setTimeout(closeDropdown, 250);
    //     }
    // }
    // bankDropdownModal.dropdownModal({
    //     onUpdate: handleDropdownModalUpdate
    // });


})();