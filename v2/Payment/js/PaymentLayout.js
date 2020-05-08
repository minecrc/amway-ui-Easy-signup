/* global $ */
(() => {
  const menuId = 'cart-menu';

  const paymentLayout = $('.mz-payment-layout');

  const mobilePanel = paymentLayout.find('.mz-payment-layout__mobile-panel');
  const toggler = paymentLayout.find('.mz-payment-layout__detail-toggler');
  const detail = paymentLayout.find('.mz-payment-layout__detail');

  function reserveBottomArea() {
    paymentLayout.css(
      'paddingBottom',
      window.isDesktop() ? 0 : mobilePanel.outerHeight() + toggler.outerHeight()
    );
  }

  function initPaymentLayout() {
    if (paymentLayout.attr('data-init')) return;

    paymentLayout.attr('data-init', true);

    reserveBottomArea();

    const dimLayer = $('#payment-dim-layer');

    function closeMenu() {
      detail.removeClass('--active');
      dimLayer.trigger('dim-layer:remove', menuId);
      mobilePanel.find('input').blur();
    }

    function openMenu() {
      detail.addClass('--active');
      dimLayer.trigger('dim-layer:push', menuId);
      mobilePanel.find('input').focus(() => {
        document.removeEventListener('scroll', closeMenu);
        setTimeout(() => {
          document.addEventListener('scroll', closeMenu);
        }, 1000);
      });
    }

    document.addEventListener('scroll', closeMenu);

    toggler.on('click', () => {
      if (detail.hasClass('--active')) closeMenu();
      else openMenu();
    });

    dimLayer.on('click', closeMenu);

    $(window).resize(() => {
      reserveBottomArea();

      if (window.isDesktop()) {
        closeMenu();
      }
    });
  }

  initPaymentLayout();
})();
