/* global $ */
(() => {
  const smsForm = $('#sms-form');
  const emailForm = $('#email-form');

  smsForm.validate({
    rules: {
      mobile: {
        mobileTH: true,
        required: true
      }
    }
  });

  emailForm.validate({
    rules: {
      email: {
        email: true,
        required: true
      }
    }
  });
})();
