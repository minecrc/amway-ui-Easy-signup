(() => {
    const GAP = 24;
    const MAX_MENU_HEIGHT = 350;

    function calculateMenuPositionAmway(anchor, menu, { forceBottom } = {}) {
        const topRestrictHeight = $("[data-dropdown-top-restrict='true']").height();
        const bottomRestrictHeight =
            $("[data-dropdown-bottom-restrict='true']").height() || 0;

        const top = anchor.offset().top - $(window).scrollTop();
        const bottom = top + anchor.outerHeight();
        const windowHeight = window.innerHeight;
        const bottomArea = windowHeight - bottom;

        if (bottomArea > 240 + bottomRestrictHeight || forceBottom) {
            console.log(bottomArea - GAP - bottomRestrictHeight)
            return {
                top: bottom + 8,
                bottom: 'auto',
                maxHeight: bottomArea - GAP - bottomRestrictHeight
            };
        }

        return {

            top: 'auto',
            bottom: windowHeight - top + 8,
            maxHeight: top - GAP - topRestrictHeight
        };
    }

    function placeDropdownMenuAmway(anchor, menu, menuList) {
        menu.css('width', anchor.outerWidth());
        menu.css('max-width', anchor.outerWidth());
        menu.css('left', anchor.offset().left);

        const { top, bottom, maxHeight } = calculateMenuPositionAmway(anchor, menu);
        console.log($("[data-dropdown-top-restrict='true']").height())
        menu.css('top', top);
        menu.css('bottom', bottom);

        menu.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT));
        menuList.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT) - 16)


    }

    function initDropdownAmway() {
        const dropdown = $(this);

        if (dropdown.attr('data-init')) return;
        dropdown.attr('data-init', true);

        const button = dropdown.find('.amway-dropdown-btn');
        const buttonText = button.find('.amway-dropdown-menu-list-text');
        const options = dropdown.find('.amway-dropdown-menu-list');
        const dropdownMenu = dropdown.find('.amway-dropdown-menu-area');
        const menuList = dropdown.find('.amway-dropdown-menu');
        const dropdownInput = dropdown.find('.amway-dropdown-input');
        dropdown.on('shown.bs.dropdown', () => {
            placeDropdownMenuAmway(button, dropdownMenu, menuList);

        });

        $(window).resize(() => {
            placeDropdownMenuAmway(button, dropdownMenu, menuList);

        });

        document.addEventListener('scroll', () => {
            dropdown.removeClass('open');
        });

        options.on('click', e => {
            e.preventDefault();

            const target = $(e.target);
            const option = target.hasClass('amway-dropdown-menu-list') ?
                target :
                target.closest('.amway-dropdown-menu-list');

            buttonText.html(option.html());
            buttonText.addClass('--selected');

            options.removeClass('--active');
            option.addClass('--active');
            option
                .parent()
                .siblings('button.amway-dropdown-btn')
                .trigger('change', [option.text(), option.data('value')]);
            dropdownInput.val(option.data('value'));
        });
    }
    const dropdownsAmway = $('.amway-dropdown');
    dropdownsAmway.each(initDropdownAmway);

    // Expose `initDropdownAmway` to $ for reuses
    $.placeDropdownMenuAmway = placeDropdownMenuAmway;
})();