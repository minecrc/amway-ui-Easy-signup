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

(() => {
    $("#checkout-box-upload-bank").change(function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });

    function imageIsLoaded(e) {
        $('#checkout-box-upload-img-bank').attr('src', e.target.result);
        $('#popup-img-bank').attr('src', e.target.result);
        $('#bank-detail-image').attr('src', e.target.result);
        $('#img-bank').attr('src', e.target.result);
    };
})();