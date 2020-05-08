/* global $, CardValidator */
(() => {
  function unique(array) {
    return [...new Set(array)];
  }

  const { creditCardType } = CardValidator;
  const { getTypeInfo } = creditCardType;

  const types = Object.values(creditCardType.types);

  // ------------------------
  // Type Info Example
  // ------------------------
  // visa: {
  //   niceType: 'Visa',
  //   type: 'visa',
  //   patterns: [
  //     4
  //   ],
  //   gaps: [4, 8, 12],
  //   lengths: [16, 18, 19],
  //   code: {
  //     name: 'CVV',
  //     size: 3
  //   }
  // },
  // mastercard: {
  //   niceType: 'Mastercard',
  //   type: 'mastercard',
  //   patterns: [
  //     [51, 55],
  //     [2221, 2229],
  //     [223, 229],
  //     [23, 26],
  //     [270, 271],
  //     2720
  //   ],
  //   gaps: [4, 8, 12],
  //   lengths: [16],
  //   code: {
  //     name: 'CVC',
  //     size: 3
  //   }
  // },

  $.supportedCardTypes = [
    creditCardType.types.VISA,
    creditCardType.types.MASTERCARD
  ];

  $.defaultCard = getTypeInfo($.supportedCardTypes[0]);

  $.possibleCardLengths = unique(
    types.reduce((acc, type) => [...acc, ...getTypeInfo(type).lengths], [])
  );

  $.minCardLength = Math.min(...$.possibleCardLengths);
  $.maxCardLength = Math.max(...$.possibleCardLengths);

  $.maxGap = Math.max(
    ...types.reduce((acc, type) => [...acc, getTypeInfo(type).gaps.length], [])
  );
})();
