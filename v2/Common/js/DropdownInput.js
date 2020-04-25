/* global $ */
(() => {
    const dropdown = $('.mz-dropdown');
    console.log(dropdown);
    dropdown.on('change', (e, label, value) => {
        const targetId = e.target.id;
        console.log(targetId);
        const input = $(e.target)
            .parent()
            .siblings(`#${targetId.replace('-dropdown', '')}`);

        input.attr('value', value);
    });
})();