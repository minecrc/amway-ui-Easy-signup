/* global $ */
(() => {
  const form = $('#sign-up-national-sponsor-form');

  form.validate({
    rules: {
      'sponsor-id': {
        required: true
      }
    }
  });
})();
