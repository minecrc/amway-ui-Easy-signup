/* global $, moment */
(() => {
    // Generate year options backwardly to the past 100 years.
    function generateYearOptions() {
        const yearDropdownButton = $('#year');
        const now = new Date();
        const previousEighteenYears = now.getFullYear() - 18;
        const years = Array(50 - 18) // Ranged between age of 18 to 50
            .fill()
            .map((_, i) => previousEighteenYears - i);

        const yearsWrapper = yearDropdownButton.next(
            'ul.oa-dropdown__menu.dropdown-menu'
        );
        years.forEach(year => {
            const li = $('<li></li>');
            li.addClass('oa-dropdown__option');
            li.attr('data-value', year);
            li.text(year + 543);
            li.appendTo(yearsWrapper);
        });

        const yearDropdown = yearDropdownButton.parent('.oa-dropdown');
        yearDropdown.removeAttr('data-init');
        $.initDropdown.call(yearDropdown.get(0));
    }

    function initBirthdayInput() {
        let day;
        let month;
        let year;

        const birthDayInput = $('input[name="birthday"]');

        function updateBirthday() {
            if (day && month && year) {
                birthDayInput.attr('value', `${year}-${month}-${day}`);
            }
        }

        $('#day').on('change', (e, label, value) => {
            day = value;
            updateBirthday();
            console.log(birthDayInput);
        });
        $('#month').on('change', (e, label, value) => {
            month = value;
            updateBirthday();
            console.log(birthDayInput);
        });
        $('#year').on('change', (e, label, value) => {
            year = value;
            updateBirthday();
            console.log(birthDayInput);
        });
    }

    generateYearOptions();
    initBirthdayInput();

    $.validator.addMethod(
        'validDate',
        function validDate(value) {
            if (!value) {
                return true;
            }

            const date = moment(value, 'YYYY-MM-DD');
            return date.isValid();
        },
        'คุณกรอกวันที่ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
    );

    const form = $('#social-forgetpass');
    form.validate({
        rules: {
            birthday: {
                required: true,
                validDate: true
            }
        }
    });
})();