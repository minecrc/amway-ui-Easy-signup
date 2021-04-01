for (const dropdown of document.querySelectorAll(".amway-dd-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.amway-dd-select').classList.toggle('open');
    })
}
window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.amway-dd-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});
for (const option of document.querySelectorAll(".amway-dd-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.amway-dd-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.amway-dd-select').querySelector('.amway-dd-select__trigger span').textContent = this.textContent;
        }
    })
}