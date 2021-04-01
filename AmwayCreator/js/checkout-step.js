(() => {
    function nextStepCheckout() {
        const BtnNext = $(this);
        const nextToData = BtnNext.attr('data-nextNumTo');
        const nextContentToData = BtnNext.attr('data-nextContentTo');
        const titleText = $('#checkout-title-text');
        const stepNumActive = $(`.checkout-progress-trackers-number[data-trackNumber=${nextToData}]`);
        const stepNumActiveTitleData = $(`.checkout-progress-trackers-number[data-trackNumber=${nextToData}]`).attr('data-titleTrack');
        const contentAll = $(`.checkout-progress-trackers-content-box`);
        const contentActive = $(`.checkout-progress-trackers-content-box[data-Content=${nextContentToData}]`);
        BtnNext.on('click', () => {
            contentAll.removeClass('--selected');
            stepNumActive.addClass('active');
            for (var i = 1; i < nextToData; i++) {
                $(`.checkout-progress-trackers-number[data-trackNumber=${i}]`).addClass('success');
                $(`.checkout-progress-trackers-line[data-trackNumber=${i}]`).addClass('pass');
            }
            titleText.text(stepNumActiveTitleData)
            contentActive.addClass('--selected');
            $(window).scrollTop(0);

        })


    }
    const BtnNextCheckout = $('.next-step-checkout');
    BtnNextCheckout.each(nextStepCheckout);

    // Expose `nextStepCheckout` to $ for reuses
    $.nextStepCheckout = nextStepCheckout;
})();
(() => {
    var date = document.getElementById('birthdayDate');
    date.oninput = checkDate;
    var dateEdit = document.getElementById('birthdayDateEdit');
    dateEdit.oninput = checkDate;

    // var phonenumber = document.getElementById('phonenumber');
    // phonenumber.oninput = checkNumber;
    $('.digit-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));

                if (prev.length) {
                    $(prev).select();
                }
            } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));

                if (next.length) {
                    $(next).select();
                } else {
                    if (parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });

    function clickEvent(first, last) {
        if (first.value.length) {
            document.getElementById(last).focus();
        }
    }

    function checkValue(str, max) {
        if (str.charAt(0) !== '0' || str == '00') {
            var num = parseInt(str);
            if (isNaN(num) || num <= 0 || num > max) num = 1;
            str = num > parseInt(max.toString().charAt(0)) &&
                num.toString().length == 1 ? '0' + num : num.toString();
        };
        return str;
    };

    function checkDate(e) {
        e.target.type = 'text';
        var input = e.target.value;

        if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
        var values = input.split('/').map(function(v) {
            return v.replace(/\D/g, '')
        });
        if (values[0]) values[0] = checkValue(values[0], 12);
        if (values[1]) values[1] = checkValue(values[1], 31);
        var output = values.map(function(v, i) {
            return v.length == 2 && i < 2 ? v + ' / ' : v;
        });
        e.target.value = output.join('').substr(0, 14);
    };

    function checkNumber(e) {
        e.target.type = 'text';
        var input = e.target.value;
        if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
        var values = input.split('-').map(function(v) {
            return v.replace(/\D/g, '')
        });

        var output = values.map(function(v, i) {
            return v.length == 2 && i < 2 ? v + ' - ' : v;
        });
        e.target.value = output.join('').substr(0, 16);
    };
})();
(() => {
    $("#checkout-box-upload-input").change(function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });

    function imageIsLoaded(e) {
        $('#checkout-box-upload-img').attr('src', e.target.result);
    };
})();

function openPolicy(id) {
    const modal = $('#' + id);
    modal.addClass('active');
    $('body').addClass('modal-show');
}

function closePolicy(id) {
    const modal = $('#' + id);
    modal.removeClass('active');
    $('body').removeClass('modal-show');
}
(() => {
    function bgClosePolicy() {
        const bgPolicy = $(this);
        const modal = $('.amway-policy-modal');
        bgPolicy.on('click', () => {
            modal.removeClass('active');
            $('body').removeClass('modal-show');
        })

    }

    const bgPolicy = $('.amway-policy-modal .bg-modal');
    bgPolicy.each(bgClosePolicy);

    // Expose `bgClosePolicy` to $ for reuses
    $.bgClosePolicy = bgClosePolicy;
})();
(() => {
    function ShowAllPd() {
        const btnShow = $(this);
        const pdHide = $('.checkout-order-pic-img.orderHide');
        btnShow.on('click', () => {
            btnShow.addClass('show');
            pdHide.removeClass('orderHide');
        })

    }

    const btnShow = $('.checkout-order-pic-img-action');
    btnShow.each(ShowAllPd);

    // Expose `ShowAllPd to $ for reuses
    $.ShowAllPd = ShowAllPd;
})();