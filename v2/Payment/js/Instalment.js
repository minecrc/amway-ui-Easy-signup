/* global $ */
(() => {
  const form = $('form#instalment-payment');

  form.validate({
    rules: {
      card: {
        required: true
      },
      'card-security-code': {
        required: true,
        minlength: 3,
        'card-security-code': true
      },
      program: {
        required: 'input[name="card"]:checked'
      }
    },
    messages: {
      card: {
        required: 'กรุณาเลือกบัตรเครดิต/บัตรเดบิต'
      },
      'card-security-code': {
        required: 'กรุณากรอก CVV',
        minlength: 'กรุณากรอก CVV ให้ครบถ้วน'
      },
      program: {
        required: 'กรุณาเลือกโปรแกรมผ่อนชำระ'
      }
    }
  });

  const instalmentProgram = $('#instalment-program');
  const programSummary = $('.mz-instalment__program-summary-section');

  function resetPartialForm(elements) {
    const validator = form.validate();

    validator.invalid = {};
    validator.submitted = {};
    validator.prepareForm();
    validator.hideErrors();
    validator.resetElements(elements);
  }

  $('input[name="card"]').on('change', () => {
    $('input[name="card-security-code"]').val('');
    instalmentProgram.attr('disabled', false);
    instalmentProgram.trigger('reset');

    resetPartialForm($('input[name="card"]'));
    resetPartialForm($('input[name="card-security-code"]'));
    resetPartialForm($('input[name="program"]'));
    programSummary.collapse('hide');
  });

  $('input[name="program"]').on('change', () => {
    programSummary.collapse('show');
  });
})();
