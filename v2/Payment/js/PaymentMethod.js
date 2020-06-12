/* global $ */
(() => {
  const form = $('form#payment-method');

  function isDropdownModalInput($input) {
    return (
      $input.attr('type') === 'radio' &&
      $input.parents('.mz-dropdown-modal__option').length
    );
  }

  function checkPaymentMethod(value) {
    return `input[name="payment-method"][value="${value}"]:checked`;
  }

  function isCardMethodSelected() {
    return $('input[name="payment-method"][value="card"]').is(':checked');
  }

  const useNewCard = () => {
    return (
      isCardMethodSelected() &&
      // No saved card or add card section expanded
      ($('input[name="card"]').length < 1 ||
        $('#add-card-section').is('[aria-expanded="true"]'))
    );
  };

  const useSavedCard = () => {
    return (
      isCardMethodSelected() &&
      $('#add-card-section').is('[aria-expanded="false"]')
    );
  };

  const useSavedAmwayCardInstalment = () => {
    return (
      isCardMethodSelected() &&
      $('input[name="card"][data-amway-card="true"]').is(':checked') &&
      $('input[name="saved-amway-card-option"][value="instalment"]').is(
        ':checked'
      )
    );
  };

  form.validate({
    rules: {
      'payment-method': {
        required: true
      },
      card: {
        required: useSavedCard
      },
      'card-number': {
        required: useNewCard,
        'card-number': true,
        'card-type': true
      },
      'card-name': {
        required: useNewCard
      },
      'card-expiry-date': {
        required: useNewCard,
        'card-expiry-date': true
      },
      'card-security-code': {
        required: useNewCard,
        minlength: 3,
        'card-security-code': true
      },
      'saved-amway-card-security-code': {
        required: useSavedAmwayCardInstalment,
        minlength: 3,
        'card-security-code': true
      },
      bank: {
        required: checkPaymentMethod('bank')
      },
      'bank-method': {
        required: checkPaymentMethod('bank')
      },
      'recipient-mobile': {
        required: checkPaymentMethod('bank'),
        phoneTH: true
      }
    },
    messages: {
      card: {
        required: 'กรุณาเลือกบัตรเครดิต/บัตรเดบิต'
      },
      'card-number': {
        required: 'กรุณากรอกหมายเลขบัตรเครดิต/บัตรเดบิต'
      },
      'card-name': {
        required: 'กรุณากรอกชื่อผู้ถือบัตร'
      },
      'card-expiry-date': {
        required: 'กรุณากรอกวันหมดอายุ'
      },
      'card-security-code': {
        required: 'กรุณากรอก CVV',
        minlength: 'กรุณากรอก CVV ให้ครบถ้วน'
      },
      'saved-amway-card-security-code': {
        required: 'กรุณากรอก CVV',
        minlength: 'กรุณากรอก CVV ให้ครบถ้วน'
      },
      bank: {
        required: 'กรุณาเลือกธนาคาร'
      },
      'recipient-mobile': {
        required: 'กรุณากรอกเบอร์โทรศัพท์ของคุณ'
      }
    },
    onfocusout: function onfocusout(element) {
      function onBlur() {
        const collapsibleParent = $(element).closest('[aria-expanded]');
        const outmostCollapsibleParent = $(element).closest(
          '.mz-checkable-input__content[data-name="payment-method"]'
        );

        if (
          !this.checkable(element) &&
          (element.name in this.submitted || !this.optional(element)) &&
          collapsibleParent.is('[aria-expanded="true"]') &&
          outmostCollapsibleParent.is('[aria-expanded="true"]')
        ) {
          this.element(element);
        }
      }

      setTimeout(onBlur.bind(this), 100);
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
    resetPartialForm($('input[name="saved-amway-card-security-code"]'));
  });

  $('input[name="saved-amway-card-option"]').on('change', () => {
    resetPartialForm($('input[name="saved-amway-card-security-code"]'));
  });

  $('input[name="bank"]').on('change', () => {
    resetPartialForm($('input[name="bank"]'));
  });

  const addCardContent = $('.mz-saved-credit-debit__add-card-content');

  $('.mz-checkable-input__content[data-name="payment-method"]').on(
    'hidden.bs.collapse',
    e => {
      if ($(e.target).is('[data-name="payment-method"]')) {
        const content = $(e.target);
        const inputs = $(`#${content.attr('id')} input`);

        resetPartialForm(inputs);

        $('.mz-saved-credit-debit').trigger('saved:reset');
        addCardContent.collapse('hide');
        // Reset new card section for no card case
        $('.mz-new-credit-debit').trigger('new:reset');
      }
    }
  );

  addCardContent.on('hidden.bs.collapse', e => {
    const content = $(e.target);
    const inputs = $(`#${content.attr('id')} input`);

    resetPartialForm(inputs);
  });

  form.submit(function onSubmit() {
    if (form.validate().checkForm()) {
      $.sanitizeCardInputs();
    }
  });
})();
