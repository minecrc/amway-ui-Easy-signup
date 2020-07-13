/* global $ */
(() => {
  const savedCreditDebit = $('.mz-saved-credit-debit');
  const newCreditDebits = $('.mz-new-credit-debit');

  const savedAmwayCardOptions = $('#saved-amway-card-options');

  const addCardContent = $('.mz-saved-credit-debit__add-card-content');

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
    savedAmwayCardOptions.collapse('hide');
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

    if (
      // backward compatibility for full payment which doesn't have attr data-instalment
      checkedInput.not('[data-instalment="true"]') &&
      checkedInput.is('[data-amway-card="true"]')
    ) {
      savedAmwayCardOptions.collapse('show');
    } else {
      savedAmwayCardOptions.collapse('hide');
    }

    addCardContent.collapse('hide');
  }

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
