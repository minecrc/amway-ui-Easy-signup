function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            vanilla.bind({
                url: e.target.result,
            }).then(function() {
                console.log('jQuery bind complete');
            });

        }

        reader.readAsDataURL(input.files[0]);
    } else {
        swal("Sorry - you're browser doesn't support the FileReader API");
    }
}
var el = document.getElementById('profile-cropper');
var vanilla = new Croppie(el, {
    viewport: {
        width: 250,
        height: 250,
        type: 'circle'
    },

    showZoomer: true,
    enableOrientation: true
});

$('.cr-slider').attr('class', 'cr-slider-mod');
vanilla.bind({
    url: '../../image/user/user.svg',
});
$('#upload').on('change', function() {
    readFile(this);
});


$('.btn-rotate').on('click', function(ev) {
    vanilla.rotate(parseInt($(this).data('deg')));
});

window.addEventListener("load", function() {
    $("#editProfileImg").addClass('show ');
    console.log($(".cr-slider-mod").attr('aria-valuenow'))
    Zoomit()

    function Zoomit() {
        console.log($(".cr-slider-mod").attr('aria-valuenow'))
        var slider = $(".cr-slider-mod");
        var val = ($(".cr-slider-mod").attr('aria-valuenow') - slider.attr('min')) / (slider.attr('max') - slider.attr('min'));
        var percent = val * 100;

        slider.css('background-image',
            '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + percent + '%, #2C2C2C), ' +
            'color-stop(' + percent + '%, #9EA0A3)' +
            ')');

        slider.css('background-image',
            '-moz-linear-gradient(left center, #2C2C2C 0%, #2C2C2C ' + percent + '%, #9EA0A3 ' + percent + '%, #9EA0A3 100%)');
    }


});


$(".cr-slider-mod").mousemove(function(e) {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    var percent = val * 100;

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, #2C2C2C), ' +
        'color-stop(' + percent + '%, #9EA0A3)' +
        ')');

    $(this).css('background-image',
        '-moz-linear-gradient(left center, #2C2C2C 0%, #2C2C2C ' + percent + '%, #9EA0A3 ' + percent + '%, #9EA0A3 100%)');



});

$(".cr-slider-mod").bind('touchmove', function(e) {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    var percent = val * 100;

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, #2C2C2C), ' +
        'color-stop(' + percent + '%, #9EA0A3)' +
        ')');

    $(this).css('background-image',
        '-moz-linear-gradient(left center, #2C2C2C 0%, #2C2C2C ' + percent + '%, #9EA0A3 ' + percent + '%, #9EA0A3 100%)');

})
$(".cr-slider-mod").on('change', function(e) {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    var percent = val * 100;

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, #2C2C2C), ' +
        'color-stop(' + percent + '%, #9EA0A3)' +
        ')');

    $(this).css('background-image',
        '-moz-linear-gradient(left center, #2C2C2C 0%, #2C2C2C ' + percent + '%, #9EA0A3 ' + percent + '%, #9EA0A3 100%)');

})