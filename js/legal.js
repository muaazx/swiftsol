// ===============================
// NAVBAR - DESKTOP DROPDOWN
// ===============================
const navItems = document.querySelectorAll(".nav-section-item");

navItems.forEach(item => {
    const btn = item.querySelector(".nav-section-link");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        navItems.forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
});


// ===============================
// MOBILE MENU
// ===============================
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
const navClose = document.getElementById("navClose");

navToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
});

navClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
});


// ===============================
// MOBILE DROPDOWN (SMOOTH HEIGHT)
// ===============================
document.querySelectorAll(".mobile-toggle").forEach(btn => {
    btn.addEventListener("click", () => {

        const mega = btn.nextElementSibling;

        document.querySelectorAll(".mobile-mega").forEach(m => {
            if (m !== mega) m.style.maxHeight = null;
        });

        if (mega.style.maxHeight) {
            mega.style.maxHeight = null;
        } else {
            mega.style.maxHeight = mega.scrollHeight + "px";
        }
    });
});


// ===============================
// RESET ON RESIZE
// ===============================
window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
});





