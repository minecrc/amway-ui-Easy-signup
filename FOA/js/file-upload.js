(() => {
    $("#checkout-box-upload-input").change(function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);

            $('#checkout-box-upload').addClass('hidden');
            $('#upload-file-area').removeClass('hidden');
            $('#upload-file-title').html(this.files[0].name);
        }
    });

    function imageIsLoaded(e) {
        $('#checkout-box-upload-img').attr('src', e.target.result);
    };

    $('#upload-file-delete').click(function() {
        $('#checkout-box-upload-input').val('');
        $('#checkout-box-upload').removeClass('hidden');
        $('#upload-file-area').addClass('hidden');
    });
})();

(() => {
    $("#checkout-box-upload-input-bank").change(function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);

            $('#checkout-box-upload-bank').addClass('hidden');
            $('#upload-file-bank-area').removeClass('hidden');
            $('#upload-file-bank-title').html(this.files[0].name);
        }
    });

    function imageIsLoaded(e) {
        $('#checkout-box-upload-img-bank').attr('src', e.target.result);
    };

    $('#upload-file-bank-delete').click(function() {
        $('#checkout-box-upload-input-bank').val('');
        $('#checkout-box-upload-bank').removeClass('hidden');
        $('#upload-file-bank-area').addClass('hidden');
    });
})();