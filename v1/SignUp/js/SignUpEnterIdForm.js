/* global $ */
(() => {
  const idForm = $('#id-form');

  idForm.validate({
    rules: {
      'id-card': {
        digits: true,
        required: true,
        minlength: 13,
        maxlength: 13
      },
      'id-agreement': 'required'
    },
    messages: {
      'id-card': {
        required: 'กรุณากรอกเลขที่บัตรประชาชน',
        digits: 'คุณกรอกเลขที่บัตรประชาชนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
        minlength: 'คุณกรอกเลขที่บัตรประชาชนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
        maxlength: 'คุณกรอกเลขที่บัตรประชาชนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
      },
      'id-agreement': 'คุณยังไม่ได้ยอมรับเงื่อนไขการสมัครสมาชิกแอมเวย์'
    }
  });

  const passportForm = $('#passport-form');

  const countryInput = $('input[name="country"]');

  $('#country-selector').on('change', (e, label, value) => {
    countryInput.val(value);
    countryInput.trigger('keyup');
  });

  passportForm.validate({
    rules: {
      passport: 'required',
      country: 'required',
      'passport-agreement': 'required'
    },
    messages: {
      passport: 'กรุณากรอกเลขที่หนังสือเดินทาง',
      country: 'กรุณาเลือกประเทศ',
      'passport-agreement': 'คุณยังไม่ได้ยอมรับเงื่อนไขการสมัครสมาชิกแอมเวย์'
    }
  });
})();
