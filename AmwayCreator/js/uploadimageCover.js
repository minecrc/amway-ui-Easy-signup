var el = document.getElementById('imgPreview');


var vanilla = new Croppie(el, {
    viewport: { width: '100%', height: 312 },
    boundary: { width: '100%', height: 312 },
    showZoomer: true,
    enableOrientation: true
});

vanilla.bind({
    url: '../../image/creator/testimg-corver.png',

});



function filePreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            // $('#imgPreview + img').remove();
            // $('#imgPreview').after('<img id="img_f_cover" src="'+e.target.result+'" class="pic-view" />');
            vanilla.bind({
                url: e.target.result,
                // orientation: 4
            });
        };
        reader.readAsDataURL(input.files[0]);
        // $('.img-preview').show();


    } else {
        // $('#imgPreview + img').remove();
        $('#imgPreview').hide();
    }

}
$('.btn-rotate').on('click', function(ev) {
    vanilla.rotate(parseInt($(this).data('deg')));
});
var angle = 0;
var zoomdata = 1;

function relateimage() {
    angle += 90;

    document.getElementById("img_f_cover").style.transform = "rotate(" + angle + "deg) scale(" + zoomdata + ")";
}

function zoomImage() {
    var value = $('#myRange').val();
    zoomdata = value;
    document.getElementById("img_f_cover").style.transform = "rotate(" + angle + "deg) scale(" + zoomdata + ")";
}


$("#filecorver-file").change(function() {
    // Image preview
    filePreview(this);
});