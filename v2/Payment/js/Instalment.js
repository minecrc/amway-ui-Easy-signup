/* global $ */
(() => {
  const form = $('form#instalment-payment');

  function isDropdownModalInput($input) {
    return (
      $input.attr('type') === 'radio' &&
      $input.parents('.mz-dropdown-modal__option').length
    );
  }

  form.validate({
    rules: {
      card: {
        required: true
      },
      'instalment-security-code': {
        required: true,
        minlength: 3,
        'card-security-code': true
      }
    },
    messages: {
      card: {
        required: 'กรุณาเลือกบัตรเครดิต/บัตรเดบิต'
      },
      'instalment-security-code': {
        required: 'กรุณากรอก CVV',
        minlength: 'กรุณากรอก CVV ให้ครบถ้วน'
      }
    },
    highlight: (element, errorClass) => {
      const $element = $(element);

      if (isDropdownModalInput($element)) {
        const dropdownModalButton = $element
          .parents('.mz-dropdown-modal__menu')
          .prevAll('.mz-dropdown-modal__button');

        dropdownModalButton.addClass(errorClass);
      } else {
        $element.addClass(errorClass);
      }
    },
    unhighlight: (element, errorClass) => {
      const $element = $(element);

      if (isDropdownModalInput($element)) {
        const dropdownModalButton = $element
          .parents('.mz-dropdown-modal__menu')
          .prevAll('.mz-dropdown-modal__button');

        dropdownModalButton.removeClass(errorClass);
      } else {
        $element.removeClass(errorClass);
      }
    }
  });

  function resetPartialForm(elements) {
    const validator = form.validate();

    validator.invalid = {};
    validator.submitted = {};
    validator.prepareForm();
    validator.hideErrors();
    validator.resetElements(elements);
  }

  // Force re-validation on radio buttons
  $('input[name="card"]').on('change', () => {
    resetPartialForm($('input[name="card"]'));
    resetPartialForm($('input[name="instalment-security-code"]'));
  });

  $('.mz-saved-credit-debit__instalment-section').on(
    'hidden.bs.collapse',
    e => {
      const content = $(e.target);
      const inputs = $(`#${content.attr('id')} input`);

      resetPartialForm(inputs);
    }
  );
})();
