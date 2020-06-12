/* global $, CardValidator */
(() => {
  function getNumberFromValue(value) {
    return value
      .split('-')
      .map(chunk => chunk.trim())
      .join('');
  }

  $.validator.addMethod(
    'card-type',
    function validateCardType(value) {
      if (!value) return true;

      const number = getNumberFromValue(value);
      const { card } = CardValidator.number(number);

      if (!card) return true;

      return $.supportedCardTypes.includes(card.type);
    },
    'เฉพาะ VISA และ Mastercard เท่านั้น'
  );

  $.validator.addMethod(
    'card-number',
    function validateCardNumber(value) {
      if (!value) return true;

      const number = getNumberFromValue(value);
      const { isValid } = CardValidator.number(number);

      return isValid;
    },
    'หมายเลขบัตรเครดิต/บัตรเดบิตไม่ถูกต้อง'
  );

  $.validator.addMethod(
    'card-expiry-date',
    function validateCardExpiryDate(value, element) {
      if (!value) return true;

      const { isValid, month, year } = CardValidator.expirationDate(value);

      if (isValid) {
        $(element).val(`${month.toString().padStart(2, '0')} / ${year}`);
      }

      return isValid;
    },
    'วันหมดอายุไม่ถูกต้อง'
  );

  $.validator.addMethod(
    'card-security-code',
    function validateCardSecurityCode(value, element) {
      if (!value) return true;

      const maxLength = $(element).attr('maxlength');
      const { isValid } = CardValidator.cvv(value, maxLength);

      return isValid;
    },
    'CVV ไม่ถูกต้อง'
  );
})();
