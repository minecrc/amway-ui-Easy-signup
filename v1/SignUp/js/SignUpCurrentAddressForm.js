/* global $ */
(() => {
  const form = $('#sign-up-current-address-form');
  form.validate({
    rules: {
      address: {
        required: true
      },
      zipcode: {
        required: true
      },
      province: {
        required: true
      },
      district: {
        required: true
      },
      amphoe: {
        required: true
      }
    }
  });
})();
