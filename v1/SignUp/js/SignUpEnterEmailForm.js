/* global $ */
(() => {
  const form = $('#sign-up-enter-email-form');
  const submitButton = $('button[type="submit"]');
  form.validate({
    rules: {
      email: {
        email: true,
        required: true
      }
    }
  });

  form.on('change keyup', () => {
    submitButton.attr('disabled', !form.validate().checkForm());
  });
})();
