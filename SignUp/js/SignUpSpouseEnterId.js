/* global $ */
(() => {
  const form = $('#sign-up-spouse-id-form');
  const submitButton = $('button[type="submit"]');
  form.validate({
    rules: {
      'id-card': {
        digits: true,
        required: true,
        minlength: 13,
        maxlength: 13
      }
    },
    messages: {
      'id-card': 'คุณกรอกเลขที่บัตรประชาชนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
    }
  });

  form.on('change keyup', () => {
    submitButton.attr('disabled', !form.validate().checkForm());
  });
})();
