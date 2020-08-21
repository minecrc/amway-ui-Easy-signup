/* global $ */
(() => {
  const menuId = 'cart-menu';

  const header = $('.mz-main-layout__header');

  const mainLayout = $('.mz-main-layout');
  const cartLayout = $('.mz-cart-layout');
  const summary = $('.mz-cart-layout__summary');
  const panel = $('.mz-cart-layout__panel');
  const mobilePanel = cartLayout.find('.mz-cart-layout__mobile-panel');
  const toggler = cartLayout.find('.mz-cart-layout__detail-toggler');
  const detail = cartLayout.find('.mz-cart-layout__detail');

  function reserveBottomArea() {
    mainLayout.css(
      'paddingBottom',
      window.isDesktop() ? 0 : mobilePanel.outerHeight() + toggler.outerHeight()
    );
  }

  function initCartLayout() {
    reserveBottomArea();

    const dimLayer = $('#cart-dim-layer');

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
      } else {
        summary.css('transform', 'none');
      }
    });

    let float = false;

    document.addEventListener('scroll', () => {
      if (!window.isDesktop()) return;

      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      const headerHeight = header.outerHeight();

      const panelTop = panel.offset().top;
      const panelHeight = panel.outerHeight();

      const panelLastChild = panel.children().last();
      const panelContentHeight =
        panelLastChild.offset().top + panelLastChild.outerHeight() - panelTop;

      const summaryHeight = summary.outerHeight();

      const GAP = 8;
      const SECTION_GAP = 24;

      let translateY = scrollTop - panelTop + headerHeight + GAP;

      const hasEnoughSpace =
        summaryHeight + SECTION_GAP < panelHeight - panelContentHeight;

      const reachedTop = scrollTop > panelTop + summaryHeight;

      // Make sure it won't overlap other components in panel
      if (translateY < panelContentHeight + SECTION_GAP) {
        translateY = panelContentHeight + SECTION_GAP;
      }

      // Limit follow to the parent's height
      if (translateY + summaryHeight > panelHeight) {
        translateY = panelHeight - summaryHeight;
      }

      if (float) {
        // check if initial space is inside the screen
        float = scrollTop > panelTop;
      } else if (reachedTop && hasEnoughSpace) {
        // check if target space is inside the screen
        float =
          translateY + panelTop + summaryHeight < scrollTop + windowHeight;
      }

      summary.css(
        'transform',
        float ? `translate3d(0, ${translateY}px, 0)` : 'none'
      );
    });
  }

  initCartLayout();
})();
