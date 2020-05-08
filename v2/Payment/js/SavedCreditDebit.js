/* global $ */
(() => {
  const savedCreditDebit = $('.mz-saved-credit-debit');
  const newCreditDebits = $('.mz-new-credit-debit');

  const amwayCardSection = $('.mz-saved-credit-debit__amway-card-section');

  const addCardContent = $('.mz-saved-credit-debit__add-card-content');
  const instalmentSection = $('.mz-saved-credit-debit__instalment-section');

  const creditDebitButton = $('#credit-debit');
  const creditDebitText = creditDebitButton.find(
    '.mz-dropdown-modal__button-text'
  );
  const creditDebitWrapper = creditDebitButton.parent('.mz-dropdown-modal');
  const placeholder = creditDebitText.html();

  savedCreditDebit.on('saved:reset', function resetSavedInputs() {
    $('input[name="card"]').prop('checked', false);
    $('input[name="card"]').trigger('change');
    creditDebitText.html(placeholder);
    amwayCardSection.collapse('hide');
  });

  function handleCreditDebitUpdate(e) {
    const checkedInput = $(e.target);

    if (!checkedInput.is('input[name="card"]')) {
      return;
    }

    const optionContent = checkedInput.siblings(
      '.mz-saved-credit-debit__option-content'
    );
    const cardImage = checkedInput
      .siblings('.mz-saved-credit-debit__option-image')
      .clone();
    const cardNumber = optionContent
      .find('.mz-saved-credit-debit__card-number')
      .clone();

    creditDebitText.empty();
    creditDebitText.append(cardImage);
    creditDebitText.append(cardNumber);
    creditDebitWrapper.dropdownModal('close');

    if (checkedInput.is('[data-instalment="true"]')) {
      instalmentSection.collapse('show');
    } else if (checkedInput.is('[data-amway-card="true"]')) {
      amwayCardSection.collapse('show');
    } else {
      amwayCardSection.collapse('hide');
      instalmentSection.collapse('hide');
    }

    addCardContent.collapse('hide');

    const cvvInput = instalmentSection.find(
      'input[name="instalment-security-code"]'
    );

    cvvInput.val('');
  }

  amwayCardSection.on('hidden.bs.collapse', () => {
    const inputs = amwayCardSection.find('input[type="radio"]');

    inputs.each(function resetAmwayOptionInput() {
      const input = $(this);
      input.prop('checked', input.attr('data-default-checked'));

      const content = $(`#${input.attr('id')}-content`);
      content.collapse('hide');
    });

    const cvvInput = amwayCardSection.find(
      'input[name="amway-card-security-code"]'
    );

    cvvInput.val('');
  });

  addCardContent.on('hidden.bs.collapse', () => {
    newCreditDebits.trigger('new:reset');
  });

  addCardContent.on('show.bs.collapse', () => {
    savedCreditDebit.trigger('saved:reset');
  });

  creditDebitWrapper.dropdownModal({
    onUpdate: handleCreditDebitUpdate
  });
})();
