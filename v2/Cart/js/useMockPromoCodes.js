/* global $ */
(() => {
    const mockPromoCodes = {
        AMWAYABO50: 50,
        AMWAYABO100: 100,
        AMWAYABO200: 200,
    };

    $.getPromoCodeAmount = function getMockPromoCodeValue(title) {
        return mockPromoCodes[title];
    };

    Object.keys(mockPromoCodes).forEach(code => {
        $.createDiscountRow({ id: code, amount: mockPromoCodes[code] });
    });
})();