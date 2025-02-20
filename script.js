document.addEventListener("DOMContentLoaded", function () {
    // Toggle Menu Titik Tiga
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });
});
