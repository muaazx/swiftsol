










const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const el = entry.target;
                const target = +el.getAttribute("data-target");
                let count = 0;

                const update = () => {
                    const increment = target / 100;

                    if (count < target) {
                        count += increment;
                        el.innerText = Math.floor(count);
                        requestAnimationFrame(update);
                    } else {
                        el.innerText = target + "+";
                    }
                };

                update();
                counterObserver.unobserve(el);
            }
        });
}, {threshold: 0.5 });

counters.forEach(counter => {
        counterObserver.observe(counter);
});




































//section1 123

const track = document.querySelector(".section-1-track");
const cards = document.querySelectorAll(".section-1-card");
const next = document.querySelector(".section-1-arrow.right");
const prev = document.querySelector(".section-1-arrow.left");

let index = 0;

/* GET CARD WIDTH PROPERLY */
function getCardWidth() {
    const card = cards[0];
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 0;
    return card.offsetWidth + gap;
}

/* HOW MANY VISIBLE */
function perView() {
    return window.innerWidth <= 768 ? 1 : 3;
}

/* MAX INDEX */
function maxIndex() {
    return cards.length - perView();
}

/* UPDATE */
function updateSlider() {
    const move = index * getCardWidth();
    track.style.transform = `translateX(-${move}px)`;
}

/* NEXT */
next.onclick = () => {
    index++;
    if (index > maxIndex()) index = 0;
    updateSlider();
};

/* PREV */
prev.onclick = () => {
    index--;
    if (index < 0) index = maxIndex();
    updateSlider();
};

/* AUTO */
setInterval(() => {
    index++;
    if (index > maxIndex()) index = 0;
    updateSlider();
}, 3000);

/* RESET ON RESIZE */
window.addEventListener("resize", () => {
    index = 0;
    updateSlider();
});

/* INIT */
window.onload = updateSlider;



























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





