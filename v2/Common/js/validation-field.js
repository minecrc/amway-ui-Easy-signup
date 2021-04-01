(() => {
    function AlphaOnlyName() {
        $('#First-name-Eng').keypress(function(e) { // Accept only alpha numerics, no special characters         
            var regex = new RegExp("^[a-zA-Z \\- \\.]+$"); //A-z and .,-   
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                $('#first-name-eng-error').html("");
                return true;
            } else {
                $('#first-name-eng-error').css('background', '#ff000017');
                $('#first-name-eng-error').html("please use English Character");
            }
            e.preventDefault();
            return false;

        });

        $('#Last-name-Eng').keypress(function(e) {
            var regex = new RegExp("^[a-zA-Z \\- \\.]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                $('#last-name-eng-error').html("");
                return true;
            } else {
                $('#last-name-eng-error').css('background', '#ff000017');
                $('#last-name-eng-error').html("please use English Character");
            }
            e.preventDefault();
            return false;
        });
    }
    AlphaOnlyName();
})();