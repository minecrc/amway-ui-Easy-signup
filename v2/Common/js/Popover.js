/* global $ */
(() => {
  const dimLayer = $('.mz-dim-layer').last();
  function initPopover() {
    const popover = $(this);
    const id = popover.attr('id');
    popover.on('click', () => {
      popover.popover('show');
    });

    const close = () => {
      popover.popover('hide');
    };
    popover.on('show.bs.popover', () => {
      dimLayer.trigger('dim-layer:push', id);
      dimLayer.on('click', close);
    });
    popover.on('shown.bs.popover', () => {
      popover
        .nextAll('.popover')
        .find('.mz-popover__close-button')
        .on('click', close);
    });
    popover.on('hide.bs.popover', () => {
      dimLayer.off('click', close);
      dimLayer.trigger('dim-layer:remove', id);
    });
  }
  const popovers = $('.mz-popover');
  popovers.popover({ trigger: 'manual', html: true });
  popovers.each(initPopover);
})();
