/* global $ */
(() => {
  function initDimLayer() {
    const dimLayer = $(this);

    dimLayer.on('dim-layer:push', (e, menuId) => {
      const openedMenu = (dimLayer.attr('data-opened-menu') || '').split(',');

      dimLayer.attr(
        'data-opened-menu',
        [...openedMenu.filter(menu => !!menu), menuId].join(',')
      );
    });

    dimLayer.on('dim-layer:remove', (e, menuId) => {
      dimLayer.attr(
        'data-opened-menu',
        (dimLayer.attr('data-opened-menu') || '')
          .split(',')
          .filter(menu => menu !== menuId)
          .join(',') || null
      );
    });
  }

  const dimLayers = $('.mz-dim-layer');

  dimLayers.each(initDimLayer);
})();
