/* global $ */
(() => {
  const form = $('#sign-up-sponsor-national-form');
  form.validate({
    rules: {
      'sponsor-id': {
        required: true
      }
    }
  });
})();
