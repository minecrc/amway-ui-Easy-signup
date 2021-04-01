document.getElementById('uploadCover').addEventListener('change', readURL, true);

function readURL() {
    var file = document.getElementById("uploadCover").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        document.getElementById('coverPic').style.backgroundImage = "url(" + reader.result + ")";
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {}
}