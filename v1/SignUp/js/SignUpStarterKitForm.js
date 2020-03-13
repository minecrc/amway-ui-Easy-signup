/* global $ */
(() => {
  const form = $('#sign-up-starter-kit');
  const submitButton = $('button[type="submit"]');

  const shippingMethod = value =>
    `input[name="shipping-method"][value="${value}"]:checked`;

  form.validate({
    rules: {
      'shipping-method': { required: true },
      'e-starter-kit-agreement': { required: shippingMethod('e-starter-kit') },
      address: { required: shippingMethod('add-new-address') },
      amphoe: { required: shippingMethod('add-new-address') },
      district: { required: shippingMethod('add-new-address') },
      province: { required: shippingMethod('add-new-address') },
      zipcode: { required: shippingMethod('add-new-address') },
      'amway-branch': { required: shippingMethod('pickup') }
    },
    messages: {
      'shipping-method': 'กรุณาเลือกรูปแบบชุดเริ่มต้นทำธุรกิจ'
    },
    errorPlacement: (error, element) => {
      const errorElement = $(`#${element.attr('id')}-error`);

      if (errorElement) {
        errorElement.replaceWith(error);
      }
    }
  });

  submitButton.attr('disabled', !form.validate().checkForm());

  form.on('change keyup', () => {
    submitButton.attr('disabled', !form.validate().checkForm());
  });

  $('input[name="shipping-method"][value!="e-starter-kit"]').on('click', () => {
    const eStarterKit = $('#e-starter-kit-agreement');
    eStarterKit.prop('checked', false);
  });
})();
