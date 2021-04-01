/* global $ */
(() => {
    const dropdown = $('.mz-dropdown');

    dropdown.on('change', (e, label, value) => {
        const targetId = e.target.id;
        const inputMod = $(`#${targetId.replace('-dropdown', '')}`);
        inputMod.attr('value', value);
    });
})();