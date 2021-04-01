/* global $ */
(() => {
  const mockPromoCodes = {
    AMWAYABO50: 50,
    AMWAYABO100: 100
  };

  $.getPromoCodeValue = function getMockPromoCodeValue(title) {
    return mockPromoCodes[title];
  };

  Object.keys(mockPromoCodes).forEach(code => {
    $.createDiscountRow(code, mockPromoCodes[code]);
  });
})();
