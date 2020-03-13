/* global $ */
(() => {
  const form = $('#sign-up-enter-mobile-form');
  const submitButton = $('button[type="submit"]');
  form.validate({
    rules: {
      mobile: {
        mobileTH: true,
        required: true
      }
    },
    messages: {
      mobile: 'คุณกรอกเบอร์โทรศัพท์มือถือไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
    }
  });

  form.on('change keyup', () => {
    submitButton.attr('disabled', !form.validate().checkForm());
  });
})();
