/* global $, CardValidator */

(() => {
  const newCreditDebits = $('.mz-new-credit-debit');
  const inputs = newCreditDebits.find('input');

  const newAmwayCardOptions = $('#new-amway-card-options');

  newCreditDebits.on('new:reset', function resetNewInputs() {
    inputs.prop('checked', false);
    inputs.val('');
    newAmwayCardOptions.collapse('hide');
  });

  const numberInputs = newCreditDebits.find(
    '.mz-new-credit-debit__number input'
  );
  const expiryDateInputs = newCreditDebits.find(
    '.mz-new-credit-debit__expiry-date input'
  );

  const NUMBER_SEPARATOR = ' - ';
  const EXPIRY_DATE_SEPARATOR = ' / ';

  numberInputs.attr(
    'maxlength',
    $.maxCardLength + NUMBER_SEPARATOR.length * $.maxGap
  );
  expiryDateInputs.attr('maxlength', 4 + EXPIRY_DATE_SEPARATOR.length);

  function isRemoving({ value, separator }) {
    return value.endsWith(separator.slice(0, -1));
  }

  function removeSeparator({ value, separator }) {
    return (isRemoving({ value, separator })
      ? value.slice(0, -separator.length)
      : value
    )
      .split(separator)
      .join('');
  }

  function insertSeparator({ text, shouldInsert, separator }) {
    return text
      .split('')
      .reduce(
        (acc, char, index) =>
          /\d/.test(char)
            ? `${acc}${char}${shouldInsert(index) ? separator : ''}`
            : acc,
        ''
      );
  }

  numberInputs.on('input', function insertDash() {
    const input = $(this);
    const separator = NUMBER_SEPARATOR;

    const number = removeSeparator({
      value: input.val(),
      separator
    });

    if (number.length === 0) return;

    const card = CardValidator.number(number).card || $.defaultCard;

    input.val(
      insertSeparator({
        text: number,
        shouldInsert: index => card.gaps.includes(index + 1),
        separator
      })
    );
    input.trigger('keyup');
  });

  expiryDateInputs.on('input', function insertDash() {
    const input = $(this);
    const value = input.val();
    const separator = EXPIRY_DATE_SEPARATOR;

    const expiryDate = removeSeparator({
      value,
      separator
    });

    if (expiryDate.length === 0) return;

    input.val(
      insertSeparator({
        text: expiryDate,
        shouldInsert: index => index === 1,
        separator
      })
    );
    input.trigger('keyup');
  });

  $.sanitizeCardInputs = function sanitizeCardInputs() {
    numberInputs.each(function sanitizeNameInput() {
      const input = $(this);

      input.val(
        removeSeparator({
          value: input.val(),
          separator: NUMBER_SEPARATOR
        })
      );
    });

    expiryDateInputs.each(function sanitizeExpiryDateInput() {
      const input = $(this);

      input.val(
        removeSeparator({
          value: input.val(),
          separator: EXPIRY_DATE_SEPARATOR
        })
      );
    });
  };
})();
