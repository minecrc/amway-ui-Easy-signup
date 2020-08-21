/* global $ */
(() => {
  const couponSection = $('.mz-coupon-section');
  const coupons = couponSection.find('.mz-coupon__input');

  function initCouponSection() {
    if (couponSection.attr('data-init')) return;

    couponSection.attr('data-init', true);

    function linkCoupons() {
      const coupon = $(this);

      const id = coupon.attr('id');
      const amount = coupon.attr('data-value');
      const couponId = coupon.attr('data-id');

      coupon.on('click', () => {
        function setChecked(checked = false) {
          const sameCouponId = id.startsWith('coupon')
            ? `preview-${id}`
            : `${id.substring('preview-'.length)}`;
          const sameCoupon = $(`#${sameCouponId}`);

          coupon.prop('checked', checked);
          if (sameCoupon) sameCoupon.prop('checked', checked);
        }

        const checked = coupon.is(':checked');

        setChecked(checked);

        if (checked) {
          $.createDiscountRow({ id: couponId, amount }, setChecked);
        } else {
          $(`#${couponId}-discount-row`).trigger('discount:remove');
        }
      });
    }

    coupons.each(linkCoupons);
  }

  initCouponSection();
})();
