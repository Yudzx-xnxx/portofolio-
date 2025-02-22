document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.style.right = navMenu.style.right === "0px" ? "-100%" : "0px";
    });

    // Animasi Fade-In Saat Scroll
    const fadeElements = document.querySelectorAll(".fade-in");

    const scrollHandler = () => {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler(); // Trigger awal saat load
});
