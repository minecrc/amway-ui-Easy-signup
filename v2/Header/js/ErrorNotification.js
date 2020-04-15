/* global $ */
(() => {
  const errorNotification = $('.mz-error-notification');
  const duration = errorNotification.data('duration');
  if (Number.isNaN(+duration)) {
    return;
  }

  setTimeout(() => {
    errorNotification.alert('close');
  }, duration);
})();
