/* global $ */
(() => {
  let modalTimeout = null;
  const bankButton = $('#bank-method');
  const bankDropdownModal = bankButton.parent('.mz-dropdown-modal');
  const dropdownText = bankButton.find('.mz-dropdown-modal__button-text');
  const bankPlaceholder = dropdownText.html();
  const mobileInput = $('input[name="recipient-mobile"]');
  const parentInput = $('input[value="bank"][name="payment-method"]');
  const buttonTextTemplate = $('.mz-bank-method__button-text-template');

  function resetButtons() {
    $('.mz-bank-method-option__content.in').collapse('hide');
    dropdownText.html(bankPlaceholder);
    mobileInput.val('');
  }

  function ensureSelectedBank() {
    const checkedMethod = $('input[name="bank-method"]:checked');
    const checkedBank = $('input[name="bank"]:checked');

    if (checkedMethod.length) {
      const [bank] = checkedMethod.attr('id').split(':');
      if (bank !== checkedBank.attr('id')) {
        $(
          `.mz-bank-method-option__bank-toggle[data-target="#content-${bank}"]`
        ).click();
      }
    } else if (checkedBank.length) {
      checkedBank.prop('checked', false);
      resetButtons();
    }
  }

  function updateButtons() {
    const bank = $('input[name="bank"]:checked');
    const method = $('input[name="bank-method"]:checked');
    if (!bank.length || !method.length) {
      resetButtons();
      return;
    }

    const bankLabel = $(`label[for="${bank.attr('id')}"]`);
    const methodLabel = $(`label[for="${method.attr('id')}"]`);
    const newDropdownText = buttonTextTemplate.clone();
    newDropdownText
      .find('.mz-bank-method__button-text-bank')
      .html(bankLabel.html());
    newDropdownText
      .find('.mz-bank-method__button-text-method')
      .html(methodLabel.text());

    dropdownText.empty();
    dropdownText.append(newDropdownText);
  }

  function closeDropdown() {
    if (bankDropdownModal.hasClass('open')) {
      bankButton.dropdown('toggle');
    }
  }

  function handleDropdownModalUpdate(e) {
    if ($(e.target).is('input[name="bank-method"]')) {
      modalTimeout = setTimeout(closeDropdown, 250);
    }
  }

  bankDropdownModal.dropdownModal({
    onUpdate: handleDropdownModalUpdate
  });

  bankDropdownModal.on('hide.bs.dropdown', () => {
    ensureSelectedBank();
    clearTimeout(modalTimeout);
  });

  $('input[name="payment-method"]').on('change', () => {
    if (!parentInput.prop('checked')) {
      $('input[name="bank"]:checked').prop('checked', false);
      $('input[name="bank-method"]:checked').prop('checked', false);
      resetButtons();
    }
  });

  $('input[name="bank-method"]').on('change', updateButtons);

  $('.mz-bank-method-option__bank-toggle').on(
    'click',
    function handleBankToggle() {
      const $this = $(this);
      const targetId = $this.data('target');
      $('.mz-bank-method-option__content.in').not(targetId).collapse('hide');
      $(targetId).collapse('show');

      if (window.isTabletOrDesktop()) {
        setTimeout(() => {
          const menu = $this.parents('.mz-dropdown-modal__menu');
          const option = $this.parents('.mz-dropdown-modal__option');
          // menu.scrollTop(menu.scrollTop() + option.position().top);
          menu.animate({ scrollTop: menu.scrollTop() + option.position().top });
        }, 300);
      }
    }
  );
})();
