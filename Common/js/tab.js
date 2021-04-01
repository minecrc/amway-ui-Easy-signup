function tabAction(id, className) {
    var Tab = document.getElementById(id);
    var Tabbtns = Tab.getElementsByClassName(className);
    for (var i = 0; i < Tabbtns.length; i++) {
        Tabbtns[i].addEventListener("click", function() {
            $(Tabbtns).removeClass('active');
            this.className += " active";
        });
    }
}