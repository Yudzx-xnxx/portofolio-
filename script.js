document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });
});
