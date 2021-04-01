/* global $ */
(() => {
  const menuId = 'cart-menu';

  const header = $('.mz-main-layout__header');

  const cartLayout = $('.mz-cart-layout');
  const summary = $('.mz-cart-layout__summary');
  const panel = $('.mz-cart-layout__panel');
  const panelParent = panel.parent('form.mz-cart-layout__form');
  const mobilePanel = cartLayout.find('.mz-cart-layout__mobile-panel');
  const toggler = cartLayout.find('.mz-cart-layout__detail-toggler');
  const detail = cartLayout.find('.mz-cart-layout__detail');

  function reserveBottomArea() {
    cartLayout.css(
      'paddingBottom',
      window.isDesktop() ? 0 : mobilePanel.outerHeight() + toggler.outerHeight()
    );
  }

  function initCartLayout() {
    if (cartLayout.attr('data-init')) return;

    cartLayout.attr('data-init', true);

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

    document.addEventListener('scroll', () => {
      if (!window.isDesktop()) return;

      const scrollTop = $(window).scrollTop();
      const summaryHeight = summary.outerHeight();

      const mobilePanelTop = mobilePanel.offset().top;
      const mobilePanelBottom = mobilePanelTop + mobilePanel.outerHeight();

      const panelLastChild = panel.children().last();
      const panelBottom =
        panelLastChild.offset().top + panelLastChild.outerHeight();

      const float = scrollTop > mobilePanelBottom;

      const GAP = 8;

      let translateY =
        scrollTop -
        mobilePanelBottom +
        summaryHeight +
        header.outerHeight() +
        GAP;

      const detailBottom = detail.offset().top + detail.outerHeight();

      if (translateY + detailBottom < panelBottom) {
        const gap = 4; // summary has own margin top 4px;
        translateY = panelBottom - detailBottom + gap;
      }

      const newSummaryBottom = translateY + detailBottom + summaryHeight;
      const panelParentBottom =
        panelParent.offset().top + panelParent.outerHeight();
      const bottomDistance = panelParentBottom - newSummaryBottom;
      // Limit follow to the parent's height
      if (bottomDistance <= 0) {
        translateY += bottomDistance;
      }

      summary.css(
        'transform',
        float ? `translate3d(0, ${translateY}px, 0)` : 'none'
      );
    });
  }

  initCartLayout();
})();
