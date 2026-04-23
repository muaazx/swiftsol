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


// ===============================
// HERO VIDEO SLIDER
// ===============================
const slides = document.querySelectorAll(".video-slide");
const dots = document.querySelectorAll(".dot");
const heroPrev = document.getElementById("prev");
const heroNext = document.getElementById("next");

let heroIndex = 0;

function showHeroSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    heroIndex = (i + slides.length) % slides.length;

    slides[heroIndex].classList.add("active");
    dots[heroIndex].classList.add("active");
}

// Auto slide
setInterval(() => showHeroSlide(heroIndex + 1), 5000);

// Controls
heroNext.onclick = () => showHeroSlide(heroIndex + 1);
heroPrev.onclick = () => showHeroSlide(heroIndex - 1);

dots.forEach((dot, i) => {
    dot.onclick = () => showHeroSlide(i);
});


// ===============================
// SECTION 1 CARD SLIDER
// ===============================
const track = document.querySelector(".section-1-track");
const cards = document.querySelectorAll(".section-1-card");
const secNext = document.querySelector(".section-1-arrow.right");
const secPrev = document.querySelector(".section-1-arrow.left");

let secIndex = 0;

// Get card width + gap
function getCardWidth() {
    if (!cards.length) return 0;

    const card = cards[0];
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 0;

    return card.offsetWidth + gap;
}

// Cards per view
function perView() {
    return window.innerWidth <= 768 ? 1 : 3;
}

// Max index
function maxIndex() {
    return cards.length - perView();
}

// Update slider
function updateSlider() {
    if (!track) return;

    const move = secIndex * getCardWidth();
    track.style.transform = `translateX(-${move}px)`;
}

// Next
if (secNext) {
    secNext.onclick = () => {
        secIndex++;
        if (secIndex > maxIndex()) secIndex = 0;
        updateSlider();
    };
}

// Prev
if (secPrev) {
    secPrev.onclick = () => {
        secIndex--;
        if (secIndex < 0) secIndex = maxIndex();
        updateSlider();
    };
}

// Auto slide
if (track) {
    setInterval(() => {
        secIndex++;
        if (secIndex > maxIndex()) secIndex = 0;
        updateSlider();
    }, 3000);
}

// Reset on resize
window.addEventListener("resize", () => {
    secIndex = 0;
    updateSlider();
});

// Init
window.onload = updateSlider;


















document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".index-tabs-tab");
    const contents = document.querySelectorAll(".index-tabs-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            // remove active
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // add active
            tab.classList.add("active");

            const target = document.getElementById(tab.dataset.tab);
            if (target) target.classList.add("active");
        });
    });

});














const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounting = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
            const increment = target / speed;

            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count).toLocaleString() + "+";
                requestAnimationFrame(update);
            } else {
                counter.innerText = target.toLocaleString() + "+";
            }
        };

        update();
    });
};

// TRIGGER ON SCROLL
let started = false;

window.addEventListener("scroll", () => {
    const section = document.querySelector(".counter-section");
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !started) {
        startCounting();
        started = true;
    }
});















const careers_section = document.querySelector(".career-slider");

const careers_slidesContainer = careers_section.querySelector(".slides");
const careers_slides = careers_section.querySelectorAll(".slide");
const careers_dots = careers_section.querySelectorAll(".dot");
const careers_progress = careers_section.querySelector(".progress");

let careers_index = 0;
let careers_interval;

// UPDATE SLIDE
function careers_updateSlider(i) {
    careers_index = (i + careers_slides.length) % careers_slides.length;

    careers_slidesContainer.style.transform = `translateX(-${careers_index * 100}%)`;

    careers_dots.forEach(d => d.classList.remove("active"));
    careers_dots[careers_index].classList.add("active");

    careers_resetProgress();
}

// AUTO SLIDE
function careers_startAuto() {
    careers_interval = setInterval(() => {
        careers_updateSlider(careers_index + 1);
    }, 4000);

    careers_animateProgress();
}

// PROGRESS
function careers_animateProgress() {
    careers_progress.style.transition = "none";
    careers_progress.style.width = "0%";

    setTimeout(() => {
        careers_progress.style.transition = "4s linear";
        careers_progress.style.width = "100%";
    }, 50);
}

function careers_resetProgress() {
    clearInterval(careers_interval);
    careers_startAuto();
}

// DOT CLICK
careers_dots.forEach((dot, i) => {
    dot.addEventListener("click", () => careers_updateSlider(i));
});

// SWIPE
let careers_startX = 0;

careers_slidesContainer.addEventListener("touchstart", e => {
    careers_startX = e.touches[0].clientX;
});

careers_slidesContainer.addEventListener("touchend", e => {
    let careers_endX = e.changedTouches[0].clientX;

    if (careers_startX - careers_endX > 50) careers_updateSlider(careers_index + 1);
    if (careers_endX - careers_startX > 50) careers_updateSlider(careers_index - 1);
});

// INIT
careers_startAuto();
























//section4 123


// subtle entrance animation
const cards4 = document.querySelectorAll(".section-4-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

cards4.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.5s ease";
    observer.observe(card);
});













const swiftCare_elements = document.querySelectorAll(".swiftCare-fade-up");

const swiftCare_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

swiftCare_elements.forEach(el => {
    swiftCare_observer.observe(el);
});