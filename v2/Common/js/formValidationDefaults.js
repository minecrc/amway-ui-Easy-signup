/* global $, validator */
(() => {
  // Ref: https://github.com/jquery-validation/jquery-validation/blob/master/src/localization/messages_th.js
  /*
   * Translated default messages for the jQuery validation plugin.
   * Locale: TH (Thai; ไทย)
   */
  $.extend($.validator.messages, {
    required: 'โปรดระบุ',
    remote: 'โปรดแก้ไขให้ถูกต้อง',
    email: 'คุณกรอกอีเมลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
    url: 'โปรดระบุ URL ที่ถูกต้อง',
    date: 'โปรดระบุวันที่ ที่ถูกต้อง',
    dateISO: 'โปรดระบุวันที่ ที่ถูกต้อง (ระบบ ISO).',
    number: 'โปรดระบุทศนิยมที่ถูกต้อง',
    digits: 'โปรดระบุจำนวนเต็มที่ถูกต้อง',
    creditcard: 'โปรดระบุรหัสบัตรเครดิตที่ถูกต้อง',
    equalTo: 'โปรดระบุค่าเดิมอีกครั้ง',
    extension: 'โปรดระบุค่าที่มีส่วนขยายที่ถูกต้อง',
    maxlength: $.validator.format('โปรดอย่าระบุค่าที่ยาวกว่า {0} อักขระ'),
    minlength: $.validator.format('โปรดอย่าระบุค่าที่สั้นกว่า {0} อักขระ'),
    rangelength: $.validator.format(
      'โปรดอย่าระบุค่าความยาวระหว่าง {0} ถึง {1} อักขระ'
    ),
    range: $.validator.format('โปรดระบุค่าระหว่าง {0} และ {1}'),
    max: $.validator.format('โปรดระบุค่าน้อยกว่าหรือเท่ากับ {0}'),
    min: $.validator.format('โปรดระบุค่ามากกว่าหรือเท่ากับ {0}')
  });

  $.validator.setDefaults({
    ignore: '',
    errorClass: '--has-error',
    errorElement: 'small',
    errorPlacement: (error, element) => {
      $(`#${element.attr('name') || element.attr('id')}-error`).replaceWith(
        error
      );
    }
  });

  $.validator.setDefaults({
    highlight: (element, errorClass) => {
      const $element = $(element);
      const errorTarget = $($element.attr('data-error-target'));

      if (errorTarget.length > 0) {
        errorTarget.addClass(errorClass);
      } else {
        $element.addClass(errorClass);
      }
    },
    unhighlight: (element, errorClass) => {
      const $element = $(element);
      const errorTarget = $($element.attr('data-error-target'));

      if (errorTarget.length > 0) {
        errorTarget.removeClass(errorClass);
      } else {
        $element.removeClass(errorClass);
      }
    }
  });

  $.validator.addMethod(
    'mobileTH',
    function mobileTH(value, element) {
      if (!value) {
        return true;
      }
      return (
        $.validator.methods.digits.call(this, value, element) &&
        validator.isMobilePhone(value, 'th-TH')
      );
    },
    'คุณกรอกเบอร์โทรศัพท์มือถือไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
  );

  $.validator.addMethod(
    'phoneTH',
    function phoneTH(value, element) {
      if (!value) {
        return true;
      }
      return (
        $.validator.methods.digits.call(this, value, element) &&
        value[0] === '0' &&
        value.length >= 9 &&
        value.length <= 10
      );
    },
    'คุณใส่หมายเลขโทรศัพท์ไม่ถูกต้อง'
  );

  const nonTHRegex = /[^ก-๙|\s]/;

  $.validator.addMethod(
    'th',
    function mobileTH(value) {
      if (!value) {
        return true;
      }

      return !nonTHRegex.test(value);
    },
    'กรุณากรอกค่าเป็นภาษาไทยเท่านั้น'
  );
})();
