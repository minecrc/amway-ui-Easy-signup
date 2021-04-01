var db = [
    "312654 - Robert Shawn",
    "312655 - Shawn Robert",
    "312656 - Robert Robert",
    "312657 - Roboto font",
    "312658 - Anna Robert",
    "312659 - Cardi Robert",
    "drawCircle",
    "drawCircleMore",
    "fillLine",
    "fillCircle",
    "fillCircleMore"
];

function popupClearAndHide() {
    sponser_autocomplete_result.innerHTML = "";
    sponser_autocomplete_result.style.display = "none";
    sponser_autocomplete_result_box.style.display = "none";
    sponsor_search_input_box.classList.remove("active");
}

function updPopup() {
    if (!sponser_autocomplete.value) {
        popupClearAndHide();
        return;
    }
    var a = new RegExp("^" + sponser_autocomplete.value, "i");
    for (var x = 0, b = document.createDocumentFragment(), c = false; x < db.length; x++) {
        if (a.test(db[x])) {
            c = true;
            var d = document.createElement("div");
            d.classList.add('sponser-list-result');
            d.innerText = db[x];
            d.setAttribute("onclick", "sponser_autocomplete.value=this.innerText;sponser_autocomplete_result.innerHTML='';sponser_autocomplete_result.style.display='none';sponser_autocomplete_result_box.style.display = 'none';sponsor_search_input_box.classList.remove('active');");
            b.appendChild(d);
        }
    }
    if (c == true) {
        sponser_autocomplete_result.innerHTML = "";
        sponser_autocomplete_result.style.display = "block";
        sponser_autocomplete_result_box.style.display = "block";
        sponsor_search_input_box.classList.add("active");
        sponser_autocomplete_result.appendChild(b);
        return;
    }
    popupClearAndHide();
}

sponser_autocomplete.addEventListener("keyup", updPopup);
sponser_autocomplete.addEventListener("change", updPopup);
sponser_autocomplete.addEventListener("focus", updPopup);