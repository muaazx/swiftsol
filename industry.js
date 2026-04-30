//// DESKTOP DROPDOWN
//const items = document.querySelectorAll(".nav-section-item");

//items.forEach(item => {
//    const btn = item.querySelector(".nav-section-link");

//    if (btn) {
//        btn.addEventListener("click", (e) => {
//            e.stopPropagation();
//            items.forEach(i => i.classList.remove("active"));
//            item.classList.toggle("active");
//        });
//    }
//});

//document.addEventListener("click", () => {
//    items.forEach(i => i.classList.remove("active"));
//});

//// MOBILE
//const toggle = document.getElementById("navToggle");
//const mobileMenu = document.getElementById("mobileMenu");
//const closeBtn = document.getElementById("navClose");

//toggle.addEventListener("click", () => {
//    mobileMenu.classList.add("active");
//});

//closeBtn.addEventListener("click", () => {
//    mobileMenu.classList.remove("active");
//});

//// EXPAND MOBILE
//document.querySelectorAll(".mobile-toggle").forEach(btn => {
//    btn.addEventListener("click", () => {
//        const mega = btn.nextElementSibling;

//        const open = mega.style.display === "flex";

//        document.querySelectorAll(".mobile-mega").forEach(m => {
//            m.style.display = "none";
//        });

//        mega.style.display = open ? "none" : "flex";
//    });
//});

//// RESIZE FIX
//window.addEventListener("resize", () => {
//    if (window.innerWidth > 992) {
//        mobileMenu.classList.remove("active");
//    }
//});


//document.querySelectorAll(".mobile-toggle").forEach(btn => {
//    btn.addEventListener("click", () => {

//        const mega = btn.nextElementSibling;

//        if (!mega) return;

//        // CLOSE ALL FIRST
//        document.querySelectorAll(".mobile-mega").forEach(m => {
//            if (m !== mega) {
//                m.style.display = "none";
//            }
//        });

//        // TOGGLE CURRENT
//        if (mega.style.display === "flex") {
//            mega.style.display = "none";
//        } else {
//            mega.style.display = "flex";
//        }
//    });
//});





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





//section4 123


// subtle entrance animation
const cards4 = document.querySelectorAll(".section-4-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

cards4.forEach(card => {
    observer.observe(card);
});




//section3 123


const faqItems = document.querySelectorAll(".section-3-item");

faqItems.forEach(item => {
    const btn = item.querySelector(".section-3-question");

    btn.addEventListener("click", () => {

        // close others (accordion behavior)
        faqItems.forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        // toggle current
        item.classList.toggle("active");
    });
});





//section 2 123
const slides = document.querySelectorAll(".section-2-slide");
const dots = document.querySelectorAll(".section-2-dots span");

let current = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        current = i;
        showSlide(i);
    });
});

/* AUTO */
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 4000);









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























    const industryS2Counters = document.querySelectorAll('.counter');

const industryS2StartCounter = (counter) => {
    const industryS2Target = +counter.getAttribute('data-target');
    let industryS2Count = 0;

    const industryS2Update = () => {
        const industryS2Increment = industryS2Target / 100;

    if (industryS2Count < industryS2Target) {
        industryS2Count += industryS2Increment;
    counter.innerText = Math.ceil(industryS2Count);
    requestAnimationFrame(industryS2Update);
        } else {
        counter.innerText = industryS2Target;
        }
    };

    industryS2Update();
};

// SCROLL TRIGGER
const industryS2Observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                industryS2Counters.forEach(counter => industryS2StartCounter(counter));
                industryS2Observer.disconnect(); // run once
            }
        });
}, {threshold: 0.5 });

    industryS2Observer.observe(document.querySelector('.counter-section'));



