document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("idcard");
    const mask = new IMask(input, { mask: "0-0000-00000-00-0" });
});