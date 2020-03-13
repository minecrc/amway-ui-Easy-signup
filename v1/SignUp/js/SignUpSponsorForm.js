/* global $ */
(() => {
  const form = $('#sign-up-sponsor-form');
  form.validate({
    rules: {
      'sponsor-id': {
        required: true
      }
    }
  });
})();
